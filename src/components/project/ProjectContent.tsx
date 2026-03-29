import React, { ReactNode, CSSProperties } from 'react';

interface ProjectContentProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function ProjectContent({ children, className = '', style }: ProjectContentProps) {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-16 space-y-24 ${className}`} style={style}>
      {children}
    </div>
  );
}
