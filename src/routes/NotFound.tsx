import './NotFound.css';
import T4TLogo from '../T4T_WebsiteLogo.svg';
import Nav from '../components/Nav';

function NotFound() {
  return (
    <div className="not-found-container">
      <Nav />
      <div className="not-found-content">
        <div className="not-found-logo">
          <img src={T4TLogo} alt="T4T Logo" className="not-found-logo-img" />
        </div>
        <div className="not-found-text">
          <h1 className="not-found-title">404 - Page Not Found</h1>
          <p className="not-found-message">
            Oops! It looks like this page got lost in the gender binary! 
            Don't worry, we'll help you find your way back to our amazing community.
          </p>
          <div className="not-found-actions">
            <a href="/" className="not-found-button primary">
              Back to Home
            </a>
            <a href="/about" className="not-found-button secondary">
              Learn About T4T
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
