const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/food-items", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Pizza",
      price: 299
    },
    {
      id: 2,
      name: "Burger",
      price: 199
    }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});