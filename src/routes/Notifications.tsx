import React, { useState } from 'react';
import { Notification } from '../types/types';
import Logo from '../components/Logo';
import './Notifications.css';

// Mock notifications - replace with actual notifications in production
const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'skillRequest',
    title: 'New Skill Request Match',
    message: 'Someone is looking for help with React Native development',
    requestId: '1',
    fromUserId: '2',
    fromUsername: 'jane_doe',
    dateCreated: new Date(),
    isRead: false
  }
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const handleMarkAsRead = (notificationId: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  return (
    <>
      <div className="page-header">
        <Logo />
      </div>
      <div className="notifications-page">
        <div className="notifications-header">
          <h1>Notifications</h1>
          {notifications.some(n => !n.isRead) && (
            <button 
              className="mark-all-read-button"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          )}
        </div>
        <div className="notifications-list">
          {notifications.length === 0 ? (
            <div className="empty-state">
              <p>No notifications yet</p>
            </div>
          ) : (
            notifications.map(notification => (
              <div 
                key={notification.id}
                className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <div className="notification-content">
                  <h3>{notification.title}</h3>
                  <p>{notification.message}</p>
                  <span className="notification-meta">
                    From {notification.fromUsername} • {new Date(notification.dateCreated).toLocaleDateString()}
                  </span>
                </div>
                {!notification.isRead && (
                  <div className="unread-indicator" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Notifications; 