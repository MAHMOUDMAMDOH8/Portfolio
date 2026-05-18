'use client'

export function HeroDataFlow() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.45] dark:opacity-[0.35]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgb(220 38 38)" stopOpacity="0" />
          <stop offset="50%" stopColor="rgb(220 38 38)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="rgb(37 99 235)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M 0 200 Q 300 120 600 200 T 1200 200"
        fill="none"
        stroke="url(#flow-line)"
        strokeWidth="1"
        opacity="0.35"
      />
      <path
        d="M 0 260 Q 400 320 800 240 T 1200 280"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-blue-600/25 dark:text-blue-400/15"
        opacity="0.2"
      />
      {[
        { cx: 120, cy: 200, delay: '0s' },
        { cx: 420, cy: 168, delay: '0.8s' },
        { cx: 720, cy: 200, delay: '1.6s' },
        { cx: 1020, cy: 232, delay: '2.4s' }
      ].map((dot) => (
        <g key={dot.delay}>
          <circle cx={dot.cx} cy={dot.cy} r="3" className="fill-brand-500/40 dark:fill-brand-400/50" />
            <circle
              cx={dot.cx}
              cy={dot.cy}
              r="3"
              className="fill-brand-500 dark:fill-brand-400 hero-flow-pulse"
            style={{ animationDelay: dot.delay }}
          />
        </g>
      ))}
    </svg>
  )
}
