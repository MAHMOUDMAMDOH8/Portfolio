'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload,
  FaExternalLinkAlt,
  FaChevronDown,
  FaSun,
  FaMoon,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa'
import { Quicksand } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

const heroStats = [
  { label: 'End-to-end projects shipped', value: '18+' },
  { label: 'Pipeline SLAs achieved', value: '99.8%' },
  { label: 'Analytics teams enabled', value: '6' }
]

const offerings = [
  {
    title: 'Multisystem Integrations',
    body: 'Connecting commerce, ERP, and support sources into a single Iceberg-backed analytics lakehouse.'
  },
  {
    title: 'Curated Silver & Gold layers',
    body: 'Designing reusable medallion tiers, dimensional marts, and CDC-aware models built with Spark and dbt.'
  },
  {
    title: 'Observability & Enablement',
    body: 'Delivering Streamlit monitoring, Airflow orchestration, and documentation so teams can ship faster.'
  }
]

const experience = [
  {
    period: '2024 · Addiction Treatment Center',
    role: 'Business Intelligence Analyst',
    summary:
      'Introduced governed Power BI reporting with reusable data models, accelerating clinical decision-making and reducing manual reporting cycles.'
  },
  {
    period: '2023 · ASDC',
    role: 'Data Analysis Intern',
    summary:
      'Delivered ETL flows and analytics assets for commercial teams, standardising KPIs and improving visibility into operational performance.'
  }
]

  const projects = [
    {
    title: 'Multisystem ETL Lakehouse',
    badge: 'ML',
    category: 'Lakehouse Platform',
    timeline: 'Nov 2025',
    summary:
      'Production-style lakehouse that harmonises Magento, Odoo, and Freshdesk sources into curated Iceberg tiers on MinIO, orchestrated with Airflow and surfaced with Streamlit operations dashboards.',
    stack: ['Spark', 'Iceberg', 'Airflow', 'MinIO'],
    highlights: [
      'Source-specific CDC pipelines with schema evolution handled via Iceberg snapshots.',
      'Bronze, silver, and executive marts modelled for merchandising, fulfilment, and support KPIs.',
      'Embedded Streamlit quality cockpit with freshness, volume, and anomaly SLOs.'
    ],
    metrics: [
      { label: 'Systems unified', value: '3 cores' },
      { label: 'Data latency', value: '<15 min' },
      { label: 'Quality checks', value: '45 automated' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/Multisystem-ETL-Lakehouse_for-Business-Insights',
        external: true
      },
      { label: 'Read case study', href: '/case-studies' }
    ]
  },
  {
    title: 'E-commerce Streaming Platform',
    badge: 'EP',
    category: 'Realtime Analytics',
    timeline: 'Aug 2025',
    summary:
      'Kafka → Spark → dbt streaming fabric that feeds operational and executive dashboards with real-time ecommerce activity, complete with staging quality rules and BI templates.',
    stack: ['Kafka', 'Spark', 'dbt', 'Power BI'],
    highlights: [
      'Managed Kafka ingestion with topic partitioning tuned for seasonal surges.',
      'Delta tables prepared for dbt marts powering add-to-cart, checkout, and fulfilment KPIs.',
      'Power BI semantic layer shipping stakeholder-friendly KPI definitions and visuals.'
    ],
    metrics: [
      { label: 'Events processed', value: '5M+ / day' },
      { label: 'SLA adherence', value: '99.5%' },
      { label: 'Dashboards', value: '7 live' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing',
        external: true
      },
      {
        label: 'See live demo',
        href: 'https://mahmoud-ecommerce-dashboard.streamlit.app',
        external: true
      }
    ]
  },
  {
    title: 'Telecom Events Hub',
    badge: 'TH',
    category: 'Telecom Analytics',
    timeline: 'May 2025',
    summary:
      'SCD Type 2 dimensional warehouse on Snowflake with Airflow scheduling and dbt transformations delivering near real-time quality-of-service KPIs for telecom operations teams.',
    stack: ['Airflow', 'Snowflake', 'dbt', 'Grafana'],
    highlights: [
      'Event hub normalisation with subject area contracts (network, support, billing).',
      'Dimensional models exposing churn, drop-call, and SLA adherence metrics.',
      'Grafana observability with lineage, freshness, and anomaly alerting.'
    ],
    metrics: [
      { label: 'SCD history', value: '18 dims' },
      { label: 'Monitoring', value: 'Grafana + Slack' },
      { label: 'Pipeline SLA', value: '30 min' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/telecom-streaming-pipeline',
        external: true
      }
    ]
  },
  {
    title: 'ELT-Engine',
    badge: 'EE',
    category: 'Data Platform Accelerator',
    timeline: 'Mar 2025',
    summary:
      'Cloud-ready ELT framework combining Airflow orchestration, dbt transformations, and Snowflake storage so teams can stand up analytics-ready datasets quickly.',
    stack: ['Airflow', 'dbt', 'Snowflake'],
    highlights: [
      'Reusable Airflow DAG factory for ingestion, quality, and downstream orchestration.',
      'dbt project scaffolding with semantic layer, exposures, and testing baked in.',
      'GitHub Actions CI/CD enforcing checks, docs, and packaged releases.'
    ],
    metrics: [
      { label: 'Reusable blocks', value: '25+' },
      { label: 'Setup time', value: '<2 hrs' },
      { label: 'Tests automated', value: '60+' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/elt-engine',
        external: true
      }
    ]
  },
  {
    title: 'OLAPify',
    badge: 'OL',
    category: 'Dimensional Warehousing',
    summary:
      'Modern warehouse blueprint using dbt, surrogate keys, and SCD Type 2 logic to transform retail data into analytics-ready star schemas with full lineage.',
    stack: ['dbt', 'PostgreSQL', 'Dimensional Modelling'],
    highlights: [
      'Star-schema design with automated surrogate key generation via MD5 hashing.',
      'SCD Type 2 tracking on core entities for historic price and supplier changes.',
      'Mermaid lineage documentation embedded alongside dbt exposures.'
    ],
    metrics: [
      { label: 'Dimensions', value: '6' },
      { label: 'Fact tables', value: '1' },
      { label: 'Historical tracking', value: 'SCD Type 2' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/OLAPify',
        external: true
      }
    ]
  },
  {
    title: 'DBT-Orchestrator',
    badge: 'DO',
    category: 'Analytics Engineering',
    summary:
      'Layered dbt + Airflow orchestration delivering modular transformations, dimensional warehouse assets, and Power BI reporting for omnichannel retail analytics.',
    stack: ['dbt', 'PostgreSQL', 'Airflow', 'Power BI'],
    highlights: [
      'Modular dbt project structure with staging, intermediate, and marts layers.',
      'Surrogate keys and exposures aligned to multi-source consolidation.',
      'Power BI semantic layer synced with dbt docs for governed analytics.'
    ],
    metrics: [
      { label: 'Dimension tables', value: '6' },
      { label: 'Fact tables', value: '1' },
      { label: 'Automated tests', value: 'Comprehensive' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/DBT-Orchestrator',
        external: true
      }
    ]
  },
  {
    title: 'Northwind OLTP → OLAP',
    badge: 'NW',
    category: 'Data Warehousing',
    summary:
      'End-to-end transformation of Northwind’s OLTP schema into an OLAP-ready dimensional warehouse with automated Python + Airflow ETL and SCD Type 2 history.',
    stack: ['Python', 'PostgreSQL', 'Airflow', 'Dimensional Modelling'],
    highlights: [
      'Containerized ETL pipeline orchestrated with Airflow DAGs.',
      'Dimensional model covering customers, employees, products, and dates.',
      'SCD Type 2 logic preserving change history for analytical accuracy.'
    ],
    metrics: [
      { label: 'Dimensions', value: '4' },
      { label: 'Fact tables', value: '1' },
      { label: 'Automation', value: '100% ETL' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/OLAP_Dimensional_Modeling_for_Advanced_Analytics',
        external: true
      }
    ]
  },
  {
    title: 'E-commerce Medallion Pipeline',
    badge: 'EM',
    category: 'Data Engineering',
    summary:
      'Comprehensive e-commerce data pipeline implementing Bronze/Silver/Gold layers, SCD Type 2 logic, and automated orchestration for deep sales intelligence.',
    stack: ['Python', 'PostgreSQL', 'Airflow', 'Power BI'],
    highlights: [
      'Medallion architecture with automated ingestion through curated marts.',
      'Dimension + fact modelling powering Power BI performance dashboards.',
      'Airflow DAGs enforcing freshness, deduplication, and SCD Type 2 history.'
    ],
    metrics: [
      { label: 'Data layers', value: '3 (B/S/G)' },
      { label: 'Dimensions', value: '4 core' },
      { label: 'Historical tracking', value: 'SCD Type 2' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline',
        external: true
      }
    ]
  },
  {
    title: 'E-commerce DWH (SQL Server)',
    badge: 'ED',
    category: 'Enterprise Data Warehouse',
    summary:
      'Enterprise-focused warehouse built on SQL Server with SSIS pipelines and Power BI dashboards, standardising e-commerce operations reporting.',
    stack: ['SQL Server', 'SSIS', 'Power BI'],
    highlights: [
      'Dimensional star schema optimised for sales and customer insights.',
      'SSIS ETL packages automating extraction, cleansing, and load cycles.',
      'Power BI reporting suite for stakeholder-ready visual storytelling.'
    ],
    metrics: [
      { label: 'ETL tool', value: 'SSIS' },
      { label: 'Modelling', value: 'Star schema' },
      { label: 'Dashboards', value: 'Interactive Power BI' }
    ],
    links: [
      {
        label: 'View GitHub',
        href: 'https://github.com/MAHMOUDMAMDOH8/E-commerce-DWH',
        external: true
      }
    ]
  }
]

const heroHeadline = "I don’t just move data — I move meaning."
const sectionCardClasses = 'relative overflow-hidden px-6 py-16 sm:px-10 lg:px-16'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'origin', label: 'Origin' },
  { id: 'skills', label: 'Skills' },
  { id: 'learning', label: 'Learning' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'impact', label: 'Impact' },
  { id: 'testimonials', label: 'Voices' },
  { id: 'contact', label: 'Contact' }
]
const toolNodes = [
  {
    label: 'Apache Spark',
    category: 'Platform',
    style: { top: 'calc(50% - 140px)', left: 'calc(50% + 130px)' }
  },
  {
    label: 'Apache Iceberg',
    category: 'Platform',
    style: { top: 'calc(50% - 60px)', left: 'calc(50% + 190px)' }
  },
  {
    label: 'MinIO / S3',
    category: 'Platform',
    style: { top: 'calc(50% + 10px)', left: 'calc(50% + 155px)' }
  },
  {
    label: 'Snowflake',
    category: 'Platform',
    style: { top: 'calc(50% + 120px)', left: 'calc(50% + 95px)' }
  },
  {
    label: 'PostgreSQL',
    category: 'Platform',
    style: { top: 'calc(50% + 160px)', left: 'calc(50% - 30px)' }
  },
  {
    label: 'Apache Airflow',
    category: 'Orchestration',
    style: { top: 'calc(50% + 120px)', left: 'calc(50% - 130px)' }
  },
  {
    label: 'dbt',
    category: 'Orchestration',
    style: { top: 'calc(50% + 40px)', left: 'calc(50% - 185px)' }
  },
  {
    label: 'Medallion Design',
    category: 'Orchestration',
    style: { top: 'calc(50% - 20px)', left: 'calc(50% - 210px)' }
  },
  {
    label: 'Dimensional Modelling',
    category: 'Orchestration',
    style: { top: 'calc(50% - 110px)', left: 'calc(50% - 170px)' }
  },
  {
    label: 'Streamlit',
    category: 'Activation',
    style: { top: 'calc(50% + 20px)', left: 'calc(50% + 75px)' }
  },
  {
    label: 'Power BI',
    category: 'Activation',
    style: { top: 'calc(50% - 60px)', left: 'calc(50% + 40px)' }
  },
  {
    label: 'Executive Storytelling',
    category: 'Activation',
    style: { top: 'calc(50% - 150px)', left: 'calc(50% - 10px)' }
  },
  {
    label: 'Docker',
    category: 'Automation',
    style: { top: 'calc(50% - 165px)', left: 'calc(50% - 80px)' }
  },
  {
    label: 'CI/CD Pipelines',
    category: 'Automation',
    style: { top: 'calc(50% - 60px)', left: 'calc(50% - 100px)' }
  },
  {
    label: 'Data Quality Automation',
    category: 'Automation',
    style: { top: 'calc(50% + 40px)', left: 'calc(50% - 60px)' }
  }
]

const categoryStyles = {
  Platform: 'text-sky-300',
  Orchestration: 'text-emerald-300',
  Activation: 'text-amber-200',
  Automation: 'text-purple-300'
}

const toolStats = [
  { label: 'Technologies', value: `${toolNodes.length}+` },
  { label: 'Domains', value: 'Data · Analytics · Ops' },
  { label: 'Focus', value: 'Reliable Delivery' }
]

const marqueeTools = [
  'Medallion Architecture',
  'Apache Spark',
  'Iceberg Lakehouse',
  'Airflow DAGs',
  'dbt Marts',
  'Change Data Capture',
  'Streamlit Observability',
  'Power BI Storytelling',
  'Snowflake Warehousing'
]

const originPanels = [
  {
    title: 'Where Curiosity Met Code',
    subtitle:
      'It began with curiosity, grew through pipelines, and evolved into purpose. Now, every dataset I touch tells a clearer story.',
    code: `SELECT meaning\nFROM data\nWHERE purpose = 'found';`,
    header: 'SQL console'
  },
  {
    title: 'Every Byte Has a Beginning',
    subtitle:
      'From scattered logs to structured insight — it started with one question: “What story does the data tell?” Since then, every stream has had a purpose.',
    code: 'kafka-console-producer --topic inspiration',
    header: 'Kafka shell'
  },
  {
    title: 'How It All Started',
    subtitle:
      'Late nights, blinking cursors, lines of code connecting like constellations. That first Spark job wasn’t just computation — it was creation.',
    code: 'spark.read.json("beginning.json").show()',
    header: 'Spark shell'
  },
  {
    title: 'Not Just Data — Energy.',
    subtitle:
      'It began with curiosity. Now it’s pipelines, models, and a spark that never sleeps.',
    code: 'while True:\n    process("data", with_purpose=True)',
    header: 'Python REPL'
  },
  {
    title: 'Where It All Began',
    subtitle:
      'Endless nights. Flowing data. A simple curiosity turned into a passion for building order from chaos. That first pipeline wasn’t just ETL — it was evolution in motion.',
    code: 'print("Data flows, insight grows.")',
    header: 'Console'
  }
]

const skillMatrix = [
  {
    label: 'Platforms & Storage',
    level: 92,
    tags: ['Apache Spark', 'Apache Iceberg', 'Snowflake', 'S3 / MinIO']
  },
  {
    label: 'Orchestration & Modelling',
    level: 90,
    tags: ['Apache Airflow', 'dbt', 'Change Data Capture', 'Dimensional Design']
  },
  {
    label: 'Observability & Activation',
    level: 85,
    tags: ['Streamlit', 'Power BI', 'Data Quality SLAs', 'Documentation']
  },
  {
    label: 'Engineering Foundations',
    level: 88,
    tags: ['Python', 'SQL', 'Docker', 'CI/CD Automation']
  }
]

const impactStats = [
  {
    title: 'Pipelines governed',
    value: '25+',
    description: 'Production workloads with monitored freshness and quality gates.'
  },
  {
    title: 'Stakeholder dashboards',
    value: '18',
    description: 'Executive-ready insights shipped across commerce, telecom, and operations.'
  },
  {
    title: 'SLA adherence',
    value: '99.5%',
    description: 'Streaming and batch flows built with durability and fast recovery in mind.'
  }
]

const testimonials = [
  {
    quote:
      'Mahmoud didn’t just build pipelines—he built trust. Our leadership reads dashboards with confidence now.',
    author: 'Head of Analytics · Ecommerce Scale-Up'
  },
  {
    quote:
      'He turned messy SaaS exports into a governed lakehouse and left us with the playbook to keep iterating.',
    author: 'Director of Data · Retail Ops'
  },
  {
    quote:
      'Every deliverable came with documentation, lineage, and a purpose. It made onboarding the business effortless.',
    author: 'BI Lead · Telecom Provider'
  }
]

const learningFocus = [
  {
    label: 'Exploring now',
    items: ['Streaming change tracking with Iceberg', 'Open metadata & data contracts', 'Data observability design systems']
  },
  {
    label: 'Sharing back',
    items: ['Authoring case studies & blog drafts', 'Mentoring peers on CDC & lakehouse patterns', 'Building community playbooks']
  }
]

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative flex flex-col gap-4 rounded-3xl border border-zinc-100 bg-white px-6 py-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-white/[0.06] dark:shadow-none dark:hover:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900/10 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:bg-white/10 dark:text-zinc-100">
            {project.badge}
      </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-rose-600 dark:text-rose-200">
              {project.category}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.title}</h3>
      </div>
    </div>
        {project.timeline ? (
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600 dark:bg-white/5 dark:text-zinc-300">
            {project.timeline}
          </span>
        ) : null}
      </div>
      
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-zinc-900/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-zinc-700 dark:bg-white/5 dark:text-zinc-200"
          >
            {item}
          </span>
        ))}
        </div>

                  <button
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-2 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 transition hover:text-rose-500 dark:text-rose-300 dark:hover:text-rose-200"
      >
        {expanded ? 'Hide details' : 'Project details'}
        <FaChevronDown className={`text-xs transition-transform ${expanded ? 'rotate-180' : ''}`} />
                  </button>

      {expanded ? (
        <div className="rounded-2xl bg-white p-5 text-left shadow-sm md:flex md:items-start md:gap-6 dark:bg-white/5 dark:shadow-none">
          <div className="flex-1 space-y-6">
            {project.highlights?.length ? (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Highlights
                </h4>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-rose-500 dark:bg-rose-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            </div>

          <div className="mt-6 flex w-full flex-col gap-6 md:mt-0 md:w-64">
            {project.metrics?.length ? (
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Impact
                </h4>
                <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl bg-zinc-900/5 px-3 py-4 text-center dark:bg-black/30"
                    >
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-zinc-600 dark:text-zinc-500">
                        {metric.label}
                      </p>
            </div>
                  ))}
          </div>
        </div>
            ) : null}

            {project.links?.length ? (
              <div className="flex flex-wrap gap-3 md:flex-col md:items-start">
                {project.links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-800 transition hover:border-zinc-300 dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
                  >
                    {link.label}
                    <FaExternalLinkAlt className="text-[10px]" />
                </Link>
                ))}
              </div>
            ) : null}
                </div>
                </div>
      ) : null}
              </div>
  )
}

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

const Section = ({ id, children }) => (
  <section id={id} className="scroll-mt-24">
    {children}
  </section>
)

export default function Home() {
  const [theme, setTheme] = useState('dark')
  const [activeOrigin, setActiveOrigin] = useState(0)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOrigin((prev) => (prev + 1) % originPanels.length)
    }, 20000)

    return () => clearInterval(timer)
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const goNextOrigin = () => {
    setActiveOrigin((prev) => (prev + 1) % originPanels.length)
  }

  const goPrevOrigin = () => {
    setActiveOrigin((prev) => (prev - 1 + originPanels.length) % originPanels.length)
  }

  return (
    <div
      className={`${quicksand.className} relative min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-500 dark:bg-[#07090f] dark:text-zinc-100`}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,120,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,120,200,0.1),transparent_60%)]" />
        <div className="absolute inset-0 mix-blend-screen">
          {[...Array(40)].map((_, idx) => (
            <span
              key={idx}
              className="absolute h-[2px] w-[2px] rounded-full bg-white/25 blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `floatDot ${6 + Math.random() * 6}s ease-in-out ${
                  Math.random() * 4
                }s infinite`
            }}
          />
        ))}
              </div>
            </div>

      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#07090f]/90">
        <div className="mx-auto flex h-16 w-full items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link href="#home" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Mahmoud Mamdoh
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400 md:flex">
            {navLinks.map(({ id, label }) => (
              <Link key={id} href={`#${id}`} className="transition-colors hover:text-zinc-100">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/5"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            <Link
                        href="mailto:mahmoud.mamdoh0812@gmail.com"
              className="hidden items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:flex"
            >
              <FaEnvelope className="text-rose-500 dark:text-rose-300" />
              mahmoud.mamdoh0812@gmail.com
            </Link>
            <span className="hidden h-4 w-px bg-zinc-200 dark:bg-white/10 md:block" />
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
              Cairo · Remote
            </span>
                      </div>
                  </div>
      </header>

      <main className="mx-auto w-full space-y-32 px-6 sm:px-10 lg:px-16 py-20">
        <Section id="home">
          <div className={`${sectionCardClasses} flex flex-col items-center gap-10 text-center`}>
            <div className="pointer-events-none absolute -top-32 -left-28 h-72 w-72 rounded-full bg-rose-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-24 h-80 w-80 rounded-full bg-sky-500/25 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-rose-600 dark:border-rose-300/30 dark:bg-rose-300/10 dark:text-rose-200">
                Data Engineer & Analytics Partner
                </span>
              <h1 className="flex flex-wrap justify-center text-4xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
                {heroHeadline.split('').map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
                <span className="ml-2 inline-block h-12 w-[3px] animate-hero-cursor bg-rose-500 dark:bg-rose-300/80 align-middle" />
              </h1>
              <p className="max-w-3xl text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
                From ingestion to dashboards, I help teams stand up medallion architectures, automate data quality, and deliver analytics experiences stakeholders trust. Every project pairs robust engineering with the storytelling leaders need to move faster.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="https://drive.google.com/drive/folders/1r_W7J5KxBZpHfO5mf29G9qRon9PtXeZA"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-rose-400"
                >
                  <FaDownload />
                  Download résumé
                </Link>
                <Link
                  href="mailto:mahmoud.mamdoh0812@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-300 dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
                >
                  <FaEnvelope />
                  Start a project
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
                        target="_blank" 
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-300 dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
                >
                  <FaLinkedin />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/MAHMOUDMAMDOH8"
                        target="_blank" 
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-300 dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
                >
                  <FaGithub />
                  GitHub
                </Link>
          </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-md ring-1 ring-zinc-100 transition dark:bg-white/[0.05] dark:shadow-none dark:ring-0"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-sky-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-rose-500/20 dark:to-sky-500/25" />
                    <p className="relative text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{stat.value}</p>
                    <p className="relative mt-1 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-500">
                      {stat.label}
              </p>
            </div>
                ))}
                  </div>

              <div className="relative mt-8 w-full overflow-hidden rounded-full border border-zinc-200 bg-white py-3 shadow-sm dark:border-white/10 dark:bg-white/[0.05]">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 via-zinc-50/60 to-transparent dark:from-[#07090f] dark:via-[#07090f]/80" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 via-zinc-50/60 to-transparent dark:from-[#07090f] dark:via-[#07090f]/80" />
                <div className="marquee gap-8 px-8 text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-400">
                  {[...Array(2)].flatMap(() => marqueeTools).map((item, index) => (
                    <span key={`${item}-${index}`} className="marquee-item flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      {item}
                          </span>
                    ))}
                  </div>
            </div>

              <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: [6, 0, 6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500 dark:border-white/10 dark:text-zinc-400"
            >
              Scroll for proof
              <FaChevronDown className="text-[10px]" />
                    </motion.div>
                </div>
            </div>
        </Section>

        <Section id="origin">
          <div className={`${sectionCardClasses} relative overflow-hidden bg-white/95 text-center shadow-lg ring-1 ring-zinc-100 transition dark:bg-white/[0.06] dark:shadow-none dark:ring-0`}>
            <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 right-1/4 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={originPanels[activeOrigin].title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative z-10 space-y-6"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 dark:text-zinc-500">
                  {originPanels[activeOrigin].title}
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-50">
                  {originPanels[activeOrigin].subtitle.split('\n')[0]}
                </h2>
                <p className="text-base text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                  {originPanels[activeOrigin].subtitle.includes('\n')
                    ? originPanels[activeOrigin].subtitle.split('\n').slice(1).join(' ')
                    : ''}
                </p>
                <div className="mx-auto max-w-2xl rounded-2xl bg-zinc-900 text-left shadow-xl shadow-rose-500/10 ring-1 ring-rose-500/40">
                  <div className="flex items-center gap-2 border-b border-zinc-800 px-5 py-3 text-xs uppercase tracking-[0.3em] text-rose-200">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{originPanels[activeOrigin].header}</span>
                  </div>
                  <pre className="overflow-x-auto px-5 py-6 text-sm text-rose-100">
{originPanels[activeOrigin].code}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="relative z-10 flex items-center justify-center gap-3 pt-4">
              <button
                onClick={goPrevOrigin}
                aria-label="Previous origin story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/10"
              >
                <FaArrowLeft />
              </button>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500">
                {String(activeOrigin + 1).padStart(2, '0')} / {String(originPanels.length).padStart(2, '0')}
              </div>
              <button
                onClick={goNextOrigin}
                aria-label="Next origin story"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-500 dark:border-white/10 dark:bg-white/[0.05] dark:text-zinc-200 dark:hover:bg-white/10"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </Section>

        <Section id="skills">
          <div className={`${sectionCardClasses} relative overflow-hidden bg-white/95 shadow-lg ring-1 ring-zinc-100 transition dark:bg-white/[0.06] dark:shadow-none dark:ring-0`}>
            <div className="pointer-events-none absolute -top-28 left-10 h-60 w-60 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 right-14 h-56 w-56 rounded-full bg-rose-400/15 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-rose-600 dark:text-rose-300">Signature toolkit</h2>
                <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Depth across the stack, tuned for reliability and storytelling.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {skillMatrix.map((skill) => (
                  <div
                    key={skill.label}
                    className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:border-rose-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.05] dark:hover:border-rose-300/40"
                  >
                    <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-rose-500 to-sky-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="learning">
          <div className={`${sectionCardClasses} relative overflow-hidden bg-white/95 shadow-lg ring-1 ring-zinc-100 transition dark:bg-white/[0.06] dark:shadow-none dark:ring-0`}>
            <div className="pointer-events-none absolute -top-24 right-12 h-60 w-60 rounded-full bg-purple-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">Always shipping, always learning</h2>
                <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Curiosity doesn’t pause once the pipelines ship.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {learningFocus.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:border-sky-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.05]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-500 dark:text-sky-300">{row.label}</p>
                    <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                      {row.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="about">
          <div className={sectionCardClasses}>
            <div className="pointer-events-none absolute -top-24 right-10 h-52 w-52 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-rose-400/15 blur-3xl" />
            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">About</h2>
                <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-3xl">
                  Equal parts engineer and translator. I bridge technical stacks and business outcomes so leadership always has the story behind the numbers.
                </p>
                  </div>
              <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
                  With a Computer Science background and deep hands-on exposure to modern data tooling, I specialise in stitching together the messy middle of the data lifecycle: ingestion, modelling, documentation, and activation. I’ve supported ecommerce, telecom, and support teams by delivering trustworthy datasets, living documentation, and dashboards that actually get used.
                </p>
                <div className="space-y-4 rounded-2xl bg-white shadow-sm dark:bg-white/[0.05] dark:shadow-none p-6">
                  <h3 className="text-sm uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">Latest experience</h3>
                  <ul className="space-y-5 text-sm text-zinc-700 dark:text-zinc-300">
                    {experience.map((item) => (
                      <li key={item.period}>
                        <p className="text-zinc-500 dark:text-zinc-500">{item.period}</p>
                        <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</p>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.summary}</p>
                      </li>
                    ))}
                  </ul>
                      </div>
                    </div>
                  </div>
            </div>
        </Section>

        <Section id="services">
          <div className={sectionCardClasses}>
            <div className="pointer-events-none absolute -top-28 left-12 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">What I deliver</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {offerings.map((item, index) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl bg-white/95 p-6 shadow-lg ring-1 ring-zinc-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-white/[0.06] dark:p-6 dark:ring-0 dark:hover:bg-white/[0.08]"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-sky-400/15 dark:from-rose-500/25 dark:to-sky-400/25" />
                      <div className="absolute -top-20 right-0 h-32 w-32 rounded-full bg-white/40 blur-3xl dark:bg-white/20" />
                    </div
                  >
                    <span className="relative block w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600 dark:border-white/10 dark:bg-white/10 dark:text-zinc-200">
                      0{index + 1}
                    </span>
                    <h3 className="relative mt-5 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {item.title}
                    </h3>
                    <p className="relative mt-3 text-sm text-zinc-600 dark:text-zinc-400">{item.body}</p>
                    </div>
                    ))}
                        </div>
                        </div>
                      </div>
        </Section>

        <Section id="projects">
          <div className={sectionCardClasses}>
            <div className="pointer-events-none absolute -top-24 left-10 h-52 w-52 rounded-full bg-rose-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-6 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <div className="space-y-3">
                <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">
                  Projects in focus
                </h2>
                <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-3xl">
                  Production builds that balance engineering depth with business clarity.
              </p>
            </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
              ))}
                      </div>
                    </div>
                      </div>
        </Section>

        <Section id="testimonials">
          <div className={`${sectionCardClasses} relative overflow-hidden bg-white/95 shadow-lg ring-1 ring-zinc-100 transition dark:bg-white/[0.06] dark:shadow-none dark:ring-0`}>
            <div className="pointer-events-none absolute -top-24 left-12 h-60 w-60 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 right-16 h-64 w-64 rounded-full bg-rose-400/15 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">Voices from the work</h2>
                <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Partners and teams on what changed when data spoke clearly.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((t, index) => (
                  <div
                    key={`${t.author}-${index}`}
                    className="flex h-full flex-col justify-between rounded-3xl border border-zinc-100 bg-white p-6 text-left shadow-sm transition hover:border-rose-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.05]"
                  >
                    <p className="text-base italic text-zinc-700 dark:text-zinc-300">“{t.quote}”</p>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
                      {t.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="tools">
          <div className={sectionCardClasses}>
            <div className="pointer-events-none absolute -top-28 right-1/4 h-60 w-60 rounded-full bg-purple-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="relative z-10 space-y-12">
              <div className="space-y-3 text-center">
                <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">Tools in motion</h2>
                <p className="mx-auto.max-w-2xl text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  The ecosystem I lean on to turn raw events into trusted stories.
                </p>
            </div>

              <div className="relative mx-auto flex min-h-[520px] w-full max-w-[700px] items-center justify-center">
                <div className="absolute h-[460px] w-[460px] rounded-full border border-zinc-200 dark:border-white/10" />
                <div className="absolute h-[340px] w-[340px] rounded-full border border-zinc-200 dark:border-white/10" />
                <div className="absolute h-[220px] w-[220px] rounded-full border border-zinc-200 dark:border-white/10" />

                {toolNodes.map((tool, index) => {
                  const floatDuration = 8 + (index % 4)
                  const floatDelay = (index % 5) * 0.6
                  return (
                    <motion.span
                      key={tool.label}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-700 transition-colors hover:bg-black/20 dark:bg-black/40 dark:text-zinc-100 ${categoryStyles[tool.category]}`}
                      style={{ top: tool.style.top, left: tool.style.left }}
                      animate={{ y: [0, -12, 0] }}
            transition={{ 
                        duration: floatDuration,
                        ease: 'easeInOut',
              repeat: Infinity,
                        delay: floatDelay
                      }}
                      whileHover={{ scale: 1.12 }}
                    >
                      {tool.label}
                    </motion.span>
                  )
                })}

                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-zinc-200 bg-white text-center text-xs uppercase tracking-[0.25em] text-zinc-600 dark:border-white/15 dark:bg-white/[0.06] dark:text-zinc-300">
                  Trusted Platform
        </div>
            </div>

              <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-current text-sky-300" />
                  <span>Platform</span>
                    </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-current text-emerald-300" />
                  <span>Orchestration</span>
                    </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-current text-amber-200" />
                  <span>Activation</span>
                  </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-current text-purple-300" />
                  <span>Automation</span>
                    </div>
                  </div>
                  
              <div className="grid gap-6 text-center text-sm text-zinc-600 dark:text-zinc-400 sm:grid-cols-3">
                {toolStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm dark:bg-white/[0.05] dark:shadow-none">
                    <div className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{stat.value}</div>
                    <div className="mt-2 uppercase tracking-[0.25em] text-xs text-zinc-500 dark:text-zinc-500">{stat.label}</div>
                    </div>
                ))}
                    </div>
                  </div>
                    </div>
        </Section>

        <Section id="impact">
          <div className={`${sectionCardClasses} relative overflow-hidden bg-white/95 text-center shadow-lg ring-1 ring-zinc-100 transition dark:bg-white/[0.06] dark:shadow-none dark:ring-0`}>
            <div className="pointer-events-none absolute -top-32 left-1/3 h-72 w-72 rounded-full bg-rose-400/15 blur-3xl" />
            <div className="pointer-events-none.absolute -bottom-36 right-1/3 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">Impact snapshot</h2>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Data work rooted in outcomes: trusted platforms, confident stakeholders, measurable change.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {impactStats.map((impact) => (
                  <div
                    key={impact.title}
                    className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.05]"
                  >
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 dark:text-emerald-300">{impact.title}</p>
                    <p className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-50">{impact.value}</p>
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{impact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="contact">
          <div className={`${sectionCardClasses} text-center`}>
            <div className="pointer-events-none absolute -top-24 right-16 h-60 w-60 rounded-full bg-rose-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 md:text-4xl">
                Let’s design your next data narrative.
              </h2>
              <p className="mx-auto max-w-2xl text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
                Whether you’re validating a new domain, migrating to Iceberg, or tightening analytics governance, I join teams to ship platforms that stakeholders actually adopt.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="mailto:mahmoud.mamdoh0812@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
                >
                  <FaEnvelope />
                  Book a call
                </Link>
                <Link
                  href="https://cal.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-rose-300 hover:text-rose-500 dark:border-white/10 dark:text-zinc-100 dark:hover:border-rose-300/60"
                >
                  <FaExternalLinkAlt />
                  Schedule instantly
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-500 dark:border-white/10 dark:text-zinc-100 dark:hover:border-emerald-300/60"
                >
                  <FaExternalLinkAlt />
                  View case studies
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-300 dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
                >
                  <FaLinkedin />
                  Connect on LinkedIn
                </Link>
                <Link
                  href="https://github.com/MAHMOUDMAMDOH8"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-800 transition hover:border-zinc-300 dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
                >
                  <FaGithub />
                  Explore GitHub
                </Link>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-500">
                Average response time · under 24 hours
              </p>
              </div>
            </div>
        </Section>
      </main>

      <footer className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Mahmoud Mamdoh. Crafted with purpose.</p>
          <div className="flex items-center gap-4 uppercase tracking-[0.2em]">
            {navLinks.map(({ id, label }) => (
              <Link key={`footer-${id}`} href={`#${id}`} className="hover:text-zinc-300">
                {label}
              </Link>
            ))}
            <Link href="/case-studies" className="hover:text-zinc-300">
              Case Studies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
} 

