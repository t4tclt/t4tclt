import React from 'react';
import Nav from '../components/Nav';
import './Buddy.css';

function Buddy() {
  const handleBuddyCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardInner = event.currentTarget.querySelector('.buddy-card-inner');
    if (cardInner) {
      cardInner.classList.toggle('flipped');
    }
  };

  return (
    <div className="buddy-container">
      <Nav />
      
      <div className="buddy-hero">
        <div className="buddy-hero-content">
          <h1 className="buddy-hero-title">Welcome Buddy Program</h1>
          <p className="buddy-hero-subtitle">Find your perfect match for a soft landing into our community</p>
        </div>
      </div>

      <div className="buddy-info-section">
        <div className="buddy-info-content">
          <h2 className="buddy-section-title">What is a Welcome Buddy?</h2>
          <p>A Welcome Buddy is a community member who volunteers to be a soft landing for newcomers to T4T Charlotte. They help new folks feel more comfortable entering our spaces, whether that's chatting on Discord, planning to meet at events, or just checking in to make sure you feel seen and supported.</p>
          
          <div className="buddy-features">
            <div className="buddy-feature">
              <h3>Personal Connection</h3>
              <p>Our Welcome Buddies are matched with 1-3 newcomers at a time for focused, meaningful support</p>
            </div>
            <div className="buddy-feature">
              <h3>No Pressure</h3>
              <p>You can engage as little or as much as you want. You can meet up with your buddy at events, chat on Discord, or just check in to make sure you feel seen and supported.</p>
            </div>
            <div className="buddy-feature">
              <h3>Full Support</h3>
              <p>We provide resources, channels, and information to help you acclimate to our community and Charlotte in general!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="buddy-how-section">
        <div className="buddy-how-content">
          <h2 className="buddy-section-title">How to Get Started</h2>
          <div className="buddy-steps">
            <div className="buddy-step">
              <div className="step-number">1</div>
              <h3>Browse Buddies</h3>
              <p>Click on the buddy cards above to learn more about each person and see if they might be a good match for you</p>
            </div>
            <div className="buddy-step">
              <div className="step-number">2</div>
              <h3>Connect & Sign Up</h3>
              <p>Join our Discord server and fill out our <a href="https://docs.google.com/forms/d/1ni2Qbv4hQHcyOot5q2NXr1kjMbFM76d4roVn3LjYEWA/edit" target="_blank" rel="noopener noreferrer">Welcome Buddy application form</a> to get matched with your chosen buddy</p>
            </div>
            <div className="buddy-step">
              <div className="step-number">3</div>
              <h3>Attend Events</h3>
              <p>Your buddy can help you feel more comfortable at T4T events and introduce you to other community members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="buddy-grid-section">
        <div className="buddy-grid-content">
          <h2 className="buddy-section-title">Meet Our Welcome Buddies</h2>
          <p className="buddy-grid-intro">Click on a buddy to learn more about them and see if they're a good match for you!</p>
          
          <div className="buddy-grid">
            <div className="buddy-card" onClick={handleBuddyCardClick}>
              <div className="buddy-card-inner">
                <div className="buddy-card-front">
                  <img src="/assets/echo.png" alt="Echo" className="buddy-image" />
                  <div className="buddy-hover-text">Click to learn more</div>
                </div>
                <div className="buddy-card-back">
                  <h3 className="buddy-name">Echo</h3>
                  <p className="buddy-role">Discord Mod</p>
                  <div className="buddy-details">
                    <p><strong>Bio:</strong> Hiya! I help out with discord moderation, always feel free to reach out!</p>
                    <p><strong>Location:</strong> Harrisburg</p>
                    <p><strong>Sexuality:</strong> Gay / Demisexual / nonmonogamous</p>
                    <p><strong>Gender:</strong> Trans Mac Nonbinary / Demiboy</p>
                    <p><strong>Pronouns:</strong> He/they</p>
                    <p><strong>Interests:</strong> Painting jackets and leather, walking my cat, rave events!</p>
                    <p><strong>Quirks:</strong> I am almost always carrying a pup hood with me at 21+ spaces &lt;3</p>
                    <p><strong>Favorite T4T events:</strong> Battle Jacket Night, Cards Against Humanity</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="buddy-card" onClick={handleBuddyCardClick}>
              <div className="buddy-card-inner">
                <div className="buddy-card-front">
                  <img src="/assets/phizzi.png" alt="Phizzi" className="buddy-image" />
                  <div className="buddy-hover-text">Click to learn more</div>
                </div>
                <div className="buddy-card-back">
                  <h3 className="buddy-name">Phizzi</h3>
                  <p className="buddy-role">Welcome Buddy</p>
                  <div className="buddy-details">
                    <p><strong>Pronouns:</strong> It/fae/they/he in order of preference</p>
                    <p><strong>Bio:</strong> I am an AuDHD Disabled Genderqueer multimedia artist and community organizer with a passion for helping others.</p>
                    <p><strong>Location:</strong> Southwest Charlotte</p>
                    <p><strong>Sexuality:</strong> Omnisexual / Polyamorous</p>
                    <p><strong>Gender:</strong> Genderqueer</p>
                    <p><strong>Interests:</strong> Immersive entertainment / weird art</p>
                    <p><strong>Quirks:</strong> tooooooo many acronyms</p>
                    <p><strong>Favorite T4T events:</strong> Clothes swaps / Craft nights / Trivia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="buddy-card" onClick={handleBuddyCardClick}>
              <div className="buddy-card-inner">
                <div className="buddy-card-front">
                  <img src="/assets/jane.png" alt="Jane" className="buddy-image" />
                  <div className="buddy-hover-text">Click to learn more</div>
                </div>
                <div className="buddy-card-back">
                  <h3 className="buddy-name">Jane</h3>
                  <p className="buddy-role">Welcome Buddy</p>
                  <div className="buddy-details">
                    <p><strong>Pronouns:</strong> She/Her</p>
                    <p><strong>Bio:</strong> I'm a bisexual lesbian transwoman that just recently joined T4T in April 2025. I love to volunteer and help out with events and projects.</p>
                    <p><strong>Location:</strong> Kannapolis, NC</p>
                    <p><strong>Sexuality:</strong> Bisexual lesbian</p>
                    <p><strong>Gender:</strong> Transwoman</p>
                    <p><strong>Interests:</strong> Warhammer 40K, MTG, rats, DIY projects, and soulsborne games</p>
                    <p><strong>Quirks:</strong> ADHD</p>
                    <p><strong>Favorite T4T events:</strong> Social Suppers, Potlucks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="buddy-signup-content">
          <h2 className="buddy-section-title">Ready to Get Started?</h2>
          <p>Fill out our application form to get matched with your perfect Welcome Buddy!</p>
          <a 
            href="https://docs.google.com/forms/d/1ni2Qbv4hQHcyOot5q2NXr1kjMbFM76d4roVn3LjYEWA/edit" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="buddy-signup-button"
          >
            Sign Up for a Welcome Buddy
          </a>
        </div>

      

      <div className="buddy-cta">
        <div className="buddy-cta-content">
          <h3>Interested in becoming a Welcome Buddy?</h3>
          <p>Join our team of community connectors and help make T4T Charlotte an even more welcoming space!</p>
          <a 
            href="https://docs.google.com/forms/d/1DnRYsXwUgs2wWObd1PqQUAkGbMxtMpECBxg-YDKeNI8/edit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="buddy-apply-button"
          >
            Apply to be a Welcome Buddy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Buddy;
