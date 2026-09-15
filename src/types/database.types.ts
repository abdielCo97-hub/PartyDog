// Tipos que representan las tablas de Supabase.
// Ajusta los campos si tu tabla real tiene columnas distintas.

export interface Categoria {
  id: number
  nombre: string
}

export interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  categoria_id: number
  imagen_url?: string
}

export interface Faq {
  id: number
  pregunta: string
  respuesta: string
}

export interface MensajeContacto {
  nombre: string
  email: string
  mensaje: string
}