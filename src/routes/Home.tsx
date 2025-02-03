import React from 'react';
import './Home.css';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiEventbrite } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

function Home() {
  return (
    <div className="home-container">
      <div className="pattern-background"></div>
      <div className="logo-container">
        <img src={T4TLogo} alt="T4T Logo" className="main-logo" />
      </div>
      <div className="socials">
        <a href="https://www.facebook.com/groups/t4tclt" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebook size={32}/>
        </a>
        <a href="https://instagram.com/t4tclt" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram size={32}/>
        </a>
        <a href="https://www.eventbrite.com/o/t4t-charlotte-104039617821" target="_blank" rel="noopener noreferrer" className="social-link">
          <SiEventbrite size={32}/>
        </a>
        <a href="mailto:t4tcharlottenc@gmail.com" className="social-link">
          <MdEmail size={32}/>
        </a>
      </div>
      <div className="info-section">
        <div className="info-content">
          <p>
            T4Tclt is a group dedicated to transgender inclusivity in Charlotte, NC.
          </p>
          <p>
            We have a monthly board game night at Summit Coffee Eastover, a quarterly 
            clothes swap, a discord and other events.
          </p>
          <p>
            Our focus is creating community with our trans siblings and building 
            spaces for us by us.
          </p>
          <p>
            Which is why we're always looking to hear from folx on what type of 
            events they'd like to see and how we can best serve the community. 
            Click the button below to give us some feedback or make requests!
          </p>
          <button className="feedback-button">
            Give Feedback
          </button>
        </div>
      </div>
      <div className="summary-section">
        <div className="summary-item left">
          <div className="summary-title">Clothes Swaps</div>
          <div className="summary-content">
            Providing space for folx to get rid of their old clothes and find gender affirming clothes
          </div>
        </div>
        
        <div className="summary-item right">
          <div className="summary-title">Monthly Board Game Night</div>
          <div className="summary-content">
            Come join us for casual board games at Summit Eastover every Third Friday
          </div>
        </div>
        
        <div className="summary-item left">
          <div className="summary-title">Verified Discord Community</div>
          <div className="summary-content">
            Connect with over 300 local trans folx and join our weekly game nights
          </div>
        </div>
        
        <div className="summary-item right">
          <div className="summary-title">Mutual Aid Opportunities</div>
          <div className="summary-content">
            We use discord to coordinate our community into asking for and offering each other help
          </div>
        </div>
        
        <div className="summary-item left">
          <div className="summary-title">And More!</div>
          <div className="summary-content">
            Speed Friending, Picnics, Craft Nights, Movie Nights, Co-working, Potlucks, Restaurant outings
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
