'use client'

import Link from 'next/link'
import { navLinks } from './data'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center text-xs text-zinc-500 sm:text-left">© {year} Mahmoud Mamdoh. Crafted with purpose.</p>
        <nav
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500"
          aria-label="Footer"
        >
          {navLinks.map(({ id, label }) => (
            <Link key={`f-${id}`} href={`#${id}`} className="transition hover:text-zinc-800 dark:hover:text-zinc-300">
              {label}
            </Link>
          ))}
          <Link href="/case-studies" className="transition hover:text-zinc-800 dark:hover:text-zinc-300">
            Case Studies
          </Link>
        </nav>
      </div>
    </footer>
  )
}
