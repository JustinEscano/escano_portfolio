"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Tailwind CSS'];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 bg-blue-50/60 backdrop-blur-md">
      
      {/* subtle central glow to add slight depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -z-20"></div>

      {/* --- Content container --- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Picture */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center md:justify-end w-full relative"
          >
            {/* The simple picture frame elevated with high shadow */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-slate-100 bg-slate-50 z-10">
              <img 
                src="/images/profile.jpg" 
                alt="About Me" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Profile+Picture' }}
              />
            </div>
          </motion.div>

          {/* Right Column: Text & Tech Stack */}
          <div className="text-left text-slate-600">
            
            <motion.h2
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight"
            >
              About Me
            </motion.h2>

            {/* Paragraphs */}
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="text-[17px] mb-6 leading-relaxed max-w-md text-slate-500 font-medium"
            >
              I'm a passionate full-stack developer with 5+ years of experience building
              web applications that solve real-world problems. I specialize in React,
              Node.js, and modern web technologies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="text-[17px] mb-10 leading-relaxed max-w-md text-slate-500 font-medium"
            >
              My journey in tech started with a curiosity about how things work on the
              internet, and it's grown into a career where I get to create meaningful
              digital experiences every day.
            </motion.p>

            {/* Tech stack section */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Tech Stack</h3>

              {/* Tags stagger in */}
              <motion.div
                className="flex flex-wrap gap-3 justify-start max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.4 } },
                }}
              >
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 200, damping: 18 } },
                    }}
                    whileHover={{ y: -2 }}
                    className="px-4 py-2.5 rounded-xl text-[14px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 border border-slate-200/60 cursor-default transition-colors shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;