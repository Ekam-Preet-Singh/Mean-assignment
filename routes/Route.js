// Initialzing modules
const express = require("express");
const router = express.Router();

// Importing middleware from Controller.js from controller folder
const { getUsers, createUser } = require("../controller/Controller");

// Defining GET and POST routes
router.get("/", getUsers).post("/", createUser);

// Exporting routes to server.js
module.exports = router;
