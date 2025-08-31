const express = require("express");
const GetAllusersContacts = require("../controllers/Admin-controller");
const router = express.Router();

router.route("/contacts").get(GetAllusersContacts);

module.exports = router;