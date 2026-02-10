import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiSpringboot, SiReact, SiLaravel, SiAngular, SiDocker, 
  SiTypescript, SiNodedotjs, SiMysql, SiTailwindcss, 
  SiFramer, SiNextdotjs, SiPostgresql, SiPrisma, 
  SiRedux, SiVercel, SiPostman, SiAmazonwebservices, SiKubernetes 
} from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import SkillSphere from '../ui/SkillSphere';

// Map skills to the SkillSphere format with CDN icons
const sphereSkills = [
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
];

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const SkillTag = ({ name, icon }: Skill) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-[#161616] border border-[#27272a] rounded-xl hover:border-[#8b5cf6] hover:bg-[#1c1c20] transition-all duration-300 group cursor-default">
    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
      {icon}
    </span>
    <span className="text-sm font-medium text-[#a1a1aa] group-hover:text-[#e4e4e7] transition-colors">
      {name}
    </span>
  </div>
);

const SkillsSection: React.FC = () => {
  const skillGroups = [
    // Row 1
    [
      { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'ReactJS', icon: <SiReact className="text-[#61DAFB]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },

    ],
    // Row 2
    [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: 'Angular', icon: <SiAngular className="text-[#DD0031]" /> },
    ],
    // Row 3
    [
      { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    ],
    // Row 4
    [
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
    ]
  ];

  return (
    <section id="skills" className="py-12 md:py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, var(--gradient-start) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="section relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/20">
            Tech Stack
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            <span className="text-[var(--foreground)]">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* 3D Skill Sphere */}
        <motion.div
            className="h-[400px] md:h-[550px] mb-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SkillSphere 
              skills={sphereSkills} 
              radius={4.5} 
              autoRotateSpeed={0.08} 
            />
        </motion.div>

        {/* New Pill Layout */}
        <div className="flex flex-col items-center justify-center gap-6 mt-12">
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-wrap justify-center gap-4 max-w-5xl px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {group.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
