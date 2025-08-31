const express = require("express");
const AdminController = require("../controllers/Admin-controller");
const router = express.Router();

const authMiddleware = require("../Middleware/auth-middleware")
const AdminMiddleware = require("../Middleware/AdminMiddleware")

router.route("/users").get(authMiddleware,AdminMiddleware,AdminController.GetAllusers);
router.route("/users/:id").delete(authMiddleware,AdminMiddleware,AdminController.GetUserbyId);
router.route("/users/delete/:id").get(authMiddleware,AdminMiddleware,AdminController.deleteUserById);
router.route("/contacts").get(AdminController.GetAllcontacts);

module.exports = router;