import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '/images/react.svg', category: 'frontend' },
  { name: 'Angular', icon: '/images/react.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/images/typescript.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/images/tailwind.svg', category: 'frontend' },
  
  // Backend
  { name: 'Spring boot', icon: '/images/python.svg', category: 'backend' },
  { name: 'Laravel', icon: '/images/python.svg', category: 'backend' },
  { name: 'MySql', icon: '/images/postgresql.svg', category: 'backend' },
  { name: 'MongoDB', icon: '/images/mongodb.svg', category: 'backend' },
  
  // Tools
  { name: 'Git', icon: '/images/git.svg', category: 'tools' },
  { name: 'Docker', icon: '/images/docker.svg', category: 'tools' },
];

export const skillCategories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools & DevOps' },
] as const;
