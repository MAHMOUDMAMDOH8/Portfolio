'use client'

import { motion } from 'framer-motion'
import { eyebrowClass } from './lib/styles'

export function Section({ id, children, className = '', labelledBy }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy || undefined}
      className={`scroll-mt-20 md:scroll-mt-24 ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description, titleId }) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
      {title ? (
        <h2
          id={titleId}
          className="mt-4 text-balance text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-[2rem]"
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
          {description}
        </p>
      ) : null}
    </header>
  )
}

export function FadeInView({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
