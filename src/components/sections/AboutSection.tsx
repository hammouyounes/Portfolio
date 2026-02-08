import React from 'react';
import { 
  SiSpringboot, 
  SiReact, 
  SiLaravel, 
  SiAngular, 
  SiDocker, 
  SiTypescript, 
  SiNodedotjs,
  SiOracle,
  SiGitlab
} from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import myImg from '../../assets/MyImg.png'

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
    <div className={`h-56 md:h-52 hover:h-60 md:hover:h-56 z-10 hover:z-50 bg-[var(--card)] border border-[var(--foreground)]/10 border-b-0 rounded-t-xl p-3 md:p-5 flex flex-col justify-start shadow-[0_-5px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_-5px_35px_rgba(168,85,247,0.5)] hover:border-purple-500/50 transition-all duration-300 ease-out relative group/card overflow-hidden cursor-pointer ${className}`}>
      {/* Top Highlight Line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-100 md:opacity-0 md:group-hover/card:opacity-100 transition-opacity duration-300" />
      
      <div className={`mt-1 relative z-10 ${alignmentClass}`}>
        <span className="block text-xs md:text-sm font-bold text-[var(--foreground)] leading-tight uppercase opacity-90 tracking-tight">
          {title}
        </span>
        
        {/* Mobile Description - Show longDesc if no shortDesc */}
        <span className="block md:hidden text-[10px] text-[var(--muted)] leading-snug mt-2 opacity-80">
          {shortDesc || longDesc}
        </span>
        
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
    { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Oracle', icon: <SiOracle />, color: '#F80000' },

  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          
          {/* Name Card - Top Left */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md rounded-2xl relative overflow-hidden group w-full h-full p-7">
            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-full h-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay" />
            </div>
            
            {/* Content */}
            <div className="flex flex-col justify-center items-center text-center h-full relative z-10 w-full gap-1">
              {/* Name */}
              <div className="flex flex-col items-center w-full pb-2">
                <div className="text-5xl font-black tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  HAMMOU
                </div>
                <div className="text-5xl font-black tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-[var(--foreground)] to-[var(--muted)] drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  YOUNES
                </div>
              </div>
              
              {/* Separator & Subtitle */}
              <div className="flex flex-col items-center gap-2 -mt-1">
                <div className="h-px w-12 bg-[var(--foreground)]/20" />
                <span className="text-[15px] font-mono text-[var(--muted)] uppercase tracking-[0.2em] opacity-80">
                  Fullstack Developer
                </span>
              </div>
            </div>
          </div>

          {/* Academic Showcase - Education Tab */}
          <div className="md:col-span-2 lg:col-span-4 rounded-2xl bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md relative overflow-hidden group w-full h-64 md:h-56">
            
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
                title="Tech Stack"
                shortDesc=""
                longDesc="Specialized in Full-Stack development using Java (Spring Boot) and PHP (Laravel) for robust backends, paired with modern Angular and React frontends."
                className="w-[38%] md:w-1/3 -mr-1 md:-mr-2"
              />

              <StackedCard 
                title="University"
                shortDesc=""
                longDesc="Currently pursuing a Bachelor in Information Systems Engineering and Web Technologies at EST Sidi Bennour."
                className="w-[40%] md:w-2/5 z-20"
                textAlign="center"
              />

              <StackedCard 
                title="FEATURED WORK"
                shortDesc=""
                longDesc="Proven track record in developing real-world applications, including a delivery management system and a syndic management app."
                className="w-[38%] md:w-1/3 -ml-1 md:-ml-2"
                textAlign="right"
              />

            </div>
          </div>

          {/* Mindset Card - Left */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl bg-[var(--card)] border border-[var(--card-border)] p-6 flex flex-col">
            <h3 className="text-2xl font-mono text-[var(--foreground)] mb-4">Mindset</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              <span className="text-[var(--foreground)] font-medium">Building more than software.</span> My passions provide the{' '}
              <span className="text-[var(--foreground)] font-medium">discipline and focus</span> I need to grow.
            </p>
            I combine technical discipline with Agile collaboration 
            to solve complex problems. Whether it's a Syndic Management 
            app or Delivery Logistics, I focus on the user journey.
            
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
                src={myImg}
                alt="Hammou Younes"
                className="w-full h-100 object-cover"
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
            <h3 className="text-2xl font-mono text-[var(--foreground)] mb-4">Craft</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Building scalable <span className="text-[var(--foreground)] font-medium">apps, websites, and automations</span>.
            </p>
            <p className="text-[var(--muted)] leading-relaxed mb-6">
              I understand what advantages modern tech can provide, helping me advise on the solutions a business actually needs.
            </p>
            
            {/* Tech Carousel - Infinite Scroll */}
            <div className="relative w-full py-2 bg-[var(--card-border)]/30 border-y border-[var(--card-border)]/50 my-auto">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[var(--card)] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[var(--card)] to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex overflow-hidden select-none">
                <div className="flex gap-5 whitespace-nowrap pr-5 items-center animate-scroll-left">
                  {/* First set of skills */}
                  <div className="flex gap-5 items-center">
                    {skills.map((skill, index) => (
                      <div
                        key={`${skill.name}-${index}`}
                        className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <span className="text-xs" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="text-[9px] font-mono font-medium text-[var(--muted)] uppercase tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex gap-5 items-center">
                    {skills.map((skill, index) => (
                      <div
                        key={`${skill.name}-dup-${index}`}
                        className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
                      >
                        <span className="text-xs" style={{ color: skill.color }}>{skill.icon}</span>
                        <span className="text-[9px] font-mono font-medium text-[var(--muted)] uppercase tracking-wide">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="text-[var(--muted)] leading-relaxed mb-4 mt-4">
                Active learner & problem solver. Feel free to invite me to <span className="text-[var(--foreground)] font-medium">collaborate</span>.
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-green-500 font-medium">Open to Internships, Full-time & Freelance</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
