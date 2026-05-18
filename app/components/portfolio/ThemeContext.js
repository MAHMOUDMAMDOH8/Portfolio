'use client'

import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { runThemeTransition } from './themeTransition'

const STORAGE_KEY = 'portfolio-theme'

const ThemeContext = createContext(null)

function applyDomTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.classList.toggle('light', theme === 'light')
  document.documentElement.dataset.theme = theme
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('dark')
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const themeRef = useRef('dark')

  useLayoutEffect(() => {
    let t = 'dark'
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s === 'light' || s === 'dark') t = s
    } catch {
      /* ignore */
    }
    applyDomTheme(t)
    themeRef.current = t
    setThemeState(t)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    applyDomTheme(theme)
    themeRef.current = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* ignore */
    }
  }, [theme, mounted])

  const setTheme = useCallback((next) => {
    if (next === 'light' || next === 'dark') setThemeState(next)
  }, [])

  const toggleTheme = useCallback((event) => {
    if (isTransitioning) return

    const next = themeRef.current === 'dark' ? 'light' : 'dark'
    setIsTransitioning(true)

    runThemeTransition(() => {
      applyDomTheme(next)
      themeRef.current = next
      flushSync(() => setThemeState(next))
    }, event).finally(() => {
      setIsTransitioning(false)
    })
  }, [isTransitioning])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, mounted, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}
