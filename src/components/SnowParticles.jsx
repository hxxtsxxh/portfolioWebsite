import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SnowParticles = ({ count = 1000, bounds = 20 }) => {
  // Create a reference for the points
  const pointsRef = useRef();

  // Generate snow particle positions and store them in a buffer
  useEffect(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds; // z
    }

    const geometry = pointsRef.current.geometry;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  }, [count, bounds]);

  // Animate snow particles
  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const positions = points.geometry.attributes.position.array;

    for (let i = 0; i < positions.length; i += 3) {
      // Move particles downward with slight horizontal drift
      positions[i + 1] -= 0.0001 + Math.random() * 0.02; // Vertical movement
      positions[i] += Math.sin(state.clock.elapsedTime * 0.5) * 0.005; // Horizontal drift

      // Reset particle position if it falls below -bounds/2
      if (positions[i + 1] < -bounds / 2) {
        positions[i + 1] = bounds / 2;
        positions[i] = (Math.random() - 0.5) * bounds;
        positions[i + 2] = (Math.random() - 0.5) * bounds;
      }
    }

    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry />
      <pointsMaterial
        color="white"
        size={0.063}
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default SnowParticles;
