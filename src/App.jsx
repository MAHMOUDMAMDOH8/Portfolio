import './index.css';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes, FaDownload, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt, FaCalendarAlt, FaCode, FaDatabase, FaChartLine } from 'react-icons/fa';
import clsx from 'clsx';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Led development of real-time data pipelines processing 10TB+ daily. Implemented Apache Kafka and Spark streaming solutions.",
    technologies: ["Apache Spark", "Kafka", "Python", "AWS", "Docker"]
  },
  {
    title: "Data Engineer",
    company: "Analytics Corp",
    period: "2020 - 2022",
    description: "Built ETL pipelines and data warehouses. Developed automated reporting systems using Power BI and Tableau.",
    technologies: ["SQL", "Python", "Power BI", "Airflow", "PostgreSQL"]
  },
  {
    title: "Junior Data Analyst",
    company: "Data Insights Ltd",
    period: "2019 - 2020",
    description: "Performed data analysis and created dashboards. Supported business intelligence initiatives and reporting.",
    technologies: ["SQL", "Excel", "Power BI", "Python"]
  }
];

const skills = [
  { category: "Programming", items: ["Python", "SQL", "Scala", "Shell Scripting"], icon: FaCode },
  { category: "Big Data", items: ["Apache Spark", "Hadoop", "Kafka", "Hive"], icon: FaDatabase },
  { category: "Cloud & Tools", items: ["AWS", "Docker", "Airflow", "Git"], icon: FaChartLine },
  { category: "Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Plotly"], icon: FaChartLine }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className={clsx(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-2xl font-bold text-gray-900">
            Mahmoud Mamdoh
          </div>
          
          <ul className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-2xl text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Data Engineer &<br />
                  <span className="text-blue-600">Analytics Expert</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transforming complex data into actionable insights through scalable pipelines and advanced analytics solutions.
                </p>
              </div>

              <div className="text-lg text-gray-700">
                <Typewriter
                  words={['Building Data Pipelines', 'Creating BI Solutions', 'Optimizing Data Workflows', 'Driving Data-Driven Decisions']}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2">
                  <FaDownload />
                  Download Resume
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  View Projects
                </button>
              </div>

              <div className="flex gap-6 text-2xl">
                <a href="https://github.com/MAHMOUDMAMDOH8" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/M7M0UD_D" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://avatars.githubusercontent.com/u/9919?v=4"
                  alt="Mahmoud Mamdoh"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                  <FaDatabase />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate data engineer with 5+ years of experience building scalable data infrastructure and analytics solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in designing and implementing end-to-end data pipelines that handle massive volumes of data. 
                My expertise spans from real-time streaming architectures to batch processing systems, always focusing on 
                reliability, scalability, and performance.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-600" />
                    Cairo, Egypt
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600">5+ Years</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Reduced data processing time by 70% through pipeline optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Built real-time analytics platform serving 1M+ daily users</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Led migration of legacy systems to cloud-native architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-gray-600">My journey in data engineering and analytics</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-2 lg:mt-0">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Showcasing my expertise in data engineering and analytics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">End-to-End Log Processing</h3>
                  <a href="https://github.com/MAHMOUDMAMDOH8/end-to-end-log-processing" className="text-blue-600 hover:text-blue-800">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                  Real-time log processing pipeline with Kafka, Spark, and comprehensive analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kafka', 'Spark', 'Airflow', 'Power BI'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Telecom Stream Pipeline</h3>
                  <a href="https://github.com/MAHMOUDMAMDOH8/Telecom-Stream-Pipeline" className="text-blue-600 hover:text-blue-800">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                  Streaming data pipeline for telecom analytics with real-time monitoring capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Kafka', 'Spark', 'Cassandra', 'Streamlit'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">ELT Engine</h3>
                  <a href="https://github.com/MAHMOUDMAMDOH8/ELT-Engine" className="text-blue-600 hover:text-blue-800">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <p className="text-gray-600 mb-4">
                  Modern data warehouse engine for ETL/ELT processes with automated data modeling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'SQL', 'dbt', 'Docker'].map(tech => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <skillGroup.icon className="text-2xl text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map(skill => (
                    <li key={skill} className="text-gray-700">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to discuss your next data project? I'd love to hear from you.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaEnvelope className="text-blue-600" />
                  <span>mahmoud.mamdoh@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaMapMarkerAlt className="text-blue-600" />
                  <span>Cairo, Egypt</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-6 text-3xl">
                <a href="https://github.com/MAHMOUDMAMDOH8" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/mahmoud-mamdoh-47a68a203/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/M7M0UD_D" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Mahmoud Mamdoh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
