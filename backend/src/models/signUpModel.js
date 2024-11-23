const mongoose = require('mongoose');


const UserCredentials = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type:String,required:true},
    createdAt: { type: Date, default: Date.now },
  });
  const signUpModel = mongoose.model('signUpModel', UserCredentials);
  module.exports = signUpModel;