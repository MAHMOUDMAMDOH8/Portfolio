'use client'

import Image from 'next/image'
import { Section, SectionHeader } from './Section'
import { certifications } from './data'

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      labelledBy="certifications-title"
      className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Recognized expertise across data engineering, analytics, and business intelligence."
          titleId="certifications-title"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert) => (
            <article
              key={cert.name}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm backdrop-blur-md transition hover:border-cyan-500/35 dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-cyan-500/25"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900/50">
                <Image
                  src={cert.image}
                  alt={`${cert.name} — ${cert.provider}`}
                  fill
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">{cert.name}</h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{cert.provider}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
