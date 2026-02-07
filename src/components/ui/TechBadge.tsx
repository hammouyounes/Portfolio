import React from 'react';
import type { TechBadgeProps } from '../../types';

const TechBadge: React.FC<TechBadgeProps> = ({ name, className = '' }) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-3 py-1.5
        text-xs font-medium
        rounded-full
        bg-[var(--card-border)]/50
        text-[var(--muted)]
        border border-[var(--card-border)]
        transition-all duration-200
        hover:bg-[var(--accent)]/10
        hover:text-[var(--accent)]
        hover:border-[var(--accent)]/30
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {name}
    </span>
  );
};

export default TechBadge;
