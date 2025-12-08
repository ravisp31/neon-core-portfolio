import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Icosahedron, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const FloatingShape = ({ 
  position, 
  color, 
  shape = "sphere", 
  speed = 1,
  distort = 0.3,
  scale = 1
}: { 
  position: [number, number, number]; 
  color: string; 
  shape?: "sphere" | "torus" | "box" | "icosahedron";
  speed?: number;
  distort?: number;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case "torus":
        return <torusGeometry args={[1, 0.4, 16, 32]} />;
      case "box":
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1, 1]} />;
      default:
        return <sphereGeometry args={[1, 64, 64]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {getGeometry()}
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 -z-5 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#00f5ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
          <spotLight position={[0, 10, 0]} intensity={1} color="#8b5cf6" />

          <FloatingShape position={[-5, 2, -3]} color="#00f5ff" shape="sphere" distort={0.4} scale={0.8} />
          <FloatingShape position={[5, -1, -4]} color="#ff00ff" shape="torus" speed={0.8} distort={0.2} scale={0.7} />
          <FloatingShape position={[-4, -2, -2]} color="#8b5cf6" shape="icosahedron" speed={1.2} distort={0.3} scale={0.6} />
          <FloatingShape position={[4, 3, -5]} color="#00f5ff" shape="box" speed={0.6} distort={0.1} scale={0.5} />
          <FloatingShape position={[0, -4, -3]} color="#ff00ff" shape="sphere" speed={0.9} distort={0.5} scale={0.7} />
          <FloatingShape position={[-2, 4, -4]} color="#8b5cf6" shape="torus" speed={0.7} distort={0.3} scale={0.5} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
