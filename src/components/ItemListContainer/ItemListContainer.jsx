
import React from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css';
import ItemList from './ItemList/ItemList';
import useAsyncMock from '../../hooks/useAsyncMock';

const ItemListContainer = () => {
  const { id } = useParams();
  const { pets, loading } = useAsyncMock(id);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="item-list-container">
      <h1>Mascotas: {id}</h1>
      <ItemList pets={pets} />
    </div>
  );
};

export default ItemListContainer;