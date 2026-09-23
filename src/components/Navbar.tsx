import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E5E7EB] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A0A0C] text-white font-mono font-black text-base shadow-sm">
            AB
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-[#0A0A0C]">
              ADVERT BYTES
            </span>
            <span className="ml-2 hidden rounded-full bg-[#F3F4F6] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#6B7280] sm:inline-block">
              DELHI // PERFORMANCE
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4B5563]">
          <a href="#portfolio" className="text-[#0052FF] font-semibold">
            Portfolio
          </a>
          <a href="#tier1" className="hover:text-[#0A0A0C] transition-colors">
            Featured
          </a>
          <a href="#results-grid" className="hover:text-[#0A0A0C] transition-colors">
            Case Studies
          </a>
          <a href="#clients" className="hover:text-[#0A0A0C] transition-colors">
            Clients
          </a>
        </nav>

        {/* Header Right Action */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:contact@advertbytes.com"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A0A0C] bg-[#0A0A0C] px-5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#0052FF] hover:border-[#0052FF]"
          >
            <span>Let&apos;s Talk Growth</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
