import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaDatabase, FaCode, FaChartLine, FaStar, FaCloud, FaFire } from 'react-icons/fa';

function Hero() {
  return (
    <section id="header" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title gradient-text">
            Mahmoud Mamdoh Soliman
          </h1>
          <h2 className="hero-subtitle">
            Data Engineer
          </h2>
          <p className="hero-description">
            Data Engineer focused on transforming data into actionable insights that drive strategic decisions and accelerate business growth. Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks to improve operational efficiency and scalability. Collaborative and impact-driven.
          </p>
          
          <div className="hero-typewriter">
            <Typewriter
              words={['Designing Data Pipelines', 'Building Analytics Solutions', 'Optimizing Workflows', 'Driving Business Growth']}
              loop={0}
              cursor
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <div className="hero-skills">
            <div className="skill-badge" title="Kafka">
              <FaDatabase />
              <span>Big Data</span>
            </div>
            <div className="skill-badge" title="Python">
              <FaCode />
              <span>Python</span>
            </div>
            <div className="skill-badge" title="Analytics">
              <FaChartLine />
              <span>Analytics</span>
            </div>
            <div className="skill-badge" title="Cloud">
              <FaCloud />
              <span>Cloud</span>
            </div>
            <div className="skill-badge" title="MLOps">
              <FaStar />
              <span>MLOps</span>
            </div>
            <div className="skill-badge" title="Spark">
              <FaFire />
              <span>Spark</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <FaDownload />
              Download Resume
            </button>
            <button className="btn btn-outline" onClick={e => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/MAHMOUDMAMDOH8" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mahmoud-mamdoh" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://x.com/M7M0UD_D" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              alt="Mahmoud Mamdoh - Data Engineer"
            />
            <div className="hero-image-badge">
              <FaDatabase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
