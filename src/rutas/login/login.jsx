
import './login.css'
import { Link } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div className="card"> {/* Aplica el estilo de la tarjeta */}
        <h5 className='letreto'>Palo Verde SHOP</h5>
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
          <Link to='/' className='centerLink'>
          < button className="button">Iniciar sesión</button>   
          </Link>
                   
          <Link to ='/singup' className='href2'>
          ¿Estas registrado? Ingresa aquí
          </Link>          
        </form>
      </div>
    </div>
  )
}
export default App
