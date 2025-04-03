import React, { useState } from 'react';
import { skillCategories } from '../data/skillsData';
import './SkillForm.css';

interface SuggestSkillFormProps {
  onSubmit: (suggestion: {
    name: string;
    suggestedCategory: string;
    level: string;
    comment: string;
  }) => void;
  onCancel: () => void;
}

const SuggestSkillForm: React.FC<SuggestSkillFormProps> = ({ onSubmit, onCancel }) => {
  const [suggestion, setSuggestion] = useState({
    name: '',
    suggestedCategory: '',
    level: 'beginner',
    comment: ''
  });
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalCategory = suggestion.suggestedCategory === 'New Category' 
      ? newCategoryName 
      : suggestion.suggestedCategory;

    const suggestionComment = `SKILL SUGGESTION:\nSkill Name: ${suggestion.name}\nSuggested Category: ${finalCategory}\n\nUser Comment: ${suggestion.comment}`;
    
    onSubmit({
      ...suggestion,
      suggestedCategory: finalCategory,
      comment: suggestionComment
    });
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Suggest a New Skill</h2>
      <p className="form-description">
        Help us grow our skills database by suggesting new skills that would be valuable for the community.
      </p>

      <div className="form-group">
        <label htmlFor="skillName">Skill Name</label>
        <input
          type="text"
          id="skillName"
          value={suggestion.name}
          onChange={(e) => setSuggestion({ ...suggestion, name: e.target.value })}
          placeholder="Enter the skill you'd like to suggest"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="suggestedCategory">Category</label>
        <select
          id="suggestedCategory"
          value={suggestion.suggestedCategory}
          onChange={(e) => setSuggestion({ ...suggestion, suggestedCategory: e.target.value })}
          required
        >
          <option value="">Select a category</option>
          {skillCategories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
          <option value="New Category">Suggest a New Category</option>
        </select>
      </div>

      {suggestion.suggestedCategory === 'New Category' && (
        <div className="form-group">
          <label htmlFor="newCategory">New Category Name</label>
          <input
            type="text"
            id="newCategory"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Enter a new category name"
            required
          />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="level">Your Skill Level</label>
        <select
          id="level"
          value={suggestion.level}
          onChange={(e) => setSuggestion({ ...suggestion, level: e.target.value })}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="comment">Why should this skill be added?</label>
        <textarea
          id="comment"
          value={suggestion.comment}
          onChange={(e) => setSuggestion({ ...suggestion, comment: e.target.value })}
          placeholder="Please explain why this skill would be valuable for the community and provide any relevant context..."
          required
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Submit Suggestion
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SuggestSkillForm; 