'use client'

import { Section, SectionHeader } from './Section'
import { aboutBody, aboutLead, education, experience } from './data'

const divider = 'border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24'

export function AboutSection() {
  return (
    <Section id="about" labelledBy="about-title" className={divider}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="About" title={aboutLead} description={aboutBody} titleId="about-title" />
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur-md dark:border-white/[0.06] dark:bg-white/[0.02] md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-400/90">Education</p>
          <p className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white">{education.degree}</p>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{education.institution}</p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">{education.period}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{education.detail}</p>
        </div>
        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            className="absolute bottom-4 left-[13px] top-2 w-px bg-gradient-to-b from-cyan-500/50 via-zinc-300 to-transparent dark:from-cyan-500/40 dark:via-white/10"
            aria-hidden
          />
          <ol className="space-y-10">
            {experience.map((item, i) => (
              <li key={`${item.role}-${item.period}`} className="relative pl-11">
                <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-600/40 bg-white text-xs font-bold text-cyan-700 dark:border-cyan-500/35 dark:bg-[#08080a] dark:text-cyan-300">
                  {i + 1}
                </span>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">{item.period}</p>
                <p className="mt-1 text-lg font-semibold text-zinc-900 dark:text-white">{item.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
