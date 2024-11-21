const express = require("express");
const router = express.Router();
const  zod = require("zod");


router.get('/',(req,res)=>{
    res.json({
        msg:"Route works fine"
    })
})





module.exports = router;
