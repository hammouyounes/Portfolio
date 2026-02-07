import React from 'react';
import { skills, skillCategories } from '../../data/skills';
import GlassCard from '../ui/GlassCard';

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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/20">
            Tech Stack
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {groupedSkills.map((category, categoryIndex) => (
            <GlassCard key={category.id} padding="lg" className="h-full">
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
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--muted)] mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {['REST APIs', 'GraphQL', 'CI/CD', 'Agile', 'Testing', 'SEO', 'Performance Optimization', 'Responsive Design'].map((skill) => (
              <span
                key={skill}
                className="
                  px-3 py-1.5 text-xs font-medium
                  rounded-full
                  bg-[var(--card)] border border-[var(--card-border)]
                  text-[var(--muted)]
                  hover:text-[var(--accent)] hover:border-[var(--accent)]/30
                  transition-all duration-200
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
