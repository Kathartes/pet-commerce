import React, { useState } from 'react';
import { useCart } from '../../../hooks/useContext';
import "./Checkout.css";
import Order from '../Order';

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [error, setError] = useState('');
  const [orderID, setOrderID] = useState(null);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirmOrder = async () => {
    if (email !== confirmEmail) {
      setError('Los correos electrónicos no coinciden');
      return;
    }
    if (!firstName || !lastName || !phone || !email || !confirmEmail) {
        setError('Debes completar el formulario');
        return;
      }

    try {
      const newOrderID = await Order(cart, firstName, lastName, phone, email);
      setOrderID(newOrderID);
      clearCart();

      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
      setConfirmEmail('');
      setError('');
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };
return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Resumen del pedido</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>Cantidad: x{item.quantity}</span>
            </li>
          ))}
        </ul>
        <p>Total del pedido: <strong>${calculateTotal().toFixed(2)}</strong></p>
      </div>
      <input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="email"
        placeholder="Confirmar Email"
        value={confirmEmail}
        onChange={(e) => setConfirmEmail(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleConfirmOrder}>Confirmar pedido</button>
      {orderID && (
        <div className="confirmation-message">
          <p>Pedido confirmado</p>
          <p>Id de orden: {orderID}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;


