const express = require("express");
const ProfileModel = require('../models/profileModel');
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
  
    return res.status(200).json({ message: 'Profile updated successfully', user });
    console.log(usr);
    res.json(usr);
})

router.put("/",async(req,res)=>{
    const data = req.body;
    
    return res.status(200).json({ message: 'Profile updated successfully', user });
    console.log(usr);
    res.json(usr);
})






module.exports = router;