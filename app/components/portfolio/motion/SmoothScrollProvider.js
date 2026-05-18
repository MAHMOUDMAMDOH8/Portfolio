'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let gsapRegistered = false

function registerGsap() {
  if (gsapRegistered || typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  gsapRegistered = true
}

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
    registerGsap()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const saveData = navigator.connection?.saveData === true
    const useLenis = !reduced && !isMobile && !saveData

    if (!useLenis) {
      ScrollTrigger.config({ limitCallbacks: true })
      return
    }

    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      touchMultiplier: 1.2,
    })

    lenis.on('scroll', ScrollTrigger.update)

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return children
}
