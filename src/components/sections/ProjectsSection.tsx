import React from 'react';
import { projects } from '../../data/projects';
import GlassCard from '../ui/GlassCard';
import TechBadge from '../ui/TechBadge';
import Button from '../ui/Button';
import { ExternalLinkIcon, GitHubIcon, ArrowRightIcon } from '../icons';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/20">
            Featured Work
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Projects I've Built
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development, 
            design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={project.id}
              padding="none"
              className="group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/800x600/1a1a2e/8b5cf6?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-60" />

                {/* Project number badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]/80 backdrop-blur-sm text-sm font-bold text-[var(--foreground)] border border-[var(--card-border)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Quick action buttons */}
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-2.5 rounded-xl
                        bg-[var(--background)]/80 backdrop-blur-sm
                        text-[var(--foreground)]
                        border border-[var(--card-border)]
                        hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]
                        transition-all duration-200
                      "
                      aria-label="View on GitHub"
                    >
                      <GitHubIcon size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        p-2.5 rounded-xl
                        bg-[var(--background)]/80 backdrop-blur-sm
                        text-[var(--foreground)]
                        border border-[var(--card-border)]
                        hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]
                        transition-all duration-200
                      "
                      aria-label="View live demo"
                    >
                      <ExternalLinkIcon size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <TechBadge key={tag} name={tag} />
                  ))}
                </div>

                {/* View Project Link */}
                <a
                  href={project.link || project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium text-[var(--accent)]
                    hover:gap-3 transition-all duration-200
                  "
                >
                  View Project
                  <ArrowRightIcon size={16} />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            href="https://github.com/younes-hammou"
            icon={<GitHubIcon size={20} />}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
