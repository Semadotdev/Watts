import { useState, useCallback, useRef } from 'react'

export default function useMouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const rafRef = useRef(null)

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    })
  }, [])

  const show = () => setVisible(true)
  const hide = () => setVisible(false)

  return {
    handlers: { onMouseMove, onMouseEnter: show, onMouseLeave: hide },
    glow: (
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 z-0"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(214,171,52,0.08) 0%, transparent 60%)',
          }}
        />
      </div>
    ),
  }
}
