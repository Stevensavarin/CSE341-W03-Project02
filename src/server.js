const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger.json");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("🚀 Project 2 API is running!");
});

// Items API CRUD
app.use("/items", require("./routes/items"));

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

