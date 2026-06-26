'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaChevronDown, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { TiltCard, GlowBorder } from './motion/Primitives'

export function ProjectCard({ project, index = 0 }) {
  const [expanded, setExpanded] = useState(false)
  const indexLabel = String(index + 1).padStart(2, '0')

  return (
    <TiltCard tiltDegree={4} className="h-full">
      <GlowBorder className="h-full rounded-2xl">
        <motion.article
          layout
          className="card-premium group relative flex h-full flex-col overflow-hidden"
        >
          {/* Preview image */}
          {project.architectureImage && (
            <div className="relative overflow-hidden">
              <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--bg-base)]">
                <img
                  src={project.architectureImage}
                  alt={`${project.title} architecture`}
                  className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.08]"
                  loading="lazy"
                />
              </div>
              {/* Cinematic gradient floor + sheen */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[var(--bg-elevated)] via-[var(--bg-elevated)]/20 to-transparent" />
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.07)_50%,transparent_75%)] translate-x-[-120%] transition-transform duration-1000 ease-out group-hover:translate-x-[120%]" />

              {/* Floating category chip */}
              <span className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
                {project.category}
              </span>

              {/* Index watermark */}
              <span className="absolute right-4 top-3 z-20 font-mono text-2xl font-bold text-white/15 tabular-nums">
                {indexLabel}
              </span>
            </div>
          )}

          {/* Body */}
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold leading-tight tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h3>
              {project.badge ? (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] font-mono text-[10px] font-bold text-[var(--accent)]">
                  {project.badge}
                </span>
              ) : null}
            </div>

            {project.timeline && (
              <p className="mt-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">
                {project.timeline}
              </p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.summary}
            </p>

            {/* Stack chips */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2 py-0.5 font-mono text-[9px] font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex-1" />

            {/* Primary links — always visible */}
            {project.links && project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.links.map((link, i) => {
                  const primary = i === 0
                  const isGithub = link.label.toLowerCase().includes('github')
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className={`group/link inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                        primary
                          ? 'bg-[var(--accent)] text-white hover:brightness-110 hover:shadow-lg hover:shadow-[var(--accent)]/25'
                          : 'border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-accent)] hover:text-[var(--accent)]'
                      }`}
                    >
                      {isGithub ? <FaGithub size={12} /> : <FaExternalLinkAlt size={10} />}
                      {link.label}
                      <FaArrowRight size={9} className="transition-transform duration-300 group-hover/link:translate-x-0.5" />
                    </a>
                  )
                })}
              </div>
            )}

            {/* Expand toggle */}
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border-subtle)] py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition hover:border-[var(--border-accent)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              {expanded ? 'Hide details' : 'Architecture & impact'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <FaChevronDown size={9} />
              </motion.span>
            </button>
          </div>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="space-y-5 border-t border-[var(--border-subtle)] px-6 py-5">
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                        Architecture highlights
                      </p>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-xs leading-relaxed text-[var(--text-secondary)]">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.metrics && project.metrics.length > 0 && (
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                        Impact &amp; results
                      </p>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-3 text-center transition hover:border-[var(--border-accent)]"
                          >
                            <p className="text-sm font-bold text-[var(--accent)]">{m.value}</p>
                            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.08em] text-[var(--text-muted)]">
                              {m.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.article>
      </GlowBorder>
    </TiltCard>
  )
}
