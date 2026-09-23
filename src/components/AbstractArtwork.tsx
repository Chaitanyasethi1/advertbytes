import React from 'react';

interface AbstractArtworkProps {
  type: 'textile' | 'footwear' | 'architectural';
  className?: string;
}

export const AbstractArtwork: React.FC<AbstractArtworkProps> = ({ type, className = '' }) => {
  if (type === 'textile') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0F0F13] to-[#181820] p-6 text-white ${className}`}>
        {/* Editorial Grid / Weave Vector Pattern */}
        <svg
          viewBox="0 0 320 180"
          className="h-full w-full opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle background coordinate lines */}
          <line x1="40" y1="0" x2="40" y2="180" stroke="#2A2A38" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="160" y1="0" x2="160" y2="180" stroke="#2A2A38" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="280" y1="0" x2="280" y2="180" stroke="#2A2A38" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Stylized woven silk motif / ethnic drapery curves */}
          <path
            d="M 20 140 C 80 40, 140 160, 200 60 C 240 0, 280 90, 310 40"
            stroke="#4A4A5E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 20 155 C 80 55, 140 175, 200 75 C 240 15, 280 105, 310 55"
            stroke="#65657E"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M 20 170 C 80 70, 140 190, 200 90 C 240 30, 280 120, 310 70"
            stroke="#0052FF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Delicate diamond textile jacquard node */}
          <g transform="translate(180, 50)">
            <polygon points="0,-16 16,0 0,16 -16,0" stroke="#0052FF" strokeWidth="1.5" fill="none" />
            <polygon points="0,-8 8,0 0,8 -8,0" fill="#0052FF" fillOpacity="0.3" />
            <circle cx="0" cy="0" r="2" fill="#0052FF" />
          </g>

          <g transform="translate(90, 95)">
            <polygon points="0,-12 12,0 0,12 -12,0" stroke="#3A3A4C" strokeWidth="1" fill="none" />
          </g>

          <g transform="translate(260, 110)">
            <polygon points="0,-12 12,0 0,12 -12,0" stroke="#3A3A4C" strokeWidth="1" fill="none" />
          </g>

          {/* Editorial tag */}
          <text x="24" y="32" fill="#8E8E9F" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1.5">
            CRAFT × SCALE // ETHNIC 2025
          </text>
        </svg>
      </div>
    );
  }

  if (type === 'footwear') {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0F0F13] to-[#181820] p-6 text-white ${className}`}>
        {/* Footwear Ergonomic Silhouette Line-Art */}
        <svg
          viewBox="0 0 320 180"
          className="h-full w-full opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Elevation and contour lines */}
          <path
            d="M 30 130 C 70 130, 100 125, 130 110 C 160 95, 190 70, 230 70 C 265 70, 285 95, 295 125 C 295 130, 285 132, 270 132 L 30 132 Z"
            stroke="#2F3040"
            strokeWidth="1.2"
            fill="none"
          />

          {/* Dynamic sole arch curve in Electric Blue */}
          <path
            d="M 40 125 C 80 125, 115 118, 145 100 C 175 82, 205 65, 240 68 C 270 70, 285 95, 290 120"
            stroke="#0052FF"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Minimalist heel and velocity aerodynamic rays */}
          <path d="M 235 68 L 255 35 L 265 40 L 250 72" stroke="#505268" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="140" y1="102" x2="160" y2="132" stroke="#3D3E52" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="175" y1="85" x2="195" y2="132" stroke="#3D3E52" strokeWidth="1" strokeDasharray="3 3" />

          {/* Focal metric nodes */}
          <circle cx="240" cy="68" r="3.5" fill="#0052FF" />
          <circle cx="240" cy="68" r="8" stroke="#0052FF" strokeOpacity="0.4" strokeWidth="1" />

          {/* Editorial tag */}
          <text x="24" y="32" fill="#8E8E9F" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1.5">
            CONTOUR // 3.41X ROAS VELOCITY
          </text>
        </svg>
      </div>
    );
  }

  // Architectural / Tiles
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0F0F13] to-[#181820] p-6 text-white ${className}`}>
      {/* Isometric Architectural Tile Matrix Line-Art */}
      <svg
        viewBox="0 0 320 180"
        className="h-full w-full opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Isometric Grid Prisms */}
        <g transform="translate(160, 95)">
          {/* Center Isometric Cube / Slab */}
          <polygon points="0,-40 38,-18 0,4 -38,-18" fill="#1C1D26" stroke="#393B4E" strokeWidth="1.2" />
          <polygon points="0,4 38,-18 38,22 0,44" fill="#13141C" stroke="#393B4E" strokeWidth="1.2" />
          <polygon points="0,4 -38,-18 -38,22 0,44" fill="#171822" stroke="#393B4E" strokeWidth="1.2" />

          {/* Right Highlighted Slab in Electric Blue accent */}
          <polygon points="46,-14 84,8 46,30 8,8" fill="#0052FF" fillOpacity="0.12" stroke="#0052FF" strokeWidth="1.8" />
          <polygon points="46,30 84,8 84,48 46,70" stroke="#0052FF" strokeOpacity="0.6" strokeWidth="1.2" />
          <polygon points="46,30 8,8 8,48 46,70" stroke="#0052FF" strokeOpacity="0.4" strokeWidth="1.2" />

          {/* Left Sub-slab */}
          <polygon points="-46,-14 -8,-14 -46,8 -84,8" stroke="#393B4E" strokeWidth="1" strokeDasharray="3 3" />

          {/* Alignment Ray */}
          <line x1="0" y1="-40" x2="0" y2="-70" stroke="#0052FF" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx="0" cy="-70" r="3" fill="#0052FF" />
        </g>

        {/* Editorial tag */}
        <text x="24" y="32" fill="#8E8E9F" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1.5">
          SURFACE MATRIX // 800+ LEADS
        </text>
      </svg>
    </div>
  );
};
