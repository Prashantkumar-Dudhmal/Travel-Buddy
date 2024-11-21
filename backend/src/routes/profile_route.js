const express = require("express");
const ProfileModel = require('../models/profileModel');
const profileModel = require("../models/profileModel");
const router = express.Router();

router.get("/:id",async(req,res)=>{
    const userid = req.params.id;
    let usr = await ProfileModel.findById(userid);
    console.log(usr);
    res.json(usr);
})

router.post("/:id",async(req,res)=>{
    const userid = req.params.id;
    const data = req.body;
    let usr = await ProfileModel.findById(userid);
    if (!usr) {
        return res.status(404).json({ message: 'User not found' });
      }
      // Update user profile
    usr.name = data.name;
    usr.email = data.email;

    await usr.save();
  
    return res.status(200).json({ message: 'Profile updated successfully'});
})

router.put("/",async(req,res)=>{
    const data = req.body;
    let user = await profileModel.create({
        name:data.name,
        email:data.email,
        phoneNumber:data.phoneNumber,
        /*name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
        profilePhoto: { type: String }, // URL for the uploaded photo
        rating: { type: Number, default: 5.0 }, // Average rating for user
        totalRatings: { type: Number, default: 0 }, // Total number of ratings received
        isDriver: { type: Boolean, default: false }, // True if the user is offering rides
        googleId: { type: String, unique: true, sparse: true }, // For Google login users
        createdAt: // Storing plain text password (Not secure)*/
    });
    console.log(user);
    res.json(user);
})






module.exports = router;