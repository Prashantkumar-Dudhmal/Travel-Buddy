const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  make: { type: String, required: true }, // e.g., Toyota
  model: { type: String, required: true }, // e.g., Corolla
  year: { type: Number, required: true }, // e.g., 2020
  licensePlate: { type: String, required: true, unique: true },
  color: { type: String }, // e.g., Black
  seatsAvailable: { type: Number, required: true }, // Number of seats offered for rides
  carPhoto: { type: String }, // URL for the uploaded car photo
});

module.exports = mongoose.model('Car', CarSchema);
