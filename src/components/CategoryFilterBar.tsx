import React from 'react';
import { CATEGORIES, CategoryFilter, TIER2_CASE_STUDIES } from '../data/portfolioData';

interface CategoryFilterBarProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
}

export const CategoryFilterBar: React.FC<CategoryFilterBarProps> = ({
  activeCategory,
  onCategoryChange,
}) => {
  // Count items per category
  const getCount = (cat: CategoryFilter) => {
    if (cat === 'All') return TIER2_CASE_STUDIES.length;
    return TIER2_CASE_STUDIES.filter((item) => item.categoryTag === cat).length;
  };

  return (
    <div className="sticky top-20 z-40 mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 mb-8">
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar rounded-2xl bg-[#0A0A0C]/80 border border-white/5 backdrop-blur-xl p-2 shadow-2xl">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = getCount(category);
          
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                group relative flex min-w-max items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-300
                ${
                  isActive
                    ? 'bg-white text-black shadow-md'
                    : 'bg-transparent text-[#8E8E9F] hover:bg-white/5 hover:text-white'
                }
              `}
            >
              <span>{category}</span>
              <span 
                className={`
                  flex h-5 items-center justify-center rounded-md px-1.5 text-[10px] font-mono transition-colors
                  ${isActive ? 'bg-black/10 text-black' : 'bg-white/10 text-white group-hover:bg-white/20'}
                `}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
