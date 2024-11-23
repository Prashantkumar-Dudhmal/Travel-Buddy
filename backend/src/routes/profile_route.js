const express = require("express");
const fetchUser = require('../middleware/fetchUser')
const ProfileController = require("../controller/ProfileController");
const router = express.Router();

router.get("/:id",fetchUser,ProfileController.getProfile);
router.put("/:id",fetchUser,ProfileController.updateProfile);
router.post("/create",fetchUser,ProfileController.createProfile);


module.exports = router;