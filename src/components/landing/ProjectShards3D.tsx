"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// Individual Shard Component
const Shard = ({ position, scale, rotationSpeed }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  const time = useRef(Math.random() * 100);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    time.current += delta;
    
    // Utilize delta * 60 to calculate consistent framerate-independent rotation across 60/144/240 hz displays
    meshRef.current.rotation.y += rotationSpeed.y * delta * 60;
    meshRef.current.rotation.x += rotationSpeed.x * delta * 60;
    if (rotationSpeed.z) meshRef.current.rotation.z += rotationSpeed.z * delta * 60;
    
    // Custom Float implementation
    meshRef.current.position.y = position[1] + Math.sin(time.current * 1.5) * 0.2;
  });

  return (
      <mesh ref={meshRef} position={position} scale={scale}>
        {/* A circle with 3 segments creates a flat 2D triangle. We scale it differently per mesh to make unique, sharp shards */}
        <circleGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.7}
          flatShading={true}
          side={THREE.DoubleSide}
        />
      </mesh>
  );
};

// Cloud wrapper that distributes them over the parent bounds
const ShardCloud = () => {
  const { viewport } = useThree();

  // Distribute 3 shards across the entire height/width of the Projects section
  // viewport.width/height is mapped exactly to the DOM size of the absolute wrapper
  const shards = useMemo(() => [
    { position: [-viewport.width * 0.8, viewport.height * 0.35, -4], scale: [1.2, 3, 1], rotationSpeed: { x: 0.01, y: 0.02, z: -0.01 } }, // Left top
    { position: [-viewport.width * 0.7, -viewport.height * 0.1, -6], scale: [1.5, 4, 1], rotationSpeed: { x: -0.01, y: 0.01, z: 0.015 } }, // Left bottom
    { position: [viewport.width * 0.8, viewport.height * 0.3, -8], scale: [3, 4, 1], rotationSpeed: { x: 0.005, y: 0.005, z: 0.01 } },   // Right top
  ], [viewport]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#60a5fa" />
      <Environment preset="city" />
      {shards.map((props, i) => (
        <Shard key={i} {...props} />
      ))}
    </>
  );
};

export default function ProjectShards3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "500px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Smooth scroll-linked physical fade in and fade out
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    // Z-0 and absolute inset-0 forces this to stretch natively across the ENTIRE Projects container height
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden hidden md:block">
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="w-full h-full relative"
      >
        {/* Same zero-lag unmount pattern, plus dropping DPR cap significantly boosts fill-rate */}
        {isInView && (
          <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 15], fov: 45 }}>
            <ShardCloud />
          </Canvas>
        )}
      </motion.div>
    </div>
  );
}
