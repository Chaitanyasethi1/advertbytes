import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mix-blend-difference text-white pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto cursor-pointer">
        <div className="h-4 w-4 bg-[#0052FF]" />
        <span className="font-extrabold tracking-tight text-xl">Advert Bytes</span>
      </div>
      
      <div className="pointer-events-auto">
        <button className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
          <span>Menu</span>
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};
