const express = require("express");
const {GetAllusers,GetAllcontacts} = require("../controllers/Admin-controller");
const router = express.Router();

router.route("/users").get(GetAllusers);
router.route("/contacts").get(GetAllcontacts);

module.exports = router;