import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import FAQSection from '../components/home/FAQSection'

function FaqPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default FaqPage