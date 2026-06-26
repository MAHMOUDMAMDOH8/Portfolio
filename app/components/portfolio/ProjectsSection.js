'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { projectFilterId, projectFilters, projects } from './data'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => projectFilterId(p.category) === activeFilter)
  }, [activeFilter])

  return (
    <Section id="projects" labelledBy="projects-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects in focus"
          title="Production builds that balance engineering depth with business clarity."
          titleId="projects-title"
        />

        <div
          className="mb-12 flex flex-wrap justify-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-1.5 sm:mx-auto sm:w-fit"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {projectFilters.map((filter) => {
            const active = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                  active ? 'text-[var(--accent-ink)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--accent)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {filter.label}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-sm text-[var(--text-muted)]"
          >
            Nothing here yet — try a different filter.
          </motion.p>
        )}
      </div>
    </Section>
  )
}
