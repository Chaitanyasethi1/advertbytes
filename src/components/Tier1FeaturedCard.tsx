import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import type { CaseStudyTier1 } from '../data/portfolioData';
import { Card3DTilt } from './Card3DTilt';
import { CountUpStat } from './CountUpStat';
import { AbstractArtwork } from './AbstractArtwork';
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
      maxTilt={6}
      className="flex flex-col justify-between p-7 sm:p-9 shadow-sm hover:shadow-2xl transition-all duration-300"
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-[#F0F1F4] pb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#0052FF] bg-[#0052FF]/10 px-2.5 py-1 rounded-md">
              CASE 0{index + 1}
            </span>
            <span className="rounded-full border border-[#E5E7EB] bg-[#F7F8FA] px-3 py-1 text-xs font-semibold text-[#4A4A5A]">
              {caseStudy.categoryTag}
            </span>
          </div>

          {/* Social / Web Links */}
          <div className="flex items-center gap-2">
            {caseStudy.instagram && (
              <a
                href={`https://${caseStudy.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${caseStudy.client} on Instagram`}
                className="rounded-full p-2 text-[#6B7280] transition-colors hover:bg-[#F3F4F6] hover:text-[#0052FF]"
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
                title={`Visit ${caseStudy.client} Website`}
                className="rounded-full p-2 text-[#6B7280] transition-colors hover:bg-[#F3F4F6] hover:text-[#0052FF]"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Abstract Category Visual Texture (No generic stock photos) */}
        <div className="mt-5 mb-6">
          <AbstractArtwork type={caseStudy.visualCueType} />
        </div>

        {/* Client Name + Headline with Accent Underline Reveal */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0C]">
            <span className="accent-underline">{caseStudy.client}</span>
            <span className="ml-2 font-normal text-[#6B7280] text-lg sm:text-xl">
              — {caseStudy.subtitle}
            </span>
          </h3>
        </div>

        {/* Campaign Story */}
        <p className="text-sm leading-relaxed text-[#555666] line-clamp-3 mb-6">
          {caseStudy.story}
        </p>

        {/* Hero Numbers Grid (The Visual Stars of the Card) */}
        <div className="my-6 grid grid-cols-2 gap-4 rounded-xl border border-[#EDEEF2] bg-[#FAFBFD] p-5">
          {caseStudy.stats.map((stat, statIdx) => (
            <div
              key={statIdx}
              className="flex flex-col border-l-2 border-[#0052FF]/30 pl-3 transition-transform duration-300 group-hover:scale-[1.03]"
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
              <span className="mt-1 text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer: Tags & Deep Dive Button */}
      <div className="mt-6 border-t border-[#F0F1F4] pt-5">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {caseStudy.services.map((service, sIdx) => (
            <span
              key={sIdx}
              className="rounded-md border border-[#E5E7EB] bg-white px-2.5 py-1 text-[11px] font-medium text-[#4B5563]"
            >
              {service}
            </span>
          ))}
        </div>

        <button
          onClick={() => onOpenDetails(caseStudy)}
          className="inline-flex w-full items-center justify-between rounded-xl bg-[#F4F6FA] px-4 py-3 text-xs font-bold text-[#0A0A0C] transition-all duration-200 hover:bg-[#0052FF] hover:text-white"
        >
          <span>Explore Strategy & Campaign Breakdown</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </Card3DTilt>
  );
};
