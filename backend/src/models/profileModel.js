const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  profilePhoto: { type: String }, // URL for the uploaded photo
  rating: { type: Number, default: 5.0 }, // Average rating for user
  totalRatings: { type: Number, default: 0 }, // Total number of ratings received
  isDriver: { type: Boolean, default: false }, // True if the user is offering rides
  //googleId: { type: String, unique: true, sparse: true }, // For Google login users
  createdAt: { type: Date, default: Date.now },
});
const profileModel = mongoose.model('profileModel', UserSchema);
module.exports = profileModel;
