import { useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'

function App(props) {
  const{imgproducto,precio,producto}=props;
  return (
    <div className='fondo'>      
      <div className="card"> {/* Aplica el estilo de la tarjeta */}        
      <img className='cardClone'src={imgproducto}/>
        <h3>{producto}</h3>
        <span className='price'>{precio}</span>
        <button type="submit" className="button">Agregar al carrito</button> {/* Aplica el estilo de los botones */}              
      </div>
    </div>
  )
}
export default App
