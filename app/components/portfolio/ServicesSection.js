'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, StaggerWrapper, staggerItemFast } from './Section'
import { offerings } from './data'
import { FaLayerGroup, FaStream, FaRobot } from 'react-icons/fa'
import { CardHover } from './motion/Primitives'

const icons = [FaLayerGroup, FaStream, FaRobot]

export function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I deliver"
          title="Capabilities I bring to data platform teams."
          titleId="services-title"
          align="left"
        />

        <StaggerWrapper className="grid gap-4 sm:grid-cols-3">
          {offerings.map((offering, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={offering.title} variants={staggerItemFast} whileHover={{ y: -6 }}>
                <CardHover className="card-premium group relative h-full overflow-hidden p-7" glowColor="rgba(198, 242, 78, 0.08)">
                  <span className="pointer-events-none absolute -right-2 top-2 font-mono text-6xl font-bold text-[var(--text-primary)] opacity-[0.04]">
                    0{i + 1}
                  </span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-accent)] bg-[var(--accent-soft)] transition-all duration-300 group-hover:bg-[var(--accent)]">
                    <Icon className="text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--accent-ink)]" size={18} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                    {offering.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {offering.body}
                  </p>
                  <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[var(--accent)] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </CardHover>
              </motion.div>
            )
          })}
        </StaggerWrapper>
      </div>
    </Section>
  )
}
