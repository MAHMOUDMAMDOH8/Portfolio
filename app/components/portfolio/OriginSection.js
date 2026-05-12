'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Section, SectionHeader } from './Section'
import { originPanels } from './data'

export function OriginSection() {
  const [activeOrigin, setActiveOrigin] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOrigin((prev) => (prev + 1) % originPanels.length)
    }, 20000)
    return () => clearInterval(timer)
  }, [])

  const panel = originPanels[activeOrigin]

  return (
    <Section id="origin" labelledBy="origin-title" className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Origin"
          title="How curiosity became craft — the thread behind the pipelines."
          titleId="origin-title"
        />
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm backdrop-blur-md sm:p-10 dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-400/25 blur-3xl dark:bg-violet-600/20" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-500/15" />
          <AnimatePresence mode="wait">
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative z-10 mx-auto max-w-3xl text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{panel.title}</p>
              <p className="mt-4 text-balance text-lg font-semibold text-zinc-900 sm:text-xl dark:text-white">{panel.subtitle}</p>
              <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 text-left shadow-xl shadow-cyan-500/10 dark:border-white/10 dark:bg-[#020203] dark:shadow-2xl dark:shadow-cyan-500/5">
                <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:border-white/[0.06]">
                  <span className="h-2 w-2 rounded-full bg-red-400/90" />
                  <span className="h-2 w-2 rounded-full bg-amber-400/90" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
                  <span className="ml-1 text-zinc-400">{panel.header}</span>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-cyan-100/90 sm:text-sm">
                  {panel.code}
                </pre>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setActiveOrigin((p) => (p - 1 + originPanels.length) % originPanels.length)}
              aria-label="Previous origin story"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-cyan-500/40 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-white"
            >
              <FaArrowLeft />
            </button>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              {String(activeOrigin + 1).padStart(2, '0')} / {String(originPanels.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => setActiveOrigin((p) => (p + 1) % originPanels.length)}
              aria-label="Next origin story"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-cyan-500/40 hover:text-zinc-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-cyan-500/40 dark:hover:text-white"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
