import { useState, useEffect } from 'react';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import './Nav.css';

function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if we're on the home page (has sections to scroll to)
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        setIsVisible(scrollPosition > windowHeight * 0.8); // Show nav after scrolling 80% of viewport height
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      // On other pages, always show the nav
      setIsVisible(true);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  // Don't render scroll-to-section buttons on non-home pages
  const isHomePage = window.location.pathname === '/';

  return (
    <nav className={`nav-container ${isVisible ? 'visible' : ''}`}>
      <div className="nav-content">
        <img 
          src={T4TLogo} 
          alt="T4T Logo" 
          className="nav-logo" 
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
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
          {isHomePage ? (
            <>
              <button onClick={() => scrollToSection('events')}>Events</button>
              <button onClick={() => scrollToSection('zine')}>Zine</button>
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('newsletter')}>Newsletter</button>
              <button onClick={() => scrollToSection('help')}>Help</button>
              <a href="/resources" className="nav-link">Resources</a>
              <button onClick={() => scrollToSection('donate')}>Donate</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </>
          ) : (
            <>
              <a href="/" className="nav-link">Home</a>
              <a href="/about" className="nav-link">About</a>
              <a href="/members" className="nav-link">Our Members</a>
              <a href="/resources" className="nav-link">Resources</a>
              <a href="/zine" className="nav-link">Zine</a>
              
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav; 