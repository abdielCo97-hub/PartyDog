import { useProductos } from '../../hooks/useProductos'

function ProductosDestacados() {
  const { productos, loading, error } = useProductos(true)

  return (
    <section>
      <h3>Productos Destacados</h3>

      {loading && <p>Cargando productos...</p>}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && productos.length === 0 && (
        <p>No hay productos destacados por ahora.</p>
      )}

      {!loading && !error && productos.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {productos.map((producto) => (
            <div
              key={producto.id}
              style={{ border: '1px solid #444', padding: '1rem', width: '200px' }}
            >
              {producto.imagen_url && (
                <img
                  src={producto.imagen_url}
                  alt={producto.nombre ?? 'Producto'}
                  style={{ width: '100%', height: '120px', objectFit: 'cover' }}
                />
              )}
              <h4>{producto.nombre ?? 'Sin nombre'}</h4>
              <p>{producto.descripcion ?? 'Sin descripción'}</p>
              <p>
                {producto.precio !== null
                  ? `$${producto.precio.toFixed(2)}`
                  : 'Precio no disponible'}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductosDestacados