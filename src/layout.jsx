import React from 'react';
import './layout.css';
import { Link } from 'react-router-dom'

function Layout({ children }) {
  return (
    <>
      <ul className="navbar">
        <li><button type="submit" className="button">Palo Verde SHOP</button></li>
        <li className="right">
            <Link to='/login'>
            <a href="">LogIn</a>
            </Link>            
            <button type="submit" className="button">Carrito</button>
        </li>
      </ul>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
