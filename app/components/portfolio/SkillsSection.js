'use client'

import { Section, SectionHeader } from './Section'
import { skillMatrix } from './data'

const divider = 'border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24'

export function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-title" className={divider}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Signature toolkit"
          title="Depth across the stack, tuned for reliability and storytelling."
          titleId="skills-title"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillMatrix.map((skill) => (
            <div
              key={skill.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur-md transition hover:border-cyan-400/40 dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-cyan-500/25"
            >
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                <span className="text-zinc-800 dark:text-zinc-200">{skill.label}</span>
                <span className="tabular-nums text-cyan-700 dark:text-cyan-400/90">{skill.level}%</span>
              </div>
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-white/[0.06]"
                role="group"
                aria-label={`${skill.label} proficiency ${skill.level} percent`}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
