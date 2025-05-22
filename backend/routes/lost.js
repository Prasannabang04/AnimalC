// routes/lost.js

const express = require("express");
const router = express.Router();
const LostAnimal = require("../models/LostAnimal");
const upload = require("../middleware/upload");

// Upload lost animal info
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newLostPet = new LostAnimal({
      breed: req.body.breed,
      location: req.body.location,
      dateLost: req.body.dateLost,
      description: req.body.description,
      image: req.file.location,
    });

    await newLostPet.save();
    res.status(201).json({ message: "Lost pet reported!", pet: newLostPet });
  } catch (error) {
    console.error("Lost upload error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get all lost pets
router.get("/", async (req, res) => {
  try {
    const lostPets = await LostAnimal.find();
    res.json(lostPets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
