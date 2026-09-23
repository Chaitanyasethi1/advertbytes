import React from 'react';
import { CountUpStat } from './CountUpStat';

export const NumbersStrip: React.FC = () => {
  return (
    <div className="relative border-y border-white/5 bg-[#0A0A0C]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
           <h3 className="text-xl sm:text-2xl font-bold text-white tracking-widest uppercase">
            The Advert Bytes <span className="text-[#0052FF]">Benchmark.</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 divide-x divide-white/5 border-t border-white/5 md:grid-cols-4">
          
          <div className="flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-white/5">
            <span className="text-4xl font-extrabold text-white md:text-5xl tracking-tighter">
              <CountUpStat value="₹5.5L+" numericTarget={5.5} prefix="₹" suffix="L+" decimals={1} />
            </span>
            <span className="mt-3 text-xs font-medium uppercase tracking-widest text-[#8E8E9F]">
              Avg. Monthly Ad Spend Managed
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-white/5">
            <span className="text-4xl font-extrabold text-white md:text-5xl tracking-tighter">
              <CountUpStat value="4.8x" numericTarget={4.8} suffix="x" decimals={1} />
            </span>
            <span className="mt-3 text-xs font-medium uppercase tracking-widest text-[#8E8E9F]">
              Blended ROAS Across Brands
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-white/5">
            <span className="text-4xl font-extrabold text-white md:text-5xl tracking-tighter">
              <CountUpStat value="85,000+" numericTarget={85000} suffix="+" decimals={0} />
            </span>
            <span className="mt-3 text-xs font-medium uppercase tracking-widest text-[#8E8E9F]">
              High-Intent Leads Generated
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-8 text-center transition-colors hover:bg-white/5">
            <span className="text-4xl font-extrabold text-white md:text-5xl tracking-tighter">
              <CountUpStat value="18" numericTarget={18} decimals={0} />
            </span>
            <span className="mt-3 text-xs font-medium uppercase tracking-widest text-[#8E8E9F]">
              Brands Scaled
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
