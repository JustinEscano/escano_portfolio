'use client';

import React, { useState, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface CarouselSlide {
  image: StaticImageData;
  title: string;
  description: string;
}

interface ScreenshotCarouselProps {
  slides: CarouselSlide[];
}

export default function ScreenshotCarousel({ slides }: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const go = (i: number) => {
    setCurrent(i);
    const strip = thumbsRef.current;
    if (strip) {
      const thumb = strip.children[i] as HTMLElement;
      thumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const prev = () => go((current - 1 + slides.length) % slides.length);
  const next = () => go((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="w-full space-y-4">

      {/* ── Main Image ── */}
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/40"
        style={{ aspectRatio: '16 / 9' }}
      >
        <Image
          key={current}
          src={slide.image}
          alt={slide.title}
          fill
          className="object-contain object-top animate-fade-in px-2 pt-1 pb-2 sm:px-4 sm:pt-2 sm:pb-4"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />

        {/* Gradient overlay for caption legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        {/* Caption pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 pt-12 pointer-events-none">
          <h3 className="text-accent text-xl sm:text-2xl font-bold leading-tight drop-shadow-md">{slide.title}</h3>
          <p className="text-white/90 text-sm sm:text-base mt-1 sm:mt-2 leading-relaxed max-w-3xl drop-shadow-md">{slide.description}</p>
        </div>

        {/* Arrows */}
        <button onClick={prev} aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        <button onClick={next} aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-110 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>

      {/* ── Thumbnail Strip (image-only, no labels) ── */}
      <div
        ref={thumbsRef}
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{ scrollSnapAlign: 'center', minWidth: '100px', width: '100px' }}
            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none
              ${i === current
                ? 'border-accent scale-[1.05] shadow-md shadow-accent/20'
                : 'border-white/10 hover:border-white/30 opacity-50 hover:opacity-80'
              }`}
          >
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
