import React, { useRef, useState, useCallback, useEffect } from 'react';

interface Card3DTiltProps {
  children: React.ReactNode;
  maxTilt?: number; // degrees, e.g. 6 for Tier 1, 3 for Tier 2
  className?: string;
  onClick?: () => void;
}

export const Card3DTilt: React.FC<Card3DTiltProps> = ({
  children,
  maxTilt = 6,
  className = '',
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [shadowStyle, setShadowStyle] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: none)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalized coordinates from -1 to 1
      const normalizedX = (x / rect.width) * 2 - 1;
      const normalizedY = (y / rect.height) * 2 - 1;

      // Rotation angles (invert Y for natural pitch)
      const rotateX = -normalizedY * maxTilt;
      const rotateY = normalizedX * maxTilt;

      // Shadow displacement opposite to tilt direction
      const shadowX = -rotateY * 2.5;
      const shadowY = rotateX * 2.5 + 8;
      const shadowBlur = 30 + Math.abs(rotateX * 2);

      setTransformStyle(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`
      );

      setShadowStyle(
        `${shadowX.toFixed(1)}px ${shadowY.toFixed(1)}px ${shadowBlur.toFixed(1)}px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 82, 255, 0.04)`
      );

      // Glare position in percentages
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.12,
      });
    },
    [maxTilt, isTouchDevice]
  );

  const handleMouseEnter = useCallback(() => {
    if (isTouchDevice) return;
    setIsHovered(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (isTouchDevice) return;
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setShadowStyle('0 4px 20px rgba(0, 0, 0, 0.03)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  }, [isTouchDevice]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        boxShadow: shadowStyle,
        transition: isHovered
          ? 'transform 100ms ease-out, box-shadow 100ms ease-out'
          : 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 450ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-[#E5E7EB] transition-all ${
        isHovered ? 'border-[#0052FF]/30 card-hovered' : ''
      } ${className}`}
    >
      {/* Dynamic Specular Sheen / Glare Layer */}
      {!isTouchDevice && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(0, 82, 255, 0.15), transparent 70%)`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
