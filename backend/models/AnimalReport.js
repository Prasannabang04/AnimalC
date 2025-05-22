// const mongoose = require("mongoose");

// const AnimalReportSchema = new mongoose.Schema({
//   reportType: { type: String, enum: ["lost", "found"], required: true },
//   userId: { type: String, required: true },

//   animalType: { type: String, required: true },
//   breed: { type: String, required: true },
//   color: String,
//   gender: String,
//   age: String,

//   date: { type: String, required: true },
//   location: { type: String, required: true },
//   description: String,
//   image: { type: String, required: true },

//   reporterName: { type: String, required: true },
//   reporterPhone: { type: String, required: true },
//   reporterEmail: String,

//   reward: String,
//   isInjured: { type: Boolean, default: false },
//   microchipId: String,

//   status: { type: String, enum: ["open", "resolved"], default: "open" }
// });

// module.exports = mongoose.model("AnimalReport", AnimalReportSchema);


const mongoose = require("mongoose");

const AnimalReportSchema = new mongoose.Schema({
  reportType: { type: String, enum: ["lost", "found"], required: true },

  animalType: { type: String, required: true },
  breed: { type: String, required: true },
  color: { type: String },
  gender: { type: String },
  age: { type: String },

  date: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true }, // S3 image URL

  reporterName: { type: String, required: true },
  reporterPhone: { type: String, required: true },
  reporterEmail: { type: String },

  reward: { type: String }, // only for lost
  isInjured: { type: Boolean, default: false },
  microchipId: { type: String }
});

module.exports = mongoose.model("AnimalReport", AnimalReportSchema);
