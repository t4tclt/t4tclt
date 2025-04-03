export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Writing & Communication",
    skills: [
      "Creative Writing",
      "Technical Writing",
      "Editing",
      "Transcription",
      "Public Speaking",
      "Journalism",
      "Resume Building",
      "ESL Tutoring",
      "English Literature",
      "Essay Review"
    ]
  },
  {
    name: "Home & Maintenance",
    skills: [
      "Handiwork",
      "Minor House Repairs",
      "Door Repair",
      "Basic Car Maintenance",
      "Cleaning",
      "Organizing",
      "Room Decorating",
      "Landscaping",
      "Gardening",
      "Native Plant Growth",
      "Physical Labor",
      "Moving Help",
      "Lifting Heavy Items",
      "Yard Work"
    ]
  },
  {
    name: "Arts & Crafts",
    skills: [
      "Painting",
      "Mini Painting",
      "Visual Art",
      "Photography",
      "Sewing",
      "Mending",
      "Embroidery",
      "Hand Sewing",
      "Zine Making",
      "Upcycling"
    ]
  },
  {
    name: "Beauty & Self-Care",
    skills: [
      "Skincare",
      "Makeup",
      "Haircuts",
      "Hair Styling",
      "Hair Coloring",
      "Nails",
      "Fake Nails"
    ]
  },
  {
    name: "Technology",
    skills: [
      "Computer Help (Hardware)",
      "Computer Help (Software)",
      "Computer Troubleshooting",
      "Programming",
      "Technical Support"
    ]
  },
  {
    name: "Food & Cooking",
    skills: [
      "Cooking",
      "Baking",
      "Cooking Instruction"
    ]
  },
  {
    name: "Support & Services",
    skills: [
      "Transportation",
      "Temporary Housing",
      "Childcare",
      "Emotional Peer Support",
      "Body Doubling",
      "Making Phone Calls",
      "Application Assistance",
      "Resource Navigation",
      "Medical Advocacy",
      "Medical Information Help",
    ]
  },
  {
    name: "Education & Training",
    skills: [
      "Tutoring",
      "Driver's Education",
      "Physical Training",
      "Skills Training"
    ]
  },
  {
    name: "Financial Services",
    skills: [
      "Budgeting",
      "Financial Planning",
      "Financial Modeling",
      "Money Management",
      "Basic Tax Returns"
    ]
  },
  {
    name: "Organization & Planning",
    skills: [
      "Organizational Planning",
      "Sorting",
      "Project Organization",
      "Event Planning"
    ]
  }
];

export const getAllSkills = (): string[] => {
  return skillCategories.reduce((acc, category) => [...acc, ...category.skills], [] as string[]);
};

export const getCategoryForSkill = (skillName: string): string => {
  const category = skillCategories.find(cat => 
    cat.skills.includes(skillName)
  );
  return category?.name || "Other";
}; 