import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';

export const ClientBrandStrip: React.FC = () => {
  return (
    <div className="relative mt-24 border-t border-[#E5E7EB] bg-[#FAFBFD] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Heading */}
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0052FF]">
          Client Ecosystem
        </span>
        <h3 className="mt-2 text-3xl font-extrabold text-[#0A0A0C] sm:text-4xl">
          Brands We&apos;ve Worked With
        </h3>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#555666] sm:text-base">
          From ecommerce and fashion to jewellery, food, interiors and local businesses, we&apos;ve
          worked across different industries and business models.
        </p>

        {/* Logo Tiles Grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center rounded-xl border border-[#E5E7EB] bg-white p-5 transition-all duration-200 hover:border-[#0052FF]/40 hover:shadow-lg"
            >
              {/* Brand Insignia / Monogram with 40% grayscale resting state -> full color on hover */}
              <div className="flex h-12 w-full items-center justify-center filter grayscale opacity-40 transition-all duration-200 group-hover:filter-none group-hover:opacity-100 group-hover:scale-105">
                <span className="font-mono text-base font-extrabold tracking-wider text-[#0A0A0C] group-hover:text-[#0052FF] transition-colors">
                  {client.label}
                </span>
              </div>

              {/* Sub-label */}
              <span className="mt-2 font-mono text-[10px] uppercase tracking-wider text-[#8E8E9F] transition-colors group-hover:text-[#4A4A5A]">
                {client.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
