import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  type: string;
  tags: string[];
  github?: string;
  link?: string;
  gradientFrom?: string;
  gradientTo?: string;
  disableGithub?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  description,
  image,
  type,
  tags,
  github,
  gradientFrom = 'from-purple-600/90',
  gradientTo = 'to-violet-600/90',
  disableGithub,
}) => {
  return (
    <article className="group flex flex-col h-full">
      {/* Header */}
      <header className="mb-4 shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono tracking-wider uppercase text-[var(--muted)]">
            {String(index).padStart(2, '0')}
          </span>
          <span className="w-6 h-px bg-[var(--card-border)]" />
          <span className="text-xs font-mono tracking-wider uppercase text-[var(--muted)]">
            {type}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-bold tracking-tight text-[var(--foreground)] line-clamp-1 flex items-center min-h-7 text-lg md:text-2xl lg:text-2xl">
            {title}
          </h3>
          <div className="flex items-center gap-2 shrink-0 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300">
            {github && (
              disableGithub ? (
                <span
                  className="group/btn relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-semibold text-[10px] md:text-xs bg-white/5 border border-white/10 text-[var(--muted)] cursor-not-allowed transition-all duration-300 overflow-hidden"
                  aria-label="Private Repository"
                >
                  <FaGithub className="relative z-10 w-3 h-3 opacity-50" />
                  <span className="relative z-10 hidden sm:inline">Private</span>
                  <span className="relative z-10 sm:hidden">🔒</span>
                </span>
              ) : (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg font-semibold text-[10px] md:text-xs bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden"
                  aria-label="Star on GitHub"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <FaGithub className="relative z-10 w-3 h-3" />
                  <span className="relative z-10 hidden sm:inline">Star</span>
                  <span className="relative z-10 sm:hidden">★</span>
                </a>
              )
            )}
          </div>
        </div>
      </header>

      {/* Main Card with Desktop Mockup */}
      <div className="relative w-full flex flex-col justify-between aspect-[6/5] p-1 md:p-1.5 rounded-[28px] md:rounded-[32px] bg-[#161616] border border-white/20 shadow-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:border-white/30 group-hover:ring-white/20">
        <div className="relative w-full h-full overflow-hidden rounded-3xl md:rounded-[28px] flex flex-col justify-between bg-transparent">
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo}`} />
          
          {/* Description */}
          <div className="relative z-10 px-4 pt-5 md:px-8 md:pt-8 shrink-0">
            <p className="text-white/90 font-medium text-balance max-w-2xl drop-shadow-sm line-clamp-3 md:line-clamp-4 text-xs md:text-xl lg:text-lg">
              {description}
            </p>
          </div>
          
          {/* Desktop Mockup */}
          <div className="relative z-10 w-full flex-1 min-h-[45%]">
            <div className="absolute bottom-0 left-0 right-0 w-full h-full flex justify-center items-end">
              <div className="w-[80%] md:w-[85%] absolute -bottom-2 origin-bottom">
                <div className="relative aspect-[16/10] rounded-t-lg md:rounded-t-xl bg-neutral-900 border-x border-t border-white/10 overflow-hidden shadow-2xl flex flex-col">
                  {/* Window Controls */}
                  <div className="h-4 md:h-6 bg-neutral-800/90 flex items-center gap-1 md:gap-1.5 px-2 md:px-3 border-b border-white/5 z-20 shrink-0">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FF5F57]" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#FEBC2E]" />
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#28C840]" />
                  </div>
                  {/* Screenshot */}
                  <div className="relative flex-1 w-full bg-neutral-900">
                    <img
                      alt={`${title} screenshot`}
                      src={image}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/800x500/1a1a2e/8b5cf6?text=${encodeURIComponent(title)}`;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Tech Tags */}
      <footer className="flex flex-wrap gap-2 mt-4 shrink-0">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[9px] md:text-[10px] font-bold rounded-full uppercase tracking-wider bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </footer>
    </article>
  );
};

export default ProjectCard;
