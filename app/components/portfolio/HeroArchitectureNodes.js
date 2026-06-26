'use client'

/**
 * Ambient floating architecture nodes for the hero — labelled stack tech
 * drifting gently, wired together with animated "pipeline" connector lines.
 * Pure CSS animation (no JS loop), edge-weighted so it never covers the
 * headline or portrait. Hidden on small screens; calmed under reduced-motion.
 */
const NODES = [
  { label: 'Kafka', x: 7, y: 16 },
  { label: 'Spark', x: 26, y: 7 },
  { label: 'Airflow', x: 4, y: 54 },
  { label: 'Iceberg', x: 92, y: 20 },
  { label: 'Snowflake', x: 95, y: 52 },
  { label: 'dbt', x: 84, y: 78 },
  { label: 'Docker', x: 12, y: 86 },
  { label: 'Kubernetes', x: 40, y: 93 },
]

// pipeline edges (indices into NODES) — a loose left→right data flow
const EDGES = [
  [0, 1],
  [0, 2],
  [2, 6],
  [6, 7],
  [3, 4],
  [4, 5],
  [1, 3],
  [5, 7],
]

export function HeroArchitectureNodes() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
      aria-hidden
    >
      {/* connector lines */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="var(--accent)"
            strokeWidth="0.12"
            strokeOpacity="0.18"
            strokeDasharray="1.4 1.4"
            vectorEffect="non-scaling-stroke"
            style={{ animation: `dash-flow ${6 + i * 0.6}s linear infinite` }}
          />
        ))}
      </svg>

      {/* nodes */}
      {NODES.map((node, i) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animation: `node-float ${5 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
          }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/60 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-muted)]/80 backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            {node.label}
          </span>
        </div>
      ))}
    </div>
  )
}
