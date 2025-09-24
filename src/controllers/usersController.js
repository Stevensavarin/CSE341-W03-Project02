const User = require("../models/User");

// ======================
// GET ALL USERS
// ======================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ======================
// GET SINGLE USER
// ======================
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ======================
// CREATE USER
// ======================
const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Validación básica
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = new User({ name, email, role });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// UPDATE USER
// ======================
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, role } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, role, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// DELETE USER
// ======================
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// EXPORT CONTROLLERS
// ======================
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};


