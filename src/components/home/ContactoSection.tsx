import { useState } from 'react'
import type { MensajeContacto } from '../../types/database.types'

function ContactoSection() {
  const [formulario, setFormulario] = useState<MensajeContacto>({
    nombre: '',
    email: '',
    mensaje: '',
  })

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormulario((prev) => ({ ...prev, [name]: value }))
  }

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: aquí luego haremos un insert a la tabla `mensajes_contacto`
    console.log('Formulario a enviar:', formulario)
  }

  return (
    <section>
      <h3>Contacto</h3>
      <form onSubmit={manejarEnvio} style={{ display: 'grid', gap: '0.5rem', maxWidth: '400px' }}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formulario.email}
          onChange={manejarCambio}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={formulario.mensaje}
          onChange={manejarCambio}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default ContactoSection