import React from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';
import GlassCard from '../ui/GlassCard';
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

const SkillsSection: React.FC = () => {
  // Group skills by category
  const groupedSkills = skillCategories.map((category) => ({
    ...category,
    skills: skills.filter((skill) => skill.category === category.id),
  }));

  return (
    <section id="skills" className="py-24 md:py-32 relative">
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

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {groupedSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
            <GlassCard padding="lg" className="h-full">
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {category.label}
                </h3>
                <div
                  className="h-1 w-12 rounded-full mt-2"
                  style={{
                    background: categoryIndex === 0
                      ? 'linear-gradient(to right, #6366f1, #8b5cf6)'
                      : categoryIndex === 1
                      ? 'linear-gradient(to right, #22c55e, #10b981)'
                      : 'linear-gradient(to right, #ec4899, #f43f5e)',
                  }}
                />
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-3 p-3
                      rounded-xl bg-[var(--background)]/50
                      border border-[var(--card-border)]/50
                      hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/5
                      transition-all duration-200
                      group
                    "
                    style={{
                      animationDelay: `${skillIndex * 50}ms`,
                    }}
                  >
                    {/* Skill Icon Placeholder */}
                    <div className="
                      w-10 h-10 rounded-lg
                      bg-[var(--card)] border border-[var(--card-border)]
                      flex items-center justify-center
                      text-sm font-bold text-[var(--accent)]
                      group-hover:border-[var(--accent)]/30
                      transition-all duration-200
                    ">
                      {skill.name.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
