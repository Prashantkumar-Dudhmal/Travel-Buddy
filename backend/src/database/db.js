const mongoose =require('mongoose')

async function MongoConnect()
{
    try{const a=await mongoose.connect('mongodb+srv://prashantkumardudhmal:Pass%40123@cohortlearning.4tw40.mongodb.net/TravelBuddy');
        console.log("db connected");
    }
    catch(e){
    console.log("db ...")}
}

module.exports=MongoConnect;