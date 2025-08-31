const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller')
const signUpSchema = require("../Validator/auth-validator")
const validate = require("../Middleware/validate-middleware")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signUpSchema),authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router; 