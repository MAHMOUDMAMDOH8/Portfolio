'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section, SectionHeader, StaggerWrapper, staggerItemFast } from './Section'
import { TiltCard, GlowBorder } from './motion/Primitives'
import { certifications } from './data'

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      labelledBy="certifications-title"
      className="section-gap"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Recognized expertise across data engineering, analytics, and business intelligence."
          titleId="certifications-title"
          align="left"
        />

        <StaggerWrapper className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.div key={cert.name} variants={staggerItemFast}>
              <TiltCard tiltDegree={4} className="h-full">
                <GlowBorder className="h-full rounded-2xl">
                  <article className="card-premium group relative flex h-full flex-col overflow-hidden p-4">
                    <span className="pointer-events-none absolute right-4 top-3 z-20 font-mono text-[10px] font-semibold text-[var(--text-muted)] opacity-50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-base)]">
                      <div className="pointer-events-none absolute inset-0 z-10 bg-[var(--accent-soft)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.08)_50%,transparent_70%)] translate-x-[-120%] transition-transform duration-1000 ease-out group-hover:translate-x-[120%]" />
                      <Image
                        src={cert.image}
                        alt={`${cert.name} — ${cert.provider}`}
                        fill
                        className="object-contain p-2.5 transition-transform duration-500 group-hover:scale-[1.05]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="mt-4 flex flex-1 flex-col">
                      <h3 className="text-sm font-semibold leading-snug text-[var(--text-primary)]">
                        {cert.name}
                      </h3>
                      <div className="mt-auto pt-3">
                        <span className="inline-block rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors group-hover:border-[var(--border-accent)] group-hover:text-[var(--accent)]">
                          {cert.provider}
                        </span>
                      </div>
                    </div>
                  </article>
                </GlowBorder>
              </TiltCard>
            </motion.div>
          ))}
        </StaggerWrapper>
      </div>
    </Section>
  )
}
