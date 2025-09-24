const router = require("express").Router();

// Swagger docs
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../../swagger.json");
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Health check
router.get("/", (req, res) => {
  //#swagger.tags = ['Root']
  res.send("🚀 Project 2 API is running!");
});

// Items CRUD
router.use("/items", require("./items"));

// Users CRUD
router.use("/users", require("./users"));

module.exports = router;

