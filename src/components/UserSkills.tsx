import React from 'react';
import { Link } from 'react-router-dom';
import { Skill } from '../types/types';
import { FaPlus } from 'react-icons/fa';
import './Skills.css';

interface UserSkillsProps {
  skills: Skill[];
  isEditing?: boolean;
  onEdit?: (skill: Skill) => void;
  onDelete?: (skillId: string) => void;
  onAddSkill?: () => void;
}

const UserSkills: React.FC<UserSkillsProps> = ({
  skills,
  isEditing,
  onEdit,
  onDelete,
  onAddSkill
}) => {
  const getLevelFromProficiency = (proficiency: number): 'beginner' | 'intermediate' | 'advanced' => {
    if (proficiency <= 3) return 'beginner';
    if (proficiency <= 7) return 'intermediate';
    return 'advanced';
  };

  const hasSkills = skills.length > 0;

  return (
    <div className="user-skills">
      <div className="skills-header">
        <h2>Skills</h2>
        <div className="skills-actions">
          <Link to="/suggest-skill" className="suggest-skill-button">
            Suggest New Skill
          </Link>
          {isEditing && (
            <button className="add-skill-button" onClick={onAddSkill}>
              Add Skill
            </button>
          )}
        </div>
      </div>

      {hasSkills ? (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className={`skill-level ${getLevelFromProficiency(skill.proficiency)}`}>
                  {getLevelFromProficiency(skill.proficiency)}
                </span>
              </div>
              <div className="skill-category">{skill.category}</div>
              <div className="skill-details">
                <span>Experience: {skill.yearsOfExperience} years</span>
                <span>Proficiency: {skill.proficiency}/10</span>
              </div>
              {skill.comment && (
                <div className="skill-comment">{skill.comment}</div>
              )}
              {isEditing && (
                <div className="skill-actions">
                  <button 
                    className="edit-button"
                    onClick={() => onEdit?.(skill)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => onDelete?.(skill.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="no-skills">
          <p>You haven't added any skills yet.</p>
          <p>Click the "Add Skill" button to get started!</p>
        </div>
      )}
    </div>
  );
};

export default UserSkills; 