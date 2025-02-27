const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Backend is running!");
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];
  
  let cart = [];
  
  app.get("/api/products", (req, res) => {
    res.json(products);
  });
  

  app.post("/api/cart", (req, res) => {
    const { productId } = req.body;
    const product = products.find((p) => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    cart.push(product);
    res.json({ message: "Product added to cart", cart });
  });
  

  app.get("/api/cart", (req, res) => {
    res.json(cart);
  });
  