import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Other', href: '#other' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/younes-hammou',
    icon: 'github' as const,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/younes-hammou',
    icon: 'linkedin' as const,
  },
  {
    name: 'Email',
    url: 'mailto:contact@younes-hammou.dev',
    icon: 'email' as const,
  },
];
