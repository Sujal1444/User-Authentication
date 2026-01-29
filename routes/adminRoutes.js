const express = require("express");
const router = express.Router();

const { getAllUsers, getUserById, updateUserRole, deleteUser } = require("../controllers/adminController");
const { authMiddleware } = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddlewares");      

router.get("/all-users", authMiddleware, adminMiddleware, getAllUsers);
router.get("/user/:id", authMiddleware, adminMiddleware, getUserById);
router.put("/user/:id/role", authMiddleware, adminMiddleware, updateUserRole);
router.delete("/user/:id", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;