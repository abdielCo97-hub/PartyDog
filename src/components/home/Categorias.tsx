import { useCategorias } from '../../hooks/useCategorias'

function Categorias() {
  const { categorias, loading, error } = useCategorias()

  return (
    <section>
      <h3>Categorías</h3>

      {loading && <p>Cargando categorías...</p>}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && categorias.length === 0 && (
        <p>No hay categorías registradas.</p>
      )}

      {!loading && !error && categorias.length > 0 && (
        <ul>
          {categorias.map((categoria) => (
            <li key={categoria.id}>{categoria.nombre}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Categorias