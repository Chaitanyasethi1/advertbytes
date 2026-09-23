import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { CaseStudyTier2 } from '../data/portfolioData';
import { CountUpStat } from './CountUpStat';

interface Tier2CompactCardProps {
  caseStudy: CaseStudyTier2;
  onOpenDetails: (caseStudy: CaseStudyTier2) => void;
}

export const Tier2CompactCard: React.FC<Tier2CompactCardProps> = ({
  caseStudy,
  onOpenDetails,
}) => {
  return (
    <div 
      onClick={() => onOpenDetails(caseStudy)}
      className="group relative flex flex-col bg-[#0A0A0C] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#111111] cursor-pointer"
    >
      {/* Subtle Image Reveal on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale mix-blend-overlay"
          style={{ backgroundImage: `url(${caseStudy.imageUrl})` }}
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col h-full relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h4 className="text-xl font-bold text-white tracking-tight mb-1">{caseStudy.client}</h4>
            <div className="text-[9px] font-mono uppercase tracking-widest text-[#0052FF]">
              {caseStudy.categoryTag}
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-white/20 group-hover:text-white transition-colors" />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
          {caseStudy.stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white">
                <CountUpStat value={stat.value} numericTarget={stat.numericTarget} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-[#6B7280]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-white/5 pt-4">
           <p className="text-xs text-[#8E8E9F] line-clamp-2 leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>
      </div>
    </div>
  );
};
