'use client'

import { useEffect, useState } from 'react'

/** Detect low-power devices / save-data / mobile for lighter animations. */
export function useMotionProfile() {
  const [profile, setProfile] = useState({
    reduced: false,
    lite: true,
    isMobile: true,
  })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const saveData = navigator.connection?.saveData === true
    const lowCores = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4
    const lite = reduced || isMobile || saveData || lowCores

    setProfile({ reduced, lite, isMobile })

    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => {
      const mobile = mq.matches
      setProfile({
        reduced,
        lite: reduced || mobile || saveData || lowCores,
        isMobile: mobile,
      })
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return profile
}
