import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'
import Categorias from '../components/home/Categorias'
import ProductosDestacados from '../components/home/ProductosDestacados'
import FAQSection from '../components/home/FAQSection'
import ContactoSection from '../components/home/ContactoSection'

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categorias />
      <ProductosDestacados />
      <FAQSection />
      <ContactoSection />
      <Footer />
    </div>
  )
}

export default Homepage