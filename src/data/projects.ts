import type { Project } from '../types';
import wasselImg from '../assets/wassel.webp';

export const projects: Project[] = [
  {
    id: 'E-Syndic',
    title: 'E-Syndic',
    description: 'A comprehensive real estate management platform designed to streamline operations for property managers and residents. The system facilitates seamless communication, transparent financial tracking, and efficient management of residential buildings and communities.',
    image: '/images/4ae04fc92aa6098e.webp',
    tags: ['Spring boot', 'React', 'TypeScript'],
    type: 'Web App',
    gradientFrom: 'from-orange-500/90',
    gradientTo: 'to-yellow-500/90',
    link: 'https://e-syndic.demo',
    github: 'https://github.com/hammouyounes/EasySyndic',
  },
  {
    id: 'Wassel-vite',
    title: 'Wassel-vite',
    description: 'A gamified habit-tracking app that grows virtual trees as you build positive habits. (Private Repository)',
    image: wasselImg,
    tags: ['Laravel', 'MySql', 'J-query'],
    type: 'Web App',
    gradientFrom: 'from-emerald-500/90',
    gradientTo: 'to-teal-500/90',
    link: 'https://improvement-tree.demo',
    github: 'https://github.com/hammouyounes/Project_Stage',
    disableGithub: true,
  },
];
