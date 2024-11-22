const express = require("express");

const ProfileController = require("../controller/ProfileController");
const router = express.Router();

router.get("/:id",ProfileController.getProfile);
router.put("/:id",ProfileController.updateProfile);
router.post("/create",ProfileController.createProfile);


module.exports = router;