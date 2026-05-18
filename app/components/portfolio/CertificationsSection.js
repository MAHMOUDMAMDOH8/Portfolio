'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Section'
import { certifications } from './data'

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      labelledBy="certifications-title"
      className="border-t border-zinc-200 py-16 dark:border-white/[0.04] md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Certifications"
          title="Recognized expertise across data engineering, analytics, and business intelligence."
          titleId="certifications-title"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-white/[0.06] dark:bg-white/[0.02]"
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
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
