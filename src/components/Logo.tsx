import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../T4T_WebsiteLogo.svg';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="logo-link">
      <img src={logo} alt="T4T Logo" className="logo-image" />
    </Link>
  );
};

export default Logo; 