'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, FadeInView } from './Section'
import { categoryStyles, skillMatrix, toolNodes, toolStats } from './data'
import { surfaceCard, surfaceCardHover, sectionDivider } from './lib/styles'

const strengthStyles = {
  Core: 'border-[var(--accent)]/40 bg-[var(--accent-soft)] text-[var(--accent)]',
  Strong: 'border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
}

export function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-title" className={sectionDivider}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical arsenal"
          title="Depth across the stack, tuned for reliability and storytelling."
          titleId="skills-title"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillMatrix.map((skill, i) => (
            <motion.article
              key={skill.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`${surfaceCard} ${surfaceCardHover} p-6`}
            >
<div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">{skill.label}</h3>
                <span
                  className={`rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] ${strengthStyles[skill.strength] || strengthStyles.Strong}`}
                >
                  {skill.strength}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {skill.tags.map((tag, tagIdx) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + tagIdx * 0.03 }}
                    whileHover={{ scale: 1.04, borderColor: 'var(--border-accent)' }}
                    className="cursor-default rounded-md border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--text-secondary)] transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <FadeInView delay={0.2} className="mt-16">
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
            Ecosystem at a glance
          </p>
          <div className="relative mx-auto hidden min-h-[480px] w-full max-w-[640px] md:block lg:min-h-[520px] lg:max-w-[700px]">
            <div
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border-subtle)]"
              aria-hidden
            />
            <motion.div
              className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--border-subtle)] opacity-80"
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
              aria-hidden
            />
            {toolNodes.map((tool, index) => {
              const floatDuration = 8 + (index % 4)
              const floatDelay = (index % 5) * 0.6
              return (
                <motion.span
                  key={tool.label}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] shadow-lg backdrop-blur-sm ${categoryStyles[tool.category]}`}
                  style={{ top: tool.style.top, left: tool.style.left }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: floatDuration,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: floatDelay,
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  {tool.label}
                </motion.span>
              )
            })}
            <motion.div
              className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--surface-elevated)] text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-[var(--text-muted)] backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              Trusted Platform
            </motion.div>
          </div>

          <motion.div className="mt-2 grid gap-2 md:hidden">
            {toolNodes.map((tool) => (
              <motion.div
                key={`m-${tool.label}`}
                whileTap={{ scale: 0.98 }}
                className={`${surfaceCard} flex items-center justify-between px-4 py-3`}
              >
                <span className="text-sm font-medium text-[var(--text-primary)]">{tool.label}</span>
                <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${categoryStyles[tool.category]}`}>
                  {tool.category}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500" /> Platform
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Orchestration
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> Activation
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-violet-500" /> Automation
            </span>
          </motion.div>

          <motion.div className="mt-10 grid gap-4 sm:grid-cols-3">
            {toolStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className={`${surfaceCard} p-5 text-center`}
              >
                <p className="text-xl font-semibold text-[var(--text-primary)]">{stat.value}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </FadeInView>
      </div>
    </Section>
  )
}
