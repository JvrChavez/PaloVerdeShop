import React from 'react';
import './layout.css';
import { Link } from 'react-router-dom'
import Cart from './assets/icons/cart.svg'

function Layout({ children }) {
  return (
    <>
      <navbar className="navbar">
        <li><button type="submit" className="button">Palo Verde SHOP</button></li>
        <li className="right">
            <Link to='/login'>
            <a href="">LogIn</a>
            </Link>            
            <button type="submit" className="button"><img src={Cart} className='cart-img'/></button>
        </li>
      </navbar>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
