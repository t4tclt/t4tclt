import React, { useState } from 'react';
import { Skill } from '../types/types';
import './SkillForm.css';

interface SkillFormProps {
  onSubmit: (skill: Omit<Skill, 'id'>) => void;
  onCancel: () => void;
  initialSkill?: Skill;
}

const SkillForm: React.FC<SkillFormProps> = ({
  onSubmit,
  onCancel,
  initialSkill
}) => {
  const [formData, setFormData] = useState<Omit<Skill, 'id'>>({
    name: initialSkill?.name || '',
    category: initialSkill?.category || '',
    proficiency: initialSkill?.proficiency || 5,
    yearsOfExperience: initialSkill?.yearsOfExperience || 0,
    level: initialSkill?.level || 'intermediate',
    comment: initialSkill?.comment || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Skill Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="proficiency">Proficiency (1-10)</label>
        <input
          type="number"
          id="proficiency"
          min="1"
          max="10"
          value={formData.proficiency}
          onChange={(e) => setFormData({ ...formData, proficiency: parseInt(e.target.value) })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="yearsOfExperience">Years of Experience</label>
        <input
          type="number"
          id="yearsOfExperience"
          min="0"
          value={formData.yearsOfExperience}
          onChange={(e) => setFormData({ ...formData, yearsOfExperience: parseInt(e.target.value) })}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="level">Level</label>
        <select
          id="level"
          value={formData.level}
          onChange={(e) => setFormData({ ...formData, level: e.target.value as Skill['level'] })}
          required
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comment (Optional)</label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
        />
      </div>

      <div className="form-actions">
        <button type="submit">
          {initialSkill ? 'Update Skill' : 'Add Skill'}
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SkillForm; 