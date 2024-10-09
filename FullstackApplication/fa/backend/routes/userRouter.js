const express = require("express");
const route = express.Router();

const { signupUser } = require("../controllers/userController");

// signup route
route.post("/signup", signupUser);

module.exports = router;
