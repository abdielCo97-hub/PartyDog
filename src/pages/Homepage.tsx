import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/home/Hero'

function Homepage() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage