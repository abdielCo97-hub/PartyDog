import { useCategorias } from '../../hooks/useCategorias'
import './Categorias.css'

function Categorias() {
  const { categorias, loading, error } = useCategorias()

  return (
    <section className="categorias" id="categorias">
      <h3>Categorías</h3>

      {loading && <p>Cargando categorías...</p>}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && categorias.length === 0 && (
        <p>No hay categorías registradas.</p>
      )}

      {!loading && !error && categorias.length > 0 && (
        <ul className="categorias-lista">
          {categorias.map((categoria) => (
            <li key={categoria.id} className="categoria-item">
              {categoria.nombre}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Categorias