'use client'

import { AmbientMesh } from '../../components/portfolio/AmbientMesh'

export function CaseStudiesPageShell({ children, showDataFlow = false }) {
  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <AmbientMesh trackWindow enabled={false} />
      {children}
    </div>
  )
}
