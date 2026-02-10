import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import gitCertificate from '../assets/gitCertificate.jpg';
import entreprenariatCertif from '../assets/entreprenariat-certificate.png';
import attijariCertif from '../assets/attijari.webp';

interface Achievement {
  id: string;
  title: string;
  description: string;
  image: string;
}

const achievements: Achievement[] = [
    {
    id: 'Certificate in Entrepreneurial',
    title: 'Certificate in Entrepreneurial',
    description: 'Completed an intensive program focused on the lifecycle of a startup—moving from initial ideation to a viable, market-ready project.',
    image:entreprenariatCertif,
  },
  {
    id: 'Version Control & Collaborative',
    title: 'Version Control & Collaborative',
    description: 'Certified by 365 Data Science in Git and GitHub. This certification covers the essential workflows for modern software development, including branching, merging, and pull request management.',
    image: gitCertificate,
  },
  {
    id: 'Version Control & Collaborative',
    title: 'Version Control & Collaborative',
    description: 'Certified by 365 Data Science in Git and GitHub. This certification covers the essential workflows for modern software development, including branching, merging, and pull request management.',
    image: attijariCertif,
  }
];

const AchievementsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="section max-w-5xl mx-auto px-6">
          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
            >
              <FaArrowLeft className="w-3 h-3" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-amber-400 mb-4 block">
              Milestones & Victories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-[var(--foreground)]">My </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>
            <p className="text-[var(--muted)] max-w-xl mx-auto">
              From code to peaks, every achievement tells a story of dedication.
            </p>
          </motion.div>

          {/* Achievements List */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={`${achievement.id}-${index}`}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Background gradient shadow for entire card */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-cyan-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Card container */}
                <div className="relative flex flex-col md:flex-row items-center md:items-stretch gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--card-border)] group-hover:border-purple-500/30 transition-all duration-300">
                  {/* Certificate Image */}
                  <div className="relative w-full md:w-[350px] lg:w-[420px] xl:w-[480px] flex-shrink-0">
                    {/* Image container */}
                    <div className="relative md:h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl bg-white">
                      <img
                        src={achievement.image}
                        alt={`${achievement.title} certificate`}
                        className="w-full h-auto md:h-full object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/480x320/ffffff/1a1a2e?text=${encodeURIComponent(achievement.title)}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center text-center md:text-left py-2 md:py-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--foreground)] mb-2 sm:mb-3 md:mb-4 leading-tight">
                      {achievement.title}
                    </h2>
                    <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AchievementsPage;