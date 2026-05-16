'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from './ThemeContext'

export function ThemeToggleButton({ className = '' }) {
  const { theme, toggleTheme, isTransitioning } = useTheme()

  return (
    <button
      type="button"
      onClick={(e) => toggleTheme(e)}
      disabled={isTransitioning}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-busy={isTransitioning}
      className={`relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-zinc-200 bg-white text-zinc-700 transition hover:border-cyan-400/50 hover:text-cyan-700 disabled:pointer-events-none disabled:opacity-70 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-cyan-500/40 dark:hover:text-cyan-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -120, opacity: 0, scale: 0.4 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 120, opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? <FaSun className="text-base" /> : <FaMoon className="text-base" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
