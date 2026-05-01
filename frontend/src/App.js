import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food-items")
      .then((res) => res.json())
      .then((data) => {
        setFoodItems(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Swiggy Clone</h1>

      <div className="grid">
        {foodItems.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;