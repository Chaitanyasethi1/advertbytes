import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionHeaderProps {
  onExploreClick: () => void;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ onExploreClick }) => {
  return (
    <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        {/* Left Column: Eyebrow + Headline + Body */}
        <div className="max-w-3xl">
          {/* Eyebrow with live pulse indicator */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#0052FF]/20 bg-[#0052FF]/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0052FF]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0052FF] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052FF]"></span>
            </span>
            <span>Portfolio</span>
            <span className="text-[#8E8E9F]">•</span>
            <span className="font-mono text-[11px] text-[#4A4A5E]">18 Case Studies</span>
          </div>

          {/* Editorial H2 Headline */}
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0A0A0C] sm:text-5xl lg:text-6xl">
            Work That Speaks in{' '}
            <span className="relative inline-block text-[#0A0A0C]">
              Numbers.
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[4px] w-full bg-[#0052FF] rounded-full"
              />
            </span>
          </h2>

          {/* Body Copy (Verbatim from Master Prompt #2) */}
          <p className="mt-6 text-lg leading-relaxed text-[#4A4A5A] sm:text-xl font-normal max-w-2xl">
            18 brands. Real campaigns. Real results. From ecommerce and fashion to wellness, education,
            and home décor — explore how we&apos;ve turned ad spend into measurable growth across
            industries.
          </p>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex-shrink-0">
          <button
            onClick={onExploreClick}
            type="button"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#0A0A0C] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0052FF] hover:shadow-xl hover:shadow-[#0052FF]/20 active:scale-95 cursor-pointer"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
