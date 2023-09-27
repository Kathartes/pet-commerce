import { useState, useEffect } from 'react';

const PetFetch = ({ itemId, children }) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch('/src/mocks/pets.json');
        const data = await response.json();
        const foundPet = data.find((item) => item.id === parseInt(itemId, 10));
        setPet(foundPet);
      } catch (error) {
        console.error('Error al cargar los detalles de la mascota', error);
      }
    };

    fetchPetDetails();
  }, [itemId]);

  return children(pet);
};

export default PetFetch;