import { useState } from 'react'
import { supabase } from '../../services/supabase'
import type { MensajeContacto } from '../../types/database.types'
import './ContactoSection.css'

function ContactoSection() {
  const [formulario, setFormulario] = useState<MensajeContacto>({
    nombre: '',
    telefono: '',
    correo: '',
    asunto: '',
    mensaje: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormulario((prev) => ({ ...prev, [name]: value }))
  }

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    setError(null)
    setExito(false)

    try {
      const { error } = await supabase
        .from('mensajes_contacto')
        .insert([
          {
            ...formulario,
            estatus: 'pendiente',
            respondio: false,
            activo: true,
          },
        ])

      if (error) {
        console.error('Error al enviar mensaje:', error)
        setError('No pudimos enviar tu mensaje. Intenta de nuevo.')
        return
      }

      setExito(true)
      setFormulario({ nombre: '', telefono: '', correo: '', asunto: '', mensaje: '' })
    } catch (err) {
      console.error('Error inesperado:', err)
      setError('Ocurrió un error inesperado. Intenta de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="contacto-section">
      <h3>Contacto</h3>

      {exito && (
        <p className="contacto-mensaje-exito">
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </p>
      )}

      {error && <p className="contacto-mensaje-error">{error}</p>}

      <form onSubmit={manejarEnvio} className="contacto-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Tu teléfono"
          value={formulario.telefono}
          onChange={manejarCambio}
        />
        <input
          type="email"
          name="correo"
          placeholder="Tu correo"
          value={formulario.correo}
          onChange={manejarCambio}
          required
        />
        <input
          type="text"
          name="asunto"
          placeholder="Asunto"
          value={formulario.asunto}
          onChange={manejarCambio}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={formulario.mensaje}
          onChange={manejarCambio}
          required
        />
        <button type="submit" disabled={enviando}>
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  )
}

export default ContactoSection