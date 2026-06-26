'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-muted)] shadow-lg backdrop-blur-md transition hover:border-[var(--border-accent)] hover:text-[var(--accent)] hover:shadow-[var(--shadow-card-hover)]"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
