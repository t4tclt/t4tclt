import React from 'react';
import './Home.css';
import T4TLogo from '../T4T_WebsiteLogo.svg';

function Home() {
  return (
    <div className="home-container">
      <div className="pattern-background"></div>
      <div className="logo-container">
        <img src={T4TLogo} alt="T4T Logo" className="main-logo" />
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
    </div>
  );
}

export default Home;
