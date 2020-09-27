const express = require("express");
const router = express.Router();

// Login Page
router.get("/login", (req, res, next) => {
	res.render("login");
});

// Register Page
router.get("/register", (req, res, next) => {
	res.render("register");
});

module.exports = router;
