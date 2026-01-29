const crypto = require("crypto");
const User = require("../../models/User");

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

    await user.save();

    res.json({ message: "Reset password email sent", resetToken });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = forgotPassword;