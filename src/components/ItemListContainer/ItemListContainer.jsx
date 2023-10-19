import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase';

const ItemListContainer = () => {
  const { id } = useParams();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsRef = collection(db, 'pets');
        let petSnapshot;

        if (id) {
          const categoryQuery = query(petsRef, where('category', '==', id));
          petSnapshot = await getDocs(categoryQuery);
        } else {

          petSnapshot = await getDocs(petsRef);
        }

        const petsData = petSnapshot.docs.map((doc) => doc.data());

        setPets(petsData);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las mascotas', error);
        setLoading(false);
      }
    };

    fetchPets();
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>Mascotas: {id || 'Todo'}</h1>
      {loading ? <p>Cargando...</p> : <ItemList pets={pets} />}
    </div>
  );
};

export default ItemListContainer;