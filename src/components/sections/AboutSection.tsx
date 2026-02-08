import React from 'react';

// StackedCard Component for Academic Showcase
interface InfoCardProps {
  title: string;
  shortDesc: string;
  longDesc: string;
  className?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const StackedCard: React.FC<InfoCardProps> = ({ 
  title, 
  shortDesc, 
  longDesc, 
  className = "", 
  textAlign = "left" 
}) => {
  const alignmentClass = textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left';
  
  return (
    <div className={`h-44 md:h-48 hover:h-52 md:hover:h-56 z-10 hover:z-50 bg-[var(--card)] border border-[var(--foreground)]/10 border-b-0 rounded-t-xl p-3 md:p-5 flex flex-col justify-start shadow-[0_-5px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_-5px_35px_rgba(168,85,247,0.5)] hover:border-purple-500/50 transition-all duration-300 ease-out relative group/card overflow-hidden cursor-pointer ${className}`}>
      {/* Top Highlight Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300" />
      
      <div className={`mt-1 relative z-10 ${alignmentClass}`}>
        <span className="block text-xs md:text-sm font-bold text-[var(--foreground)] leading-tight uppercase opacity-90 tracking-tight">
          {title}
        </span>
        
        {/* Mobile Description */}
        {shortDesc && (
          <span className="block md:hidden text-[11px] text-[var(--muted)] leading-snug mt-2 opacity-70">
            {shortDesc}
          </span>
        )}
        
        {/* Desktop Description - Single element with hover transition */}
        <span className="hidden md:block text-xs text-[var(--muted)] leading-snug mt-2 opacity-50 group-hover/card:opacity-100 transition-all duration-300 [mask-image:linear-gradient(to_bottom,black_0%,black_30%,transparent_80%)] group-hover/card:[mask-image:none]">
          {longDesc}
        </span>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Spring Boot', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Git', icon: '📦' },
    { name: 'Laravel', icon: '🔺' },
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          
          {/* Name Card - Top Left */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] p-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-2">
              HAMMOU<br />YOUNES
            </h2>
            <p className="text-sm text-[var(--muted)] uppercase tracking-widest">
              Fullstack Developer
            </p>
          </div>

          {/* Academic Showcase - Education Tab */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md relative overflow-hidden group w-full h-48 md:h-56">
            
            {/* Floating Badge */}
            <div className="hidden md:flex absolute top-4 left-0 right-0 justify-center z-30 pointer-events-none group-hover:opacity-0 transition-opacity duration-300 delay-100">
              <span className="text-[8px] uppercase tracking-[0.2em] text-purple-400/50 font-medium bg-[var(--card)]/50 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-500/10">
                Hover to read more
              </span>
            </div>

            {/* Background Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div 
                className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, var(--foreground) 0.5px, transparent 0.5px)', 
                  backgroundSize: '24px 24px' 
                }} 
              />
            </div>

            {/* Cards Container */}
            <div className="w-full h-full flex justify-center items-end px-2 relative z-10 overflow-hidden rounded-2xl">
              
              <StackedCard 
                title="Science Club"
                shortDesc="Active member of GenAI Science Club. Training CV models for autonomous systems."
                longDesc="Active member of the GenAI Science Club at AGH. Currently training computer vision models for automated road obstacle detection in autonomous systems."
                className="w-1/3 -mr-6"
              />

              <StackedCard 
                title="University"
                shortDesc=""
                longDesc="Pursuing Computer Science & Intelligent Systems at AGH - ranked as Poland's #2 technical university. This elite program is recognized as the #1 major in the country for IT and AI."
                className="w-2/5 z-20"
                textAlign="center"
              />

              <StackedCard 
                title="Competitions"
                shortDesc="3rd Place Winner at Cassini Hackathon. Econverse Startup Finalist."
                longDesc="3rd Place Winner at the Cassini Hackathon and Econverse Startup Finalist. Proven ability to translate high-tech engineering into scalable business models under pressure."
                className="w-1/3 -ml-6"
                textAlign="right"
              />

            </div>
          </div>

          {/* Mindset Card - Left */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] p-6 flex flex-col">
            <h3 className="text-2xl font-serif italic text-[var(--foreground)] mb-4">Mindset</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              <span className="text-[var(--foreground)] font-medium">Building more than software.</span> My passions provide the{' '}
              <span className="text-[var(--foreground)] font-medium">discipline and focus</span> I need to grow.
            </p>
            
            {/* Hobby Image */}
            <div className="mt-auto rounded-xl overflow-hidden border border-[var(--card-border)] h-32 bg-gradient-to-br from-purple-900/30 to-blue-900/30 flex items-center justify-center">
              <div className="text-center">
                <span className="text-2xl">🏋️</span>
                <p className="text-xs text-[var(--muted)] mt-1">Continuous Learning</p>
              </div>
            </div>
            
            <p className="text-[var(--muted)] mt-6 leading-relaxed">
              <span className="text-[var(--foreground)] font-medium">Mastering body and mind</span> is my path to{' '}
              <span className="text-[var(--foreground)] font-medium">excellence</span>.
            </p>
          </div>

          {/* Photo Card - Center */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] overflow-hidden flex flex-col">
            {/* Profile Photo */}
            <div className="flex-1 min-h-[200px] bg-gradient-to-br from-[var(--card)] to-[var(--background)] flex items-center justify-center">
              <img
                src="/images/image_1.jpg"
                alt="Hammou Younes"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)] flex items-center justify-center text-5xl text-white font-bold">
                      HY
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Location */}
            <div className="p-5 border-t border-[var(--card-border)]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--background)] border border-[var(--card-border)] flex items-center justify-center">
                  <span className="text-sm">🌍</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[var(--foreground)] mb-1">MOROCCO 🇲🇦</h4>
              <p className="text-xs text-[var(--muted)] font-mono">
                GMT+1 • Open to remote work worldwide
              </p>
            </div>
          </div>

          {/* Craft Card - Right */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] p-6 flex flex-col">
            <h3 className="text-2xl font-serif italic text-[var(--foreground)] mb-4">Craft</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Building scalable <span className="text-[var(--foreground)] font-medium">apps, websites, and automations</span>.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.
            </p>
            
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--background)] border border-[var(--card-border)] text-[var(--muted)]"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
            
            <div className="mt-auto">
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Active learner & problem solver. Feel free to invite me to <span className="text-[var(--foreground)] font-medium">collaborate</span>.
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-green-500 font-medium">Open to collaboration & freelance</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
