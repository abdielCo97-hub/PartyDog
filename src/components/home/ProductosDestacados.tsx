import { useProductos } from '../../hooks/useProductos'
import './ProductosDestacados.css'

function ProductosDestacados() {
  const { productos, loading, error } = useProductos(true)

  return (
    <section className="productos-section">
      <h3>Productos Destacados</h3>

      {loading && <p>Cargando productos...</p>}

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && productos.length === 0 && (
        <p>No hay productos destacados por ahora.</p>
      )}

      {!loading && !error && productos.length > 0 && (
        <div className="productos-grid">
          {productos.map((producto) => (
            <div key={producto.id} className="producto-card">
              {producto.imagen_url && (
                <img src={producto.imagen_url} alt={producto.nombre ?? 'Producto'} />
              )}
              <div className="producto-card-body">
                <h4>{producto.nombre ?? 'Sin nombre'}</h4>
                <p>{producto.descripcion ?? 'Sin descripción'}</p>
                <p className="producto-precio">
                  {producto.precio !== null
                    ? `$${producto.precio.toFixed(2)}`
                    : 'Precio no disponible'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductosDestacados