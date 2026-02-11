import React, { useState, useEffect } from 'react';
import { navigationItems } from '../../data/navigation';
import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, DownloadIcon } from '../icons';
import Resume from '../../../public/files/Hammou Younes.pdf'

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'other'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const allNavItems = [
    { label: 'Home', href: '#home' },
    ...navigationItems,
  ];

  return (
    <>
    <header
        className={`
          fixed top-4 left-0 right-0 z-50
          transition-all duration-300 ease-out
          py-3
        `.replace(/\s+/g, ' ').trim()}
      >
        <div className="section">
          <nav className="flex items-center justify-between">
            {/* Left - Theme Toggle */}
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="
                  p-2.5 rounded-full
                  bg-white/80 dark:bg-white/10
                  shadow-sm
                  text-amber-500 dark:text-amber-400
                  hover:bg-white dark:hover:bg-white/20
                  transition-all duration-200
                  backdrop-blur-sm
                "
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
                }}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <MoonIcon size={20} /> : <SunIcon size={20} />}
              </button>
            </div>

            {/* Center - Navigation Pills */}
            <div
              className="
                hidden md:flex items-center gap-1
                px-2 py-1.5
                rounded-full
                shadow-lg shadow-black/5
                backdrop-blur-md
              "
              style={{
                backgroundColor: isDark ? 'rgba(30, 30, 35, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {allNavItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveSection(item.href.replace('#', ''))}
                    className={`
                      px-4 py-1.5 text-sm font-medium
                      rounded-full
                      transition-all duration-200
                      ${isActive
                        ? isDark
                          ? 'bg-white/20 text-white'
                          : 'bg-white text-gray-900 shadow-sm'
                        : isDark
                          ? 'text-gray-400 hover:text-white hover:bg-white/10'
                          : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
                      }
                    `.replace(/\s+/g, ' ').trim()}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Right - CTA Button */}
            <div className="hidden md:flex items-center">
              <a
                href={Resume}
                download
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  text-sm font-medium
                  rounded-full
                  shadow-lg shadow-black/5
                  backdrop-blur-md
                  transition-all duration-200
                  hover:scale-105
                "
                style={{
                  backgroundColor: isDark ? 'rgba(30, 30, 35, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.05)',
                  color: isDark ? '#e4e4e7' : '#18181b',
                }}
              >
                <DownloadIcon size={16} />
                Download Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="
                  p-2 rounded-full
                  bg-white/80 dark:bg-white/10
                  shadow-sm
                  text-gray-700 dark:text-gray-300
                  hover:bg-white dark:hover:bg-white/20
                  transition-all duration-200
                  backdrop-blur-sm
                "
                style={{
                  backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.8)',
                  color: isDark ? '#d4d4d8' : '#374151',
                }}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40
          backdrop-blur-xl
          transition-all duration-300 ease-out
          md:hidden
          ${isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
          }
        `.replace(/\s+/g, ' ').trim()}
        style={{
          backgroundColor: isDark ? 'rgba(10, 10, 15, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-4">
          {allNavItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  px-8 py-3 text-xl font-medium
                  rounded-full
                  transition-all duration-200
                  ${isActive
                    ? isDark
                      ? 'bg-white/20 text-white'
                      : 'bg-purple-100 text-purple-900'
                    : isDark
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-500 hover:text-gray-900'
                  }
                `.replace(/\s+/g, ' ').trim()}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/files/Hammou Younes.pdf"
            download="Younes_Hammou_Resume.pdf"
            className="
              mt-6 inline-flex items-center gap-2
              px-6 py-3
              text-base font-medium
              rounded-full
              bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
              text-white
              shadow-lg
              hover:opacity-90
              transition-all duration-200
            "
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <DownloadIcon size={18} />
            Download Resume
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
