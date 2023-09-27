import React from "react"
import Item from "./Item/Item";
import "./ItemList.css";

const ItemList = ({ pets }) => {
    return (
      <div className="pet-cards">
        {pets.map((pet) => (
          <Item key={pet.id} pet={pet} />
        ))}
      </div>
    );
  };

export default ItemList;