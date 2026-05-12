/** All portfolio copy and structured content — keep in sync with site sections. */

export const heroStats = [
  { label: 'End-to-End Pipelines', value: '18+' },
  { label: 'From Raw Data → Insight' },
  { label: 'Dashboards Delivered', value: '6+' }
]

export const offerings = [
  {
    title: 'Multisystem Integrations',
    body: 'Connecting commerce, ERP, and support sources into a single Iceberg-backed analytics lakehouse.'
  },
  {
    title: 'From Raw to Ready',
    body: 'Transforming raw Kafka or HDFS data into analytics-ready layers using Spark, Hadoop ecosystem tooling, dbt, and Snowflake — complete with validation, lineage, and schema evolution handling.'
  },
  {
    title: 'Automation & Observability',
    body: 'Automating data workflows with Airflow DAGs, adding real-time quality checks, and exposing metrics and pipeline health through Streamlit and logging dashboards.'
  }
]

export const experience = [
  {
    period: 'Apr 2026 – Present · iSchool, Egypt',
    role: 'Part-Time Coding Instructor',
    summary:
      'Deliver live online coding sessions in Python for students aged 6–18; simplify complex programming concepts into interactive, age-appropriate lessons; guide students in hands-on projects (e.g. simple games and applications) to reinforce practical skills.'
  },
  {
    period: 'Jul 2024 – Oct 2024 · Addiction Treatment Center, Cairo',
    role: 'Business Intelligence Analyst (Internship)',
    summary:
      'Developed interactive Power BI dashboards that improved visibility into KPIs including customer satisfaction metrics, treatment success rates, and clinic operational efficiency, reducing manual reporting time by ~30%.'
  },
  {
    period: '2023 · ASDC',
    role: 'Data Analysis Intern',
    summary:
      'Delivered ETL flows and analytics assets for commercial teams, standardising KPIs and improving visibility into operational performance.'
  }
]

export const education = {
  institution: 'Menofia University, Faculty of Science',
  degree: 'Bachelor of Computer Science and Mathematics',
  period: 'Sep 2021 – 2025',
  detail:
    'Graduated 2025 · Relevant coursework: Data Structures, Algorithms, Database Systems, Statistics'
}

export const projects = [
  {
    title: 'Telecom Data Analytics Hub',
    badge: 'TA',
    category: 'Telecom Analytics Platform',
    timeline: 'Feb 2026',
    summary:
      'End-to-end telecom analytics platform ingesting events from Kafka into PostgreSQL via NiFi, modelled with a Bronze/Gold medallion pattern in dbt and surfaced for BI.',
    stack: ['Kafka', 'Apache NiFi', 'PostgreSQL', 'dbt', 'Docker', 'SQL', 'Python', 'Power BI'],
    highlights: [
      'Real-time ingestion with NiFi and Kafka across 5+ topics with validation, routing, and centralized error handling into PostgreSQL raw event tables.',
      'Medallion (Bronze/Gold) architecture with a galaxy schema of fact and dimension tables in dbt, including SCD Type 2 snapshots.',
      'Data quality enforced with dbt tests (not_null, unique, relationships) and centralized failure storage; Gold-layer models served to Power BI dashboards.',
      'dbt project with incremental models, CDC snapshots, star-schema design, and extensive tests for keys, relationships, and referential integrity.'
    ],
    metrics: [
      { label: 'Kafka topics', value: '5+' },
      { label: 'Gold models', value: '5 facts · 6 dims' },
      { label: 'dbt tests', value: 'Comprehensive' }
    ],
    architectureImage: '/project_image/telecom%20data%20analysis%20hup.png'
  },
  {
    title: 'Event-Driven Telecom Data Lakehouse Platform',
    badge: 'TL',
    category: 'Lakehouse Platform',
    timeline: 'Feb 2026',
    summary:
      'Event-driven telecom data lakehouse that lands Kafka events in MinIO, processes them with Spark into Iceberg Bronze/Silver/Gold tables, and loads a galaxy-schema warehouse in ClickHouse.',
    stack: ['Kafka', 'NiFi', 'MinIO', 'Iceberg (Hadoop Catalog)', 'Spark', 'Airflow', 'ClickHouse', 'Python'],
    highlights: [
      'End-to-end lakehouse for telecom use cases (calls, SMS, payments, recharges, support): real-time events via Kafka, ingested into MinIO through NiFi, processed with Spark on Apache Iceberg (Hadoop catalog) across bronze, silver, and gold namespaces.',
      'Spark-based ETL for validation, enrichment, and quality checks across Silver and Gold; galaxy-schema dimensional model loaded into ClickHouse for analytics.',
      'Airflow DAGs orchestrating Spark jobs from raw landing through dimensional modelling and ClickHouse loads for downstream Power BI analytics.'
    ],
    metrics: [
      { label: 'Medallion layers', value: 'Bronze/Silver/Gold' },
      { label: 'Fact tables', value: '5+' },
      { label: 'Dimensions', value: '6+' }
    ],
    architectureImage: '/project_image/Event-Driven%20Telecom%20Data%20Lakehouse%20Platform.jpg'
  },
  {
    title: 'Multisystem ETL Lakehouse',
    badge: 'ML',
    category: 'Lakehouse Platform',
    timeline: 'Nov 2025',
    summary:
      'Production-style lakehouse that harmonises Magento, Odoo, and Freshdesk sources into curated Iceberg tiers on MinIO, orchestrated with Airflow and surfaced with Streamlit operations dashboards.',
    stack: ['Airbyte', 'MinIO', 'Iceberg', 'Spark', 'Airflow', 'Python'],
    highlights: [
      'End-to-end lakehouse integrating Magento, Odoo, and Freshdesk using the Medallion Architecture; ingested and unified data with Airbyte, stored in Iceberg on MinIO, with transformations in Spark.',
      'Source-specific CDC pipelines with schema evolution handled via Iceberg snapshots; bronze, silver, and executive marts for merchandising, fulfilment, and support KPIs.',
      'Apache Airflow orchestration of ETL pipelines; Streamlit dashboard for data health, freshness, volume, and anomaly SLOs.'
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
    ],
    architectureImage: '/project_image/Multisystem%20ETL%20Lakehouse.png'
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
    ],
    architectureImage:
      '/project_image/End-to-End%20Big%20Data%20Pipeline%20for%20E-commerce%20Event%20Logs.jpeg'
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
    ],
    architectureImage: '/project_image/Telecom%20Streaming%20Pipeline.png'
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
    ],
    architectureImage: '/project_image/ELT-Engine.png'
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
    ],
    architectureImage: '/project_image/olapify.png'
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
    ],
    architectureImage: '/project_image/DBT-Orchestrator.png'
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
    ],
    architectureImage: '/project_image/TLC%20Trip%20Data%20Pipeline%20Project.jpeg'
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
    ],
    architectureImage: '/project_image/E2E-ELT-pipeline.png'
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
    ],
    architectureImage: '/project_image/E2E-ELT-Data-Pipeline.png'
  }
]

export const heroHeadline = "I don’t just move data — I move meaning."

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'origin', label: 'Origin' },
  { id: 'learning', label: 'Learning' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' }
]

export const toolNodes = [
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

export const categoryStyles = {
  Platform: 'text-sky-700 dark:text-sky-400',
  Orchestration: 'text-emerald-700 dark:text-emerald-400',
  Activation: 'text-amber-700 dark:text-amber-300',
  Automation: 'text-violet-700 dark:text-violet-300'
}

export const toolStats = [
  { label: 'Technologies', value: `${toolNodes.length}+` },
  { label: 'Domains', value: 'Data · Analytics · Ops' },
  { label: 'Focus', value: 'Reliable Delivery' }
]

export const marqueeTools = [
  'Medallion Architecture',
  'Apache Spark',
  'Iceberg Lakehouse',
  'Hadoop & Hive',
  'Airflow DAGs',
  'Airbyte',
  'dbt Marts',
  'Change Data Capture',
  'Streamlit Observability',
  'Power BI Storytelling',
  'Snowflake Warehousing'
]

export const originPanels = [
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

export const skillMatrix = [
  {
    label: 'Platforms & Storage',
    level: 92,
    tags: ['Apache Spark', 'Apache Iceberg', 'Hadoop', 'Hive', 'Snowflake', 'S3 / MinIO']
  },
  {
    label: 'Orchestration & Modelling',
    level: 90,
    tags: ['Apache Airflow', 'Mage', 'Airbyte', 'dbt', 'Change Data Capture', 'Dimensional Design']
  },
  {
    label: 'Observability & Activation',
    level: 85,
    tags: ['Streamlit', 'Power BI', 'SSIS', 'SSAS', 'Data Quality SLAs', 'Documentation']
  },
  {
    label: 'Engineering Foundations',
    level: 88,
    tags: ['Python', 'SQL', 'Bash', 'Docker', 'Git', 'GitHub', 'PySpark', 'Pandas']
  }
]

export const impactStats = [
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

export const certifications = [
  {
    name: 'Data Engineering Zoomcamp',
    provider: 'DataTalksClub · Jan–May 2025',
    image: '/Certifications/dezoomcamp.png'
  },
  {
    name: 'Data Engineering Foundations Specialization',
    provider: 'IBM · Nov 2023',
    image: '/Certifications/Data Engineering ibm.png'
  },
  {
    name: 'Data Engineer Career Track',
    provider: 'DataCamp · Oct 2023',
    image: '/Certifications/data enginer using python data camp.png'
  },
  {
    name: 'Google Business Intelligence Professional Certificate',
    provider: 'Coursera · May 2023',
    image: '/Certifications/Google Business Intelligence.jpeg'
  },
  {
    name: 'Associate Data Analyst in SQL',
    provider: 'DataCamp',
    image: '/Certifications/Associate Data Analyst in SQL datacamp.png'
  },
  {
    name: 'SQL for Business Analysts',
    provider: 'DataCamp',
    image: '/Certifications/SQL for Business Analysts datacamp.png'
  },
  {
    name: 'SQL Fundamentals',
    provider: 'DataCamp',
    image: '/Certifications/SQL Fundamentals datacamp.png'
  },
  {
    name: 'Data Analysis Challenger',
    provider: 'Udacity',
    image: '/Certifications/data analysis challenger udacity.png'
  },
  {
    name: 'Power BI Fundamentals',
    provider: 'DataCamp',
    image: '/Certifications/Power BI Fundamentals datacamp.png'
  },
  {
    name: 'Excel Fundamentals',
    provider: 'DataCamp',
    image: '/Certifications/Excel Fundamentals datacamp.png'
  },
  {
    name: 'Business Intelligence Track – Summer Training',
    provider: 'ITI · Menofia · Jul–Aug 2023',
    image: '/Certifications/iti.jpeg'
  }
]

export const learningFocus = [
  {
    label: 'Exploring now',
    items: ['Streaming change tracking with Iceberg', 'Open metadata & data contracts', 'Data observability design systems']
  },
  {
    label: 'Sharing back',
    items: ['Authoring case studies & blog drafts', 'Mentoring peers on CDC & lakehouse patterns', 'Building community playbooks']
  }
]

export const bootcampTraining = [
  {
    label: 'Bootcamps & specialized training',
    items: [
      'Data Engineering Zoomcamp (DataTalks Club, Jan–May 2025): ingestion, Airflow orchestration, dbt transformation, Docker; built a real-world ELT project with Medallion Architecture and a modern data stack.',
      'Business Intelligence Track – Summer Training (ITI, Menofia, Jul–Aug 2023): data warehouse solutions and business analytics with the Microsoft stack and open-source tools.'
    ]
  }
]

/** Scan-friendly focus areas for recruiters — presentation only; all stack detail remains in projects/skills. */
export const recruiterFocusTags = [
  'Data Engineering',
  'Kafka',
  'Spark',
  'Airflow',
  'Snowflake',
  'Docker',
  'Hadoop & Hive',
  'Airbyte',
  'ETL / ELT pipelines',
  'Real-time streaming',
  'Cloud & analytics engineering'
]

export const heroIntro =
  'Data Engineer with a strong foundation in architecting, optimizing, and automating data pipelines to drive business insights and operational efficiency. Skilled in building scalable data solutions using modern tools like Apache Airflow, dbt, and Power BI, with hands-on experience in ETL/ELT, data warehousing, and big data technologies. Passionate about delivering actionable insights and collaborating across teams to solve complex data challenges.'

export const aboutLead =
  'Equal parts engineer and translator — I architect reliable pipelines and make the insights usable for decision-makers.'

export const aboutBody =
  'Bachelor of Computer Science and Mathematics (Menofia University, Faculty of Science, Sep 2021–2025; graduated 2025) with coursework in Data Structures, Algorithms, Database Systems, and Statistics. I specialise in the full data lifecycle — ingestion, modelling, documentation, and activation — and have supported ecommerce, telecom, and operations teams with trustworthy datasets, governed reporting, and dashboards that get used.'

export const contactHeadline = 'Let’s design your next data narrative.'

export const contactBody =
  'Whether you’re validating a new domain, migrating to Iceberg, or tightening analytics governance, I join teams to ship platforms that stakeholders actually adopt.'

export const contactPhoneDisplay = '+20 112 007 021'

export const contactPhoneTel = '+20112007021'
