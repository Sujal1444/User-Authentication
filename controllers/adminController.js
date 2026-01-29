const User = require("../models/User");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const updateUserRole = async (req, res) => {
    const {role} = req.body;
    if (!["user", "admin"].includes(role)) {
        return res.status(400).json({ message: "Invalid role. Must be 'user' or 'admin'" });
    }
    try {
        await User.findByIdAndUpdate(req.params.id, { role });
        res.json({ message: "User role updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};  

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getAllUsers, getUserById, updateUserRole, deleteUser };