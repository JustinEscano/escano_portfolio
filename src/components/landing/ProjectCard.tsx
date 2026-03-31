"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail?: any;
  images?: any[];
  logo?: any;
  icon?: any;
  themeClass?: string;
  showAccentTags?: boolean; // when true: use light yellow / black tags in non-hovered state
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, techStack, thumbnail, images, logo, icon, themeClass, showAccentTags }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = images?.length ? images : (thumbnail ? [thumbnail] : []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && displayImages.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      }, 2000); // 2 second carousel speed
    } else {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, displayImages.length]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`border rounded-2xl overflow-hidden shadow-lg group h-full flex flex-col transition-all duration-500 relative z-10 ${
        isHovered && themeClass
          ? `${themeClass} border-white/10 shadow-[0_0_30px_rgba(249,115,22,0.15)]`
          : 'bg-white border-slate-200'
      }`}
      style={isHovered && themeClass ? { backgroundColor: 'var(--project-card-hover-bg)' } : undefined}
    >
      {/* Thumbnail / Carousel */}
      <div className="relative h-48 overflow-hidden bg-slate-100 flex items-center justify-center">
        <AnimatePresence initial={false}>
          {displayImages.length > 0 ? (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${typeof displayImages[currentImageIndex] === 'string' ? displayImages[currentImageIndex] : displayImages[currentImageIndex]?.src || ''})` }}
            />
          ) : (
            <span className="text-4xl opacity-20 text-slate-800 font-bold">{'<>'}</span>
          )}
        </AnimatePresence>

        {/* Logo Overlay - Displays when static, fades out on hover so screenshots are visible */}
        <AnimatePresence>
          {!isHovered && logo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-slate-900/60 flex items-center justify-center backdrop-blur-sm"
            >
              {/* Icon + Logo side by side */}
              <div className="flex items-center gap-3">
                {icon && (
                  <img
                    src={typeof icon === 'string' ? icon : icon.src}
                    alt={`${title} icon`}
                    className="w-12 h-12 object-contain rounded-xl shadow-lg ring-2 ring-white/20 flex-shrink-0"
                  />
                )}
                <img 
                  src={typeof logo === 'string' ? logo : logo.src} 
                  alt={`${title} Logo`} 
                  className="max-w-[130px] max-h-[70px] drop-shadow-2xl" 
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-20 transition-colors duration-500">
        <h3 
          className={`text-2xl font-extrabold mb-3 tracking-tight transition-colors duration-500 ${!isHovered || !themeClass ? 'text-slate-900' : ''}`}
          style={isHovered && themeClass ? { color: 'var(--project-card-hover-heading)' } : undefined}
        >
          {title}
        </h3>
        <p 
          className={`mb-6 leading-relaxed flex-1 font-medium transition-colors duration-500 ${!isHovered || !themeClass ? 'text-slate-500' : ''}`}
          style={isHovered && themeClass ? { color: 'var(--project-card-hover-body)' } : undefined}
        >
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.slice(0, 3).map((tech) => (
            <span key={tech} 
              className={`px-3 py-1.5 rounded-lg text-[13px] font-bold border shadow-sm cursor-default transition-all duration-500 ${
              isHovered && themeClass
                ? 'bg-[var(--project-accent)] border-transparent'
                : showAccentTags
                  ? 'bg-white text-black border-slate-200'
                  : 'bg-slate-50 text-slate-700 border-slate-200/60'
            }`}
              style={isHovered && themeClass ? { color: 'var(--tag-text)' } : undefined}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Learn more link */}
        <Link
          href={`/project/${id}`}
          className={`font-bold inline-flex items-center gap-1.5 transition-colors duration-500 mt-auto group-hover:-translate-y-0.5 ${!isHovered || !themeClass ? 'text-blue-600 hover:text-blue-700' : ''}`}
          style={isHovered && themeClass ? { color: 'var(--project-card-hover-link)' } : undefined}
        >
          Learn More
          <motion.span
            className="inline-block"
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            &rarr;
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;