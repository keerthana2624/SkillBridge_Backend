const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
require('dotenv').config();
// dotenv.config(); // Load environment variables


const app = express();
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
connectDB();

// Test route
app.get("/", (req, res) => res.send("Backend connected to MongoDB"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
