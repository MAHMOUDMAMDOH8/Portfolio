import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mahmoud Mamdoh Soliman - Data Engineer',
  description: 'Data Engineer specializing in transforming data into actionable insights. Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks.',
  keywords: 'Data Engineer, Cairo Egypt, Data Pipeline, Apache Airflow, Snowflake, Power BI, Kafka, Spark',
  authors: [{ name: 'Mahmoud Mamdoh Soliman' }],
  openGraph: {
    title: 'Mahmoud Mamdoh Soliman - Data Engineer',
    description: 'Data Engineer specializing in transforming data into actionable insights',
    url: 'https://mahmoud-mamdoh-portfolio.vercel.app',
    siteName: 'Mahmoud Mamdoh Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmoud Mamdoh Soliman - Data Engineer',
    description: 'Data Engineer specializing in transforming data into actionable insights',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 