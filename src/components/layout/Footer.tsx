import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PartyDog. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer