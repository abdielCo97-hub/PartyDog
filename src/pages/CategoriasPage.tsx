import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Categorias from '../components/home/Categorias'

function CategoriasPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <Categorias />
      </main>
      <Footer />
    </div>
  )
}

export default CategoriasPage