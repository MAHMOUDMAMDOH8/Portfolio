'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

export function FeaturedProjectHero({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="card-premium group relative mt-6 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[var(--accent-soft)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -inset-1 rounded-[inherit] bg-[linear-gradient(110deg,var(--accent-dim),var(--accent),var(--cyan))] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20 pointer-events-none" />
      <div className="relative flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex-1">
          <p className="eyebrow mb-2">Featured build</p>
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--text-muted)]">
            {project.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
            {project.summary}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href={project.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] transition hover:brightness-110 hover:gap-3"
            >
              Explore projects
              <FaArrowRight size={10} />
            </Link>
            {project.caseStudyHref && (
              <Link
                href={project.caseStudyHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-secondary)]"
              >
                Deep dive in case studies
                <FaExternalLinkAlt size={10} />
              </Link>
            )}
          </div>
        </div>
        {project.metric && (
          <div className="flex flex-col items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-5 py-4 text-center transition group-hover:border-[var(--border-accent)] sm:flex-shrink-0">
            <span className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
              {project.metric.label}
            </span>
            <span className="mt-1 text-sm font-bold text-[var(--accent)]">
              {project.metric.value}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
