import React from 'react';
import { useCart } from '../../hooks/useContext'; 
import { Link } from 'react-router-dom'; 
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clearCart } = useCart();


  const totalPrice = cart.reduce((total, pet) => total + pet.price * pet.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className='cart-header'>Pedido de mascotas</h1>
      {cart.length > 0 ? (
        <div>
          <ul className='cart-items'>
            {cart.map((pet) => (
              <li className='cart-item' key={pet.id}>
                <span>Nombre: {pet.name} </span>
                <img src={pet.image} alt={pet.name} className="pet-image" />
                <span>Precio: ${pet.price} </span>
                <span>Cantidad: x{pet.quantity}</span>
                <button className="remove-button" onClick={() => removeItem(pet.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <div className='cart-footer'>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <button className='buy-button' onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">
              <button className='buy-button'>Terminar mi pedido</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>No hay ningun pedido</p>
      )}
    </div>
  );
};

export default Cart;