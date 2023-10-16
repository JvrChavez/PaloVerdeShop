import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="card"> {/* Aplica el estilo de la tarjeta */}
        <span className='letreto'>Palo Verde SHOP</span>
        <h2>Bienvenido Nuevamente</h2>
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
          <a className='href' href='#'>¿Olvidaste tu contraseña?</a>      
          <button type="submit" className="button">Iniciar sesión</button> {/* Aplica el estilo de los botones */}
          <a className='href2' href='#'>¿Estas registrado? Ingresa aquí</a>
        </form>
      </div>
    </div>
  )
}

export default App
