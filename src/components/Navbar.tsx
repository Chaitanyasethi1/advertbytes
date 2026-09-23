import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="h-4 w-4 bg-[#0052FF]" />
        <span className="font-extrabold tracking-tight text-xl text-[#0A0A0C]">Advert Bytes</span>
      </div>
      
      <div>
        <button className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 text-[#0A0A0C] transition-colors">
          <span>Menu</span>
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </nav>
  );
};
