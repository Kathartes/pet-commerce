import React from "react"
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({pet}) => {
    return (  
    
    <div className="pet-card" key={pet.id}>
    <h3>{pet.name}</h3>
    <img src={pet.image} alt={pet.name} className="image"/>
    <p>{pet.gender}</p>
    <p>Edad: {pet.age}</p>
    <Link to={`/item/${pet.id}`}>
      <button>Detalles</button>
    </Link>
  </div>);
}
 
export default Item;