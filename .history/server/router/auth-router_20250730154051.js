const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller')
const Schema = require("../Validator/auth-validator")
const validate = require("../Middlewares/validate-middleware")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(Schema.signupschema), authcontrollers.register);
router.route("/login").post(validate(Schema.Loginschema),authcontrollers.login);

module.exports = router; 