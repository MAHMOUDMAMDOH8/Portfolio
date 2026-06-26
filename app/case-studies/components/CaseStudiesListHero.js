'use client'

import { motion } from 'framer-motion'
import { AnimatedStatValue } from '../../components/portfolio/CountUp'

export function CaseStudiesListHero({ count, featuredCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-12"
    >
      <p className="eyebrow mb-4">Deep dives</p>
      <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl">
        Architecture, impact, and how the pipelines ship
      </h1>
      <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
        End-to-end write-ups across lakehouse, streaming, and analytics — problem framing,
        stack choices, metrics, and business outcomes recruiters and engineers can scan in
        minutes.
      </p>
      <div className="mt-8 flex gap-8">
        <div>
          <p className="text-2xl font-bold tabular-nums text-[var(--accent)]">
            <AnimatedStatValue value={`${count}`} />
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Case studies
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold tabular-nums text-[var(--accent)]">
            <AnimatedStatValue value={`${featuredCount}`} />
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Featured builds
          </p>
        </div>
      </div>
    </motion.div>
  )
}
