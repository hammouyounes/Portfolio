import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import { GitHubIcon } from '../icons';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                index={index + 1}
                title={project.title}
                description={project.description}
                image={project.image}
                type={project.type || 'Project'}
                tags={project.tags}
                github={project.github}
                link={project.link}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            variant="secondary"
            size="lg"
            href="https://github.com/hammouyounes"
            icon={<GitHubIcon size={20} />}
          >
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

