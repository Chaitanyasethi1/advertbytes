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
    
    // Add Fog for depth
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.0015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Particles Geometry
    const geometry = new THREE.BufferGeometry();
    const particleCount = isMobile ? 1500 : 4000;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x0052ff); // Electric Blue
    const color2 = new THREE.Color(0xffffff); // White
    const color3 = new THREE.Color(0x4a4a5e); // Grey

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 200 + Math.random() * 1200;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Mix colors
      const mixedColor = [color1, color2, color3][Math.floor(Math.random() * 3)];
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 3 : 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    if (!isMobile) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 0.001;

      // Rotate particle system slowly
      particles.rotation.y = time * 0.5;
      particles.rotation.x = time * 0.2;

      // Mouse parallax
      if (!isMobile) {
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
      }
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (!isMobile) document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
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
    <div className="relative h-screen w-full bg-[#0A0A0C] overflow-hidden flex flex-col justify-center items-center">
      <div ref={containerRef} className="absolute inset-0 z-0 opacity-80" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052FF]"></span>
          </span>
          Digital Growth Portfolio
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
          DATA MEETS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] to-[#60A5FA]">
            AESTHETICS.
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium mb-12">
          Discover how Advert Bytes engineered scalable growth for 18 industry-leading brands through precision performance marketing.
        </p>
        
        <button 
          onClick={handleScrollDown}
          className="group flex flex-col items-center justify-center gap-3 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll to explore</span>
          <div className="p-3 rounded-full border border-white/10 bg-white/5 group-hover:bg-[#0052FF] group-hover:border-[#0052FF] transition-all duration-300 backdrop-blur-md">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </button>
      </div>
      
      {/* Bottom fade gradient to blend with the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FBFBFB] to-transparent z-10 pointer-events-none" />
    </div>
  );
};
