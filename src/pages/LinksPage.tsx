import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { socialLinks } from '../data/socialLinks';

// Icon mapping for rendering
const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="w-6 h-6" />,
  linkedin: <FaLinkedinIn className="w-6 h-6" />,
  email: <FaEnvelope className="w-6 h-6" />,
};

const LinksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="section max-w-3xl mx-auto px-6">
          {/* Back to Home */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
          >
            <FaArrowLeft className="w-3 h-3" />
            Back to home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-cyan-400 mb-4 block">
              Connect with me
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[var(--foreground)]">My </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Links
              </span>
            </h1>
            <p className="text-[var(--muted)]">
              Find me across the web and social platforms
            </p>
          </div>

          {/* Links List */}
          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 p-5 md:p-6 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] hover:border-cyan-500/70 hover:bg-[var(--card)]/80 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center bg-[var(--card)] border-2 border-cyan-500/30 group-hover:border-cyan-400 text-[var(--foreground)] transition-all duration-300">
                  {iconMap[link.icon]}
                </div>

                {/* Name */}
                <span className="flex-1 font-bold text-lg md:text-xl text-[var(--foreground)]">
                  {link.name}
                </span>

                {/* External Link Icon */}
                <HiExternalLink className="w-6 h-6 text-[var(--muted)] group-hover:text-cyan-400 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LinksPage;
