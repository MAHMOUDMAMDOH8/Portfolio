'use client'

import { motion } from 'framer-motion'

export function Section({ id, labelledBy, className, children, ...props }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={className} {...props}>
      {children}
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description, titleId, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`mb-14 max-w-3xl ${alignment} ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className={`mb-5 inline-flex items-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)] ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent-glow)]" />
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        id={titleId}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-balance text-[clamp(1.7rem,3.6vw,2.85rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--text-primary)]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export function FadeInView({ children, delay = 0, className, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerWrapper({ children, className, delay = 0.05 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: delay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItemFast = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
}
