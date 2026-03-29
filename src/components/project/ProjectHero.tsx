import React, { ReactNode } from 'react';
import Link from 'next/link';

interface ProjectHeroProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  logoSlot?: ReactNode;
  /** Tailwind classes for the hero background (overrides default gradient) */
  bgClass?: string;
  /** Set to true if the hero has a dark background — swaps text colors to light */
  isDark?: boolean;
}

export default function ProjectHero({
  title, description, techStack, githubLink, liveLink, logoSlot,
  bgClass = 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 border-indigo-200',
  isDark = false,
}: ProjectHeroProps) {

  // Text colour tokens derived from the isDark flag
  const headingColor   = isDark ? 'text-white'       : 'text-slate-900';
  const bodyColor      = isDark ? 'text-white/80'    : 'text-slate-700';
  const subHeadColor   = isDark ? 'text-white'       : 'text-slate-900';
  const backBtnClass   = isDark
    ? 'border-white/40 bg-transparent hover:bg-white/10 text-white hover:text-white shadow-sm hover:shadow-md'
    : 'border-slate-400 bg-white/60 hover:bg-white text-slate-700 hover:text-slate-900 shadow-sm hover:shadow-md';
  const tagClass       = isDark
    ? 'border-[var(--tag-border,theme(colors.white/20))] text-[var(--tag-text,theme(colors.white/90))]'
    : 'border-slate-300 text-slate-700 hover:text-slate-900';
  
  const tagStyle = isDark ? { backgroundColor: 'var(--tag-bg, rgba(255,255,255,0.1))' } : { backgroundColor: 'var(--tag-bg, rgba(255,255,255,0.6))' };

  return (
    <div className={`relative w-full overflow-hidden border-b ${bgClass} -mt-[80px] pt-[80px] md:-mt-[100px] md:pt-[100px]`}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pt-32 pb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8">
          {logoSlot ? (
            <div>{logoSlot}</div>
          ) : (
            <h1 className={`text-4xl sm:text-5xl font-bold ${headingColor}`}>{title}</h1>
          )}
          <Link href="/home#projects">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200 group ${backBtnClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Back to Projects
            </span>
          </Link>
        </div>

        <div className="flex gap-4 mb-12">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <button className={`px-6 py-2 rounded-lg font-medium shadow-sm transition-colors duration-300 inline-flex items-center gap-2 ${
                isDark ? 'bg-transparent border border-white/20 text-white hover:bg-white/10' : 'btn-dark'
              }`}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                View on GitHub
              </button>
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary px-6 py-2 rounded-lg font-medium shadow-sm transition-colors duration-300 inline-flex items-center gap-2">
                Live Demo
              </button>
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-accent' : subHeadColor}`}>About This Project</h2>
            <p className={`leading-relaxed text-lg ${bodyColor}`}>{description}</p>
          </div>
          <div>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-accent' : subHeadColor}`}>Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={`tech-tag border px-3 py-1.5 rounded-md text-sm font-medium shadow-sm transition-transform hover:-translate-y-1 cursor-default ${tagClass}`}
                  style={tagStyle}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
