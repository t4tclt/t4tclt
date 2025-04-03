import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import NotificationBell from './NotificationBell';
import { FaUser } from 'react-icons/fa';
import './Header.css';

interface HeaderProps {
  unreadNotifications: number;
}

const Header: React.FC<HeaderProps> = ({ unreadNotifications }) => {
  return (
    <header className="page-header">
      <div className="header-content">
        <Logo />
        <div className="header-actions">
          <NotificationBell unreadCount={unreadNotifications} />
          <Link to="/profile" className="profile-button" aria-label="Go to profile">
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 