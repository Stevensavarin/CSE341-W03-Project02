const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
//const { saveUser } = require("../middleware/userMiddleware");
const { isAuthenticated } = require("../middleware/authenticate");


router.get("/", usersController.getAllUsers); // #swagger.tags = ['Users']

router.get("/:id", usersController.getUserById); // #swagger.tags = ['Users']

router.post("/", isAuthenticated, usersController.createUser); // #swagger.tags = ['Users']

router.put("/:id", isAuthenticated, usersController.updateUser); // #swagger.tags = ['Users']

router.delete("/:id", isAuthenticated, usersController.deleteUser); // #swagger.tags = ['Users']

module.exports = router;

