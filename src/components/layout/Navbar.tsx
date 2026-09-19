import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={cerrarMenu}>
        PartyDog
      </Link>

      <button
        className="navbar-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
        aria-expanded={menuAbierto}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${menuAbierto ? 'navbar-links-open' : ''}`}>
        <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
        <li><Link to="/categorias" onClick={cerrarMenu}>Categorías</Link></li>
        <li><Link to="/productos" onClick={cerrarMenu}>Productos</Link></li>
        <li><Link to="/faq" onClick={cerrarMenu}>FAQ</Link></li>
        <li><Link to="/contacto" onClick={cerrarMenu}>Contacto</Link></li>
        <li>Carrito</li>
      </ul>
    </nav>
  )
}

export default Navbar