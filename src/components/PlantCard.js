import React from "react";

function PlantCard({ 
  image = "https://via.placeholder.com/400",
  name = "plant name",
  price = "0.00"
}) {
  console.log("in Plant Card")
  
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
