import React from 'react';
import { socialLinks } from '../../data/navigation';
import { GitHubIcon, LinkedInIcon, EmailIcon, ArrowRightIcon } from '../icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <GitHubIcon size={20} />;
      case 'linkedin':
        return <LinkedInIcon size={20} />;
      case 'email':
        return <EmailIcon size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative mt-20 py-16 border-t border-[var(--card-border)]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/50 to-transparent pointer-events-none" />

      <div className="section relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left side - Branding */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href="#"
              className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Hammou<span className="text-[var(--accent)]">.</span>Younes
            </a>
            <p className="text-sm text-[var(--muted)] text-center md:text-left max-w-xs">
              Full Stack Developer crafting digital experiences with code and creativity.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Quick Links</span>
            <div className="flex items-center gap-6">
              <a
                href="#about"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 flex items-center gap-1 group"
              >
                About
                <ArrowRightIcon size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
              <a
                href="#projects"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 flex items-center gap-1 group"
              >
                Projects
                <ArrowRightIcon size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
              <a
                href="#skills"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200 flex items-center gap-1 group"
              >
                Skills
                <ArrowRightIcon size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-xs uppercase tracking-wider text-[var(--muted)]">Connect</span>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 rounded-xl
                    bg-[var(--card)] border border-[var(--card-border)]
                    text-[var(--muted)] hover:text-[var(--foreground)]
                    hover:border-[var(--accent)] hover:bg-[var(--accent)]/10
                    transition-all duration-200
                    hover:scale-110
                  "
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--card-border)]/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--muted)]">
              © {currentYear} Hammou Younes. All rights reserved.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Built with <span className="text-[var(--accent)]">React</span> & <span className="text-[var(--accent)]">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
