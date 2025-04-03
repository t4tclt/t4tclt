import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import './NotificationBell.css';

interface NotificationBellProps {
  unreadCount: number;
}

const NotificationBell: React.FC<NotificationBellProps> = ({ unreadCount }) => {
  const navigate = useNavigate();

  return (
    <button 
      className="notification-bell"
      onClick={() => navigate('/notifications')}
      aria-label={`${unreadCount} unread notifications`}
    >
      <FaBell />
      {unreadCount > 0 && (
        <span className="notification-badge">{unreadCount}</span>
      )}
    </button>
  );
};

export default NotificationBell; 