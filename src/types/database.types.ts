export interface Categoria {
  id: number
  nombre: string
}

export interface Producto {
  id: number
  created_at: string
  categoria_id: number | null
  nombre: string | null
  descripcion: string | null
  precio: number | null
  imagen_url: string | null
  peso_gramos: number | null
  tiempo_preparacion_horas: number | null
  disponible: boolean | null
  destacado: boolean | null
  activo: boolean | null
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