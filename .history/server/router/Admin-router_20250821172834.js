const express = require("express");
const {GetAllusers,GetAllcontacts} = require("../controllers/Admin-controller");
const router = express.Router();

const authMiddleware = require("../Middleware/auth-middleware")

router.route("/users").get(GetAllusers);
router.route("/contacts").get(GetAllcontacts);

module.exports = router;