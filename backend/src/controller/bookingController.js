const bookingModel = require('../models/bookingModel');
const upcomingTripModel = require('../models/upcomingTrips');
const profileModel = require('../models/profileModel');

const createBooking = async (req, res) => {
    const { tripId, passengerId, seatsBooked } = req.body;
    try {
        // Validate trip
        const trip = await upcomingTripModel.findById(tripId);
        console.log(trip);

        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }

        // Validate passenger
        const passenger = await profileModel.findById(passengerId);
        if (!passenger) {
            return res.status(404).json({ message: 'Passenger not found' });
        }

        // Check seat availability
        if (trip.availableseats < seatsBooked) {
            return res.status(400).json({ message: 'Not enough seats available' });
        }

        // Calculate total amount
        const totalAmount = seatsBooked * trip.price;

        // Create booking
        const booking = await bookingModel.create({
            trip: tripId,
            passenger: passengerId,
            seatsBooked,
            totalAmount,
        });

        // Update available seats in trip
        trip.availableseats -= seatsBooked;
        await trip.save();

        res.status(201).json({
            message: 'Booking created successfully',
            booking,
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getBookingsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await bookingModel
            .find({ passenger: userId })
            .populate('trip')
            .populate('passenger');
        
        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this user' });
        }

        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const cancelBooking = async (req, res) => {
    const { bookingId } = req.params;

    try {
        const booking = await bookingModel.findById(bookingId).populate('trip');
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Update available seats in trip
        const trip = booking.trip;
        trip.availableseats += booking.seatsBooked;
        await trip.save();

        // Delete booking
        await bookingModel.findByIdAndDelete(bookingId);

        res.status(200).json({ message: 'Booking canceled successfully' });
    } catch (error) {
        console.error('Error canceling booking:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createBooking, getBookingsByUser, cancelBooking };
