import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log("plants [] in PlantList: ")
  
  return (
    <ul className="cards">
      {plants.map((plant) => {
        <PlantCard key={plant.id} image={plant.image} name={plant.name} price={plant.price} />
      })}
    </ul>
  );
}

export default PlantList;
