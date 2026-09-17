import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div>
        <strong>PartyDog</strong>
      </div>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/#categorias">Categorías</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li>Carrito</li>
      </ul>
    </nav>
  )
}

export default Navbar