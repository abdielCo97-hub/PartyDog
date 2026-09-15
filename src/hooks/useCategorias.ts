import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import type { Categoria } from '../types/database.types'

interface UseCategoriasResult {
  categorias: Categoria[]
  loading: boolean
  error: string | null
}

export function useCategorias(): UseCategoriasResult {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const { data, error } = await supabase
          .from('categorias')
          .select('*')

        if (error) {
          console.error('Error al obtener categorías:', error)
          setError(error.message)
          return
        }

        console.log('Categorías obtenidas:', data)
        setCategorias(data as Categoria[])
      } catch (err) {
        console.error('Error inesperado:', err)
        setError('Ocurrió un error inesperado al conectar con Supabase')
      } finally {
        setLoading(false)
      }
    }

    obtenerCategorias()
  }, [])

  return { categorias, loading, error }
}