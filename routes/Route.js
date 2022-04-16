const express = require("express");
const router = express.Router();

const { getUsers, createUser } = require("../controller/Controller");

router.get("/", getUsers).post("/", createUser);

module.exports = router;
