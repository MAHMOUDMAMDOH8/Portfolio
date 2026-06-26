'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { BackToTop } from './BackToTop'
import { DEBackground } from './DEBackground'
import { useScrollAnimations } from './motion/useScrollAnimations'
import { TerminalMode } from './TerminalMode'

function PortfolioShell() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useScrollAnimations()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isNavOpen || isTerminalOpen) {
      document.body.classList.add('overflow-hidden', 'fixed', 'w-full')
    } else {
      document.body.classList.remove('overflow-hidden', 'fixed', 'w-full')
    }
    return () => document.body.classList.remove('overflow-hidden', 'fixed', 'w-full')
  }, [isNavOpen, isTerminalOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsNavOpen(false)
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-base)]"
          >
            <div className="flex flex-col items-center gap-5">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border-accent)] bg-[var(--accent-soft)] font-mono text-base font-bold text-[var(--accent)]"
              >
                MM
              </motion.div>
              <div className="flex items-end gap-1" aria-hidden>
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0.25 }}
                    animate={{ scaleY: [0.25, 1, 0.25] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                    className="h-5 w-[3px] origin-bottom rounded-full bg-[var(--accent)]"
                  />
                ))}
              </div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--text-muted)]">
                Initializing
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <DEBackground />
      <ScrollProgress />
      <TerminalMode isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      <a
        href="#main"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-20 rounded bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-white opacity-0 transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      >
        Skip to content
      </a>
      <SiteHeader isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} onOpenTerminal={() => setIsTerminalOpen(true)} />
      <motion.main
        id="main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <HeroSection />
        <PlatformStorySection />
        <AboutSection />
        <ImpactSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <OriginSection />
        <CertificationsSection />
        <ContactSection />
      </motion.main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}

export default function PortfolioPage() {
  return <PortfolioShell />
}
