const express = require("express");
const fetchUser = require("../middleware/fetchUser")
const tripController = require("../controller/tripController");
const router = express.Router();

router.post("/createTrip",fetchUser,tripController.createTrip);
router.get("/searchTrip",fetchUser,tripController.searchTrip);
router.get("/sugg",tripController.searchSuggestions);

module.exports = router;