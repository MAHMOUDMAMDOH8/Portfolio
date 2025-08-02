function About() {
  return (
    <section id="about" className="section bg-gray">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-md-2">
          <div>
            <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Brief Introduction</h3>
            <p className="mb-8" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Data Engineer focused on transforming data into actionable insights that drive strategic decisions and accelerate business growth. Skilled in designing and optimizing complex data pipelines and workflows using modern data stacks to improve operational efficiency and scalability. Collaborative and impact-driven.
            </p>
          </div>

          <div className="card bg-accent">
            <h3 className="card-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>My Mission</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              My mission is to empower organizations to make data-driven decisions through innovative engineering solutions. I aim to build scalable, efficient, and accessible data systems that drive business success and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
