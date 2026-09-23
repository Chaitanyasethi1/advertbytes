import React from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent, onClick, className = '' }) => {
  return (
    <div
      className={`group relative perspective-1000 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative h-full w-full preserve-3d transition-transform duration-700 group-hover:rotate-y-180 shadow-sm hover:shadow-2xl rounded-2xl border border-[#E5E7EB]">
        
        {/* Front */}
        <div className="absolute inset-0 backface-hidden w-full h-full rounded-2xl overflow-hidden bg-white">
          {frontContent}
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0C] text-white">
          {backContent}
        </div>
      </div>
    </div>
  );
};
