import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

export const Intro3D: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENGINE...');
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Progress simulation
  useEffect(() => {
    const statuses = [
      'INITIALIZING ENGINE...',
      'CALIBRATING 3D MATRIX...',
      'LOADING GROWTH MODELS...',
      'CONNECTING DATA STREAMS...',
      'SYSTEM READY'
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 8;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setStatusText(statuses[4]);
        
        // Auto exit after complete
        setTimeout(() => {
          triggerExit();
        }, 600);
      } else {
        const statusIdx = Math.min(Math.floor((currentProgress / 100) * 4), 3);
        setStatusText(statuses[statusIdx]);
      }
      setProgress(currentProgress);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 800);
  };

  // Three.js 3D Scene Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.035);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3D Outer Particle Field
    const particleCount = 1200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xffb800);
    const greenColor = new THREE.Color(0x00d084);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixFactor = Math.random();
      let pColor = mixFactor > 0.5 ? goldColor : (mixFactor > 0.2 ? greenColor : whiteColor);
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // Central 3D Geometric Engine Core (Torus Knot + Wireframe Icosahedron)
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 16, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0c,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knotMesh);

    // Glowing Wireframe Overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffb800,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const wireMesh = new THREE.Mesh(knotGeo, wireMat);
    wireMesh.scale.set(1.02, 1.02, 1.02);
    scene.add(wireMesh);

    // Outer Cyber Rings
    const ringGeo = new THREE.RingGeometry(2.4, 2.45, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00d084,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
      wireframe: true
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ringMesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffb800, 3, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00d084, 3, 20);
    pointLight2.position.set(-5, -5, 2);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate 3D Objects
      knotMesh.rotation.x = elapsedTime * 0.4;
      knotMesh.rotation.y = elapsedTime * 0.6;
      wireMesh.rotation.x = elapsedTime * 0.4;
      wireMesh.rotation.y = elapsedTime * 0.6;

      ringMesh.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.5) * 0.2;
      ringMesh.rotation.y = elapsedTime * 0.3;

      particles.rotation.y = elapsedTime * 0.08;

      // Parallax effect with mouse
      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.8 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle Window Resize
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.08 : 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0C] text-white overflow-hidden select-none"
      >
        {/* 3D Canvas Background */}
        <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-auto" />

        {/* Ambient Glow Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0A0A0C]/50 to-[#0A0A0C] z-10 pointer-events-none" />

        {/* Center Content Overlay */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          {/* Logo Mark */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl"
          >
            <img src="/logo.png" alt="AdvertBytes" className="h-8 w-auto object-contain" />
            <span className="text-xl font-black tracking-tight text-white font-sans">
              AdvertBytes
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3"
          >
            GROWTH ENGINEERING <br />
            <span className="bg-gradient-to-r from-[#FFB800] via-white to-[#00D084] bg-clip-text text-transparent">
              3D EXPERIENCE
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm font-mono text-gray-400 tracking-widest uppercase mb-10 max-w-md"
          >
            Performance Marketing × Scale Architecture
          </motion.p>

          {/* Progress Bar & Numeric Status */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-64 sm:w-80 flex flex-col items-center gap-3"
          >
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden p-0.5 border border-white/10 backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FFB800] to-[#00D084] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="w-full flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span className="tracking-wider">{statusText}</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
          </motion.div>

          {/* Skip / Enter Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={triggerExit}
            className="mt-8 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono tracking-wider text-gray-300 hover:text-white hover:border-[#FFB800] hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm"
          >
            [ SKIP INTRO ➔ ]
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
