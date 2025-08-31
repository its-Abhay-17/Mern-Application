const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller')
const {signupschema,Loginschema} = require("../Validator/auth-validator")
const validate = require("../Middleware/validate-middleware")
const authMiddleware = require("../Middleware/auth-middleware")

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupschema),authcontrollers.register);
router.route("/login").post(validate(Loginschema),authcontrollers.login);
router.route("/user").get(authMiddleware,authcontrollers.user);

module.exports = router;  