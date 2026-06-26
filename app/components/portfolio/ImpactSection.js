'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, StaggerWrapper, staggerItemFast } from './Section'
import { impactStats } from './data'
import { AnimatedStatValue } from './CountUp'
import { CardHover } from './motion/Primitives'

export function ImpactSection() {
  return (
    <Section id="impact" labelledBy="impact-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Impact snapshot"
          title="Data work rooted in outcomes: trusted platforms, confident stakeholders, measurable change."
          titleId="impact-title"
          align="left"
        />

        <StaggerWrapper className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-3">
          {impactStats.map((stat, i) => (
            <motion.div key={stat.title} variants={staggerItemFast}>
              <CardHover className="group relative h-full bg-[var(--bg-elevated)] p-8" glowColor="rgba(198, 242, 78, 0.07)">
                <span className="pointer-events-none absolute right-5 top-4 font-mono text-xs font-semibold text-[var(--text-muted)] opacity-40">
                  0{i + 1}
                </span>
                <p className="text-[clamp(2.4rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.03em] text-[var(--accent)]">
                  <AnimatedStatValue value={stat.value} />
                </p>
                <p className="mt-4 text-base font-semibold text-[var(--text-primary)]">
                  {stat.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-muted)]">
                  {stat.description}
                </p>
                <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </CardHover>
            </motion.div>
          ))}
        </StaggerWrapper>
      </div>
    </Section>
  )
}
