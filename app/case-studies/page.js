'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CaseStudiesListHero } from './components/CaseStudiesListHero'
import { CaseStudiesNav } from './components/CaseStudiesNav'
import { CaseStudiesPageShell } from './components/CaseStudiesPageShell'
import {
  csBody,
  csBodyMuted,
  csCard,
  csCardInner,
  csChip,
  csCodeBlock,
  csFloatingNav,
  csHeading
} from './components/caseStudyStyles'
import { caseStudies } from './data'
import {
  FaGithub, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaDatabase,
  FaChartLine,
  FaRocket,
  FaTools,
  FaServer,
  FaCloud,
  FaCode,
  FaCheckCircle,
  FaLightbulb,
  FaTrophy,
  FaUsers,
  FaClock,
  FaLayerGroup,
  FaNetworkWired,
  FaShieldAlt,
  FaChartBar,
  FaCogs,
  FaEye,
  FaDownload,
  FaPlay,
  FaHome
} from 'react-icons/fa'

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Navigation functions
  const goToNextCase = () => {
    if (!selectedCase) return
    const currentIndex = caseStudies.findIndex(cs => cs.id === selectedCase)
    const nextIndex = (currentIndex + 1) % caseStudies.length
    setSelectedCase(caseStudies[nextIndex].id)
  }

  const goToPreviousCase = () => {
    if (!selectedCase) return
    const currentIndex = caseStudies.findIndex(cs => cs.id === selectedCase)
    const prevIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1
    setSelectedCase(caseStudies[prevIndex].id)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (selectedCase) {
        if (event.key === 'ArrowRight') {
          goToNextCase()
        } else if (event.key === 'ArrowLeft') {
          goToPreviousCase()
        } else if (event.key === 'Escape') {
          setSelectedCase(null)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedCase])

  const selectedCaseStudy = selectedCase ? caseStudies.find(cs => cs.id === selectedCase) : null

  if (!isLoaded) {
    return (
      <CaseStudiesPageShell>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-zinc-300 border-t-brand-600 dark:border-white/10 dark:border-t-brand-400" />
            <p className="text-sm text-zinc-500">Loading case studiesâ€¦</p>
          </div>
        </div>
      </CaseStudiesPageShell>
    )
  }

  if (selectedCaseStudy) {
    const currentIndex = caseStudies.findIndex((cs) => cs.id === selectedCase) + 1

    return (
      <CaseStudiesPageShell>
        <CaseStudiesNav
          variant="detail"
          onBack={() => setSelectedCase(null)}
          onPrev={goToPreviousCase}
          onNext={goToNextCase}
          currentIndex={currentIndex}
          total={caseStudies.length}
        />

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <AnimatePresence>
            <motion.div
              key="case-study-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-none backdrop-blur-md">
                <div className="relative h-64 bg-gradient-to-br from-brand-600/90 via-brand-800/90 to-[#0a1628] md:h-80">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white sm:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-100">
                        {selectedCaseStudy.category}
                      </span>
                      <span className="rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs font-medium text-zinc-200">
                        {selectedCaseStudy.difficulty}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                        {selectedCaseStudy.status}
                      </span>
                    </div>
                    <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                      {selectedCaseStudy.title}
                    </h1>
                    <p className="mt-3 max-w-3xl text-pretty text-base text-brand-50/90 sm:text-lg">{selectedCaseStudy.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Problem-Solution Story Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-3">
                    <FaLightbulb className="text-xl text-amber-300" />
                  </div>
                  <h2 className={csHeading}>Problem-Solution Story</h2>
                </div>
                <div className={`${csBodyMuted} leading-relaxed space-y-4`}>
                  <p><span className="font-semibold text-rose-400">The Challenge:</span> {selectedCaseStudy.problem.description}</p>
                  <p><span className="font-semibold text-brand-400">My Approach:</span> {selectedCaseStudy.solution.description}</p>
                  <p><span className="font-semibold text-emerald-400">The Outcome:</span> {selectedCaseStudy.results.description}</p>
                </div>
              </div>

              {/* Problem Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-rose-500/25 bg-rose-500/10 p-3">
                    <FaLightbulb className="text-xl text-rose-300" />
                  </div>
                  <h2 className={csHeading}>{selectedCaseStudy.problem.title}</h2>
                </div>
                <p className={`${csBody} mb-6 leading-relaxed`}>{selectedCaseStudy.problem.description}</p>
                <div className="space-y-3">
                  {selectedCaseStudy.problem.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-rose-400" />
                      <span className={csBodyMuted}>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-brand-500/25 bg-brand-500/10 p-3">
                    <FaCogs className="text-xl text-brand-300" />
                  </div>
                  <h2 className={csHeading}>{selectedCaseStudy.solution.title}</h2>
                </div>
                <p className={`${csBody} mb-6 leading-relaxed`}>{selectedCaseStudy.solution.description}</p>
                
                {/* Architecture */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Architecture Overview</h3>
                  <p className="text-zinc-400 mb-6">{selectedCaseStudy.solution.architecture.overview}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCaseStudy.solution.architecture.components.map((component, index) => (
                      <div key={index} className={csCardInner}>
                        <h4 className="mb-2 font-semibold text-white">{component.name}</h4>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {component.tech.map((tech, techIndex) => (
                            <span key={techIndex} className={csChip}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-zinc-400">{component.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCaseStudy.solution.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FaCheckCircle className="flex-shrink-0 text-brand-400" />
                        <span className={csBodyMuted}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-3">
                    <FaTrophy className="text-xl text-emerald-300" />
                  </div>
                  <h2 className={csHeading}>{selectedCaseStudy.results.title}</h2>
                </div>
                <p className="text-zinc-400 mb-8 leading-relaxed">{selectedCaseStudy.results.description}</p>
                
                {/* Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {selectedCaseStudy.results.metrics.map((metric, index) => (
                    <div key={index} className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-brand-500/10 to-brand-800/10 p-6 text-center">
                      <div className="mb-2 text-3xl font-bold tabular-nums text-brand-300">{metric.metric}</div>
                      <div className="mb-1 text-sm font-semibold text-white">{metric.label}</div>
                      <div className="text-xs text-zinc-400">{metric.description}</div>
                    </div>
                  ))}
                </div>

                {/* Business Impact */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Business Impact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCaseStudy.results.businessImpact.map((impact, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FaCheckCircle className="flex-shrink-0 text-brand-400" />
                        <span className={csBodyMuted}>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-brand-500/25 bg-brand-500/10 p-3">
                    <FaCode className="text-xl text-brand-300" />
                  </div>
                  <h2 className={csHeading}>Technical Details</h2>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCaseStudy.technicalDetails.technologies.map((tech, index) => (
                      <span key={index} className="rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2 font-medium text-brand-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippets */}
                <div className="space-y-6">
                  {selectedCaseStudy.technicalDetails.codeSnippets.map((snippet, index) => (
                    <div key={index} className="rounded-xl border border-white/10 bg-[#030305] p-5">
                      <h4 className="mb-3 font-semibold text-white">{snippet.title}</h4>
                      <pre className="overflow-x-auto text-sm text-brand-200/90">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>

                {/* Diagrams */}
                {selectedCaseStudy.technicalDetails.diagrams && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Diagrams</h3>
                    <div className="grid gap-6">
                      {selectedCaseStudy.technicalDetails.diagrams.map((diagram, index) => (
                        <div key={index} className={csCardInner}>
                          <h4 className="mb-2 font-semibold text-white">{diagram.title}</h4>
                          <p className="mb-4 text-sm text-zinc-400">{diagram.description}</p>
                          <div className={csCodeBlock}>
                            <img
                              src={diagram.imageUrl}
                              alt={diagram.title}
                              className="h-auto w-full rounded-md"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Lessons Learned */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-3">
                    <FaLightbulb className="text-xl text-amber-300" />
                  </div>
                  <h2 className={csHeading}>Lessons Learned</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCaseStudy.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-amber-400" />
                      <span className={csBodyMuted}>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={selectedCaseStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-brand-700 px-6 py-3 text-sm font-semibold text-[#050508] transition hover:brightness-110"
                >
                  <FaGithub />
                  <span>View code</span>
                </a>
                {selectedCaseStudy.demo && (
                  <a
                    href={selectedCaseStudy.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-brand-500/40 dark:border-white/15 dark:bg-white/[0.06] dark:text-white"
                  >
                    <FaExternalLinkAlt />
                    <span>Live demo</span>
                  </a>
                )}
              </div>

              <div className={csFloatingNav}>
                <button
                  type="button"
                  onClick={goToPreviousCase}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-brand-500/40 hover:text-brand-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-brand-300"
                  aria-label="Previous case study"
                >
                  <FaArrowLeft size={16} />
                </button>

                <div className="min-w-[3rem] text-center text-xs font-medium tabular-nums text-zinc-500">
                  {(() => {
                    const currentIndex = caseStudies.findIndex((cs) => cs.id === selectedCase) + 1
                    return `${currentIndex} / ${caseStudies.length}`
                  })()}
                </div>

                <button
                  type="button"
                  onClick={goToNextCase}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-brand-500/40 hover:text-brand-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-brand-300"
                  aria-label="Next case study"
                >
                  <FaArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </CaseStudiesPageShell>
    )
  }

  const featuredCount = caseStudies.filter((cs) => cs.featured).length

  return (
    <CaseStudiesPageShell showDataFlow>
      <CaseStudiesNav />

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {isLoaded ? <CaseStudiesListHero count={caseStudies.length} featuredCount={featuredCount} /> : null}

          {/* Case Studies Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {isLoaded && caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedCase(caseStudy.id)
                    }
                  }}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-brand-500/35 hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-brand-500/25 dark:hover:bg-white/[0.04]"
                  onClick={() => setSelectedCase(caseStudy.id)}
                >
                  <div className="relative h-44 bg-gradient-to-br from-brand-600/90 via-brand-800/80 to-[#0a1628] sm:h-48">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)] transition-opacity group-hover:opacity-90" />
                    <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
                      <div className="flex items-start justify-between gap-2">
                        <span className="rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-100">
                          {caseStudy.category}
                        </span>
                        {caseStudy.featured ? (
                          <span className="rounded-full bg-amber-400/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#050508]">
                            Featured
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <h3 className="text-balance text-lg font-semibold leading-snug">{caseStudy.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-brand-100/85">{caseStudy.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200 p-5 dark:border-white/[0.06]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
                      <span className="inline-flex items-center gap-1.5">
                        <FaClock />
                        {caseStudy.status}
                      </span>
                      <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-800 dark:text-emerald-200">
                        {caseStudy.difficulty}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 py-2.5 text-sm font-semibold text-zinc-900 transition group-hover:border-brand-500/35 group-hover:text-brand-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:group-hover:text-brand-200"
                    >
                      <FaEye className="text-xs" />
                      View details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </CaseStudiesPageShell>
  )
} 
