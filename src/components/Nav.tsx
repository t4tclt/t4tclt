import { useState, useEffect } from 'react';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import './Nav.css';

function Nav() {
  const [isVisible, setIsVisible] = useState(false);

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
    }
  };

  if (!isVisible) return null;

  return (
    <nav className={`nav-container ${isVisible ? 'visible' : ''}`}>
      <div className="nav-content">
        <img src={T4TLogo} alt="T4T Logo" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        <div className="nav-links">
          <button onClick={() => scrollToSection('events')}>Events</button>
          <button onClick={() => scrollToSection('zine')}>Zine</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('newsletter')}>Newsletter</button>
          <button onClick={() => scrollToSection('help')}>Help</button>
          <button onClick={() => scrollToSection('donate')}>Donate</button>
        </div>
      </div>
    </nav>
  );
}

export default Nav; 