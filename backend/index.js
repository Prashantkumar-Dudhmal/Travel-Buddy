const express=require('express');
const MongoConnect = require('./src/database/db');
const cors = require("cors");
const app=express();


MongoConnect();
const port=2020;
app.use(express.json());

app.use(
    cors({
      origin: "*",
    })
  );
app.use("/auth", require("./src/routes/auth_route"));

app.listen(port,()=>{
    console.log("Server Started");
});

