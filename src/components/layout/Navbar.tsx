import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">PartyDog</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/categorias">Categorías</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li>Carrito</li>
      </ul>
    </nav>
  )
}

export default Navbar