// const express = require("express");
// const router = express.Router();
// const auth = require("../middleware/auth");
// const AnimalReport = require("../models/AnimalReport");

// // Create report
// router.post("/", auth, async (req, res) => {
//   const report = new AnimalReport({
//     ...req.body,
//     userId: req.user.id,
//     isInjured: req.body.isInjured === "true"
//   });
//   await report.save();
//   res.status(201).json(report);
// });

// // Get open reports
// router.get("/", async (req, res) => {
//   const { type } = req.query;
//   const filter = { status: "open" };
//   if (type) filter.reportType = type;
//   const results = await AnimalReport.find(filter);
//   res.json(results);
// });

// // Mark as resolved
// router.put("/:id", auth, async (req, res) => {
//   const report = await AnimalReport.findById(req.params.id);
//   if (report.userId !== req.user.id) return res.status(403).send("Forbidden");
//   report.status = "resolved";
//   await report.save();
//   res.json(report);
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const AnimalReport = require("../models/AnimalReport");
const upload = require("../middleware/upload");

// POST /animals - Add a new lost/found report
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newReport = new AnimalReport({
      reportType: req.body.reportType,

      animalType: req.body.animalType,
      breed: req.body.breed,
      color: req.body.color,
      gender: req.body.gender,
      age: req.body.age,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description,
      image: req.file.location, // S3 image URL
      reporterName: req.body.reporterName,
      reporterPhone: req.body.reporterPhone,
      reporterEmail: req.body.reporterEmail,
      reward: req.body.reward,
      isInjured: req.body.isInjured === "true",
      microchipId: req.body.microchipId
    });

    await newReport.save();
    res.status(201).json({ message: "Report submitted!", report: newReport });
  } catch (error) {
    console.error("Error submitting report:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET /animals?type=lost or ?type=found
router.get("/", async (req, res) => {
  try {
    const type = req.query.type;
    const query = type ? { reportType: type } : {};
    const reports = await AnimalReport.find(query);
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
