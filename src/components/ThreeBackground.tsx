import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile or reduced motion
    const isMobile = window.innerWidth < 768 || window.matchMedia('(hover: none)').matches;
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 24;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // Group for subtle rotation
    const group = new THREE.Group();
    scene.add(group);

    // Geometry 1: Low-poly Icosahedron / Geodesic Wireframe
    const icosaGeometry = new THREE.IcosahedronGeometry(7, 2);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMat);
    group.add(icosaMesh);

    // Geometry 2: Floating Ring / Torus Wireframe (accent orbit)
    const torusGeometry = new THREE.TorusGeometry(10.5, 0.6, 8, 48);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const torusMesh = new THREE.Mesh(torusGeometry, torusMat);
    torusMesh.rotation.x = Math.PI / 3;
    group.add(torusMesh);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    // Parallax on scroll
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth interpolation for mouse parallax
      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;

      // Gentle ambient rotation
      group.rotation.y += 0.0015;
      group.rotation.x += 0.0008;

      group.rotation.x = 0.2 + targetY + scrollY * 0.2;
      group.rotation.y += 0.0012 + targetX * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      icosaGeometry.dispose();
      wireframeMat.dispose();
      torusGeometry.dispose();
      torusMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-90 transition-opacity duration-1000"
    />
  );
};
