import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const navItems = [
    { label: 'Home' },
    { label: 'Services', hasDropdown: true },
    { label: 'How We Work' },
    { label: 'Platform' },
    { label: 'Insights' },
    { label: 'About' },
    { label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-xl border-b border-gray-200/50">
      
      {/* Logo */}
      <a href="/" className="flex items-center cursor-pointer group">
        <img src="/logo.png" alt="AdvertBytes" className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
      </a>
      
      {/* Centered Navigation Pills */}
      <div className="hidden lg:flex items-center gap-1 bg-white border border-gray-200/60 shadow-sm rounded-full p-1.5">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveItem(item.label)}
            className={`
              flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300
              ${activeItem === item.label 
                ? 'text-[#FFB800] bg-transparent' // Based on screenshot, active is colored text
                : 'text-gray-600 hover:text-black hover:bg-gray-50'
              }
            `}
          >
            {item.label}
            {item.hasDropdown && <ChevronDown className="h-3 w-3 opacity-60" />}
          </button>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hidden sm:flex p-2 rounded-full border border-gray-200 text-gray-500 hover:text-[#0077b5] hover:border-[#0077b5] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#00D084] px-6 py-2.5 text-[13px] font-bold text-[#0A0A0C] hover:opacity-90 transition-opacity shadow-sm">
          <span>Book a Strategy Call</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

    </nav>
  );
};
