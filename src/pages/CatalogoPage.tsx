import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ProductosDestacados from '../components/home/ProductosDestacados'

function CatalogoPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <ProductosDestacados />
      </main>
      <Footer />
    </div>
  )
}

export default CatalogoPage