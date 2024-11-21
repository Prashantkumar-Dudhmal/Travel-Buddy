const express = require("express");
const router = express.Router();
const { createUser } = require('../controller/signUpController')
const  zod = require("zod");
const signUpModel = require("../models/signUpModel");

router.get('/',(req,res)=>{
    res.json({
        msg:"Route works fine"
    })
})


router.post('/signup',async (req,res)=>{
    try{
       const username=req.body.username;
       const password=req.body.password;
       const email=req.body.email;

       let user1 = await signUpModel.findOne({ email: Data.email });
        if (user1) {
            return res.status(400).json({
                success: false,
                msg: "Sorry, a user with this email already exists!",
            });
        }

        let user = await signUpModel.create({
            name:this.name,
            email:this.email,
            password:this.password // Storing plain text password (Not secure)
        });

        res.status(200).json({
            success:true,
            msg:"acc created"
        })
    }catch(e){
        console.log(e);
        res.json(e);
    }



})





module.exports = router;
