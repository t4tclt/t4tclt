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
          <p>We're excited to share our community zines with you! Each issue is a collection of essays, poems, and art from the trans+ community in Charlotte. If you'd like to contribute to the next issue, please get in touch with us on <a href="/discord">discord</a>.</p>
          
          <div className="zine-issues">
            <div className="zine-issue">
              <img src="/assets/zine/issue-1/zine-1-cover.png" alt="T4T Zine Issue 1 Cover" className="zine-cover" />
              <div className="zine-issue-details">
                <h3>Issue One - June 2025</h3>
                <p>Our inaugural issue featuring poetry, personal essays, and artwork exploring gender, community, and mutual aid in Charlotte.</p>
                <div className="zine-buttons">
                  <a 
                    href="/assets/zine/issue-1/zine-1-digital.pdf" 
                    className="zine-button digital" 
                    download="T4T-Zine.Issue-1.Digital-Version.pdf"
                    rel="noopener noreferrer"
                  >
                    Digital Version
                  </a>
                  <a 
                    href="/assets/zine/issue-1/zine-1-print.pdf" 
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
              <img src="/assets/zine/issue-2/zine-2-cover.png" alt="T4T Zine Issue 2 Cover" className="zine-cover" />
              <div className="zine-issue-details">
                <h3>Issue Two - August 2025</h3>
                <p>Our Pride issue celebrating queer joy, resistance, and community power. Featuring local artists, writers, and activists sharing their stories and visions for the future. Released at Charlotte Pride 2025!</p>
                <div className="zine-buttons">
                  <a 
                    href="/assets/zine/issue-2/zine-2-digital.pdf" 
                    className="zine-button digital" 
                    download="T4T-Zine.Issue-2.Digital-Version.pdf"
                    rel="noopener noreferrer"
                  >
                    Digital Version
                  </a>
                  <a 
                    href="/assets/zine/issue-2/zine-2-print.pdf" 
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

          <div className="zine-issue">
              <img src="/assets/zine/issue-3/zine-3-cover.png" alt="T4T Zine Issue 3 Cover" className="zine-cover" />
              <div className="zine-issue-details">
                <h3>Issue Three - March 2026</h3>
                <p>Our third issue celebrating queer joy, resistance, and community power. Featuring local artists, writers, and activists sharing their stories and visions for the future. Print version coming soon!</p>
                <div className="zine-buttons">
                  <a 
                    href="/assets/zine/issue-3/zine-3-digital.pdf" 
                    className="zine-button digital" 
                    download="T4T-Zine.Issue-3.Digital-Version.pdf"
                    rel="noopener noreferrer"
                  >
                    Digital Version
                  </a>
                  {/* <a 
                    href="/assets/zine/issue-3/zine-3-print.pdf" 
                    className="zine-button print" 
                    download="T4T-Zine.Issue-3.Print-Version.pdf"
                    rel="noopener noreferrer"
                  >
                    Print Version
                  </a> */}
                </div>
              </div>
            </div>
  
          <div className="zine-coming-soon">
            <div className="zine-coming-soon-content">
              <h3>Issue Four - Coming Soon!</h3>
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