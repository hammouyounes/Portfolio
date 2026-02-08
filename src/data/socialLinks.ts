export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email';
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    href: 'https://github.com/hammouyounes',
    icon: 'github',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/youness-hammou-171742309/',
    icon: 'linkedin',
  },
  {
    id: 'email',
    name: 'Email',
    href: 'mailto:youness.hammou4@gmail.com',
    icon: 'email',
  },
];
