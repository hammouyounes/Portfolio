import { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// ============================================
// Types
// ============================================

interface Skill {
  name: string;
  iconUrl: string;
}

interface SkillSphereProps {
  skills: Skill[];
  radius?: number;
  autoRotateSpeed?: number;
}

interface SkillIconProps {
  skill: Skill;
  position: [number, number, number];
  groupRef: React.RefObject<THREE.Group | null>;
  isMobile: boolean;
}

interface SphereMeshProps {
  skills: Skill[];
  radius: number;
  autoRotateSpeed: number;
  isMobile: boolean;
}

// ============================================
// Responsive Hook
// ============================================

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return isMobile;
}

// ============================================
// Fibonacci Sphere Algorithm
// ============================================

/**
 * Generates evenly distributed points on a sphere using the Fibonacci spiral method.
 * This provides a more uniform distribution than random placement.
 */
function fibonacciSphere(samples: number, radius: number): [number, number, number][] {
  const points: [number, number, number][] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1); // Golden angle in radians (~2.39996)

  for (let i = 0; i < samples; i++) {
    // y goes from 1 to -1
    const y = 1 - (i / (samples - 1)) * 2;
    
    // radius at y
    const radiusAtY = Math.sqrt(1 - y * y);
    
    // golden angle increment
    const theta = phi * i;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push([x * radius, y * radius, z * radius]);
  }

  return points;
}

// ============================================
// Skill Icon Component (rendered via Html)
// ============================================

function SkillIcon({ skill, position, groupRef, isMobile }: SkillIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [depthOpacity, setDepthOpacity] = useState(1);
  const [depthScale, setDepthScale] = useState(1);

  // Responsive icon sizes
  const iconContainerSize = isMobile ? '56px' : '80px';
  const iconImgSize = isMobile ? '32px' : '48px';

  // Depth sorting: calculate opacity & scale based on Z-position relative to camera
  useFrame(({ camera }) => {
    if (!groupRef.current) return;

    // Get world position of this icon
    const worldPos = new THREE.Vector3(...position);
    worldPos.applyMatrix4(groupRef.current.matrixWorld);

    // Direction from sphere center to icon (in world space)
    const sphereCenter = new THREE.Vector3();
    groupRef.current.getWorldPosition(sphereCenter);
    const iconDir = new THREE.Vector3().subVectors(worldPos, sphereCenter).normalize();

    // Direction from icon to camera
    const dirToCamera = new THREE.Vector3().subVectors(camera.position, worldPos).normalize();

    // Dot product: 1 = facing camera (front), -1 = facing away (back)
    const dot = iconDir.dot(dirToCamera);

    // Map to usable ranges
    const t = (dot + 1) / 2; // 0..1
    setDepthOpacity(THREE.MathUtils.lerp(0.12, 1, t));
    setDepthScale(THREE.MathUtils.lerp(0.55, 1, t));
  });

  return (
    <group position={position}>
      <Html
        center
        distanceFactor={isMobile ? 5 : 7}
        style={{
          transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
          transform: isHovered ? 'scale(1.3)' : `scale(${depthScale})`,
          opacity: depthOpacity,
          pointerEvents: depthOpacity > 0.45 ? 'auto' : 'none',
        }}
      >
        <div
          className="skill-icon-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            width: iconContainerSize,
            height: iconContainerSize,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: isHovered
              ? '0 8px 32px rgba(139, 92, 246, 0.4), 0 0 20px rgba(139, 92, 246, 0.2)'
              : '0 4px 16px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease-out',
          }}
          title={skill.name}
        >
          <img
            src={skill.iconUrl}
            alt={skill.name}
            style={{
              width: iconImgSize,
              height: iconImgSize,
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
            }}
            draggable={false}
          />
        </div>
      </Html>
    </group>
  );
}

// ============================================
// Wireframe Globe Mesh
// ============================================

function WireframeGlobe({ radius }: { radius: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial
        color="#4338ca"
        wireframe
        transparent
        opacity={0.12}
      />
    </mesh>
  );
}

// ============================================
// Rotating Sphere Container
// ============================================

function SphereMesh({ skills, radius, autoRotateSpeed, isMobile }: SphereMeshProps) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate positions using Fibonacci sphere algorithm
  const positions = useMemo(
    () => fibonacciSphere(skills.length, radius),
    [skills.length, radius]
  );

  // Subtle auto-rotation using useFrame
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * autoRotateSpeed;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe globe background */}
      <WireframeGlobe radius={radius} />
      
      {/* Skill icons distributed on sphere surface */}
      {skills.map((skill, index) => (
        <SkillIcon
          key={skill.name}
          skill={skill}
          position={positions[index]}
          groupRef={groupRef}
          isMobile={isMobile}
        />
      ))}
    </group>
  );
}

// ============================================
// Main SkillSphere Component
// ============================================

export default function SkillSphere({
  skills,
  radius = 4,
  autoRotateSpeed = 0.1,
}: SkillSphereProps) {
  const isMobile = useIsMobile();

  // Responsive values
  const effectiveRadius = isMobile ? radius * 0.65 : radius;
  const cameraZ = isMobile ? 10 : 12;

  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[500px] relative">
      <Canvas
        camera={{
          position: [0, 0, cameraZ],
          fov: 50,
          near: 0.1,
          far: 100,
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Ambient lighting for subtle illumination */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
        {/* The rotating skill sphere */}
        <SphereMesh
          skills={skills}
          radius={effectiveRadius}
          autoRotateSpeed={autoRotateSpeed}
          isMobile={isMobile}
        />
        
        {/* OrbitControls - full 3D rotation unlocked */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={isMobile ? 0.8 : 0.5}
        />
      </Canvas>
    </div>
  );
}

// ============================================
// Default Skills Data (for demonstration)
// ============================================

export const defaultSkills: Skill[] = [
  { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Laravel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  { name: 'PHP', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

// Type export for external use
export type { Skill, SkillSphereProps };
