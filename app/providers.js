'use client'

import { ThemeProvider } from './components/portfolio/ThemeContext'

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>
}
