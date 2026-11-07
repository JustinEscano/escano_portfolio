"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Enable global Three.js resource cache
THREE.Cache.enabled = true;

// Module-level singletons: allocated once in memory, shared across all shards
const CACHED_SHARD_GEOMETRY = new THREE.CircleGeometry(1, 3);
const CACHED_SHARD_MATERIAL = new THREE.MeshStandardMaterial({
  color: '#3b82f6',
  metalness: 0.6,
  roughness: 0.2,
  transparent: true,
  opacity: 0.7,
  flatShading: true,
  side: THREE.DoubleSide,
});

interface ShardProps {
  position: [number, number, number];
  scale: [number, number, number];
  rotationSpeed: { x: number; y: number; z?: number };
  phaseOffset: number;
}

// Individual Shard Component sharing cached geometry and material
const Shard = ({ position, scale, rotationSpeed, phaseOffset }: ShardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(phaseOffset);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    time.current += delta;

    meshRef.current.rotation.y += rotationSpeed.y * delta * 60;
    meshRef.current.rotation.x += rotationSpeed.x * delta * 60;
    if (rotationSpeed.z) meshRef.current.rotation.z += rotationSpeed.z * delta * 60;

    meshRef.current.position.y = position[1] + Math.sin(time.current * 1.5) * 0.2;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={CACHED_SHARD_GEOMETRY}
      material={CACHED_SHARD_MATERIAL}
      position={position}
      scale={scale}
    />
  );
};

// Cloud wrapper that distributes shards strictly to the outer left and right sides
const ShardCloud = () => {
  const { viewport } = useThree();

  // Position shards strictly on the outer left and right flanks of the viewport
  const shards = useMemo(() => {
    const aspect = viewport.width / viewport.height;
    const tanHalfFov = Math.tan((45 / 2) * (Math.PI / 180));

    const getSidePosition = (side: 'left' | 'right', yRatio: number, z: number, edgePercent = 0.88) => {
      const dist = 15 - z;
      const halfW = dist * tanHalfFov * aspect;
      const halfH = dist * tanHalfFov;
      const x = (side === 'left' ? -1 : 1) * halfW * edgePercent;
      const y = halfH * yRatio;
      return [x, y, z] as [number, number, number];
    };

    return [
      {
        // Far left, upper flank
        position: getSidePosition('left', 0.45, -4, 0.88),
        scale: [1.3, 3.2, 1] as [number, number, number],
        rotationSpeed: { x: 0.01, y: 0.02, z: -0.01 },
        phaseOffset: 12.5,
      },
      {
        // Far left, lower flank
        position: getSidePosition('left', -0.35, -6, 0.86),
        scale: [1.6, 4.0, 1] as [number, number, number],
        rotationSpeed: { x: -0.01, y: 0.01, z: 0.015 },
        phaseOffset: 34.2,
      },
      {
        // Far right, upper flank
        position: getSidePosition('right', 0.40, -7, 0.88),
        scale: [2.8, 3.8, 1] as [number, number, number],
        rotationSpeed: { x: 0.005, y: 0.005, z: 0.01 },
        phaseOffset: 58.7,
      },
      {
        // Far right, lower flank
        position: getSidePosition('right', -0.38, -5, 0.86),
        scale: [1.7, 3.5, 1] as [number, number, number],
        rotationSpeed: { x: -0.008, y: 0.012, z: -0.01 },
        phaseOffset: 77.1,
      },
    ];
  }, [viewport.width, viewport.height]);

  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={1.0} color="#60a5fa" />
      {shards.map((props, i) => (
        <Shard key={i} {...props} />
      ))}
    </Suspense>
  );
};

export default function ProjectShards3D() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: '200px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scrollOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden hidden md:block">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <motion.div style={{ opacity: scrollOpacity }} className="w-full h-full relative">
          <Canvas
            frameloop={isInView ? 'always' : 'never'}
            dpr={[1, 1.25]}
            camera={{ position: [0, 0, 15], fov: 45 }}
            gl={{
              powerPreference: 'low-power',
              antialias: true,
              alpha: true,
              stencil: false,
            }}
          >
            <ShardCloud />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
}
