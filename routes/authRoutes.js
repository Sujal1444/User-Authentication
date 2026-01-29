const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
  logout,
  updateProfile,
  adminDashboard,
  forgotPassword,
  resetPassword
} = require("../controllers/authController");

const { authMiddleware } = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddlewares");

// Auth routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/me", authMiddleware, getProfile);
router.put("/update", authMiddleware, updateProfile);
router.post("/logout", authMiddleware, logout);

// Admin routes
router.get("/admin/dashboard", authMiddleware, adminMiddleware, adminDashboard);

// Forgot password routes
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
