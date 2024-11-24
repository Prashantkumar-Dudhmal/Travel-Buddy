const mongoose = require('mongoose');

const upcomingTripsSchema = new mongoose.Schema({
    source: { type: String, required: true },
    destination: { type: String, required: true },
    host: { type:mongoose.Schema.Types.ObjectId, ref: 'profileModel', required: true },
    // tripdate:{ type: Date, required: true },
    availableseats:{ type: Number, required: true },
    // car:{ type: mongoose.Schema.Types.ObjectId, ref: 'carModel', required: true },
    price: {type:Number,required:true}
})
const upcomingTripModel = mongoose.model('upcomingTripModel',upcomingTripsSchema);
module.exports = upcomingTripModel;