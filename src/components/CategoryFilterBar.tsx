import React from 'react';
import { CATEGORIES, TIER2_CASE_STUDIES } from '../data/portfolioData';
import type { CategoryFilter } from '../data/portfolioData';

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
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar rounded-2xl bg-white/80 border border-gray-200 backdrop-blur-xl p-2 shadow-sm">
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
                    ? 'bg-[#0A0A0C] text-white shadow-md'
                    : 'bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <span>{category}</span>
              <span 
                className={`
                  flex h-5 items-center justify-center rounded-md px-1.5 text-[10px] font-mono transition-colors
                  ${isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'}
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
