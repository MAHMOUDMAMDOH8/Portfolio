'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export function RadarChart({ skills }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })
  const [animProgress, setAnimProgress] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let frame
    const start = performance.now()
    const duration = 1200
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      setAnimProgress(eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView])

  const cx = 150, cy = 150, radius = 120
  const levels = [20, 40, 60, 80, 100]
  const angleStep = (2 * Math.PI) / skills.length

  const gridLines = levels.map((level) => {
    const r = (level / 100) * radius
    const pts = skills.map((_, i) => {
      const a = angleStep * i - Math.PI / 2
      return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
    }).join(' ')
    return { level, r, pts }
  })

  const axes = skills.map((_, i) => {
    const a = angleStep * i - Math.PI / 2
    const x2 = cx + radius * Math.cos(a)
    const y2 = cy + radius * Math.sin(a)
    return { x2, y2 }
  })

  const dataPoints = skills.map((skill, i) => {
    const lvl = skill.level || 85
    const a = angleStep * i - Math.PI / 2
    const r = (lvl / 100) * radius * animProgress
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), label: skill.label, level: lvl }
  })
  const polygonPts = dataPoints.map((p) => `${p.x},${p.y}`).join(' ')

  return (
    <div ref={ref} className="flex justify-center">
      <svg viewBox="0 0 300 300" className="w-full max-w-[260px] h-auto" role="img" aria-label="Skills radar chart">
        <defs>
          <radialGradient id="radar-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(220 38 38 / 0.15)" />
            <stop offset="100%" stopColor="rgb(220 38 38 / 0.02)" />
          </radialGradient>
        </defs>

        {gridLines.map((g) => (
          <polygon key={g.level} points={g.pts} fill="none" stroke="var(--border-subtle)" strokeWidth="1" />
        ))}

        {axes.map((a, i) => (
          <line key={i} x1={cx} y1={cy} x2={a.x2} y2={a.y2} stroke="var(--border-subtle)" strokeWidth="1" />
        ))}

        {dataPoints.length > 0 && (
          <motion.polygon
            points={polygonPts}
            fill="url(#radar-fill)"
            stroke="var(--accent)"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}

        {dataPoints.map((p, i) => (
          <motion.circle
            key={skills[i].label}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="var(--accent)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
          />
        ))}

        {skills.map((skill, i) => {
          const a = angleStep * i - Math.PI / 2
          const labelR = radius + 22
          const lx = cx + labelR * Math.cos(a)
          const ly = cy + labelR * Math.sin(a)
          const anchor = Math.cos(a) >= 0 ? 'start' : 'end'
          return (
            <text
              key={skill.label}
              x={lx}
              y={ly}
              textAnchor={anchor}
              dominantBaseline="middle"
              fill="var(--text-secondary)"
              className="text-[9px] font-semibold uppercase tracking-wider"
            >
              {skill.label}
            </text>
          )
        })}

        {levels.map((lvl) => {
          const angle = -Math.PI / 2
          const r = (lvl / 100) * radius
          const lx = cx + r * Math.cos(angle)
          const ly = cy + r * Math.sin(angle)
          return (
            <text
              key={lvl}
              x={lx}
              y={ly - 6}
              textAnchor="middle"
              fill="var(--text-muted)"
              className="text-[8px]"
            >
              {lvl}%
            </text>
          )
        })}
      </svg>
    </div>
  )
}
