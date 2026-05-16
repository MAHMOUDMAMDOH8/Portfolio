'use client'

import { motion } from 'framer-motion'
import { AnimatedStatValue } from '../../components/portfolio/CountUp'

export function CaseStudiesListHero({ count, featuredCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mb-14 text-center"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-400/90">Deep dives</p>
      <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl">
        Architecture, impact, and how the pipelines ship
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
        End-to-end write-ups across lakehouse, streaming, and analytics — problem framing, stack choices, metrics, and
        business outcomes recruiters and engineers can scan in minutes.
      </p>
      <div className="mx-auto mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none">
          <p className="text-2xl font-semibold tabular-nums text-zinc-900 dark:text-white">
            <AnimatedStatValue value={String(count)} />
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Case studies</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none">
          <p className="text-2xl font-semibold tabular-nums text-zinc-900 dark:text-white">
            <AnimatedStatValue value={String(featuredCount)} />
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">Featured builds</p>
        </div>
      </div>
    </motion.div>
  )
}
