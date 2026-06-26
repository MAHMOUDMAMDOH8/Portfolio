'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight, FaChevronDown, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaQuoteLeft } from 'react-icons/fa'
import { AnimatedStatValue } from './CountUp'
import { FeaturedProjectHero } from './FeaturedProjectHero'
import { HeroPortrait } from './HeroPortrait'
import { Magnetic, WordReveal, ParallaxTilt, GlowBorder } from './motion/Primitives'
import {
  featuredProject,
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
import { Section } from './Section'

const ease = [0.22, 1, 0.36, 1]

const wrap = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

/* Mouse-follow spotlight + floating acid orbs */
function HeroAtmosphere() {
  const ref = useRef(null)
  useEffect(() => {
    const onMove = (e) => {
      if (!ref.current) return
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      ref.current.style.setProperty('--mx', `${x}%`)
      ref.current.style.setProperty('--my', `${y}%`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden>
      {/* fine grid, radially masked */}
      <div
        className="absolute inset-0 bg-grid opacity-[0.4]"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 80%)',
        }}
      />
      {/* mouse spotlight */}
      <div
        ref={ref}
        className="absolute inset-0 opacity-70 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), var(--accent-soft), transparent 45%)',
        }}
      />
      {/* floating acid orbs */}
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-[var(--accent)]/[0.06] blur-[130px] animate-float" />
      <div className="absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[var(--accent)]/[0.05] blur-[150px] animate-float-delayed" />
    </div>
  )
}

export function HeroSection() {
  return (
    <Section
      id="hero"
      labelledBy="hero-headline"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <HeroAtmosphere />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── Top status bar ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-[var(--border-subtle)] pb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
        >
          <span className="inline-flex items-center gap-2 text-[var(--text-secondary)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            Available for data roles
          </span>
          <span className="hidden h-px flex-1 bg-[var(--border-subtle)] sm:block" />
          <span>Mahmoud Mamdoh</span>
          <span className="text-[var(--accent)]">/</span>
          <span>Data Platform Engineer</span>
          <span className="text-[var(--accent)]">/</span>
          <span>Cairo · UTC+2</span>
        </motion.div>

        {/* ── Main hero grid ───────────────────────── */}
        <motion.div
          variants={wrap}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-16"
        >
          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            <motion.div variants={rise} className="flex flex-wrap gap-2">
              {identityPillars.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]"
                >
                  {p}
                </span>
              ))}
            </motion.div>

            <h1
              id="hero-headline"
              className="mt-7 text-[clamp(2.4rem,6.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--text-primary)]"
            >
              <motion.span variants={rise} className="block">
                <WordReveal text="I don't just" delay={0.1} />
              </motion.span>
              <motion.span variants={rise} className="block">
                <WordReveal text="move data" delay={0.3} />
              </motion.span>
              <motion.span
                variants={rise}
                className="mt-1 block text-[var(--text-muted)]"
              >
                <span className="text-gradient-shimmer">— I move meaning.</span>
                <span className="ml-1 inline-block h-[0.78em] w-[3px] animate-hero-cursor bg-[var(--accent)] align-[-0.05em]" aria-hidden />
              </motion.span>
            </h1>

            <motion.p
              variants={rise}
              className="mt-7 max-w-xl text-pretty text-base font-medium leading-relaxed text-[var(--text-secondary)] sm:text-lg"
            >
              {heroSubline}
            </motion.p>
            <motion.p variants={rise} className="mt-2 max-w-xl text-sm italic text-[var(--text-muted)]">
              {heroWhyLine}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.3}>
                <GlowBorder className="rounded-full">
                  <Link
                    href="/Mahmoud_Mamdoh_data_engineer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-bold text-[var(--accent-ink)] transition-all duration-300 hover:brightness-105"
                  >
                    <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                    <FaDownload className="relative text-xs" />
                    <span className="relative">Download Résumé</span>
                  </Link>
                </GlowBorder>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[var(--border-accent)] hover:bg-[var(--accent-soft)]"
                >
                  View projects
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Magnetic>

              <div className="ml-1 flex items-center gap-2">
                {[
                  { href: 'mailto:mahmoud.mamdoh0812@gmail.com', icon: FaEnvelope, label: 'Email' },
                  { href: 'https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/', icon: FaLinkedin, label: 'LinkedIn' },
                  { href: 'https://github.com/MAHMOUDMAMDOH8', icon: FaGithub, label: 'GitHub' },
                ].map(({ href, icon: Icon, label }) => (
                  <Magnetic key={label} strength={0.4}>
                    <Link
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                    >
                      <Icon className="text-sm" />
                    </Link>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

            {/* Focus tags */}
            <motion.div variants={rise} className="mt-9 flex flex-wrap gap-1.5" aria-label="Core technical focus">
              {recruiterFocusTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--text-muted)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait + floating stats */}
          <motion.div variants={rise} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <ParallaxTilt maxTilt={6} className="will-change-transform">
                <HeroPortrait images={heroPortraits} />
              </ParallaxTilt>

              {/* Floating stat chips */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                {heroStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.12, ease }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/80 p-3.5 text-center backdrop-blur-sm transition-colors hover:border-[var(--border-accent)]"
                  >
                    {stat.value ? (
                      <p className="text-xl font-bold tabular-nums text-[var(--text-primary)]">
                        <AnimatedStatValue value={stat.value} />
                      </p>
                    ) : (
                      <p className="text-base font-bold text-[var(--accent)]">→</p>
                    )}
                    <p className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.12em] text-[var(--text-muted)]">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Tool marquee ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mt-16 overflow-hidden border-y border-[var(--border-subtle)] py-4"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent" aria-hidden />
          <div className="marquee gap-12 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
            {[...Array(2)].flatMap(() => marqueeTools).map((item, idx) => (
              <span key={`${item}-${idx}`} className="marquee-item flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Intro + trusted ──────────────────────── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="text-pretty text-base leading-relaxed text-[var(--text-secondary)] lg:col-span-8"
          >
            {heroIntro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-4"
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--text-muted)]">
              Built for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {trustedByDomains.map((domain) => (
                <span
                  key={domain}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-secondary)]"
                >
                  {domain}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Featured project ─────────────────────── */}
        <FeaturedProjectHero project={featuredProject} />

        {/* ── Testimonial ──────────────────────────── */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease }}
          className="relative mt-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-7 py-6"
        >
          <FaQuoteLeft className="text-[var(--accent)] opacity-40" aria-hidden />
          <p className="mt-3 text-base leading-relaxed text-[var(--text-secondary)]">
            &ldquo;{heroTestimonial.quote}&rdquo;
          </p>
          <footer className="mt-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {heroTestimonial.attribution}
            <span className="mx-2 text-[var(--accent)] opacity-60">·</span>
            {heroTestimonial.context}
          </footer>
        </motion.blockquote>

        {/* ── Scroll cue ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 5, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-14 flex items-center justify-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]"
        >
          Scroll to explore
          <FaChevronDown className="text-[9px]" aria-hidden />
        </motion.div>
      </div>
    </Section>
  )
}
