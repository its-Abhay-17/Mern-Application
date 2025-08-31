const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller')
const validate = require("../Validator/auth-validator")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate.authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router;