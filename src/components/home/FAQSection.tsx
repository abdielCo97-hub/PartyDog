import { useFaqs } from '../../hooks/useFaqs'
import './FAQSection.css'

function FAQSection() {
  const { faqs, loading, error } = useFaqs()

  return (
    <section className="faq-section">
      <h3>Preguntas Frecuentes</h3>

      {loading && <p>Cargando preguntas...</p>}

      {error && <p className="faq-error">Error: {error}</p>}

      {!loading && !error && faqs.length === 0 && (
        <p>Aún no hay preguntas frecuentes disponibles.</p>
      )}

      {!loading && !error && faqs.length > 0 && (
        <div>
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <h4>{faq.pregunta ?? 'Pregunta sin título'}</h4>
              <p>{faq.respuesta ?? 'Respuesta próximamente.'}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default FAQSection