import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function Portfolio() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
