import { useState, useMemo } from 'react';

// Core Components
import { SectionHeader } from '../components/SectionHeader';
import { Tier1FeaturedCard } from '../components/Tier1FeaturedCard';
import { CategoryFilterBar } from '../components/CategoryFilterBar';
import { Tier2CompactCard } from '../components/Tier2CompactCard';
import { CaseStudyDetailModal } from '../components/CaseStudyDetailModal';

// Homepage Sections
import { 
  HeroSection, 
  StatsStrip,
  DifferenceSection, 
  PainPointsSection, 
  ServiceTabsSection, 
  ProcessSection, 
  GrowthEngineSection, 
  ToolsSection 
} from '../components/HomeSections1';

import { 
  ServicesGridSection, 
  ResultsStripSection, 
  ClientLogoStripSection, 
  ComparisonSection, 
  TestimonialsSection, 
  FinalCTA 
} from '../components/HomeSections2';

import { TIER1_CASE_STUDIES, TIER2_CASE_STUDIES } from '../data/portfolioData';
import type { CategoryFilter, CaseStudyTier1, CaseStudyTier2 } from '../data/portfolioData';

export function Home() {

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyTier1 | CaseStudyTier2 | null>(null);

  const filteredTier2 = useMemo(() => {
    if (activeCategory === 'All') return TIER2_CASE_STUDIES;
    return TIER2_CASE_STUDIES.filter((item) => item.categoryTag === activeCategory);
  }, [activeCategory]);

  const handleScrollToGrid = () => {
    const el = document.getElementById('portfolio-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <HeroSection />
      <StatsStrip />
      <ClientLogoStripSection />
      <DifferenceSection />

      <section id="portfolio" className="bg-[#FBFBFB] py-24 sm:py-32">
        <SectionHeader onExploreClick={handleScrollToGrid} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid gap-8 lg:grid-cols-3 mb-24">
            {TIER1_CASE_STUDIES.map((study, idx) => (
              <Tier1FeaturedCard key={study.id} caseStudy={study} index={idx} onOpenDetails={setSelectedCaseStudy} />
            ))}
          </div>
        </div>

        <CategoryFilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTier2.map((study) => (
              <Tier2CompactCard key={study.id} caseStudy={study} onOpenDetails={setSelectedCaseStudy} />
            ))}
          </div>
        </div>
      </section>

      <PainPointsSection />
      <ServiceTabsSection />
      <ProcessSection />
      <GrowthEngineSection />
      <ToolsSection />
      <ServicesGridSection />
      <ResultsStripSection />
      <TestimonialsSection />
      <ComparisonSection />
      <FinalCTA />

      {selectedCaseStudy && (
        <CaseStudyDetailModal
          selectedItem={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </main>
  );
}
