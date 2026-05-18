'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader, FadeInView } from './Section'
import { aboutBody, aboutLead, bootcampTraining, education, experience, learningFocus } from './data'

import { sectionDivider } from './lib/styles'

const divider = sectionDivider

export function AboutSection() {
  return (
    <Section id="about" labelledBy="about-title" className={divider}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title={aboutLead}
          description={aboutBody}
          titleId="about-title"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: Education + Learning */}
          <div className="lg:col-span-2">
            <FadeInView className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-brand-400">
                Education
              </p>
              <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">{education.degree}</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{education.institution}</p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">{education.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{education.detail}</p>
            </FadeInView>

            <FadeInView delay={0.1} className="mt-5 space-y-4">
              {learningFocus.map((group) => (
                <div
                  key={group.label}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                    {group.label}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  {bootcampTraining[0].label}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                  {bootcampTraining[0].items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          </div>

          {/* Right: Experience timeline */}
          <div className="lg:col-span-3">
            <FadeInView>
              <div className="relative">
                <div
                  className="absolute bottom-4 left-[15px] top-2 w-px bg-gradient-to-b from-brand-500/50 via-zinc-200 to-transparent dark:from-brand-500/40 dark:via-white/10"
                  aria-hidden
                />
                <ol className="space-y-8">
                  {experience.map((item, i) => (
                    <motion.li
                      key={`${item.role}-${item.period}`}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="relative pl-12"
                    >
                      <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-brand-500/40 bg-white text-xs font-bold text-brand-700 dark:border-brand-500/35 dark:bg-[#08080a] dark:text-brand-400">
                        {i + 1}
                      </span>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-400">{item.period}</p>
                      <p className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</p>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{item.summary}</p>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </Section>
  )
}
