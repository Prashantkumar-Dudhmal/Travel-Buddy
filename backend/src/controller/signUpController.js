const { z } = require("zod");
const signUpModel = require("../models/signUpModel");

// JWT secret
const JWT_SECRET = "password";

// Zod schema for user validation
const userSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" }),
});

const createUser = async (req, res) => {
    try {
        // Validate request body using zod
        const Data = req.body;

        // Check if the user with the email exists already
        let user1 = await signUpModel.findOne({ email: Data.email });
        if (user1) {
            return res.status(400).json({
                success: false,
                msg: "Sorry, a user with this email already exists!",
            });
        }

        // Create a new user
        let user = await signUpModel.create({
            name: Data.name,
            email: Data.email,
            password: Data.password, // Storing plain text password (Not secure)
        });

        // Send success response
        res
            .status(200)
            .send({ success: true, msg: "User created successfully!" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Return validation errors
            return res.status(400).json({
                success: false,
                errors: error.errors.map((err) => err.message),
            });
        }
        console.log(error.message);
        res.status(500).send({ success: false, msg: "Internal server error" });
    }
};

module.exports = createUser;
