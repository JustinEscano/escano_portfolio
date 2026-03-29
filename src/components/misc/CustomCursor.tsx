"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CURSOR_COLOR = '#1e3a8a';
const CURSOR_GLOW = '#1e40af99';
const INTERACTIVE = ['a', 'button', 'input', 'textarea', 'select'];

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const ringX = useSpring(rawX, { stiffness: 150, damping: 20, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 150, damping: 20, mass: 0.6 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const tag = el.tagName.toLowerCase();
      setIsHovering(INTERACTIVE.includes(tag) || el.getAttribute('role') === 'button');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full"
        style={{
          x: rawX, y: rawY,
          translateX: '-50%', translateY: '-50%',
          width: 14, height: 14,
          backgroundColor: CURSOR_COLOR,
          boxShadow: `0 0 10px 3px ${CURSOR_GLOW}`,
        }}
        animate={{ scale: isClicking ? 0.5 : 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Outer Circling Rectangle */}
      <motion.div
        className="fixed z-[9998] pointer-events-none flex items-center justify-center rounded-sm"
        style={{
          x: ringX, y: ringY,
          translateX: '-50%', translateY: '-50%',
          border: `1.5px solid ${CURSOR_COLOR}`,
          filter: `drop-shadow(0 0 8px ${CURSOR_GLOW})`,
        }}
        animate={{
          width: isHovering ? 56 : isClicking ? 32 : 48,
          height: isHovering ? 56 : isClicking ? 32 : 48,
          opacity: isHovering ? 0.85 : 0.45,
          scale: isHovering ? 1.2 : 1,
          rotate: 360,
        }}
        transition={{
          // Spring for scale/opacity/width
          type: 'spring', stiffness: 220, damping: 22,
          // Continuous loop for rotation
          rotate: { duration: 6, repeat: Infinity, ease: 'linear' }
        }}
      />
    </>
  );
}
