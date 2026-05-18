'use client'

import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa'
import { ThemeToggleButton } from '../../components/portfolio/ThemeToggleButton'

export function CaseStudiesNav({ variant = 'list', onBack, onPrev, onNext, currentIndex, total }) {
  if (variant === 'detail') {
    return (
      <nav className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050508]/90">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:border-brand-500/40 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-300 dark:hover:text-white"
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">All case studies</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-xs font-medium tabular-nums text-zinc-500 sm:inline">
              {currentIndex} / {total}
            </span>
            <button
              type="button"
              onClick={onPrev}
              className="rounded-lg border border-zinc-200 p-2 text-zinc-600 transition hover:border-cyan-500/40 hover:text-cyan-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-cyan-300"
              aria-label="Previous case study"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-lg border border-zinc-200 p-2 text-zinc-600 transition hover:border-brand-500/40 hover:text-brand-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-brand-300"
              aria-label="Next case study"
            >
              <FaArrowRight size={14} />
            </button>
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl dark:border-white/[0.06] dark:bg-[#050508]/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 transition hover:border-brand-500/40 hover:text-zinc-900 dark:border-white/10 dark:text-zinc-300 dark:hover:text-white"
        >
          <FaHome className="text-xs" />
          <span className="hidden sm:inline">Portfolio</span>
        </Link>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">Case studies</p>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden text-sm font-medium text-zinc-600 transition hover:text-brand-700 sm:inline dark:text-zinc-400 dark:hover:text-brand-300"
          >
            Home
          </Link>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  )
}
