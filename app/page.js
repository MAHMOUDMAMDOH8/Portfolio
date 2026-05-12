import PortfolioPage from './components/portfolio/PortfolioPage'

const siteUrl = 'https://mahmoud-mamdoh-portfolio.vercel.app'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahmoud Mamdoh Soliman',
  jobTitle: 'Data Engineer',
  url: siteUrl,
  email: 'mailto:mahmoud.mamdoh0812@gmail.com',
  telephone: '+20-112-007-021',
  sameAs: [
    'https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/',
    'https://github.com/MAHMOUDMAMDOH8'
  ],
  knowsAbout: [
    'Data Engineering',
    'Apache Kafka',
    'Apache Spark',
    'Apache Airflow',
    'Snowflake',
    'dbt',
    'Apache Iceberg',
    'ETL',
    'ELT',
    'Data pipelines',
    'Real-time streaming',
    'Dimensional modelling',
    'Apache Hadoop',
    'Apache Hive',
    'Airbyte'
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Menofia University',
    department: 'Faculty of Science — Computer Science and Mathematics'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG'
  }
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PortfolioPage />
    </>
  )
}
