import './index.css';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaDownload,
  FaCheckCircle,
  FaExclamationCircle,
  FaCertificate,
  FaGraduationCap,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
  FaTerminal,
  FaServer,
  FaCodeBranch,
  FaAward,
  FaLanguage,
  FaTools,
  FaProjectDiagram,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaTrophy,
  FaPhone
} from 'react-icons/fa';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mahmoud.Mamdoh.Data.Engineer.pdf';
    link.download = 'Mahmoud_Mamdoh_Data_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    {
      category: 'Programming Languages', 
      items: [
        { name: 'Python', level: 90, icon: FaCode },
        { name: 'SQL', level: 95, icon: FaDatabase },
        { name: 'Spark', level: 85, icon: FaRocket },
        { name: 'C#', level: 75, icon: FaCode }
      ]
    },
    { 
      category: 'Orchestration & Workflow', 
      items: [
        { name: 'Apache Airflow', level: 90, icon: FaTools },
        { name: 'Mage', level: 80, icon: FaProjectDiagram }
      ]
    },
    { 
      category: 'ETL & ELT Tools', 
      items: [
        { name: 'dbt', level: 90, icon: FaTools },
        { name: 'SSIS', level: 85, icon: FaDatabase }
      ]
    },
    { 
      category: 'Big Data Technologies', 
      items: [
        { name: 'Hadoop', level: 80, icon: FaServer },
        { name: 'Hive', level: 75, icon: FaDatabase }
      ]
    },
    { 
      category: 'Data Streaming', 
      items: [
        { name: 'Kafka', level: 85, icon: FaProjectDiagram }
      ]
    },
    { 
      category: 'Data Warehousing', 
      items: [
        { name: 'Snowflake', level: 90, icon: FaCloud },
        { name: 'Dimensional Modeling', level: 85, icon: FaDatabase },
        { name: 'Medallion Architecture', level: 90, icon: FaProjectDiagram }
      ]
    },
    { 
      category: 'Databases', 
      items: [
        { name: 'PostgreSQL', level: 90, icon: FaDatabase },
        { name: 'MySQL', level: 85, icon: FaDatabase },
        { name: 'MS SQL Server', level: 85, icon: FaDatabase }
      ]
    },
    { 
      category: 'Containerization', 
      items: [
        { name: 'Docker', level: 85, icon: FaServer }
      ]
    },
    { 
      category: 'Version Control', 
      items: [
        { name: 'Git', level: 90, icon: FaCodeBranch },
        { name: 'GitHub', level: 90, icon: FaGithub }
      ]
    },
    { 
      category: 'Operating Systems', 
      items: [
        { name: 'Linux', level: 85, icon: FaTerminal },
        { name: 'Windows', level: 80, icon: FaServer }
      ]
    },
    { 
      category: 'Data Quality', 
      items: [
        { name: 'Data Quality Checks', level: 85, icon: FaCheckCircle },
        { name: 'Schema Validation', level: 80, icon: FaCheckCircle }
      ]
    }
  ];

  const projects = [
    {
      title: 'Telecom Streaming Pipeline',
      description: 'Near real-time streaming data pipeline for telecom events (calls, SMS). Kafka and HDFS for data ingestion, Spark processing with Snowflake storage, Medallion Architecture implementation, Apache Airflow orchestration, dbt models with SCD Type 2 logic, Power BI dashboards for user activity, cell site performance, regional trends.',
      tech: ['Kafka', 'HDFS', 'Spark', 'Snowflake', 'dbt', 'Docker', 'Airflow', 'Python', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/telecom-streaming-pipeline',
      demo: 'https://mahmoud-telecom-dashboard.streamlit.app',
      featured: true,
      metrics: ['Real-time processing', 'Medallion Architecture', 'Scalable pipeline'],
      image: '/project1.jpg',
      date: 'May 2025'
    },
    {
      title: 'ELT-Engine',
      description: 'ELT pipeline with Airflow orchestration, dbt transformations in Snowflake, Medallion Architecture (Bronze, Silver, Gold), interactive Power BI dashboards.',
      tech: ['SQL', 'dbt', 'Snowflake', 'Docker', 'Apache Airflow', 'Python', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/elt-engine',
      demo: 'https://mahmoud-elt-demo.herokuapp.com',
      featured: false,
      metrics: ['Automated workflows', 'Data quality checks', 'Modern data stack'],
      image: '/project2.jpg',
      date: 'Mar 2025'
    },
    {
      title: 'E2E-ELT-Data-Pipeline',
      description: 'Data-aware ELT pipeline engineering with interactive data visualization and insights.',
      tech: ['SQL', 'Python', 'DBT', 'Apache Airflow', 'PostgreSQL', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/e2e-elt-pipeline',
      demo: 'https://mahmoud-e2e-pipeline.vercel.app',
      featured: false,
      metrics: ['End-to-end pipeline', 'Data monitoring', 'Quality assurance'],
      image: '/project3.jpg',
      date: '2024'
    },
    {
      title: 'OLAP Dimensional Modeling for Advanced Analytics',
      description: 'ETL pipeline with Airflow orchestration, Docker containerization, customized business metrics visualizations.',
      tech: ['Python', 'SQL', 'Docker', 'Apache Airflow', 'Postgres'],
      github: 'https://github.com/MAHMOUDMAMDOH8/olap-dimensional-modeling',
      demo: 'https://mahmoud-olap-demo.netlify.app',
      featured: false,
      metrics: ['Star schema design', 'OLAP cubes', 'Advanced analytics'],
      image: '/project4.jpg',
      date: '2024'
    },
    {
      title: 'ETL & Building DWH & Data Analysis (NorthWind)',
      description: 'End-to-end data pipeline with Medallion architecture, star schema with SCD Type 2 logic, sales, customer, store, and product data processing.',
      tech: ['SSIS', 'SSAS', 'SQL Server', 'Power BI'],
      github: 'https://github.com/MAHMOUDMAMDOH8/northwind-dwh',
      demo: 'https://mahmoud-northwind-dashboard.vercel.app',
      featured: false,
      metrics: ['Data warehouse', 'Star schema', 'SCD Type 2'],
      image: '/project5.jpg',
      date: '2024'
    }
  ];

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
  ];

  const certifications = [
    {
      title: 'Data Engineering Zoomcamp',
      issuer: 'DataTalks Club',
      year: 'April 2025',
      icon: FaDatabase,
      color: 'bg-blue-500',
      description: 'Comprehensive program covering modern data engineering technologies and best practices.',
      skills: ['Apache Spark', 'Kafka', 'Docker', 'Cloud Platforms', 'Data Pipeline Design']
    },
    {
      title: 'Business Intelligence Train ITI',
      issuer: 'Information Technology Institute (ITI)',
      year: 'July 2023',
      icon: FaChartLine,
      color: 'bg-green-500',
      description: 'Intensive training program focused on BI tools and data visualization techniques.',
      skills: ['Power BI', 'SSAS', 'SSIS', 'Data Warehousing', 'Dashboard Design']
    },
    {
      title: 'Data Engineering Foundations',
      issuer: 'IBM',
      year: 'November 2023',
      icon: FaCloud,
      color: 'bg-purple-500',
      description: 'Foundation course covering essential data engineering concepts and cloud technologies.',
      skills: ['Cloud Computing', 'Data Architecture', 'ETL Processes', 'Big Data Concepts']
    },
    {
      title: 'Data Engineer',
      issuer: 'Datacamp',
      year: 'October 2023',
      icon: FaAward,
      color: 'bg-orange-500',
      description: 'Comprehensive data engineering certification covering modern tools and practices.',
      skills: ['Python', 'SQL', 'ETL', 'Data Pipelines', 'Big Data']
    },
    {
      title: 'Google Business Intelligence',
      issuer: 'Google',
      year: 'May 2023',
      icon: FaChartLine,
      color: 'bg-red-500',
      description: 'Google certification in business intelligence and data analytics.',
      skills: ['Data Analysis', 'Business Intelligence', 'Google Tools', 'Analytics']
    }
  ];

  const languages = [
    { name: 'Arabic', level: 'Native', proficiency: 100 },
    { name: 'English', level: 'Fluent', proficiency: 90 }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: FaLightbulb },
    { name: 'Team Collaboration', icon: FaUsers },
    { name: 'Data Analysis', icon: FaChartLine },
    { name: 'Project Management', icon: FaProjectDiagram },
    { name: 'Communication', icon: FaUsers },
    { name: 'Innovation', icon: FaRocket }
  ];

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
  ];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="nav-container fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              {/* Logo/Name */}
              <div className="text-xl font-bold text-gradient">
                Mahmoud Mamdoh
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => smoothScroll(item.id)}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className="block w-full text-left px-6 py-4 text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center">
            <div className="animate-fadeInUp">
              <div className="text-mono text-sm mb-4">
                $ whoami
              </div>
              
              <h1 className="heading-1 mb-8">
                Hi, I'm Mahmoud Mamdoh
              </h1>
              
              <div className="heading-3 text-gray-400 mb-8 min-h-[3rem] flex items-center justify-center">
                <span className="text-mono mr-2">&gt;</span>
                <Typewriter
                  words={[
                    'Data Engineer',
                    'BI Analyst', 
                    'ETL Developer',
                    'Pipeline Architect'
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>

              <p className="text-large max-w-3xl mx-auto mb-12">
                Computer Science & Mathematics student at Menofia University passionate about building scalable 
                data pipelines and modern analytics solutions. Experienced in Apache Spark, Kafka, Snowflake, and Power BI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button onClick={downloadResume} className="btn-primary">
                  <FaDownload className="mr-2" />
                  Download Resume
                </button>
                <button onClick={() => smoothScroll('contact')} className="btn-secondary">
                  <FaEnvelope className="mr-2" />
                  Get In Touch
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center">
                <a 
                  href="https://github.com/MAHMOUDMAMDOH8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors animate-float"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors animate-float"
                  style={{animationDelay: '0.5s'}}
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:mahmoudmamdoh.de@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors animate-float"
                  style={{animationDelay: '1s'}}
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fadeInLeft">
              <div className="text-mono text-sm text-green-400 mb-4">
                $ cat about.txt
              </div>
              
              <h2 className="heading-2 mb-8">About Me</h2>
              
              <div className="space-y-6 text-body">
                <p>
                  I'm a Computer Science and Mathematics student at Menofia University with a deep passion 
                  for data engineering and business intelligence. My journey focuses on building 
                  enterprise-scale data pipelines and analytics solutions.
                </p>
                <p>
                  Through comprehensive training programs like DataTalks Club's Data Engineering Zoomcamp 
                  and ITI's Business Intelligence track, I've developed expertise in modern data stack 
                  technologies including Apache Spark, Kafka, Snowflake, and dbt.
                </p>
                <p>
                  I specialize in building real-time streaming pipelines, implementing Medallion Architecture, 
                  and creating interactive dashboards that drive business decisions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                  <div className="text-small">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">5+</div>
                  <div className="text-small">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">3+</div>
                  <div className="text-small">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                  <div className="text-small">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="animate-fadeInRight">
              <div className="card">
                <div className="text-mono text-sm text-green-400 mb-4">
                  $ education --list
                </div>
                
                <h3 className="heading-4 mb-6">Education</h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-green-400 pl-6">
                    <h4 className="font-semibold text-white mb-2">
                      Bachelor of Computer Science and Mathematics
                    </h4>
                    <p className="text-gradient font-medium mb-1">Menofia University</p>
                    <p className="text-mono text-sm text-gray-400">2021 - 2025</p>
                  </div>
                </div>

                {/* Languages Section */}
                <div className="mt-8">
                  <h3 className="heading-4 mb-6 text-white">Languages</h3>
                  <div className="space-y-4">
                    {languages.map((lang, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <FaLanguage className="text-green-400" />
                          <span className="text-gray-300">{lang.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-green-400">{lang.level}</span>
                          <div className="w-20 h-2 bg-gray-700 rounded-full mt-1">
                            <div 
                              className="h-full bg-green-400 rounded-full transition-all duration-1000"
                              style={{ width: `${lang.proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gray-900/50">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="text-mono text-sm text-green-400 mb-4">
              $ history --work
            </div>
            <h2 className="heading-2 mb-6">Experience</h2>
            <p className="text-large">My professional journey in data engineering</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="card animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="heading-4">{exp.title}</h3>
                      <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-gradient font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 lg:mt-0">
                    <div className="text-mono text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded">
                      {exp.period}
                    </div>
                    <div className="text-mono text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded text-center">
                      {exp.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-body mb-8 text-lg leading-relaxed">{exp.description}</p>

                {/* Skills Section */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-yellow-400 mb-4">Key Skills Developed:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="tag bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-4 py-2 shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-green-400 mr-2">Technologies:</span>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tag px-4 py-2 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="text-mono text-sm text-green-400 mb-4">
              $ skills --list --level
            </div>
            <h2 className="heading-2 mb-6">My Skills</h2>
            <p className="text-large">Technologies and tools I work with</p>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skillCategory, index) => (
              <div key={index} className="card-minimal animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="heading-4 mb-6 text-white">{skillCategory.category}</h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon className="text-green-400 text-sm" />
                          <span className="text-body font-medium text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-mono text-sm text-gradient font-bold">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (idx * 0.05)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="card">
            <div className="text-mono text-sm text-green-400 mb-4">
              $ soft-skills --display
            </div>
            <h3 className="heading-4 mb-6 text-white">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                  <skill.icon className="text-green-400 text-lg" />
                  <span className="text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gray-900/50">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="text-mono text-sm text-green-400 mb-4">
              $ ls -la ./projects/
            </div>
            <h2 className="heading-2 mb-6">Works</h2>
            <p className="text-large">A selection of my range of work</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                {project.featured && (
                  <div className="mb-4 bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-medium inline-block border border-green-500/30">
                    Featured
                  </div>
                )}
                
                <h3 className="heading-4 mb-4 text-white">{project.title}</h3>
                <p className="text-body mb-6">{project.description}</p>
                
                {/* Project Metrics */}
                {project.metrics && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <FaGithub className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="text-mono text-sm text-green-400 mb-4">
              $ certificates --validate
            </div>
            <h2 className="heading-2 mb-6">Certifications</h2>
            <p className="text-large">Professional achievements and continuous learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="card animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center`}>
                    <cert.icon className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                    <p className="text-green-400 text-sm">{cert.issuer}</p>
                  </div>
                  <div className="text-mono text-sm text-gray-400">
                    {cert.year}
                  </div>
                </div>
                
                <p className="text-body mb-4">{cert.description}</p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-400">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gray-900/50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="text-mono text-sm text-green-400 mb-4">
              $ curl -X POST /contact
            </div>
            <h2 className="heading-2 mb-6">Get In Touch</h2>
            <p className="text-large">
              Let's discuss how I can help you build scalable data solutions and drive insights for your organization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="animate-fadeInLeft">
              <h3 className="heading-4 mb-8 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <div className="text-small text-gray-400">Email</div>
                    <a href="mailto:mahmoudmamdoh.de@gmail.com" className="text-body font-medium hover:text-green-400 transition-colors">
                      mahmoudmamdoh.de@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <div className="text-small text-gray-400">Location</div>
                    <div className="text-body font-medium">Cairo, Egypt</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-body font-semibold mb-4 text-white">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/MAHMOUDMAMDOH8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-500/20 hover:text-green-400 transition-all"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-green-500/20 hover:text-green-400 transition-all"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInRight">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="form-textarea"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="btn-primary w-full"
                >
                  {formStatus.submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Form Status Messages */}
                {formStatus.submitted && (
                  <div className="status-success">
                    <FaCheckCircle />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {formStatus.error && (
                  <div className="status-error">
                    <FaExclamationCircle />
                    <span>{formStatus.error}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-center py-8">
        <div className="max-w-6xl mx-auto container-padding">
          <p className="text-gray-400 text-mono text-sm">
            mahmoudmamdoh.de@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
