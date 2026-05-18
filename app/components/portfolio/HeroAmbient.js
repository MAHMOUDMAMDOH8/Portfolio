'use client'

import { motion } from 'framer-motion'
import { AmbientMesh } from './AmbientMesh'
import { usePrefersReducedMotion } from './lib/usePrefersReducedMotion'
import { useMotionProfile } from './lib/useMotionProfile'

export function HeroAmbient() {
  const reduced = usePrefersReducedMotion()
  const { lite } = useMotionProfile()
  const showMesh = !reduced && !lite

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {showMesh ? <AmbientMesh className="opacity-70" enabled /> : null}

      {lite || reduced ? (
        <>
          <div
            className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full blur-[100px] opacity-50"
            style={{ background: 'var(--glow-cyan)' }}
          />
          <div
            className="absolute -right-20 top-20 h-[340px] w-[340px] rounded-full blur-[100px] opacity-40"
            style={{ background: 'var(--glow-blue)' }}
          />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -left-32 top-0 h-[380px] w-[380px] rounded-full blur-[100px]"
            style={{ background: 'var(--glow-cyan)' }}
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-20 top-20 h-[340px] w-[340px] rounded-full blur-[100px]"
            style={{ background: 'var(--glow-blue)' }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </>
      )}

      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, var(--accent-soft) 0%, transparent 50%)',
        }}
      />
    </div>
  )
}
