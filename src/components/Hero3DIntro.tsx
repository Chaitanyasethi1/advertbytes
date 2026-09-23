import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowDown } from 'lucide-react';

export const Hero3DIntro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 768;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    
    // Very subtle fog to blend into background
    scene.fog = new THREE.Fog(0x050505, 50, 200);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create a sleek, elegant organic wireframe plane
    const geometry = new THREE.PlaneGeometry(300, 300, 40, 40);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x333333, 
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2.5;
    plane.position.y = -30;
    scene.add(plane);

    // Store original vertices for organic wave animation
    const positionAttribute = geometry.attributes.position;
    const vertexData = [];
    for (let i = 0; i < positionAttribute.count; i++) {
      vertexData.push({
        x: positionAttribute.getX(i),
        y: positionAttribute.getY(i),
        z: positionAttribute.getZ(i),
        ang: Math.random() * Math.PI * 2,
        amp: 2 + Math.random() * 4,
        speed: 0.01 + Math.random() * 0.02
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      document.addEventListener('mousemove', onMouseMove);
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.005;

      // Animate vertices for organic wave effect
      for (let i = 0; i < positionAttribute.count; i++) {
        const v = vertexData[i];
        v.ang += v.speed;
        positionAttribute.setZ(i, Math.sin(v.ang) * v.amp + Math.sin(time + v.x * 0.05) * 5);
      }
      positionAttribute.needsUpdate = true;

      // Subtle parallax
      if (!isMobile) {
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isMobile) document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const handleScrollDown = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col justify-center items-center pt-20">
      {/* 3D Canvas Container */}
      <div ref={containerRef} className="absolute inset-0 z-0 opacity-60 mix-blend-screen" />
      
      {/* Glow overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0052FF]/10 via-[#050505]/80 to-[#050505] pointer-events-none" />
      
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        
        <div className="overflow-hidden mb-6">
          <h1 className="text-6xl sm:text-8xl md:text-[9rem] font-bold text-white tracking-tighter leading-[0.9] mix-blend-difference">
            ENGINEERED<br/>
            <span className="text-[#8E8E9F] italic font-light tracking-tight">GROWTH.</span>
          </h1>
        </div>
        
        <p className="text-sm sm:text-base text-[#8E8E9F] max-w-lg mx-auto font-medium mb-12 uppercase tracking-widest leading-relaxed">
          Transforming Ad Spend into Measurable Scale. <br/> A 2026 Performance Portfolio.
        </p>
        
        <button 
          onClick={handleScrollDown}
          className="group flex items-center justify-center gap-3 text-[#4A4A5A] hover:text-white transition-colors mt-8"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Explore</span>
          <div className="p-3 rounded-full border border-white/5 bg-white/5 group-hover:border-white/20 transition-all duration-300">
            <ArrowDown className="h-4 w-4" />
          </div>
        </button>
      </div>
    </div>
  );
};
