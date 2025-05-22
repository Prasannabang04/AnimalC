const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"));

app.use("/auth", require("./routes/auth"));
app.use("/animal", require("./routes/animal"));

app.listen(3000, () => console.log("Server running on port 3000"));


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const morgan = require("morgan");  // Optional for logging requests

// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));  // Optional logging

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// // Use routes
// app.use("/auth", require("./routes/auth"));
// app.use("/animal", require("./middleware/auth"), require("./routes/animal"));  // Protect /animal routes

// // Start the server
// app.listen(3000, () => console.log("Server running on port 3000"));
