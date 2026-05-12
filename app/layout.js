import './globals.css'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
})

export const metadata = {
  metadataBase: new URL('https://mahmoud-mamdoh-portfolio.vercel.app'),
  title: {
    default: 'Mahmoud Mamdoh Soliman — Data Engineer & Data Platform Engineer',
    template: '%s · Mahmoud Mamdoh'
  },
  description:
    'Data Engineer in Cairo: architecting and automating pipelines with Airflow, dbt, Spark, Kafka, and Power BI — ETL/ELT, warehousing, lakehouse patterns, and actionable analytics.',
  keywords: [
    'Data Engineer',
    'Data Platform Engineer',
    'Cairo Egypt',
    'Data Pipeline',
    'Apache Airflow',
    'Snowflake',
    'Power BI',
    'Kafka',
    'Spark',
    'dbt',
    'Iceberg',
    'ETL',
    'ELT',
    'Real-time streaming',
    'Hadoop',
    'Hive',
    'Airbyte'
  ],
  authors: [{ name: 'Mahmoud Mamdoh Soliman' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  },
  openGraph: {
    title: 'Mahmoud Mamdoh Soliman — Data Engineer & Data Platform Engineer',
    description:
      'Data Engineer in Cairo: architecting and automating pipelines with Airflow, dbt, Spark, Kafka, and Power BI — ETL/ELT, warehousing, lakehouse patterns, and actionable analytics.',
    siteName: 'Mahmoud Mamdoh Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmoud Mamdoh Soliman — Data Engineer & Data Platform Engineer',
    description:
      'Data Engineer in Cairo: architecting and automating pipelines with Airflow, dbt, Spark, Kafka, and Power BI — ETL/ELT, warehousing, lakehouse patterns, and actionable analytics.'
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-zinc-100 font-sans text-zinc-950 antialiased dark:bg-[#050508] dark:text-zinc-100">{children}</body>
    </html>
  )
}
