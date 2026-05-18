'use client'

import { useEffect, useState } from 'react'
import { SiteHeader } from './SiteHeader'
import { HeroSection } from './HeroSection'
import { PlatformStorySection } from './PlatformStorySection'
import { AboutSection } from './AboutSection'
import { ImpactSection } from './ImpactSection'
import { SkillsSection } from './SkillsSection'
import { ServicesSection } from './ServicesSection'
import { ProjectsSection } from './ProjectsSection'
import { OriginSection } from './OriginSection'
import { CertificationsSection } from './CertificationsSection'
import { ContactSection } from './ContactSection'
import { SiteFooter } from './SiteFooter'
import { ScrollProgress } from './ScrollProgress'
import { DEBackground } from './DEBackground'
import { useScrollAnimations } from './motion/useScrollAnimations'

function PortfolioShell() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  useScrollAnimations()

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden', 'fixed', 'w-full')
    } else {
      document.body.classList.remove('overflow-hidden', 'fixed', 'w-full')
    }
    return () => document.body.classList.remove('overflow-hidden', 'fixed', 'w-full')
  }, [isNavOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsNavOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <DEBackground />
      <ScrollProgress />
      <a
        href="#main"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-[#04040a] opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <SiteHeader isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main id="main">
        <HeroSection />
        <PlatformStorySection />
        <div data-reveal>
          <AboutSection />
        </div>
        <div data-reveal>
          <ImpactSection />
        </div>
        <div data-reveal>
          <SkillsSection />
        </div>
        <div data-reveal>
          <ServicesSection />
        </div>
        <div data-reveal>
          <ProjectsSection />
        </div>
        <div data-reveal>
          <OriginSection />
        </div>
        <div data-reveal>
          <CertificationsSection />
        </div>
        <div data-reveal>
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default function PortfolioPage() {
  return <PortfolioShell />
}

