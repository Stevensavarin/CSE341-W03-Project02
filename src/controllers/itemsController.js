const Item = require("../models/Item");

// ======================
// GET ALL ITEMS
// ======================
const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ======================
// GET SINGLE ITEM
// ======================
const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// CREATE ITEM
// ======================
const createItem = async (req, res) => {
  try {
    const { name, description, category, price, inStock } = req.body;

    const newItem = new Item({
      name,
      description,
      category,
      price,
      inStock
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// UPDATE ITEM
// ======================
const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, category, price, inStock } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { name, description, category, price, inStock, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json(updatedItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// DELETE ITEM
// ======================
const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ message: "Item deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// ======================
// EXPORT CONTROLLERS
// ======================
module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};


