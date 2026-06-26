'use client'

import Link from 'next/link'
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa'
import { ThemeToggleButton } from '../../components/portfolio/ThemeToggleButton'

export function CaseStudiesNav({ variant = 'list', onBack, onPrev, onNext, currentIndex, total }) {
  if (variant === 'detail') {
    return (
      <nav className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
          >
            <FaArrowLeft />
            <span className="hidden sm:inline">All case studies</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden text-xs font-medium tabular-nums text-[var(--text-muted)] sm:inline">
              {currentIndex} / {total}
            </span>
            <button
              type="button"
              onClick={onPrev}
              className="rounded-lg border border-[var(--border-subtle)] p-2 text-[var(--text-muted)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
              aria-label="Previous case study"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="rounded-lg border border-[var(--border-subtle)] p-2 text-[var(--text-muted)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
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
    <nav className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-3 py-2 text-sm text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
        >
          <FaHome className="text-xs" />
          <span className="hidden sm:inline">Portfolio</span>
        </Link>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Case studies
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent)] sm:inline"
          >
            Home
          </Link>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  )
}
