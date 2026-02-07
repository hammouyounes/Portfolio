import React from 'react';
import GlassCard from '../ui/GlassCard';
import { MapPinIcon, GraduationCapIcon, CodeIcon, BrainIcon } from '../icons';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/20">
            About Me
          </span>
          <h2 className="text-[var(--foreground)]">
            Get to know me
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Name Card - Large */}
          <GlassCard className="lg:col-span-2 lg:row-span-2 flex flex-col justify-between min-h-[300px] relative overflow-hidden" padding="lg">
            {/* Profile image placeholder */}
            <div className="absolute top-6 right-6 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[var(--card-border)]">
              <img
                src="/images/image_1.jpg"
                alt="Hammou Younes"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Hammou+Younes&background=8b5cf6&color=fff&size=128';
                }}
              />
            </div>

            <div>
              <span className="text-sm text-[var(--muted)] mb-2 block">Full Stack Developer</span>
              <h3 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                Hammou Younes
              </h3>
              <p className="text-[var(--muted)] max-w-md leading-relaxed">
                I'm a developer with a passion for creating beautiful, functional web applications. 
                I specialize in building modern, scalable solutions using React, Node.js, and cloud technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {['React', 'TypeScript', 'Node.js', 'Next.js'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Education Card */}
          <GlassCard className="flex flex-col" padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                <GraduationCapIcon size={24} />
              </div>
              <span className="text-sm font-medium text-[var(--muted)]">Education</span>
            </div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Computer Science
            </h4>
            <p className="text-sm text-[var(--muted)]">
              Bachelor's Degree in Computer Science with focus on Software Engineering and Web Development.
            </p>
          </GlassCard>

          {/* Location Card */}
          <GlassCard className="flex flex-col" padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[var(--gradient-end)]/10 text-[var(--gradient-end)]">
                <MapPinIcon size={24} />
              </div>
              <span className="text-sm font-medium text-[var(--muted)]">Location</span>
            </div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Morocco 🇲🇦
            </h4>
            <p className="text-sm text-[var(--muted)]">
              Available for remote work worldwide. Open to relocation for the right opportunity.
            </p>
          </GlassCard>

          {/* Skills Card */}
          <GlassCard className="flex flex-col" padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-green-500/10 text-green-500">
                <CodeIcon size={24} />
              </div>
              <span className="text-sm font-medium text-[var(--muted)]">Experience</span>
            </div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              3+ Years
            </h4>
            <p className="text-sm text-[var(--muted)]">
              Building web applications, APIs, and digital solutions for startups and businesses.
            </p>
          </GlassCard>

          {/* Mindset Card */}
          <GlassCard className="lg:col-span-2 flex flex-col" padding="lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                <BrainIcon size={24} />
              </div>
              <span className="text-sm font-medium text-[var(--muted)]">Mindset</span>
            </div>
            <h4 className="text-lg font-semibold text-[var(--foreground)] mb-2">
              Always Learning, Always Building
            </h4>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              I believe in continuous improvement and staying curious. Every project is an opportunity 
              to learn something new and push the boundaries of what's possible. I'm passionate about 
              clean code, great user experiences, and solving complex problems with elegant solutions.
            </p>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
