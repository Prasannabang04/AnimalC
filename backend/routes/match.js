const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const FoundAnimal = require("../models/FoundAnimal");
const compareImages = require("../rekognition/compareImages");
const fs = require("fs");
const path = require("path");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const foundPets = await FoundAnimal.find();
    const matches = [];

    const uploadedImage = fs.readFileSync(req.file.path);

    for (let pet of foundPets) {
      const s3Key = pet.image.split(".amazonaws.com/")[1];
      const result = await compareImages(uploadedImage, s3Key);

      if (result.FaceMatches.length > 0) {
        matches.push(pet);
      }
    }

    // Delete the local temp image
    fs.unlinkSync(req.file.path);

    res.status(200).json({ matches });
  } catch (error) {
    console.error("Matching error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
