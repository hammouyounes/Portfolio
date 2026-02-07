import React from 'react';
import type { GlassCardProps } from '../../types';

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
}) => {
  const baseStyles = `
    rounded-2xl
    bg-[var(--card)]/50
    backdrop-blur-xl
    border border-[var(--card-border)]
    transition-all duration-300 ease-out
  `;

  const hoverStyles = hover
    ? `
      hover:bg-[var(--card)]/70
      hover:border-[var(--muted)]/30
      hover:shadow-xl hover:shadow-black/5
      hover:-translate-y-1
    `
    : '';

  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </div>
  );
};

export default GlassCard;
