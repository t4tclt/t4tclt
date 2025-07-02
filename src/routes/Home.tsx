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
            Click the button below to give us some feedback or make requests!
          </p>
          <button className="feedback-button" onClick={() => window.open('https://forms.gle/XhcRF7fgDSY7pu2p8', '_blank')}>
            Give Feedback
          </button>
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
            <img 
              src="/assets/ZineNight.png" 
              alt="Zine Night Event" 
              className="flyer-image"
            />
            <div className="flyer-text">
              <h3 className="flyer-title">Zine Night</h3>
              <div className="flyer-description">
                <p>
                  For this Zine night we will be putting together doodles and magazine cutouts for the second issue of our community's zine!
                  Come get a sneak peek of the zine and help add some art to it!
                </p>
                <p>
                  Things to bring: Zines for inspiration, Old magazines to cut up, pens, markers, sketchbooks, stickers and/or a creative attitude!
                </p>
                <p>
                  Gilde's private back room is our Zine making spot. Wheelchair users can access Gilde via a longer but accessible route (ramp). 
                  There's limited free parking, food, drink, and both.
                </p>
                <a 
                  href="https://opencollective.com/t4t-charlotte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="donate-button"
                >
                  Donate to Keep the Zine Running
                </a>
              </div>
            </div>
          </div>   
        </div>
        </div>

      <div id="zine" className="zine-section">
        <div className="zine-content">
          <h2 className="zine-title">Check out our zine!</h2>
          <p>We're excited to share our first zine with you! It's a collection of essays, poems, and art from the trans+ community in Charlotte. We hope you enjoy it! 
            If you'd like to print a copy (or several to distribute), you can download the PDF below or read the digital version.
            If you'd like to contribute to the next issue of the zine, please get in touch with us on discord.
          </p>
          <div className="zine-buttons">
            <a 
              href="/assets/T4T1-Spreads.pdf" 
              className="zine-button digital" 
              download="T4T-Zine.Issue-1.Digital-Version.pdf"
              rel="noopener noreferrer"
            >
              Digital Version
            </a>
            <a 
              href="/assets/T4T1-Booklet.pdf" 
              className="zine-button print" 
              download="T4T-Zine.Issue-1.Print-Version.pdf"
              rel="noopener noreferrer"
            >
              Print Version
            </a>
          </div>
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
            Connect with over 400 local trans folx with location subsections and join our discord game nights
          </div>
        </div>
        
        <div className="summary-item right">
          <div className="summary-title">Mutual Aid Opportunities</div>
          <div className="summary-content">
            We use discord to coordinate our community into asking for and offering each other help as well as coordinate aid for our community
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
            Speed Friending, Picnics, Craft Nights, Movie Nights, Co-working, Potlucks, Restaurant outings
          </div>
        </div>
      </div>
      <div id="newsletter" className="newsletter-section">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Our Newsletter</h2>
          <p>Stay updated with our latest news, events, and community highlights! Every month we send out a newsletter with all the upcoming events and a recap of the previous month's events.</p> 
          <p>Check out the <a href="https://www.canva.com/design/DAGpgokk5L0/lmO41Q8VTMlu4Nf2XbD8rQ/view?utm_content=DAGpgokk5L0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h74b6676927" target="_blank" rel="noopener noreferrer"> Current July Newsletter</a></p>
          <p>Or, check out some of our older newsletters, like the <a href="https://www.canva.com/design/DAGm0hRAxAg/WHMRpECUKKTIvggudI7e6g/view?utm_content=DAGm0hRAxAg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h925b55a634" target="_blank" rel="noopener noreferrer">June Newsletter</a> </p>
    
          <p><a href="https://www.canva.com/design/DAGjcFWXDi0/eZ7LD-uCNwd0M6_lEESjDw/view?utm_content=DAGjcFWXDi0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h946dd6f84a" target="_blank" rel="noopener noreferrer">May Newsletter</a> </p>
         <p><a href="https://www.canva.com/design/DAGi2bdnWHY/5bkplR1OKWGAJH-2VV5rug/view?utm_content=DAGi2bdnWHY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=habf49a4208" target="_blank" rel="noopener noreferrer">April Newsletter</a> </p>  
         <p><a href="https://www.canva.com/design/DAGf-0CDtI4/LFesLcVsILWGVQhgS0vGWw/view?utm_content=DAGf-0CDtI4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8acbb184d2" target="_blank" rel="noopener noreferrer">March Newsletter</a> </p>  
          <div className="email-signup"><iframe width="600" height="604" title='Email Signup' src="https://sibforms.com/serve/MUIFAPoIxaiYsNaOfWYXlUhl8vtAN1NRAImpopsucj2mDCWHaxb6XI5aiFnegh-ZrrlBfNbK221EwbLe1qvBERzUhalVpcCaMVpyh_ivZ_7yf9FquySuS3tDKTS9pzcDSUHcvV-VI7PyErLyUh4ALOa9jhDEeF7NajbbDqfdu8flA9FMLpwAWZTw9NdO5gtf3hEK7OOiw9uQfKjN"></iframe></div>
        </div>
      </div>
      <div id="help" className="help-section">
        <h2 className="help-title">Need Help?</h2>
        <div className="help-content">
          <p>Looking for support or resources? Check out our <a href="https://docs.google.com/document/d/1L0MP5RohGWxOJIDB83y_LOS3ucYIFYm4U7YtH4l7ETk/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer">resource guide</a> and click the button to fill out our form and we'll get back to you as soon as possible.</p>
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

      <div id="resources" className="resources-section">
        <h2 className="resources-title">Resources</h2>
        <div className="resources-content">
          <div className="resource-category">
            <h3 className="resource-category-title">T4T Resources</h3>
            <div className="resource-links">
              <a 
                href="https://docs.google.com/document/d/1A8GYMMVjo7gPZdA1nGedNwIw0sYjvb9vDvCtCZ3m7iE/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Queer Sex and Bodily Autonomy Guide
              </a>
              <a 
                href="https://docs.google.com/document/d/1RMwGjV46_AVT6jsHbFsBRZBrfDYr1WWTI_H2bvjBQz8/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Know Your Rights: Boundaries and Consent
              </a>
              <a 
                href="https://docs.google.com/document/d/1eBg1U5qzwLkB7X9jueoZ2TYbx8lTuuSU4FwTFdd1ttI/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Beginner's Worksheet on Consent, Boundaries, and Red Flags in Kink
              </a>
              <a 
                href="https://docs.google.com/document/d/1L0MP5RohGWxOJIDB83y_LOS3ucYIFYm4U7YtH4l7ETk/edit?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Trans Folx Guide to Charlotte Resources
              </a>
            </div>
          </div>

          <div className="resource-category">
            <h3 className="resource-category-title">Community Resources</h3>
            <div className="resource-links">
              <a 
                href="https://docs.google.com/spreadsheets/d/1zMl4i4fyOanl-Au_tUUpWYzWDyTrbdfz79aGTEav2gs/edit?gid=0#gid=0" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                NC Gender Affirming Surgeons Directory
              </a>
              <a 
                href="https://docs.google.com/document/d/1U5cxmHfuz-9mLM7tsXgQSRhtNpXd1BpKzW2ILhXMq8M/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                SS Name and Gender Marker Change Walkthrough - NC
              </a>
              <a 
                href="https://docs.google.com/document/d/1arceK5ZsxXCTe8hDDSWS-TM4XRIREvVAjfzYhK-4-c4/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                NC Name Change - Checklist/Pricelist
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="donate" className="donate-section">
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
