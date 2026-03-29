"use client";

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from 'framer-motion';
import TypedWrapper from '../misc/Typed';
import ScrollShape3D from './HomeShape3D';

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-based values scoped to the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Smooth spring for the parallax drift
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Content drifts upward mildly as you scroll past
  const contentY = useTransform(smoothProgress, [0, 1], [0, -60]);
  // Section fades out cleanly as it exits the viewport
  const sectionOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);
  // Scroll indicator fades away as you start scrolling
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const arrowScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);


  return (
    <motion.section
      ref={heroRef}
      style={{ opacity: sectionOpacity }}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden"
    >
      <motion.div
        style={{ y: contentY }}
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 w-full relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ── Left column: staggered text entrance ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            {/* Sub-label */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold tracking-widest uppercase mb-4 text-accent"
            >
              Portfolio
            </motion.p>

            {/* H1 with Typed.js accent */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
            >
              <span className="block">Hi, I'm</span>
              <span className="block text-accent">
                <TypedWrapper
                  strings={['Justin Escano', 'a Developer', 'a Student', 'a Problem Solver']}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                  className="bg-transparent"
                />
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl mb-6 md:mb-8"
            >
              Full Stack Developer · Collaborator
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start flex-wrap w-full mt-2"
            >
              <motion.a
                href="https://github.com/JustinEscano"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 !text-white rounded-lg font-bold text-sm sm:text-base shadow-lg hover:bg-slate-800 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 sm:w-[22px] sm:h-[22px]"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base inline-block"
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right column natively unbounded spanning space ── */}
          <div className="hidden lg:flex w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px] items-center justify-center lg:mt-0 xl:scale-110">
             <ScrollShape3D />
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity: arrowOpacity, scale: arrowScale }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-2xl shadow-xl flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 md:w-7 md:h-7 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

import React from 'react';
export default Hero;