import './Resources.css';
import Nav from '../components/Nav';

function Resources() {
  return (
    <div className="resources-page-container">
      <Nav />
      
      <div className="resources-hero">
        <h1 className="resources-hero-title">Resources</h1>
        <p className="resources-hero-subtitle">Find support, information, and community resources for trans folx in Charlotte</p>
      </div>

      <div className="resources-content-section">
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
                href="https://docs.google.com/document/d/1qabSHxZLsznSrTdi7WFVSe-Am-ZjY53MOYj9PHRYaV8/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Herbal Remedies Guide
              </a>
              <a 
                href="https://docs.google.com/document/d/1P4H0urHAuSWH1Dr9jHu0msuvmQgwXISLJcBiKBFwJoo/edit?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                So, You Think You're Hypermobile: A Guide to EDS
              </a>
              <a 
                href="https://docs.google.com/document/d/1lZLdzquV9ct6RdcJzfPKBWpLvPu1qKC5-w0EZzrkiRQ/edit?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Trans & Neurodivergent Money Guide
              </a>
              <a 
                href="https://docs.google.com/spreadsheets/d/1JJEE7FSAIjQl46QESpXExwSQr0J_SUbRFqi37jOuY9Q/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Charlotte Food Pantry List
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
                href="/vanish"
              >
                Vanish Ink Exclusive Deal with T4T for Laser Hair Removal
              </a>
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
              <a 
                href="https://www.carolinastransnetwork.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Carolinas Trans Network
              </a>
              <a 
                href="https://charlottetranshealth.org/find-a-provider/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Charlotte Trans Health - Find a Provider
              </a>
            </div>
          </div>
        </div>

        <div className="programs-section">
          <h3 className="resource-category-title">Programs</h3>
          <div className="programs-grid">
            <div className="program-card">
              <div className="program-content">
                <h4 className="program-title">Food Share Program</h4>
                <p>Our community food sharing initiative connects members who have food to share with those who need it. Join our Discord to participate in food swaps, community meals, and mutual aid support. Don't have food to share? We have a list of <a href="https://docs.google.com/spreadsheets/d/1JJEE7FSAIjQl46QESpXExwSQr0J_SUbRFqi37jOuY9Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">food banks and pantries in the area</a> that you can pick up from and share what you don't need.</p>
                <a 
                  href="https://forms.gle/VK2iekb6TbEMfnmP6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="program-button"
                >
                  Join Food Share
                </a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-content">
                <h4 className="program-title">Ride Share Program</h4>
                <p>Need a ride to an appointment, event, or support group? Our ride share program connects community members for safe, reliable transportation. Available for medical visits, grocery trips, community events and anything deemed necessary for your wellbeing.</p>
                <p>Apply below for ride reimbursement or to coordinate a ride with a community member.</p>
                <a 
                  href="https://forms.gle/nJCf9CiNYFaavfQp8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="program-button"
                >
                  Apply for a ride reimbursement
                </a>
              </div>
            </div>

            <div className="program-card">
              <div className="program-content">
                <h4 className="program-title">Gender Affirming Clothes Closet</h4>
                <p>Access free gender-affirming clothing, accessories, and binders through our community closet. We wil be accepting donations of gently used clothing starting next year and provide a safe, affirming space for trying on and selecting items that help you feel more like yourself.</p>
                <p>Our next swap is November 15th 12-5pm at CPCC in room 1100 of the Viess Building. Check the calendar for more details and volunteer sorting days!</p>
              </div>
            </div>

            <div className="program-card">
              <div className="program-content">
                <h4 className="program-title">Welcome Buddy Program</h4>
                <p>New to T4T Charlotte? Connect with a Welcome Buddy who can help you navigate the community, answer questions, and make you feel at home. Our Welcome Buddies are friendly volunteers who provide peer support and guidance for newcomers.</p>
                <p>Whether you're looking for event recommendations, want to know more about our programs, or just need someone to chat with, our Welcome Buddies are here to help you feel welcomed and connected.</p>
                <a 
                  href="/buddy" 
                  className="program-button"
                >
                  Meet Our Welcome Buddies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
