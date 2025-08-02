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
                View CV
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
                  className="card overflow-hidden"
                >
                  {/* Content Section */}
                  <div className="p-6">
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
                    
                    <div className="space-y-6">
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

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tools & Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {bootcamp.tools.map((tool, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs border border-blue-200 dark:border-blue-700">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Concepts Learned:</h4>
                        <div className="flex flex-wrap gap-2">
                          {bootcamp.concepts.map((concept, idx) => (
                            <span key={idx} className="px-2 py-1 bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs border border-green-200 dark:border-green-700">
                              {concept}
                            </span>
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
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Completed a comprehensive Bachelor's degree that combines theoretical computer science with mathematical foundations, 
                      providing a strong base for data engineering and analytics work.
                    </p>
                    
                    {/* Skills Section */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Skills & Concepts:</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Data Structures
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Algorithms
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Object-Oriented Programming
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          C#
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          System Design
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Database Design
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Software Engineering
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Mathematics
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Problem Solving
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Computer Architecture
                        </span>
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm border border-blue-200 dark:border-blue-700">
                          Operating Systems
                        </span>
                      </div>
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