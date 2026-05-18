'use client'

import { motion } from 'framer-motion'
import { platformFlow } from './data'
import { Section } from './Section'
import { eyebrowClass, surfaceCard } from './lib/styles'
import { cn } from './lib/cn'
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion'

const layerColors = {
  bronze: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  silver: 'border-slate-400/30 bg-slate-400/10 text-slate-300',
  gold: 'border-cyan-400/35 bg-cyan-500/10 text-cyan-300',
  serve: 'border-violet-400/35 bg-violet-500/10 text-violet-300',
}

const cardMotion = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export function PlatformStorySection() {
  const reduced = usePrefersReducedMotion()

  return (
    <Section id="platform" labelledBy="platform-title" className="relative border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-xl lg:text-left">
          <p className={eyebrowClass}>Platform architecture</p>
          <h2
            id="platform-title"
            className="mt-4 font-mono text-2xl font-semibold tracking-tight text-[var(--text-primary)] md:text-3xl"
          >
            How I design modern data platforms
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
            From streaming ingestion to governed analytics — each layer is built for scale, observability, and
            stakeholder trust.
          </p>
        </div>

        <ol className="relative mt-12 space-y-6 lg:mt-16 lg:space-y-0 lg:pl-8">
          <div
            className="pointer-events-none absolute left-[1.15rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--border-subtle)] to-transparent lg:block"
            aria-hidden
          />

          {platformFlow.map((step, i) => (
            <li key={step.id} className="relative lg:pb-10 lg:last:pb-0">
              <span
                className="absolute left-0 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-base)] lg:block"
                aria-hidden
              />

              <motion.article
                className={cn(surfaceCard, 'p-6 sm:p-8 lg:ml-10')}
                initial={reduced ? false : 'hidden'}
                whileInView={reduced ? undefined : 'visible'}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: reduced ? 0 : i * 0.08, ease: 'easeOut' }}
                variants={cardMotion}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs text-[var(--accent)]">{step.step}</span>
                  <span
                    className={cn(
                      'rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]',
                      layerColors[step.layer] || layerColors.silver
                    )}
                  >
                    {step.layer}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{step.title}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{step.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{step.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
                  {step.flow}
                </p>
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
