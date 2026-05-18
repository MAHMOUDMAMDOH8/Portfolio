'use client'

import Link from 'next/link'
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { Section, FadeInView } from './Section'
import { contactBody, contactHeadline, contactPhoneDisplay, contactPhoneTel } from './data'

export function ContactSection() {
  return (
    <Section id="contact" labelledBy="contact-heading" className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-20">
      <FadeInView className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-3xl">
          {contactHeadline}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 md:text-base">{contactBody}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`tel:${contactPhoneTel}`}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-5 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-brand-500/40 dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-brand-500/40"
          >
            <FaPhone />
            {contactPhoneDisplay}
          </Link>
          <Link
            href="mailto:mahmoud.mamdoh0812@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
          >
            <FaEnvelope />
            Book a call
          </Link>
          <Link
            href="/Mahmoud_Mamdoh_data_engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-brand-500/50 hover:text-brand-700 dark:border-white/15 dark:text-zinc-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
          >
            <FaExternalLinkAlt className="text-xs" />
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 dark:border-white/15 dark:text-zinc-300 dark:hover:border-white/30"
          >
            <FaLinkedin />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/MAHMOUDMAMDOH8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 dark:border-white/15 dark:text-zinc-300 dark:hover:border-white/30"
          >
            <FaGithub />
            GitHub
          </Link>
        </div>
        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-400 dark:text-zinc-500">
          Average response time &middot; under 24 hours
        </p>
      </FadeInView>
    </Section>
  )
}
