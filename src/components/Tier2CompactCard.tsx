import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { CaseStudyTier2 } from '../data/portfolioData';
import { Card3DTilt } from './Card3DTilt';
import { CountUpStat } from './CountUpStat';
import { InstagramIcon } from './Icons';

interface Tier2CompactCardProps {
  caseStudy: CaseStudyTier2;
  onOpenDetails: (caseStudy: CaseStudyTier2) => void;
}

export const Tier2CompactCard: React.FC<Tier2CompactCardProps> = ({
  caseStudy,
  onOpenDetails,
}) => {
  return (
    <Card3DTilt
      maxTilt={3} // Spec: ±3° for Tier 2 compact cards
      className="flex flex-col justify-between p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => onOpenDetails(caseStudy)}
    >
      <div>
        {/* Top Header: Client & Category Badge */}
        <div className="flex items-start justify-between gap-3 border-b border-[#F0F1F4] pb-4">
          <div>
            <div className="mb-1.5 inline-block rounded-md border border-[#0052FF]/30 bg-[#0052FF]/5 px-2.5 py-0.5 text-[10px] font-semibold text-[#0052FF]">
              {caseStudy.categoryTag}
            </div>
            <h4 className="text-xl font-bold text-[#0A0A0C]">
              <span className="accent-underline">{caseStudy.client}</span>
            </h4>
          </div>

          {/* Social / External Links */}
          <div className="flex items-center gap-1.5">
            {caseStudy.instagram && (
              <a
                href={`https://${caseStudy.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${caseStudy.client} on Instagram`}
                className="rounded-full p-1.5 text-[#8E8E9F] transition-colors hover:bg-[#F3F4F6] hover:text-[#0052FF]"
                onClick={(e) => e.stopPropagation()}
              >
                <InstagramIcon className="h-3.5 w-3.5" />
              </a>
            )}
            {caseStudy.website && (
              <a
                href={`https://${caseStudy.website}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${caseStudy.client} Website`}
                className="rounded-full p-1.5 text-[#8E8E9F] transition-colors hover:bg-[#F3F4F6] hover:text-[#0052FF]"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Hero Numbers (Scaled ~60% of Tier 1 hero, still bold & hero visual element) */}
        <div className="my-5 grid grid-cols-2 gap-3 rounded-lg border border-[#F0F1F4] bg-[#FAFBFD] p-3.5">
          {caseStudy.stats.slice(0, 2).map((stat, statIdx) => (
            <div
              key={statIdx}
              className="flex flex-col border-l-2 border-[#0052FF]/30 pl-2.5 transition-transform duration-300 group-hover:scale-[1.03]"
            >
              <span className="text-xl font-extrabold tracking-tight text-[#0A0A0C]">
                <CountUpStat
                  value={stat.value}
                  numericTarget={stat.numericTarget}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[#6B7280]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Extra stats line if available */}
        {caseStudy.stats.length > 2 && (
          <div className="mb-4 flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#6B7280]">
            {caseStudy.stats.slice(2).map((extraStat, idx) => (
              <span key={idx} className="rounded bg-[#F4F5F7] px-2 py-0.5 font-medium text-[#374151]">
                <strong className="text-[#0A0A0C]">{extraStat.value}</strong> {extraStat.label}
              </span>
            ))}
          </div>
        )}

        {/* One-Line Result Summary */}
        <p className="text-xs leading-relaxed text-[#555666] line-clamp-2">
          {caseStudy.summary}
        </p>
      </div>

      {/* Card Footer: Subtle prompt to explore details */}
      <div className="mt-5 flex items-center justify-between border-t border-[#F0F1F4] pt-3.5 text-[11px] font-semibold text-[#8E8E9F] group-hover:text-[#0052FF] transition-colors">
        <span>Verified Performance Data</span>
        <span className="font-mono text-xs">→</span>
      </div>
    </Card3DTilt>
  );
};
