import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3DIntro } from './components/Hero3DIntro';
import { NumbersStrip } from './components/NumbersStrip';
import { ThreeBackground } from './components/ThreeBackground';
import { SectionHeader } from './components/SectionHeader';
import { Tier1FeaturedCard } from './components/Tier1FeaturedCard';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { Tier2CompactCard } from './components/Tier2CompactCard';
import { ClientBrandStrip } from './components/ClientBrandStrip';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';
import { FooterSummary } from './components/FooterSummary';
import {
  TIER1_CASE_STUDIES,
  TIER2_CASE_STUDIES,
} from './data/portfolioData';
import type {
  CategoryFilter,
  CaseStudyTier1,
  CaseStudyTier2,
} from './data/portfolioData';

export function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyTier1 | CaseStudyTier2 | null>(
    null
  );

  // Filter Tier 2 case studies by selected category
  const filteredTier2 = useMemo(() => {
    if (activeCategory === 'All') return TIER2_CASE_STUDIES;
    return TIER2_CASE_STUDIES.filter((item) => item.categoryTag === activeCategory);
  }, [activeCategory]);

  const handleScrollToGrid = () => {
    const el = document.getElementById('results-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#E5E7EB] selection:bg-[#0052FF] selection:text-white font-sans overflow-x-hidden">
      {/* Subtle Noise Overlay for texture */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Agency Navigation Header */}
      <Navbar />

      {/* Stunning 3D Intro Section */}
      <Hero3DIntro />

      {/* Pre-Portfolio Metric Strip ("Numbers Tell a Better Story") */}
      <NumbersStrip />

      {/* MAIN PORTFOLIO SECTION */}
      <section id="portfolio" className="relative pt-12 pb-24 bg-grid-pattern">
        {/* Subtle Ambient 3D Three.js Wireframe Canvas */}
        <ThreeBackground />

        {/* Section Header */}
        <SectionHeader onExploreClick={handleScrollToGrid} />

        {/* TIER 1: FEATURED CASE STUDIES (3 Large Hero 3D Tilt Cards) */}
        <div id="tier1" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0052FF]" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#4A4A5A]">
                Tier 1 // Featured Flagship Campaigns
              </h3>
            </div>
            <span className="font-mono text-xs text-[#8E8E9F]">
              3 Featured Brands
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TIER1_CASE_STUDIES.map((caseStudy, index) => (
              <Tier1FeaturedCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                index={index}
                onOpenDetails={setSelectedCaseStudy}
              />
            ))}
          </div>
        </div>

        {/* TIER 2: RESULTS GRID (15 Filterable Compact Cards) */}
        <div id="results-grid" className="relative scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E7EB] pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0052FF]">
                  Tier 2 // Proven Results Across Industries
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0A0A0C]">
                  Full Campaign Results Archive
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  Filter across ecommerce, high-ticket lead generation, health, education and interior design.
                </p>
              </div>

              <div className="font-mono text-xs text-[#6B7280]">
                Showing <strong className="text-[#0A0A0C]">{filteredTier2.length}</strong> of{' '}
                <strong>{TIER2_CASE_STUDIES.length}</strong> verified cases
              </div>
            </div>
          </div>

          {/* Sticky Category Filter Bar */}
          <CategoryFilterBar
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Compact Cards Grid (3 cols desktop, 2 cols tablet, 1 col mobile) */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
              {filteredTier2.map((caseStudy) => (
                <Tier2CompactCard
                  key={caseStudy.id}
                  caseStudy={caseStudy}
                  onOpenDetails={setSelectedCaseStudy}
                />
              ))}
            </div>

            {filteredTier2.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-base font-medium text-[#6B7280]">
                  No case studies found for this category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CLIENTS STRIP: Brands We've Worked With */}
        <div id="clients">
          <ClientBrandStrip />
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <CaseStudyDetailModal
        selectedItem={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Footer */}
      <FooterSummary />
    </div>
  );
}

export default App;
