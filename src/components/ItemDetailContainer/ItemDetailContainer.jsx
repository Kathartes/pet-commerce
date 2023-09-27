import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemCount from './ItemDetail/ItemCount/ItemCount';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <div className="item-detail-container">
      <ItemDetail itemId={id} />
      <ItemCount />
    </div>
  );
};

export default ItemDetailContainer;