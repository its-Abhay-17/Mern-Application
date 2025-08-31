const express = require("express");
const GetAllusersContacts = require("../controllers/Admin-contacts-controller");
const router = express.Router();

router.route("/contacts").get(GetAllusersContacts);

module.exports = router;