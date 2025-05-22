// const express = require("express");
// const router = express.Router();
// const FoundAnimal = require("../models/FoundAnimal");
// const upload = require("../middleware/upload");

// // POST route - upload image and save data
// router.post("/", upload.single("image"), async (req, res) => {
//   try {
//     const newPet = new FoundAnimal({
//       breed: req.body.breed,
//       location: req.body.location,
//       dateFound: req.body.dateFound,
//       description: req.body.description,
//       image: req.file.location, // S3 URL
//     });

//     await newPet.save();
//     res.status(201).json({ message: "Found pet reported!", pet: newPet });
//   } catch (error) {
//     console.error("Upload error:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// // GET all found pets
// router.get("/", async (req, res) => {
//   try {
//     const pets = await FoundAnimal.find();
//     res.json(pets);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const AnimalReport = require("../models/AnimalReport");
const upload = require("../middleware/upload");

// POST route - upload image and save found animal report
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newPet = new AnimalReport({
      reportType: "found", // Hardcoded for found animals

      animalType: req.body.animalType,
      breed: req.body.breed,
      color: req.body.color,
      gender: req.body.gender,
      age: req.body.age,

      date: req.body.date, // this replaces "dateFound"
      location: req.body.location,
      description: req.body.description,
      image: req.file.location, // S3 URL

      reporterName: req.body.reporterName,
      reporterPhone: req.body.reporterPhone,
      reporterEmail: req.body.reporterEmail,

      isInjured: req.body.isInjured === "true",
      microchipId: req.body.microchipId
    });

    await newPet.save();
    res.status(201).json({ message: "Found pet reported!", pet: newPet });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET all found pets
router.get("/", async (req, res) => {
  try {
    // Only return reports where reportType is "found"
    const pets = await AnimalReport.find({ reportType: "found" });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
