import './Zine.css';
import Nav from '../components/Nav';

function Zine() {
  return (
    <div className="zine-page-container">
      <Nav />      
      <div className="zine-hero">
        <h1 className="zine-hero-title">T4T Zine</h1>
        <p className="zine-hero-subtitle">Community creativity, stories, and art from trans folx in Charlotte</p>
      </div>

      <div className="zine-section">
        <div className="zine-content">
          <h2 className="zine-title">Check out our zine!</h2>
          <p>We're excited to share our community zines with you! Each issue is a collection of essays, poems, and art from the trans+ community in Charlotte. If you'd like to contribute to the next issue, please get in touch with us on discord.</p>
          
          <div className="zine-issues">
            <div className="zine-issue">
              <img src="/assets/cover1.png" alt="T4T Zine Issue 1 Cover" className="zine-cover" />
              <div className="zine-issue-details">
                <h3>Issue One - June 2025</h3>
                <p>Our inaugural issue featuring poetry, personal essays, and artwork exploring gender, community, and mutual aid in Charlotte.</p>
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

            <div className="zine-issue">
              <img src="/assets/cover2.png" alt="T4T Zine Issue 2 Cover" className="zine-cover" />
              <div className="zine-issue-details">
                <h3>Issue Two - August 2025</h3>
                <p>Our Pride issue celebrating queer joy, resistance, and community power. Featuring local artists, writers, and activists sharing their stories and visions for the future. Released at Charlotte Pride 2025!</p>
                <div className="zine-buttons">
                  <a 
                    href="/assets/T4T Zine Issue 2_Spreads.pdf" 
                    className="zine-button digital" 
                    download="T4T-Zine.Issue-2.Digital-Version.pdf"
                    rel="noopener noreferrer"
                  >
                    Digital Version
                  </a>
                  <a 
                    href="/assets/T4T Zine Issue 2_Booklet.pdf" 
                    className="zine-button print" 
                    download="T4T-Zine.Issue-2.Print-Version.pdf"
                    rel="noopener noreferrer"
                  >
                    Print Version
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="zine-coming-soon">
            <div className="zine-coming-soon-content">
              <h3>Issue Three - Coming Soon!</h3>
              <p>We're working on our next issue and would love to feature your work! Submit your poetry, essays, artwork, or other creative pieces to be part of our trans and gender non-conforming community zine.</p>
              <a 
                href="/zine-submission" 
                className="zine-button submit"
              >
                Submit Your Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zine; 