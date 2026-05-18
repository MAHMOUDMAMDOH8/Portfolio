'use client'

import { motion } from 'framer-motion'
import { AnimatedStatValue } from './CountUp'
import { Section, SectionHeader, FadeInView } from './Section'
import { impactStats } from './data'

import { sectionDivider, surfaceCard } from './lib/styles'

const divider = sectionDivider

export function ImpactSection() {
  return (
    <Section id="impact" labelledBy="impact-title" className={divider}>
      <FadeInView className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact snapshot"
          title="Data work rooted in outcomes: trusted platforms, confident stakeholders, measurable change."
          titleId="impact-title"
        />
        <div data-reveal-stagger className="grid gap-5 md:grid-cols-3">
          {impactStats.map((impact) => (
            <motion.div
              key={impact.title}
              data-reveal-item
              whileHover={{ y: -4 }}
              className={`${surfaceCard} bg-gradient-to-br from-[var(--surface-elevated)] to-transparent p-6`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)]">
                {impact.title}
              </p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-[var(--text-primary)]">
                <AnimatedStatValue value={impact.value} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </FadeInView>
    </Section>
  )
}
