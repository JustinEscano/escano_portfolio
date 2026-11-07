"use client";

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

// Enable global Three.js resource cache (textures, envmaps, geometries)
THREE.Cache.enabled = true;

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Cached material to avoid re-allocating WebGL shaders on re-renders
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#3b82f6', // tailwind blue-500
        metalness: 0.1,
        roughness: 0.2,
        envMapIntensity: 1.0,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  // Cached geometry to avoid memory leaks and repeated buffer uploads
  const geometry = useMemo(() => new THREE.BoxGeometry(2.5, 2.5, 2.5), []);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const time = useRef(0);
  const basePositionY = isMobile ? 0.5 : 0;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    time.current += delta;

    // Fixed isometric tilt
    meshRef.current.rotation.x = 0.5;
    meshRef.current.rotation.z = 0.3;
    meshRef.current.rotation.y += delta * 0.3;

    // Sine-wave vertical float
    meshRef.current.position.y = basePositionY + Math.sin(time.current * 2) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={[0, basePositionY, 0]}
      scale={isMobile ? 1.0 : 1.5}
    />
  );
};

export default function ScrollShape3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: '150px' });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className="w-full h-full pointer-events-none flex items-center justify-center"
      style={{ opacity: 0.8 }}
    >
      <Canvas
        frameloop={isInView ? 'always' : 'never'}
        dpr={[1, 1.5]}
        gl={{
          powerPreference: 'low-power',
          antialias: true,
          alpha: true,
          stencil: false,
        }}
      >
        <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={60} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
        <Environment preset="city" />
        <AnimatedBox />
      </Canvas>
    </div>
  );
}
