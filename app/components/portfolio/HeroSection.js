'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronDown, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaQuoteLeft } from 'react-icons/fa'
import { AnimatedStatValue } from './CountUp'
import { FeaturedProjectHero } from './FeaturedProjectHero'
import { HeroPortrait } from './HeroPortrait'
import { DataPipelineScene } from './DataPipelineScene'
import { HeroAmbient } from './HeroAmbient'
import { Magnetic } from './Magnetic'
import {
  featuredProject,
  heroHeadline,
  heroIntro,
  heroPortraits,
  heroStats,
  heroSubline,
  heroTestimonial,
  heroWhyLine,
  marqueeTools,
  recruiterFocusTags,
  trustedByDomains,
  identityPillars,
} from './data'
import { chipClass } from './lib/styles'
import { Section } from './Section'

function splitHeadline(text) {
  const match = text.match(/^(.*?)\s*[—–]\s*(.+)$/)
  if (match) return { lead: match[1].trim(), accent: match[2].trim() }
  return { lead: text, accent: null }
}

const stagger = {
  hidden: { opacity: 0, y: 16 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] },
  }),
}

export function HeroSection() {
  const { lead, accent } = splitHeadline(heroHeadline)

  return (
    <Section
      id="hero"
      labelledBy="hero-headline"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20 pb-12 sm:pt-24"
    >
      <HeroAmbient />


      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12"
        >
          <motion.div custom={0} variants={stagger} className="order-1 lg:order-none">
            <HeroPortrait images={heroPortraits} />
          </motion.div>

          <div className="order-2 flex w-full max-w-3xl flex-col items-center text-center lg:max-w-[600px] lg:items-start lg:text-left xl:max-w-[640px]">
            <motion.div custom={1} variants={stagger} className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {identityPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="rounded border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]"
                >
                  {pillar}
                </span>
              ))}
            </motion.div>
            <motion.p custom={1} variants={stagger} className="mt-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--text-muted)]">
              Mahmoud Mamdoh · Data Platform Engineer · Cairo
            </motion.p>

            <motion.h1
              id="hero-headline"
              custom={2}
              variants={stagger}
              className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-[3.15rem]"
            >
              {lead}
              {accent ? (
                <>
                  <span className="text-gradient-accent text-gradient-shimmer"> — {accent}</span>
                  <span
                    className="ml-0.5 inline-block h-[1em] w-0.5 animate-hero-cursor bg-[var(--accent)] align-[-0.12em]"
                    aria-hidden
                  />
                </>
              ) : null}
            </motion.h1>

            <motion.p custom={3} variants={stagger} className="mt-4 max-w-2xl text-pretty text-base font-medium leading-snug text-[var(--text-secondary)] sm:text-lg">
              {heroSubline}
            </motion.p>

            <motion.p custom={4} variants={stagger} className="mt-2 text-sm italic text-[var(--text-muted)]">
              {heroWhyLine}
            </motion.p>

            <motion.div custom={5} variants={stagger} className="mt-6 w-full lg:max-w-none">
              <DataPipelineScene />
            </motion.div>

            <motion.p custom={6} variants={stagger} className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-[var(--text-secondary)]">
              {heroIntro}
            </motion.p>

            <motion.div
              custom={7}
              variants={stagger}
              className="mt-5 flex flex-wrap justify-center gap-1.5 lg:justify-start"
              aria-label="Core technical focus"
            >
              {recruiterFocusTags.map((tag) => (
                <span key={tag} className={chipClass}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div custom={8} variants={stagger} className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              <Magnetic strength={0.22}>
                <Link
                  href="/Mahmoud_Mamdoh_data_engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
                >
                  <FaDownload className="text-xs" />
                  Resume
                </Link>
              </Magnetic>
              <Magnetic strength={0.18}>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--border-accent)]"
                >
                  View projects
                </Link>
              </Magnetic>
              <Link
                href="mailto:mahmoud.mamdoh0812@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
              >
                <FaEnvelope className="text-xs" />
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-accent)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/MAHMOUDMAMDOH8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--border-accent)]"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
            </motion.div>

            <motion.div custom={9} variants={stagger} className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Built for</span>
              {trustedByDomains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--text-secondary)]"
                >
                  {domain}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="mx-auto mt-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-5 text-center shadow-[var(--shadow-card)] transition hover:border-[var(--border-accent)]"
              >
                {stat.value ? (
                  <p className="text-2xl font-semibold tabular-nums text-[var(--text-primary)]">
                    <AnimatedStatValue value={stat.value} />
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-[var(--accent)]">&rarr;</p>
                )}
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <FeaturedProjectHero project={featuredProject} />

          <motion.blockquote
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="relative mt-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-6 py-5 text-left shadow-[var(--shadow-card)]"
          >
            <FaQuoteLeft className="text-[var(--accent)] opacity-40" aria-hidden />
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              &ldquo;{heroTestimonial.quote}&rdquo;
            </p>
            <footer className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {heroTestimonial.attribution}
              <span className="mx-2 opacity-50">&middot;</span>
              {heroTestimonial.context}
            </footer>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative mt-10 overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] py-3"
          >
            <motion.div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg-base)] to-transparent"
              aria-hidden
            />
            <motion.div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg-base)] to-transparent"
              aria-hidden
            />
            <div className="marquee gap-10 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-muted)]">
              {[...Array(2)].flatMap(() => marqueeTools).map((item, idx) => (
                <span key={`${item}-${idx}`} className="marquee-item flex items-center gap-3">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-8 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]"
          >
            Scroll
            <FaChevronDown className="text-[9px]" aria-hidden />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
