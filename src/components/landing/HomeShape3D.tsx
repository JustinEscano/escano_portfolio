"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  const material = new THREE.MeshStandardMaterial({
    color: '#3b82f6', // tailwind blue-500
    metalness: 0.1,
    roughness: 0.2,
    envMapIntensity: 1.0,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.9,
  });

  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    // Rely on true screen width instead of local grid container bounds
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
    
    // Fixed isometric tilt guarantees the rotating cube's mass never wobbles left or right optically
    meshRef.current.rotation.x = 0.5;
    meshRef.current.rotation.z = 0.3;
    meshRef.current.rotation.y += delta * 0.3;
    
    // Native sine-wave vertical float effect (no THREE.Clock needed)
    meshRef.current.position.y = basePositionY + Math.sin(time.current * 2) * 0.1;
  });

  return (
      <mesh
        ref={meshRef}
        material={material}
        // Nudge up exactly 0.5 units on mobile to perfectly center it as the bottom corner droops
        position={[0, basePositionY, 0]}
        // Reduced desktop scale
        scale={isMobile ? 1.0 : 1.5}
      >
        <boxGeometry args={[2.5, 2.5, 2.5]} />
      </mesh>
  );
};

export default function ScrollShape3D() {
  const [isMobile, setIsMobile] = useState(true);
  
  useEffect(() => {
    // Nuclear option: physically prevent React from mounting the canvas payload on mobile
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (isMobile) return null;

  return (
    <div className="w-full h-full pointer-events-none flex items-center justify-center" style={{ opacity: 0.8 }}>
      <Canvas dpr={[1, 1.5]}>
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
