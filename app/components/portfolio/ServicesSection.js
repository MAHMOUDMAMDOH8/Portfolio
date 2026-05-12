'use client'

import { Section, SectionHeader } from './Section'
import { offerings } from './data'

const divider = 'border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24'

export function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-title" className={divider}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What I deliver"
          title="Capabilities I bring to data platform teams."
          titleId="services-title"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur-md transition hover:border-violet-400/40 dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-violet-500/25"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/10 opacity-0 transition group-hover:opacity-100 dark:from-cyan-500/5" />
              <span className="relative inline-flex w-fit rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="relative mt-5 text-lg font-semibold text-zinc-900 dark:text-white">{item.title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
