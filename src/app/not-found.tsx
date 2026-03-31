"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center relative overflow-hidden text-center z-10 px-6">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-xl mx-auto"
      >
        <motion.h1 
          className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 mb-6 drop-shadow-sm"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">Lost in Space</h2>
        
        <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed max-w-md mx-auto font-medium">
          The page you are looking for has drifted off into the cosmos. It might have been moved, deleted, or perhaps never existed.
        </p>

        <Link href="/home">
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="transform transition-transform group-hover:-translate-x-1">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Return Home
            </button>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
