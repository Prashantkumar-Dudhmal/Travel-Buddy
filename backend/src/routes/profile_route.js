const express = require("express");
const ProfileModel = require('../models/profileModel');
const router = express.Router();

router.get("/:id",async(req,res)=>{
    const userid = req.params.id;
    let usr = await ProfileModel.findById(userid);
    console.log(usr);
    res.json(usr);
})
/*
router.post("/:id",async(req,res)=>{
    const userid = req.params.id;
    let usr = await ProfileModel.findById(userid);
    console.log(usr);
    res.json(usr);
})*/






module.exports = router;