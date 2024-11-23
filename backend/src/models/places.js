const mongoose = require("mongoose");

const placesSchema = mongoose.Schema({
    City: {type:String},
    District: {type:String},
    Latitude : {type:Number},
    Longitude: {type:Number},
    State: {type:String}
})

const places = mongoose.model("Places",placesSchema);

module.exports = places;