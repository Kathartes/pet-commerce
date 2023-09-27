import React from 'react';
import PetFetch from '../../PetFetch';
import './itemDetail.css'

const ItemDetail = ({ itemId }) => {
  return (
    <PetFetch itemId={itemId}>
      {(pet) => (
        <div className="pet-details">
          {pet ? (
            <>
              <h2>{pet.name}</h2>
              <img src={pet.image} alt={pet.name} className="image-detail"/>
              <p>{pet.gender}</p>
              <p>Edad: {pet.age}</p>
              <p>Categoría: {pet.category}</p>
            </>
          ) : (
            <p>Cargando detalles de la mascota...</p>
          )}
        </div>
      )}
    </PetFetch>
  );
};

export default ItemDetail;