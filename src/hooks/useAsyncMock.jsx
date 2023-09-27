import { useEffect, useState } from 'react';

const useAsyncMock = (categoryId) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      try {
        const response = await fetch('/src/mocks/pets.json');
        const data = await response.json();

        const filteredPets = categoryId
          ? data.filter((pet) => pet.category === categoryId)
          : data;

        setPets(filteredPets);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar las mascotas', error);
        setLoading(false);
      }
    };

    fetchPets();
  }, [categoryId]);

  return { pets, loading };
};

export default useAsyncMock;