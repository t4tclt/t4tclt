import React, { useState } from 'react';
import { skillCategories, getAllSkills } from '../data/skillsData';
import { SkillRequest, User, RequestUrgency, Availability, Comment } from '../types/types';
import { FaChevronDown, FaTimes, FaPlus } from 'react-icons/fa';
import './SkillRequestForm.css';

interface SkillRequestFormProps {
  currentUser: User;
  onSubmit: (request: Omit<SkillRequest, 'id' | 'datePosted' | 'status'>) => void;
  onCancel: () => void;
}

const SkillRequestForm: React.FC<SkillRequestFormProps> = ({
  currentUser,
  onSubmit,
  onCancel
}) => {
  const [request, setRequest] = useState({
    title: '',
    description: '',
    requiredSkills: [] as string[],
    urgency: 'medium' as RequestUrgency,
    availability: {
      weekdays: false,
      weekends: false,
      preferredTimes: [] as string[],
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    } as Availability,
    comments: [] as Comment[]
  });
  const [selectedDays, setSelectedDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
  });

  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [showSuggestSkill, setShowSuggestSkill] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const allSkills = getAllSkills();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update weekdays and weekends based on selected days
    const weekdays = [selectedDays.monday, selectedDays.tuesday, selectedDays.wednesday, 
                     selectedDays.thursday, selectedDays.friday].some(day => day);
    const weekends = [selectedDays.saturday, selectedDays.sunday].some(day => day);
    
    const updatedRequest = {
      ...request,
      availability: {
        ...request.availability,
        weekdays,
        weekends
      },
      userId: currentUser.id,
      username: currentUser.username,
      userProfilePicture: currentUser.profilePicture
    };
    onSubmit(updatedRequest);
  };

  const handleSkillToggle = (skill: string) => {
    setRequest(prev => ({
      ...prev,
      requiredSkills: prev.requiredSkills.includes(skill)
        ? prev.requiredSkills.filter(s => s !== skill)
        : [...prev.requiredSkills, skill]
    }));
  };

  const handleTimeToggle = (time: string) => {
    setRequest(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        preferredTimes: prev.availability.preferredTimes.includes(time)
          ? prev.availability.preferredTimes.filter(t => t !== time)
          : [...prev.availability.preferredTimes, time]
      }
    }));
  };

  const handleDayToggle = (day: keyof typeof selectedDays) => {
    setSelectedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleSuggestSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim()) {
      handleSkillToggle(newSkill.trim());
      setNewSkill('');
      setShowSuggestSkill(false);
    }
  };

  const getCategoryClass = (categoryName: string): string => {
    const categoryMap: { [key: string]: string } = {
      'Development': 'development',
      'Design': 'design',
      'Business': 'business',
      'Marketing': 'marketing',
      'Other': 'other'
    };
    return categoryMap[categoryName] || 'other';
  };

  const days = [
    { key: 'monday', label: 'Monday' },
    { key: 'tuesday', label: 'Tuesday' },
    { key: 'wednesday', label: 'Wednesday' },
    { key: 'thursday', label: 'Thursday' },
    { key: 'friday', label: 'Friday' },
    { key: 'saturday', label: 'Saturday' },
    { key: 'sunday', label: 'Sunday' }
  ] as const;

  const timeOptions = ['Morning', 'Afternoon', 'Evening'];

  return (
    <form className="skill-request-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div className="form-title-section">
          <h2 className="form-title">Create Skill Request</h2>
          <p className="form-description">
            Describe what you need help with and select the required skills.
          </p>
        </div>
        <button 
          type="button" 
          className="close-button"
          onClick={onCancel}
          aria-label="Close form"
        >
          <FaTimes />
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={request.title}
          onChange={(e) => setRequest(prev => ({ ...prev, title: e.target.value }))}
          placeholder="Give your request a clear title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={request.description}
          onChange={(e) => setRequest(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Describe what you need help with in detail..."
          required
        />
      </div>

      <div className="form-group">
        <div className="skills-header">
          <label>Required Skills</label>
          <button
            type="button"
            className="suggest-skill-link"
            onClick={() => setShowSuggestSkill(true)}
          >
            <FaPlus /> Suggest Skill
          </button>
        </div>
        {showSuggestSkill && (
          <form className="suggest-skill-form" onSubmit={handleSuggestSkill}>
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter a new skill"
              className="suggest-skill-input"
            />
            <button type="submit" className="suggest-skill-button">Add</button>
            <button 
              type="button" 
              className="suggest-skill-cancel"
              onClick={() => {
                setShowSuggestSkill(false);
                setNewSkill('');
              }}
            >
              Cancel
            </button>
          </form>
        )}
        <div className="skills-categories">
          {skillCategories.map(category => (
            <div key={category.name} className="skill-category-group">
              <div 
                className="category-header"
                onClick={() => toggleCategory(category.name)}
              >
                <h3>
                  {category.name}
                  {request.requiredSkills.some(skill => 
                    category.skills.includes(skill)
                  ) && ` (${category.skills.filter(skill => 
                    request.requiredSkills.includes(skill)
                  ).length} selected)`}
                </h3>
                <FaChevronDown 
                  className={`category-toggle ${
                    expandedCategories.includes(category.name) ? 'expanded' : ''
                  }`}
                />
              </div>
              <div className={`skill-options ${
                expandedCategories.includes(category.name) ? 'expanded' : ''
              }`}>
                {category.skills.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`skill-button category-${getCategoryClass(category.name)} ${
                      request.requiredSkills.includes(skill) ? 'selected' : ''
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          ))}
          {request.requiredSkills.some(skill => !allSkills.includes(skill)) && (
            <div className="skill-category-group">
              <div className="category-header">
                <h3>Suggested Skills</h3>
              </div>
              <div className="skill-options expanded">
                {request.requiredSkills
                  .filter(skill => !allSkills.includes(skill))
                  .map(skill => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className="skill-button category-other selected"
                    >
                      {skill}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="form-group">
        <label>Urgency</label>
        <div className="urgency-options">
          {['low', 'medium', 'high'].map(level => (
            <button
              key={level}
              type="button"
              className={`urgency-button ${request.urgency === level ? 'selected' : ''} ${level}`}
              onClick={() => setRequest(prev => ({ ...prev, urgency: level as RequestUrgency }))}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Available Days</label>
        <div className="days-grid">
          {days.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`day-button ${selectedDays[key] ? 'selected' : ''}`}
              onClick={() => handleDayToggle(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Preferred Times</label>
        <div className="time-options">
          {timeOptions.map(time => (
            <button
              key={time}
              type="button"
              className={`time-button ${request.availability.preferredTimes.includes(time) ? 'selected' : ''}`}
              onClick={() => handleTimeToggle(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Post Request
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SkillRequestForm; 