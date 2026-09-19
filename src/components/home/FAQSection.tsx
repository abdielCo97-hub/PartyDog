import './FAQSection.css'

function FAQSection() {
  // TODO: crear useFaqs() siguiendo el patrón de useCategorias
  // para leer de la tabla `faq`.

  return (
    <section className="faq-section">
      <h3>Preguntas Frecuentes</h3>
      <div className="faq-item">
        <h4>Próximamente</h4>
        <p>Estamos preparando nuestras preguntas frecuentes..¿tienes alguna pregunta?</p>
      </div>
    </section>
  )
}

export default FAQSection