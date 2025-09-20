const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemsController");

// GET all items
router.get("/", controller.getAllItems);// #swagger.tags = ['Items']

// GET single item
router.get("/:id", controller.getItemById);// #swagger.tags = ['Items']

// CREATE new item
router.post("/", controller.createItem);// #swagger.tags = ['Items']

// UPDATE item
router.put("/:id", controller.updateItem);// #swagger.tags = ['Items']

// DELETE item
router.delete("/:id", controller.deleteItem);// #swagger.tags = ['Items']

module.exports = router;



