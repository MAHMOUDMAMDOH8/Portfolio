'use client'

import { HeroDataFlow } from '../../components/portfolio/HeroDataFlow'

export function CaseStudiesPageShell({ children, showDataFlow = false }) {
  return (
    <div className="relative min-h-screen bg-zinc-100 text-zinc-950 transition-colors dark:bg-[#050508] dark:text-zinc-100">
      {showDataFlow ? (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px] overflow-hidden opacity-60 dark:opacity-50">
          <HeroDataFlow />
        </div>
      ) : null}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.22] dark:hidden"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)'
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 hidden opacity-[0.35] dark:block"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 75%)'
        }}
      />
      {children}
    </div>
  )
}
