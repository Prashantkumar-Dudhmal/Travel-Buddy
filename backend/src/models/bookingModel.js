const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'upcomingTripModel', required: true },
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'profileModel', required: true },
    seatsBooked: { type: Number, required: true },
    bookingDate: { type: Date, default: Date.now },
    totalAmount: { type: Number, required: true },  
});

const bookingModel = mongoose.model('bookingModel', bookingSchema);
module.exports = bookingModel;
