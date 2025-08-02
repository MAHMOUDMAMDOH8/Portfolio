import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  // No testimonials in CV, keeping empty or could remove section
];

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="grid grid-lg-3">
          {testimonials.length > 0 ? testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div style={{ marginBottom: '1.5rem' }}>
                <FaQuoteLeft style={{ fontSize: '2rem', color: 'var(--primary-color)', opacity: '0.3' }} />
              </div>
              <p className="card-content" style={{ fontStyle: 'italic', fontSize: '1rem', lineHeight: '1.6' }}>
                "{testimonial.quote}"
              </p>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{testimonial.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {testimonial.position}
                </p>
                <p style={{ color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: '500' }}>
                  {testimonial.company}
                </p>
              </div>
            </div>
          )) : (
            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>No testimonials available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
