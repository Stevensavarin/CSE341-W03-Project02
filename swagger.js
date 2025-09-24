const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Project 2 API",
    description: "API CRUD for Project 2"
  },
  host: "localhost:3000",
  schemes: ["http", "https"],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes/index.js'];

// This will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);



