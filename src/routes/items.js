const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");
const { saveItem } = require("../middleware/itemMiddleware");

// GET all items
router.get("/", itemsController.getItems); // #swagger.tags = ['Items']

// GET single item
router.get("/:id", itemsController.getItemById); // #swagger.tags = ['Items']

// CREATE new item
router.post("/", saveItem, itemsController.createItem); // #swagger.tags = ['Items']

// UPDATE item
router.put("/:id", saveItem, itemsController.updateItem); // #swagger.tags = ['Items']

// DELETE item
router.delete("/:id", itemsController.deleteItem); // #swagger.tags = ['Items']

module.exports = router;




