const express = require("express");
const router = express.Router();

const { signupUser } = require("../controllers/userController");

//signup route
router.post("/signup", signupUser);

module.exports = router;
