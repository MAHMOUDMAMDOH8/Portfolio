'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export function ThemeToggleButton() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark')
    setDark(isDark)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-muted)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)]"
    >
      {dark ? <FaSun size={13} /> : <FaMoon size={13} />}
    </button>
  )
}
