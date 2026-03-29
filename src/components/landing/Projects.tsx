"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';
import ProjectShards3D from './ProjectShards3D';

// Stagger container: children reveal one-by-one as they enter the viewport
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 70, damping: 18 },
  },
};

const Projects: React.FC = () => {
  const [showAllTeam, setShowAllTeam] = useState(false);
  
  const teamProjects = projects.filter((project) => project.type === 'team');
  const soloProjects = projects.filter((project) => project.type === 'solo');

  const visibleTeamProjects = showAllTeam ? teamProjects : teamProjects.slice(0, 3);

  return (
    <section id="projects" className="py-12 md:py-10 relative z-10 w-full text-gray-200">

      {/* 5 Shards Distributed in the background */}
      <ProjectShards3D />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
        {/* Main Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          My Projects
        </motion.h2>

        {/* Team Projects Section */}
        {teamProjects.length > 0 && (
          <div className="mb-24">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              className="text-2xl sm:text-3xl font-bold mb-8 text-white border-l-4 border-blue-500 pl-4"
            >
              Team Projects
            </motion.h3>
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {visibleTeamProjects.map((project) => (
                  <motion.div 
                    key={project.id} 
                    variants={cardVariants}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      thumbnail={project.thumbnail}
                      images={project.images}
                      logo={project.logo}
                      icon={project.icon}
                      themeClass={project.themeClass}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View More / Show Less Button */}
            {teamProjects.length > 3 && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center"
              >
                <button 
                  onClick={() => setShowAllTeam(!showAllTeam)}
                  className="px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-all font-medium flex items-center gap-2 group"
                >
                  {showAllTeam ? 'Show Less' : 'View More'}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" height="16" fill="currentColor" 
                    className={`transition-transform duration-300 ${showAllTeam ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </motion.div>
            )}
          </div>
        )}

        {/* Solo Projects Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="text-2xl sm:text-3xl font-bold mb-8 text-white border-l-4 border-indigo-500 pl-4"
          >
            Solo Projects
          </motion.h3>

          {soloProjects.length > 0 ? (
            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {soloProjects.map((project) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <ProjectCard
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    thumbnail={project.thumbnail}
                    images={project.images}
                    logo={project.logo}
                    themeClass={project.themeClass}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              className="w-full bg-secondary/30 backdrop-blur-sm border border-white/10 border-dashed rounded-2xl p-12 sm:p-16 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 border border-indigo-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="text-indigo-400" viewBox="0 0 16 16">
                  <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
                </svg>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">Work in Progress</h4>
              <p className="text-gray-400 max-w-lg mx-auto text-lg">
                I'm currently brewing up some exciting new solo projects. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;