import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

const PetFetch = ({ itemId, children, db }) => {
  const [pet, setPet] = useState(null);

  const fetchPetDetails = async () => {
    try {
      const petDocRef = doc(db, 'pets', itemId);
      const petDocSnapshot = await getDoc(petDocRef);

      if (petDocSnapshot.exists()) {
        const petData = petDocSnapshot.data();
        setPet({ id: itemId, ...petData });
      }
    } catch (error) {
      console.error('Error al cargar los detalles de la mascota', error);
    }
  };

  useEffect(() => {
    if (itemId) {
      fetchPetDetails();
    }
  }, [itemId, db]);

  return children(pet);
};

export default PetFetch;
