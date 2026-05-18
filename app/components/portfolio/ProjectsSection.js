'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { projectFilterId, projectFilters, projects } from './data'
import { ProjectCard } from './ProjectCard'
import { sectionDivider } from './lib/styles'
import { cn } from './lib/cn'

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects
    return projects.filter((p) => projectFilterId(p.category) === activeFilter)
  }, [activeFilter])

  return (
    <Section id="projects" labelledBy="projects-title" className={sectionDivider}>
      <motion.div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects in focus"
          title="Production builds that balance engineering depth with business clarity."
          titleId="projects-title"
        />

        <motion.div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filter projects by type"
        >
          {projectFilters.map((filter) => {
            const active = activeFilter === filter.id
            return (
              <motion.button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition',
                  active
                    ? 'border-[var(--border-accent)] bg-[var(--accent-soft)] text-[var(--accent)]'
                    : 'border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:border-[var(--border-accent)]'
                )}
              >
                {filter.label}
              </motion.button>
            )
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 ? (
          <p className="mt-8 text-center text-sm text-[var(--text-muted)]">No projects in this category yet.</p>
        ) : null}
      </motion.div>
    </Section>
  )
}
