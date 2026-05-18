'use client'

import { ThemeProvider } from './components/portfolio/ThemeContext'
import { SmoothScrollProvider } from './components/portfolio/motion/SmoothScrollProvider'

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </ThemeProvider>
  )
}
