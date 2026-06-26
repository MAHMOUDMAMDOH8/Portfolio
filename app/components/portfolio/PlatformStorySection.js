'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Section, FadeInView } from './Section'
import { platformFlow } from './data'

const layerColors = {
  bronze: 'from-amber-500/20 to-amber-600/10',
  silver: 'from-zinc-400/20 to-zinc-500/10',
  gold: 'from-yellow-500/20 to-yellow-600/10',
  serve: 'from-[var(--accent)]/20 to-[var(--accent-dim)]/10',
}

const layerBorders = {
  bronze: 'border-amber-500/30',
  silver: 'border-zinc-400/30',
  gold: 'border-yellow-500/30',
  serve: 'border-[var(--border-accent)]',
}

export function PlatformStorySection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end 40%'],
  })

  return (
    <Section id="platform" labelledBy="platform-title" className="section-gap">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="mb-14 max-w-3xl">
          <p className="eyebrow mb-4">Platform architecture</p>
          <h2
            id="platform-title"
            className="text-balance text-2xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl"
          >
            How I design modern data platforms
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
            From streaming ingestion to governed analytics — each layer is built for scale,
            observability, and stakeholder trust.
          </p>
        </FadeInView>

        <div ref={containerRef} className="relative">
          <motion.div
            className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/40 via-[var(--border-subtle)] to-transparent"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            aria-hidden
          />

          <div className="space-y-8">
            {platformFlow.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-14"
              >
                <div
                  className={`absolute left-0 top-0 flex h-[46px] w-[46px] items-center justify-center rounded-xl border bg-[var(--bg-elevated)] transition hover:border-[var(--border-accent)] ${layerBorders[layer.layer] || 'border-[var(--border-subtle)]'}`}
                >
                  <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                    {layer.step}
                  </span>
                </div>

                <div className="card-premium p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {layer.title}
                    </h3>
                    <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2 py-0.5 font-mono text-[9px] font-medium text-[var(--text-muted)]">
                      {layer.subtitle}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {layer.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {layer.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-2 py-0.5 font-mono text-[9px] font-medium text-[var(--text-muted)] transition hover:border-[var(--border-accent)] hover:text-[var(--accent)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]">
                      {layer.flow}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
