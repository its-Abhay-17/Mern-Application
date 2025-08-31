const express = require("express");
const {GetAllusers,GetAllcontacts} = require("../controllers/Admin-controller");
const router = express.Router();

const authMiddleware = require("../Middleware/auth-middleware")
const AdminMiddleware = require("../Middleware/AdminMiddleware")

router.route("/users").get(authMiddleware,AdminMiddleware,GetAllusers);
router.route("/contacts").get(GetAllcontacts);

module.exports = router;