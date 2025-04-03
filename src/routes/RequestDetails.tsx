import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SkillRequest, Comment, User } from '../types/types';
import Header from '../components/Header';
import { FaClock, FaExclamationCircle, FaCalendarAlt, FaGlobe } from 'react-icons/fa';
import defaultProfilePhoto from '../assets/default-profile.jpg';
import './RequestDetails.css';

// Mock data - replace with actual API calls in production
const mockRequest: SkillRequest = {
  id: '1',
  title: 'Need help with React Native Development',
  description: 'Looking for someone experienced in React Native to help with a mobile app project.',
  requiredSkills: ['React Native', 'JavaScript', 'Mobile Development'],
  userId: '2',
  username: 'jane_doe',
  userProfilePicture: defaultProfilePhoto,
  datePosted: new Date(),
  status: 'open',
  urgency: 'high',
  availability: {
    weekdays: true,
    weekends: false,
    preferredTimes: ['Morning', 'Evening'],
    timezone: 'PST'
  },
  comments: [
    {
      id: '1',
      userId: '3',
      username: 'john_smith',
      userProfilePicture: defaultProfilePhoto,
      content: 'I have experience with React Native and would love to help!',
      datePosted: new Date()
    }
  ]
};

const currentUser: User = {
  id: '1',
  username: 'testuser',
  discordUsername: 'testuser#1234',
  profilePicture: defaultProfilePhoto,
  location: 'San Francisco, CA',
  bio: '',
  skills: [],
  requests: [],
  fulfilledRequests: []
};

const RequestDetails: React.FC = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const navigate = useNavigate();
  const [request, setRequest] = useState<SkillRequest>(mockRequest);
  const [newComment, setNewComment] = useState('');

  const handleStatusChange = (newStatus: 'open' | 'closed') => {
    setRequest(prev => ({ ...prev, status: newStatus }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      userId: currentUser.id,
      username: currentUser.username,
      userProfilePicture: currentUser.profilePicture,
      content: newComment,
      datePosted: new Date()
    };

    setRequest(prev => ({
      ...prev,
      comments: [...prev.comments, comment]
    }));
    setNewComment('');
  };

  const getUrgencyColor = (urgency: 'low' | 'medium' | 'high') => {
    switch (urgency) {
      case 'low': return '#28a745';
      case 'medium': return '#ffc107';
      case 'high': return '#dc3545';
      default: return '#6c757d';
    }
  };

  return (
    <>
      <Header unreadNotifications={0} />
      <div className="request-details-page">
        <div className="request-header">
          <button className="back-button" onClick={() => navigate('/requests')}>
            ← Back to Requests
          </button>
          <div className="request-status">
            <span className={`status-badge ${request.status}`}>
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </span>
            {request.userId === currentUser.id && request.status === 'open' && (
              <button
                className="close-request-button"
                onClick={() => handleStatusChange('closed')}
              >
                Mark as Closed
              </button>
            )}
          </div>
        </div>

        <div className="request-content">
          <h1>{request.title}</h1>
          
          <div className="request-meta">
            <div className="user-info">
              <img
                src={request.userProfilePicture}
                alt={request.username}
                className="user-avatar"
              />
              <span className="username">{request.username}</span>
            </div>
            <span className="date-posted">
              Posted on {request.datePosted.toLocaleDateString()}
            </span>
          </div>

          <div className="request-details">
            <div className="detail-section">
              <h3>Description</h3>
              <p>{request.description}</p>
            </div>

            <div className="detail-section">
              <h3>Required Skills</h3>
              <div className="skills-list">
                {request.requiredSkills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Availability & Urgency</h3>
              <div className="availability-grid">
                <div className="availability-item">
                  <FaCalendarAlt />
                  <span>
                    Available: {request.availability.weekdays ? 'Weekdays' : ''} 
                    {request.availability.weekdays && request.availability.weekends ? ' & ' : ''}
                    {request.availability.weekends ? 'Weekends' : ''}
                  </span>
                </div>
                <div className="availability-item">
                  <FaClock />
                  <span>Preferred times: {request.availability.preferredTimes.join(', ')}</span>
                </div>
                <div className="availability-item">
                  <FaGlobe />
                  <span>Timezone: {request.availability.timezone}</span>
                </div>
                <div className="availability-item">
                  <FaExclamationCircle style={{ color: getUrgencyColor(request.urgency) }} />
                  <span>Urgency: {request.urgency.charAt(0).toUpperCase() + request.urgency.slice(1)}</span>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3>Comments</h3>
              <div className="comments-section">
                {request.comments.length === 0 ? (
                  <p className="no-comments">No comments yet. Be the first to comment!</p>
                ) : (
                  <div className="comments-list">
                    {request.comments.map(comment => (
                      <div key={comment.id} className="comment">
                        <div className="comment-header">
                          <img
                            src={comment.userProfilePicture}
                            alt={comment.username}
                            className="comment-avatar"
                          />
                          <div className="comment-meta">
                            <span className="comment-username">{comment.username}</span>
                            <span className="comment-date">
                              {comment.datePosted.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <p className="comment-content">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                <form className="comment-form" onSubmit={handleCommentSubmit}>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    rows={3}
                  />
                  <button type="submit" disabled={!newComment.trim()}>
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetails; 