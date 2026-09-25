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
      className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-black/30 hover:shadow-xl cursor-pointer"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
          style={{ backgroundImage: `url(${caseStudy.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4">
          <span className="rounded bg-white/90 backdrop-blur-md px-2 py-1 text-[9px] font-semibold text-[#0A0A0C] uppercase tracking-widest border border-gray-200 shadow-sm">
            {caseStudy.categoryTag}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-[#0A0A0C] tracking-tight">{caseStudy.client}</h4>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {caseStudy.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-black/20 pl-3">
              <span className="text-xl font-bold tracking-tighter text-[#0A0A0C]">
                <CountUpStat value={stat.value} numericTarget={stat.numericTarget} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-widest text-gray-500 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t border-gray-100 pt-4 flex items-center justify-between">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider truncate mr-4">
            {caseStudy.services?.join(' / ') || 'Digital Marketing'}
          </span>
          <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};
