import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SkillRequest, User, Notification, RequestUrgency } from '../types/types';
import SkillRequestCard from '../components/SkillRequestCard';
import SkillRequestForm from '../components/SkillRequestForm';
import Header from '../components/Header';
import { FaSearch } from 'react-icons/fa';
import './SkillRequests.css';

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

// Mock user data - replace with actual user data in production
const currentUser: User = {
  id: '1',
  username: 'testuser',
  discordUsername: 'testuser#1234',
  profilePicture: '/assets/default-profile.jpg',
  location: 'San Francisco, CA',
  bio: '',
  skills: [],
  requests: [],
  fulfilledRequests: []
};

const SkillRequests: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'open' | 'closed'>('all');
  const [urgencyFilter, setUrgencyFilter] = useState<'all' | RequestUrgency>('all');
  const [requests, setRequests] = useState<SkillRequest[]>([
    // Mock data - replace with actual API calls in production
    {
      id: '1',
      title: 'Need help with React Native Development',
      description: 'Looking for someone experienced in React Native to help with a mobile app project.',
      requiredSkills: ['React Native', 'JavaScript', 'Mobile Development'],
      userId: '2',
      username: 'jane_doe',
      userProfilePicture: '/assets/default-profile.jpg',
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
  ]);
  const [notifications, setNotifications] = useState(mockNotifications);

  // Filter and search logic
  const filteredRequests = useMemo(() => {
    return requests.filter(request => {
      const matchesSearch = searchQuery === '' || 
        request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.requiredSkills.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesStatus = statusFilter === 'all' || request.status === statusFilter;
      const matchesUrgency = urgencyFilter === 'all' || request.urgency === urgencyFilter;

      return matchesSearch && matchesStatus && matchesUrgency;
    });
  }, [requests, searchQuery, statusFilter, urgencyFilter]);

  const handleCreateRequest = (request: Omit<SkillRequest, 'id' | 'datePosted' | 'status'>) => {
    const newRequest: SkillRequest = {
      ...request,
      id: Date.now().toString(), // Replace with proper ID generation in production
      datePosted: new Date(),
      status: 'open'
    };

    setRequests(prev => [newRequest, ...prev]);
    setShowForm(false);
  };

  const handleStatusChange = (requestId: string, newStatus: 'open' | 'closed') => {
    setRequests(prev =>
      prev.map(request =>
        request.id === requestId
          ? { ...request, status: newStatus }
          : request
      )
    );
  };

  const filterRequests = (status: 'open' | 'closed' | 'all') => {
    if (status === 'all') return requests;
    return requests.filter(request => request.status === status);
  };

  return (
    <>
      <Header unreadNotifications={notifications.filter(n => !n.isRead).length} />
      <div className="skill-requests-page">
        <div className="page-header">
          <h1>Skill Requests</h1>
          <button
            className="create-request-btn"
            onClick={() => setShowForm(true)}
          >
            Create Request
          </button>
        </div>

        <div className="search-filter-container">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search requests by title, description, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filters">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as 'all' | 'open' | 'closed')}
              className="filter-select"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>

            <select
              value={urgencyFilter}
              onChange={(e) => setUrgencyFilter(e.target.value as 'all' | RequestUrgency)}
              className="filter-select"
            >
              <option value="all">All Urgency</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <SkillRequestForm
                onSubmit={handleCreateRequest}
                onCancel={() => setShowForm(false)}
                currentUser={currentUser}
              />
            </div>
          </div>
        )}

        <div className="requests-container">
          {filteredRequests.length === 0 ? (
            <div className="empty-state">
              {searchQuery || statusFilter !== 'all' || urgencyFilter !== 'all' ? (
                <p>No requests match your search criteria.</p>
              ) : (
                <p>No skill requests yet. Be the first to create one!</p>
              )}
            </div>
          ) : (
            filteredRequests.map(request => (
              <SkillRequestCard
                key={request.id}
                request={request}
                onStatusChange={
                  request.userId === currentUser.id
                    ? handleStatusChange
                    : undefined
                }
                isOwner={request.userId === currentUser.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SkillRequests; 