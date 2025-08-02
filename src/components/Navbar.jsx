import { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { href: '#header', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track which section is currently in view
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace('#', '')),
    150 // offset so highlight changes a bit before top
  );

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#header" className="navbar-brand">Mahmoud Mamdoh Soliman</a>
        
        <ul className="navbar-nav desktop">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`navbar-link ${
                  activeSection === link.href.replace('#', '') ? 'active' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-mobile ${menuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleNavClick(e, link.href)}
                  className={`navbar-link ${
                    activeSection === link.href.replace('#', '') ? 'active' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
