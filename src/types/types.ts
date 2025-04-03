export interface User {
  id: string;
  username: string;
  discordUsername: string;
  profilePicture: string;
  location: string;
  bio: string;
  skills: Skill[];
  requests: SkillRequest[];
  fulfilledRequests: SkillRequest[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  yearsOfExperience: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  comment?: string;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  userProfilePicture: string;
  content: string;
  datePosted: Date;
}

export type RequestUrgency = 'low' | 'medium' | 'high';

export interface Availability {
  weekdays: boolean;
  weekends: boolean;
  preferredTimes: string[];
  timezone: string;
}

export interface SkillRequest {
  id: string;
  title: string;
  description: string;
  requiredSkills: string[];
  userId: string;
  username: string;
  userProfilePicture: string;
  datePosted: Date;
  status: 'open' | 'closed';
  urgency: RequestUrgency;
  availability: Availability;
  comments: Comment[];
}

export interface Notification {
  id: string;
  type: string;
  title: string;
  message: string;
  requestId: string;
  fromUserId: string;
  fromUsername: string;
  dateCreated: Date;
  isRead: boolean;
} 