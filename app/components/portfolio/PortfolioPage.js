'use client'

import { useEffect, useState } from 'react'
import { SiteHeader } from './SiteHeader'
import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ImpactSection } from './ImpactSection'
import { SkillsSection } from './SkillsSection'
import { ServicesSection } from './ServicesSection'
import { ProjectsSection } from './ProjectsSection'
import { ToolsSection } from './ToolsSection'
import { OriginSection } from './OriginSection'
import { LearningSection } from './LearningSection'
import { CertificationsSection } from './CertificationsSection'
import { ContactSection } from './ContactSection'
import { SiteFooter } from './SiteFooter'

function PortfolioShell() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.classList.remove('mobile-nav-open')
    }
    return () => document.body.classList.remove('mobile-nav-open')
  }, [isNavOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsNavOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative min-h-screen bg-zinc-100 text-zinc-950 transition-colors dark:bg-[#050508] dark:text-zinc-100">
      <a
        href="#main"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-cyan-500 px-3 py-2 text-sm font-semibold text-[#050508] opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
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
      <SiteHeader isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ToolsSection />
        <OriginSection />
        <LearningSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default function PortfolioPage() {
  return <PortfolioShell />
}
