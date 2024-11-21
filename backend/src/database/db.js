const mongoose =require('mongoose')
async function MongoConnect()
{
    try{const a=await mongoose.connect();
        console.log("db connected");
    }
    catch(e){
    console.log("db ...")}
}

module.exports=MongoConnect;