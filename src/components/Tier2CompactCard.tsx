import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { CaseStudyTier2 } from '../data/portfolioData';
import { CountUpStat } from './CountUpStat';
import { InstagramIcon } from './Icons';
import { FlipCard } from './FlipCard';

interface Tier2CompactCardProps {
  caseStudy: CaseStudyTier2;
  onOpenDetails: (caseStudy: CaseStudyTier2) => void;
}

export const Tier2CompactCard: React.FC<Tier2CompactCardProps> = ({
  caseStudy,
  onOpenDetails,
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const frontContent = (
    <div className="flex h-[320px] flex-col relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${caseStudy.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex justify-between items-start">
          <div className="inline-block rounded-md border border-white/20 bg-white/10 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white">
            {caseStudy.categoryTag}
          </div>
          
          <div className="flex items-center gap-2">
            {caseStudy.instagram && (
              <a href={`https://${caseStudy.instagram}`} target="_blank" rel="noreferrer" onClick={handleLinkClick} className="text-white/80 hover:text-white bg-black/20 p-1.5 rounded-full backdrop-blur-md">
                <InstagramIcon className="h-4 w-4" />
              </a>
            )}
            {caseStudy.website && (
              <a href={`https://${caseStudy.website}`} target="_blank" rel="noreferrer" onClick={handleLinkClick} className="text-white/80 hover:text-white bg-black/20 p-1.5 rounded-full backdrop-blur-md">
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-bold text-white mb-2">{caseStudy.client}</h4>
          <p className="text-sm text-gray-300 font-medium">{caseStudy.highlightStat}</p>
        </div>
      </div>
    </div>
  );

  const backContent = (
    <div className="flex h-[320px] flex-col justify-between p-6 bg-[#0A0A0C]">
      <div>
        <h4 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">Results</h4>
        <div className="grid grid-cols-2 gap-4">
          {caseStudy.stats.slice(0, 4).map((stat, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-[#0052FF]/60 pl-2">
              <span className="text-lg font-extrabold tracking-tight text-white">
                <CountUpStat
                  value={stat.value}
                  numericTarget={stat.numericTarget}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wider text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs leading-relaxed text-gray-400 line-clamp-3 mb-4">
          {caseStudy.summary}
        </p>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] font-semibold text-[#0052FF]">
          <span>View Deep Dive</span>
          <span className="font-mono text-xs text-white">→</span>
        </div>
      </div>
    </div>
  );

  return (
    <FlipCard
      frontContent={frontContent}
      backContent={backContent}
      onClick={() => onOpenDetails(caseStudy)}
      className="h-[320px]"
    />
  );
};
