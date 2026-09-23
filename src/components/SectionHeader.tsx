import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  onExploreClick: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ onExploreClick }) => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end border-b border-white/10 pb-12">
        {/* Left Column: Eyebrow + Headline + Body */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8E8E9F]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052FF]"></span>
            </span>
            <span>Index</span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-[11px] text-[#4A4A5E]">18 Case Studies</span>
          </div>

          {/* Editorial H2 Headline */}
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Work That Speaks in{' '}
            <span className="italic font-light text-[#8E8E9F]">
              Numbers.
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-[#A1A1AA] sm:text-xl font-medium max-w-2xl">
            18 brands. Real campaigns. Real results. From ecommerce and fashion to wellness, education,
            and home décor — explore how we've turned ad spend into measurable growth.
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex-shrink-0">
          <button
            onClick={onExploreClick}
            type="button"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-black shadow-lg transition-all duration-300 hover:bg-[#0052FF] hover:text-white cursor-pointer"
          >
            <span className="uppercase tracking-widest text-[10px]">Explore Index</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
