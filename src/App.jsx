import Login from './rutas/login/login'
import Singup from './rutas/singup/singup'
import Market from './rutas/market/market'
import Layout from './layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout><Market /></Layout>}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/singup"
          element={<Singup />}
        />
      </Routes>
    </BrowserRouter>
  )
}
export default App
