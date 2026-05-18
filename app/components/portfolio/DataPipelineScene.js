'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion'
import { useMotionProfile } from './lib/useMotionProfile'
import { usePageVisible } from './lib/usePageVisible'

const NODES = [
  { id: 'ingest', label: 'Ingest', tech: 'Kafka · NiFi', x: 0.1, y: 0.62 },
  { id: 'store', label: 'Store', tech: 'MinIO · Iceberg', x: 0.34, y: 0.28 },
  { id: 'transform', label: 'Transform', tech: 'Spark · dbt', x: 0.58, y: 0.68 },
  { id: 'serve', label: 'Serve', tech: 'ClickHouse · BI', x: 0.88, y: 0.32 },
]

const EDGES = [
  { from: 'ingest', to: 'store', cp: { x: 0.2, y: 0.2 } },
  { from: 'store', to: 'transform', cp: { x: 0.48, y: 0.55 } },
  { from: 'transform', to: 'serve', cp: { x: 0.76, y: 0.38 } },
]

function nodeById(id) {
  return NODES.find((n) => n.id === id)
}

function quadPoint(t, p0, p1, p2) {
  const u = 1 - t
  return {
    x: u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x,
    y: u * u * p0.y + 2 * u * t * p1.y + t * t * p2.y,
  }
}

function buildParticles(lite) {
  const list = []
  const perEdge = lite ? 2 : 4
  EDGES.forEach((edge, edgeIndex) => {
    for (let i = 0; i < perEdge; i++) {
      list.push({
        edgeIndex,
        t: (i / perEdge) * 0.85,
        speed: 0.00045 + (edgeIndex % 3) * 0.00012,
        size: 1.8 + (i % 2) * 0.8,
        trail: lite ? 3 : 5,
      })
    }
  })
  return list
}

export function DataPipelineScene({ className = '' }) {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const { lite } = useMotionProfile()
  const pageVisible = usePageVisible()
  const [activeId, setActiveId] = useState(null)
  const [hovered, setHovered] = useState(false)
  const [burst, setBurst] = useState(0)
  const particlesRef = useRef(buildParticles(false))
  const ripplesRef = useRef([])

  const tiltX = useSpring(0, { stiffness: 140, damping: 24 })
  const tiltY = useSpring(0, { stiffness: 140, damping: 24 })
  const rotateX = useTransform(tiltY, [-1, 1], [6, -6])
  const rotateY = useTransform(tiltX, [-1, 1], [-8, 8])

  const litEdges = useMemo(() => {
    if (!activeId) return new Set()
    const lit = new Set()
    EDGES.forEach((e, i) => {
      if (e.from === activeId || e.to === activeId) lit.add(i)
    })
    return lit
  }, [activeId])

  useEffect(() => {
    particlesRef.current = buildParticles(lite)
  }, [lite])

  const onPointerMove = useCallback(
    (e) => {
      if (reduced || lite || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      tiltX.set(x * 0.35)
      tiltY.set(y * 0.28)
    },
    [reduced, lite, tiltX, tiltY]
  )

  const onPointerLeave = useCallback(() => {
    tiltX.set(0)
    tiltY.set(0)
    setHovered(false)
    setActiveId(null)
  }, [tiltX, tiltY])

  const triggerBurst = useCallback(() => {
    if (reduced) return
    setBurst((b) => b + 1)
    ripplesRef.current.push({ x: 0.5, y: 0.5, r: 0, life: 1 })
    particlesRef.current.forEach((p) => {
      p.speed = 0.0018
    })
    window.setTimeout(() => {
      particlesRef.current.forEach((p, i) => {
        p.speed = 0.00045 + (i % 3) * 0.00012
      })
    }, 1400)
  }, [reduced])

  const onNodeActivate = useCallback((id, nx, ny) => {
    setActiveId(id)
    if (reduced) return
    ripplesRef.current.push({ x: nx, y: ny, r: 0, life: 1 })
  }, [reduced])

  useEffect(() => {
    if (reduced) return
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    let lastFrame = 0
    let inView = true
    const frameInterval = lite ? 1000 / 24 : 1000 / 30
    const useGlow = !lite

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
      },
      { rootMargin: '120px' }
    )
    io.observe(container)

    const resize = () => {
      w = container.clientWidth
      h = container.clientHeight
      const dpr = Math.min(window.devicePixelRatio || 1, lite ? 1.25 : 1.75)
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const getPath = (edge) => {
      const a = nodeById(edge.from)
      const b = nodeById(edge.to)
      if (!a || !b) return null
      return {
        p0: { x: a.x * w, y: a.y * h },
        p1: { x: edge.cp.x * w, y: edge.cp.y * h },
        p2: { x: b.x * w, y: b.y * h },
      }
    }

    const draw = (now) => {
      raf = requestAnimationFrame(draw)
      if (!inView || !pageVisible) return
      if (now - lastFrame < frameInterval) return
      lastFrame = now

      ctx.clearRect(0, 0, w, h)
      const isDark = document.documentElement.classList.contains('dark')
      const baseStroke = isDark ? 'rgba(100, 116, 139, 0.35)' : 'rgba(148, 163, 184, 0.45)'
      const glowStroke = isDark ? 'rgba(34, 211, 238, 0.85)' : 'rgba(6, 182, 212, 0.9)'
      const particleCore = isDark ? '#67e8f9' : '#06b6d4'
      const particleGlow = isDark ? 'rgba(34, 211, 238, 0.55)' : 'rgba(6, 182, 212, 0.5)'

      EDGES.forEach((edge, edgeIndex) => {
        const path = getPath(edge)
        if (!path) return
        const lit = litEdges.has(edgeIndex)

        ctx.beginPath()
        ctx.moveTo(path.p0.x, path.p0.y)
        ctx.quadraticCurveTo(path.p1.x, path.p1.y, path.p2.x, path.p2.y)

        if (lit && useGlow) {
          ctx.strokeStyle = glowStroke
          ctx.lineWidth = 2.2
          ctx.shadowColor = particleGlow
          ctx.shadowBlur = 14
        } else if (lit) {
          ctx.strokeStyle = glowStroke
          ctx.lineWidth = 2
        } else {
          ctx.strokeStyle = baseStroke
          ctx.lineWidth = 1.2
          ctx.shadowBlur = 0
        }
        ctx.stroke()
        ctx.shadowBlur = 0

        if (lit && !lite) {
          ctx.setLineDash([4, 10])
          ctx.lineDashOffset = -Date.now() / 40
          ctx.strokeStyle = isDark ? 'rgba(34, 211, 238, 0.35)' : 'rgba(6, 182, 212, 0.4)'
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.setLineDash([])
        }
      })

      const speedMult = activeId ? 2.2 : 1

      for (const p of particlesRef.current) {
        const edge = EDGES[p.edgeIndex]
        const path = getPath(edge)
        if (!path) continue

        p.t += p.speed * speedMult
        if (p.t > 1) p.t -= 1

        const head = quadPoint(p.t, path.p0, path.p1, path.p2)
        const lit = litEdges.has(p.edgeIndex)

        for (let i = 0; i < p.trail; i++) {
          const tt = p.t - i * 0.018
          if (tt < 0) continue
          const pt = quadPoint(tt, path.p0, path.p1, path.p2)
          const alpha = (1 - i / p.trail) * (lit ? 0.7 : 0.35)
          if (alpha <= 0) continue
          const trailRadius = Math.max(0.2, p.size * (1 - i / p.trail))
          ctx.beginPath()
          ctx.fillStyle = isDark ? `rgba(34, 211, 238, ${alpha * 0.55})` : `rgba(6, 182, 212, ${alpha * 0.5})`
          ctx.arc(pt.x, pt.y, trailRadius, 0, Math.PI * 2)
          ctx.fill()
        }

        const headRadius = Math.max(0.35, p.size + (lit ? 0.6 : 0))
        ctx.beginPath()
        ctx.fillStyle = particleCore
        if (useGlow) {
          ctx.shadowColor = particleGlow
          ctx.shadowBlur = lit ? 10 : 4
        }
        ctx.arc(head.x, head.y, headRadius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      ripplesRef.current = ripplesRef.current
        .map((r) => ({ ...r, r: r.r + 2.8, life: r.life - 0.028 }))
        .filter((r) => r.life > 0)

      for (const ripple of ripplesRef.current) {
        const rx = ripple.x * w
        const ry = ripple.y * h
        ctx.beginPath()
        ctx.strokeStyle = isDark ? `rgba(34, 211, 238, ${ripple.life * 0.35})` : `rgba(6, 182, 212, ${ripple.life * 0.4})`
        ctx.lineWidth = 1.5
        ctx.arc(rx, ry, Math.max(0, ripple.r), 0, Math.PI * 2)
        ctx.stroke()
      }

    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [reduced, lite, pageVisible, litEdges, activeId])

  return (
    <motion.div
      ref={containerRef}
      className={`pipeline-scene relative w-full ${className}`.trim()}
      style={{ perspective: 900 }}
      onPointerMove={onPointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]/80 p-4 shadow-[var(--shadow-card)] backdrop-blur-md sm:p-5"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-60"
          animate={
            hovered && !reduced
              ? { background: 'radial-gradient(600px circle at 50% 40%, var(--accent-soft), transparent 65%)' }
              : { background: 'transparent' }
          }
          aria-hidden
        />

        <div className="relative h-[148px] w-full sm:h-[168px]">
          {!reduced ? (
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
          ) : (
            <svg className="absolute inset-0 h-full w-full text-[var(--text-muted)]" viewBox="0 0 100 64" aria-hidden>
              <path d="M 10 40 Q 22 12 34 22 T 58 44 T 88 26" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
            </svg>
          )}

          <div className="absolute inset-0">
            {NODES.map((node, i) => {
              const isActive = activeId === node.id
              return (
                <motion.button
                  key={node.id}
                  type="button"
                  className="pipeline-node absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 rounded-xl border bg-[var(--bg-elevated)]/95 px-2.5 py-2 text-center shadow-lg backdrop-blur-md sm:px-3 sm:py-2.5"
                  style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%` }}
                  onMouseEnter={() => onNodeActivate(node.id, node.x, node.y)}
                  onFocus={() => onNodeActivate(node.id, node.x, node.y)}
                  onMouseLeave={() => setActiveId(null)}
                  onBlur={() => setActiveId(null)}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.08 : 1,
                    borderColor: isActive ? 'rgba(34, 211, 238, 0.7)' : 'var(--border-subtle)',
                    boxShadow: isActive
                      ? '0 0 32px rgba(6, 182, 212, 0.35), 0 8px 24px rgba(0,0,0,0.12)'
                      : '0 4px 16px rgba(0,0,0,0.08)',
                  }}
                  transition={{ delay: i * 0.08, type: 'spring', stiffness: 320, damping: 22 }}
                  whileHover={reduced ? undefined : { y: -4 }}
                  whileTap={reduced ? undefined : { scale: 0.96 }}
                  aria-pressed={isActive}
                >
                  {isActive && !reduced ? (
                    <motion.span
                      className="absolute inset-0 rounded-xl border border-[var(--accent)]"
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.45 }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      aria-hidden
                    />
                  ) : null}
                  <span className="relative text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)] sm:text-[10px]">
                    {node.label}
                  </span>
                  <span className="relative hidden max-w-[80px] truncate text-[8px] font-medium text-[var(--text-muted)] sm:block">
                    {node.tech}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>

        <motion.div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle)] pt-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] sm:text-[10px]">
            {hovered ? 'Nodes light up downstream paths' : 'Tilt · hover nodes · trace live packets'}
          </p>
          <motion.button
            type="button"
            onClick={triggerBurst}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-[var(--border-accent)] bg-[var(--accent-soft)] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] transition hover:brightness-110 sm:text-[10px]"
          >
            Run pipeline
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
