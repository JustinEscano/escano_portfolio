"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail?: string | StaticImageData;
  images?: (string | StaticImageData)[];
  logo?: string | StaticImageData;
  icon?: string | StaticImageData;
  themeClass?: string;
  showAccentTags?: boolean; // when true: use light yellow / black tags in non-hovered state
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  techStack,
  thumbnail,
  images,
  logo,
  icon,
  themeClass,
  showAccentTags,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const displayImages = images?.length ? images : (thumbnail ? [thumbnail] : []);

  useEffect(() => {
    if (!isHovered || displayImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
    }, 2000); // 2 second carousel speed
    return () => clearInterval(interval);
  }, [isHovered, displayImages.length]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentImageIndex(0);
      }}
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
              style={{
                backgroundImage: `url(${
                  typeof displayImages[currentImageIndex] === 'string'
                    ? displayImages[currentImageIndex]
                    : (displayImages[currentImageIndex] as StaticImageData)?.src || ''
                })`,
              }}
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
                  <Image
                    src={icon}
                    alt={`${title} icon`}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain rounded-xl shadow-lg ring-2 ring-white/20 flex-shrink-0"
                  />
                )}
                <Image
                  src={logo}
                  alt={`${title} Logo`}
                  width={130}
                  height={70}
                  className="max-w-[130px] max-h-[70px] drop-shadow-2xl object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-20 transition-colors duration-500">
        <h3
          className={`text-2xl font-extrabold mb-3 tracking-tight transition-colors duration-500 ${
            !isHovered || !themeClass ? 'text-slate-900' : ''
          }`}
          style={isHovered && themeClass ? { color: 'var(--project-card-hover-heading)' } : undefined}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed mb-6 flex-1 line-clamp-3 transition-colors duration-500"
          style={isHovered && themeClass ? { color: 'var(--project-card-hover-body)' } : { color: '#64748b' }}
        >
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors duration-500 ${
                isHovered && themeClass
                  ? 'border border-[var(--tag-border,rgba(255,255,255,0.2))] text-[var(--tag-text,#ffffff)]'
                  : showAccentTags
                  ? 'bg-yellow-50 text-slate-800 border border-yellow-200/80 font-bold'
                  : 'bg-slate-100 text-slate-600'
              }`}
              style={isHovered && themeClass ? { backgroundColor: 'var(--tag-bg, rgba(255,255,255,0.05))' } : undefined}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer / Link */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto transition-colors duration-500">
          <Link
            href={`/project/${id}`}
            className="font-bold text-sm flex items-center gap-1.5 transition-colors duration-300"
            style={isHovered && themeClass ? { color: 'var(--project-card-hover-link)' } : { color: '#2563eb' }}
          >
            Explore Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="transition-transform group-hover:translate-x-1 duration-300"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;