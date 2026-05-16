'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function parseStatValue(value) {
  if (value == null || value === '') return null
  const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { display: value, animate: false }
  const num = match[1]
  return {
    animate: true,
    countTo: parseFloat(num),
    suffix: match[2] || '',
    decimals: num.includes('.') ? num.split('.')[1].length : 0
  }
}

export function AnimatedStatValue({ value, className }) {
  const parsed = parseStatValue(value)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.45, margin: '0px 0px -40px 0px' })
  const [display, setDisplay] = useState(() => (parsed?.animate ? `0${parsed.suffix}` : value))

  useEffect(() => {
    const p = parseStatValue(value)
    if (!p?.animate) {
      setDisplay(value)
      return
    }
    if (!isInView) return

    const duration = 1100
    const start = performance.now()
    let frame = 0

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - t) ** 3
      const raw = eased * p.countTo
      const formatted = p.decimals > 0 ? raw.toFixed(p.decimals) : String(Math.round(raw))
      setDisplay(`${formatted}${p.suffix}`)
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  if (!parsed?.animate) {
    return <span className={className}>{value}</span>
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
