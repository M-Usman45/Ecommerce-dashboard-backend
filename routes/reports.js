const express = require("express");
const router = express.Router();

// Import the reports controller
const { generateReports } = require("../controllers/reports");

// Define a route that uses the generateReports function
router.get("/", generateReports);
module.exports = router;
