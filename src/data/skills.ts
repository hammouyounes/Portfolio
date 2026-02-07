import type { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: '/images/react.svg', category: 'frontend' },
  { name: 'Next.js', icon: '/images/nextjs.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/images/typescript.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/images/tailwind.svg', category: 'frontend' },
  { name: 'Vue.js', icon: '/images/vue.svg', category: 'frontend' },
  
  // Backend
  { name: 'Node.js', icon: '/images/nodejs.svg', category: 'backend' },
  { name: 'Python', icon: '/images/python.svg', category: 'backend' },
  { name: 'PostgreSQL', icon: '/images/postgresql.svg', category: 'backend' },
  { name: 'MongoDB', icon: '/images/mongodb.svg', category: 'backend' },
  { name: 'GraphQL', icon: '/images/graphql.svg', category: 'backend' },
  
  // Tools
  { name: 'Git', icon: '/images/git.svg', category: 'tools' },
  { name: 'Docker', icon: '/images/docker.svg', category: 'tools' },
  { name: 'AWS', icon: '/images/aws.svg', category: 'tools' },
  { name: 'Figma', icon: '/images/figma.svg', category: 'tools' },
  { name: 'VS Code', icon: '/images/vscode.svg', category: 'tools' },
];

export const skillCategories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools & DevOps' },
] as const;
