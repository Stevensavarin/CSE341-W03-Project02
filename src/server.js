const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger.json");

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware global
app.use(cors());
app.use(express.json());

// Routes
app.use("/", require("./routes"));

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


