const router = require("express").Router();

// Swagger docs
router.use("/", require("./swagger"));

// Hello World testing
router.get("/", (req, res) => {
  //#swagger.tags = ['Root']
  res.send("Hello Project 2!");
});

// Items CRUD
router.use("/items", require("./items"));

module.exports = router;
