const mongoose = require("mongoose");
const Item = require("./src/models/Item");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("DB connected");
    await Item.insertMany([
  {
    "name": "Laptop Gamer",
    "description": "Laptop con tarjeta gráfica RTX 3060",
    "category": "Electrónica",
    "price": 1200,
    "inStock": true
  },
  {
    "name": "Auriculares Bluetooth",
    "description": "Auriculares inalámbricos con cancelación de ruido",
    "category": "Electrónica",
    "price": 150,
    "inStock": true
  },
  {
    "name": "Silla Ergonomica",
    "description": "Silla para oficina con soporte lumbar",
    "category": "Muebles",
    "price": 250,
    "inStock": true
  },
  {
    "name": "Mesa de comedor",
    "description": "Mesa de madera para 6 personas",
    "category": "Muebles",
    "price": 400,
    "inStock": false
  },
  {
    "name": "Smartphone",
    "description": "Teléfono con pantalla AMOLED de 6.5 pulgadas",
    "category": "Electrónica",
    "price": 800,
    "inStock": true
  },
  {
    "name": "Cafetera Espresso",
    "description": "Cafetera automática con vaporizador de leche",
    "category": "Electrodomésticos",
    "price": 120,
    "inStock": true
  },
  {
    "name": "Libros de JavaScript",
    "description": "Pack de 3 libros sobre JavaScript y Node.js",
    "category": "Libros",
    "price": 60,
    "inStock": true
  },
  {
    "name": "Reloj Inteligente",
    "description": "Smartwatch con monitor de ritmo cardíaco",
    "category": "Electrónica",
    "price": 200,
    "inStock": false
  },
  {
    "name": "Cámara Fotográfica",
    "description": "Cámara digital con lente 24-70mm",
    "category": "Electrónica",
    "price": 900,
    "inStock": true
  },
  {
    "name": "Mochila de Viaje",
    "description": "Mochila resistente al agua de 40L",
    "category": "Accesorios",
    "price": 80,
    "inStock": true
  }
]);
    console.log("Items inserted");
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
