'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Section, SectionHeader } from './Section'
import { CardHover } from './motion/Primitives'
import { originPanels } from './data'

export function OriginSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % originPanels.length)
  const prev = () => setCurrent((c) => (c - 1 + originPanels.length) % originPanels.length)

  return (
    <Section id="origin" labelledBy="origin-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Origin"
          title="How curiosity became craft — the thread behind the pipelines."
          titleId="origin-title"
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
             <CardHover className="card-premium p-8" glowColor="rgba(198, 242, 78, 0.08)">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-accent)] bg-[var(--accent-soft)]"
                >
                  <span className="font-mono text-xs font-bold text-[var(--accent)]">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                </motion.div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    {originPanels[current].title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {originPanels[current].header}
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {originPanels[current].subtitle}
              </p>

              <pre className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)] p-4 font-mono text-xs leading-relaxed text-[var(--accent)] overflow-x-auto">
                <code>{originPanels[current].code}</code>
              </pre>
             </CardHover>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)]"
              aria-label="Previous story"
            >
              <FaArrowLeft size={12} />
            </motion.button>

            <div className="flex gap-1.5">
              {originPanels.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-1.5 bg-[var(--border-subtle)] hover:bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Go to story ${i + 1} of ${originPanels.length}`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)]"
              aria-label="Next story"
            >
              <FaArrowRight size={12} />
            </motion.button>
          </div>

          <p className="mt-3 text-center text-[10px] font-medium tabular-nums text-[var(--text-muted)]">
            {String(current + 1).padStart(2, '0')} / {String(originPanels.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </Section>
  )
}
