import './About.css';
import Nav from '../components/Nav';
import T4TLogo from '../T4T_WebsiteLogo.svg';


function About() {
  const handleStaffCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardInner = event.currentTarget.querySelector('.about-staff-card-inner');
    if (cardInner) {
      cardInner.classList.toggle('flipped');
    }
  };

  return (
    <div className="about-page-container">
      <Nav />
      <div className="pattern-background"></div>
      <div className="logo-container">
        <img src={T4TLogo} alt="T4T Logo" className="about-logo" />
      </div>
      
      <div className="about-hero">
        <h1 className="about-hero-title">About T4T Charlotte</h1>
        <p className="about-hero-subtitle">Building gender expansive community in Charlotte through safe spaces, mutual aid, and transformative justice</p>
      </div>

      <div className="about-info-section">
        <div className="about-info-content">
          <p>
          T4Tclt is a trans-led organization committed to building gender expansive community in Charlotte.
           We focus on cultivating safe community spaces as well as supporting the community through mutual
            aid and transformative justice. 
          </p>
          <p>
          Not sure if T4Tclt is right for you? Everyone is always welcome at our events, 
          so come see if the vibe feels right! For lists of upcoming events, check out the calendar or monthly newsletter below. 
          </p>
          <p>
            We're always looking to hear from folx on what type of 
            events they'd like to see and how we can best serve the community. 
            Click the button below to give us some feedback or make requests!
          </p>
          <button className="about-feedback-button" onClick={() => window.open('https://forms.gle/XhcRF7fgDSY7pu2p8', '_blank')}>
            Give Feedback
          </button>
        </div>
      </div>

      <div className="about-summary-section">
        <h2 className="about-summary-title-main">What We Do</h2>
        <div className="about-summary-item left">
          <div className="about-summary-title">Clothes Swaps</div>
          <div className="about-summary-content">
            Providing space for folx to get rid of their old clothes and find gender affirming clothes
          </div>
        </div>
        
        <div className="about-summary-item right">
          <div className="about-summary-title">Monthly Board Game Night</div>
          <div className="about-summary-content">
            Come join us for casual board games at Hattie's every Third Friday, Craft Night every Second Saturday and Social Supper every First Saturday
          </div>
        </div>
        
        <div className="about-summary-item left">
          <div className="about-summary-title">Verified Discord Community</div>
          <div className="about-summary-content">
            Connect with over 500 local trans folx with location subsections and join our discord game nights
          </div>
        </div>
        
        <div className="about-summary-item right">
          <div className="about-summary-title">Mutual Aid Opportunities</div>
          <div className="about-summary-content">
            We use discord to coordinate our community into asking for and offering each other help as well as coordinate aid for our community with our food and rideshare programs
          </div>
        </div>
        <div className="about-summary-item left">
          <div className="about-summary-title">Zine</div>
          <div className="about-summary-content">
            We have a quarterly creative zine that folks can submit to, see above for a download! We also have a resource zine for the area
          </div>
        </div>
        <div className="about-summary-item right">
          <div className="about-summary-title">And More!</div>
          <div className="about-summary-content">
            Speed Friending, Picnics, Craft Nights, Movie Nights, Co-working, Potlucks, Restaurant outings, Skill Shares, informal meetups and more
          </div>
        </div>
      </div>

      <div className="about-programs-section">
        <h3 className="about-resource-category-title">Programs</h3>
        <div className="about-programs-grid">
          <div className="about-program-card">
            <div className="about-program-content">
              <h4 className="about-program-title">Food Share Program</h4>
              <p>Our community food sharing initiative connects members who have food to share with those who need it. Join our Discord to participate in food swaps, community meals, and mutual aid support. Don't have food to share? We have a list of <a href="https://docs.google.com/spreadsheets/d/1JJEE7FSAIjQl46QESpXExwSQr0J_SUbRFqi37jOuY9Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">food banks and pantries in the area</a> that you can pick up from and share what you don't need.</p>
              <a 
                href="https://forms.gle/VK2iekb6TbEMfnmP6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-program-button"
              >
                Join Food Share
              </a>
            </div>
          </div>

          <div className="about-program-card">
            <div className="about-program-content">
              <h4 className="about-program-title">Ride Share Program</h4>
              <p>Need a ride to an appointment, event, or support group? Our ride share program connects community members for safe, reliable transportation. Available for medical visits, grocery trips, community events and anything deemed necessary for your wellbeing.</p>
              <p>Apply below for ride reimbursement or to coordinate a ride with a community member.</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeCvv9jomcUwf2YzDeUXVxBX0Wdi-vs4h4u7N5t4k0FXX0afw/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about-program-button"
              >
                Apply for a ride reimbursement
              </a>
            </div>
          </div>

          <div className="about-program-card">
            <div className="about-program-content">
              <h4 className="about-program-title">Gender Affirming Clothes Closet</h4>
              <p>Access free gender-affirming clothing, accessories, and binders through our community closet. We wil be accepting donations of gently used clothing starting next year and provide a safe, affirming space for trying on and selecting items that help you feel more like yourself.</p>
              <p>Our next swap is November 15th 12-5pm at CPCC in room 1100 of the Viess Building. Check the calendar for more details and volunteer sorting days!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-staff-section">
        <h2 className="about-staff-title">Meet Our Team</h2>
        <div className="about-staff-grid">
          <div className="about-staff-card" onClick={handleStaffCardClick}>
            <div className="about-staff-card-inner">
              <div className="about-staff-card-front">
                <img src="/assets/quinn.png" alt="Quinn Fleur" className="about-staff-image" />
                <div className="about-staff-hover-text">Click to learn more</div>
              </div>
              <div className="about-staff-card-back">
                <h3 className="about-staff-name">Quinn Fleur</h3>
                <p className="about-staff-role">T4T Organizer/Founder</p>
                <div className="about-staff-bio">
                  <p><strong>Bio:</strong> I am an autistic trans man who has been with T4T since the beginning! I'm an herbal kitchen witch passionate about inclusion</p>
                  <p><strong>Location:</strong> Southeast Charlotte</p>
                  <p><strong>Sexuality:</strong> Queer, Polyam, Aceflux</p>
                  <p><strong>Gender:</strong> Non-binary Trans Man</p>
                  <p><strong>Interests:</strong> Drag, community organizing</p>
                  <p><strong>Quirks:</strong> ADHD, Autism, Ehlers Danlos Syndrome</p>
                  <p><strong>Favorite T4T events:</strong> Craft Night, Speed Friending, Drag Shows</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-staff-card" onClick={handleStaffCardClick}>
            <div className="about-staff-card-inner">
              <div className="about-staff-card-front">
                <img src="/assets/ember.png" alt="Ember" className="about-staff-image" />
                <div className="about-staff-hover-text">Click to learn more</div>
              </div>
              <div className="about-staff-card-back">
                <h3 className="about-staff-name">Ember</h3>
                <p className="about-staff-role">T4T Organizer</p>
                <div className="about-staff-bio">
                  <p><strong>Pronouns:</strong> They/Xe/She</p>
                  <p><strong>Bio:</strong> Non-binary, disabled queer. I help build and maintain the technology side of T4T as well as help out with events when I can</p>
                  <p><strong>Location:</strong> Southeast Charlotte</p>
                  <p><strong>Sexuality:</strong> Queer, Polyam, Demi, T4T</p>
                  <p><strong>Gender:</strong> Non-binary</p>
                  <p><strong>Interest:</strong> Building community, mutual aid, programming, technology, sci-fi</p>
                  <p><strong>Quirks:</strong> Disabled, hEDS, neurodivergent</p>
                  <p><strong>Favorite T4T events:</strong> T4Tea Parties, Skill Shares, MTG, Board Game Nights</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-staff-card" onClick={handleStaffCardClick}>
            <div className="about-staff-card-inner">
              <div className="about-staff-card-front">
                <img src="/assets/nickle.png" alt="Nickle" className="about-staff-image" />
                <div className="about-staff-hover-text">Click to learn more</div>
              </div>
              <div className="about-staff-card-back">
                <h3 className="about-staff-name">Nickle</h3>
                <p className="about-staff-role">T4T Organizer and Lead Discord Mod</p>
                <div className="about-staff-bio">
                  <p><strong>Bio:</strong> I am a nonbinary trans woman who has been working with T4T since we made our discord server! I'm a ADHD mess that loves community!</p>
                  <p><strong>Location:</strong> Gastonia</p>
                  <p><strong>Sexuality:</strong> Bisexual/queer</p>
                  <p><strong>Gender:</strong> nonbinary trans woman/ demigirl</p>
                  <p><strong>Interests:</strong> mythology, gaming, reading</p>
                  <p><strong>Quirks:</strong> ADHD, Autism</p>
                  <p><strong>Favorite T4T events:</strong> Craft Night, Board Game Night, Social Supper</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-staff-card" onClick={handleStaffCardClick}>
            <div className="about-staff-card-inner">
              <div className="about-staff-card-front">
                <img src="/assets/taiga.png" alt="Taiga" className="about-staff-image" />
                <div className="about-staff-hover-text">Click to learn more</div>
              </div>
              <div className="about-staff-card-back">
                <h3 className="about-staff-name">Taiga</h3>
                <p className="about-staff-role">Zine Organizer</p>
                <div className="about-staff-bio">
                  <p><strong>Pronouns:</strong> She/Her, He/Him</p>
                  <p><strong>Bio:</strong> I use my experience in media development to help produce the T4T zine. My passion is fiction writing that I self-publish. Always looking to become more inter-disciplinary.</p>
                  <p><strong>Location:</strong> Mallard Creek, N Graham Street Area</p>
                  <p><strong>Sexuality:</strong> Asexual, Polyamorous</p>
                  <p><strong>Gender:</strong> Transfem, Genderfluid</p>
                  <p><strong>Interests:</strong> TTRPGs, Classical Literature, Video Editing, Painting</p>
                  <p><strong>Quirks:</strong> Autism, ADHD</p>
                  <p><strong>Favorite T4T events:</strong> Social Suppers, Clothes Swaps</p>
                  <a 
                    href="https://linktr.ee/quillrabbit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="about-staff-apply-button"
                  >
                    Check out Taiga's Writing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="about-staff-card">
            <div className="about-staff-card-content">
              <div className="about-staff-info-shown">
                <h3 className="about-staff-name">AJ</h3>
                <p className="about-staff-role">Zine Team Coordinator</p>
                <div className="about-staff-bio">
                  <p><strong>Pronouns:</strong> He/They/It</p>
                  <p><strong>Role:</strong> Zine Team Coordinator</p>
                  <p>AJ helps coordinate our zine production and works with contributors to create amazing community content. He is often helping with layout and making of the zine.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-staff-card" onClick={handleStaffCardClick}>
            <div className="about-staff-card-inner">
              <div className="about-staff-card-front">
                <div className="about-staff-placeholder">
                  <span>More Staff Coming Soon!</span>
                </div>
                <div className="about-staff-hover-text">More team members will be added</div>
              </div>
              <div className="about-staff-card-back">
                <h3 className="about-staff-name">Join Our Team</h3>
                <p className="about-staff-role">We're Growing!</p>
                <div className="about-staff-bio">
                  <p>Interested in becoming part of our organizing team? We're always looking for passionate community members to help make T4T Charlotte even better!</p>
                  <p>We have many volunteer roles available including Aid Coordinator, Event Coordinator, Social Media Coordinator, Zine Team Coordinator, and more!</p>
                  <a 
                    href="https://docs.google.com/forms/d/1DnRYsXwUgs2wWObd1PqQUAkGbMxtMpECBxg-YDKeNI8/edit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="about-staff-apply-button"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-donate-section">
        <h2 className="about-donate-title">Donate to T4T</h2>
        <div className="about-donate-content">
          <p>Your donations help us continue providing resources, organizing events, and supporting our trans community in Charlotte. Every contribution makes a difference!</p>
          <a 
            href="https://opencollective.com/t4t-charlotte/donate" 
          target="_blank"
          rel="noopener noreferrer"
            className="about-donate-button"
          >
            Support Our Work
          </a>
        </div>
      </div>

      <div className="about-contact-section">
        <h2 className="about-contact-title">Contact Us</h2>
        <div className="about-contact-content">
          <form
            action="https://formsubmit.co/t4tcharlottenc@gmail.com"
            method="POST"
            className="about-contact-form"
          >
            <div className="about-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="about-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email"
              />
            </div>
            <div className="about-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Subject"
              />
            </div>
            <div className="about-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className="about-submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
