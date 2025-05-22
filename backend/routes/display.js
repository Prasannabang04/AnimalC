const express = require("express");
const router = express.Router();
const LostAnimal = require("../models/LostAnimal");
const FoundAnimal = require("../models/FoundAnimal");

// GET all reported pets (lost + found)
router.get("/display-pets", async (req, res) => {
  try {
    const lostAnimals = await LostAnimal.find();
    const foundAnimals = await FoundAnimal.find();

    // Combine all entries
    const allPets = [...lostAnimals, ...foundAnimals];
    res.json(allPets);
  } catch (err) {
    console.error("Error fetching pets:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
