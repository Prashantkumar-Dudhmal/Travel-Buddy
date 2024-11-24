const express = require('express');
const { createBooking, getBookingsByUser, cancelBooking } = require('../controller/bookingController');

const router = express.Router();

router.post('/create', createBooking);  
router.get('/user/:userId', getBookingsByUser);  
router.delete('/cancel/:bookingId', cancelBooking); 

module.exports = router;
