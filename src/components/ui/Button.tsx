import React from 'react';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  disabled = false,
  icon,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]
      text-white
      hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25
      active:scale-[0.98]
      focus:ring-[var(--accent)]
    `,
    secondary: `
      bg-[var(--card)] border border-[var(--card-border)]
      text-[var(--foreground)]
      hover:bg-[var(--card-border)] hover:border-[var(--muted)]
      active:scale-[0.98]
      focus:ring-[var(--muted)]
    `,
    ghost: `
      bg-transparent
      text-[var(--muted)]
      hover:text-[var(--foreground)] hover:bg-[var(--card)]
      active:scale-[0.98]
      focus:ring-[var(--muted)]
    `,
    outline: `
      bg-transparent border border-[var(--card-border)]
      text-[var(--foreground)]
      hover:bg-[var(--card)] hover:border-[var(--muted)]
      active:scale-[0.98]
      focus:ring-[var(--muted)]
    `,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.replace(/\s+/g, ' ').trim();

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
