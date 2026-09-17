import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Categorias from '../components/home/Categorias'

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categorias />
      <Footer />
    </div>
  )
}

export default Homepage