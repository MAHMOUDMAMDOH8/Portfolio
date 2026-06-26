'use client'

import { useEffect, useRef } from 'react'

/**
 * Living "data-flow" network — nodes connected by pipeline edges with
 * packets streaming along them. GPU-light: ~18 nodes, capped DPR,
 * pauses when the tab is hidden, and renders a single static frame
 * under prefers-reduced-motion.
 */
export function DataFlowCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c6f24e'

    let raf = 0
    let w = 0
    let h = 0
    let dpr = 1
    let nodes = []
    let edges = []

    const rand = (a, b) => a + Math.random() * (b - a)

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // loose grid of nodes with jitter
      const cols = w < 640 ? 3 : w < 1100 ? 4 : 6
      const rows = w < 640 ? 4 : 4
      nodes = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cellW = w / cols
          const cellH = h / rows
          nodes.push({
            x: cellW * c + cellW * rand(0.25, 0.75),
            y: cellH * r + cellH * rand(0.25, 0.75),
            pulse: rand(0, Math.PI * 2),
          })
        }
      }

      // connect each node to its nearest right/down neighbours → pipeline feel
      edges = []
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const near = nodes
          .map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
          .filter((o) => o.j !== i && o.d < Math.max(w, h) / cols * 1.25)
          .sort((p, q) => p.d - q.d)
          .slice(0, 2)
        for (const { j } of near) {
          if (i < j) edges.push({ a: i, b: j, t: Math.random(), speed: rand(0.0016, 0.004) })
        }
      }
    }

    const hexToRgb = (hex) => {
      const m = hex.replace('#', '')
      const n = parseInt(m.length === 3 ? m.split('').map((x) => x + x).join('') : m, 16)
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
    }
    const [ar, ag, ab] = hexToRgb(accent)

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h)

      // edges
      for (const e of edges) {
        const a = nodes[e.a]
        const b = nodes[e.b]
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(${ar},${ag},${ab},0.07)`
        ctx.lineWidth = 1
        ctx.stroke()

        if (!reduced) {
          e.t += e.speed
          if (e.t > 1) e.t -= 1
          // packet position
          const px = a.x + (b.x - a.x) * e.t
          const py = a.y + (b.y - a.y) * e.t
          const glow = ctx.createRadialGradient(px, py, 0, px, py, 5)
          glow.addColorStop(0, `rgba(${ar},${ag},${ab},0.9)`)
          glow.addColorStop(1, `rgba(${ar},${ag},${ab},0)`)
          ctx.fillStyle = glow
          ctx.beginPath()
          ctx.arc(px, py, 5, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // nodes
      for (const node of nodes) {
        const p = reduced ? 0.5 : 0.5 + 0.5 * Math.sin(time * 0.001 + node.pulse)
        ctx.beginPath()
        ctx.arc(node.x, node.y, 1.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${ar},${ag},${ab},${0.18 + p * 0.22})`
        ctx.fill()
      }

      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const onResize = () => {
      build()
      if (reduced) draw(0)
    }

    build()
    if (reduced) {
      draw(0)
    } else {
      raf = requestAnimationFrame(draw)
    }

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else if (!reduced) {
        raf = requestAnimationFrame(draw)
      }
    }

    window.addEventListener('resize', onResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    />
  )
}
