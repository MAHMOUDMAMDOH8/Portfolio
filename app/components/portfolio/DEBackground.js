'use client'

import { DataFlowCanvas } from './DataFlowCanvas'

/** Living global background — animated data-flow network under CSS grid + grain. */
export function DEBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden" aria-hidden>
      {/* animated data-flow network, masked to edges so text stays clean */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse 75% 75% at 50% 40%, transparent 25%, black 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 40%, transparent 25%, black 95%)',
        }}
      >
        <DataFlowCanvas />
      </div>

      {/* fine grid, radially masked at top */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 8%, transparent 68%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 65% at 50% 0%, black 8%, transparent 68%)',
        }}
      />
      {/* top acid halo */}
      <div
        className="absolute left-1/2 top-[-10%] h-[min(55vh,520px)] w-[min(85vw,780px)] -translate-x-1/2 rounded-full opacity-90 blur-[110px]"
        style={{ background: 'radial-gradient(circle, var(--glow-primary), transparent 70%)' }}
      />
      {/* lower-left ambient */}
      <div
        className="absolute bottom-[-5%] left-[-8%] h-[40vh] w-[40vw] rounded-full opacity-70 blur-[120px]"
        style={{ background: 'radial-gradient(circle, var(--glow-purple), transparent 70%)' }}
      />
      {/* film grain */}
      <div className="noise absolute inset-0 opacity-[0.5]" />
    </div>
  )
}
