import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-title">Party Dog</h1>
      <h2 className="hero-subtitle">Pasteles para celebrar a tu mejor amigo</h2>
      <p className="hero-description">
        Productos personalizados para perros, elaborados con ingredientes
        seguros y deliciosos.
      </p>
      <div className="hero-actions">
        <Link to="/productos" className="btn-primary">Ver Catálogo</Link>
        <Link to="/contacto" className="btn-secondary">Ordenar Ahora</Link>
      </div>
    </section>
  )
}

export default Hero