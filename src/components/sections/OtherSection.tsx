import React from 'react';
import GlassCard from '../ui/GlassCard';
import { BookOpenIcon, TrophyIcon, LinkIcon, ArrowRightIcon } from '../icons';

interface OtherLink {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const otherLinks: OtherLink[] = [
  {
    id: 'guestbook',
    title: 'Guestbook',
    description: 'Leave a message and say hi! I love hearing from visitors.',
    icon: <BookOpenIcon size={28} />,
    href: '#guestbook',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'achievements',
    title: 'Achievements',
    description: 'Certifications, awards, and career milestones I\'m proud of.',
    icon: <TrophyIcon size={28} />,
    href: '#achievements',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'links',
    title: 'My Links',
    description: 'Find me across the web - social media, profiles, and more.',
    icon: <LinkIcon size={28} />,
    href: '#links',
    color: 'from-pink-500 to-rose-500',
  },
];

const OtherSection: React.FC = () => {
  return (
    <section id="other" className="py-24 md:py-32">
      <div className="section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full border border-[var(--accent)]/20">
            Explore More
          </span>
          <h2 className="text-[var(--foreground)] mb-4">
            Other Things
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Discover more about me beyond just code.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block group"
            >
              <GlassCard padding="lg" className="h-full relative overflow-hidden">
                {/* Gradient accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`
                    inline-flex items-center justify-center
                    w-14 h-14 rounded-xl mb-4
                    bg-gradient-to-br ${link.color}
                    text-white
                    group-hover:scale-110
                    transition-transform duration-300
                  `}
                >
                  {link.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--muted)] mb-4">
                  {link.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent)] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore
                  <ArrowRightIcon size={16} />
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <GlassCard padding="lg" className="text-center bg-gradient-to-br from-[var(--card)] to-[var(--background)]">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-4">
              Let's Work Together
            </h3>
            <p className="text-[var(--muted)] max-w-xl mx-auto mb-8">
              Have a project in mind? I'm always open to discussing new opportunities, 
              creative ideas, or ways to bring your vision to life.
            </p>
            <a
              href="mailto:contact@younes-hammou.dev"
              className="
                inline-flex items-center gap-2
                px-8 py-4
                bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
                text-white font-medium
                rounded-xl
                hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25
                active:scale-[0.98]
                transition-all duration-300
              "
            >
              Get In Touch
              <ArrowRightIcon size={18} />
            </a>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default OtherSection;
