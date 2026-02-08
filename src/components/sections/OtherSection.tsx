import React from 'react';
import { BookOpenIcon, TrophyIcon, LinkIcon, ArrowRightIcon } from '../icons';

interface ExploreCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  borderColor: string;
  titleGradient: string;
  hoverBg: string;
  hoverBorder: string;
  linkColor: string;
}

const exploreCards: ExploreCard[] = [
  // {
  //   id: 'guestbook',
  //   title: 'Guestbook',
  //   description: 'Leave your mark and see what others have to say',
  //   icon: <BookOpenIcon size={24} />,
  //   href: '#guestbook',
  //   borderColor: 'border-purple-500/50',
  //   titleGradient: 'from-purple-400 to-pink-500',
  //   hoverBg: 'bg-purple-950/40 border border-purple-500/30',
  //   hoverBorder: 'group-hover:border-purple-400',
  //   linkColor: 'text-purple-400',
  // },
  {
    id: 'achievements',
    title: 'Achievements',
    description: 'Milestones, certifications, and accomplishments',
    icon: <TrophyIcon size={24} />,
    href: '/achievements',
    borderColor: 'border-amber-500/50',
    titleGradient: 'from-amber-400 to-orange-500',
    hoverBg: 'bg-amber-950/40 border border-amber-500/30',
    hoverBorder: 'group-hover:border-amber-400',
    linkColor: 'text-amber-400',
  },
  {
    id: 'links',
    title: 'My Links',
    description: 'Find me across the web and social platforms',
    icon: <LinkIcon size={24} />,
    href: '/links',
    borderColor: 'border-cyan-500/50',
    titleGradient: 'from-cyan-400 to-blue-500',
    hoverBg: 'bg-cyan-950/40 border border-cyan-500/30',
    hoverBorder: 'group-hover:border-cyan-400',
    linkColor: 'text-cyan-400',
  },
];

const OtherSection: React.FC = () => {
  return (
    <section id="other" className="py-24 md:py-32">
      <div className="section">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-4">
            More to{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Explore
            </span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Check out these additional resources and connect with me
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
          {exploreCards.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="group flex flex-col items-center text-center relative"
            >
              {/* Hover Background Container */}
              <div 
                className={`
                  absolute inset-0 -inset-x-4 -inset-y-6 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  ${card.hoverBg}
                `}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Icon Box */}
                <div
                  className={`
                    w-16 h-16 rounded-2xl mb-6
                    flex items-center justify-center
                    bg-[var(--card)] border-2 ${card.borderColor}
                    text-[var(--foreground)]
                    group-hover:border-opacity-100 ${card.hoverBorder}
                    transition-all duration-300
                  `}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 
                  className={`
                    text-xl md:text-2xl font-bold mb-3
                    bg-gradient-to-r ${card.titleGradient} bg-clip-text text-transparent
                  `}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] mb-4 max-w-[200px]">
                  {card.description}
                </p>  

                {/* Explore Link */}
                <div className={`flex items-center gap-1 text-sm font-medium ${card.linkColor} group-hover:gap-2 transition-all duration-300`}>
                  Explore
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </a>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default OtherSection;
