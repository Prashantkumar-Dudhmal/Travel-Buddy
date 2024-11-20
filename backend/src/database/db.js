const mongoose =require('mongoose')



// const MongoConnect=function(){try{
// mongoose.Connection.on("Connected",()=>{
//     console.log("connects db")
// })
// }catch(e){
//     console.log("db connection error"+e);
// }
// }
async function MongoConnect()
{
    try{const a=await mongoose.connect('mongodb://localhost:27017/TravelBuddy');
        console.log("db connected");
    }
    catch(e){
    console.log("db ...")}
}

module.exports=MongoConnect;