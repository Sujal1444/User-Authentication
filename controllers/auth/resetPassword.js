const resetPassword = async (req, res) => {
    const { resetToken, newPassword } = req.body;
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    const user = await User.findOne({ resetPasswordToken: hashedToken , resetPasswordExpires: { $gt: Date.now() } })    ;
    if (!user) {
        return res.status(404).json({ message: "Invalid or expired reset token" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.json({ message: "Password reset successfully" });
};

module.exports = resetPassword;