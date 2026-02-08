// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type?: string;
  gradientFrom?: string;
  gradientTo?: string;
  link?: string;
  github?: string;
}

// Skill Types
export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

// About Card Types
export interface AboutCard {
  id: string;
  type: 'name' | 'education' | 'skills' | 'location' | 'mindset';
  title?: string;
  content?: string;
  gridSpan?: string;
}

// Social Link Types
export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter';
}

// Theme Types
export type Theme = 'light' | 'dark';

// Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface TechBadgeProps {
  name: string;
  icon?: string;
  className?: string;
}
