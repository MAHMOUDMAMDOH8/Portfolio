'use client'

import Link from 'next/link'
import { FaBars, FaTimes, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'
import { navLinks } from './data'
import { ThemeToggleButton } from './ThemeToggleButton'

export function SiteHeader({ isNavOpen, setIsNavOpen }) {

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur-xl backdrop-saturate-150 dark:border-white/[0.06] dark:bg-[#050508]/80">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-sm font-semibold tracking-tight text-zinc-900 transition hover:text-cyan-700 dark:text-white dark:hover:text-cyan-300 sm:text-base"
        >
          Mahmoud Mamdoh
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="rounded-lg px-3 py-2 text-xs font-medium text-zinc-600 transition hover:bg-zinc-200/80 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-zinc-300 dark:bg-white/10" aria-hidden />
          <Link
            href="/case-studies"
            className="rounded-lg px-3 py-2 text-xs font-medium text-cyan-700 transition hover:bg-zinc-200/80 dark:text-cyan-400/90 dark:hover:bg-white/[0.06] dark:hover:text-cyan-300"
          >
            Case studies
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500 lg:inline">
            Cairo · Remote
          </span>
          <ThemeToggleButton />
          <Link
            href="/case-studies"
            className="hidden rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 transition hover:border-cyan-400/50 sm:inline lg:hidden dark:border-white/10 dark:bg-transparent dark:text-zinc-300 dark:hover:border-cyan-500/40"
          >
            Cases
          </Link>
          <button
            type="button"
            onClick={() => setIsNavOpen((p) => !p)}
            aria-expanded={isNavOpen}
            aria-controls="mobile-nav"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-800 transition hover:bg-zinc-100 md:hidden dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isNavOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-zinc-200 bg-white/98 px-4 py-4 md:hidden dark:border-white/[0.06] dark:bg-[#050508]/95"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map(({ id, label }) => (
              <Link
                key={`m-${id}`}
                href={`#${id}`}
                onClick={() => setIsNavOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/case-studies"
              onClick={() => setIsNavOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-cyan-700 transition hover:bg-zinc-100 dark:text-cyan-400 dark:hover:bg-white/[0.06]"
            >
              Case studies
            </Link>
          </nav>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <Link
              href="mailto:mahmoud.mamdoh0812@gmail.com"
              onClick={() => setIsNavOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2.5 text-sm font-semibold text-[#050508]"
            >
              <FaEnvelope />
              Email
            </Link>
            <Link
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsNavOpen(false)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-800 dark:border-white/15 dark:text-white"
            >
              <FaExternalLinkAlt className="text-xs" />
              Schedule
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
