'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../lib/cn'

export function ScrollReveal({
  children,
  className,
  as: Tag = 'motion.div',
  delay = 0,
  y = 48,
  scrub = false,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)

    const tween = gsap.from(el, {
      y,
      opacity: 0,
      duration: scrub ? 1 : 0.9,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: scrub ? 'play reverse play reverse' : 'play none none reverse',
        scrub: scrub ? 0.6 : false,
      },
    })

    return () => tween.scrollTrigger?.kill()
  }, [delay, y, scrub])

  const Component = Tag === 'motion.div' ? 'div' : Tag

  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  )
}
