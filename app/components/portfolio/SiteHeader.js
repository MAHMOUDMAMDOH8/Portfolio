'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaTerminal } from 'react-icons/fa'
import { navLinks } from './data'
import { ThemeToggleButton } from './ThemeToggleButton'
import { cn } from './lib/cn'

export function SiteHeader({ isNavOpen, setIsNavOpen, onOpenTerminal }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    ids.map((id) => document.getElementById(id)).filter(Boolean).forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-[var(--border-subtle)] backdrop-blur-xl transition-[height,box-shadow] duration-300',
        scrolled ? 'h-14 shadow-[var(--shadow-card)]' : 'h-16'
      )}
      style={{ backgroundColor: scrolled ? 'var(--bg-elevated)' : 'color-mix(in srgb, var(--bg-base) 82%, transparent)' }}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="text-sm font-semibold tracking-tight text-[var(--text-primary)] transition hover:text-[var(--accent)] sm:text-base"
        >
          <span className="hidden sm:inline">Mahmoud Mamdoh</span>
          <span className="sm:hidden">M. Mamdoh</span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {navLinks.map(({ id, label }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`relative rounded-lg px-3 py-2 text-xs font-medium transition ${
                activeSection === id
                  ? 'text-[var(--accent)]'
                  : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {label}
              {activeSection === id ? (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[var(--accent)]"
                />
              ) : null}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-[var(--border-subtle)]" aria-hidden />
          <Link
            href="/case-studies"
            className="rounded-lg px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
          >
            Cases
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] lg:inline">
            Cairo · Remote
          </span>
          <button
            type="button"
            onClick={onOpenTerminal}
            aria-label="Open Terminal Mode"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] transition hover:bg-[var(--surface-muted)] hover:text-green-500"
          >
            <FaTerminal />
          </button>
          <ThemeToggleButton />
          <button
            type="button"
            onClick={() => setIsNavOpen((p) => !p)}
            aria-expanded={isNavOpen}
            aria-controls="mobile-nav"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] transition hover:bg-[var(--surface-muted)] md:hidden"
          >
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isNavOpen ? (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {navLinks.map(({ id, label }) => (
              <Link
                key={`m-${id}`}
                href={`#${id}`}
                onClick={() => setIsNavOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition ${
                  activeSection === id
                    ? 'bg-[var(--accent-soft)] font-semibold text-[var(--accent)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--surface-muted)]'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-2">
            <Link
              href="mailto:mahmoud.mamdoh0812@gmail.com"
              onClick={() => setIsNavOpen(false)}
              className="flex-1 rounded-lg bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Email
            </Link>
            <Link
              href="/Mahmoud_Mamdoh_data_engineer.pdf"
              target="_blank"
              onClick={() => setIsNavOpen(false)}
              className="flex-1 rounded-lg border border-[var(--border-subtle)] px-4 py-2.5 text-center text-sm font-medium text-[var(--text-primary)]"
            >
              Resume
            </Link>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
