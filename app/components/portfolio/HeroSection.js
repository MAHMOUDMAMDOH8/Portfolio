'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronDown, FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaQuoteLeft } from 'react-icons/fa'
import { AnimatedStatValue } from './CountUp'
import { FeaturedProjectHero } from './FeaturedProjectHero'
import { HeroDataFlow } from './HeroDataFlow'
import { HeroPortrait } from './HeroPortrait'
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
  trustedByDomains
} from './data'
import { Section } from './Section'

export function HeroSection() {
  return (
    <Section id="home" labelledBy="hero-headline" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <HeroDataFlow />
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -left-40 top-0 h-80 rounded-full bg-cyan-500/15 blur-[100px] dark:bg-cyan-500/20" />
        <motion.div
          className="absolute -right-32 top-32 h-96 rounded-full bg-violet-500/10 blur-[110px] dark:bg-violet-600/15"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-24 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[80px] dark:bg-cyan-500/15"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-t from-zinc-100 to-transparent dark:from-[#050508]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 lg:text-left">
          <HeroPortrait images={heroPortraits} />

          <div className="flex w-full max-w-3xl flex-col items-center text-center lg:max-w-none lg:flex-1 lg:items-start lg:pt-2">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-600/25 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-800 dark:border-cyan-500/25 dark:bg-cyan-500/10 dark:text-cyan-200"
            >
              Data Engineer / Data Platform Engineer
            </motion.span>

            <h1
              id="hero-headline"
              className="mt-6 max-w-4xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl lg:mt-5 lg:text-[3.25rem]"
            >
          {heroHeadline.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.35, ease: 'easeOut' }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
          <span
            className="ml-1 inline-block h-[1.1em] w-0.5 animate-hero-cursor bg-cyan-600 align-[-0.15em] sm:ml-2 dark:bg-cyan-400"
            aria-hidden
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.45 }}
          className="mt-5 max-w-2xl text-pretty text-base font-medium leading-snug text-zinc-800 dark:text-zinc-200 sm:text-lg lg:max-w-none"
        >
          {heroSubline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.45 }}
          className="mt-3 max-w-xl text-sm italic text-zinc-500 lg:max-w-none"
        >
          {heroWhyLine}
        </motion.p>

        <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base lg:max-w-none">
          {heroIntro}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Core technical focus">
          {recruiterFocusTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
            </div>

            <motion.div
              className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
              aria-label="Domains served"
            >
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Built for</span>
          {trustedByDomains.map((domain) => (
            <span
              key={domain}
              className="rounded-full border border-zinc-200/80 bg-zinc-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400"
            >
              {domain}
            </span>
          ))}
            </motion.div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
          <Link
            href="/Mahmoud_Mamdoh_data_engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            <FaDownload />
            Download résumé
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-cyan-600/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-900 transition hover:border-cyan-500/60 dark:border-cyan-500/35 dark:text-cyan-100"
          >
            View featured project
          </Link>
          <Link
            href="mailto:mahmoud.mamdoh0812@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-cyan-500/40 dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200"
          >
            <FaEnvelope className="text-xs opacity-80" />
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 dark:border-white/15 dark:text-zinc-300"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/MAHMOUDMAMDOH8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 dark:border-white/15 dark:text-zinc-300"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center">
        <FeaturedProjectHero project={featuredProject} />

        <motion.blockquote
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="relative mt-10 max-w-2xl rounded-2xl border border-zinc-200 bg-white/80 px-6 py-5 text-left shadow-sm backdrop-blur-sm dark:border-white/[0.06] dark:bg-white/[0.03]"
        >
          <FaQuoteLeft className="text-cyan-600/40 dark:text-cyan-400/30" aria-hidden />
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">&ldquo;{heroTestimonial.quote}&rdquo;</p>
          <footer className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
            {heroTestimonial.attribution}
            <span className="mx-2 text-zinc-300 dark:text-zinc-600">·</span>
            {heroTestimonial.context}
          </footer>
        </motion.blockquote>

        <motion.div
          className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:border-cyan-400/40 dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none dark:backdrop-blur-md dark:hover:border-cyan-500/25"
            >
              <motion.div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 dark:from-cyan-500/10 dark:to-violet-500/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              {stat.value ? (
                <p className="relative text-2xl font-semibold tabular-nums text-zinc-900 dark:text-white">
                  <AnimatedStatValue value={stat.value} />
                </p>
              ) : (
                <p className="relative text-lg font-semibold text-cyan-700 dark:text-cyan-300">→</p>
              )}
              <p className="relative mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 py-3 dark:border-white/[0.08] dark:bg-white/[0.02]">
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-100 to-transparent dark:from-[#050508]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-100 to-transparent dark:from-[#050508]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
          <motion.div
            className="marquee gap-10 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {[...Array(2)].flatMap(() => marqueeTools).map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-600"
        >
          Scroll
          <FaChevronDown className="text-[9px]" aria-hidden />
        </motion.div>
        </div>
      </motion.div>
    </Section>
  )
}
