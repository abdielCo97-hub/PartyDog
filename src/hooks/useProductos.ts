import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import type { Producto } from '../types/database.types'

interface UseProductosResult {
  productos: Producto[]
  loading: boolean
  error: string | null
}

export function useProductos(soloDestacados: boolean = false): UseProductosResult {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        let query = supabase
          .from('productos')
          .select('*')
          .eq('activo', true)

        if (soloDestacados) {
          query = query.eq('destacado', true)
        }

        const { data, error } = await query

        if (error) {
          console.error('Error al obtener productos:', error)
          setError(error.message)
          return
        }

        console.log('Productos obtenidos:', data)
        setProductos(data as Producto[])
      } catch (err) {
        console.error('Error inesperado:', err)
        setError('Ocurrió un error inesperado al conectar con Supabase')
      } finally {
        setLoading(false)
      }
    }

    obtenerProductos()
  }, [soloDestacados])

  return { productos, loading, error }
}