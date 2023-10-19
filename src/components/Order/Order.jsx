import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';

const CreateOrder = async (cart, firstName, lastName, phone, email) => {
  const orderData = {
    firstName,
    lastName,
    phone,
    email,
    timestamp: serverTimestamp(),
    items: cart.map((item) => ({
      productId: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
  };

  try {
    const orderRef = await addDoc(collection(db, 'orders'), orderData);
    return orderRef.id;
  } catch (error) {
    throw new Error('Error al crear la orden: ' + error);
  }
};

export default CreateOrder;