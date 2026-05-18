'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa'
import { stackChipClass } from './stackStyles'
import { surfaceCard, surfaceCardHover } from './lib/styles'

export function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={`group flex h-full flex-col p-5 ${surfaceCard} ${surfaceCardHover}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-xs font-bold tracking-widest text-brand-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-brand-400">
            {project.badge}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400/90">{project.category}</p>
            <h3 className="mt-1 text-base font-semibold leading-snug text-zinc-900 dark:text-white md:text-lg">{project.title}</h3>
          </div>
        </div>
        {project.timeline ? (
          <span className="shrink-0 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400">
            {project.timeline}
          </span>
        ) : null}
      </div>

      {/* Summary */}
      <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{project.summary}</p>

      {/* Architecture image */}
      {project.architectureImage ? (
        <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-white/[0.06] dark:bg-[#030305]/80">
          <p className="border-b border-zinc-200 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:border-white/[0.06] dark:text-zinc-500">
            Pipeline architecture
          </p>
          <div className="relative min-h-[140px] w-full bg-zinc-100 p-2 sm:min-h-[180px] dark:bg-[#060608]">
            <Image
              src={project.architectureImage}
              alt={`Pipeline architecture diagram — ${project.title}`}
              width={1200}
              height={675}
              className="mx-auto h-auto w-full max-h-[260px] object-contain sm:max-h-[300px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 dark:border-white/[0.06] dark:bg-[#030305]/80">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">Stack flow</p>
          <div className="mt-2 flex min-w-min flex-wrap items-center gap-1.5 text-[11px] text-zinc-600 dark:text-zinc-300">
            {project.stack.map((item, idx) => (
              <span key={item} className="flex items-center gap-1.5">
                {idx > 0 ? (
                  <span className="font-mono text-brand-500/80" aria-hidden>&rarr;</span>
                ) : null}
                <span className="whitespace-nowrap rounded border border-zinc-200 bg-white px-2 py-0.5 font-medium text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stack chips */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <span
            key={`chip-${item}`}
            className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${stackChipClass(item)}`}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Expand / collapse */}
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
        className="mt-4 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600 transition hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
      >
        {expanded ? 'Hide details' : 'Architecture, impact & links'}
        <FaChevronDown className={`text-[10px] transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden />
      </button>

      {expanded ? (
        <div className="mt-4 space-y-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/[0.06] dark:bg-[#060608]">
          {project.highlights?.length ? (
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Architecture highlights</h4>
              <ul className="mt-3 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-300">
                {project.highlights.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.metrics?.length ? (
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-500">Impact & results</h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-zinc-200 bg-white px-3 py-3 text-center dark:border-white/[0.06] dark:bg-white/[0.02]"
                  >
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{metric.value}</p>
                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {project.links?.length ? (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-700 transition hover:border-brand-500/50 hover:text-brand-700 dark:border-white/15 dark:bg-transparent dark:text-zinc-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
                >
                  {link.label}
                  <FaExternalLinkAlt className="text-[9px]" aria-hidden />
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </motion.article>
  )
}
