// // const mongoose = require("mongoose");

// // const FoundAnimalSchema = new mongoose.Schema({
// //   breed: String,
// //   location: String,
// //   dateFound: String,
// //   description: String,
// //   image: String, // S3 image URL
// // });

// // module.exports = mongoose.model("FoundAnimal", FoundAnimalSchema);
// const mongoose = require("mongoose");

// const AnimalReportSchema = new mongoose.Schema({
//   reportType: { type: String, enum: ["lost", "found"], required: true }, // "lost" or "found"

//   animalType: { type: String, required: true },
//   breed: { type: String, required: true },
//   color: { type: String },
//   gender: { type: String },
//   age: { type: String },

//   date: { type: String, required: true }, // Used for both "dateLost" or "dateFound"
//   location: { type: String, required: true },
//   description: { type: String },
//   image: { type: String, required: true }, // S3 image URL

//   reporterName: { type: String, required: true },
//   reporterPhone: { type: String, required: true },
//   reporterEmail: { type: String },

//   reward: { type: String }, // Only applicable if reportType is "lost"
//   isInjured: { type: Boolean, default: false },
//   microchipId: { type: String }
// });

// module.exports = mongoose.model("AnimalReport", AnimalReportSchema);
