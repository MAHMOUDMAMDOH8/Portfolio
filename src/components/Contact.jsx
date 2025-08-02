import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section bg-gray">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to discuss your next data project? I'd love to hear from you.
          </p>
        </div>

        <div className="card bg-accent" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="grid grid-md-2">
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaEnvelope style={{ color: 'var(--primary-color)' }} />
                  <a href="mailto:mahmoud.mamdoh0812@gmail.com" style={{ color: 'var(--text-primary)' }}>
                    mahmoud.mamdoh0812@gmail.com
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaLinkedin style={{ color: 'var(--primary-color)' }} />
                  <a href="https://linkedin.com/in/mahmoud-mamdoh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                    LinkedIn Profile
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaGithub style={{ color: 'var(--primary-color)' }} />
                  <a href="https://github.com/MAHMOUDMAMDOH8" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                    GitHub Profile
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FaTwitter style={{ color: 'var(--primary-color)' }} />
                  <a href="https://x.com/M7M0UD_D" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                    Twitter Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Let's Collaborate</h3>
              <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Whether you're looking to build a new data infrastructure, optimize existing pipelines, 
                or discuss data engineering best practices, I'm always open to meaningful conversations.
              </p>
              <div className="hero-social" style={{ justifyContent: 'flex-start' }}>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
