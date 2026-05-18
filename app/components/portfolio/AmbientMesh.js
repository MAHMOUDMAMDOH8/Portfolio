'use client'

import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion'
import { useMotionProfile } from './lib/useMotionProfile'
import { usePageVisible } from './lib/usePageVisible'

const DESKTOP_COUNT = 22
const LINK_DIST_SQ = 110 * 110

export function AmbientMesh({ className = '', trackWindow = false, enabled = true }) {
  const canvasRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const { lite } = useMotionProfile()
  const pageVisible = usePageVisible()
  const inViewRef = useRef(true)

  useEffect(() => {
    if (reduced || lite || !enabled || !pageVisible) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let lastFrame = 0
    const targetFps = 30
    const frameInterval = 1000 / targetFps

    const particles = Array.from({ length: DESKTOP_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00028,
      vy: (Math.random() - 0.5) * 0.00028,
      r: 1 + Math.random(),
    }))

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      w = parent.clientWidth
      h = parent.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const io = new IntersectionObserver(
      ([e]) => {
        inViewRef.current = e.isIntersecting
      },
      { rootMargin: '80px' }
    )
    io.observe(canvas)

    const mouseRef = { current: { x: 0, y: 0, active: false } }
    const onMove = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top, active: true }
    }
    const onLeave = () => {
      mouseRef.current.active = false
    }

    const draw = (now) => {
      raf = requestAnimationFrame(draw)
      if (!inViewRef.current || !pageVisible) return
      if (now - lastFrame < frameInterval) return
      lastFrame = now

      ctx.clearRect(0, 0, w, h)
      const lineColor = 'rgba(34, 211, 238, 0.07)'
      const dotColor = 'rgba(34, 211, 238, 0.35)'
      const mouse = mouseRef.current

      for (const p of particles) {
        if (mouse.active) {
          const px = p.x * w
          const py = p.y * h
          const dx = mouse.x - px
          const dy = mouse.y - py
          const distSq = dx * dx + dy * dy
          if (distSq < 140 * 140 && distSq > 1) {
            const force = (1 - Math.sqrt(distSq) / 140) * 0.0006
            p.vx -= (dx / Math.sqrt(distSq)) * force
            p.vy -= (dy / Math.sqrt(distSq)) * force
          }
        }
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > 1) p.vx *= -1
        if (p.y < 0 || p.y > 1) p.vy *= -1
        p.x = Math.max(0, Math.min(1, p.x))
        p.y = Math.max(0, Math.min(1, p.y))
        p.vx *= 0.996
        p.vy *= 0.996
      }

      const coords = particles.map((p) => ({ x: p.x * w, y: p.y * h }))

      ctx.strokeStyle = lineColor
      ctx.lineWidth = 0.5
      for (let i = 0; i < coords.length; i++) {
        let links = 0
        for (let j = i + 1; j < coords.length && links < 3; j++) {
          const dx = coords[i].x - coords[j].x
          const dy = coords[i].y - coords[j].y
          if (dx * dx + dy * dy < LINK_DIST_SQ) {
            ctx.beginPath()
            ctx.moveTo(coords[i].x, coords[i].y)
            ctx.lineTo(coords[j].x, coords[j].y)
            ctx.stroke()
            links++
          }
        }
      }

      ctx.fillStyle = dotColor
      for (let i = 0; i < particles.length; i++) {
        ctx.beginPath()
        ctx.arc(coords[i].x, coords[i].y, particles[i].r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    const onPointerMove = (e) => onMove(e.clientX, e.clientY)
    if (trackWindow) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    } else {
      canvas.addEventListener('pointermove', onPointerMove, { passive: true })
      canvas.addEventListener('pointerleave', onLeave)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
      if (trackWindow) {
        window.removeEventListener('pointermove', onPointerMove)
      } else {
        canvas.removeEventListener('pointermove', onPointerMove)
        canvas.removeEventListener('pointerleave', onLeave)
      }
    }
  }, [reduced, lite, enabled, pageVisible, trackWindow])

  if (reduced || lite || !enabled) return null

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-60 ${className}`.trim()}
      aria-hidden
    />
  )
}
