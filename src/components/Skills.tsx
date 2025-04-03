import React from 'react';
import './Skills.css';

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  comment?: string;
}

interface SkillsProps {
  skills: Skill[];
  isEditing?: boolean;
  onEdit?: (skill: Skill) => void;
  onDelete?: (skillId: string) => void;
}

const Skills: React.FC<SkillsProps> = ({ skills, isEditing, onEdit, onDelete }) => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-header">
              <h3>{skill.name}</h3>
              <span className={`skill-level ${skill.level}`}>
                {skill.level}
              </span>
            </div>
            <div className="skill-category">{skill.category}</div>
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
    </div>
  );
};

export default Skills; 