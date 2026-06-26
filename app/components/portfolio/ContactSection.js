'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { Section } from './Section'
import { contactBody, contactHeadline, contactPhoneDisplay, contactPhoneTel } from './data'
import { Magnetic, GlowBorder } from './motion/Primitives'

const ease = [0.22, 1, 0.36, 1]

const secondaryLinks = [
  { href: `tel:${contactPhoneTel}`, label: contactPhoneDisplay, icon: FaPhone },
  { href: '/Mahmoud_Mamdoh_data_engineer.pdf', label: 'Résumé', icon: FaExternalLinkAlt, external: true },
  { href: 'https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/', label: 'LinkedIn', icon: FaLinkedin, external: true },
  { href: 'https://github.com/MAHMOUDMAMDOH8', label: 'GitHub', icon: FaGithub, external: true },
]

export function ContactSection() {
  const glowRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      const el = glowRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--cx', `${e.clientX - rect.left}px`)
      el.style.setProperty('--cy', `${e.clientY - rect.top}px`)
    }
    const el = glowRef.current
    el?.addEventListener('mousemove', onMove)
    return () => el?.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Section id="contact" labelledBy="contact-heading" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={glowRef}
          className="relative overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-6 py-16 text-center sm:px-12 sm:py-24"
          style={{
            backgroundImage:
              'radial-gradient(500px circle at var(--cx, 50%) var(--cy, 0%), var(--accent-soft), transparent 60%)',
          }}
        >
          {/* grid + grain backdrop */}
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-[0.3]"
            style={{
              maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent 75%)',
            }}
            aria-hidden
          />
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent)]/[0.07] blur-[120px]" aria-hidden />

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center justify-center gap-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              Open to opportunities
            </motion.p>

            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--text-primary)]"
            >
              {contactHeadline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[var(--text-secondary)]"
            >
              {contactBody}
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="mt-10 flex justify-center"
            >
              <Magnetic strength={0.3}>
                <GlowBorder className="rounded-full">
                  <Link
                    href="mailto:mahmoud.mamdoh0812@gmail.com"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--accent)] px-8 py-4 text-base font-bold text-[var(--accent-ink)] transition-all duration-300 hover:brightness-105"
                  >
                    <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <FaEnvelope className="relative" />
                    <span className="relative">Start a conversation</span>
                    <FaArrowRight className="relative text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </GlowBorder>
              </Magnetic>
            </motion.div>

            {/* Secondary links */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
            >
              {secondaryLinks.map(({ href, label, icon: Icon, external }) => (
                <Magnetic key={label} strength={0.2}>
                  <Link
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                  >
                    <Icon className="text-xs text-[var(--accent)]" />
                    {label}
                  </Link>
                </Magnetic>
              ))}
            </motion.div>

            <p className="mt-10 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
              Average response time &middot; under 24 hours
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
