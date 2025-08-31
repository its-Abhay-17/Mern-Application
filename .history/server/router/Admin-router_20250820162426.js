const express = require("express");
const GetAllusers = require("../controllers/Admin-controller");
const router = express.Router();

router.route("/users").get(GetAllusers);

module.exports = router;