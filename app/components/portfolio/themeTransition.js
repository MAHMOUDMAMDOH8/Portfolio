const DURATION_MS = 550
const EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getRevealOrigin(event) {
  if (event?.clientX != null && event?.clientY != null) {
    return { x: event.clientX, y: event.clientY }
  }
  return { x: window.innerWidth / 2, y: window.innerHeight / 2 }
}

function getRevealRadius(x, y) {
  return Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )
}

function runCircularReveal(x, y, endRadius) {
  document.documentElement.animate(
    {
      clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    },
    {
      duration: DURATION_MS,
      easing: EASING,
      pseudoElement: '::view-transition-new(root)'
    }
  )
}

/** Smooth theme swap with circular reveal from click (or viewport center). */
export function runThemeTransition(applyTheme, event) {
  if (prefersReducedMotion()) {
    applyTheme()
    return Promise.resolve()
  }

  const { x, y } = getRevealOrigin(event)
  const endRadius = getRevealRadius(x, y)
  const root = document.documentElement

  if (typeof document.startViewTransition === 'function') {
    const transition = document.startViewTransition(() => {
      applyTheme()
    })

    return transition.ready
      .then(() => runCircularReveal(x, y, endRadius))
      .catch(() => {
        applyTheme()
      })
  }

  root.classList.add('theme-switching')
  applyTheme()

  return new Promise((resolve) => {
    window.setTimeout(() => {
      root.classList.remove('theme-switching')
      resolve()
    }, DURATION_MS)
  })
}
