<!--
Sync Impact Report
- Version: 0.1.0 → 1.0.0 (initial ratification for portfolio)
- Modified principles: all placeholders replaced with portfolio governance
- Templates: plan/spec alignment via Constitution Check gates
-->

# Mahmoud Mamdoh Portfolio Constitution

## Core Principles

### I. Content Integrity
All portfolio copy, metrics, project descriptions, and credentials in `data.js` must remain accurate and attributable. Refactors may reorganize presentation but must not remove substantive information unless the user explicitly approves corrections.

### II. Component-First Architecture
UI is built from focused React components under `app/components/portfolio/`. Shared styles live in `lib/styles.js` and CSS variables in `globals.css`. Avoid monolithic page files; new sections get their own component and data exports.

### III. Performance & Accessibility (NON-NEGOTIABLE)
Respect `prefers-reduced-motion`. Lazy-load heavy assets. Use semantic HTML, skip links, and ARIA on interactive controls. Minimize client-side animation cost (no per-character DOM animations on large headlines).

### IV. Professional Visual Identity
Design targets recruiter-friendly Data Engineering branding: restrained motion, cyan/slate technical palette, clear hierarchy, and readable typography. Avoid gimmicky or childish effects.

### V. Maintainability
Prefer CSS design tokens over scattered magic values. Keep `data.js` as the single content source. Case studies and main portfolio share patterns but may remain separate until a deliberate unification.

## Technology Standards

- **Stack**: Next.js 14 App Router, React 18, Tailwind CSS, Framer Motion (purposeful use only).
- **Theming**: Class-based dark mode via `ThemeContext`; theme transitions must not break hydration.
- **Dependencies**: No new packages without clear justification; remove unused dependencies when touched.

## Quality Gates

- `yarn build` must pass before merge.
- Lighthouse-minded: responsive layouts, contrast in both themes, keyboard navigability.
- Interactive elements require visible focus states.

## Governance

This constitution guides portfolio redesign and feature work. Amendments increment the version per semver: MAJOR for principle removals, MINOR for new principles, PATCH for clarifications.

**Version**: 1.0.0 | **Ratified**: 2026-05-18 | **Last Amended**: 2026-05-18
