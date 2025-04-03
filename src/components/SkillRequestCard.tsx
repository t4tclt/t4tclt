import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SkillRequest } from '../types/types';
import './SkillRequestCard.css';

interface SkillRequestCardProps {
  request: SkillRequest;
  onStatusChange?: (requestId: string, newStatus: 'open' | 'closed') => void;
  isOwner?: boolean;
}

const SkillRequestCard: React.FC<SkillRequestCardProps> = ({
  request,
  onStatusChange,
  isOwner = false
}) => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate(`/requests/${request.id}`);
  };

  return (
    <div className="skill-request-card">
      <div className="request-header">
        <div className="user-section">
          <Link to={`/profile/${request.username}`} className="user-link">
            <img 
              src={request.userProfilePicture} 
              alt={`${request.username}'s profile`} 
              className="user-avatar"
            />
            <span className="username">{request.username}</span>
          </Link>
        </div>
        <div className="content-section">
          <div className="request-title-row">
            <h3 
              className="request-title"
              onClick={handleTitleClick}
            >
              {request.title}
            </h3>
            <span className={`status-badge ${request.status}`}>
              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
            </span>
          </div>
          {isOwner && request.status === 'open' && onStatusChange && (
            <div className="request-meta">
              <button
                className="close-request-button"
                onClick={() => onStatusChange(request.id, 'closed')}
              >
                Mark as Closed
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="request-description">{request.description}</p>
      <div className="request-skills">
        {request.requiredSkills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
      <div className="request-footer">
        <span className="date-posted">
          Posted on {request.datePosted.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default SkillRequestCard; 