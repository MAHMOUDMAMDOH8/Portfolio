import { FaStar } from 'react-icons/fa';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Expert" },
      { name: "Spark", level: "Advanced" },
      { name: "C#", level: "Intermediate" }
    ]
  },
  {
    category: "Orchestration & ETL",
    items: [
      { name: "Apache Airflow", level: "Expert" },
      { name: "Mage", level: "Intermediate" },
      { name: "dbt", level: "Advanced" },
      { name: "SSIS", level: "Intermediate" }
    ]
  },
  {
    category: "Big Data & Streaming",
    items: [
      { name: "Hadoop", level: "Advanced" },
      { name: "Hive", level: "Advanced" },
      { name: "Kafka", level: "Advanced" }
    ]
  },
  {
    category: "Data Warehousing & Databases",
    items: [
      { name: "Snowflake", level: "Advanced" },
      { name: "Dimension Modeling", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "MS SQL", level: "Intermediate" }
    ]
  },
  {
    category: "Containerization & Version Control",
    items: [
      { name: "Docker", level: "Advanced" },
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" }
    ]
  },
  {
    category: "Operating Systems & Validation",
    items: [
      { name: "Linux", level: "Advanced" },
      { name: "Windows", level: "Intermediate" },
      { name: "Data Quality Checks", level: "Advanced" },
      { name: "Schema Validation", level: "Advanced" }
    ]
  }
];

function Skills() {
  const getSkillStars = (level) => {
    const levels = { 'Expert': 5, 'Advanced': 4, 'Intermediate': 3, 'Beginner': 2 };
    return levels[level] || 3;
  };

  return (
    <section id="skills" className="section bg-gray">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="grid grid-md-2">
          {skills.map((skillGroup, index) => (
            <div key={index} className="card">
              <h3 className="card-title" style={{ marginBottom: '1.5rem' }}>{skillGroup.category}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {skillGroup.items.map(skill => (
                  <div key={skill.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', gap: '2px' }}>
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            style={{ 
                              color: i < getSkillStars(skill.level) ? 'var(--primary-color)' : '#e5e7eb',
                              fontSize: '0.8rem'
                            }} 
                          />
                        ))}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', minWidth: '80px' }}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
