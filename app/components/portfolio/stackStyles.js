/** Visual grouping for tech stack chips — deterministic from label text. */
export function stackChipClass(name) {
  const n = String(name).toLowerCase()
  if (n.includes('kafka')) return 'border-amber-500/40 bg-amber-500/15 text-amber-950 dark:border-amber-500/35 dark:bg-amber-500/10 dark:text-amber-100'
  if (n.includes('spark')) return 'border-orange-500/40 bg-orange-500/15 text-orange-950 dark:border-orange-500/35 dark:bg-orange-500/10 dark:text-orange-100'
  if (n.includes('airflow')) return 'border-sky-500/40 bg-sky-500/15 text-sky-950 dark:border-sky-500/35 dark:bg-sky-500/10 dark:text-sky-100'
  if (n.includes('snowflake')) return 'border-cyan-500/40 bg-cyan-500/15 text-cyan-950 dark:border-cyan-400/35 dark:bg-cyan-500/10 dark:text-cyan-100'
  if (n.includes('docker')) return 'border-blue-500/40 bg-blue-500/15 text-blue-950 dark:border-blue-500/35 dark:bg-blue-500/10 dark:text-blue-100'
  if (n.includes('dbt')) return 'border-emerald-500/40 bg-emerald-500/15 text-emerald-950 dark:border-emerald-500/35 dark:bg-emerald-500/10 dark:text-emerald-100'
  if (n.includes('iceberg')) return 'border-teal-500/40 bg-teal-500/15 text-teal-950 dark:border-teal-500/35 dark:bg-teal-500/10 dark:text-teal-100'
  if (n.includes('postgres')) return 'border-indigo-500/40 bg-indigo-500/15 text-indigo-950 dark:border-indigo-500/35 dark:bg-indigo-500/10 dark:text-indigo-100'
  if (n.includes('power bi') || n === 'power bi')
    return 'border-yellow-600/40 bg-yellow-500/15 text-yellow-950 dark:border-yellow-500/35 dark:bg-yellow-500/10 dark:text-yellow-100'
  if (n.includes('python')) return 'border-lime-500/40 bg-lime-500/15 text-lime-950 dark:border-lime-500/35 dark:bg-lime-500/10 dark:text-lime-100'
  if (n.includes('nifi')) return 'border-fuchsia-500/40 bg-fuchsia-500/15 text-fuchsia-950 dark:border-fuchsia-500/35 dark:bg-fuchsia-500/10 dark:text-fuchsia-100'
  if (n.includes('clickhouse')) return 'border-rose-500/40 bg-rose-500/15 text-rose-950 dark:border-rose-500/35 dark:bg-rose-500/10 dark:text-rose-100'
  if (n.includes('minio') || n.includes('s3')) return 'border-red-500/40 bg-red-500/15 text-red-950 dark:border-red-400/35 dark:bg-red-500/10 dark:text-red-100'
  if (n.includes('grafana')) return 'border-violet-500/40 bg-violet-500/15 text-violet-950 dark:border-violet-500/35 dark:bg-violet-500/10 dark:text-violet-100'
  if (n.includes('sql server') || n.includes('ssis'))
    return 'border-slate-500/40 bg-slate-200/80 text-slate-900 dark:border-slate-400/35 dark:bg-slate-500/15 dark:text-slate-100'
  if (n.includes('streamlit')) return 'border-green-500/40 bg-green-500/15 text-green-950 dark:border-green-500/35 dark:bg-green-500/10 dark:text-green-100'
  if (n.includes('airbyte')) return 'border-sky-500/40 bg-sky-500/15 text-sky-950 dark:border-sky-500/35 dark:bg-sky-500/10 dark:text-sky-100'
  if (n.includes('hadoop')) return 'border-amber-700/50 bg-amber-200/60 text-amber-950 dark:border-amber-700/40 dark:bg-amber-900/25 dark:text-amber-100'
  if (n.includes('hive')) return 'border-amber-600/50 bg-amber-200/50 text-amber-950 dark:border-amber-600/35 dark:bg-amber-800/20 dark:text-amber-100'
  if (n === 'bash' || n.includes('bash'))
    return 'border-zinc-400 bg-zinc-200/80 text-zinc-900 dark:border-zinc-500/35 dark:bg-zinc-700/25 dark:text-zinc-200'
  if (n.includes('mage')) return 'border-pink-500/40 bg-pink-500/15 text-pink-950 dark:border-pink-500/35 dark:bg-pink-500/10 dark:text-pink-100'
  return 'border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200'
}
