const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { saveUser } = require("../middleware/userMiddleware");

router.get("/", usersController.getAllUsers); // #swagger.tags = ['Users']

router.get("/:id", usersController.getUserById); // #swagger.tags = ['Users']

router.post("/", saveUser, usersController.createUser); // #swagger.tags = ['Users']

router.put("/:id", saveUser, usersController.updateUser); // #swagger.tags = ['Users']

router.delete("/:id", usersController.deleteUser); // #swagger.tags = ['Users']

module.exports = router;

