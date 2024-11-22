const { z } = require("zod");
const jwt = require("jsonwebtoken");
const signUpModel = require("../models/signUpModel");
const bcrypt = require("bcryptjs");
const JWT_SECRET = "PASSWORD";

const userSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" }),
});

const createUser = async (req, res) => {
    try {
        // Validate request body using Zod
        const Data = userSchema.parse(req.body);

        // Check if the user with the email exists
        const existingUser = await signUpModel.findOne({ email: Data.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                msg: "Sorry, a user with this email already exists!",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(Data.password, 10);

        // Create a new user
        const user = await signUpModel.create({
            name: Data.name,
            email: Data.email,
            password: hashedPassword, // Storing the hashed password
        });

        // Send success response
        res.status(201).send({ success: true, msg: "User created successfully!" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Validation errors
            return res.status(400).json({
                success: false,
                errors: error.errors.map((err) => err.message),
            });
        }
        console.error(error.message);
        res.status(500).send({ success: false, msg: "Internal server error" });
    }
};




const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await signUpModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, msg: "Invalid email or password" });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, msg: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error("Error during sign-in:", error);
        res.status(500).json({ success: false, msg: "Internal server error" });
    }
};

 
module.exports = {createUser,signIn};
