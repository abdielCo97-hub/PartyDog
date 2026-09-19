import { useEffect, useState } from 'react'
import { supabase } from '../services/supabase'
import type { Faq } from '../types/database.types'

interface UseFaqsResult {
  faqs: Faq[]
  loading: boolean
  error: string | null
}

export function useFaqs(): UseFaqsResult {
  const [faqs, setFaqs] = useState<Faq[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const obtenerFaqs = async () => {
      try {
        const { data, error } = await supabase
          .from('faq')
          .select('*')
          .eq('activo', true)
          .order('orden_visualizacion', { ascending: true })

        if (error) {
          console.error('Error al obtener FAQs:', error)
          setError(error.message)
          return
        }

        console.log('FAQs obtenidas:', data)
        setFaqs(data as Faq[])
      } catch (err) {
        console.error('Error inesperado:', err)
        setError('Ocurrió un error inesperado al conectar con Supabase')
      } finally {
        setLoading(false)
      }
    }

    obtenerFaqs()
  }, [])

  return { faqs, loading, error }
}