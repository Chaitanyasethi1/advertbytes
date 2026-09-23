import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { CaseStudyTier1 } from '../data/portfolioData';
import { CountUpStat } from './CountUpStat';
import { InstagramIcon } from './Icons';

interface Tier1FeaturedCardProps {
  caseStudy: CaseStudyTier1;
  index: number;
  onOpenDetails: (caseStudy: CaseStudyTier1) => void;
}

export const Tier1FeaturedCard: React.FC<Tier1FeaturedCardProps> = ({
  caseStudy,
  index,
  onOpenDetails,
}) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#0052FF]/30 hover:shadow-2xl hover:shadow-gray-200/50">
      
      {/* High-End Image Container */}
      <div className="relative h-[300px] w-full overflow-hidden bg-gray-100">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
          style={{ backgroundImage: `url(${caseStudy.imageUrl})` }}
        />
        {/* Sleek gradient fade to white */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        
        {/* Floating Labels */}
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold text-white bg-[#0A0A0C] px-2 py-1 rounded uppercase tracking-widest shadow-sm">
            0{index + 1}
          </span>
          <span className="rounded bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] font-semibold text-[#0A0A0C] uppercase tracking-widest border border-gray-200 shadow-sm">
            {caseStudy.categoryTag}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 sm:p-10 flex flex-col flex-grow justify-between relative -mt-10 bg-white">
        
        {/* Title Block */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0C] tracking-tight mb-1">
              {caseStudy.client}
            </h3>
            <p className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              {caseStudy.subtitle}
            </p>
          </div>
          
          <div className="flex gap-2">
            {caseStudy.instagram && (
              <a href={`https://${caseStudy.instagram}`} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-[#0052FF] hover:text-white hover:border-[#0052FF] transition-all">
                <InstagramIcon className="h-4 w-4" />
              </a>
            )}
            {caseStudy.website && (
              <a href={`https://${caseStudy.website}`} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-[#0052FF] hover:text-white hover:border-[#0052FF] transition-all">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Narrative */}
        <p className="text-sm leading-relaxed text-gray-600 line-clamp-2 mb-8">
          {caseStudy.story}
        </p>

        {/* Crisp Metrics Grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-8">
          {caseStudy.stats.map((stat, statIdx) => (
            <div key={statIdx} className="flex flex-col border-l-2 border-[#0052FF]/20 pl-4">
              <span className="text-3xl font-bold tracking-tighter text-[#0A0A0C]">
                <CountUpStat value={stat.value} numericTarget={stat.numericTarget} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action & Tags */}
        <div className="mt-auto border-t border-gray-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {caseStudy.services.slice(0, 3).map((service, sIdx) => (
              <span key={sIdx} className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                {service} {sIdx < 2 && <span className="ml-2 text-gray-300">/</span>}
              </span>
            ))}
          </div>

          <button onClick={() => onOpenDetails(caseStudy)} className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0C] group/btn hover:text-[#0052FF] transition-colors uppercase tracking-widest">
            View Case <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
