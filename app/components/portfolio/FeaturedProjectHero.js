'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa'

export function FeaturedProjectHero({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.35 }}
      className="mt-10 w-full max-w-4xl text-left"
    >
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500">
        Featured build
      </p>
      <Link
        href={project.href}
        className="group mt-3 flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-none dark:hover:border-cyan-500/30 sm:flex-row"
      >
        <motion.div
          className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-zinc-100 sm:aspect-auto sm:h-auto sm:w-[42%] sm:min-h-[200px] dark:bg-zinc-950/80"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={project.architectureImage}
            alt={`Architecture — ${project.title}`}
            fill
            className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 420px"
          />
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col justify-center p-5 sm:p-6"
          initial={false}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-400/90">
            {project.category}
          </p>
          <h2 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-white sm:text-xl">{project.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.summary}</p>
          <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-800 dark:text-emerald-300/90">
              {project.metric.label}
            </span>
            <span className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">{project.metric.value}</span>
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700 transition group-hover:gap-3 dark:text-cyan-400">
            Explore projects
            <FaArrowRight className="text-[10px]" />
          </span>
        </motion.div>
      </Link>
      {project.caseStudyHref ? (
        <p className="mt-3 text-center text-xs text-zinc-500">
          Deep dive in{' '}
          <Link
            href={project.caseStudyHref}
            className="inline-flex items-center gap-1 font-medium text-cyan-700 underline-offset-2 hover:underline dark:text-cyan-400"
          >
            case studies
            <FaExternalLinkAlt className="text-[9px]" />
          </Link>
        </p>
      ) : null}
    </motion.div>
  )
}
