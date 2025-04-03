import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SkillForm from '../components/SkillForm';
import UserSkills from '../components/UserSkills';
import Header from '../components/Header';
import './Profile.css';
import { FaEdit, FaCheck, FaCamera, FaTimes, FaPlus } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import defaultProfilePhoto from '../assets/default-profile.jpg';
import { User, Notification, SkillRequest, Skill } from '../types/types';
import SkillRequestCard from '../components/SkillRequestCard';

// Mock requests data
const mockRequests: SkillRequest[] = [
  {
    id: '1',
    title: 'Need help with React Native Development',
    description: 'Looking for someone experienced in React Native to help with a mobile app project.',
    requiredSkills: ['React Native', 'JavaScript', 'Mobile Development'],
    userId: '1',
    username: 'JaneDoe',
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
    comments: []
  }
];

const mockFulfilledRequests: SkillRequest[] = [
  {
    id: '2',
    title: 'JavaScript Mentoring',
    description: 'Helped a junior developer learn JavaScript fundamentals.',
    requiredSkills: ['JavaScript', 'Teaching'],
    userId: '1',
    username: 'JaneDoe',
    userProfilePicture: defaultProfilePhoto,
    datePosted: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    status: 'closed',
    urgency: 'medium',
    availability: {
      weekdays: true,
      weekends: true,
      preferredTimes: ['Afternoon'],
      timezone: 'PST'
    },
    comments: []
  }
];

// Update mock user to include Discord username
const mockUser: User = {
  id: '1',
  username: "JaneDoe",
  discordUsername: "JaneDoe#1234",
  location: "San Francisco, CA",
  profilePicture: defaultProfilePhoto,
  bio: "Passionate about helping others and building community connections.",
  skills: [] as Skill[],
  requests: mockRequests,
  fulfilledRequests: mockFulfilledRequests
};

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

const Profile: React.FC = () => {
  const { username } = useParams<{ username?: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [userData, setUserData] = useState<User>(mockUser);
  const [editedProfile, setEditedProfile] = useState({
    username: userData.username,
    discordUsername: userData.discordUsername,
    location: userData.location,
    bio: userData.bio,
    profilePicture: userData.profilePicture
  });
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, this would fetch the user data from an API
    if (username && username !== userData.username) {
      // For now, just prevent editing if viewing another user's profile
      setIsEditing(false);
    }
  }, [username, userData.username]);

  const isOwnProfile = !username || username === userData.username;

  const handleProfileEdit = () => {
    if (!isOwnProfile) return;
    
    if (isEditing) {
      // Save changes
      setUserData({
        ...userData,
        ...editedProfile
      });
    }
    setIsEditing(!isEditing);
  };

  const handlePhotoClick = () => {
    if (isEditing && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setEditedProfile({
          ...editedProfile,
          profilePicture: base64String
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSkillEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setShowSkillForm(true);
  };

  const handleSkillDelete = (skillId: string) => {
    setUserData({
      ...userData,
      skills: userData.skills.filter(skill => skill.id !== skillId)
    });
  };

  const handleSkillSubmit = (skillData: Omit<Skill, 'id'>) => {
    if (editingSkill) {
      // Update existing skill
      setUserData({
        ...userData,
        skills: userData.skills.map(skill => 
          skill.id === editingSkill.id 
            ? { 
                ...skillData, 
                id: skill.id,
                proficiency: skillData.proficiency || 1,
                yearsOfExperience: skillData.yearsOfExperience || 0,
                level: skillData.level || 'beginner'
              }
            : skill
        )
      });
    } else {
      // Add new skill
      const newSkill: Skill = {
        ...skillData,
        id: Date.now().toString(),
        proficiency: skillData.proficiency || 1,
        yearsOfExperience: skillData.yearsOfExperience || 0,
        level: skillData.level || 'beginner'
      };
      setUserData({
        ...userData,
        skills: [...userData.skills, newSkill]
      });
    }
    setShowSkillForm(false);
    setEditingSkill(null);
  };

  const handleStatusChange = (requestId: string, newStatus: 'open' | 'closed') => {
    setUserData(prev => ({
      ...prev,
      requests: prev.requests.map(request =>
        request.id === requestId
          ? { ...request, status: newStatus }
          : request
      ),
      fulfilledRequests: newStatus === 'closed'
        ? [...prev.fulfilledRequests, prev.requests.find(r => r.id === requestId)!]
        : prev.fulfilledRequests
    }));
  };

  return (
    <>
      <Header unreadNotifications={notifications.filter(n => !n.isRead).length} />
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src={editedProfile.profilePicture || defaultProfilePhoto} 
              alt={`${userData.username}'s profile`} 
              className="profile-image"
              onClick={handlePhotoClick}
            />
            {isEditing && (
              <div className="profile-image-overlay" onClick={handlePhotoClick}>
                <FaCamera className="camera-icon" />
                <span>Change Photo</span>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          <div className="profile-info">
            <div className="profile-top">
              <div className="profile-names">
                <h1>{userData.username}</h1>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedProfile.discordUsername}
                    onChange={(e) => setEditedProfile({
                      ...editedProfile,
                      discordUsername: e.target.value
                    })}
                    placeholder="Discord Username (e.g., username#1234)"
                    className="discord-input"
                  />
                ) : (
                  <div className="discord-username">
                    <FaDiscord /> {userData.discordUsername}
                  </div>
                )}
              </div>
              {isOwnProfile && (
                <div className="profile-actions">
                  <button 
                    className="edit-profile-button"
                    onClick={handleProfileEdit}
                  >
                    {isEditing ? (
                      <>
                        <FaCheck /> Save
                      </>
                    ) : (
                      <>
                        <FaEdit /> Edit Profile
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            {isEditing ? (
              <div className="edit-fields">
                <input
                  type="text"
                  value={editedProfile.username}
                  onChange={(e) => setEditedProfile({
                    ...editedProfile,
                    username: e.target.value
                  })}
                  className="edit-input"
                  placeholder="Username"
                />
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    value={editedProfile.location}
                    onChange={(e) => setEditedProfile({
                      ...editedProfile,
                      location: e.target.value
                    })}
                    className="edit-input"
                    placeholder="Location"
                  />
                </div>
                <textarea
                  value={editedProfile.bio}
                  onChange={(e) => setEditedProfile({
                    ...editedProfile,
                    bio: e.target.value
                  })}
                  className="edit-input bio-input"
                  placeholder="Tell us about yourself..."
                />
              </div>
            ) : (
              <>
                <div className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{userData.location}</span>
                </div>
                <p className="bio">{userData.bio}</p>
              </>
            )}
          </div>
        </div>
        
        <div className="profile-content">
          {showSkillForm && isOwnProfile ? (
            <>
              <h2>{editingSkill ? 'Edit Skill' : 'Add New Skill'}</h2>
              <SkillForm
                onSubmit={handleSkillSubmit}
                onCancel={() => {
                  setShowSkillForm(false);
                  setEditingSkill(null);
                }}
                initialSkill={editingSkill || undefined}
              />
            </>
          ) : (
            <>
              <UserSkills
                skills={userData.skills}
                isEditing={isEditing && isOwnProfile}
                onEdit={isOwnProfile ? handleSkillEdit : undefined}
                onDelete={isOwnProfile ? handleSkillDelete : undefined}
                onAddSkill={isOwnProfile ? () => setShowSkillForm(true) : undefined}
              />

              <div className="requests-section">
                <div className="section-header">
                  <h2>Your Requests</h2>
                  <button 
                    onClick={() => navigate('/requests')} 
                    className="view-all-button"
                  >
                    View All Requests
                  </button>
                </div>
                <div className="requests-grid">
                  {userData.requests.length === 0 ? (
                    <p className="empty-message">You haven't made any requests yet.</p>
                  ) : (
                    userData.requests.map(request => (
                      <SkillRequestCard
                        key={request.id}
                        request={request}
                        onStatusChange={handleStatusChange}
                        isOwner={true}
                      />
                    ))
                  )}
                </div>
              </div>

              <div className="requests-section">
                <h2>Fulfilled Requests</h2>
                <div className="requests-grid">
                  {userData.fulfilledRequests.length === 0 ? (
                    <p className="empty-message">You haven't fulfilled any requests yet.</p>
                  ) : (
                    userData.fulfilledRequests.map(request => (
                      <SkillRequestCard
                        key={request.id}
                        request={request}
                        isOwner={false}
                      />
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile; 