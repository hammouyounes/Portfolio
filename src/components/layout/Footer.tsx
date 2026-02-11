import React from 'react';
import { socialLinks } from '../../data/navigation';
import { GitHubIcon, LinkedInIcon, EmailIcon } from '../icons';

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
    <footer className="relative py-16 border-t border-[var(--card-border)] bg-transparent">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand & Copyright */}
        <div className="flex items-center gap-4 text-sm text-[var(--muted)] font-mono group hover:text-[var(--foreground)] transition-colors duration-300">
          <span className="font-bold text-[var(--foreground)] text-lg group-hover:text-amber-400 transition-colors">YH</span>
          <span>•</span>
          <span>© {currentYear} Younes Hammou</span>
        </div>

        {/* Center: Tech Attribution */}
        <div className="text-sm text-[var(--muted)] flex items-center gap-2 hover:text-[var(--foreground)] transition-colors duration-300">
          Built with <span className="text-red-500 animate-pulse">❤️</span> using <span className="font-medium text-cyan-400">React</span> & <span className="font-medium text-sky-400">Tailwind</span>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-[var(--accent)]/10"
              aria-label={link.name}
            >
              {getSocialIcon(link.icon)}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
