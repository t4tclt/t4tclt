import './Home.css';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import { SiEventbrite } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Nav from '../components/Nav';
import { FaFacebook, FaInstagram, FaBluesky } from 'react-icons/fa6';
import { NEWSLETTER_LINKS } from '../constants';

function Home() {
  return (
    <div className="home-container">
      <Nav />
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
        <a href="https://bsky.app/profile/t4tclt.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaBluesky size={32}/>
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
            Click the button below to learn more about T4T Charlotte and what we do!
          </p>
          <a href="/about" className="feedback-button">
            Learn More About T4T
          </a>
        </div>
      </div>
      <div id="events" className='calendar-container'>
        <h2 className="calendar-title">T4T Events</h2>
        <iframe 
          title="T4T Charlotte Events Calendar"
          src="https://calendar.google.com/calendar/embed?src=dc8fd8df8554e9e4e5d34ea13918977ac6b9c3e617d5f701073d9af220df680e%40group.calendar.google.com&ctz=America%2FNew_York" 
          height="600"
        ></iframe>
        
        <div className="flyer-section">
          <div className="flyer-content">
            <div className="flyer-images">
              <img src="/assets/yearendsurvey.png" alt="T4T Year End Survey" className="flyer-image main-image" />
            </div>
            <div className="flyer-text">
              <h2 className="flyer-title">YEAR END SURVEY</h2>
              <div className="flyer-description">
                <p>Your feedback is essential to helping us better serve our community! We want to hear from you about your experiences with T4T this year, what worked, what didn't, and how we can improve in the future.</p>
                <p>This survey helps us understand the impact we're making, identify areas for growth, and ensure we're meeting the needs of our community. Your responses will directly shape our programs and events in the coming year.</p>
                <p><strong>We'll be presenting a comprehensive report in the new year</strong> based on your feedback, so please take a few minutes to share your thoughts. Every response matters and helps us build a stronger, more responsive community organization.</p>
                <div className="flyer-buttons">
                  <a 
                    href="https://forms.gle/xtddWZvz5rzZC3JF7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flyer-button tickets"
                  >
                    Take the Survey
                  </a>
                  <a 
                    href="/members" 
                    className="flyer-button signup"
                  >
                    View our Year End Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flyer-section">
          <div className="flyer-content">
            <div className="flyer-images">
              <img src="/assets/clothes swap.png" alt="The Plus sized Clothes Swap" className="flyer-image main-image" />
            </div>
            <div className="flyer-text">
              <h2 className="flyer-title">Plus Sized Clothes Swap</h2>
              <div className="flyer-description">
              <p>The clothes swap is back, this time focused on plus sizes! Come check out our clothes size XL and above sorted by size so that folks can easily find things. Bring clothes or accessories (of any size!) to swap or just come take some home! We have plenty to share so tell your friends. We will be in the community room of the South Blvd Library from 1am-5pm.</p>
              <p>We will be in the community room of the South Blvd Library from 1am-5pm.</p>
              <p>There will also be a sorting day ahead of time on Thursday, January 8th from 4pm-8pm at the Independence library. If you'd like to see a specific size that day, please reach out!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="zine" className="zine-section">
        <div className="zine-content">
          <h2 className="zine-title">Check out our zine!</h2>
          <div className="zine-covers">
            <a href="/assets/T4T1-Spreads.pdf" download="T4T-Zine.Issue-1.Digital-Version.pdf" rel="noopener noreferrer">
              <img src="/assets/cover1.png" alt="T4T Zine Issue 1 Cover" className="zine-cover" />
            </a>
            <a href="/assets/T4T Zine Issue 2_Spreads.pdf" download="T4T-Zine.Issue-2.Digital-Version.pdf" rel="noopener noreferrer">
              <img src="/assets/cover2.png" alt="T4T Zine Issue 2 Cover" className="zine-cover" />
            </a>
          </div>
          <a href="/zine" className="zine-learn-more-button">Learn More!</a>
        </div>
      </div>

      <div id="about" className="summary-section">
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
            Connect with over 500 local trans folx with location subsections and join our discord game nights
          </div>
        </div>
        
        <div className="summary-item right">
          <div className="summary-title">Mutual Aid Opportunities</div>
          <div className="summary-content">
            We use discord to coordinate our community into asking for and offering each other help as well as coordinate aid for our community with our food and rideshare programs
          </div>
        </div>
        <div className="summary-item left">
          <div className="summary-title">Zine</div>
          <div className="summary-content">
            We have a quarterly creative zine that folks can submit to, see above for a download! We also have a resource zine for the area
          </div>
        </div>
        <div className="summary-item right">
          <div className="summary-title">And More!</div>
          <div className="summary-content">
            Speed Friending, Picnics, Craft Nights, Movie Nights, Co-working, Potlucks, Restaurant outings, Skill Shares, informal meetups and more
          </div>
        </div>
        
        <div className="about-learn-more">
          <a href="/about" className="about-learn-more-button">
            Learn More About T4T
          </a>
        </div>
      </div>
      <div id="newsletter" className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Our Newsletter</h2>
          <p>Stay updated with our latest news, events, and community highlights! Every month we send out a newsletter with all the upcoming events and a recap of the previous month's events.</p> 
          <p>Check out the <a href={NEWSLETTER_LINKS.current.url} target="_blank" rel="noopener noreferrer">Current ({NEWSLETTER_LINKS.current.month}) Newsletter</a></p>
          <p>Previous newsletters: {NEWSLETTER_LINKS.past.map(({ month, url }, index) => (
            <span key={month}>
              {index > 0 && ', '}
              <a href={url} target="_blank" rel="noopener noreferrer">{month}</a>
            </span>
          ))}</p>
          <div className="email-signup"><iframe width="600" height="604" title='Email Signup' src="https://sibforms.com/serve/MUIFAPoIxaiYsNaOfWYXlUhl8vtAN1NRAImpopsucj2mDCWHaxb6XI5aiFnegh-ZrrlBfNbK221EwbLe1qvBERzUhalVpcCaMVpyh_ivZ_7yf9FquySuS3tDKTS9pzcDSUHcvV-VI7PyErLyUh4ALOa9jhDEeF7NajbbDqfdu8flA9FMLpwAWZTw9NdO5gtf3hEK7OOiw9uQfKjN"></iframe></div>
        </div>
      </div>
      <div id="help" className="help-section">
        <h2 className="help-title">Need Help?</h2>
        <div className="help-content">
          <p>Looking for support or resources? Check out our <a href="/resources">Resources page</a> for comprehensive guides, community resources, and programs, or check out our <a href="https://docs.google.com/document/d/1L0MP5RohGWxOJIDB83y_LOS3ucYIFYm4U7YtH4l7ETk/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">resource guide</a>. Click the button below to fill out our form and we'll get back to you as soon as possible.</p>
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
      <div id="donate" className="donate-section">
        <h2 className="donate-title">Donate to T4T</h2>
        <div className="donate-content">
          <p>Your donations help us continue providing resources, organizing events, and supporting our trans community in Charlotte. Every contribution makes a difference!</p>
          <a 
            href="https://opencollective.com/t4t-charlotte/donate" 
            target="_blank" 
            rel="noopener noreferrer"
            className="donate-button"
          >
            Support Our Work
          </a>
        </div>
      </div>

      <div id="contact" className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-content">
          <form
            action="https://formsubmit.co/t4tcharlottenc@gmail.com"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                required
                placeholder="Your message"
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
