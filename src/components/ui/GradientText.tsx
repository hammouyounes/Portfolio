import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  shimmer?: boolean;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = '',
  shimmer = true,
  as: Component = 'span',
}) => {
  const styles = shimmer ? 'text-gradient-shimmer' : 'gradient-text';

  return (
    <Component className={`${styles} ${className}`.trim()}>
      {children}
    </Component>
  );
};

export default GradientText;
