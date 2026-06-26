'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const ROTATE_MS = 10_000

export function HeroPortrait({ images, caption = 'Mahmoud Mamdoh · Cairo' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  useEffect(() => {
    if (count <= 1 || paused) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, ROTATE_MS)

    return () => window.clearInterval(id)
  }, [count, paused])

  const current = images[index]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
      className="relative mx-auto shrink-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* rotating conic glow border */}
      <div className="pointer-events-none absolute -inset-[2px] overflow-hidden rounded-[1.65rem]" aria-hidden>
        <div
          className="absolute left-1/2 top-1/2 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2 opacity-70 [animation:spin-slow_9s_linear_infinite]"
          style={{
            background:
              'conic-gradient(from 0deg, transparent 0deg, var(--accent) 45deg, var(--cyan) 90deg, transparent 150deg, transparent 360deg)',
          }}
        />
      </div>

      <motion.div
        className="relative rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] p-1.5 shadow-[var(--shadow-elevated)]"
        role="region"
        aria-label="Profile photos"
        aria-live="polite"
      >
        <div className="relative aspect-[4/5] w-[210px] overflow-hidden rounded-[1.15rem] bg-[var(--bg-base)] sm:w-[230px] md:w-[250px] lg:w-[270px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                className="object-cover object-[center_18%]"
                sizes="(max-width: 640px) 210px, (max-width: 1024px) 250px, 270px"
              />
            </motion.div>
          </AnimatePresence>

          {/* tonal floor + acid tint */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-base)]/70 via-transparent to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-0 bg-[var(--accent)]/[0.04] mix-blend-overlay" aria-hidden />

          {/* moving scan sheen */}
          <div
            className="pointer-events-none absolute inset-x-0 -top-1/2 h-1/2 bg-[linear-gradient(to_bottom,transparent,var(--accent-soft),transparent)] [animation:portrait-scan_5s_ease-in-out_infinite]"
            aria-hidden
          />

          {/* corner viewfinder brackets */}
          <span className="pointer-events-none absolute left-2.5 top-2.5 h-4 w-4 border-l border-t border-[var(--accent)]/70" aria-hidden />
          <span className="pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 border-r border-t border-[var(--accent)]/70" aria-hidden />
          <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-4 w-4 border-b border-l border-[var(--accent)]/70" aria-hidden />
          <span className="pointer-events-none absolute bottom-2.5 right-2.5 h-4 w-4 border-b border-r border-[var(--accent)]/70" aria-hidden />

          {/* live tag */}
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)] [animation:pulse-glow_2s_ease-in-out_infinite]" />
            Cairo
          </span>
        </div>
      </motion.div>

      {count > 1 ? (
        <div className="mt-3.5 flex justify-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-[var(--accent)]' : 'w-1.5 bg-[var(--border-subtle)] hover:bg-[var(--text-muted)]'
              }`}
              aria-label={`Show photo ${i + 1} of ${count}`}
            />
          ))}
        </div>
      ) : null}

      <p className="mt-2.5 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
        {caption}
      </p>
    </motion.div>
  )
}
