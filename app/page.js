'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
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
  FaGitAlt
} from 'react-icons/fa'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)

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
    const link = document.createElement('a')
    link.href = '/Mahmoud.Mamdoh.Data.Engineer.pdf'
    link.download = 'Mahmoud_Mamdoh_Data_Engineer_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
        { name: 'Python', level: 75, icon: FaPython },
        { name: 'SQL', level: 75, icon: FaDatabase },
        { name: 'Spark', level: 70, icon: FaRocket },
        { name: 'C#', level: 65, icon: FaCode }
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
        { name: 'dbt', level: 75, icon: FaDatabase },
        { name: 'SSIS', level: 70, icon: FaTools }
      ]
    },
    {
      category: 'Big Data Technologies',
      items: [
        { name: 'Hadoop', level: 70, icon: FaServer },
        { name: 'Hive', level: 65, icon: FaDatabase }
      ]
    },
    {
      category: 'Data Streaming',
      items: [
        { name: 'Kafka', level: 70, icon: FaProjectDiagram }
      ]
    },
    {
      category: 'Data Warehousing',
      items: [
        { name: 'Snowflake', level: 75, icon: FaCloud },
        { name: 'Dimensional Modeling', level: 70, icon: FaDatabase },
        { name: 'Medallion Architecture', level: 75, icon: FaProjectDiagram }
      ]
    },
    {
      category: 'Databases',
      items: [
        { name: 'PostgreSQL', level: 75, icon: FaDatabase },
        { name: 'MySQL', level: 70, icon: FaDatabase },
        { name: 'MS SQL Server', level: 70, icon: FaDatabase }
      ]
    },
    {
      category: 'Containerization',
      items: [
        { name: 'Docker', level: 70, icon: FaDocker }
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
        { name: 'Linux', level: 70, icon: FaLinux },
        { name: 'Windows', level: 65, icon: FaWindows }
      ]
    },
    {
      category: 'Data Quality',
      items: [
        { name: 'Data Quality Checks', level: 70, icon: FaCheckCircle },
        { name: 'Schema Validation', level: 65, icon: FaCheckCircle }
      ]
    }
  ]

  const projects = [
    {
      title: 'End-to-End Big Data Pipeline for E-commerce Event Logs',
      description: 'Comprehensive big data pipeline for processing, storing, and analyzing e-commerce event logs. Features Kafka for high-throughput streaming ingestion, HDFS for robust raw storage, Spark processing with PostgreSQL for analytics, Apache Airflow orchestration, dbt models for dimensional schema, Streamlit for real-time monitoring, and Power BI for comprehensive business insights.',
      tech: ['Kafka', 'HDFS', 'Spark', 'PostgreSQL', 'Apache Airflow', 'dbt', 'Streamlit', 'Power BI', 'Docker', 'Python'],
      github: 'https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing',
      demo: 'https://mahmoud-ecommerce-dashboard.streamlit.app',
      featured: true,
      date: 'Aug 2025'
    },
    {
      title: 'Telecom Streaming Pipeline',
      description: 'Near real-time streaming data pipeline for telecom events (calls, SMS). Kafka and HDFS for data ingestion, Spark processing with Snowflake storage, Medallion Architecture implementation, Apache Airflow orchestration, dbt models with SCD Type 2 logic, Power BI dashboards for user activity, cell site performance, and regional trends.',
      tech: ['Kafka', 'HDFS', 'Spark', 'Snowflake', 'dbt', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/telecom-streaming-pipeline',
      demo: '',
      featured: false,
      date: 'May 2025'
    },
    {
      title: 'ELT-Engine',
      description: 'Scalable ELT pipeline leveraging Apache Airflow for orchestration and dbt for data transformations in Snowflake. Implements Medallion Architecture (Bronze, Silver, Gold layers) to optimize data processing workflows for advanced analytics, featuring interactive Power BI dashboards for comprehensive business insights visualization.',
      tech: ['SQL', 'dbt', 'Snowflake', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
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
        'Created interactive visualizations for key business metrics',
        'Collaborated with stakeholders to understand data requirements',
        'Implemented data quality monitoring and reporting systems'
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
      icon: FaChartLine,
      color: 'bg-green-500'
    }
  ]

  const certifications = [
    {
      title: 'Data Engineering Zoomcamp',
      issuer: 'DataTalks Club',
      year: 'April 2025',
      icon: FaDatabase,
      color: 'bg-blue-500'
    },
    {
      title: 'Business Intelligence Train ITI',
      issuer: 'Information Technology Institute (ITI)',
      year: 'July 2023',
      icon: FaChartLine,
      color: 'bg-green-500'
    },
    {
      title: 'Data Engineering Foundations',
      issuer: 'IBM',
      year: 'November 2023',
      icon: FaCloud,
      color: 'bg-purple-500'
    },
    {
      title: 'Data Engineer',
      issuer: 'Datacamp',
      year: 'October 2023',
      icon: FaAward,
      color: 'bg-orange-500'
    },
    {
      title: 'Google Business Intelligence',
      issuer: 'Google',
      year: 'May 2023',
      icon: FaChartLine,
      color: 'bg-red-500'
    }
  ]

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
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 data-pattern">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Mahmoud Mamdoh Soliman
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 min-h-[3rem] flex items-center justify-center">
              <span className="text-red-600 mr-2">&gt;</span>
              <Typewriter
                words={[
                  'Data Engineer',
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
            </div>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transforming data into actionable insights that drive strategic decisions and accelerate business growth. 
              Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('projects')} 
                className="btn-primary"
              >
                <FaExternalLinkAlt className="mr-2" />
                View Projects
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume} 
                className="btn-secondary"
              >
                <FaDownload className="mr-2" />
                Download CV
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('contact')} 
                className="btn-secondary"
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </motion.button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              <motion.a 
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://github.com/MAHMOUDMAMDOH8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -5 }}
                href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2, y: -5 }}
                href="mailto:mahmoud.mamdoh0812@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
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
                className="card text-center"
              >
                <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <FaProjectDiagram className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">+30</h3>
                <p className="text-xl text-red-600 font-semibold mb-2">Projects Completed</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive data engineering projects demonstrating expertise across the modern data stack
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <FaTrophy className="text-white text-3xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">+1</h3>
                <p className="text-xl text-purple-500 font-semibold mb-2">Year of Experience</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional experience in data engineering, business intelligence, and analytics roles
                </p>
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
                className="card hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="flex items-start space-x-4">
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
                className="card hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="flex items-start space-x-4">
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
                className="card hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="flex items-start space-x-4">
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
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">Tableau</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">SSIS</span>
                      <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded text-xs">SSAS</span>
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
                className="card hover:scale-105 transition-transform duration-300 relative"
              >
                <div className="flex items-start space-x-4">
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
                  className="card"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <p className="text-red-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 lg:mt-0">
                      <span className="text-gray-600 dark:text-gray-300">{exp.period}</span>
                      <span className="text-green-600 dark:text-green-400 text-sm font-medium">{exp.type}</span>
                      <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="text-red-600" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100/80 dark:bg-gray-700/50 rounded-full text-sm text-red-600 dark:text-red-400 border border-red-600/30">
                          {tech}
                        </span>
                      ))}
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
                  className="card"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 rounded-lg ${bootcamp.color}`}>
                      <bootcamp.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{bootcamp.title}</h3>
                      <p className="text-red-600 font-medium">{bootcamp.organization}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{bootcamp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{bootcamp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills Gained:</h4>
                    <ul className="space-y-2">
                      {bootcamp.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FaCheckCircle className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{skill}</span>
                        </li>
                      ))}
                    </ul>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                // Determine category and color based on project title
                const getCategoryAndColor = (title) => {
                  if (title.toLowerCase().includes('streaming') || title.toLowerCase().includes('kafka')) {
                    return { category: 'Streaming', color: 'from-purple-500 to-pink-500', borderColor: 'border-purple-500' };
                  } else if (title.toLowerCase().includes('elt') || title.toLowerCase().includes('etl')) {
                    return { category: 'ETL/ELT', color: 'from-red-600 to-red-700', borderColor: 'border-red-600' };
                  } else if (title.toLowerCase().includes('olap') || title.toLowerCase().includes('dimensional')) {
                    return { category: 'Analytics', color: 'from-green-500 to-emerald-500', borderColor: 'border-green-500' };
                  } else if (title.toLowerCase().includes('dbt')) {
                    return { category: 'Data Modeling', color: 'from-orange-500 to-red-500', borderColor: 'border-orange-500' };
                  } else if (title.toLowerCase().includes('e-commerce') || title.toLowerCase().includes('retail')) {
                    return { category: 'E-commerce', color: 'from-indigo-500 to-purple-500', borderColor: 'border-indigo-500' };
                  } else if (title.toLowerCase().includes('transport') || title.toLowerCase().includes('taxi') || title.toLowerCase().includes('uber')) {
                    return { category: 'Transportation', color: 'from-teal-500 to-blue-500', borderColor: 'border-teal-500' };
                  } else {
                    return { category: 'Data Engineering', color: 'from-gray-500 to-gray-600', borderColor: 'border-gray-500' };
                  }
                };

                const { category, color, borderColor } = getCategoryAndColor(project.title);

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative group project-card border-2 ${borderColor} rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                      project.featured ? 'ring-2 ring-red-500 ring-opacity-50' : ''
                    }`}
                  >
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                        Featured
                      </div>
                    )}

                    {/* Project Icon/Image */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 shadow-lg`}>
                        <FaProjectDiagram className="text-white text-2xl" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${color} text-white`}>
                        {category}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-100/80 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group/btn"
                      >
                        <FaGithub className="group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 group/btn shadow-lg"
                        >
                          <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                      {project.date}
                    </div>

                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
                  </motion.div>
                );
              })}
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
                  className="card"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.items.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <skill.icon className="text-red-600" />
                            <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="skill-progress"
                          />
                        </div>
                      </div>
                    ))}
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
                className="card"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
                    <FaGraduationCap className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                      Bachelor's in Computer Science and Mathematics
                    </h3>
                    <p className="text-red-600 font-medium mb-2">Menofia University</p>
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                      <div className="flex items-center space-x-1">
                        <FaMapMarkerAlt className="text-red-600" />
                        <span>Menofia, Egypt</span>
                      </div>
                      <span>2021 - 2025</span>
                      <span className="text-green-600 dark:text-green-400 font-medium">Graduated</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Completed a comprehensive Bachelor's degree that combines theoretical computer science with mathematical foundations, 
                      providing a strong base for data engineering and analytics work.
                    </p>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="cert-card text-center"
                >
                  <div className={`inline-flex p-4 rounded-lg ${cert.color} mb-4`}>
                    <cert.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-red-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.year}</p>
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
                  <div>
                    <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-900 dark:text-white font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-900 dark:text-white font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </motion.button>
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