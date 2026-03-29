"use client";

import { useEffect, useRef } from 'react';

// ─── Organic Lava Lamp (Pure Canvas Blending) ────────────────────────────────
// Instead of risky CSS filters, we use layered radial gradients with 'screen'
// composite operation. This naturally merges colors and creates soft, fluid
// boundaries that look like slow-moving lava bubbles.

interface Blob {
  cx: number;   // center x (moving)
  cy: number;   // center y (moving)
  ax: number;   // base anchor x
  ay: number;   // base anchor y
  ampX: number; // horizontal wander amplitude
  ampY: number; // vertical wander amplitude
  phX: number;  // phase x
  phY: number;  // phase y
  fqX: number;  // freq x (speed of oscillation)
  fqY: number;  // freq y
  r: number;    // radius
  h: number;    // base hue
}

const COUNT = 16;

export default function BouncingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;

    const setSize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Initialize slow-moving lava blobs
    const blobs: Blob[] = Array.from({ length: COUNT }, () => {
      const ax = 0.1 * W + Math.random() * 0.8 * W;
      const ay = 0.1 * H + Math.random() * 0.8 * H;
      return {
        cx: ax, cy: ay, ax, ay,
        ampX: 80  + Math.random() * 160,
        ampY: 80  + Math.random() * 160,
        phX:  Math.random() * Math.PI * 2,
        phY:  Math.random() * Math.PI * 2,
        // Extremely slow movement (full loop takes 15-30 seconds)
        fqX:  (2 * Math.PI) / (15000 + Math.random() * 15000),
        fqY:  (2 * Math.PI) / (15000 + Math.random() * 15000),
        r: 100 + Math.random() * 150, // Large, soft blobs
        h: 200 + Math.random() * 40,  // Blue to indigo hues
      };
    });

    let raf = 0;

    const loop = (t: number) => {
      // Clear canvas (transparent background)
      ctx.clearRect(0, 0, W, H);

      // Use 'multiply' or 'screen' blend mode.
      // 'multiply' on white background creates deep, rich colors where they overlap.
      // Since our background is white/light, multiply or source-over with low opacity works best.
      ctx.globalCompositeOperation = 'multiply';

      for (const b of blobs) {
        // Calculate current position via sine/cosine waves
        b.cx = b.ax + Math.sin(t * b.fqX + b.phX) * b.ampX;
        b.cy = b.ay + Math.cos(t * b.fqY + b.phY) * b.ampY;

        // Keep anchors loosely within bounds so they don't wander off completely
        const pad = b.r / 2;
        if (b.cx < pad)     b.ax += 0.2;
        if (b.cx > W - pad) b.ax -= 0.2;
        if (b.cy < pad)     b.ay += 0.2;
        if (b.cy > H - pad) b.ay -= 0.2;

        // Create a very soft radial gradient simulating a glowing light or liquid drop
        const grad = ctx.createRadialGradient(b.cx, b.cy, 0, b.cx, b.cy, b.r);
        // Start solid, fade to completely transparent
        grad.addColorStop(0,   `hsla(${b.h}, 85%, 70%, 0.15)`);
        grad.addColorStop(0.4, `hsla(${b.h}, 80%, 65%, 0.10)`);
        grad.addColorStop(1,   `hsla(${b.h}, 70%, 60%, 0)`);

        ctx.beginPath();
        ctx.arc(b.cx, b.cy, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Reset blend mode for any other drawing (if needed)
      ctx.globalCompositeOperation = 'source-over';

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
        // Ensure it spans full viewport without interfering
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
