'use client'

import { Section, SectionHeader } from './Section'
import { projects } from './data'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      labelledBy="projects-title"
      className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects in focus"
          title="Production builds that balance engineering depth with business clarity."
          titleId="projects-title"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </Section>
  )
}
