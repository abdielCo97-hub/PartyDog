function Navbar() {
  return (
    <nav>
      <div>
        <strong>PartyDog</strong>
      </div>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li>Inicio</li>
        <li>Categorías</li>
        <li>Productos</li>
        <li>FAQ</li>
        <li>Contacto</li>
        <li>Carrito</li>
      </ul>
    </nav>
  )
}

export default Navbar