import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ContactoSection from '../components/home/ContactoSection'

function ContactoPage() {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">
        <ContactoSection />
      </main>
      <Footer />
    </div>
  )
}

export default ContactoPage