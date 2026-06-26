'use client'

import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

export function useReduced() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function FadeIn({ children, delay = 0, duration = 0.6, x = 0, y = 24, className, once = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideUp({ children, delay = 0, className, once = true }) {
  return (
    <FadeIn delay={delay} y={32} className={className} once={once}>
      {children}
    </FadeIn>
  )
}

export function ScaleIn({ children, delay = 0, className, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, className, staggerDelay = 0.06, once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function InView({ children, className, ...props }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div ref={ref} className={className} {...props}>
      {typeof children === 'function' ? children(inView) : children}
    </div>
  )
}

export function CardHover({ children, className, glowColor = 'rgba(59, 130, 246, 0.08)' }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
    card.style.setProperty('--glow-opacity', '1')
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--glow-opacity', '0')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className || ''}`}
      style={{
        background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 40%)`,
      }}
    >
      {children}
    </div>
  )
}

export function TiltCard({ children, className, tiltDegree = 6 }) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const tiltX = (y - 0.5) * -tiltDegree
    const tiltY = (x - 0.5) * tiltDegree
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`
    card.style.setProperty('--shine-x', `${x * 100}%`)
    card.style.setProperty('--shine-y', `${y * 100}%`)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className || ''}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
          style={{
            background: 'radial-gradient(circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.06), transparent 60%)',
          }}
        />
      )}
    </div>
  )
}

export function Magnetic({ children, strength = 0.3, className }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-200 ease-out ${className || ''}`}
    >
      {children}
    </div>
  )
}

export function GlowBorder({ children, className, active = true }) {
  return (
    <div className={`group relative ${className || ''}`}>
      {active && (
        <div className="pointer-events-none absolute -inset-[1px] z-0 rounded-[inherit] opacity-0 bg-[linear-gradient(110deg,var(--accent-dim),var(--accent),var(--cyan))] transition-opacity duration-500 group-hover:opacity-100 blur-[2px]" />
      )}
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}

export function TextReveal({ children, className, delay = 0, once = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-40px' })

  return (
    <span ref={ref} className={`relative inline-block overflow-hidden ${className || ''}`}>
      <motion.span
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  )
}

export function WordReveal({ text, className, delay = 0, once = true }) {
  const words = text.split(' ')

  return (
    <span className={`inline ${className || ''}`}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="relative inline-block overflow-hidden mr-[0.25em] pb-[0.05em]">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: '-40px' }}
            transition={{ duration: 0.4, delay: delay + i * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function LetterReveal({ text, className, delay = 0, once = true }) {
  return (
    <span className={`inline ${className || ''}`}>
      {text.split('').map((char, i) => (
        <span key={`${char}-${i}`} className="relative inline-block overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once, margin: '-40px' }}
            transition={{ duration: 0.3, delay: delay + i * 0.02, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
            style={{ whiteSpace: char === ' ' ? 'pre' : undefined }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function ParallaxTilt({ children, className, maxTilt = 8 }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const tiltX = (y - 0.5) * -maxTilt
    const tiltY = (x - 0.5) * maxTilt
    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className || ''}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export function useMouseGlow() {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--glow-x', `${x}%`)
    el.style.setProperty('--glow-y', `${y}%`)
  }, [])

  return { ref, onMouseMove: handleMouseMove }
}
