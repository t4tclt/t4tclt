import React from 'react';
import { useNavigate } from 'react-router-dom';
import SuggestSkillForm from '../components/SuggestSkillForm';
import { Skill } from '../components/Skills';
import './SuggestSkill.css';

const SuggestSkill: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (suggestion: {
    name: string;
    suggestedCategory: string;
    level: string;
    comment: string;
  }) => {
    // Transform the suggestion into a Skill object
    const skillSuggestion: Omit<Skill, 'id'> = {
      name: suggestion.name,
      category: 'Suggested Skills',
      level: suggestion.level as Skill['level'],
      comment: suggestion.comment
    };

    // Here you would typically send the suggestion to your backend
    console.log('New skill suggestion:', skillSuggestion);
    
    // Show success message
    alert('Thank you for your suggestion! It will be reviewed by our team.');
    
    // Navigate back to the profile
    navigate('/profile');
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="page-container">
      <h1>Suggest a New Skill</h1>
      <SuggestSkillForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default SuggestSkill; 