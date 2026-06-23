import { useState, useCallback, useRef } from 'react'

export default function useGridGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })
  const rafRef = useRef(null)

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setPos({ x: -999, y: -999 })
  }, [])

  return {
    handlers: { onMouseMove, onMouseLeave },
    maskStyle: {
      WebkitMaskImage: `radial-gradient(circle at ${pos.x}px ${pos.y}px, black 0%, transparent 350px)`,
      maskImage: `radial-gradient(circle at ${pos.x}px ${pos.y}px, black 0%, transparent 350px)`,
    },
  }
}
