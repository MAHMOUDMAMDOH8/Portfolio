'use client'

import { useCallback, useRef, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion'

const NODES = [
  { id: 'ingest', label: 'Ingest', x: 8, y: 48, tech: 'Kafka · NiFi' },
  { id: 'store', label: 'Store', x: 32, y: 28, tech: 'MinIO · Iceberg' },
  { id: 'transform', label: 'Transform', x: 56, y: 52, tech: 'Spark · dbt' },
  { id: 'serve', label: 'Serve', x: 80, y: 32, tech: 'ClickHouse · BI' },
]

const EDGES = [
  ['ingest', 'store'],
  ['store', 'transform'],
  ['transform', 'serve'],
]

function nodeById(id) {
  return NODES.find((n) => n.id === id)
}

export function InteractiveDataPipeline({ className = '' }) {
  const containerRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [activeId, setActiveId] = useState(null)
  const [hovered, setHovered] = useState(false)

  const springX = useSpring(0, { stiffness: 120, damping: 22 })
  const springY = useSpring(0, { stiffness: 120, damping: 22 })

  const onPointerMove = useCallback(
    (e) => {
      if (reduced || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      springX.set(x * 14)
      springY.set(y * 10)
    },
    [reduced, springX, springY]
  )

  const onPointerLeave = useCallback(() => {
    springX.set(0)
    springY.set(0)
    setHovered(false)
    setActiveId(null)
  }, [springX, springY])

  return (
    <motion.div
      ref={containerRef}
      className={`relative h-[88px] w-full min-w-[280px] select-none sm:h-[100px] ${className}`.trim()}
      onPointerMove={onPointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={onPointerLeave}
      role="img"
      aria-label="Interactive data pipeline: Ingest, Store, Transform, Serve"
    >
      <motion.div
        className="pointer-events-none absolute -inset-4 rounded-3xl"
        style={{
          x: springX,
          y: springY,
          background:
            'radial-gradient(420px circle at 50% 50%, rgba(6, 182, 212, 0.12), transparent 65%)',
          opacity: hovered && !reduced ? 1 : 0,
        }}
        aria-hidden
      />

      <svg
        className="h-full w-full text-[var(--text-muted)]"
        viewBox="0 0 100 64"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="pipe-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(6 182 212)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="rgb(6 182 212)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="rgb(59 130 246)" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        {EDGES.map(([from, to]) => {
          const a = nodeById(from)
          const b = nodeById(to)
          if (!a || !b) return null
          const lit = activeId === from || activeId === to
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={lit ? 'url(#pipe-flow)' : 'currentColor'}
              strokeWidth={lit ? 0.55 : 0.35}
              strokeOpacity={lit ? 1 : 0.35}
              className="transition-all duration-300"
            />
          )
        })}

        {!reduced
          ? EDGES.map(([from, to]) => {
              const a = nodeById(from)
              const b = nodeById(to)
              if (!a || !b) return null
              return (
                <circle key={`pulse-${from}-${to}`} r="0.9" fill="rgb(6 182 212)" className="pipeline-packet">
                  <animateMotion
                    dur="3.2s"
                    repeatCount="indefinite"
                    path={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
                  />
                </circle>
              )
            })
          : null}
      </svg>

      <div className="absolute inset-0">
        {NODES.map((node) => {
          const isActive = activeId === node.id
          return (
            <motion.button
              key={node.id}
              type="button"
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2 py-1.5 text-center shadow-sm backdrop-blur-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-2.5 sm:py-2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onMouseEnter={() => setActiveId(node.id)}
              onFocus={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              onBlur={() => setActiveId(null)}
              whileHover={reduced ? undefined : { scale: 1.06, y: -2 }}
              whileTap={reduced ? undefined : { scale: 0.98 }}
              animate={
                isActive && !reduced
                  ? {
                      borderColor: 'rgba(6, 182, 212, 0.55)',
                      boxShadow: '0 0 24px rgba(6, 182, 212, 0.2)',
                    }
                  : {}
              }
              aria-pressed={isActive}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[var(--accent)] sm:text-[10px]">
                {node.label}
              </span>
              <span className="hidden max-w-[72px] truncate text-[8px] font-medium text-[var(--text-muted)] sm:block">
                {node.tech}
              </span>
            </motion.button>
          )
        })}
      </div>

      <p
        className={`pointer-events-none absolute -bottom-5 left-0 right-0 text-center text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--text-muted)] transition-opacity duration-300 sm:text-[10px] ${hovered ? 'opacity-100' : 'opacity-50'}`}
      >
        {hovered ? 'Hover nodes to trace the flow' : 'Move cursor to explore the pipeline'}
      </p>
    </motion.div>
  )
}
