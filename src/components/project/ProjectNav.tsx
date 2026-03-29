'use client';

import React from 'react';

interface ProjectNavProps {
  hasFeatures?: boolean;
}

export default function ProjectNav({ hasFeatures = true }: ProjectNavProps) {
  return (
    <div 
      className="sticky top-[64px] md:top-[80px] z-40 w-full border-y border-white/10 shadow-sm transition-colors duration-300"
      style={{ backgroundColor: 'var(--project-nav-bg, var(--bg-primary))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <nav className="flex items-center justify-center sm:justify-start gap-6 sm:gap-10 overflow-x-auto py-4 scrollbar-hide">
          {hasFeatures && (
            <a href="#key-features" className="relative group whitespace-nowrap text-sm font-semibold tracking-widest uppercase transition-colors"
               style={{ color: 'var(--project-nav-accent, var(--text-body))' }}>
              Key Features
              <span 
                className="absolute -bottom-1 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300"
                style={{ backgroundColor: 'var(--project-nav-accent, var(--text-body))' }}
              ></span>
            </a>
          )}
          <a href="#team-members" className="relative group whitespace-nowrap text-sm font-semibold tracking-widest uppercase text-white/60 transition-colors hover:text-white"
             style={{ '--hover-color': 'var(--project-nav-accent, #ffffff)' } as React.CSSProperties}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--hover-color)'}
             onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Team Members
            <span 
              className="absolute -bottom-1 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300"
              style={{ backgroundColor: 'var(--hover-color)' }}
            ></span>
          </a>
          <a href="#technical-details" className="relative group whitespace-nowrap text-sm font-semibold tracking-widest uppercase text-white/60 transition-colors hover:text-white"
             style={{ '--hover-color': 'var(--project-nav-accent, #ffffff)' } as React.CSSProperties}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--hover-color)'}
             onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Technical Details
            <span 
              className="absolute -bottom-1 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300"
              style={{ backgroundColor: 'var(--hover-color)' }}
            ></span>
          </a>
          <a href="#my-contributions" className="relative group whitespace-nowrap text-sm font-semibold tracking-widest uppercase text-white/60 transition-colors hover:text-white"
             style={{ '--hover-color': 'var(--project-nav-accent, #ffffff)' } as React.CSSProperties}
             onMouseEnter={(e) => e.currentTarget.style.color = 'var(--hover-color)'}
             onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            My Contributions
            <span 
              className="absolute -bottom-1 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300"
              style={{ backgroundColor: 'var(--hover-color)' }}
            ></span>
          </a>
        </nav>
      </div>
    </div>
  );
}
