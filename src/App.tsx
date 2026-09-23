import React, { useState, useMemo, useEffect } from 'react';
import Lenis from 'lenis';

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
  // Setup Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

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
    <div className="relative min-h-screen bg-[#050505] text-[#E5E7EB] selection:bg-[#0052FF] selection:text-white font-sans overflow-x-hidden">
      {/* Subtle Noise Overlay for premium texture */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <Navbar />

      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Difference */}
        <DifferenceSection />

        {/* Section 3: Pain Points */}
        <PainPointsSection />

        {/* Section 4: Service Tabs */}
        <ServiceTabsSection />

        {/* Section 5: Process */}
        <ProcessSection />

        {/* Section 6: Growth Engine */}
        <GrowthEngineSection />

        {/* Section 7: Execution & Tools */}
        <ToolsSection />

        {/* Section 8: Services Grid */}
        <ServicesGridSection />

        {/* Section 9: Results Strip */}
        <ResultsStripSection />

        {/* Section 10: PORTFOLIO */}
        <section id="portfolio-grid" className="bg-[#050505] py-24 sm:py-32">
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

        {/* Section 11: Clients */}
        <ClientLogoStripSection />

        {/* Section 12: Comparison */}
        <ComparisonSection />

        {/* Section 13: Testimonials */}
        <TestimonialsSection />

        {/* Section 14: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 15: Footer */}
      <Footer />

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyDetailModal
          caseStudy={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
}
