'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronDown, FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  heroHeadline,
  heroIntro,
  heroStats,
  marqueeTools,
  recruiterFocusTags
} from './data'
import { Section } from './Section'

export function HeroSection() {
  return (
    <Section id="home" labelledBy="hero-headline" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-0 h-80 rounded-full bg-cyan-500/15 blur-[100px] dark:bg-cyan-500/20" />
        <div className="absolute -right-32 top-32 h-96 rounded-full bg-violet-500/10 blur-[110px] dark:bg-violet-600/15" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-gradient-to-t from-zinc-100 to-transparent dark:from-[#050508]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
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
          className="mt-8 max-w-4xl text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-900 dark:text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
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
        <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
          {heroIntro}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Core technical focus">
          {recruiterFocusTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/Mahmoud_Mamdoh_data_engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-[#050508] shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            <FaDownload />
            Download résumé (PDF)
          </Link>
          <Link
            href="mailto:mahmoud.mamdoh0812@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 backdrop-blur-sm transition hover:border-cyan-500/40 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:bg-white/[0.07]"
          >
            <FaEnvelope />
            Start a project
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 dark:border-white/15 dark:text-white dark:hover:border-white/30"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/MAHMOUDMAMDOH8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 dark:border-white/15 dark:text-white dark:hover:border-white/30"
          >
            <FaGithub />
            GitHub
          </Link>
        </div>
        <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition hover:border-cyan-400/40 dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none dark:backdrop-blur-md dark:hover:border-cyan-500/25"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition group-hover:opacity-100 dark:from-cyan-500/10 dark:to-violet-500/10" />
              {stat.value ? (
                <p className="relative text-2xl font-semibold tabular-nums text-zinc-900 dark:text-white">{stat.value}</p>
              ) : null}
              <p className="relative mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 py-3 dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-100 to-transparent dark:from-[#050508]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-100 to-transparent dark:from-[#050508]" />
          <div className="marquee gap-10 px-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-500">
            {[...Array(2)].flatMap(() => marqueeTools).map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-item flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-600 dark:bg-cyan-400" />
                {item}
              </span>
            ))}
          </div>
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
    </Section>
  )
}
