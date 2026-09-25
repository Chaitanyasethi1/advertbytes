import { useState, useMemo } from 'react';

// Core Components
import { Navbar } from './components/Navbar';
import { SectionHeader } from './components/SectionHeader';
import { Tier1FeaturedCard } from './components/Tier1FeaturedCard';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { Tier2CompactCard } from './components/Tier2CompactCard';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';

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
} from './components/HomeSections1';

import { 
  ServicesGridSection, 
  ResultsStripSection, 
  ClientLogoStripSection, 
  ComparisonSection, 
  TestimonialsSection, 
  FinalCTA, 
  Footer 
} from './components/HomeSections2';

import { TIER1_CASE_STUDIES, TIER2_CASE_STUDIES } from './data/portfolioData';
import type { CategoryFilter, CaseStudyTier1, CaseStudyTier2 } from './data/portfolioData';

export default function App() {

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
    <div className="relative min-h-screen bg-[#F8F9FA] bg-grid-pattern text-[#0A0A0C] selection:bg-black selection:text-white font-sans overflow-x-hidden">
      {/* Subtle Noise Overlay for premium texture - Light Mode */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Verified Agency Performance Metrics */}
        <StatsStrip />

        {/* Section 3: Real Client Brand Marquee */}
        <ClientLogoStripSection />

        {/* Section 4: Difference */}
        <DifferenceSection />

        {/* Section 3: PORTFOLIO (Work That Speaks) */}
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

        {/* Section 4: Pain Points */}
        <PainPointsSection />

        {/* Section 5: Service Tabs */}
        <ServiceTabsSection />

        {/* Section 6: Process */}
        <ProcessSection />

        {/* Section 7: Growth Engine */}
        <GrowthEngineSection />

        {/* Section 8: Execution & Tools */}
        <ToolsSection />

        {/* Section 9: Services Grid */}
        <ServicesGridSection />

        {/* Section 10: Results Strip */}
        <ResultsStripSection />


        {/* Section 11: Testimonials */}
        <TestimonialsSection />

        {/* Section 12: FAQ Comparison */}
        <ComparisonSection />

        {/* Section 14: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 15: Footer with Integrated Audience Engine & Copyright */}
      <Footer />

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyDetailModal
          selectedItem={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
}
