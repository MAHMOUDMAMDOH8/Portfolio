'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { categoryStyles, toolNodes, toolStats } from './data'

export function ToolsSection() {
  return (
    <Section id="tools" labelledBy="tools-title" className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tools in motion"
          title="The ecosystem I lean on to turn raw events into trusted stories."
          titleId="tools-title"
        />
        <div className="relative mx-auto hidden min-h-[480px] w-full max-w-[640px] md:block lg:min-h-[520px] lg:max-w-[700px]">
          <div
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-white/[0.06]"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200/80 dark:border-white/[0.05]"
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200/80 dark:border-white/[0.05]"
            aria-hidden
          />
          {toolNodes.map((tool, index) => {
            const floatDuration = 8 + (index % 4)
            const floatDelay = (index % 5) * 0.6
            return (
              <motion.span
                key={tool.label}
                className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-[#08080a]/90 dark:text-zinc-200 ${categoryStyles[tool.category]}`}
                style={{ top: tool.style.top, left: tool.style.left }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: floatDuration,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  delay: floatDelay
                }}
                whileHover={{ scale: 1.06 }}
              >
                {tool.label}
              </motion.span>
            )
          })}
          <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-500/30 bg-white/90 text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.2em] text-zinc-600 backdrop-blur-md dark:border-cyan-500/20 dark:bg-white/[0.03] dark:text-zinc-400">
            Trusted Platform
          </div>
        </div>
        <div className="mt-2 grid gap-2 md:hidden">
          {toolNodes.map((tool) => (
            <div
              key={`m-${tool.label}`}
              className="flex items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-white/[0.06] dark:bg-white/[0.02]"
            >
              <span className="text-sm font-medium text-zinc-900 dark:text-white">{tool.label}</span>
              <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${categoryStyles[tool.category]}`}>
                {tool.category}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-500 dark:bg-sky-400" /> Platform
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" /> Orchestration
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-500 dark:bg-amber-300" /> Activation
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-500 dark:bg-violet-400" /> Automation
          </span>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {toolStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-zinc-200 bg-white p-5 text-center shadow-sm backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none"
            >
              <div className="text-xl font-semibold text-zinc-900 dark:text-white">{stat.value}</div>
              <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
