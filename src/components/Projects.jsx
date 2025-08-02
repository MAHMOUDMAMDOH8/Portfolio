import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Telecom Streaming Pipeline",
    description: "Built a near real-time streaming data pipeline to ingest telecom events (calls, SMS) via Kafka and HDFS. Processed data using Spark and stored cleaned outputs in Snowflake, following the Medallion Architecture. Orchestrated the pipeline using Apache Airflow. Designed and implemented dbt models with SCD Type 2 logic for dimensional modeling. Built Power BI dashboards to visualize user activity, cell site performance, and regional trends.",
    technologies: ["Kafka", "HDFS", "Spark", "Snowflake", "dbt", "Docker", "Airflow", "Python", "Power BI"],
    link: ""
  },
  {
    title: "ELT-Engine",
    description: "Built an ELT pipeline using Airflow for orchestration and dbt for transformations in Snowflake. Designed and implemented a Medallion Architecture (Bronze, Silver, Gold) to optimize data processing for analytics. Developed interactive Power BI dashboards to visualize key business insights.",
    technologies: ["SQL", "dbt", "Snowflake", "Docker", "Apache Airflow", "Python", "Power BI"],
    link: ""
  },
  {
    title: "E2E-ELT-Data-Pipeline",
    description: "Engineered data-aware ELT pipeline using Apache Airflow, Python, dbt. Developed Power BI dashboards for interactive data visualization and insights.",
    technologies: ["SQL", "Python", "dbt", "Apache Airflow", "PostgreSQL", "Power BI"],
    link: ""
  },
  {
    title: "OLAP Dimensional Modeling for Advanced Analytics",
    description: "Designed and implemented an ETL pipeline with Airflow for data orchestration and Docker for containerization. Designed customized visualizations to track key business metrics.",
    technologies: ["Python", "SQL", "Docker", "Apache Airflow", "Postgres"],
    link: ""
  },
  {
    title: "ETL & Building DWH & Data Analysis (NorthWind)",
    description: "Built an end-to-end data pipeline using Apache Airflow, PostgreSQL, and Docker following the Medallion architecture (Bronze → Silver → Gold). Developed ETL workflows to clean, transform, and load sales, customer, store, and product data into a star schema with SCD Type 2 logic.",
    technologies: ["SSIS", "SSAS", "SQL Server", "Power BI"],
    link: ""
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="grid grid-md-2">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              <p className="card-content">{project.description}</p>
              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Technologies Used:
                </h4>
                <div className="card-tags">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}
                >
                  View Project <FaExternalLinkAlt style={{ marginLeft: '0.5rem' }} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
