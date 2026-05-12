export function Section({ id, children, className = '', labelledBy }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy || undefined}
      className={`scroll-mt-24 md:scroll-mt-28 ${className}`.trim()}
    >
      {children}
    </section>
  )
}

export function SectionHeader({ eyebrow, title, description, titleId }) {
  return (
    <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-400/90">{eyebrow}</p>
      ) : null}
      {title ? (
        <h2
          id={titleId}
          className="mt-3 text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl"
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-base">{description}</p>
      ) : null}
    </header>
  )
}
