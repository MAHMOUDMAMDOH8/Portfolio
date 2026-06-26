'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, FadeInView, StaggerWrapper, staggerItemFast } from './Section'
import { categoryStyles, skillMatrix, toolNodes, toolStats } from './data'
import { RadarChart } from './RadarChart'
import { Magnetic } from './motion/Primitives'

const strengthStyles = {
  Core: 'border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]',
  Strong: 'border-[var(--border-subtle)] bg-[var(--surface-muted)] text-[var(--text-primary)]',
  Proficient: 'border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-secondary)]',
  Familiar: 'border-[var(--border-subtle)] bg-transparent text-[var(--text-muted)]',
}

export function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical arsenal"
          title="Depth across the stack, tuned for reliability and storytelling."
          titleId="skills-title"
        />

        <StaggerWrapper className="grid gap-4 sm:grid-cols-2">
          {skillMatrix.map((group) => (
            <motion.div
              key={group.label}
              variants={staggerItemFast}
              whileHover={{ y: -4, scale: 1.01 }}
              className="card-premium p-5"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {group.label}
                </h3>
                <span
                  className={`rounded-md border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                    strengthStyles[group.strength] || ''
                  }`}
                >
                  {group.strength}
                </span>
              </div>

              <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-muted)]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--accent-dim)] to-[var(--accent)]"
                />
              </div>

              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <Magnetic key={tag} strength={0.15}>
                    <span className="inline-block rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2 py-1 font-mono text-[10px] font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)] hover:scale-[1.05]">
                      {tag}
                    </span>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerWrapper>

        <FadeInView className="mt-16">
          <div className="mx-auto grid max-w-3xl items-center gap-10 md:grid-cols-2">
            <div>
              <p className="eyebrow">Radar profile</p>
              <h3 className="mt-2 text-balance text-xl font-semibold text-[var(--text-primary)]">
                Four pillars of the data stack
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Each axis represents a core capability area. The overlay shows relative depth
                across the platform, orchestration, activation, and engineering layers that define
                a modern data practice.
              </p>
            </div>
            <RadarChart skills={skillMatrix} />
          </div>
        </FadeInView>

        <FadeInView delay={0.2} className="mt-16">
          <p className="mb-8 text-center eyebrow">Ecosystem at a glance</p>

          <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            <div className="absolute inset-[15%] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  Trusted Platform
                </p>
              </div>
            </div>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 440 440" aria-hidden>
              <circle cx="220" cy="220" r="170" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" />
              <circle cx="220" cy="220" r="120" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" />
              <circle cx="220" cy="220" r="70" fill="none" stroke="var(--border-subtle)" strokeWidth="0.5" />
            </svg>
            {toolNodes.map((node, i) => (
              <FadeInView key={node.label} delay={i * 0.03}>
                <Magnetic strength={0.12}>
                  <span
                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-default whitespace-nowrap rounded-md border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2 py-1 font-mono text-[10px] font-medium transition hover:border-[var(--border-accent)] hover:text-[var(--accent)] hover:scale-[1.05] ${
                      categoryStyles[node.category] || ''
                    }`}
                    style={node.style}
                  >
                    {node.label}
                  </span>
                </Magnetic>
              </FadeInView>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {toolStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-semibold text-[var(--text-primary)]">{stat.value}</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </Section>
  )
}
