import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import "./App.css";
import { CartProvider } from './hooks/useContext';
import './App.css';
import Cart from './components/Cart/Cart';
import Checkout from "./components/Order/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} /> 
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;