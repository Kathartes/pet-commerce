import React, { useEffect, useState } from 'react';
import './itemDetail.css';
import ItemCount from './ItemCount/ItemCount';
import { useCart } from '../../../hooks/useContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const [pet, setPet] = useState(null);
  const { id } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [petExists, setPetExists] = useState(true);

  const itemQuantitySelector = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const addItemButton = () => {
    if (pet) {
      console.log('Agregando producto al carrito:', pet);
      addItem(pet, quantity);
    }
  };

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const petsRef = collection(db, 'pets');
        const petQuery = query(petsRef, where('id', '==', parseInt(id)));
        const productSnapshot = await getDocs(petQuery);

        if (!productSnapshot.empty) {
          const petData = productSnapshot.docs[0].data();
          console.log('Mascota encontrada:', petData);
          setPet(petData);
        } else {
          console.log('La mascota no existe');
          setPetExists(false);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los detalles de la mascota', error);
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  return (
    <div className="pet-details">
      {loading ? (
        <p>Cargando detalles de la mascota...</p>
      ) : petExists ? (
        <>
          <h2>{pet.name}</h2>
          <img src={pet.image} alt={pet.name} className="image-detail" />
          <p>{pet.gender}</p>
          <p>Precio: ${pet.price}</p>
          <p>Categoría: {pet.category}</p>
          <ItemCount onQuantityChange={itemQuantitySelector} />
          <button className="add-button" onClick={addItemButton}>Agregar</button>
        </>
      ) : (
        <p>La mascota no existe.</p>
      )}
    </div>
  );
};

export default ItemDetail;
