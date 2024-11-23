const express = require("express");
const router = express.Router();
// const { createUser } = require('../controller/signUpController')
const  zod = require("zod");
const signUpModel = require("../models/signUpModel");
const {createUser ,signIn}= require("../controller/auth_controller");
 
router.get('/',(req,res)=>{
    res.json({
        msg:"Route works fine"
    })
})


router.post('/signup',createUser);
router.post('/signin',signIn);






module.exports = router;
