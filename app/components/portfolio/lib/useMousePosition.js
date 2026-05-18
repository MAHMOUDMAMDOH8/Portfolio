'use client'

import { useEffect, useState } from 'react'

/** Normalized pointer position inside a ref element: -1..1 from center. */
export function useMousePosition(ref, enabled = true) {
  const [pos, setPos] = useState({ x: 0, y: 0, active: false })

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      setPos({ x, y, active: true })
    }

    const onLeave = () => setPos({ x: 0, y: 0, active: false })

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [ref, enabled])

  return pos
}
