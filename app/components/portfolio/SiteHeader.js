'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaTerminal, FaArrowRight } from 'react-icons/fa'
import { navLinks } from './data'
import { ThemeToggleButton } from './ThemeToggleButton'

export function SiteHeader({ isNavOpen, setIsNavOpen, onOpenTerminal }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [prevScroll, setPrevScroll] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      setVisible(y < prevScroll || y < 60)
      setPrevScroll(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [prevScroll])

  useEffect(() => {
    const ids = navLinks.map((l) => l.id)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    setIsNavOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: visible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5"
      >
        <div
          className={`flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2 pl-4 transition-all duration-500 ${
            scrolled
              ? 'border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 shadow-[var(--shadow-elevated)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          {/* Logo monogram */}
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-accent)] bg-[var(--accent-soft)] font-mono text-[11px] font-bold text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[-6deg]">
              MM
            </span>
            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
              <span className="hidden sm:inline">Mahmoud Mamdoh</span>
              <span className="sm:hidden">M. Mamdoh</span>
            </span>
          </Link>

          {/* Desktop nav with sliding active pill */}
          <nav className="hidden items-center lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const active = activeSection === link.id
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                    active ? 'text-[var(--accent-ink)]' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--accent)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-1.5">
            <Link
              href="/case-studies"
              className="hidden items-center gap-1.5 rounded-full border border-[var(--border-subtle)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)] sm:inline-flex"
            >
              Cases
              <FaArrowRight size={8} />
            </Link>
            <motion.button
              type="button"
              onClick={onOpenTerminal}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Open Terminal Mode"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--accent)]"
            >
              <FaTerminal size={13} />
            </motion.button>
            <ThemeToggleButton />
            <motion.button
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] lg:hidden"
            >
              {isNavOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 top-20 z-40 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/95 shadow-[var(--shadow-elevated)] backdrop-blur-xl lg:hidden"
          >
            <nav className="grid grid-cols-2 gap-1.5 p-3" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-xl px-3 py-3 text-left text-sm font-semibold transition ${
                    activeSection === link.id
                      ? 'bg-[var(--accent)] text-[var(--accent-ink)]'
                      : 'bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <Link
                href="/case-studies"
                onClick={() => setIsNavOpen(false)}
                className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] px-3 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
              >
                Case Studies <FaArrowRight size={10} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
