'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (reduced) return

    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.config({ limitCallbacks: true })

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: isMobile ? 24 : 40,
          opacity: 0,
          duration: isMobile ? 0.55 : 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        })
      })

      gsap.utils.toArray('[data-reveal-stagger]').forEach((container) => {
        const items = container.querySelectorAll('[data-reveal-item]')
        if (!items.length) return
        gsap.from(items, {
          y: 24,
          opacity: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 88%',
            once: true,
          },
        })
      })
    })

    const refresh = () => ScrollTrigger.refresh(true)
    const t = window.setTimeout(refresh, 300)

    return () => {
      window.clearTimeout(t)
      ctx.revert()
    }
  }, [])
}
