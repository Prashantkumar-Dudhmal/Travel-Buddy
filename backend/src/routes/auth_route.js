const express = require("express");
const router = express.Router();
const  zod = require("zod");


router.get('/',(req,res)=>{
    res.json({
        msg:"Route works fine"
    })
})


router.post('/signup',(req,res)=>{
     
})





module.exports = router;
