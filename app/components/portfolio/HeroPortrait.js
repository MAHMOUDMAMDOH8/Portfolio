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
      <motion.div
        className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-cyan-500/50 via-teal-400/30 to-violet-500/40 opacity-80 blur-sm dark:from-cyan-400/40 dark:via-teal-500/25 dark:to-violet-500/35"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
      <motion.div
        className="relative overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-zinc-100 shadow-xl shadow-cyan-500/10 dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-cyan-500/5"
        role="region"
        aria-label="Profile photos"
        aria-live="polite"
      >
        <div className="relative aspect-[4/5] w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.src}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.src}
                alt={current.alt}
                fill
                priority={index === 0}
                className="object-cover object-[center_18%]"
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 240px, 260px"
              />
            </motion.div>
          </AnimatePresence>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900/20 via-transparent to-transparent dark:from-[#050508]/35"
            aria-hidden
          />
        </div>
      </motion.div>

      {count > 1 ? (
        <motion.div className="mt-3 flex justify-center gap-1.5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-cyan-600 dark:bg-cyan-400' : 'w-1.5 bg-zinc-300 dark:bg-zinc-600'
              }`}
              aria-label={`Show photo ${i + 1} of ${count}`}
            />
          ))}
        </motion.div>
      ) : null}

      <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">
        {caption}
      </p>
    </motion.div>
  )
}
