const upcomingTripModel = require('../models/upcomingTrips');

const createTrip = async(req,res)=>{
    const data = req.body;
    let trip = await upcomingTripModel.create({
        source: data.source,
        destination: data.destination,
        host: data.host,
        tripdate: data.tripdate,
        availableseats: data.availableseats,
        car : data.car,
        price: data.price
    });
    res.json({
        msg:"Trip created successfully!!",
        trip:{trip}
    })
}

const searchTrip = async(req,res)=>{
    const source = req.body.source;
    const destination = req.body.destination;
    const tripdate = req.body.date;
    const availableTrips = upcomingTripModel.find({source,destination,tripdate});
    res.json(availableTrips);
}

module.exports = {createTrip,searchTrip}