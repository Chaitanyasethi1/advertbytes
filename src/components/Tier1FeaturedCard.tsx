import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { CaseStudyTier1 } from '../data/portfolioData';
import { Card3DTilt } from './Card3DTilt';
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
    <Card3DTilt
      maxTilt={4}
      className="flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
    >
      {/* Top Image Banner */}
      <div className="relative h-48 w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${caseStudy.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-white bg-[#0052FF] px-2 py-0.5 rounded-sm uppercase tracking-wider">
                CASE 0{index + 1}
              </span>
              <span className="rounded-sm bg-white/20 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white">
                {caseStudy.categoryTag}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {caseStudy.client}
            </h3>
            <p className="text-sm text-gray-300 font-medium">{caseStudy.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        {/* Social / Web Links */}
        <div className="flex items-center gap-2 mb-6 justify-end -mt-12 relative z-10">
          {caseStudy.instagram && (
            <a
              href={`https://${caseStudy.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2.5 text-[#0A0A0C] shadow-md transition-colors hover:bg-[#0052FF] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          )}
          {caseStudy.website && (
            <a
              href={`https://${caseStudy.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white p-2.5 text-[#0A0A0C] shadow-md transition-colors hover:bg-[#0052FF] hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Campaign Story */}
        <p className="text-sm leading-relaxed text-[#4A4A5A] line-clamp-3 mb-6">
          {caseStudy.story}
        </p>

        {/* Hero Numbers Grid */}
        <div className="my-2 grid grid-cols-2 gap-4 rounded-xl border border-[#EDEEF2] bg-[#FAFBFD] p-5">
          {caseStudy.stats.map((stat, statIdx) => (
            <div
              key={statIdx}
              className="flex flex-col border-l-2 border-[#0052FF]/40 pl-3 transition-transform duration-300 group-hover:scale-[1.02]"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0A0A0C]">
                <CountUpStat
                  value={stat.value}
                  numericTarget={stat.numericTarget}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#6B7280]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Card Footer: Tags & Deep Dive Button */}
        <div className="mt-6 border-t border-[#F0F1F4] pt-5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {caseStudy.services.map((service, sIdx) => (
              <span
                key={sIdx}
                className="rounded-md border border-[#E5E7EB] bg-white px-2 py-1 text-[10px] font-semibold text-[#4B5563]"
              >
                {service}
              </span>
            ))}
          </div>

          <button
            onClick={() => onOpenDetails(caseStudy)}
            className="inline-flex w-full items-center justify-between rounded-xl bg-[#0A0A0C] px-4 py-3.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#0052FF]"
          >
            <span>Explore Campaign Details</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Card3DTilt>
  );
};
