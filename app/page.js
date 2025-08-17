'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'
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
  FaPaperPlane,
  FaChartBar,
  FaClock
} from 'react-icons/fa'

// ProjectCard component to handle individual project display with proper state management
const ProjectCard = ({ project, index, getProjectCategory, getCategoryColor, getProjectImage }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  
  const category = getProjectCategory(project.title, project.description);
  const { color, borderColor } = getCategoryColor(category);
  const projectImage = getProjectImage(project.title);

  // Helper function to get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Data Engineer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case 'Analytics Engineer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <path d="M3 3v18h18"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        );
      case 'BI Engineer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      {/* Header with Gradient Background */}
      <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
        <div className="flex items-center justify-between mb-4">
          {getCategoryIcon(category)}
          <div className="flex items-center space-x-2">
            {project.featured ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span className="text-sm font-medium">Featured</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-sm font-medium">Active</span>
              </>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm opacity-90">{category}</p>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span className="text-sm">{project.date}</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">ID: PRJ-{index + 1}-2024</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Stack */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 6).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                {tech}
              </span>
            ))}
            {project.tech.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span>View Code</span>
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showBackToTop, setShowBackToTop] = useState(false)

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
      const sections = ['home', 'about', 'projects', 'dashboards', 'skills', 'contact']
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

      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('mobile-nav-open')
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('mobile-nav-open')
    }
  }, [isMenuOpen])

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
    { id: 'projects', label: 'Projects' },
    { id: 'dashboards', label: 'Dashboards' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  const skills = [
    {
      category: 'Programming Languages',
      icon: 'code',
      items: [
        { name: 'Python', level: 95, color: 'from-green-400 to-green-600' },
        { name: 'SQL', level: 90, color: 'from-blue-400 to-blue-600' },
        { name: 'Linux', level: 80, color: 'from-gray-400 to-gray-600' },
        { name: 'Bash', level: 60, color: 'from-yellow-400 to-yellow-600' }
      ]
    },
    {
      category: 'Big Data & Processing',
      icon: 'database',
      items: [
        { name: 'Apache Spark', level: 60, color: 'from-orange-400 to-orange-600' },
        { name: 'Hadoop', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Airflow', level: 80, color: 'from-teal-400 to-teal-600' },
        { name: 'Hive', level: 75, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Kafka', level: 50, color: 'from-gray-400 to-gray-600' }
      ]
    },
    {
      category: 'Real-Time Technologies',
      icon: 'zap',
      items: [
        { name: 'Spark Streaming', level: 60, color: 'from-orange-400 to-orange-600' },
        { name: 'Kafka Streams', level: 30, color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      category: 'Analytics & Visualization',
      icon: 'chart',
      items: [
        { name: 'Jupyter', level: 92, color: 'from-orange-400 to-orange-600' },
        { name: 'Power BI', level: 90, color: 'from-yellow-400 to-yellow-600' },
        { name: 'tableau', level: 60, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      category: 'Cloud & Containerization',
      icon: 'cloud',
      items: [
        { name: 'Docker', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'Azure', level: 60, color: 'from-blue-400 to-blue-600' }
      ]
    },
    {
      category: 'Analytics engineering ',
      icon: 'brain',
      items: [
        { name: 'dbt ', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Snowflake', level: 85, color: 'from-orange-400 to-orange-600' }
      ]
    },
    {
      category: 'Databases',
      icon: 'server',
      items: [
        { name: 'PostgreSQL', level: 88, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 85, color: 'from-orange-400 to-orange-600' },
        { name: 'sql server', level: 70, color: 'from-green-400 to-green-600' },
        { name: 'MongoDB', level: 40, color: 'from-yellow-400 to-yellow-600' }

      ]
    }
  ]

  // Helper function to render skill icons
  const renderSkillIcon = (iconType) => {
    switch (iconType) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case 'database':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
          </svg>
        );
      case 'zap':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case 'chart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M3 3v18h18"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        );
      case 'cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
          </svg>
        );
      case 'brain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
          </svg>
        );
      case 'server':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            <line x1="6" x2="6.01" y1="6" y2="6"></line>
            <line x1="6" x2="6.01" y1="18" y2="18"></line>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        );
    }
  }

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
      github: 'https://github.com/MAHMOUDMAMDOH8/OLAP_Dimensional_Modeling_for_Advanced_Analytics',
      demo: '',
      featured: false,
      date: '2025'
    },
    {
      title: 'DBT-Orchestrator',
      description: 'Data transformation orchestration platform leveraging dbt for SQL-based transformations and Apache Airflow for workflow management. Implements automated testing, documentation generation, and lineage tracking for maintainable data transformation pipelines.',
      tech: ['Python', 'dbt', 'Apache Airflow', 'SQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/DBT-Orchestrator',
      demo: '',
      featured: false,
      date: 'Mar 2025'
    },
    {
      title: 'OLAPify',
      description: 'OLAP data warehouse solution implementing dimensional modeling for advanced analytics. Features star schema design, aggregated data marts, automated cube processing, and optimized query performance for business intelligence and reporting applications.',
      tech: ['Python', 'SQL', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/MAHMOUDMAMDOH8/OLAPify',
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
      date: '2023'
    },
    {
      title: 'E2E-ELT-pipeline',
      description: 'End-to-end ELT pipeline with data-aware orchestration using Apache Airflow. Implements PostgreSQL data warehouse, automated data quality validation, error handling, and monitoring for reliable data integration and transformation workflows.',
      tech: ['Python', 'SQL', 'Apache Airflow', 'PostgreSQL'],
      github: 'https://github.com/MAHMOUDMAMDOH8/E2E-ELT-pipeline',
      demo: '',
      featured: false,
      date: 'Oct 2024'
    },
    {
      title: 'E2E E-commerce Data Pipeline',
      description: 'Complete e-commerce data pipeline processing customer transactions, inventory, and sales data. Implements automated ETL workflows, dimensional modeling for analytics, real-time inventory tracking, and business intelligence dashboards for retail performance optimization.',
      tech: ['Python', 'Apache Airflow', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/MAHMOUDMAMDOH8/E2E-e-commerce-data-pipeline',
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
      duration: '4 months',
      type: 'Internship',
      location: 'Cairo, Egypt',
      description: 'Gained hands-on experience in Power BI dashboard development and data visualization for healthcare operations monitoring.',
      skills: ['Dashboard Design', 'Data Visualization', 'Business Analysis', 'KPI Development'],
      technologies: ['Power BI', 'SQL Server', 'DAX', 'M Query', 'Excel']
    },
    {
      title: 'Data Analysis Professional Internship',
      company: 'ASDC (Arab Society for Data & Computing)',
      period: 'Nov 2023 - Jan 2024',
      duration: '3 months',
      type: 'Internship',
      location: 'October, Cairo',
      description: 'Learned data analysis fundamentals and business intelligence solutions using Power BI for visualizing business metrics.',
      skills: ['ETL Development', 'Data Modeling', 'Statistical Analysis', 'Requirements Gathering'],
      technologies: ['Power BI', 'SQL Server', 'SSIS', 'Excel', 'Python', 'DAX']
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

  // Helper function to get project image
  const getProjectImage = (title) => {
    const titleLower = title.toLowerCase();
    
    // Map project titles to image files with exact matching
    const imageMap = {
      'end-to-end big data pipeline for e-commerce event logs': '/project_image/End-to-End Big Data Pipeline for E-commerce Event Logs.jpeg',
      'telecom streaming pipeline': '/project_image/Telecom Streaming Pipeline.png',
      'elt-engine': '/project_image/ELT-Engine.png',
      'e2e-elt-data-pipeline': '/project_image/E2E-ELT-Data-Pipeline.png',
      'dbt-orchestrator': '/project_image/DBT-Orchestrator.png',
      'olap dimensional modeling for advanced analytics': '/project_image/olapify.png',
      'olapify': '/project_image/olapify.png',
      'e2e-elt-pipeline': '/project_image/E2E-ELT-pipeline.png',
      'tlc trip pipeline data engineering': '/project_image/TLC Trip Pipeline Data Engineering.jpeg',
      'tlc trip data pipeline project': '/project_image/TLC Trip Data Pipeline Project.jpeg'
    };
    
    // Try exact match first
    if (imageMap[titleLower]) {
      return imageMap[titleLower];
    }
    
    // Try partial matching as fallback
    for (const [key, value] of Object.entries(imageMap)) {
      if (titleLower.includes(key) || key.includes(titleLower.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase())) {
        return value;
      }
    }
    
    // Return null if no image found
    return null;
  };

  // Helper function to get certification image
  const getCertificationImage = (title, issuer) => {
    const titleLower = title.toLowerCase();
    const issuerLower = issuer.toLowerCase();
    
    let imagePath = null;
    
    // Map certifications to image files
    if (titleLower.includes('data engineering zoomcamp') || issuerLower.includes('datatalks')) {
      imagePath = '/project_image/datatalksclup.jpeg';
    } else if (titleLower.includes('business intelligence train') || issuerLower.includes('iti')) {
      imagePath = '/project_image/iti.png';
    } else if (titleLower.includes('data engineer') && issuerLower.includes('datacamp')) {
      imagePath = '/project_image/datacamp.png';
    } else if (titleLower.includes('google') || issuerLower.includes('google')) {
      imagePath = '/project_image/google.png';
    } else if (issuerLower.includes('ibm')) {
      imagePath = '/project_image/ipm.jpeg';
    }
    
    // Debug logging
    console.log(`Certification: ${title} | Issuer: ${issuer} | Image: ${imagePath}`);
    
    return imagePath;
  };

  return (
    <div className="min-h-screen transition-colors duration-300 relative">
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
                <Link
                  href="/case-studies"
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
                >
                  Case Studies
                </Link>
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
                className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white z-50 relative"
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
            className="md:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg absolute top-full left-0 right-0 z-40"
          >
            <div className="px-4 py-2 max-h-screen overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Navigation</span>
              <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                  <FaTimes size={16} />
              </button>
              </div>
              
              <div className="space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      smoothScroll(item.id)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 rounded-lg active:bg-gray-200 dark:active:bg-gray-600"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      )}
                    </div>
                  </motion.button>
                ))}
                <Link
                  href="/case-studies"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-red-600 transition-all duration-200 rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-700/50 active:bg-gray-200 dark:active:bg-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Case Studies</span>
                    <FaExternalLinkAlt size={12} />
                  </div>
                </Link>
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
                  <FaMapMarkerAlt className="text-red-600" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-300">
                  <FaEnvelope className="text-red-600" />
                  <a href="mailto:mahmoud.mamdoh0812@gmail.com" className="hover:text-red-600 transition-colors">
                    mahmoud.mamdoh0812@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content Container */}
      <main className="content-container relative z-10">
      {/* Back to Top Button - Mobile Optimized */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 md:hidden"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

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
            {/* Profile Photo - Mobile Optimized */}
            <motion.div 
              className="mb-8 md:mb-12 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Enhanced Photo Container with Multiple Glow Effects */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-red-600/40 shadow-2xl shadow-red-600/30 group">
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
                
                {/* Enhanced Floating Elements with Better Positioning - Mobile Optimized */}
                <motion.div 
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white text-sm md:text-lg font-bold shadow-xl border-2 border-white/20"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 gradient-text leading-tight"
              animate={pulseAnimation}
            >
              Mahmoud Mamdoh Soliman
            </motion.h1>
            
            <motion.div 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center px-4"
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
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              Transforming data into actionable insights that drive strategic decisions and accelerate business growth. 
              Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8 md:mb-12 px-4"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => smoothScroll('projects')} 
                className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25 border-0 text-sm md:text-base min-h-[48px] md:min-h-[56px] flex items-center justify-center"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-red-700/50 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center space-x-2 md:space-x-3">
                  <FaExternalLinkAlt className="text-base md:text-lg group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold">View Projects</span>
                </div>
                
                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border-2 border-red-400/50 group-hover:border-red-300 transition-colors duration-300"></div>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume} 
                className="relative overflow-hidden group bg-transparent text-gray-700 dark:text-gray-300 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-300 dark:border-gray-600 hover:border-red-600 dark:hover:border-red-600 hover:text-red-600 dark:hover:text-red-600 text-sm md:text-base min-h-[48px] md:min-h-[56px] flex items-center justify-center"
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Button Content */}
                <div className="relative z-10 flex items-center space-x-2 md:space-x-3">
                  <FaDownload className="text-base md:text-lg group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold">Download Resume</span>
                </div>
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

      {/* Unified Career & Tech Stack Timeline Section */}
      <section id="career-timeline" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Career & Tech Stack <span className="gradient-text">Timeline</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My complete journey in data engineering, analytics, and BI—combining education, experience, and tech adoption
              </p>
            </div>
            
            {/* Enhanced Timeline Visualization */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 via-red-500 to-green-400 h-full hidden md:block"></div>
              
              <div className="space-y-16">
                {/* 2021-2025: Education Foundation */}
                <div className="relative flex items-center md:flex-row flex-col md:space-x-8 space-y-6 md:space-y-0">
                  <div className="md:w-1/2 md:pr-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                          </svg>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            <span className="text-sm font-medium">completed</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">University Education</h3>
                        <p className="text-sm opacity-90">Menofia University</p>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <span className="text-sm">2021 - 2025</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">ID: CS-MATH-2025</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          Bachelor's in Computer Science and Mathematics - Strong foundation for data engineering
                        </p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Areas</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Structures</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Algorithms</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">OOP</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Database Design</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Mathematics</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">System Design</span>
                          </div>
                        </div>
                        <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                          <span>View Details</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10">
                    <div className="w-full h-full bg-blue-600 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* 2023: ITI Bootcamp */}
                <div className="relative flex items-center md:flex-row-reverse flex-col md:space-x-8 space-y-6 md:space-y-0">
                  <div className="md:w-1/2 md:pl-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                            <path d="M3 3v18h18"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            <span className="text-sm font-medium">Completed</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">BI Track Bootcamp</h3>
                        <p className="text-sm opacity-90">Information Technology Institute (ITI)</p>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <span className="text-sm">Jul 2023 - Aug 2023</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">ID: ITI-BC-2023</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          Intensive BI training with hands-on projects and real-world applications
                        </p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Learned</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Power BI</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">SSIS</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">SSAS</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">SSRS</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">SQL Server</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Excel</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">DAX</span>
                          </div>
                        </div>
                        <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                          <span>View Details</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10">
                    <div className="w-full h-full bg-green-600 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* 2023-2024: ASDC Internship */}
                <div className="relative flex items-center md:flex-row flex-col md:space-x-8 space-y-6 md:space-y-0">
                  <div className="md:w-1/2 md:pr-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            <span className="text-sm font-medium">Completed</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Data Analysis Internship</h3>
                        <p className="text-sm opacity-90">ASDC</p>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <span className="text-sm">Nov 2023 - Jan 2024</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">ID: ASDC-INT-2024</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          Data analysis fundamentals and BI solutions for business metrics visualization
                        </p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Developed</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">ETL Development</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Modeling</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Statistical Analysis</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Requirements Gathering</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Power BI</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Python</span>
                          </div>
                        </div>
                        <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                          <span>View Details</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10">
                    <div className="w-full h-full bg-purple-600 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* 2024: ATC Internship */}
                <div className="relative flex items-center md:flex-row-reverse flex-col md:space-x-8 space-y-6 md:space-y-0">
                  <div className="md:w-1/2 md:pl-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                            <path d="M3 3v18h18"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            <span className="text-sm font-medium">Completed</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">BI Analyst Internship</h3>
                        <p className="text-sm opacity-90">Addiction Treatment Center</p>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <span className="text-sm">Jul 2024 - Oct 2024</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">ID: ATC-INT-2024</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          Power BI dashboard development and data visualization for healthcare operations
                        </p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Skills Applied</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Dashboard Design</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Visualization</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Business Analysis</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">KPI Development</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Power BI</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">DAX</span>
                          </div>
                        </div>
                        <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                          <span>View Details</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10">
                    <div className="w-full h-full bg-red-600 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* 2025: Data Engineering Zoomcamp */}
                <div className="relative flex items-center md:flex-row flex-col md:space-x-8 space-y-6 md:space-y-0">
                  <div className="md:w-1/2 md:pr-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-6 text-white">
                        <div className="flex items-center justify-between mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                          </svg>
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <path d="m9 11 3 3L22 4"></path>
                            </svg>
                            <span className="text-sm font-medium">Completed</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Data Engineering Zoomcamp</h3>
                        <p className="text-sm opacity-90">DataTalks Club</p>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                              <line x1="16" x2="16" y1="2" y2="6"></line>
                              <line x1="8" x2="8" y1="2" y2="6"></line>
                              <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                            <span className="text-sm">Jan 2025 - May 2025</span>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">ID: DTC-ZC-2025</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                          Modern data engineering with cloud deployment and containerization
                        </p>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Mastered</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Apache Airflow</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">dbt</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Docker</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">GCP</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">PostgreSQL</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Terraform</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Kubernetes</span>
                          </div>
                        </div>
                        <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                          </svg>
                          <span>View Details</span>
                        </button>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10">
                    <div className="w-full h-full bg-indigo-600 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
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

        {/* Experience Section - REMOVED */}

        {/* Bootcamps Section - REMOVED */}

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

                  return filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      project={project}
                      index={index}
                      getProjectCategory={getProjectCategory}
                      getCategoryColor={getCategoryColor}
                      getProjectImage={getProjectImage}
                    />
                  ));
              })()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Expertise across the full data engineering and analytics stack
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-2 bg-red-600 text-white rounded-lg">
                      {renderSkillIcon(category.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.items.map((skill, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* Skill Name and Percentage */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="skill-bar">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`skill-progress bg-gradient-to-r ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Currently Learning Section */}
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Currently Learning & Willing to Learn
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    'GitHub Actions',
                    'Snowflake',
                    'Flink',
                    'kafka'
                  ].map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 px-6 py-3 rounded-full text-red-700 dark:text-red-300 font-medium border border-red-300 dark:border-red-700"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Dashboards Section */}
      <section id="dashboards" className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Interactive <span className="gradient-text">Dashboards</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Published interactive dashboards on NovyPro showcasing data visualization and business intelligence expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Order Analysis Dashboard',
                  description: 'Comprehensive order analytics with sales performance, customer insights, and trend analysis',
                  url: 'https://project.novypro.com/1Qxh8Y',
                  category: 'E-commerce',
                  icon: '📊',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  title: 'Store Analysis Dashboard',
                  description: 'Store performance metrics, geographic analysis, and operational insights',
                  url: 'https://project.novypro.com/1Qxh8Y',
                  category: 'Retail',
                  icon: '🏪',
                  color: 'from-green-500 to-green-600'
                },
                {
                  title: 'E-commerce Dashboard',
                  description: 'Complete e-commerce analytics with product performance, customer behavior, and sales trends',
                  url: 'https://project.novypro.com/Huo1Ep',
                  category: 'E-commerce',
                  icon: '🛒',
                  color: 'from-purple-500 to-purple-600'
                },
                {
                  title: 'Bike Store Dashboard',
                  description: 'Bicycle retail analytics with inventory management, sales performance, and customer insights',
                  url: 'https://project.novypro.com/OlOb72',
                  category: 'Retail',
                  icon: '🚲',
                  color: 'from-orange-500 to-orange-600'
                },
                {
                  title: 'Northwind Dashboard',
                  description: 'Classic Northwind database analytics with comprehensive business intelligence insights',
                  url: 'https://project.novypro.com/tVmUo1',
                  category: 'Business Intelligence',
                  icon: '📈',
                  color: 'from-red-500 to-red-600'
                },
                {
                  title: 'HR Analysis Dashboard',
                  description: 'Human resources analytics with employee performance, recruitment metrics, and workforce insights',
                  url: 'https://project.novypro.com/UfeUUu',
                  category: 'Human Resources',
                  icon: '👥',
                  color: 'from-indigo-500 to-indigo-600'
                }
              ].map((dashboard, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${dashboard.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">
                        {dashboard.icon}
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" x2="21" y1="14" y2="3"></line>
                        </svg>
                        <span className="text-sm font-medium">Live</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{dashboard.title}</h3>
                    <p className="text-sm opacity-90">{dashboard.category}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                          <path d="M3 3v18h18"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span className="text-sm">Power BI</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">ID: NP-{index + 1}-2024</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {dashboard.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Interactive Filters</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Real-time Data</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Mobile Responsive</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">KPI Tracking</span>
                      </div>
                    </div>
                    <a
                      href={dashboard.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" x2="21" y1="14" y2="3"></line>
                      </svg>
                      <span>View Dashboard</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

        {/* Education Section - REMOVED */}

      {/* Certifications Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications & <span className="gradient-text">Achievements</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Continuously learning and validating expertise in cutting-edge technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Data Engineering Zoomcamp */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                      <path d="M3 12A9 3 0 0 0 21 12"></path>
                    </svg>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Engineering Zoomcamp</h3>
                  <p className="text-sm opacity-90">DataTalks Club</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span className="text-sm">April 2025</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ID: DTC-DE-2025</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Comprehensive data engineering bootcamp covering modern tools and practices
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Apache Airflow</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">dbt</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Docker</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">GCP</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Medallion Architecture</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">ELT Pipelines</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>

              {/* Business Intelligence Train ITI */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                      <path d="M3 3v18h18"></path>
                      <path d="M18 17V9"></path>
                      <path d="M13 17V5"></path>
                      <path d="M8 17v-3"></path>
                    </svg>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Business Intelligence Train</h3>
                  <p className="text-sm opacity-90">Information Technology Institute (ITI)</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span className="text-sm">July 2023</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ID: ITI-BI-2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Intensive training program focused on BI tools and data visualization techniques
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Power BI</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Modeling</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">ETL Pipelines</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Visualization</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Business Analytics</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>

              {/* IBM Data Engineering Foundations */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                    </svg>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Engineering Foundations</h3>
                  <p className="text-sm opacity-90">IBM</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span className="text-sm">November 2023</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ID: IBM-DE-2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Foundational course covering core data engineering concepts and big data technologies
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Big Data</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Hadoop</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Spark</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Pipelines</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Architecture</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>

              {/* DataCamp Data Engineer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Engineer Track</h3>
                  <p className="text-sm opacity-90">DataCamp</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span className="text-sm">October 2023</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ID: DC-DE-2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Comprehensive data engineering certification covering Python, SQL, and data processing
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Python</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">SQL</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Processing</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">ETL</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Analysis</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>

              {/* Google Business Intelligence */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <line x1="9" y1="9" x2="9.01" y2="9"></line>
                      <line x1="15" y1="9" x2="15.01" y2="9"></line>
                    </svg>
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Google Business Intelligence</h3>
                  <p className="text-sm opacity-90">Google</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                      </svg>
                      <span className="text-sm">May 2023</span>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">ID: GOOGLE-BI-2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    Google-certified program focusing on business intelligence tools and data analysis
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Google Analytics</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Analysis</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Business Intelligence</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Reporting</span>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">Data Visualization</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" x2="21" y1="14" y2="3"></line>
                    </svg>
                    <span>View Certificate</span>
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Continuous Learning Section */}
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto mb-4">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
                <p className="text-lg text-red-100 max-w-3xl mx-auto">
                  Staying current with emerging technologies and best practices in data engineering, 
                  machine learning, and cloud computing through continuous professional development.
                </p>
              </motion.div>
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
      </main>
    </div>
  )
} 