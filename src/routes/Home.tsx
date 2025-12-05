import './Home.css';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import { SiEventbrite } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Nav from '../components/Nav';
import { FaFacebook, FaInstagram, FaBluesky } from 'react-icons/fa6';

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
              <img src="/assets/rafflesept.png" alt="September Mutual Aid Raffle for Eden's Dental Work" className="flyer-image main-image" />
            </div>
            <div className="flyer-text">
              <h2 className="flyer-title">MUTUAL AID RAFFLE: Supporting Eden's Dental Work</h2>
              <div className="flyer-description">
                <p>Join us for this month's mutual aid raffle benefiting Eden's dental work! Your participation helps support our community member's essential healthcare needs.</p>
                <p>Raffle tickets are available for $5 each or 5 for $20, and all proceeds go directly to Eden's dental care. This is a great way to support our community while having a chance to win some amazing prizes! Don't forget to fill out the form to get your entry counted!</p>
                <ul>
                  <li>Cash App: $t4tclt and note "raffle"</li>
                  <li>Open Collective: Use the button below</li>
                </ul>
                <div className="flyer-buttons">
                  <a 
                    href="https://opencollective.com/t4t-charlotte/projects/mutual-aid-raffle" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flyer-button signup"
                  >
                    Donate Here
                  </a>
                  <a 
                    href="https://forms.gle/MwPC9HmZDr4hv1Sf7" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flyer-button tickets"
                  >
                    Enter Raffle
                  </a>
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
          <p>Check out the <a href="https://www.canva.com/design/DAG33DWr5j0/uznZVN2tKc7vHNEta8VW3Q/view?utm_content=DAG33DWr5j0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99f33bd92e" target="_blank" rel="noopener noreferrer">Current (December) Newsletter</a></p>
          <p>Previous newsletters: <a href="https://www.canva.com/design/DAG1428lVz4/G6F8nwCtJguScqBrqrEP_A/view?utm_content=DAG1428lVz4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0c1901b5b2" target="_blank" rel="noopener noreferrer">November</a>, <a href="https://www.canva.com/design/DAGxw8KTOk8/dfNsRlVgCWenNyTh2mfP_Q/view?utm_content=DAGxw8KTOk8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9e08f9583c" target="_blank" rel="noopener noreferrer">October</a>, <a href="https://www.canva.com/design/DAGvt-8J-2g/Uv6yeU9YQia__j_l1rgm5Q/view?utm_content=DAGvt-8J-2g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1d8ecd2cac" target="_blank" rel="noopener noreferrer">September</a>, <a href="https://www.canva.com/design/DAGsJA0Mp7I/wje2JtAKOErgXZmJ3_-puA/view?utm_content=DAGsJA0Mp7I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0f27443dbf" target="_blank" rel="noopener noreferrer">August</a>, <a href="https://www.canva.com/design/DAGpgokk5L0/lmO41Q8VTMlu4Nf2XbD8rQ/view?utm_content=DAGpgokk5L0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h74b6676927" target="_blank" rel="noopener noreferrer">July</a>, <a href="https://www.canva.com/design/DAGm0hRAxAg/WHMRpECUKKTIvggudI7e6g/view?utm_content=DAGm0hRAxAg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h925b55a634" target="_blank" rel="noopener noreferrer">June</a>, <a href="https://www.canva.com/design/DAGjcFWXDi0/eZ7LD-uCNwd0M6_lEESjDw/view?utm_content=DAGjcFWXDi0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h946dd6f84a" target="_blank" rel="noopener noreferrer">May</a>, <a href="https://www.canva.com/design/DAGi2bdnWHY/5bkplR1OKWGAJH-2VV5rug/view?utm_content=DAGi2bdnWHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=habf49a4208" target="_blank" rel="noopener noreferrer">April</a>, <a href="https://www.canva.com/design/DAGf-0CDtI4/LFesLcVsILWGVQhgS0vGWw/view?utm_content=DAGf-0CDtI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8acbb184d2" target="_blank" rel="noopener noreferrer">March</a></p>
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
    </div>
  );
}

export default Home;
