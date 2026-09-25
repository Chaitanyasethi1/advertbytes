import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  onExploreClick: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ onExploreClick }) => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end border-b border-gray-200 pb-12">
        {/* Left Column: Eyebrow + Headline + Body */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
            </span>
            <span>Index</span>
            <span className="text-gray-300">/</span>
            <span className="font-mono text-[11px] text-gray-500">18 Case Studies</span>
          </div>

          {/* Editorial H2 Headline */}
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0A0A0C] sm:text-5xl lg:text-6xl mb-6">
            Work That Speaks in{' '}
            <span className="italic font-light text-gray-400">
              Numbers.
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 sm:text-xl font-medium max-w-2xl">
            18 brands. Real campaigns. Real results. From ecommerce and fashion to wellness, education,
            and home décor — explore how we've turned ad spend into measurable growth.
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex-shrink-0">
          <button
            onClick={onExploreClick}
            type="button"
            className="group relative inline-flex items-center gap-3 rounded-full bg-[#0A0A0C] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-black cursor-pointer"
          >
            <span className="uppercase tracking-widest text-[10px]">Explore Index</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
