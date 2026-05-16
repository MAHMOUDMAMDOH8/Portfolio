'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CaseStudiesListHero } from './components/CaseStudiesListHero'
import { CaseStudiesNav } from './components/CaseStudiesNav'
import { CaseStudiesPageShell } from './components/CaseStudiesPageShell'
import {
  csBody,
  csBodyMuted,
  csCard,
  csCardInner,
  csChip,
  csCodeBlock,
  csFloatingNav,
  csHeading
} from './components/caseStudyStyles'
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaArrowLeft,
  FaArrowRight,
  FaDatabase,
  FaChartLine,
  FaRocket,
  FaTools,
  FaServer,
  FaCloud,
  FaCode,
  FaCheckCircle,
  FaLightbulb,
  FaTrophy,
  FaUsers,
  FaClock,
  FaLayerGroup,
  FaNetworkWired,
  FaShieldAlt,
  FaChartBar,
  FaCogs,
  FaEye,
  FaDownload,
  FaPlay,
  FaHome
} from 'react-icons/fa'

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Navigation functions
  const goToNextCase = () => {
    if (!selectedCase) return
    const currentIndex = caseStudies.findIndex(cs => cs.id === selectedCase)
    const nextIndex = (currentIndex + 1) % caseStudies.length
    setSelectedCase(caseStudies[nextIndex].id)
  }

  const goToPreviousCase = () => {
    if (!selectedCase) return
    const currentIndex = caseStudies.findIndex(cs => cs.id === selectedCase)
    const prevIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1
    setSelectedCase(caseStudies[prevIndex].id)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (selectedCase) {
        if (event.key === 'ArrowRight') {
          goToNextCase()
        } else if (event.key === 'ArrowLeft') {
          goToPreviousCase()
        } else if (event.key === 'Escape') {
          setSelectedCase(null)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedCase])

  const caseStudies = [
    {
      id: 'telecom-data-analytics-hub',
      title: 'Telecom Data Analytics Hub',
      subtitle: 'Kafka → NiFi → PostgreSQL → dbt powering telco-ready facts and dimensions',
      category: 'Telecom Analytics',
      difficulty: 'Advanced',
      status: 'Completed',
      featured: true,
      problem: {
        title: 'The Challenge',
        description:
          'Telecom operators need trustworthy, analytics-ready data across calls, SMS, payments, recharges, and support, but often operate with fragmented Kafka topics, inconsistent JSON payloads, and limited data quality guarantees.',
        challenges: [
          'Ingesting and validating 5 heterogeneous Kafka topics with independent control over each pipeline',
          'Transforming raw JSON into a consistent medallion model while preserving auditability and error traceability',
          'Designing a dimensional schema that supports QoS analysis, customer behavior, and financial KPIs',
          'Implementing robust dbt testing across facts and dimensions to prevent bad data from reaching BI',
          'Keeping the platform easy to run locally with Docker while still reflecting real telco complexity'
        ]
      },
      solution: {
        title: 'The Solution',
        description:
          'Built an end-to-end telecom analytics hub where NiFi manages topic-level ingestion into PostgreSQL, dbt implements a Bronze/Gold medallion pattern with facts and dimensions, and extensive tests enforce data quality before analytics.',
        architecture: {
          overview: 'NiFi + Kafka ingestion into PostgreSQL with dbt Bronze/Gold star schema and CDC snapshots',
          components: [
            {
              name: 'NiFi Ingestion & Validation',
              tech: ['Apache NiFi', 'Kafka'],
              description:
                '5 Kafka topics ingested via dedicated NiFi flows that validate JSON, normalize fields, and route valid vs. error records into PostgreSQL.'
            },
            {
              name: 'Raw & Bronze Storage',
              tech: ['PostgreSQL'],
              description:
                'Per-domain `row_event` tables store raw-but-structured events for Calls, SMS, Payment, Recharge, and Support, feeding Bronze dbt models.'
            },
            {
              name: 'dbt Medallion Modeling',
              tech: ['dbt', 'SQL'],
              description:
                'Bronze models clean and standardize events; Gold models implement star-schema facts and dimensions with surrogate keys and SCD Type 2 snapshots.'
            },
            {
              name: 'Testing & Documentation',
              tech: ['dbt tests', 'dbt docs'],
              description:
                'Column-level docs plus `not_null`, `unique`, and `relationships` tests across all facts and dimensions with failure storage for investigation.'
            },
            {
              name: 'Containerized Runtime',
              tech: ['Docker', 'Docker Compose'],
              description:
                'Docker Compose spins up NiFi, Kafka, PostgreSQL, and tooling so the full telco scenario can be reproduced locally.'
            }
          ]
        },
        keyFeatures: [
          '5-topic NiFi ingestion fabric with centralized error handling and replay-friendly design',
          'Bronze and Gold schemas covering calls, SMS, payments, recharges, and support interactions',
          'Star schema with five fact tables and six conformed dimensions tuned for telecom analytics',
          'dbt snapshots implementing SCD Type 2 history for core entities like users, devices, and agents',
          'Comprehensive dbt testing strategy with failure storage for rapid data quality triage'
        ]
      },
      results: {
        title: 'The Results',
        description:
          'The hub demonstrates how a telco can move from noisy Kafka events to governed, analytics-ready marts with strong guarantees on keys, relationships, and historical tracking.',
        metrics: [
          {
            metric: '5',
            label: 'Kafka Topics',
            description: 'Independently managed NiFi flows per topic with validation and routing.'
          },
          {
            metric: '5',
            label: 'Fact Tables',
            description: 'Gold facts for Calls, SMS, Payment, Recharge, and Support.'
          },
          {
            metric: '6',
            label: 'Dimensions',
            description: 'Conformed dimensions for Date, Time, Users, Devices, Cell Sites, and Agents.'
          },
          {
            metric: '100%',
            label: 'Test Coverage',
            description: 'Primary and foreign keys protected by dbt tests with stored failures.'
          }
        ],
        businessImpact: [
          'Shows telecom stakeholders exactly how QoS, churn risk, and revenue can be modeled off clean dimensional data',
          'Provides a template for implementing SCD Type 2 and CDC in real operator environments',
          'Reduces risk of bad data reaching dashboards through rigorous testing and error-routing patterns',
          'Enables rapid iteration on new KPIs by building on a well-documented medallion and star schema',
          'Improves engineering handoff by codifying logic and lineage in dbt and SQL instead of ad-hoc scripts'
        ]
      },
      technicalDetails: {
        technologies: [
          'Apache NiFi',
          'Apache Kafka',
          'PostgreSQL',
          'dbt',
          'Docker',
          'SQL',
          'Medallion Architecture',
          'Star Schema',
          'SCD Type 2'
        ],
        codeSnippets: [
          {
            title: 'Bronze Call Model with Incremental Merge Logic',
            language: 'sql',
            code: `-- Complex JSON extraction and transformation
from_json::jsonb ->> 'imei' as from_imei,
substr(from_json::jsonb ->> 'imei',1,8) as from_tac,
billing_info::jsonb ->> 'amount' as amount,
qos_metrics::jsonb ->> 'codec' as codec

-- Incremental logic with merge strategy
{% if is_incremental() %}
select * from Call_with_sk
where Call_sk not in (select distinct Call_sk from {{ this }})
{% else %}
select * from Call_with_sk
{% endif %}`
          },
          {
            title: 'Fact Call Joins to Dimensions',
            language: 'sql',
            code: `LEFT join {{ ref('DIM_cell_site')}} as from_cell
  on from_cell_site = from_cell.cell_id
LEFT join {{ ref('DIM_cell_site')}} as to_cell
  on to_cell_site = to_cell.cell_id
LEFT join {{ ref('DIM_Users')}} as from_user
  on from_phone_number = from_user.phone_number`
          }
        ],
        diagrams: [
          {
            title: 'Pipeline Architecture Flow',
            description: 'End-to-end flow from NiFi and Kafka into PostgreSQL and dbt Bronze/Gold layers.',
            imageUrl: 'https://raw.githubusercontent.com/MAHMOUDMAMDOH8/Telecom-Data-Analytics-Hub/main/image/pipeline%20arch.png'
          },
          {
            title: 'dbt Lineage Graph',
            description: 'Lineage from raw row_event sources through Bronze models into Gold facts and dimensions.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/Telecom-Data-Analytics-Hub/raw/main/image/dbt%20lineage.png'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/Telecom-Data-Analytics-Hub',
      demo: '',
      lessons: [
        'Designing topic-per-flow ingestion in NiFi makes operations and observability far easier at telco scale',
        'Treating Bronze as a disciplined, structured layer simplifies downstream dimensional modeling',
        'dbt tests and snapshots are essential to keep telecom facts and dimensions trustworthy over time',
        'Aligning schema design with actual operator KPIs (QoS, churn, ARPU) keeps the warehouse relevant'
      ]
    },
    {
      id: 'telecom-data-platform-lakehouse',
      title: 'Event-Driven Telecom Data Lakehouse Platform',
      subtitle: 'Spark + Iceberg medallion lakehouse with ClickHouse galaxy schema for telecom analytics',
      category: 'Data Lakehouse',
      difficulty: 'Advanced',
      status: 'Completed',
      featured: true,
      problem: {
        title: 'The Challenge',
        description:
          'Telcos increasingly need both scalable data lakehouse storage and fast OLAP-style query performance, but struggle to bridge raw Kafka events, object storage, and a dimensional model that supports complex telecom use cases.',
        challenges: [
          'Landing high-volume Kafka events into cost-effective object storage without sacrificing schema evolution',
          'Implementing a clear Bronze/Silver/Gold pattern on top of Iceberg tables for telecom domains',
          'Designing a galaxy schema that supports multiple fact tables sharing conformed dimensions',
          'Coordinating Spark jobs and data movement between Iceberg and ClickHouse with repeatable orchestration',
          'Ensuring rejected/invalid records are tracked while keeping core paths efficient'
        ]
      },
      solution: {
        title: 'The Solution',
        description:
          'Implemented an event-driven lakehouse where NiFi lands Kafka events into MinIO, Spark builds Iceberg Bronze/Silver/Gold tables, and curated facts and dimensions are loaded into ClickHouse as a galaxy schema for analytics.',
        architecture: {
          overview: 'Kafka → NiFi → MinIO → Spark-on-Iceberg medallion → ClickHouse galaxy schema for BI',
          components: [
            {
              name: 'Streaming Ingestion',
              tech: ['Apache Kafka', 'Apache NiFi', 'MinIO'],
              description:
                'Kafka topics deliver telecom events; NiFi writes them into MinIO using S3-compatible storage for downstream Iceberg tables.'
            },
            {
              name: 'Iceberg Medallion Layers',
              tech: ['Apache Spark', 'Apache Iceberg'],
              description:
                'Spark jobs create and maintain Bronze, Silver, and Gold Iceberg tables in a `my_catalog` warehouse with telecom-specific namespaces.'
            },
            {
              name: 'Silver Validation & Rejection',
              tech: ['Spark SQL'],
              description:
                'Silver layer enforces validation rules, flags rejected records with `is_rejected` and `rejection_reason`, and enriches events with additional attributes.'
            },
            {
              name: 'Galaxy Schema Warehouse',
              tech: ['ClickHouse', 'Dimensional Modeling'],
              description:
                'Facts for calls, SMS, payment, recharge, and support share conformed date, time, user, device, cell site, and agent dimensions.'
            },
            {
              name: 'Orchestration & Automation',
              tech: ['Apache Airflow', 'PowerShell'],
              description:
                'Airflow DAGs and PowerShell scripts coordinate Spark jobs and ClickHouse loads, keeping data products fresh end-to-end.'
            }
          ]
        },
        keyFeatures: [
          'Full medallion implementation on Iceberg with Bronze, Silver, and Gold namespaces',
          'Galaxy schema in ClickHouse with multiple facts sharing conformed dimensions',
          'Explicit rejection tracking in Silver so bad events never silently disappear',
          'Reusable Spark modeling layer for both dimensions and facts',
          'Containerized environment for running the full telco lakehouse locally'
        ]
      },
      results: {
        title: 'The Results',
        description:
          'The platform proves how a modern telecom lakehouse can combine cheap object storage, robust table formats, and a dimensional OLAP store to serve varied analytical needs.',
        metrics: [
          {
            metric: '3',
            label: 'Medallion Layers',
            description: 'Bronze, Silver, and Gold Iceberg tables with clear contracts.'
          },
          {
            metric: '5',
            label: 'Fact Tables',
            description: 'Fact tables for calls, SMS, payments, recharges, and support in ClickHouse.'
          },
          {
            metric: '6',
            label: 'Dimensions',
            description: 'Conformed dimensions across all telecom subject areas.'
          },
          {
            metric: 'Event-Driven',
            label: 'Architecture',
            description: 'Streaming-friendly design from Kafka through to BI.'
          }
        ],
        businessImpact: [
          'Demonstrates a practical blueprint for telcos adopting lakehouse and OLAP together',
          'Enables fast, multi-fact analytics on network, billing, and support domains',
          'Improves transparency by exposing both accepted and rejected records throughout the flow',
          'Reduces time-to-insight by standardizing how new telecom subject areas are onboarded',
          'Prepares the ground for advanced analytics and ML by centralizing clean, historical data'
        ]
      },
      technicalDetails: {
        technologies: [
          'Apache Kafka',
          'Apache NiFi',
          'Apache Spark',
          'Apache Iceberg',
          'MinIO',
          'ClickHouse',
          'Apache Airflow',
          'Power BI',
          'Python',
          'PowerShell'
        ],
        codeSnippets: [
          {
            title: 'Iceberg Catalog Configuration',
            language: 'sql',
            code: `-- Iceberg catalog configuration (conceptual)
SET spark.sql.catalog.my_catalog=org.apache.iceberg.spark.SparkCatalog;
SET spark.sql.catalog.my_catalog.type=hadoop;
SET spark.sql.catalog.my_catalog.warehouse='s3a://telecomlakehouse/iceberg';`
          },
          {
            title: 'Date Dimension Generation with generate_series',
            language: 'sql',
            code: `select
    md5(TO_CHAR(g.date_series, 'YYYY-MM-DD')) AS date_sk,
    extract(year from g.date_series) as year,
    extract(quarter from g.date_series) as quarter,
    extract(month from g.date_series) as month,
    to_char(g.date_series, 'Month') as month_name,
    case when extract(dow from g.date_series) in (0,6) 
         then true else false end as is_weekend
from generate_date_cte g;`
          }
        ],
        diagrams: [
          {
            title: 'Lakehouse Architecture',
            description: 'End-to-end architecture from Kafka through NiFi, MinIO, Iceberg layers, and into ClickHouse.',
            imageUrl: '/readme/image/arch.jpg'
          },
          {
            title: 'Gold Galaxy Schema',
            description: 'Galaxy schema showing dim_date, dim_time, dim_user, dim_device, dim_cell_site, and dim_agent shared across facts.',
            imageUrl: '/readme/image/UntitledDiagramlayers.png'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/Telecom-Data-Platform',
      demo: '',
      lessons: [
        'Iceberg plus object storage creates a powerful foundation for telecom medallion architectures',
        'Galaxy schemas fit telco use cases well because they share conformed dimensions across many facts',
        'Separation between lakehouse storage (Iceberg) and OLAP serving (ClickHouse) keeps each layer focused',
        'Automating Spark and load jobs with Airflow and scripts is key to keeping the lakehouse reliable'
      ]
    },
    {
      id: 'multisystem-etl-lakehouse',
      title: 'Multisystem ETL Lakehouse for Business Insights',
      subtitle: 'Iceberg-powered analytics foundation for Magento, Odoo, and Freshdesk',
      category: 'Data Engineering',
      difficulty: 'Advanced',
      status: 'Completed',
      featured: true,
      problem: {
        title: 'The Challenge',
        description: 'A scale-up needed a governed analytics backbone that could consolidate operational data from Magento commerce, Odoo ERP, and Freshdesk support into a single source of truth without sacrificing auditability or speed.',
        challenges: [
          'Harmonizing heterogeneous schemas and refresh cadences across three SaaS platforms',
          'Preserving CDC history while keeping Raw storage immutable',
          'Guaranteeing ACID guarantees on object storage for curated datasets',
          'Designing reusable Silver entities that serve both batch and ad-hoc analytics',
          'Building actionable, BI-ready star schema models with automated quality checks'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Implemented a production-style lakehouse using Apache Spark and Iceberg on MinIO, layered with Airflow orchestration and Streamlit monitoring to deliver curated Silver and Gold tables for downstream BI.',
        architecture: {
          overview: 'Iceberg-backed Lakehouse on MinIO with Silver/Gold catalogs',
          components: [
            {
              name: 'Ingestion & Raw Landing',
              tech: ['S3A', 'Change Data Capture'],
              description: 'CDC exports from Magento, Odoo, and Freshdesk land as immutable parquet in Raw zones.'
            },
            {
              name: 'Silver Curation',
              tech: ['Apache Spark', 'Apache Iceberg'],
              description: 'Spark jobs clean, deduplicate, and standardize source-specific entities into the `local` Iceberg catalog.'
            },
            {
              name: 'Gold Modeling',
              tech: ['Apache Spark', 'Dimensional Modeling'],
              description: 'Fact and dimension tables published to the `my_catalog.gold` namespace with conformed business logic.'
            },
            {
              name: 'Orchestration',
              tech: ['Apache Airflow'],
              description: 'DAGs manage Silver refreshes, Gold builds, data quality hooks, and catalog maintenance.'
            },
            {
              name: 'Observability',
              tech: ['Streamlit', 'MinIO Console'],
              description: 'Lightweight status dashboards track pipeline health, schema drifts, and SLA adherence.'
            }
          ]
        },
        keyFeatures: [
          'Dual Iceberg catalogs isolating Silver and Gold layers',
          'Automated CDC reconciliation and late-arriving data handling',
          'Reusable Spark session bootstrap utilities for storage/catalog parity',
          'Self-service dimensional marts aligned to BI consumption patterns',
          'Codespaces-based dev environment with Dockerized dependencies'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The lakehouse reduced data onboarding friction, ensured trustworthy analytics, and established a template for future domain onboarding.',
        metrics: [
          {
            metric: '3',
            label: 'Source Systems Unified',
            description: 'Magento, Odoo, and Freshdesk harmonized in Silver.'
          },
          {
            metric: '<15 min',
            label: 'Silver Refresh',
            description: 'End-to-end CDC to curated tables per cycle.'
          },
          {
            metric: '100%',
            label: 'ACID Guarantees',
            description: 'Iceberg-managed tables with snapshot rollback.'
          },
          {
            metric: '5',
            label: 'Gold Star Entities',
            description: 'Dim/fact tables powering BI dashboards.'
          }
        ],
        businessImpact: [
          'Single semantic layer for revenue, inventory, and support analytics',
          'Improved trust via automated data quality checks and schema drift alerts',
          'Faster stakeholder onboarding through reusable Codespaces templates',
          'Reduced manual reconciliation between teams with unified catalog',
          'Foundation for future machine learning features leveraging curated data'
        ]
      },
      technicalDetails: {
        technologies: ['Apache Spark', 'Apache Iceberg', 'MinIO', 'Apache Airflow', 'Streamlit', 'Docker', 'Python', 'GitHub Codespaces', 'Aibyte'],
        codeSnippets: [
          {
            title: 'Spark Session with Iceberg Catalogs',
            language: 'python',
            code: `from pyspark.sql import SparkSession

spark = (
    SparkSession.builder
        .appName("gold_modeling")
        .config("spark.sql.catalog.local", "org.apache.iceberg.spark.SparkCatalog")
        .config("spark.sql.catalog.local.type", "hadoop")
        .config("spark.sql.catalog.local.warehouse", "s3a://multusystem/silver_layer")
        .config("spark.sql.catalog.my_catalog", "org.apache.iceberg.spark.SparkCatalog")
        .config("spark.sql.catalog.my_catalog.type", "hadoop")
        .config("spark.sql.catalog.my_catalog.warehouse", "s3a://multusystem/gold_layer")
        .getOrCreate()
)`
          },
          {
            title: 'Airflow DAG Orchestrating Silver Refresh',
            language: 'python',
            code: `with DAG(
    dag_id="silver_transform",
    schedule_interval="@hourly",
    start_date=datetime(2024, 7, 1),
    catchup=False,
) as dag:
    latest_raw = PythonOperator(
        task_id="discover_latest_raw",
        python_callable=get_latest_table_paths,
    )

    curate_magento = SparkSubmitOperator(
        task_id="transform_magento",
        application="/opt/jobs/scripts/silver_layer/transform_magento.py",
    )

    latest_raw >> curate_magento`
          }
        ],
        diagrams: [
          {
            title: 'Lakehouse Layers',
            description: 'Visualization of Raw, Silver, and Gold layers across catalogs.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/multisystem-etl-lakehouse/blob/main/Data%20Architecture/layers.png?raw=true'
          },
          {
            title: 'Low-level Data Flow',
            description: 'Detailed pipeline flow from ingestion to dimensional models.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/multisystem-etl-lakehouse/blob/main/Data%20Architecture/data%20flow%20low%20level.png?raw=true'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/Multisystem-ETL-Lakehouse_for-Business-Insights',
      demo: '',
      lessons: [
        'Adopting dual Iceberg catalogs accelerates governance and change control',
        'Containerized dev environments keep Spark, Iceberg, and MinIO configuration consistent',
        'CDC-aware ingestion patterns simplify reconciliation between SaaS platforms',
        'Lightweight observability with Streamlit increases stakeholder trust in the data'
      ]
    },
    {
      id: 'ecommerce-pipeline',
      title: 'End-to-End Big Data Pipeline for E-commerce Event Logs',
      subtitle: 'Real-time streaming architecture with comprehensive analytics',
      category: 'Data Engineering',
      difficulty: 'Advanced',
      status: 'Completed',
      featured: true,
      problem: {
        title: 'The Challenge',
        description: 'A major e-commerce platform needed to process millions of daily event logs from user interactions, transactions, and inventory changes. The existing system was slow, couldn\'t handle real-time analytics, and lacked proper data quality controls.',
        challenges: [
          'Processing 10M+ daily events with sub-second latency',
          'Ensuring data consistency across multiple sources',
          'Building real-time dashboards for business insights',
          'Implementing robust error handling and monitoring',
          'Scaling infrastructure to handle peak traffic'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a comprehensive big data pipeline using modern data stack technologies with real-time streaming capabilities, robust data quality controls, and scalable architecture.',
        architecture: {
          overview: 'Medallion Architecture with real-time streaming',
          components: [
            {
              name: 'Data Ingestion',
              tech: ['Apache Kafka', 'HDFS'],
              description: 'High-throughput streaming ingestion with fault tolerance'
            },
            {
              name: 'Data Processing',
              tech: ['Apache Spark', 'Python'],
              description: 'Distributed processing with real-time transformations'
            },
            {
              name: 'Data Storage',
              tech: ['PostgreSQL', 'HDFS'],
              description: 'Multi-layer storage with optimized query performance'
            },
            {
              name: 'Orchestration',
              tech: ['Apache Airflow', 'dbt'],
              description: 'Automated workflow management and data modeling'
            },
            {
              name: 'Visualization',
              tech: ['Power BI', 'Streamlit'],
              description: 'Real-time dashboards and interactive analytics'
            }
          ]
        },
        keyFeatures: [
          'Real-time event streaming with Kafka',
          'Medallion Architecture implementation',
          'Automated data quality validation',
          'Scalable containerized deployment',
          'Comprehensive monitoring and alerting'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The implemented solution delivered significant improvements in data processing capabilities, business intelligence, and operational efficiency.',
        metrics: [
          {
            metric: '99.9%',
            label: 'Data Processing Uptime',
            description: 'Reliable pipeline operation'
          },
          {
            metric: '< 5 seconds',
            label: 'Real-time Analytics',
            description: 'Near-instant business insights'
          },
          {
            metric: '10x',
            label: 'Processing Speed',
            description: 'Faster than previous system'
          },
          {
            metric: '50%',
            label: 'Cost Reduction',
            description: 'Optimized infrastructure costs'
          }
        ],
        businessImpact: [
          'Real-time inventory tracking and alerts',
          'Improved customer experience through personalized recommendations',
          'Faster decision-making with live dashboards',
          'Reduced data processing costs by 50%',
          'Enhanced data governance and compliance'
        ]
      },
      technicalDetails: {
        technologies: ['Kafka', 'HDFS', 'Spark', 'PostgreSQL', 'Apache Airflow', 'dbt', 'Streamlit', 'Power BI', 'Docker', 'Python'],
        codeSnippets: [
          {
            title: 'Kafka Producer Configuration',
            language: 'python',
            code: `from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

def send_event(event_data):
    producer.send('ecommerce_events', event_data)
    producer.flush()`
          },
          {
            title: 'Spark Streaming Job',
            language: 'python',
            code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import *

spark = SparkSession.builder \\
    .appName("EcommerceEventProcessor") \\
    .getOrCreate()

streaming_df = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "ecommerce_events") \\
    .load()

processed_df = streaming_df \\
    .selectExpr("CAST(value AS STRING)") \\
    .select(from_json(col("value"), schema).alias("data")) \\
    .select("data.*") \\
    .withWatermark("timestamp", "1 minute") \\
    .groupBy(window("timestamp", "5 minutes"), "user_id") \\
    .agg(count("*").alias("event_count"))`
          }
        ],
        diagrams: [
          {
            title: 'Pipeline Architecture',
            description: 'High-level pipeline architecture showing the complete data flow from ingestion to analytics.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing/blob/main/Monitoring/Pipelinearchitecture.png?raw=true'
          },
          {
            title: 'Pipeline Overview',
            description: 'Detailed pipeline overview showing the three main task groups and their relationships.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing/blob/main/Monitoring/pipeline.png?raw=true'
          },
          {
            title: 'Geographic Analysis Dashboard',
            description: 'Streamlit dashboard showing geographic analysis and user activity by location.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing/blob/main/Monitoring/Geographic%20Analysis.png?raw=true'
          },
          {
            title: 'Sales Dashboard',
            description: 'Power BI sales dashboard showing comprehensive sales analytics and insights.',
            imageUrl: 'https://github.com/user-attachments/assets/ae4698c4-4157-4fe3-8952-1f6ff0737ad0'
          },
          {
            title: 'Product Dashboard',
            description: 'Power BI product dashboard showing product performance and analytics.',
            imageUrl: 'https://github.com/user-attachments/assets/cf8ebb48-be2b-4206-a439-634ffa2e7289'
          },
          {
            title: 'Users Dashboard',
            description: 'Power BI users dashboard showing user behavior and analytics.',
            imageUrl: 'https://github.com/user-attachments/assets/78a9d8c3-629d-4812-8355-77dcad9f6a14'
          },
          {
            title: 'DBT Lineage',
            description: 'DBT lineage graph showing the flow from raw sources to final analytics models.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing/blob/main/image/dbt.png?raw=true'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing',
      demo: 'https://end-to-end-log-processing.streamlit.app/',
      lessons: [
        'Importance of data quality validation in streaming pipelines',
        'Benefits of containerized deployment for scalability',
        'Value of comprehensive monitoring and alerting',
        'Impact of real-time analytics on business decisions'
      ]
    },
    {
      id: 'telecom-streaming',
      title: 'Telecom Streaming Pipeline',
      subtitle: 'Near real-time analytics for telecommunications data',
      category: 'Data Engineering',
      difficulty: 'Advanced',
      status: 'Completed',
      featured: true,
      problem: {
        title: 'The Challenge',
        description: 'A telecommunications company needed to process massive volumes of call and SMS data in near real-time to provide operational insights, detect fraud patterns, and optimize network performance.',
        challenges: [
          'Processing millions of call records per hour',
          'Real-time fraud detection and prevention',
          'Network performance optimization',
          'Compliance with data retention policies',
          'Integration with existing billing systems'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Built a scalable streaming pipeline using Kafka and Spark, implementing Medallion Architecture with SCD Type 2 logic for historical tracking and real-time analytics.',
        architecture: {
          overview: 'Streaming architecture with dimensional modeling',
          components: [
            {
              name: 'Data Ingestion',
              tech: ['Apache Kafka', 'HDFS'],
              description: 'High-volume event streaming with partitioning'
            },
            {
              name: 'Stream Processing',
              tech: ['Apache Spark', 'Python'],
              description: 'Real-time data transformation and aggregation'
            },
            {
              name: 'Data Warehouse',
              tech: ['Snowflake', 'dbt'],
              description: 'Cloud-native storage with SCD Type 2 implementation'
            },
            {
              name: 'Orchestration',
              tech: ['Apache Airflow', 'Terraform'],
              description: 'Infrastructure as code and workflow management'
            },
            {
              name: 'Analytics',
              tech: ['Power BI', 'Grafana'],
              description: 'Operational dashboards and monitoring'
            }
          ]
        },
        keyFeatures: [
          'Real-time call and SMS processing',
          'SCD Type 2 implementation for historical tracking',
          'Automated fraud detection algorithms',
          'Network performance monitoring',
          'Compliance-ready data retention'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The streaming pipeline enabled real-time operational insights and significantly improved network performance monitoring.',
        metrics: [
          {
            metric: '99.95%',
            label: 'Data Processing Accuracy',
            description: 'High-quality data processing'
          },
          {
            metric: '< 30 seconds',
            label: 'Real-time Processing',
            description: 'Near-instant operational insights'
          },
          {
            metric: '5M+',
            label: 'Events/Hour',
            description: 'High-volume processing capability'
          },
          {
            metric: '40%',
            label: 'Fraud Detection',
            description: 'Improved fraud prevention'
          }
        ],
        businessImpact: [
          'Real-time network performance monitoring',
          'Improved fraud detection and prevention',
          'Enhanced customer service through better insights',
          'Reduced operational costs through automation',
          'Compliance with regulatory requirements'
        ]
      },
      technicalDetails: {
        technologies: ['Kafka', 'HDFS', 'Spark', 'Snowflake', 'dbt', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
        codeSnippets: [
          {
            title: 'dbt Date Dimension Model',
            language: 'sql',
            code: `{{
    config(
        materialized='incremental',
        unique_key='Date_key',
        indexes=[{"columns": ['Date_key'], "unique": true}],
        target_schema='Gold'
    )
}}

with formatted_sms_date as (
    select 
        to_timestamp(timestamp, 'DD-MM-YYYY HH24:MI:SS') as formatted_timestamp
    from {{ source('row_data', 'SMS') }}
    where timestamp is not null
),
formatted_call_date as (
    select 
        to_timestamp(timestamp, 'DD-MM-YYYY HH24:MI:SS') as formatted_timestamp
    from {{ source('row_data', 'CALL_DATA') }}
    where timestamp is not null
),

unioned_dates as (
    select formatted_timestamp from formatted_sms_date
    union
    select formatted_timestamp from formatted_call_date
),

date_components as (
    select distinct
        formatted_timestamp as full_date,
        md5(formatted_timestamp) as Date_key,
        extract(day from formatted_timestamp) as day,
        extract(month from formatted_timestamp) as month,
        extract(year from formatted_timestamp) as year,
        to_char(formatted_timestamp, 'Day') as day_name,
        to_char(formatted_timestamp, 'Month') as month_name,
        extract(quarter from formatted_timestamp) as quarter,
        extract(dow from formatted_timestamp) as day_of_week,
        extract(doy from formatted_timestamp) as day_of_year,
        extract(hour from formatted_timestamp) as hour_24,
        to_char(formatted_timestamp, 'HH24:MI') as hour_minute,
        to_char(formatted_timestamp, 'HH12 AM') as hour_am_pm,
        concat('Q', extract(quarter from formatted_timestamp)) as quarter_name
    from unioned_dates
)

select * from date_components
{% if is_incremental() %}
where Date_key not in (select Date_key from {{ this }})
{% endif %}`
          }
        ],
        diagrams: [
          {
            title: 'Medallion Architecture',
            description: 'Overview of the Medallion Architecture showing Bronze, Silver, and Gold layers.',
            imageUrl: 'https://github.com/user-attachments/assets/6edec695-1c97-40da-a7bf-8e4bbff600bf'
          },
          {
            title: 'System Architecture',
            description: 'High-level system architecture showing the complete data flow.',
            imageUrl: 'https://github.com/user-attachments/assets/84c5b8ba-d1d6-479c-928b-58a640ff58c4'
          },
          {
            title: 'Environment Setup',
            description: 'Docker environment setup and configuration.',
            imageUrl: 'https://github.com/user-attachments/assets/bb63c7e4-3574-474e-90a2-8c2e13d928aa'
          },
          {
            title: 'Pipeline Architecture',
            description: 'Detailed pipeline architecture showing data flow through the system.',
            imageUrl: 'https://github.com/user-attachments/assets/27cacc76-e660-49eb-858c-4a85ee6dfe8e'
          },
          {
            title: 'Data Flow Through Medallion Architecture',
            description: 'Visual representation of data flow through Bronze, Silver, and Gold layers.',
            imageUrl: 'https://github.com/user-attachments/assets/7dc06f97-46d4-4a6b-a68f-d92b6666707c'
          },
          {
            title: 'Ingestion Architecture',
            description: 'Data ingestion architecture showing how data enters the pipeline.',
            imageUrl: 'https://github.com/user-attachments/assets/0e92ae4c-0b6b-4460-a404-f63ea0c85370'
          },
          {
            title: 'Data Processing Layer',
            description: 'Data processing layer showing transformation and enrichment processes.',
            imageUrl: 'https://github.com/user-attachments/assets/6825b0bd-7eb4-4251-99ec-4a784356cbb3'
          },
          {
            title: 'DBT Pipeline',
            description: 'DBT pipeline workflow showing model building and testing processes.',
            imageUrl: 'https://github.com/user-attachments/assets/3e8deb69-9e31-44c4-ae5e-ec6bd08e0530'
          },
          {
            title: 'Data Lineage',
            description: 'DBT data lineage showing relationships between models and transformations.',
            imageUrl: 'https://github.com/user-attachments/assets/4a7d91e5-f56e-439f-aa1a-e0891afba14c'
          },
          {
            title: 'Home Dashboard',
            description: 'Power BI home dashboard showing key telecom metrics.',
            imageUrl: 'https://github.com/user-attachments/assets/96bad374-788b-4f10-b91c-aabdf57e8bfe'
          },
          {
            title: 'Overview Dashboard',
            description: 'Overview dashboard with comprehensive telecom analytics.',
            imageUrl: 'https://github.com/user-attachments/assets/867465cf-42d5-403f-b90d-b3a83fc74396'
          },
          {
            title: 'Users Dashboard',
            description: 'User analytics dashboard showing subscriber insights.',
            imageUrl: 'https://github.com/user-attachments/assets/f8848026-2be1-410a-a2f3-aa0e2d503a69'
          },
          {
            title: 'Cell Site Dashboard',
            description: 'Cell site performance and coverage analytics dashboard.',
            imageUrl: 'https://github.com/user-attachments/assets/7d652306-5f44-4b20-9dcf-ac0572aa6290'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/telecom-streaming-pipeline',
      demo: '',
      lessons: [
        'Benefits of SCD Type 2 for historical data tracking',
        'Importance of real-time processing for operational insights',
        'Value of cloud-native data warehousing',
        'Impact of automated fraud detection on business'
      ]
    },
    {
      id: 'elt-engine',
      title: 'ELT-Engine',
      subtitle: 'Modern ELT pipeline with cloud-native architecture',
      category: 'Analytics Engineering',
      difficulty: 'Intermediate',
      status: 'Completed',
      featured: false,
      problem: {
        title: 'The Challenge',
        description: 'A growing company needed to modernize their data infrastructure from traditional ETL to ELT architecture, enabling faster data processing and more flexible analytics capabilities.',
        challenges: [
          'Migrating from legacy ETL to modern ELT',
          'Implementing cloud-native data architecture',
          'Ensuring data quality and consistency',
          'Enabling self-service analytics',
          'Reducing data processing costs'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a modern ELT pipeline using Apache Airflow for orchestration, dbt for transformations, and Snowflake as the cloud data warehouse.',
        architecture: {
          overview: 'Cloud-native ELT with Medallion Architecture',
          components: [
            {
              name: 'Data Ingestion',
              tech: ['Apache Airflow', 'Python'],
              description: 'Automated data extraction and loading'
            },
            {
              name: 'Data Transformation',
              tech: ['dbt', 'SQL'],
              description: 'Declarative data modeling and transformations'
            },
            {
              name: 'Data Warehouse',
              tech: ['Snowflake', 'SQL'],
              description: 'Cloud-native scalable storage'
            },
            {
              name: 'Data Modeling',
              tech: ['dbt', 'Data Vault'],
              description: 'Modern data modeling techniques'
            },
            {
              name: 'Analytics',
              tech: ['Power BI', 'SQL'],
              description: 'Business intelligence and reporting'
            }
          ]
        },
        keyFeatures: [
          'Medallion Architecture implementation',
          'Data Vault modeling methodology',
          'Automated testing and documentation',
          'Self-service analytics capabilities',
          'Cost-optimized cloud architecture'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The modern ELT pipeline significantly improved data processing speed, reduced costs, and enabled better analytics capabilities.',
        metrics: [
          {
            metric: '3x',
            label: 'Faster Processing',
            description: 'Improved data processing speed'
          },
          {
            metric: '60%',
            label: 'Cost Reduction',
            description: 'Lower infrastructure costs'
          },
          {
            metric: '100%',
            label: 'Data Quality',
            description: 'Automated quality checks'
          },
          {
            metric: '24/7',
            label: 'Availability',
            description: 'Continuous data processing'
          }
        ],
        businessImpact: [
          'Faster access to business insights',
          'Reduced data processing costs',
          'Improved data quality and reliability',
          'Enhanced self-service analytics',
          'Better scalability for future growth'
        ]
      },
      technicalDetails: {
        technologies: ['SQL', 'dbt', 'Snowflake', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
        codeSnippets: [
          {
            title: 'dbt Customer Model with Incremental Logic',
            language: 'sql',
            code: `{{
    config(
        materialized='incremental',
        unique_key='ID',
        indexes=[{"columns": ['ID'], "unique": true}],
        target_schema='silver'
    )
}}

with customer_cte as (
    SELECT 
        *, 
        row_number() OVER (PARTITION BY cst_id ORDER BY cst_create_date DESC) AS last_update
    FROM {{ source('row_data', 'crm_cust_info') }}
)

SELECT 
    cst_id AS ID,
    cst_key AS customer_key, 
    TRIM(cst_firstname) AS FIRST_NAME, 
    TRIM(cst_lastname) AS LAST_NAME,
    CASE 
        WHEN UPPER(cst_marital_status) = 'S' THEN 'Single'
        WHEN UPPER(cst_marital_status) = 'M' THEN 'Married'
        ELSE 'n/a'
    END AS MARITAL_STATUS,
    CASE 
        WHEN UPPER(cst_gndr) = 'F' THEN 'Female'
        WHEN UPPER(cst_gndr) = 'M' THEN 'Male'
        ELSE 'n/a'
    END AS gender,
    cst_create_date 
FROM customer_cte
WHERE last_update = 1 and cst_id is not null`
          },
          {
            title: 'dbt Sales Model with Data Quality Checks',
            language: 'sql',
            code: `with sales_cte as (
    SELECT 
        sls_ord_num AS order_number,
        sls_prd_key AS product_key,
        sls_cust_id AS Customer_id,
        CASE 
            WHEN sls_order_dt = 0 OR LENGTH(sls_order_dt) != 8 THEN TO_DATE(SLS_SHIP_DT::VARCHAR, 'YYYYMMDD') - INTERVAL '2 DAY'
            ELSE TO_DATE(sls_order_dt::VARCHAR, 'YYYYMMDD') 
        END AS order_date,
        CASE 
            WHEN SLS_SHIP_DT = 0 or length(SLS_SHIP_DT) != 8 then NULL
            ELSE TO_DATE(SLS_SHIP_DT::VARCHAR,'YYYYMMDD')
        end as Ship_date,
        CASE 
            WHEN SLS_DUE_DT = 0 or length(SLS_DUE_DT) != 8 then NULL
            else to_date(SLS_DUE_DT::VARCHAR,'YYYYMMDD')
        end as DUE_Date,
        CASE 
            When sls_sales is null or sls_sales <= 0 or sls_sales != sls_quantity * abs(sls_price) then sls_quantity * abs(sls_price)
            else sls_sales
        end as sales,
        sls_quantity as quantity ,
        CASE 
            when sls_price is null or sls_price <= 0 then sls_sales / nullif(sls_quantity,0) 
            else sls_price
        end as price
    FROM {{ source('row_data', 'crm_sales_details') }} s
)
SELECT * from sales_cte`
          }
        ],
        diagrams: [
          {
            title: 'Architecture Overview',
            description: 'High-level architecture showing the ELT pipeline design and data flow.',
            imageUrl: 'https://github.com/user-attachments/assets/6a855e20-2781-41d9-a84c-a0044314a2d1'
          },
          {
            title: 'Medallion Architecture',
            description: 'Medallion Architecture showing Bronze, Silver, and Gold data layers.',
            imageUrl: 'https://github.com/user-attachments/assets/16d30a2f-3108-4fef-9735-ae712475366f'
          },
          {
            title: 'Airflow DAG Overview',
            description: 'Airflow DAG showing the orchestration workflow for the ELT pipeline.',
            imageUrl: 'https://github.com/user-attachments/assets/2917450e-6dde-4aee-9cc5-0a897597b5b4'
          },
          {
            title: 'Airflow DAG Details',
            description: 'Detailed view of the Airflow DAG tasks and dependencies.',
            imageUrl: 'https://github.com/user-attachments/assets/df7a98a4-3186-4051-841e-5a84f43dcc0e'
          },
          {
            title: 'Data Lineage',
            description: 'Data lineage graph showing the flow from source to final analytics models.',
            imageUrl: 'https://github.com/user-attachments/assets/bc59f140-e299-43e0-b3b3-59d5c340003e'
          },
          {
            title: 'Overview Dashboard',
            description: 'Power BI overview dashboard showing high-level business metrics and KPIs.',
            imageUrl: 'https://github.com/user-attachments/assets/a702dcb2-6db3-4aee-9dce-d704929fa79b'
          },
          {
            title: 'Customers Dashboard',
            description: 'Power BI customers dashboard showing customer analytics and insights.',
            imageUrl: 'https://github.com/user-attachments/assets/800d429c-6be6-48d4-9bef-fcadfaa637b5'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/elt-engine',
      demo: '',
      lessons: [
        'Benefits of ELT over traditional ETL',
        'Value of cloud-native data architecture',
        'Importance of data modeling best practices',
        'Impact of self-service analytics on business'
      ]
    },
    {
      id: 'olapify',
      title: 'OLAPify',
      subtitle: 'Modern data warehouse solution with dimensional modeling',
      category: 'Data Warehousing',
      difficulty: 'Intermediate',
      status: 'Completed',
      featured: false,
      problem: {
        title: 'The Challenge',
        description: 'A company needed to build a modern data warehouse solution that could track orders by product, category, and location while implementing Slowly Changing Dimension (SCD) type 2 for product price changes.',
        challenges: [
          'Designing a scalable dimensional data model',
          'Implementing SCD Type 2 for historical tracking',
          'Creating surrogate keys for data integration',
          'Ensuring data consistency across multiple sources',
          'Building a flexible architecture for future data sources'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a modern data warehouse using dbt with dimensional modeling, implementing surrogate keys using MD5 hashing and SCD Type 2 for historical data tracking.',
        architecture: {
          overview: 'Dimensional modeling with SCD Type 2 implementation',
          components: [
            {
              name: 'Data Sources',
              tech: ['Northwind Dataset', 'Multiple Sources'],
              description: 'Public dataset with planned multi-source integration'
            },
            {
              name: 'Staging Layer',
              tech: ['dbt', 'SQL'],
              description: 'Data cleaning and standardization'
            },
            {
              name: 'Dimensional Model',
              tech: ['dbt', 'Star Schema'],
              description: 'Optimized for analytical queries'
            },
            {
              name: 'Surrogate Keys',
              tech: ['MD5 Hashing', 'SQL'],
              description: 'Consistent key generation across sources'
            },
            {
              name: 'SCD Implementation',
              tech: ['dbt', 'Type 2 Logic'],
              description: 'Historical tracking of dimension changes'
            }
          ]
        },
        keyFeatures: [
          'Dimensional modeling with star schema',
          'SCD Type 2 implementation for historical tracking',
          'MD5-based surrogate key generation',
          'Multi-source data integration capability',
          'Comprehensive data lineage tracking'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The data warehouse solution provided a robust foundation for analytical queries and business intelligence with proper historical data tracking.',
        metrics: [
          {
            metric: '100%',
            label: 'Data Consistency',
            description: 'Consistent surrogate keys across sources'
          },
          {
            metric: 'SCD Type 2',
            label: 'Historical Tracking',
            description: 'Complete change history for dimensions'
          },
          {
            metric: '6',
            label: 'Dimension Tables',
            description: 'Comprehensive dimensional model'
          },
          {
            metric: '1',
            label: 'Fact Table',
            description: 'Centralized order tracking'
          }
        ],
        businessImpact: [
          'Improved analytical query performance',
          'Enhanced historical data analysis capabilities',
          'Better data governance and lineage tracking',
          'Scalable architecture for future growth',
          'Standardized data modeling approach'
        ]
      },
      technicalDetails: {
        technologies: ['SQL', 'dbt', 'PostgreSQL', 'Mermaid', 'Git', 'GitHub'],
        codeSnippets: [
          {
            title: 'Surrogate Key Generation Logic',
            language: 'markdown',
            code: `| Surrogate Key   | Logic                                        |
|-----------------|----------------------------------------------|
| product_sk     | MD5 Hash of cleaned product_name          |
| supplier_sk   | MD5 Hash of cleaned supplier_name          |
| employee_sk   | MD5 Hash of cleaned employee_name          |
| data_sk       | MD5 Hash of cleaned date (from dim_date) |
| location_sk   | MD5 Hash of cleaned address|| postalcode   |`
          },
          {
            title: 'Data Flow Architecture',
            language: 'mermaid',
            code: `flowchart LR;
A[Source 1]
B[Source 2]
C[Staing table orders]
D[Join operation]
F[Orders fact]
G[Staging table products]

A -- "store 'source 1' in data_src" --> C
B -- "store 'source 2' in data_src" --> C

A -- "store 'source 1' in data_src" --> G
B -- "store 'source 2' in data_src" --> G

G -- "create surrogate key" --> Gs[MD5]

C -- "product_id AND data_src" --> D
Gs -- "product_id AND data_src" --> D

D --"Replace source foreign keys with new pproducts surrogate keys"--> F;`
          },
          {
            title: 'Entity Relationship Diagram',
            language: 'mermaid',
            code: `erDiagram
    DIM_CUSTOMERS {
        string customer_sk
        string contact_name
        string contact_title
        string company_name
        string location_sk
    }
    DIM_DATE {
        string date_sk
        date full_date
        int year
        int month
        int day
        string day_name
    }
    DIM_EMPLOYEE {
        string employee_sk
        string first_name
        string last_name
        string title
        date birth_date
        date hire_date
        string location_sk
        string home_phone
    }
    DIM_LOCATION {
        string location_sk
        string address
        string city
        string region
        string postal_code
        string country
    }
    DIM_PRODUCTS {
        string product_sk
        string product_name
        string category_sk
        string category_name
        float unit_price
        string quantity_per_unit
        boolean discontinued
    }
    DIM_SUPPLIERS {
        string supplier_sk
        int supplier_id
        string company_name
        string contact_name
        string contact_title
        string homepage
        string location_sk
    }
    FACT_ORDERS {
        string transaction_id
        int order_id
        string customer_sk
        string employee_sk
        string order_date_sk
        string ship_date_sk
        string product_sk
        string location_sk
        numeric unit_price
        int quantity
        numeric discount
        int ship_via
        numeric freight
        string ship_name
    }
    FACT_ORDERS ||--o| DIM_CUSTOMERS : places
    FACT_ORDERS ||--o| DIM_EMPLOYEE : handled_by
    FACT_ORDERS ||--o| DIM_DATE : ordered_on
    FACT_ORDERS ||--o| DIM_DATE : shipped_on
    FACT_ORDERS ||--o| DIM_PRODUCTS : includes
    FACT_ORDERS ||--o| DIM_LOCATION : ships_from
    FACT_ORDERS ||--o| DIM_SUPPLIERS: handled_by`
          }
        ],
        diagrams: [
          {
            title: 'Data Lineage Overview',
            description: 'Comprehensive data lineage showing the flow from source to final analytics-ready data.',
            imageUrl: 'https://github.com/user-attachments/assets/84ca0f03-63ba-4ea3-9261-18d1899e2aa5'
          },
          {
            title: 'Detailed Data Lineage',
            description: 'Detailed view of data transformations and relationships between models.',
            imageUrl: 'https://github.com/user-attachments/assets/8b9df5ed-1005-4562-8589-2d15a16f202b'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/OLAPify',
      demo: '',
      lessons: [
        'Importance of proper dimensional modeling for analytics',
        'Benefits of SCD Type 2 for historical data tracking',
        'Value of surrogate keys in data integration',
        'Impact of data lineage documentation on maintainability'
      ]
    },
    {
      id: 'dbt-orchestrator',
      title: 'DBT-Orchestrator',
      subtitle: 'Modular data transformation pipeline with comprehensive analytics',
      category: 'Analytics Engineering',
      difficulty: 'Advanced',
      status: 'Completed',
      featured: true,
      problem: {
        title: 'The Challenge',
        description: 'A company needed to build a comprehensive data transformation pipeline that could handle multiple data sources, implement modular data models, and provide a robust reporting layer for business intelligence and decision-making.',
        challenges: [
          'Designing modular and scalable data transformation models',
          'Integrating multiple data sources with consistent data quality',
          'Building a comprehensive dimensional data warehouse',
          'Implementing proper data lineage and documentation',
          'Creating an efficient orchestration workflow'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a comprehensive DBT-based data transformation pipeline with PostgreSQL data warehouse, modular data models, and integrated reporting capabilities.',
        architecture: {
          overview: 'Layered architecture with modular DBT models',
          components: [
            {
              name: 'Data Sources',
              tech: ['Multiple Sources', 'CSV/Parquet'],
              description: 'Raw data from various business systems'
            },
            {
              name: 'Staging Layer',
              tech: ['dbt', 'SQL'],
              description: 'Data cleaning and pre-processing'
            },
            {
              name: 'OLAP Models',
              tech: ['dbt', 'Dimensional Modeling'],
              description: 'Dimension and fact table transformations'
            },
            {
              name: 'Data Warehouse',
              tech: ['PostgreSQL', 'SQL'],
              description: 'Analytics-ready data storage'
            },
            {
              name: 'Orchestration',
              tech: ['Apache Airflow', 'Python'],
              description: 'Automated workflow management'
            },
            {
              name: 'Reporting',
              tech: ['Power BI', 'SQL'],
              description: 'Business intelligence and visualization'
            }
          ]
        },
        keyFeatures: [
          'Modular DBT data models with proper documentation',
          'Comprehensive dimensional data warehouse design',
          'Multi-source data integration with surrogate keys',
          'Automated data lineage tracking and visualization',
          'Integrated reporting layer with Power BI'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The DBT-Orchestrator pipeline provided a robust foundation for data analytics with comprehensive business intelligence capabilities and proper data governance.',
        metrics: [
          {
            metric: '100%',
            label: 'Data Quality',
            description: 'Automated quality checks and validation'
          },
          {
            metric: '6',
            label: 'Dimension Tables',
            description: 'Comprehensive dimensional model'
          },
          {
            metric: '1',
            label: 'Fact Table',
            description: 'Centralized sales analytics'
          },
          {
            metric: 'Modular',
            label: 'Architecture',
            description: 'Scalable and maintainable design'
          }
        ],
        businessImpact: [
          'Improved data transformation efficiency and reliability',
          'Enhanced business intelligence and reporting capabilities',
          'Better data governance and lineage tracking',
          'Reduced time to insights through automation',
          'Scalable architecture for future data sources'
        ]
      },
      technicalDetails: {
        technologies: ['dbt', 'PostgreSQL', 'Docker', 'Python', 'Apache Airflow', 'Power BI', 'SQL', 'Mermaid'],
        codeSnippets: [
          {
            title: 'Surrogate Key Generation Logic',
            language: 'markdown',
            code: `| Surrogate Key   | Logic                                        |
|-----------------|----------------------------------------------|
| product_sk     | MD5 Hash of cleaned product_name          |
| supplier_sk   | MD5 Hash of cleaned supplier_name          |
| customer_sk   | MD5 Hash of cleaned customer_name          |
| data_sk       | MD5 Hash of cleaned date (from dim_date) |
| brand_sk       | MD5 Hash of cleaned brand|| datasource   |
| store_sk       | MD5 Hash of cleaned store_name|| datasource   |`
          },
          {
            title: 'Data Flow Architecture',
            language: 'mermaid',
            code: `flowchart LR;
A[Source 1]
B[Source 2]
C[Staing table orders]
D[Join operation]
F[Orders fact]
G[Staging table products]

A -- "store 'source 1' in data_src" --> C
B -- "store 'source 2' in data_src" --> C

A -- "store 'source 1' in data_src" --> G
B -- "store 'source 2' in data_src" --> G

G -- "create surrogate key" --> Gs[MD5]

C -- "product_id AND data_src" --> D
Gs -- "product_id AND data_src" --> D

D --"Replace source foreign keys with new pproducts surrogate keys"--> F;`
          },
          {
            title: 'Logical ERD - Source System',
            language: 'mermaid',
            code: `erDiagram
    CATEGORYS {
        INT Category_ID PK
        VARCHAR Category_name
    }
    SUBCATEGORYS {
        INT Subcategory_ID PK
        INT Category_ID FK
        VARCHAR Subcategory_name
    }
    BRAND {
        INT Brand_ID PK
        VARCHAR brand_name
        VARCHAR brand_country
        DATE start_date
    }
    SUPPLIERS {
        INT Supplier_ID PK
        VARCHAR supplier_name
        VARCHAR location
    }
    SUPPLIER_PRODUCT {
        INT Supplier_ID FK
        INT Product_ID FK
    }
    STORE {
        INT Store_ID PK
        VARCHAR Store_name
        VARCHAR region
    }
    PRODUCTS {
        INT Product_ID PK
        VARCHAR Product_name
        INT price
        INT cost
        INT subcategory_ID FK
    }
    PRODUCT_STORE {
        INT Store_ID FK
        INT Product_ID FK
    }
    PRODUCT_BRAND {
        INT Product_ID FK
        INT Brand_ID FK
    }
    CUSTOMERS {
        INT customer_id PK
        VARCHAR fname
        VARCHAR lname
        VARCHAR gender
        INT zip_code
        INT age
        VARCHAR country
        VARCHAR city
        VARCHAR password
        VARCHAR email
        VARCHAR account_id
    }
    CUSTOMERS_PHONE {
        INT Customer_ID FK
        INT Phone
    }
    RATINGS {
        INT rating_id PK
        INT overall_rate
        INT delivery_rate
        INT customer_service_rate
        INT product_quality_rate
        VARCHAR loyality
        INT customer_id FK
    }
    ORDERS {
        INT order_id PK
        INT sub_total
        INT total_tax
        INT total_freight
        INT total_due
        VARCHAR shipping_method
        VARCHAR shipping_city
        VARCHAR payment_method
        DATE order_date
        INT customer_id FK
    }
    ORDER_DETAILS {
        INT order_detail_id PK
        VARCHAR quantity
        INT order_id FK
        INT product_id FK
        INT line_total
    }
    CATEGORYS ||--o| SUBCATEGORYS : has
    SUBCATEGORYS ||--o| PRODUCTS : contains
    BRAND ||--o| PRODUCT_BRAND : links
    PRODUCTS ||--o| PRODUCT_BRAND : linked_to
    SUPPLIERS ||--o| SUPPLIER_PRODUCT : provides
    PRODUCTS ||--o| SUPPLIER_PRODUCT : supplied_by
    STORE ||--o| PRODUCT_STORE : contains
    PRODUCTS ||--o| PRODUCT_STORE : sold_at
    CUSTOMERS ||--o| RATINGS : rated_by
    CUSTOMERS ||--o| ORDERS : places
    ORDERS ||--o| ORDER_DETAILS : contains
    PRODUCTS ||--o| ORDER_DETAILS : included_in
    CUSTOMERS ||--o| CUSTOMERS_PHONE : has`
          },
          {
            title: 'Data Warehouse Model - Star Schema',
            language: 'mermaid',
            code: `erDiagram
    brand_dim {
        string brand_sk
        int brand_id
        string brand_name
        string brand_country
        date start_date
        string data_source
    }
    customer_dim {
        string customer_sk
        int customer_id
        string name
        string gender
        int age
        int zip_code
        string country
        string city
        string account_id
        string data_source
    }
    data_dim {
        string date_sk
        date full_date
        double year
        double month
        double day
        string day_name
        string month_name
    }
    fact_sales {
        bigint transaction_id
        int order_id
        string date_sk
        string customer_sk
        string shipping_method
        string shipping_city
        string payment_method
        int sub_total
        int total_tax
        int total_freight
        int total_due
        int order_detail_id
        string product_sk
        string supplier_sk
        string brand_sk
        string store_sk
        string quantity
        int line_total
    }
    product_dim {
        string product_sk
        int product_id
        string product_name
        string Subcategory_name
        string Category_name
        numeric price
        numeric cost
        string data_source
    }
    store_dim {
        string store_sk
        int store_id
        string store_name
        string region
        string data_source
    }
    supplier_dim {
        string supplier_sk
        int Supplier_ID
        string supplier_name
        string location
        string data_source
    }
    brand_dim ||--o| fact_sales : has
    customer_dim ||--o| fact_sales : makes
    data_dim ||--o| fact_sales : records
    product_dim ||--o| fact_sales : contains
    store_dim ||--o| fact_sales : located_in
    supplier_dim ||--o| fact_sales : supplies`
          }
        ],
        diagrams: [
          {
            title: 'Data Lineage Overview',
            description: 'Comprehensive data lineage showing the flow from source to final analytics-ready data.',
            imageUrl: 'https://github.com/user-attachments/assets/a035c0df-681a-4a1e-81c2-5dc2b4049363'
          },
          {
            title: 'Detailed Data Lineage',
            description: 'Detailed view of data transformations and relationships between models.',
            imageUrl: 'https://github.com/user-attachments/assets/f753b7da-ec45-4982-bfeb-703507006f21'
          },
          {
            title: 'Project Overview',
            description: 'High-level overview of the DBT-Orchestrator project structure and components.',
            imageUrl: 'https://github.com/user-attachments/assets/00a8d9f3-3488-44ab-a7b8-7c0b2a3a772b'
          },
          {
            title: 'Overview Dashboard',
            description: 'Power BI dashboard showing high-level business metrics and KPIs.',
            imageUrl: 'https://github.com/user-attachments/assets/ae9de47a-25ae-4716-a479-a96f8db6a3e9'
          },
          {
            title: 'Order Details Dashboard',
            description: 'Detailed order analysis dashboard with granular insights.',
            imageUrl: 'https://github.com/user-attachments/assets/02cdb1a9-7f69-47a5-afff-9aadf397433c'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/DBT-Orchestrator',
      demo: '',
      lessons: [
        'Importance of modular data modeling for maintainability',
        'Benefits of comprehensive data lineage documentation',
        'Value of proper dimensional modeling for analytics',
        'Impact of automated orchestration on data pipeline reliability'
      ]
    },
    {
      id: 'northwind-oltp-olap',
      title: 'Northwind Database OLTP to OLAP Transformation',
      subtitle: 'Leveraging dimensional modeling for advanced analytics',
      category: 'Data Warehousing',
      difficulty: 'Intermediate',
      status: 'Completed',
      featured: false,
      problem: {
        title: 'The Challenge',
        description: 'A company needed to modernize their data reporting solution for the Northwind database by transforming the existing OLTP (Online Transaction Processing) system into an OLAP (Online Analytical Processing) system using dimensional modeling for advanced analytics.',
        challenges: [
          'Transforming OLTP schema to OLAP dimensional model',
          'Implementing SCD Type 2 for historical tracking',
          'Designing efficient star schema for sales analytics',
          'Building automated ETL pipeline with Python',
          'Ensuring data quality and consistency in transformation'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a comprehensive OLTP to OLAP transformation using dimensional modeling, SCD Type 2 implementation, and automated ETL pipeline with Python and PostgreSQL.',
        architecture: {
          overview: 'OLTP to OLAP transformation with dimensional modeling',
          components: [
            {
              name: 'Data Source',
              tech: ['Northwind Database', 'PostgreSQL'],
              description: 'OLTP source system with transactional data'
            },
            {
              name: 'ETL Pipeline',
              tech: ['Python', 'Apache Airflow'],
              description: 'Automated data extraction and transformation'
            },
            {
              name: 'Dimensional Model',
              tech: ['Star Schema', 'PostgreSQL'],
              description: 'OLAP optimized for analytical queries'
            },
            {
              name: 'SCD Implementation',
              tech: ['Type 2 Logic', 'Python'],
              description: 'Historical tracking for dimension changes'
            },
            {
              name: 'Data Warehouse',
              tech: ['PostgreSQL', 'Docker'],
              description: 'Containerized analytics-ready storage'
            }
          ]
        },
        keyFeatures: [
          'OLTP to OLAP transformation with dimensional modeling',
          'SCD Type 2 implementation for historical tracking',
          'Automated ETL pipeline with Python and Airflow',
          'Star schema design for sales analytics',
          'Containerized deployment with Docker'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The transformation successfully modernized the data reporting solution, providing a robust foundation for advanced analytics and business intelligence.',
        metrics: [
          {
            metric: '4',
            label: 'Dimension Tables',
            description: 'Customers, Employees, Products, Date'
          },
          {
            metric: '1',
            label: 'Fact Table',
            description: 'Sales analytics with comprehensive metrics'
          },
          {
            metric: 'SCD Type 2',
            label: 'Historical Tracking',
            description: 'Complete change history for dimensions'
          },
          {
            metric: '100%',
            label: 'Automation',
            description: 'Fully automated ETL pipeline'
          }
        ],
        businessImpact: [
          'Improved analytical query performance',
          'Enhanced historical data analysis capabilities',
          'Better business intelligence and reporting',
          'Reduced time to insights through automation',
          'Scalable architecture for future growth'
        ]
      },
      technicalDetails: {
        technologies: ['Python', 'PostgreSQL', 'Apache Airflow', 'Docker', 'SQL', 'ETL', 'Dimensional Modeling'],
        codeSnippets: [
          {
            title: 'Database Schema - Dimension Tables',
            language: 'sql',
            code: `-- dim_customers: Contains information about customers
Columns: customer_id, company, last_name, first_name, email_address, 
         job_title, business_phone, home_phone, mobile_phone, fax_number, 
         address, city, state_province, zip_postal_code, country_region, 
         web_page, notes, attachments, start_date, end_date, active_flag, version

-- dim_employee: Contains information about employees  
Columns: employee_id, company, last_name, first_name, email_address, 
         job_title, business_phone, home_phone, mobile_phone, fax_number, 
         address, city, state_province, zip_postal_code, country_region, 
         web_page, notes, attachments, start_date, end_date, active_flag, version

-- dim_product: Contains information about products
Columns: product_id, product_code, product_name, description, standard_cost, 
         list_price, reorder_level, target_level, quantity_per_unit, 
         discontinued, minimum_reorder_quantity, category, attachments

-- fact_sales: Contains sales data
Columns: order_id, product_id, employee_id, customer_id, order_date, 
         payment_type, quantity, unit_price, discount, status_id`
          },
          {
            title: 'ETL Pipeline Functions',
            language: 'python',
            code: `# transform_data.py
def Get_Customerdim():
    # Selects columns needed from the Customers table
    pass

def Get_productdim():
    # Selects columns needed from the Products table
    pass

def Get_Employeedim():
    # Selects columns needed from the Employees table
    pass

def Get_factSales():
    # Selects columns needed from the Orders and Order Details tables
    pass

# tables_creation.py
def load_dimCustomers():
    # Load transformed customer data with SCD Type 2
    pass

def load_DIM_Employee():
    # Load transformed employee data with SCD Type 2
    pass

def load_DIM_Products():
    # Load transformed product data with SCD Type 1
    pass

def load_fact():
    # Load transformed sales data into fact table
    pass`
          }
        ],
        diagrams: [
          {
            title: 'Northwind OLTP ERD',
            description: 'Entity Relationship Diagram showing the original OLTP database structure with all entities and relationships.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/OLAP_Dimensional_Modeling_for_Advanced_Analytics/assets/111503676/3e6d12ef-fa3a-4f03-82fb-c867b65bc343'
          },
          {
            title: 'Pipeline Flowchart',
            description: 'Data flow diagram showing the ETL process from OLTP to OLAP transformation.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/OLAP_Dimensional_Modeling_for_Advanced_Analytics/assets/111503676/04b45fb2-fd07-4ec2-94cb-43506e1944a1'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/OLAP_Dimensional_Modeling_for_Advanced_Analytics',
      demo: '',
      lessons: [
        'Importance of proper OLTP to OLAP transformation',
        'Benefits of SCD Type 2 for historical data tracking',
        'Value of dimensional modeling for analytical queries',
        'Impact of automated ETL pipelines on data processing efficiency'
      ]
    },
    {
      id: 'ecommerce-data-pipeline',
      title: 'Comprehensive E-commerce Data Pipeline',
      subtitle: 'End-to-end data pipeline with Medallion architecture for e-commerce analytics',
      category: 'Data Engineering',
      difficulty: 'Intermediate',
      status: 'Completed',
      featured: false,
      problem: {
        title: 'The Challenge',
        description: 'A company needed to build an end-to-end data pipeline for e-commerce data that could combine generated sales data with external sources, perform data transformations and aggregations, and store the final dataset in a database to enable analysis and derive insights into customer behavior and sales performance.',
        challenges: [
          'Building a modern data pipeline with Medallion architecture',
          'Implementing SCD Type 2 logic for historical tracking',
          'Designing efficient star schema for analytics',
          'Creating automated data transformation workflows',
          'Ensuring data quality and consistency across layers'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a comprehensive e-commerce data pipeline using Medallion architecture with Bronze, Silver, and Gold layers, implementing SCD Type 2 logic for historical tracking and automated data transformation workflows.',
        architecture: {
          overview: 'Medallion architecture with progressive data quality improvement',
          components: [
            {
              name: 'Data Sources',
              tech: ['CSV Files', 'External Sources'],
              description: 'E-commerce data stored in CSV format with external data integration'
            },
            {
              name: 'Bronze Layer',
              tech: ['PostgreSQL', 'CSV'],
              description: 'Raw data landing zone with unified storage format'
            },
            {
              name: 'Silver Layer',
              tech: ['Python', 'PostgreSQL'],
              description: 'Data cleaning and deduplication with dimension extraction'
            },
            {
              name: 'Gold Layer',
              tech: ['PostgreSQL', 'Star Schema'],
              description: 'Analytics-ready data with SCD Type 2 implementation'
            },
            {
              name: 'Orchestration',
              tech: ['Apache Airflow', 'Python'],
              description: 'Automated workflow management and scheduling'
            },
            {
              name: 'Reporting',
              tech: ['Power BI', 'PostgreSQL'],
              description: 'Business intelligence and analytics dashboards'
            }
          ]
        },
        keyFeatures: [
          'Medallion architecture with Bronze, Silver, Gold layers',
          'SCD Type 2 implementation for historical tracking',
          'Star schema design for efficient analytics',
          'Automated data transformation workflows',
          'Comprehensive data quality controls'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The comprehensive e-commerce data pipeline successfully enabled advanced analytics and business intelligence capabilities with proper historical data tracking and automated data processing.',
        metrics: [
          {
            metric: '3',
            label: 'Data Layers',
            description: 'Bronze, Silver, Gold architecture'
          },
          {
            metric: '4',
            label: 'Dimension Tables',
            description: 'Customers, Products, Stores, Date'
          },
          {
            metric: '1',
            label: 'Fact Table',
            description: 'Sales analytics with comprehensive metrics'
          },
          {
            metric: 'SCD Type 2',
            label: 'Historical Tracking',
            description: 'Complete change history for dimensions'
          }
        ],
        businessImpact: [
          'Improved customer behavior analysis capabilities',
          'Enhanced sales performance insights',
          'Better data quality and consistency',
          'Automated data processing workflows',
          'Scalable architecture for future growth'
        ]
      },
      technicalDetails: {
        technologies: ['Python', 'PostgreSQL', 'Apache Airflow', 'Docker', 'Power BI', 'CSV', 'Medallion Architecture'],
        codeSnippets: [
          {
            title: 'Data Transformation Process',
            language: 'python',
            code: `# transform_data.py
def process_Ecommrese_data():
    # Get data from bronze layer and remove duplicates
    # Extract dimensions and load to silver layer
    pass

# tables_creation.py
def load_customer_dim():
    # Load transformed customer data with SCD Type 2
    pass

def load_store_dim():
    # Load transformed store data
    pass

def load_product_dim():
    # Load transformed product data with SCD Type 2
    pass

def load_sales_fact():
    # Load transformed sales data into fact table
    pass`
          },
          {
            title: 'Database Schema - Star Schema',
            language: 'sql',
            code: `-- dim_customers: Customer information with SCD Type 2
Columns: customer_id, name, segment, start_date, end_date, is_current

-- fact_sales: Sales analytics with comprehensive metrics
Columns: order_id, customer_id, product_id, order_detail, quantity, 
         SALES, order_date, store_id, Discount, PROFIT, SHIP_COST

-- dim_stores: Store information
Columns: store_id, MARKET, REGION, country

-- dim_product_master: Product information with SCD Type 2
Columns: product_id, product_name, CATEGORY, SUBCATEGORY, 
         start_date, end_date, is_current`
          }
        ],
        diagrams: [
          {
            title: 'Architecture Overview',
            description: 'High-level architecture showing the Medallion architecture with Bronze, Silver, and Gold layers.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline/assets/111503676/f9f4f600-137f-48af-bd2b-edc2799f76cd'
          },
          {
            title: 'Data Model',
            description: 'Star schema data model showing relationships between dimensions and fact tables.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline/assets/111503676/fc4acd78-51ee-4611-a3c3-ff986004b513'
          },
          {
            title: 'Summary Dashboard',
            description: 'Power BI summary dashboard showing high-level e-commerce metrics and KPIs.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline/assets/111503676/7b1b29df-ac8a-47e8-9ce2-33c01f68c1b1'
          },
          {
            title: 'Orders Details Dashboard',
            description: 'Power BI orders details dashboard showing granular order analytics and insights.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline/assets/111503676/519a7fd9-6c3a-40e4-b533-5e8c179c7416'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline',
      demo: '',
      lessons: [
        'Benefits of Medallion architecture for data quality improvement',
        'Importance of SCD Type 2 for historical data tracking',
        'Value of star schema design for analytics performance',
        'Impact of automated workflows on data processing efficiency'
      ]
    },
    {
      id: 'ecommerce-dwh',
      title: 'E-commerce Data Warehouse',
      subtitle: 'Comprehensive data solution using SQL Server, SSIS, and Power BI',
      category: 'Data Warehousing',
      difficulty: 'Intermediate',
      status: 'Completed',
      featured: false,
      problem: {
        title: 'The Challenge',
        description: 'A company needed to design and implement a comprehensive data solution for e-commerce operations using SQL Server, SSIS (SQL Server Integration Services), and Power BI to create a unified data warehouse and enable data visualization and reporting.',
        challenges: [
          'Designing and implementing a comprehensive data warehouse solution',
          'Creating efficient ETL processes using SSIS',
          'Building dimensional models with star schema approach',
          'Developing interactive dashboards and reports with Power BI',
          'Managing large volumes of e-commerce data efficiently'
        ]
      },
      solution: {
        title: 'The Solution',
        description: 'Designed and implemented a comprehensive e-commerce data solution using SQL Server for data storage, SSIS for ETL processes, and Power BI for data visualization and reporting with a dimensional modeling approach.',
        architecture: {
          overview: 'SQL Server-based data warehouse with SSIS ETL and Power BI reporting',
          components: [
            {
              name: 'Data Storage',
              tech: ['SQL Server'],
              description: 'Database management system for storing and managing large volumes of data'
            },
            {
              name: 'ETL Processing',
              tech: ['SSIS'],
              description: 'SQL Server Integration Services for extracting, transforming, and loading data'
            },
            {
              name: 'Data Warehouse',
              tech: ['SQL Server', 'Star Schema'],
              description: 'Unified and optimized repository with dimensional modeling approach'
            },
            {
              name: 'Data Visualization',
              tech: ['Power BI'],
              description: 'Interactive dashboards and reporting for business insights'
            },
            {
              name: 'Dimensional Modeling',
              tech: ['Star Schema'],
              description: 'Optimized data structure for efficient querying and reporting'
            }
          ]
        },
        keyFeatures: [
          'SQL Server-based data warehouse with efficient data management',
          'SSIS ETL processes for data extraction and transformation',
          'Dimensional modeling with star schema approach',
          'Power BI dashboards and interactive reporting',
          'Comprehensive data solution for e-commerce operations'
        ]
      },
      results: {
        title: 'The Results',
        description: 'The E-commerce data warehouse solution successfully provided a unified data repository with efficient ETL processes and comprehensive reporting capabilities for business intelligence.',
        metrics: [
          {
            metric: 'SQL Server',
            label: 'Data Storage',
            description: 'Efficient database management system'
          },
          {
            metric: 'SSIS',
            label: 'ETL Processing',
            description: 'Automated data extraction and transformation'
          },
          {
            metric: 'Star Schema',
            label: 'Data Modeling',
            description: 'Optimized dimensional modeling approach'
          },
          {
            metric: 'Power BI',
            label: 'Reporting',
            description: 'Interactive dashboards and visualization'
          }
        ],
        businessImpact: [
          'Improved data accessibility and reporting capabilities',
          'Enhanced business intelligence and decision-making',
          'Streamlined ETL processes and data management',
          'Better data visualization and stakeholder insights',
          'Scalable data warehouse solution for future growth'
        ]
      },
      technicalDetails: {
        technologies: ['SQL Server', 'SSIS', 'Power BI', 'Star Schema', 'ETL', 'Data Warehousing'],
        codeSnippets: [
          {
            title: 'Data Warehouse Architecture',
            language: 'markdown',
            code: `Key Components:

SQL Server: Database management system for storing and managing large volumes of data efficiently.

SSIS (SQL Server Integration Services): ETL tool for extracting, transforming, and loading data from various sources into the Data Warehouse.

Data Warehouse (DW): A unified and optimized repository of data designed to support efficient querying and reporting. It follows a dimensional modeling approach (star schema).

Power BI: Data visualization, interactive dashboards, and reporting tool for gaining valuable insights from the Data Warehouse.`
          },
          {
            title: 'Star Schema Design',
            language: 'sql',
            code: `-- Example Star Schema Structure
-- Fact Table
CREATE TABLE fact_sales (
    sale_id INT PRIMARY KEY,
    customer_id INT,
    product_id INT,
    date_id INT,
    quantity INT,
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES dim_customer(customer_id),
    FOREIGN KEY (product_id) REFERENCES dim_product(product_id),
    FOREIGN KEY (date_id) REFERENCES dim_date(date_id)
);

-- Dimension Tables
CREATE TABLE dim_customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    customer_segment VARCHAR(50),
    customer_country VARCHAR(50)
);

CREATE TABLE dim_product (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    product_category VARCHAR(50),
    product_price DECIMAL(10,2)
);

CREATE TABLE dim_date (
    date_id INT PRIMARY KEY,
    full_date DATE,
    year INT,
    month INT,
    day INT,
    quarter INT
);`
          }
        ],
        diagrams: [
          {
            title: 'E-commerce Data Warehouse Architecture',
            description: 'High-level architecture showing the complete data warehouse solution with SQL Server, SSIS, and Power BI.',
            imageUrl: 'https://github.com/MAHMOUDMAMDOH8/E-commerce-DWH/assets/111503676/8e223347-6d1a-4298-981a-399b92a3cf59'
          }
        ]
      },
      github: 'https://github.com/MAHMOUDMAMDOH8/E-commerce-DWH',
      demo: '',
      lessons: [
        'Benefits of SQL Server for enterprise data warehouse solutions',
        'Importance of SSIS for automated ETL processes',
        'Value of dimensional modeling with star schema for analytics',
        'Impact of Power BI for business intelligence and reporting'
      ]
    }
  ]

  const selectedCaseStudy = selectedCase ? caseStudies.find(cs => cs.id === selectedCase) : null

  if (!isLoaded) {
    return (
      <CaseStudiesPageShell>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-zinc-300 border-t-cyan-600 dark:border-white/10 dark:border-t-cyan-400" />
            <p className="text-sm text-zinc-500">Loading case studies…</p>
          </div>
        </div>
      </CaseStudiesPageShell>
    )
  }

  if (selectedCaseStudy) {
    const currentIndex = caseStudies.findIndex((cs) => cs.id === selectedCase) + 1

    return (
      <CaseStudiesPageShell>
        <CaseStudiesNav
          variant="detail"
          onBack={() => setSelectedCase(null)}
          onPrev={goToPreviousCase}
          onNext={goToNextCase}
          currentIndex={currentIndex}
          total={caseStudies.length}
        />

        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <AnimatePresence>
            <motion.div
              key="case-study-detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-none backdrop-blur-md">
                <div className="relative h-64 bg-gradient-to-br from-cyan-600/90 via-violet-700/90 to-[#0a1628] md:h-80">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_50%)]" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white sm:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-100">
                        {selectedCaseStudy.category}
                      </span>
                      <span className="rounded-full border border-white/15 bg-black/15 px-3 py-1 text-xs font-medium text-zinc-200">
                        {selectedCaseStudy.difficulty}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
                        {selectedCaseStudy.status}
                      </span>
                    </div>
                    <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                      {selectedCaseStudy.title}
                    </h1>
                    <p className="mt-3 max-w-3xl text-pretty text-base text-cyan-50/90 sm:text-lg">{selectedCaseStudy.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Problem-Solution Story Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-3">
                    <FaLightbulb className="text-xl text-amber-300" />
                  </div>
                  <h2 className={csHeading}>Problem-Solution Story</h2>
                </div>
                <div className={`${csBodyMuted} leading-relaxed space-y-4`}>
                  <p><span className="font-semibold text-rose-400">The Challenge:</span> {selectedCaseStudy.problem.description}</p>
                  <p><span className="font-semibold text-cyan-400">My Approach:</span> {selectedCaseStudy.solution.description}</p>
                  <p><span className="font-semibold text-emerald-400">The Outcome:</span> {selectedCaseStudy.results.description}</p>
                </div>
              </div>

              {/* Problem Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-rose-500/25 bg-rose-500/10 p-3">
                    <FaLightbulb className="text-xl text-rose-300" />
                  </div>
                  <h2 className={csHeading}>{selectedCaseStudy.problem.title}</h2>
                </div>
                <p className={`${csBody} mb-6 leading-relaxed`}>{selectedCaseStudy.problem.description}</p>
                <div className="space-y-3">
                  {selectedCaseStudy.problem.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-rose-400" />
                      <span className={csBodyMuted}>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-cyan-500/25 bg-cyan-500/10 p-3">
                    <FaCogs className="text-xl text-cyan-300" />
                  </div>
                  <h2 className={csHeading}>{selectedCaseStudy.solution.title}</h2>
                </div>
                <p className={`${csBody} mb-6 leading-relaxed`}>{selectedCaseStudy.solution.description}</p>
                
                {/* Architecture */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Architecture Overview</h3>
                  <p className="text-zinc-400 mb-6">{selectedCaseStudy.solution.architecture.overview}</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedCaseStudy.solution.architecture.components.map((component, index) => (
                      <div key={index} className={csCardInner}>
                        <h4 className="mb-2 font-semibold text-white">{component.name}</h4>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {component.tech.map((tech, techIndex) => (
                            <span key={techIndex} className={csChip}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-zinc-400">{component.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCaseStudy.solution.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FaCheckCircle className="flex-shrink-0 text-cyan-400" />
                        <span className={csBodyMuted}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-3">
                    <FaTrophy className="text-xl text-emerald-300" />
                  </div>
                  <h2 className={csHeading}>{selectedCaseStudy.results.title}</h2>
                </div>
                <p className="text-zinc-400 mb-8 leading-relaxed">{selectedCaseStudy.results.description}</p>
                
                {/* Metrics */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {selectedCaseStudy.results.metrics.map((metric, index) => (
                    <div key={index} className="rounded-xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6 text-center">
                      <div className="mb-2 text-3xl font-bold tabular-nums text-cyan-300">{metric.metric}</div>
                      <div className="mb-1 text-sm font-semibold text-white">{metric.label}</div>
                      <div className="text-xs text-zinc-400">{metric.description}</div>
                    </div>
                  ))}
                </div>

                {/* Business Impact */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Business Impact</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedCaseStudy.results.businessImpact.map((impact, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <FaCheckCircle className="flex-shrink-0 text-cyan-400" />
                        <span className={csBodyMuted}>{impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-violet-500/25 bg-violet-500/10 p-3">
                    <FaCode className="text-xl text-violet-300" />
                  </div>
                  <h2 className={csHeading}>Technical Details</h2>
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedCaseStudy.technicalDetails.technologies.map((tech, index) => (
                      <span key={index} className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 font-medium text-violet-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippets */}
                <div className="space-y-6">
                  {selectedCaseStudy.technicalDetails.codeSnippets.map((snippet, index) => (
                    <div key={index} className="rounded-xl border border-white/10 bg-[#030305] p-5">
                      <h4 className="mb-3 font-semibold text-white">{snippet.title}</h4>
                      <pre className="overflow-x-auto text-sm text-cyan-200/90">
                        <code>{snippet.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>

                {/* Diagrams */}
                {selectedCaseStudy.technicalDetails.diagrams && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Diagrams</h3>
                    <div className="grid gap-6">
                      {selectedCaseStudy.technicalDetails.diagrams.map((diagram, index) => (
                        <div key={index} className={csCardInner}>
                          <h4 className="mb-2 font-semibold text-white">{diagram.title}</h4>
                          <p className="mb-4 text-sm text-zinc-400">{diagram.description}</p>
                          <div className={csCodeBlock}>
                            <img
                              src={diagram.imageUrl}
                              alt={diagram.title}
                              className="h-auto w-full rounded-md"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Lessons Learned */}
              <div className={csCard}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-3">
                    <FaLightbulb className="text-xl text-amber-300" />
                  </div>
                  <h2 className={csHeading}>Lessons Learned</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCaseStudy.lessons.map((lesson, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="mt-1 flex-shrink-0 text-amber-400" />
                      <span className={csBodyMuted}>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={selectedCaseStudy.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold text-[#050508] transition hover:brightness-110"
                >
                  <FaGithub />
                  <span>View code</span>
                </a>
                {selectedCaseStudy.demo && (
                  <a
                    href={selectedCaseStudy.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:border-cyan-500/40 dark:border-white/15 dark:bg-white/[0.06] dark:text-white"
                  >
                    <FaExternalLinkAlt />
                    <span>Live demo</span>
                  </a>
                )}
              </div>

              <div className={csFloatingNav}>
                <button
                  type="button"
                  onClick={goToPreviousCase}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-cyan-500/40 hover:text-cyan-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-cyan-300"
                  aria-label="Previous case study"
                >
                  <FaArrowLeft size={16} />
                </button>

                <div className="min-w-[3rem] text-center text-xs font-medium tabular-nums text-zinc-500">
                  {(() => {
                    const currentIndex = caseStudies.findIndex((cs) => cs.id === selectedCase) + 1
                    return `${currentIndex} / ${caseStudies.length}`
                  })()}
                </div>

                <button
                  type="button"
                  onClick={goToNextCase}
                  className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:border-cyan-500/40 hover:text-cyan-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-cyan-300"
                  aria-label="Next case study"
                >
                  <FaArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </CaseStudiesPageShell>
    )
  }

  const featuredCount = caseStudies.filter((cs) => cs.featured).length

  return (
    <CaseStudiesPageShell showDataFlow>
      <CaseStudiesNav />

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {isLoaded ? <CaseStudiesListHero count={caseStudies.length} featuredCount={featuredCount} /> : null}

          {/* Case Studies Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {isLoaded && caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedCase(caseStudy.id)
                    }
                  }}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-cyan-500/35 hover:shadow-md dark:border-white/[0.06] dark:bg-white/[0.02] dark:shadow-none dark:hover:border-cyan-500/25 dark:hover:bg-white/[0.04]"
                  onClick={() => setSelectedCase(caseStudy.id)}
                >
                  <div className="relative h-44 bg-gradient-to-br from-cyan-600/90 via-violet-700/80 to-[#0a1628] sm:h-48">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_55%)] transition-opacity group-hover:opacity-90" />
                    <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
                      <div className="flex items-start justify-between gap-2">
                        <span className="rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-100">
                          {caseStudy.category}
                        </span>
                        {caseStudy.featured ? (
                          <span className="rounded-full bg-amber-400/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#050508]">
                            Featured
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <h3 className="text-balance text-lg font-semibold leading-snug">{caseStudy.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-cyan-100/85">{caseStudy.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-zinc-200 p-5 dark:border-white/[0.06]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
                      <span className="inline-flex items-center gap-1.5">
                        <FaClock />
                        {caseStudy.status}
                      </span>
                      <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-medium text-emerald-800 dark:text-emerald-200">
                        {caseStudy.difficulty}
                      </span>
                    </div>
                    <button
                      type="button"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 py-2.5 text-sm font-semibold text-zinc-900 transition group-hover:border-cyan-500/35 group-hover:text-cyan-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:group-hover:text-cyan-200"
                    >
                      <FaEye className="text-xs" />
                      View details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </CaseStudiesPageShell>
  )
} 