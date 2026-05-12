'use client'

import Link from 'next/link'
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { Section } from './Section'
import { contactBody, contactHeadline, contactPhoneDisplay, contactPhoneTel } from './data'

export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-heading" className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl dark:text-white">
          {contactHeadline}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-zinc-600 md:text-base dark:text-zinc-400">{contactBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`tel:${contactPhoneTel}`}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-zinc-50 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-cyan-500/40 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-cyan-500/40"
          >
            <FaPhone />
            {contactPhoneDisplay}
          </Link>
          <Link
            href="mailto:mahmoud.mamdoh0812@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-slate-950"
          >
            <FaEnvelope />
            Book a call
          </Link>
          <Link
            href="https://cal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-zinc-50 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-cyan-500/40 dark:border-white/15 dark:bg-white/[0.04] dark:text-white dark:hover:border-cyan-500/40"
          >
            <FaExternalLinkAlt className="text-xs" />
            Schedule instantly
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-emerald-500/50 dark:border-white/15 dark:text-white dark:hover:border-emerald-500/40"
          >
            <FaExternalLinkAlt className="text-xs" />
            View case studies
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-white/15 dark:text-white dark:hover:border-white/30"
          >
            <FaLinkedin />
            Connect on LinkedIn
          </Link>
          <Link
            href="https://github.com/MAHMOUDMAMDOH8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 dark:border-white/15 dark:text-white dark:hover:border-white/30"
          >
            <FaGithub />
            Explore GitHub
          </Link>
        </div>
        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-600">
          Average response time · under 24 hours
        </p>
      </div>
    </Section>
  )
}
