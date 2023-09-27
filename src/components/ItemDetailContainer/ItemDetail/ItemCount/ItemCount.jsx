import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <p>Clones: {quantity}</p>
      <button className='counter' onClick={handleDecrease}>-</button>
      <button className='counter' onClick={handleIncrease}>+</button>
    </div>
  );
};

export default ItemCount;