import type { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Other', href: '/#other' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/hammouyounes',
    icon: 'github' as const,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/youness-hammou-171742309/',
    icon: 'linkedin' as const,
  },
  {
    name: 'Email',
    url: 'mailto:youness.hammou4@gmail.com',
    icon: 'email' as const,
  },
];
