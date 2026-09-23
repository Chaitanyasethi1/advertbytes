import React from 'react';
import { CATEGORIES, TIER2_CASE_STUDIES } from '../data/portfolioData';
import type { CategoryFilter } from '../data/portfolioData';

interface CategoryFilterBarProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  // Compute counts per category
  const getCount = (cat: CategoryFilter) => {
    if (cat === 'All') return TIER2_CASE_STUDIES.length;
    return TIER2_CASE_STUDIES.filter((item) => item.categoryTag === cat).length;
  };

  return (
    <div className="sticky top-4 z-30 mb-10 w-full sm:static lg:sticky">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white/90 p-2.5 shadow-sm backdrop-blur-md">
          <span className="hidden sm:inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#8E8E9F]">
            Filter By:
          </span>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count = getCount(category);

              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`group relative flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0A0A0C] text-white shadow-md'
                      : 'bg-[#F7F8FA] text-[#4A4A5A] hover:bg-[#EEF1F6] hover:text-[#0A0A0C]'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                      isActive
                        ? 'bg-[#0052FF] text-white'
                        : 'bg-[#E5E7EB] text-[#6B7280] group-hover:bg-[#D1D5DB]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
