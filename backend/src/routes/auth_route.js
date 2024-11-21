const express = require("express");
const router = express.Router();
const { createUser } = require('../controller/signUpController')
const  zod = require("zod");


router.get('/',(req,res)=>{
    res.json({
        msg:"Route works fine"
    })
})


router.post('/signup',(req,res)=>{
     createUser;
})





module.exports = router;
