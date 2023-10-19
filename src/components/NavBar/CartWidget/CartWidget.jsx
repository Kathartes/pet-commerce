import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../hooks/useContext';
import Icon from '../../../assets/react.svg';

const CartWidget = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <Link to="/cart">
        <img src={Icon} alt="Icono de carrito" />
        <span className="notification">{cartItemCount}</span>
      </Link>
    </div>
  );
};

export default CartWidget;