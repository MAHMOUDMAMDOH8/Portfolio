'use client'

/** Lightweight global background — CSS only (no full-page canvas). */
export function DEBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 8%, transparent 68%)',
        }}
      />
      <div
        className="absolute left-1/2 top-0 h-[min(55vh,520px)] w-[min(85vw,780px)] -translate-x-1/2 rounded-full blur-[100px] opacity-80"
        style={{ background: 'var(--glow-accent)' }}
      />
    </div>
  )
}
