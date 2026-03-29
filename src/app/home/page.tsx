"use client";

import Hero from '../../components/landing/Hero';
import About from '../../components/landing/About';
import Projects from '../../components/landing/Projects';
import Contact from '../../components/landing/Contact';
import Footer from '../../components/landing/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Smooth spine line growth
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  return (
    <main className="relative z-0 min-h-screen bg-primary">

      {/* ══════════════════════════════════════════
          MOBILE: slim right-edge accent line only
      ══════════════════════════════════════════ */}
      <div className="block md:hidden fixed right-0 top-0 bottom-0 z-[-1] pointer-events-none w-[2px]">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/0 via-accent/15 to-accent/0" />
        <motion.div
          style={{ scaleY, transformOrigin: 'top' }}
          className="absolute inset-0 bg-gradient-to-b from-accent/35 via-accent/15 to-transparent"
        />
      </div>

      {/* ══════════════════════════════════════════
          PAGE SECTIONS
      ══════════════════════════════════════════ */}
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
