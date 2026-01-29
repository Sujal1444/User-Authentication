const User = require("../../models/User");

const adminDashboard = async (req, res) => {
  try {
    // Get total users count
    const totalUsers = await User.countDocuments();
    
    // Get admin count
    const adminCount = await User.countDocuments({ role: "admin" });
    
    // Get regular users count
    const userCount = await User.countDocuments({ role: "user" });
    
    // Get recent users (last 10)
    const recentUsers = await User.find()
      .select("-password")
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      message: "Admin dashboard data",
      stats: {
        totalUsers,
        adminCount,
        userCount
      },
      recentUsers
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = adminDashboard;
