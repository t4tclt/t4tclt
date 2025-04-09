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
          T4Tclt is a trans-led organization committed to building gender expansive community in Charlotte. 
          We focus on mutual aid, transformative justice and cultivating safe community spaces. 
          </p>
          <p>
            We have a monthly board game night at Hattie's, Craft Night, Social Supper, quarterly 
            clothes swap, discord community of over 300 local trans folx and other events.
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
          <button className="feedback-button" onClick={() => window.open('https://forms.gle/pgP5rvp77m9g9LP97', '_blank')}>
            Give Feedback
          </button>
        </div>
      </div>
      <div className='calendar-container'>
        <h2 className="calendar-title">T4T Events</h2>
        <iframe 
          title="T4T Charlotte Events Calendar"
          src="https://calendar.google.com/calendar/embed?src=dc8fd8df8554e9e4e5d34ea13918977ac6b9c3e617d5f701073d9af220df680e%40group.calendar.google.com&ctz=America%2FNew_York" 
          height="600"
        ></iframe>
      </div>
      <div className="summary-section">
        <h2 className="summary-title-main">About Us</h2>
        <div className="summary-item left">
          <div className="summary-title">Clothes Swaps</div>
          <div className="summary-content">
            Providing space for folx to get rid of their old clothes and find gender affirming clothes
          </div>
        </div>
        
        <div className="summary-item right">
          <div className="summary-title">Monthly Board Game Night</div>
          <div className="summary-content">
            Come join us for casual board games at Hattie's every Third Friday, Craft Night every Second Saturday and Social Supper every First Saturday
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
      <div className="help-section">
        <h2 className="help-title">Need Help?</h2>
        <div className="help-content">
          <p>Looking for support or resources? Click the button to fill out our form and we'll get back to you as soon as possible.</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfFXQzEQlNzwmB6pIowRXtq44etKOKZVrIs4wBof55f_gz_Jg/viewform" 
            target="_blank" 
            rel="noopener noreferrer"
            className="help-button"
          >
            Request Assistance
          </a>
        </div>
      </div>

      <div className="donate-section">
        <h2 className="donate-title">Donate to T4T</h2>
        <div className="donate-content">
          <p>Your donations help us continue providing resources, organizing events, and supporting our trans community in Charlotte. Every contribution makes a difference!</p>
          <a 
            href="https://opencollective.com/t4t-charlotte" 
            target="_blank" 
            rel="noopener noreferrer"
            className="donate-button"
          >
            Support Our Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
