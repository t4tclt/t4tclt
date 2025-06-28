import { useState, useEffect } from 'react';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import './Nav.css';

function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.8); // Show nav after scrolling 80% of viewport height
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  if (!isVisible) return null;

  return (
    <nav className={`nav-container ${isVisible ? 'visible' : ''}`}>
      <div className="nav-content">
        <img 
          src={T4TLogo} 
          alt="T4T Logo" 
          className="nav-logo" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }} 
        />
        
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('events')}>Events</button>
          <button onClick={() => scrollToSection('zine')}>Zine</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('newsletter')}>Newsletter</button>
          <button onClick={() => scrollToSection('help')}>Help</button>
          <button onClick={() => scrollToSection('resources')}>Resources</button>
          <button onClick={() => scrollToSection('donate')}>Donate</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav; 