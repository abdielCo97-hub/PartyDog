import { useEffect, useRef } from 'react'
import './PawCursor.css'

function PawCursor() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)
  const sideToggleRef = useRef(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      const last = lastPosRef.current

      if (!last) {
        lastPosRef.current = { x, y }
        return
      }

      const dx = x - last.x
      const dy = y - last.y
      const distancia = Math.sqrt(dx * dx + dy * dy)

      // Solo crea una huella nueva si el mouse se movió lo suficiente
      if (distancia < 45) return

      // Ángulo en el que se está moviendo el mouse (para rotar la huella)
      const angulo = Math.atan2(dy, dx) * (180 / Math.PI) + 90

      // Vector perpendicular al movimiento, para alternar izquierda/derecha
      const perpX = -dy / distancia
      const perpY = dx / distancia
      const lado = sideToggleRef.current ? 1 : -1
      const offsetX = perpX * 9 * lado
      const offsetY = perpY * 9 * lado

      const paw = document.createElement('span')
      paw.className = 'paw-print'
      paw.textContent = '🐾'
      paw.style.left = `${x + offsetX}px`
      paw.style.top = `${y + offsetY}px`
      paw.style.transform = `translate(-50%, -50%) rotate(${angulo}deg)`

      containerRef.current?.appendChild(paw)
      setTimeout(() => paw.remove(), 1100)

      sideToggleRef.current = !sideToggleRef.current
      lastPosRef.current = { x, y }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={containerRef} className="paw-cursor-container" />
}

export default PawCursor