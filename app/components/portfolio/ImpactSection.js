'use client'

import { motion } from 'framer-motion'
import { AnimatedStatValue } from './CountUp'
import { Section, SectionHeader } from './Section'
import { impactStats } from './data'

const divider = 'border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24'

export function ImpactSection() {
  return (
    <Section id="impact" labelledBy="impact-title" className={divider}>
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          eyebrow="Impact snapshot"
          title="Data work rooted in outcomes: trusted platforms, confident stakeholders, measurable change."
          titleId="impact-title"
        />
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {impactStats.map((impact) => (
            <motion.div
              key={impact.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50/80 p-6 shadow-sm transition hover:border-emerald-400/40 dark:border-white/[0.06] dark:from-white/[0.04] dark:to-transparent dark:shadow-none dark:backdrop-blur-sm dark:hover:border-emerald-500/30"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-400/90">
                {impact.title}
              </p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-zinc-900 dark:text-white">
                <AnimatedStatValue value={impact.value} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{impact.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  )
}
