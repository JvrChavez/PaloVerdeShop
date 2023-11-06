import { useState } from 'react'
import './singup.css'
import BackArrow from '../../assets/icons/backArrow.svg'
import { Link } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div className="card"> {/* Aplica el estilo de la tarjeta */}
        <div className='botones'>
          <Link to ='/login'>
          <button type="submit" className="back"><img src={BackArrow} className='back img'/></button>
          </Link>          
          <span className='letreto'>Palo Verde SHOP</span>
        </div>        
        <h2>Crea tu cuenta</h2>
        <form className='form'>        
          <label>Nombre de usuario:</label>
          <input className='input'
            type="text"
            //value={username}
            //onChange={handleUsernameChange}
          />          
          <label>Contraseña:</label>
          <input className='input'
            type="password"
            //value={password}
            //onChange={handlePasswordChange}
          />
          <label>Confirmar contraseña:</label>
          <input className='input'
            type="password"
            //value={password}
            //onChange={handlePasswordChange}
          />          
          <button type="submit" className="button">Terminar registro</button> {/* Aplica el estilo de los botones */}          
        </form>
      </div>
    </div>
  )
}
export default App
