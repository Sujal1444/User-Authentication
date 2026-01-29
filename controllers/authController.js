const register = require("./auth/register");
const login = require("./auth/login");
const getProfile = require("./auth/getProfile");
const logout = require("./auth/logout");
const updateProfile = require("./auth/updateProfile");
const adminDashboard = require("./auth/adminDashboard");
const forgotPassword = require("./auth/forgotpassword");
const resetPassword = require("./auth/resetPassword");

module.exports = {
  register,
  login,
  getProfile,
  logout,
  updateProfile,
  adminDashboard,
  forgotPassword,
  resetPassword
};
