const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller')
const signupschema = require("../Validator/auth-validator")
const validate = require("../Middlewares/validate-middleware")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupschema), authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router;