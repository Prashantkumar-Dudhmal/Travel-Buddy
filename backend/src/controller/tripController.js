const upcomingTripModel = require('../models/upcomingTrips');
const places = require("./src/models/places");

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
    const availableTrips = await upcomingTripModel.find({source,destination,tripdate});
    res.json(availableTrips);
}

const searchSuggestions = async (req, res) => {
    const { query } = req.query; // Extract input from query parameters
  
    // Validate input
    if (!query || query.trim() === '') {
        return res.status(400).send({ error: 'Query parameter is required' });
    }
  
    try {
        // Case-insensitive regex to find matching cities
        const regex = new RegExp(`^${query}`, 'i'); // Starts with `query`, case-insensitive
        const results = await places.find({
          $or: [
              { City: regex },
              { District: regex },
              { State: regex }
          ]
      }).limit(10); // Limit to top 10 results for efficiency
        console.log(results);
        if (results.length === 0) {
            return res.status(404).send({ message: 'No matching cities found' });
        }
  
        res.status(200).send(results); // Send matching cities as response
    } catch (error) {
        console.error('Error while searching for places:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
  }

module.exports = {createTrip,searchTrip,searchSuggestions}