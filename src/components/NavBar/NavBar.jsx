import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
    const [showCategories, setShowCategories] = useState(false);
  
    const toggleCategories = () => {
      setShowCategories(!showCategories);
    };
  
    return (
      <nav className="navbar">
        <div >
          <h1><Link to="/">Mascotas</Link></h1>
        </div>
        <ul className="categories">
              <li><Link to="/category/Perros">Perros</Link></li>
              <li><Link to="/category/Gatos">Gatos</Link></li>
              <li><Link to="/category/Otros">Otros</Link></li>
        </ul>
        <div>
        <CartWidget />
        </div>
      </nav>
    );
  };
  
  export default NavBar;