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
      {visible ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-lg backdrop-blur-md transition hover:border-brand-500/50 hover:text-brand-700 dark:border-white/10 dark:bg-[#0d0d12]/90 dark:text-zinc-300 dark:hover:border-brand-500/40 dark:hover:text-brand-400"
        >
          <FaArrowUp />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
