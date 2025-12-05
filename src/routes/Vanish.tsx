import './Vanish.css';
import Nav from '../components/Nav';

function Vanish() {
  return (
    <div className="vanish-container">
      <Nav />
      <div className="vanish-content">
        <iframe
          src="/assets/Vanish.pdf"
          className="vanish-pdf"
          title="Vanish Document"
        />
      </div>
    </div>
  );
}

export default Vanish;


