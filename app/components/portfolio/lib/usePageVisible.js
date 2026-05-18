'use client'

import { useEffect, useState } from 'react'

export function usePageVisible() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onVis = () => setVisible(document.visibilityState === 'visible')
    onVis()
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  return visible
}
