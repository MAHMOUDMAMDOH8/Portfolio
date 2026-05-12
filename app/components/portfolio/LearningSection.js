'use client'

import { Section, SectionHeader } from './Section'
import { bootcampTraining, learningFocus } from './data'

export function LearningSection() {
  const rows = [...learningFocus, ...bootcampTraining]

  return (
    <Section id="learning" labelledBy="learning-title" className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Always shipping, always learning"
          title="Curiosity doesn’t pause once the pipelines ship."
          titleId="learning-title"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {rows.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur-md transition hover:border-violet-400/40 dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-violet-500/25"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-800 dark:text-violet-300/90">{row.label}</p>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                {row.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500 dark:bg-violet-400" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
