'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(window.scrollY / h, 1) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-[linear-gradient(90deg,var(--accent-dim),var(--accent),var(--cyan))] transition-[width] duration-150 ease-out shadow-[0_0_10px_var(--accent-glow)]"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
