'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, FadeInView, StaggerWrapper, staggerItemFast } from './Section'
import { aboutBody, aboutLead, bootcampTraining, education, experience, learningFocus } from './data'

export function AboutSection() {
  return (
    <Section id="about" labelledBy="about-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title={aboutLead}
          description={aboutBody}
          titleId="about-title"
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <FadeInView className="card-premium p-6">
              <p className="eyebrow mb-3">Education</p>
              <p className="text-lg font-semibold text-[var(--text-primary)]">{education.degree}</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{education.institution}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                {education.period}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                {education.detail}
              </p>
            </FadeInView>

            <FadeInView delay={0.1} className="mt-5 space-y-4">
              {learningFocus.map((group) => (
                <div key={group.label} className="card-premium p-5">
                  <p className="eyebrow text-[11px]">{group.label}</p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="card-premium p-5">
                <p className="eyebrow text-[11px]">{bootcampTraining[0].label}</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
                  {bootcampTraining[0].items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          </div>

          <div className="lg:col-span-3">
            <FadeInView>
              <div className="relative">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute bottom-4 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent shadow-[0_0_8px_var(--accent-glow)]"
                  aria-hidden
                />
                <StaggerWrapper className="space-y-8">
                  {experience.map((item, i) => (
                    <motion.div
                      key={`${item.role}-${item.period}`}
                      variants={staggerItemFast}
                      className="group relative pl-12"
                    >
                      <motion.span
                        whileHover={{ scale: 1.12 }}
                        className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--accent)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-ink)] group-hover:shadow-[0_0_16px_var(--accent-glow)]"
                      >
                        {i + 1}
                      </motion.span>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
                        {item.period}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                        {item.role}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.summary}
                      </p>
                    </motion.div>
                  ))}
                </StaggerWrapper>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </Section>
  )
}
