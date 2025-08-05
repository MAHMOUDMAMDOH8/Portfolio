'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPhone,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaDownload,
  FaCheckCircle,
  FaCertificate,
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaTerminal,
  FaServer,
  FaCodeBranch,
  FaAward,
  FaTools,
  FaProjectDiagram,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaTrophy,
  FaSun,
  FaMoon,
  FaPython,
  FaDocker,
  FaLinux,
  FaWindows,
  FaGitAlt,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaComment,
  FaPaperPlane
} from 'react-icons/fa'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Default to dark mode
      setIsDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update document class and save preference
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const downloadResume = () => {
    window.open('https://drive.google.com/drive/folders/1r_W7J5KxBZpHfO5mf29G9qRon9PtXeZA', '_blank');
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', level: 80, icon: FaPython },
        { name: 'SQL', level: 80, icon: FaDatabase },
        { name: 'Spark', level: 60, icon: FaRocket },
        { name: 'C#', level: 60, icon: FaCode }
      ]
    },
    {
      category: 'Orchestration & Workflow',
      items: [
        { name: 'Apache Airflow', level: 75, icon: FaProjectDiagram },
        { name: 'Mage', level: 70, icon: FaTools }
      ]
    },
    {
      category: 'ETL & ELT Tools',
      items: [
        { name: 'dbt', level: 90, icon: FaDatabase },
        { name: 'SSIS', level: 80, icon: FaTools }
      ]
    },
    {
      category: 'Big Data Technologies',
      items: [
        { name: 'Hadoop', level: 80, icon: FaServer },
        { name: 'Hive', level: 70, icon: FaDatabase }
      ]
    },
    {
      category: 'Data Streaming',
      items: [
        { name: 'Kafka', level: 60, icon: FaProjectDiagram }
      ]
    },
    {
      category: 'Data Warehousing',
      items: [
        { name: 'Snowflake', level: 75, icon: FaCloud },
        { name: 'Dimensional Modeling', level: 75, icon: FaDatabase },
        { name: 'Medallion Architecture', level: 75, icon: FaProjectDiagram }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', level: 80, icon: FaDatabase },
        { name: 'MySQL', level: 70, icon: FaDatabase },
        { name: 'MS SQL Server', level: 70, icon: FaDatabase }
      ]
    },
    {
      category: 'Business Intelligence',
      items: [
        { name: 'Power BI', level: 85, icon: FaChartLine },
        { name: 'SSAS', level: 60, icon: FaDatabase },
        { name: 'SSRS', level: 60, icon: FaChartLine },
        { name: 'Excel', level: 75, icon: FaChartLine }
      ]
    },
    {
      category: 'Containerization',
      items: [
        { name: 'Docker', level: 75, icon: FaDocker }
      ]
    },
    {
      category: 'Version Control',
      items: [
        { name: 'Git', level: 75, icon: FaGitAlt },
        { name: 'GitHub', level: 75, icon: FaGithub }
      ]
    },
    {
      category: 'Operating Systems',
      items: [
        { name: 'Linux', level: 90, icon: FaLinux },
        { name: 'Windows', level: 90, icon: FaWindows }
      ]
    },
    {
      category: 'Data Quality',
      items: [
        { name: 'Data Quality Checks', level: 75, icon: FaCheckCircle },
        { name: 'Schema Validation', level: 70, icon: FaCheckCircle }
      ]
    }
  ]

  const projects = [
    {
      title: 'End-to-End Big Data Pipeline for E-commerce Event Logs',
      description: 'Comprehensive big data pipeline for processing, storing, and analyzing e-commerce event logs. Features Kafka for high-throughput streaming ingestion, HDFS for robust raw storage, Spark processing with PostgreSQL for analytics, Apache Airflow orchestration, dbt models for dimensional schema, Streamlit for real-time monitoring, and Power BI for comprehensive business insights.',
      tech: ['Kafka', 'HDFS', 'Spark', 'PostgreSQL', 'Apache Airflow', 'dbt', 'Streamlit', 'Power BI', 'Docker', 'Python'],
      tools: ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'dbt (Data Build Tool)', 'PostgreSQL', 'HDFS', 'Streamlit', 'Power BI', 'Docker', 'Python', 'SQL', 'Jupyter Notebooks', 'Git', 'GitHub Actions'],
      concepts: ['Real-time Data Streaming', 'Event-Driven Architecture', 'Data Lake Design', 'Medallion Architecture', 'Dimensional Modeling', 'Data Quality Management', 'CI/CD for Data', 'Monitoring & Alerting', 'Business Intelligence', 'Data Visualization'],
      github: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing',
      demo: 'https://mahmoud-ecommerce-dashboard.streamlit.app',
      featured: true,
      date: 'Aug 2025'
    },
    {
      title: 'Telecom Streaming Pipeline',
      description: 'Near real-time streaming data pipeline for telecom events (calls, SMS). Kafka and HDFS for data ingestion, Spark processing with Snowflake storage, Medallion Architecture implementation, Apache Airflow orchestration, dbt models with SCD Type 2 logic, Power BI dashboards for user activity, cell site performance, and regional trends.',
      tech: ['Kafka', 'HDFS', 'Spark', 'Snowflake', 'dbt', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
      tools: ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'Snowflake', 'dbt', 'Docker', 'Python', 'Power BI', 'SQL', 'Git', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana'],
      concepts: ['Streaming Data Architecture', 'Medallion Architecture', 'SCD Type 2 Implementation', 'Real-time Analytics', 'Data Pipeline Orchestration', 'Cloud Data Warehouse', 'Data Modeling', 'Business Intelligence', 'Operational Monitoring'],
      github: 'https://github.com/MAHMOUDMAMDOH8/telecom-streaming-pipeline',
      demo: '',
      featured: false,
      date: 'May 2025'
    },
    {
      title: 'ELT-Engine',
      description: 'Scalable ELT pipeline leveraging Apache Airflow for orchestration and dbt for data transformations in Snowflake. Implements Medallion Architecture (Bronze, Silver, Gold layers) to optimize data processing workflows for advanced analytics, featuring interactive Power BI dashboards for comprehensive business insights visualization.',
      tech: ['SQL', 'dbt', 'Snowflake', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
      tools: ['Apache Airflow', 'dbt', 'Snowflake', 'Docker', 'Python', 'Power BI', 'SQL', 'Git', 'Terraform', 'Azure DevOps', 'Data Vault', 'Star Schema'],
      concepts: ['ELT Architecture', 'Medallion Architecture', 'Data Vault Modeling', 'Cloud Data Engineering', 'Data Pipeline Design', 'Business Intelligence', 'Data Governance', 'Performance Optimization', 'Scalable Architecture'],
      github: 'https://github.com/MAHMOUDMAMDOH8/elt-engine',
      demo: '',
      featured: false,
      date: 'Mar 2025'
    },
    {
      title: 'E2E-ELT-Data-Pipeline',
      description: 'End-to-end data-aware ELT pipeline engineered with Apache Airflow orchestration and Python automation. Features dbt transformations for data modeling, PostgreSQL as the primary data warehouse, and interactive Power BI dashboards delivering actionable business intelligence and data-driven insights.',
      tech: ['SQL', 'Python', 'dbt', 'Apache Airflow', 'PostgreSQL', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/e2e-elt-data-pipeline',
      demo: '',
      featured: false,
      date: '2025'
    },
    {
      title: 'OLAP Dimensional Modeling for Advanced Analytics',
      description: 'Comprehensive OLAP data warehouse solution implementing dimensional modeling techniques for advanced analytics. Features Docker containerization for scalable deployment, Apache Airflow for ETL orchestration, and customized visualization components tracking key business performance metrics and operational KPIs.',
      tech: ['Python', 'SQL', 'Docker', 'Apache Airflow', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/olap-dimensional-modeling',
      demo: '',
      featured: false,
      date: '2025'
    },
    {
      title: 'DBT-Orchestrator',
      description: 'Data transformation orchestration platform leveraging dbt for SQL-based transformations and Apache Airflow for workflow management. Implements automated testing, documentation generation, and lineage tracking for maintainable data transformation pipelines.',
      tech: ['Python', 'dbt', 'Apache Airflow', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/dbt-orchestrator',
      demo: '',
      featured: false,
      date: 'Mar 2025'
    },
    {
      title: 'OLAPify',
      description: 'OLAP data warehouse solution implementing dimensional modeling for advanced analytics. Features star schema design, aggregated data marts, automated cube processing, and optimized query performance for business intelligence and reporting applications.',
      tech: ['Python', 'SQL', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/MAHMOUDMAMDOH8/olapify',
      demo: '',
      featured: false,
      date: 'Dec 2024'
    },
    {
      title: 'Northwind Project (ETL & Building DWH & Data Analysis)',
      description: 'Enterprise-grade data warehouse solution extracting data from operational systems using SSIS ETL workflows. Implements SQL Server Analysis Services (SSAS) cubes for multidimensional data analysis, star schema design with SCD Type 2 logic, and interactive Power BI dashboards for comprehensive sales, customer, and product analytics.',
      tech: ['SSIS', 'SSAS', 'SQL Server', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/northwind-project',
      demo: '',
      featured: false,
      date: '2024-2025'
    },
    {
      title: 'E2E-ELT-pipeline',
      description: 'End-to-end ELT pipeline with data-aware orchestration using Apache Airflow. Implements PostgreSQL data warehouse, automated data quality validation, error handling, and monitoring for reliable data integration and transformation workflows.',
      tech: ['Python', 'SQL', 'Apache Airflow', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/e2e-elt-pipeline',
      demo: '',
      featured: false,
      date: 'Oct 2024'
    },
    {
      title: 'E2E E-commerce Data Pipeline',
      description: 'Complete e-commerce data pipeline processing customer transactions, inventory, and sales data. Implements automated ETL workflows, dimensional modeling for analytics, real-time inventory tracking, and business intelligence dashboards for retail performance optimization.',
      tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/MAHMOUDMAMDOH8/e2e-ecommerce-data-pipeline',
      demo: '',
      featured: false,
      date: 'Jun 2024'
    },
    {
      title: 'E-commerce Data Analysis Pipeline',
      description: 'Data analysis pipeline for e-commerce business intelligence focusing on customer behavior, sales trends, and market insights. Features statistical analysis, data visualization, customer segmentation, and predictive analytics for data-driven business decision making.',
      tech: ['Python', 'Pandas', 'SQL', 'Jupyter Notebook'],
      github: 'https://github.com/MAHMOUDMAMDOH8/ecommerce-data-analysis-pipeline',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'E-commerce DWH',
      description: 'Enterprise data warehouse solution for e-commerce analytics using Microsoft SQL Server stack. Features SSIS ETL processes, dimensional modeling, automated data integration from multiple sources, and Power BI reporting for comprehensive business intelligence.',
      tech: ['T-SQL', 'SQL Server', 'SSIS', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/ecommerce-dwh',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'TLC Trip Pipeline Data Engineering',
      description: 'NYC Taxi and Limousine Commission trip data engineering project analyzing transportation patterns and operational metrics. Implements data cleaning, transformation, statistical analysis, and visualization for urban transportation insights and trend analysis.',
      tech: ['Jupyter Notebook', 'Python', 'Pandas', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/tlc-trip-pipeline-data-engineering',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'TLC Trip Data Pipeline Project',
      description: 'Automated data pipeline for TLC trip data processing with Apache Airflow orchestration. Features containerized deployment, PostgreSQL data warehouse, automated data quality checks, and scheduled processing for continuous transportation analytics.',
      tech: ['Python', 'Apache Airflow', 'Docker', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/tlc-trip-data-pipeline-project',
      demo: '',
      featured: false,
      date: 'Apr 2024'
    },
    {
      title: 'Uber Data Pipeline',
      description: 'Real-time ride-sharing data pipeline processing trip information, driver analytics, and operational metrics. Implements streaming data architecture with Kafka ingestion, Spark processing, GCP cloud storage, and real-time dashboards for operational intelligence.',
      tech: ['Python', 'Apache Kafka', 'Spark', 'Google Cloud Platform'],
      github: 'https://github.com/MAHMOUDMAMDOH8/uber-data-pipeline',
      demo: '',
      featured: false,
      date: '2024'
    },
    {
      title: 'Bike Store Analytics',
      description: 'Retail analytics solution for bike store operations analyzing sales performance, inventory management, and customer insights. Features comprehensive data modeling, automated reporting, and business intelligence dashboards for retail optimization.',
      tech: ['SQL Server', 'Power BI', 'T-SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/bike-store',
      demo: '',
      featured: false,
      date: 'Nov 2023'
    },
    {
      title: 'ETL Telecom',
      description: 'Telecommunications data integration solution implementing ETL processes for customer data, call records, and network analytics. Features automated data extraction, transformation workflows, and data quality validation for telecom business intelligence.',
      tech: ['T-SQL', 'SSIS', 'SQL Server'],
      github: 'https://github.com/MAHMOUDMAMDOH8/etl-telecom',
      demo: '',
      featured: false,
      date: 'Sep 2023'
    },
    {
      title: 'AdventureWorks Analysis',
      description: 'Comprehensive business analysis of AdventureWorks sample database focusing on sales performance, product analytics, and customer segmentation. Features advanced SQL queries, data visualization, and business intelligence reporting for enterprise insights.',
      tech: ['SQL Server', 'Power BI', 'T-SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/adventureworks-analysis',
      demo: '',
      featured: false,
      date: 'Aug 2023'
    },
    {
      title: 'Northwind Traders Analysis',
      description: 'Business intelligence analysis of Northwind Traders database examining sales trends, customer behavior, and operational efficiency. Features interactive dashboards, KPI tracking, and comprehensive reporting for data-driven business insights.',
      tech: ['Power BI', 'SQL', 'Excel'],
      github: 'https://github.com/MAHMOUDMAMDOH8/northwind-traders-analysis',
      demo: '',
      featured: false,
      date: 'Aug 2023'
    },
    {
      title: 'DataCamp Project',
      description: 'Data science and analysis projects from DataCamp certification coursework. Features statistical analysis, data manipulation, visualization techniques, and machine learning fundamentals for comprehensive data science skill development.',
      tech: ['Jupyter Notebook', 'Python', 'Pandas'],
      github: 'https://github.com/MAHMOUDMAMDOH8/datacamp-project',
      demo: '',
      featured: false,
      date: 'Jul 2023'
    },
    {
      title: 'Adidas Market Analysis',
      description: 'Market analysis of Adidas sales data examining regional performance, product trends, and market penetration. Features comprehensive data visualization, trend analysis, and business intelligence reporting for strategic market insights.',
      tech: ['Power BI', 'Excel', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/adidas-market-analysis',
      demo: '',
      featured: false,
      date: 'Jul 2023'
    },
    {
      title: 'HR Analysis',
      description: 'Human resources analytics solution analyzing employee performance, retention patterns, and organizational metrics. Features workforce analytics, predictive modeling for turnover, and comprehensive HR dashboards for strategic workforce management.',
      tech: ['Power BI', 'Excel', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/hr-analysis',
      demo: '',
      featured: false,
      date: 'Jul 2023'
    }
  ]

  const experiences = [
    {
      title: 'Business Intelligence Analyst',
      company: 'Addiction Treatment Center',
      period: 'Jul 2024 - Oct 2024',
      type: 'Internship',
      location: 'Cairo, Egypt',
      description: 'Designed and developed Power BI dashboards to monitor customer satisfaction.',
      achievements: [
        'Designed and developed Power BI dashboards to monitor customer satisfaction',
        'Created interactive visualizations for key business metrics'
      ],
      technologies: ['Power BI', 'SQL', 'Data Visualization', 'Customer Analytics']
    },
    {
      title: 'Data Analysis Professional Internship',
      company: 'ASDC',
      period: 'Nov 2023 - Jan 2024',
      type: 'Internship',
      location: 'October, Cairo',
      description: 'Created an interactive dashboard using Power BI to visualize key business metrics.',
      achievements: [
        'Created an interactive dashboard using Power BI to visualize key business metrics',
        'Developed ETL pipelines for data processing',
        'Performed data analysis and generated insights',
        'Collaborated with cross-functional teams on data requirements'
      ],
      technologies: ['Power BI', 'SQL', 'Data Analysis', 'Business Intelligence']
    }
  ]

  const bootcamps = [
    {
      title: 'Data Engineering Zoomcamp',
      organization: 'DataTalks Club',
      period: 'Jan 2025 - May 2025',
      description: 'Comprehensive program covering modern data engineering technologies and best practices.',
      skills: [
        'Data ingestion, orchestration (Airflow), transformation (dbt)',
        'Docker and cloud (GCP)',
        'Built real-world ELT project using Medallion Architecture',
        'Modern data stack tools'
      ],
      tools: ['Apache Airflow', 'dbt', 'Docker', 'Google Cloud Platform', 'PostgreSQL', 'Terraform', 'Kubernetes', 'Data Build Tool', 'Medallion Architecture', 'ELT Pipelines', 'Data Orchestration', 'Cloud Deployment'],
      concepts: ['Data Pipeline Design', 'ETL vs ELT', 'Data Lake Architecture', 'Data Warehouse Design', 'Data Quality Management', 'CI/CD for Data', 'Infrastructure as Code', 'Containerization', 'Microservices Architecture'],
      icon: FaDatabase,
      color: 'bg-blue-500'
    },
    {
      title: 'Business Intelligence Track',
      organization: 'Information Technology Institute (ITI)',
      period: 'Jul 2023 - Aug 2023',
      description: 'Intensive training program focused on BI tools and data visualization techniques.',
      skills: [
        'Data modeling, ETL pipelines',
        'Power BI dashboard development',
        'Data warehouse solutions and business analytics',
        'Microsoft stack and open tools'
      ],
      tools: ['SQL', 'Excel', 'Power BI', 'SSIS', 'SSAS', 'SSRS', 'DWH', 'DAX'],
      concepts: ['Dimensional Modeling', 'Star Schema', 'Snowflake Schema', 'ETL Process Design', 'Data Mart Design', 'Business Intelligence', 'KPI Development', 'Dashboard Design', 'Data Storytelling', 'Performance Optimization'],
      icon: FaChartLine,
      color: 'bg-green-500'
    }
  ]

  const certifications = [
    {
      title: 'Data Engineering Zoomcamp',
      issuer: 'DataTalks Club',
      year: 'April 2025',
      summary: 'Comprehensive program covering modern data engineering technologies including data ingestion, orchestration with Airflow, transformation with dbt, Docker containerization, and cloud deployment on GCP.',
      skills: ['Apache Airflow', 'dbt', 'Docker', 'GCP', 'Medallion Architecture', 'ELT Pipelines'],
      icon: FaDatabase,
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Business Intelligence Train ITI',
      issuer: 'Information Technology Institute (ITI)',
      year: 'July 2023',
      summary: 'Intensive training program focused on BI tools and data visualization techniques for business intelligence and analytics.',
      skills: ['Power BI', 'Data Modeling', 'ETL Pipelines', 'Data Visualization', 'Business Analytics'],
      icon: FaChartLine,
      color: 'from-green-600 to-green-700'
    },
    {
      title: 'Data Engineering Foundations',
      issuer: 'IBM',
      year: 'November 2023',
      summary: 'Foundational course covering core data engineering concepts, big data technologies, and data pipeline development.',
      skills: ['Big Data', 'Hadoop', 'Spark', 'Data Pipelines', 'Data Architecture'],
      icon: FaCloud,
      color: 'from-purple-600 to-purple-700'
    },
    {
      title: 'Data Engineer',
      issuer: 'Datacamp',
      year: 'October 2023',
      summary: 'Comprehensive data engineering certification covering Python, SQL, and data processing techniques for building scalable data solutions.',
      skills: ['Python', 'SQL', 'Data Processing', 'ETL', 'Data Analysis'],
      icon: FaAward,
      color: 'from-orange-600 to-orange-700'
    },
    {
      title: 'Google Business Intelligence',
      issuer: 'Google',
      year: 'May 2023',
      summary: 'Google-certified program focusing on business intelligence tools, data analysis, and creating actionable insights for business decision-making.',
      skills: ['Google Analytics', 'Data Analysis', 'Business Intelligence', 'Reporting', 'Data Visualization'],
      icon: FaChartLine,
      color: 'from-red-600 to-red-700'
    }
  ]

  // Helper function to determine project category
  const getProjectCategory = (title, description) => {
    const titleLower = title.toLowerCase();
    
    // Manual mapping for specific projects
    if (titleLower.includes('dbt-orchestrator') || titleLower.includes('elt-engine') ||
        titleLower.includes('olap dimensional modeling for advanced analytics') || titleLower.includes('olapify')) {
      return 'Analytics Engineer';
    }
    
    if (titleLower.includes('e-commerce dwh') || titleLower.includes('bike store analytics') ||
        titleLower.includes('adventureworks analysis') || titleLower.includes('hr analysis') ||
        titleLower.includes('northwind project (etl & building dwh & data analysis)') || 
        titleLower.includes('northwind traders analysis') || titleLower.includes('adidas market analysis')) {
      return 'BI Engineer';
    }
    
    // Default to Data Engineer for all other projects
    return 'Data Engineer';
  };

  // Helper function to get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Data Engineer':
        return { color: 'from-red-600 to-red-700', borderColor: 'border-red-600' };
      case 'Analytics Engineer':
        return { color: 'from-blue-600 to-blue-700', borderColor: 'border-blue-600' };
      case 'BI Engineer':
        return { color: 'from-green-600 to-green-700', borderColor: 'border-green-600' };
      default:
        return { color: 'from-red-600 to-red-700', borderColor: 'border-red-600' };
    }
  };

  // Enhanced animations and effects
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const slideInFromLeft = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInFromRight = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold gradient-text"
              >
                Mahmoud Mamdoh Soliman
              </motion.div>
              
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => smoothScroll(item.id)}
                    className={`text-sm transition-colors ${
                      activeSection === item.id 
                        ? 'text-red-600' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-red-600" />
                <span>Cairo, Egypt</span>
              </div>
              
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </motion.button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className="block w-full text-left px-6 py-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 data-pattern relative overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Photo */}
            <motion.div 
              className="mb-12 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Enhanced Photo Container with Multiple Glow Effects */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-red-600/40 shadow-2xl shadow-red-600/30 group">
                  {/* Multiple Glow Backgrounds for Enhanced Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-red-700/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 delay-100"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-green-600/15 to-yellow-600/15 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 delay-200"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full overflow-hidden">
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="Mahmoud Mamdoh Soliman"
                      fill
                      className="object-cover rounded-full group-hover:scale-110 transition-transform duration-700 ease-out"
                      priority
                    />
                    
                    {/* Enhanced Hover Overlay with Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out rounded-full"></div>
                  </div>
                  
                  {/* Enhanced Animated Border with Multiple Layers */}
                  <div className="absolute inset-0 rounded-full border-2 border-red-600/60 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border border-red-400/40 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                  
                  {/* Outer Glow Ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced Floating Elements with Better Positioning */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-xl border-2 border-white/20"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaCode />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-xl border-2 border-white/20"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <FaDatabase />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -right-12 w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xl border-2 border-white/20"
                  animate={{ 
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <FaChartLine />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 -left-12 w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-xl border-2 border-white/20"
                  animate={{ 
                    x: [0, -15, 0],
                    scale: [1, 1.2, 1],
                    rotate: [0, -180, -360]
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <FaRocket />
                </motion.div>
                
                {/* Additional Floating Elements */}
                <motion.div 
                  className="absolute top-8 -right-16 w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border border-white/20"
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  <FaPython />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 -left-16 w-8 h-8 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg border border-white/20"
                  animate={{ 
                    y: [0, 10, 0],
                    x: [0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                >
                  <FaDocker />
                </motion.div>
                
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <motion.path
                    d="M 50% 50% L 80% 20%"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    animate={{ 
                      strokeDashoffset: [0, -10],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.path
                    d="M 50% 50% L 20% 80%"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    animate={{ 
                      strokeDashoffset: [0, -10],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 gradient-text"
              animate={pulseAnimation}
            >
              Mahmoud Mamdoh Soliman
            </motion.h1>
            
            <motion.div 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 min-h-[3rem] flex items-center justify-center"
              animate={floatingAnimation}
            >
              <span className="text-red-600 mr-2">&gt;</span>
              <Typewriter
                words={[
                  'Data Engineer',
                  'big data engineer',
                  'BI engineer', 
                  'ETL Developer',
                  'Pipeline Architect',
                  'Data Analyst',
                  'Analytics Engineer'   
                ]}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Transforming data into actionable insights that drive strategic decisions and accelerate business growth. 
              Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('projects')} 
                className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25 border-0"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center space-x-3">
                  <FaExternalLinkAlt className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-lg font-bold">View Projects</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-red-400/50 group-hover:border-red-300 transition-colors duration-300"></div>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume} 
                className="btn-secondary relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaDownload className="mr-2 relative z-10" />
                <span className="relative z-10">View CV</span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('contact')} 
                className="btn-secondary relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <FaEnvelope className="mr-2 relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Social Links with Enhanced Animations */}
            <motion.div 
              className="flex gap-6 justify-center"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                href="https://github.com/MAHMOUDMAMDOH8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors p-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors p-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.3, y: -8, rotate: 360 }}
                href="mailto:mahmoud.mamdoh0812@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors p-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Achievements & Expertise</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Proven track record in data engineering and analytics with comprehensive project experience
              </p>
            </div>

            {/* Achievement Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 relative"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top Colored Section */}
                <div className="h-32 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-30">
                      <FaProjectDiagram />
                    </div>
                  </div>
                  <div className="relative z-10 p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">+30</div>
                    <div className="text-xl font-semibold">Projects Completed</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Comprehensive data engineering projects demonstrating expertise across the modern data stack
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 relative"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top Colored Section */}
                <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-30">
                      <FaTrophy />
                    </div>
                  </div>
                  <div className="relative z-10 p-6 text-white text-center">
                    <div className="text-4xl font-bold mb-2">+1</div>
                    <div className="text-xl font-semibold">Year of Experience</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    Professional experience in data engineering, business intelligence, and analytics roles
                  </p>
                  <div className="mt-4 flex justify-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
              
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Data Engineer focused on transforming data into actionable insights that drive strategic decisions and accelerate business growth. 
                  Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks to improve operational efficiency and scalability. 
                  Collaborative and impact-driven.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaGraduationCap className="text-red-600" />
                    <span>Computer Science and Mathematics graduate from Menofia University (2021-2025)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-red-600" />
                    <span>Cairo, Egypt (open to relocate)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Data Engineer Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start space-x-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <FaDatabase className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Building scalable ETL pipelines, data warehouses, and real-time streaming solutions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Spark</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Hadoop</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Kafka</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">Airflow</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">SQL</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Analytics Engineer Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start space-x-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <FaChartLine className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Analytics Engineer</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Designing and implementing data models for advanced analytics and business intelligence
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">dbt</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">Snowflake</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">Python</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs">SQL</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* BI Developer Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start space-x-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">BI Developer</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Creating interactive dashboards and reports for data-driven decision making
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Power BI</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">SSAS</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">SSRS</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Excel</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Analyst Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start space-x-4 p-6">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Data Analyst</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      Transforming raw data into actionable insights for business strategy and optimization
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">Python</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">Pandas</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">SQL</span>
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">Excel</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding section-alt">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Experience</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Professional experience in data engineering and business intelligence roles
              </p>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 relative"
                  whileHover={{ 
                    rotateY: 1,
                    rotateX: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Top Colored Section */}
                  <div className="h-32 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl opacity-30">
                        <FaDatabase />
                      </div>
                    </div>
                    <div className="relative z-10 p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                          <p className="text-red-200 font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="text-red-600" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <FaCalendarAlt className="text-red-600" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                        <FaCheckCircle className="text-green-600" />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <FaCheckCircle className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                        <FaTools className="text-red-600" />
                        <span>Technologies Used</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <motion.span 
                            key={idx} 
                            className="px-3 py-2 bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium border border-red-200 dark:border-red-700 hover:border-red-300 dark:hover:border-red-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bootcamps Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Bootcamps & Training</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Continuous learning through intensive training programs and bootcamps
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {bootcamps.map((bootcamp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 relative"
                  whileHover={{ 
                    rotateY: 1,
                    rotateX: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Top Colored Section */}
                  <div className={`h-32 bg-gradient-to-r ${bootcamp.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl opacity-30">
                        <bootcamp.icon />
                      </div>
                    </div>
                    <div className="relative z-10 p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{bootcamp.title}</h3>
                          <p className="text-white/80 font-medium">{bootcamp.organization}</p>
                        </div>
                        <div className="text-right">
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                            {bootcamp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{bootcamp.description}</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                          <FaCheckCircle className="text-green-600" />
                          <span>Skills Gained</span>
                        </h4>
                        <ul className="space-y-3">
                          {bootcamp.skills.map((skill, idx) => (
                            <motion.li 
                              key={idx} 
                              className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <FaCheckCircle className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                          <FaTools className="text-blue-600" />
                          <span>Tools & Technologies</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {bootcamp.tools.map((tool, idx) => (
                            <motion.span 
                              key={idx} 
                              className="px-3 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {tool}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                          <FaLightbulb className="text-green-600" />
                          <span>Concepts Learned</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {bootcamp.concepts.map((concept, idx) => (
                            <motion.span 
                              key={idx} 
                              className="px-3 py-2 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-600 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            >
                              {concept}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding section-alt">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Projects</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Showcase of data engineering projects demonstrating modern data stack expertise
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-2 border border-gray-200/20 dark:border-gray-700/50">
                {['All', 'Data Engineer', 'Analytics Engineer', 'BI Engineer'].map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(() => {
                const filteredProjects = projects.filter(project => {
                  if (selectedCategory === 'All') return true;
                  return getProjectCategory(project.title, project.description) === selectedCategory;
                });

                if (filteredProjects.length === 0) {
                  return (
                    <div className="col-span-full text-center py-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                      >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          No projects found for "{selectedCategory}"
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                          Try selecting a different category or check back later for new projects.
                        </p>
                        <button
                          onClick={() => setSelectedCategory('All')}
                          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                        >
                          View All Projects
                        </button>
                      </motion.div>
                    </div>
                  );
                }

                return filteredProjects.map((project, index) => {
                  const category = getProjectCategory(project.title, project.description);
                  const { color, borderColor } = getCategoryColor(category);

                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2"
                      whileHover={{ 
                        rotateY: 2,
                        rotateX: 2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Full Width Image Section with Hover Overlay */}
                      <div className={`relative h-48 bg-gradient-to-br ${color} overflow-hidden`}>
                        {/* Background Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl text-white opacity-30">
                            {/* Data Engineer Icon */}
                            {category === 'Data Engineer' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                              </svg>
                            ) : 
                            /* Analytics Engineer Icon */
                            category === 'Analytics Engineer' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3v18h18"></path>
                                <path d="M18 17V9"></path>
                                <path d="M13 17V5"></path>
                                <path d="M8 17v-3"></path>
                              </svg>
                            ) : 
                            /* BI Engineer Icon */
                            category === 'BI Engineer' ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                                <polyline points="16 7 22 7 22 13"></polyline>
                              </svg>
                            ) : 
                            /* Default Data Engineer Icon */
                            (
                              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                              </svg>
                            )}
                          </div>
                        </div>
                        
                        {/* Hover Overlay with Action Buttons */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                          >
                            <FaGithub className="w-6 h-6" />
                          </a>
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                            >
                              <FaExternalLinkAlt className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        {/* Project Title */}
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technology Stack with Icons */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 4).map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                              {/* Technology Icons */}
                              {tech.toLowerCase().includes('python') ? (
                                <FaPython className="w-4 h-4 text-blue-600" />
                              ) : tech.toLowerCase().includes('sql') ? (
                                <FaDatabase className="w-4 h-4 text-green-600" />
                              ) : tech.toLowerCase().includes('docker') ? (
                                <FaDocker className="w-4 h-4 text-blue-500" />
                              ) : tech.toLowerCase().includes('kafka') ? (
                                <FaProjectDiagram className="w-4 h-4 text-orange-500" />
                              ) : tech.toLowerCase().includes('spark') ? (
                                <FaRocket className="w-4 h-4 text-red-500" />
                              ) : tech.toLowerCase().includes('airflow') ? (
                                <FaProjectDiagram className="w-4 h-4 text-blue-600" />
                              ) : tech.toLowerCase().includes('dbt') ? (
                                <FaDatabase className="w-4 h-4 text-orange-600" />
                              ) : tech.toLowerCase().includes('power bi') ? (
                                <FaChartLine className="w-4 h-4 text-yellow-600" />
                              ) : tech.toLowerCase().includes('postgresql') ? (
                                <FaDatabase className="w-4 h-4 text-blue-700" />
                              ) : tech.toLowerCase().includes('snowflake') ? (
                                <FaCloud className="w-4 h-4 text-blue-400" />
                              ) : tech.toLowerCase().includes('hadoop') ? (
                                <FaServer className="w-4 h-4 text-gray-600" />
                              ) : tech.toLowerCase().includes('hive') ? (
                                <FaDatabase className="w-4 h-4 text-purple-600" />
                              ) : tech.toLowerCase().includes('git') ? (
                                <FaGitAlt className="w-4 h-4 text-orange-600" />
                              ) : tech.toLowerCase().includes('linux') ? (
                                <FaLinux className="w-4 h-4 text-yellow-600" />
                              ) : tech.toLowerCase().includes('windows') ? (
                                <FaWindows className="w-4 h-4 text-blue-600" />
                              ) : (
                                <FaCode className="w-4 h-4 text-gray-600" />
                              )}
                              <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                            </div>
                          ))}
                          {project.tech.length > 4 && (
                            <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                              <FaCode className="w-4 h-4 text-gray-600" />
                              <span className="text-gray-700 dark:text-gray-300">+{project.tech.length - 4} more</span>
                            </div>
                          )}
                        </div>

                        {/* Statistics Section */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="text-center">
                            <div className="text-sm font-bold text-red-600 dark:text-red-400">
                              {project.featured ? 'Featured' : 'Active'}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Status</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-bold text-red-600 dark:text-red-400">
                              {project.date}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Date</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-bold text-red-600 dark:text-red-400">
                              {category}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Category</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-bold text-red-600 dark:text-red-400">
                              {project.tech.length}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Technologies</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-2">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                          >
                            <FaGithub className="w-4 h-4" />
                            <span>Code</span>
                          </a>
                          {project.demo && (
                            <a 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                });
              })()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Skills</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Technical expertise across modern data engineering tools and technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 relative"
                  whileHover={{ 
                    rotateY: 1,
                    rotateX: 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Top Colored Section */}
                  <div className="h-24 bg-gradient-to-r from-gray-600 to-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 p-4 text-white">
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.items.map((skill, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                                <skill.icon className="text-red-600 dark:text-red-400 text-lg" />
                              </div>
                              <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                            </div>
                            <span className="text-red-600 dark:text-red-400 font-bold text-lg">{skill.level}%</span>
                          </div>
                          <div className="relative">
                            <div className="skill-bar bg-gray-200 dark:bg-gray-600 h-3 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="skill-progress h-full rounded-full relative"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-20 animate-pulse"></div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding section-alt">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Education</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Academic background and continuous learning journey
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:scale-105 hover:-translate-y-2 relative"
                whileHover={{ 
                  rotateY: 1,
                  rotateX: 1,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Top Colored Section */}
                <div className="h-32 bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-30">
                      <FaGraduationCap />
                    </div>
                  </div>
                  <div className="relative z-10 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Bachelor's in Computer Science and Mathematics</h3>
                        <p className="text-red-200 font-medium">Menofia University</p>
                      </div>
                      <div className="text-right">
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                          Graduated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <FaMapMarkerAlt className="text-red-600" />
                      <span className="text-sm">Menofia, Egypt</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <FaCalendarAlt className="text-red-600" />
                      <span className="text-sm">2021 - 2025</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Completed a comprehensive Bachelor's degree that combines theoretical computer science with mathematical foundations, 
                    providing a strong base for data engineering and analytics work.
                  </p>
                  
                  {/* Skills Section */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                      <FaTools className="text-red-600" />
                      <span>Key Skills & Concepts</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures', 'Algorithms', 'Object-Oriented Programming', 'C#', 
                        'System Design', 'Database Design', 'Software Engineering', 'Mathematics', 
                        'Problem Solving', 'Computer Architecture', 'Operating Systems'
                      ].map((skill, idx) => (
                        <motion.span 
                          key={idx}
                          className="px-3 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Certifications</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Professional certifications demonstrating expertise in data engineering and business intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Full Width Image Section with Hover Overlay */}
                  <div className={`relative h-48 bg-gradient-to-br ${cert.color} overflow-hidden`}>
                    {/* Background Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-white opacity-30">
                        {/* DataTalks Club Icon */}
                        {cert.issuer.toLowerCase().includes('datatalks') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                          </svg>
                        ) : 
                        /* ITI Icon */
                        cert.issuer.toLowerCase().includes('iti') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                          </svg>
                        ) : 
                        /* IBM Icon */
                        cert.issuer.toLowerCase().includes('ibm') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21,15 16,10 5,21"></polyline>
                          </svg>
                        ) : 
                        /* Datacamp Icon */
                        cert.issuer.toLowerCase().includes('datacamp') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                          </svg>
                        ) : 
                        /* Google Icon */
                        cert.issuer.toLowerCase().includes('google') ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                          </svg>
                        ) : 
                        /* Default Icon */
                        (
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                            <path d="M2 17l10 5 10-5"></path>
                            <path d="M2 12l10 5 10-5"></path>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {/* Hover Overlay with Action Buttons */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <div className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                        <FaCertificate className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Certification Title */}
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h3>
                    </div>

                    {/* Issuer */}
                    <p className="text-red-600 font-medium mb-3">{cert.issuer}</p>

                    {/* Summary */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                      {cert.summary}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-100/80 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="text-center">
                        <div className="text-sm font-bold text-red-600 dark:text-red-400">
                          {cert.year}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Year</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-red-600 dark:text-red-400">
                          {cert.skills.length}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Skills</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-red-600 dark:text-red-400">
                          {cert.issuer.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Issuer</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-red-600 dark:text-red-400">
                          Certified
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Status</div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                        <FaCertificate className="w-4 h-4" />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding section-alt">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Contact</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Open to relocate for the right opportunity. Let's discuss how I can contribute to your data engineering initiatives.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Email</p>
                      <a href="mailto:mahmoud.mamdoh0812@gmail.com" className="text-red-600 hover:text-red-500 transition-colors">
                        mahmoud.mamdoh0812@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Phone</p>
                      <a href="tel:+201102007021" className="text-red-600 hover:text-red-500 transition-colors">
                        +(20) 1102007021
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaLinkedin className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">LinkedIn</p>
                      <a href="https://linkedin.com/in/mahmoud-mamdoh-47a68a203/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">
                        /in/mahmoud-mamdoh-47a68a203
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaGithub className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">GitHub</p>
                      <a href="https://github.com/MAHMOUDMAMDOH8" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">
                        @MAHMOUDMAMDOH8
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Cairo, Egypt (open to relocate)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Send Message</h3>
                <form className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaUser className="text-red-600" />
                      <span>Name</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaEnvelope className="text-red-600" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="subject" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaTag className="text-red-600" />
                      <span>Subject</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1"
                      placeholder="What's this about?"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-gray-900 dark:text-white font-medium mb-2 flex items-center space-x-2">
                      <FaComment className="text-red-600" />
                      <span>Message</span>
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200/80 dark:border-gray-700/50 rounded-xl text-gray-900 dark:text-white focus:border-red-600 focus:outline-none transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 shadow-sm hover:shadow-md focus:shadow-lg focus:shadow-red-600/20 transform hover:-translate-y-1 focus:-translate-y-1 resize-none"
                      placeholder="Your message..."
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-4"
                  >
                    <motion.button 
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:shadow-2xl hover:shadow-red-600/25 border-0 relative overflow-hidden group"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                      
                      {/* Button Content */}
                      <div className="relative z-10 flex items-center justify-center space-x-3">
                        <FaPaperPlane className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-lg font-bold">Send Message</span>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Border Glow */}
                      <div className="absolute inset-0 rounded-xl border-2 border-red-400/50 group-hover:border-red-300 transition-colors duration-300"></div>
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-light dark:from-gray-900/80 dark:via-gray-900/90 dark:to-gray-900/80 backdrop-blur-md border-t border-gray-200/80 dark:border-gray-700/50 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Mahmoud Mamdoh Soliman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 