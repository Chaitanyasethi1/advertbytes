import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';
import type { CaseStudyTier1, CaseStudyTier2 } from '../data/portfolioData';
import { InstagramIcon } from './Icons';

interface CaseStudyDetailModalProps {
  selectedItem: CaseStudyTier1 | CaseStudyTier2 | null;
  onClose: () => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  selectedItem,
  onClose,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  if (!selectedItem) return null;

  const isTier1 = 'visualCueType' in selectedItem;
  const tier1Item = isTier1 ? (selectedItem as CaseStudyTier1) : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A0A0C]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-10 shadow-2xl border border-[#E5E7EB] animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full p-2 text-[#8E8E9F] hover:bg-[#F3F4F6] hover:text-[#0A0A0C] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="rounded-full bg-[#0052FF]/10 px-3 py-1 font-mono text-xs font-bold text-[#0052FF]">
            {selectedItem.categoryTag}
          </span>
          <span className="font-mono text-xs text-[#8E8E9F]">•</span>
          <span className="font-mono text-xs text-[#8E8E9F]">Verified Case Study</span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0C]">
          {selectedItem.client}
        </h3>
        {tier1Item?.subtitle && (
          <p className="mt-1 text-lg font-medium text-[#6B7280]">
            {tier1Item.subtitle}
          </p>
        )}

        {/* External Links */}
        <div className="mt-4 flex items-center gap-3">
          {selectedItem.instagram && (
            <a
              href={`https://${selectedItem.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1.5 text-xs font-semibold text-[#374151] hover:border-[#0052FF] hover:text-[#0052FF] transition-colors"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              <span>{selectedItem.instagram}</span>
            </a>
          )}
          {selectedItem.website && (
            <a
              href={`https://${selectedItem.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-1.5 text-xs font-semibold text-[#374151] hover:border-[#0052FF] hover:text-[#0052FF] transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{selectedItem.website}</span>
            </a>
          )}
        </div>

        {/* Hero Numbers Strip */}
        <div className="my-8 rounded-xl border border-[#E5E7EB] bg-[#FAFBFD] p-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B7280]">
            <BarChart2 className="h-4 w-4 text-[#0052FF]" />
            <span>Key Performance Highlights</span>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {selectedItem.stats.map((stat, idx) => (
              <div key={idx} className="border-l-2 border-[#0052FF] pl-3">
                <div className="text-2xl font-black text-[#0A0A0C]">{stat.value}</div>
                <div className="mt-0.5 text-xs font-medium uppercase tracking-wider text-[#6B7280]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative / Challenge & Approach */}
        {tier1Item ? (
          <div className="space-y-6 text-sm sm:text-base leading-relaxed text-[#374151]">
            <div>
              <h5 className="font-bold text-[#0A0A0C] mb-1.5 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#0052FF]" />
                The Campaign Objective & Challenge
              </h5>
              <p className="text-[#555666]">{tier1Item.challenge}</p>
            </div>

            <div>
              <h5 className="font-bold text-[#0A0A0C] mb-1.5 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0052FF]" />
                Our Strategic Approach
              </h5>
              <p className="text-[#555666]">{tier1Item.approach}</p>
            </div>

            <div className="rounded-xl bg-[#F4F6FA] p-5 border border-[#E5E7EB]">
              <h5 className="font-bold text-[#0A0A0C] mb-2">Detailed Campaign Story</h5>
              <p className="text-[#4B5563] text-sm leading-relaxed">{tier1Item.story}</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl bg-[#F4F6FA] p-5 border border-[#E5E7EB]">
            <h5 className="font-bold text-[#0A0A0C] mb-2">Campaign Impact Summary</h5>
            <p className="text-[#4B5563] text-sm leading-relaxed">
              {'summary' in selectedItem ? selectedItem.summary : ''}
            </p>
          </div>
        )}

        {/* Services Deployed */}
        {selectedItem.services && selectedItem.services.length > 0 && (
          <div className="mt-8 border-t border-[#F0F1F4] pt-6">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#8E8E9F] mb-3">
              Services & Capabilities Deployed
            </h5>
            <div className="flex flex-wrap gap-2">
              {selectedItem.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs font-medium text-[#1F2937]"
                >
                  {srv}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
