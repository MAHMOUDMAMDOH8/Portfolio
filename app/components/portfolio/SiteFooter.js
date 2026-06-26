'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { Magnetic } from './motion/Primitives'
import { navLinks } from './data'

const socials = [
  { href: 'https://github.com/MAHMOUDMAMDOH8', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'mailto:mahmoud.mamdoh0812@gmail.com', icon: FaEnvelope, label: 'Email' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  const toSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer aria-label="Footer" className="relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.25]"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 100%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 100%, black, transparent 75%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_auto]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3" aria-label="Home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-accent)] bg-[var(--accent-soft)] font-mono text-sm font-bold text-[var(--accent)] transition-transform duration-300 group-hover:rotate-[-6deg]">
                MM
              </span>
              <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
                Mahmoud Mamdoh
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
              Data Platform Engineer building lakehouse &amp; streaming pipelines that teams trust — from raw events to decisions.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] [animation:pulse-glow_2s_ease-in-out_infinite]" />
              Available for data roles · Cairo
            </p>
          </div>

          {/* Sitemap */}
          <nav aria-label="Footer navigation">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Navigate
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => toSection(link.id)}
                  className="text-left text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </button>
              ))}
              <Link
                href="/case-studies"
                className="text-left text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                Case Studies
              </Link>
            </div>
          </nav>

          {/* Socials + back to top */}
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex items-center gap-2.5">
              {socials.map(({ href, icon: Icon, label }) => (
                <Magnetic key={label} strength={0.3}>
                  <Link
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                  >
                    <Icon size={14} />
                  </Link>
                </Magnetic>
              ))}
            </div>
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
              >
                Back to top
                <FaArrowUp size={10} />
              </button>
            </Magnetic>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-6 sm:flex-row"
        >
          <p className="text-xs text-[var(--text-muted)]">
            &copy; {year} Mahmoud Mamdoh. Crafted with purpose.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
