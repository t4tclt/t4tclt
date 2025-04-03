import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Notification } from '../types/types';
import './Notifications.css';

interface NotificationsProps {
  notifications: Notification[];
  onMarkAsRead: (notificationId: string) => void;
}

const Notifications: React.FC<NotificationsProps> = ({
  notifications,
  onMarkAsRead
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  return (
    <div className="notifications-container">
      <button
        className="notifications-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="notifications-icon">🔔</span>
        {unreadCount > 0 && (
          <span className="notifications-badge">{unreadCount}</span>
        )}
      </button>

      {isOpen && (
        <div className="notifications-dropdown">
          <div className="notifications-header">
            <h3>Notifications</h3>
            {notifications.length > 0 && (
              <button
                className="mark-all-read"
                onClick={() => notifications
                  .filter(n => !n.isRead)
                  .forEach(n => onMarkAsRead(n.id))
                }
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="notifications-list">
            {notifications.length === 0 ? (
              <div className="empty-notifications">
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`notification-item ${!notification.isRead ? 'unread' : ''}`}
                  onClick={() => {
                    if (!notification.isRead) {
                      onMarkAsRead(notification.id);
                    }
                  }}
                >
                  <div className="notification-content">
                    <div className="notification-title">
                      {notification.title}
                    </div>
                    <p className="notification-message">
                      {notification.message}
                    </p>
                    {notification.requestId && (
                      <Link
                        to={`/requests/${notification.requestId}`}
                        className="notification-link"
                      >
                        View Request
                      </Link>
                    )}
                    <div className="notification-meta">
                      <span className="notification-time">
                        {formatDate(notification.dateCreated)}
                      </span>
                      {notification.fromUsername && (
                        <Link
                          to={`/profile/${notification.fromUserId}`}
                          className="notification-user"
                        >
                          {notification.fromUsername}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications; 