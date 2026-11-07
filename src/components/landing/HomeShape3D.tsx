"use client";

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useInView } from 'framer-motion';

// Global Three.js resource cache enabled
THREE.Cache.enabled = true;

// Module-level singletons: instanced once, cached in memory forever
const CACHED_BOX_GEOMETRY = new THREE.BoxGeometry(2.5, 2.5, 2.5);
const CACHED_BOX_MATERIAL = new THREE.MeshStandardMaterial({
  color: '#3b82f6', // tailwind blue-500
  metalness: 0.15,
  roughness: 0.15,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.92,
});

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    time.current += delta;

    // Fixed isometric tilt
    meshRef.current.rotation.x = 0.5;
    meshRef.current.rotation.z = 0.3;
    meshRef.current.rotation.y += delta * 0.3;

    // Smooth sine-wave float
    meshRef.current.position.y = Math.sin(time.current * 2) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={CACHED_BOX_GEOMETRY}
      material={CACHED_BOX_MATERIAL}
      position={[0, 0, 0]}
      scale={1.5}
    />
  );
};

export default function ScrollShape3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: '150px' });

  return (
    <div ref={containerRef} className="w-full h-full pointer-events-none flex items-center justify-center" style={{ opacity: 0.8 }}>
      <Canvas
        frameloop={isInView ? 'always' : 'never'}
        dpr={[1, 1.25]}
        gl={{
          powerPreference: 'low-power',
          antialias: true,
          alpha: true,
          stencil: false,
        }}
      >
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={60} />
          {/* Zero-network 3-point studio lighting: eliminates 2.5MB external HDR download */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
          <directionalLight position={[-10, 10, -5]} intensity={1.0} color="#93c5fd" />
          <directionalLight position={[0, -10, 0]} intensity={0.4} color="#3b82f6" />
          <AnimatedBox />
        </Suspense>
      </Canvas>
    </div>
  );
}
