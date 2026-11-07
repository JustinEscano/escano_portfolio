"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Enable global Three.js resource cache
THREE.Cache.enabled = true;

interface ShardProps {
  position: [number, number, number];
  scale: [number, number, number];
  rotationSpeed: { x: number; y: number; z?: number };
  phaseOffset: number;
  geometry: THREE.BufferGeometry;
  material: THREE.Material;
}

// Individual Shard Component sharing cached geometry and material
const Shard = ({ position, scale, rotationSpeed, phaseOffset, geometry, material }: ShardProps) => {
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
      geometry={geometry}
      material={material}
      position={position}
      scale={scale}
    />
  );
};

// Cloud wrapper that distributes them over the parent bounds with cached assets
const ShardCloud = () => {
  const { viewport } = useThree();

  // Cached geometry and material shared across all shards to reduce draw call overhead
  const sharedGeometry = useMemo(() => new THREE.CircleGeometry(1, 3), []);
  const sharedMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#3b82f6',
        metalness: 0.6,
        roughness: 0.2,
        transparent: true,
        opacity: 0.7,
        flatShading: true,
        side: THREE.DoubleSide,
      }),
    []
  );

  const shards = useMemo(
    () => [
      {
        position: [-viewport.width * 0.8, viewport.height * 0.35, -4] as [number, number, number],
        scale: [1.2, 3, 1] as [number, number, number],
        rotationSpeed: { x: 0.01, y: 0.02, z: -0.01 },
        phaseOffset: 12.5,
      },
      {
        position: [-viewport.width * 0.7, -viewport.height * 0.1, -6] as [number, number, number],
        scale: [1.5, 4, 1] as [number, number, number],
        rotationSpeed: { x: -0.01, y: 0.01, z: 0.015 },
        phaseOffset: 34.2,
      },
      {
        position: [viewport.width * 0.8, viewport.height * 0.3, -8] as [number, number, number],
        scale: [3, 4, 1] as [number, number, number],
        rotationSpeed: { x: 0.005, y: 0.005, z: 0.01 },
        phaseOffset: 58.7,
      },
    ],
    [viewport]
  );

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#60a5fa" />
      <Environment preset="city" />
      {shards.map((props, i) => (
        <Shard
          key={i}
          {...props}
          geometry={sharedGeometry}
          material={sharedMaterial}
        />
      ))}
    </>
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
  );
}
