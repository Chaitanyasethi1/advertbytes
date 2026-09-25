import { useState, useEffect } from 'react';
import { ArrowRight, Frown, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { CountUpStat } from './CountUpStat';
import { cn } from '../utils/cn';

const LiveGrowthShowcase = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'studio' | 'showcase'>('dashboard');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        if (prev === 'dashboard') return 'studio';
        if (prev === 'studio') return 'showcase';
        return 'dashboard';
      });
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const views = {
    dashboard: {
      title: 'Real-Time ROAS Dashboard',
      subtitle: 'Live conversion & ad spend analytics',
      tag: 'Meta & Google Ads Engine',
      image: '/images/hero-dashboard.jpg',
      badge: '+420% ROAS Achieved',
      metric: '₹12Cr+ Managed'
    },
    studio: {
      title: 'Performance Creative Studio',
      subtitle: 'High-converting UGC & video hooks',
      tag: 'Creative Strategy',
      image: '/images/creative-studio.jpg',
      badge: '3.8x CTR Lift',
      metric: '24h Iteration Cycle'
    },
    showcase: {
      title: 'Multi-Device Scaling',
      subtitle: 'Full-funnel D2C & Lead Generation',
      tag: 'Omnichannel Growth',
      image: '/images/client-showcase.jpg',
      badge: '11.78x Peak Return',
      metric: '800+ B2B Leads'
    }
  };

  const current = views[activeTab];

  return (
    <div className="relative w-full max-w-[560px] bg-white rounded-[2.2rem] p-4 sm:p-6 flex flex-col shadow-[0_25px_70px_-15px_rgba(0,0,0,0.08)] border border-gray-100 transition-all">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100/80 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-gray-300" />
            <span className="w-3 h-3 rounded-full bg-gray-400" />
            <span className="w-3 h-3 rounded-full bg-gray-600" />
          </div>
          <span className="ml-2 text-[11px] font-bold text-gray-700 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            Live Client Engine
          </span>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1 bg-gray-100/80 p-1 rounded-full text-[10px] font-bold">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={cn(
              "px-2.5 py-1 rounded-full transition-all",
              activeTab === 'dashboard' ? "bg-black text-white shadow-sm" : "text-gray-500 hover:text-black"
            )}
          >
            ROAS
          </button>
          <button
            onClick={() => setActiveTab('studio')}
            className={cn(
              "px-2.5 py-1 rounded-full transition-all",
              activeTab === 'studio' ? "bg-black text-white shadow-sm" : "text-gray-500 hover:text-black"
            )}
          >
            Creative
          </button>
          <button
            onClick={() => setActiveTab('showcase')}
            className={cn(
              "px-2.5 py-1 rounded-full transition-all",
              activeTab === 'showcase' ? "bg-black text-white shadow-sm" : "text-gray-500 hover:text-black"
            )}
          >
            Scale
          </button>
        </div>
      </div>

      {/* Main Image Stage with Dynamic Overlay Floating Badges */}
      <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-900 group shadow-inner">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

        {/* Floating Top Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black text-gray-900 shadow-md">
            <Sparkles className="w-3 h-3 text-black" />
            {current.tag}
          </div>
        </div>

        {/* Floating Bottom Metric Badge */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2">
          <div className="bg-[#0A0A0C]/90 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-white shadow-lg">
            <div className="text-[10px] text-gray-400 font-semibold">{current.title}</div>
            <div className="text-xs sm:text-sm font-black text-white flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-gray-400" />
              {current.badge}
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl text-right shadow-lg shrink-0">
            <div className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Benchmark</div>
            <div className="text-xs sm:text-sm font-black text-gray-900">{current.metric}</div>
          </div>
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-black" />
          <span className="text-gray-600 font-medium">{current.subtitle}</span>
        </div>
        <a href="#portfolio" className="font-bold text-black hover:underline flex items-center gap-1 text-[11px] transition-colors">
          View 18+ Case Studies <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] pt-28 sm:pt-34 pb-16 overflow-hidden flex items-start bg-[#F8F9FA] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          <div className="flex flex-col items-start pt-0">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0A0A0C]">
                PERFORMANCE MARKETING & REVENUE PARTNER
              </span>
            </div>
            
            {/* Primary Headline */}
            <h1 className="text-[3.4rem] leading-[1.05] sm:text-[4.4rem] lg:text-[4.7rem] font-black text-[#0A0A0C] tracking-tighter mb-6 max-w-2xl">
              Stop Burning Ad Spend.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-black via-neutral-800 to-neutral-600">
                Scale With Predictable ROAS.
              </span>
            </h1>

            {/* Subtitle with Real Metrics */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl font-medium leading-relaxed">
              We don't sell vanity impressions or empty retainers. AdvertBytes builds full-funnel revenue engines — combining precision <strong className="text-[#0A0A0C]">Meta & Google Ads</strong>, scroll-stopping creative, and high-ticket B2B pipelines backed by <strong className="text-[#0A0A0C]">₹12Cr+ in managed ad spend</strong> and up to <strong className="text-[#0A0A0C]">11.78x ROAS</strong>.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <a 
                href="tel:7827778719" 
                className="w-full sm:w-auto group relative flex items-center justify-center gap-2 rounded-full bg-[#0A0A0C] px-8 py-4 text-sm font-bold text-white hover:bg-black transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-bold text-[#0A0A0C] hover:bg-gray-50 transition-colors shadow-sm"
              >
                <span>Explore 18 Case Studies</span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0A0A0C] transition-colors" />
              </a>
            </div>

            {/* Social Proof Avatar Stack with Real Founder Portraits */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-gray-200/80 w-full sm:w-auto">
              <div className="flex -space-x-2.5">
                <img 
                  src="/images/founder-priya.jpg" 
                  alt="Priya R. - CMO" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <img 
                  src="/images/founder-amit.jpg" 
                  alt="Amit S. - Founder" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <img 
                  src="/images/founder-sonal.jpg" 
                  alt="Sonal T. - Brand Director" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <img 
                  src="/images/founder-rohit.jpg" 
                  alt="Rohit P. - Executive" 
                  className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" 
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-black text-xs font-black">
                  ★ ★ ★ ★ ★ <span className="text-gray-500 font-medium text-[10px] ml-1">4.9/5 Rating</span>
                </div>
                <span className="text-[12px] font-medium text-gray-600">
                  Trusted by <strong className="font-bold text-[#0A0A0C]">50+ high-growth brands</strong> to own their customer acquisition
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Dashboard Showcase */}
          <div className="relative w-full flex items-center justify-center lg:justify-end">
            <LiveGrowthShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export const StatsStrip = () => {
  const stats = [
    { value: 12, prefix: '₹', suffix: 'Cr+', label: 'Ad spend profitably scaled', decimals: 0 },
    { value: 11.78, prefix: '', suffix: 'x', label: 'Peak client campaign ROAS', decimals: 2 },
    { value: 150, prefix: '', suffix: 'K+', label: 'Verified commercial leads & orders', decimals: 0 },
    { value: 98.4, prefix: '', suffix: '%', label: 'Partner retention & renewal rate', decimals: 1 },
  ];

  return (
    <div className="relative z-20 -mt-14 w-full px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-soft-lg border border-gray-100 p-8 sm:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i > 0 && i < 2 ? 'pt-8 lg:pt-0' : i >= 2 ? 'pt-8 lg:pt-0' : ''}`}>
              <div className="text-4xl sm:text-5xl font-black mb-2 tracking-tighter text-[#0A0A0C]">
                <CountUpStat value={stat.value.toString()} numericTarget={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-xs font-semibold text-gray-500 max-w-[170px] leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const DifferenceSection = () => {
  const cards = [
    { 
      title: 'Radical Accountability', 
      num: '01', 
      desc: 'Most agencies hide behind vanity metrics like impressions and clicks. We sit on your side of the table, measuring success exclusively by pipeline revenue, blended ROAS, and customer acquisition cost.' 
    },
    { 
      title: 'Full-Funnel Creative Engine', 
      num: '02', 
      desc: 'Media buying without high-converting creative is dead. We conceptualize, script, edit, and iterate scroll-stopping UGC, 3D product hooks, and direct-response angles that slash your CAC.' 
    },
    { 
      title: 'Agile In-House Execution', 
      num: '03', 
      desc: 'No endless handoffs to junior coordinators. You work directly with veteran media buyers and growth strategists who manage campaigns daily, test rapidly, and treat your ad budget like our own capital.' 
    }
  ];

  return (
    <section id="about" className="bg-white py-32 overflow-hidden relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-[#0A0A0C] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">THE ADVERTBYTES ADVANTAGE</div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#0A0A0C] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Traditional agencies bill retainers.<br />
            We engineer <span className="underline decoration-black/30 underline-offset-8">measurable growth.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-10 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300 group hover:-translate-y-1">
              <div className="text-[#0A0A0C] text-5xl font-black mb-6 tracking-tighter opacity-90">{card.num}</div>
              <h3 className="text-2xl font-bold text-[#0A0A0C] mb-4">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PainPointsSection = () => {
  const points = [
    { 
      title: 'Skyrocketing CAC & Unpredictable ROAS', 
      desc: 'Pouring thousands into Meta and Google with diminishing returns, erratic day-to-day sales, and zero visibility into true blended profitability.' 
    },
    { 
      title: 'Creative Fatigue & Ignored Ads', 
      desc: 'Running the same tired product photos that prospective buyers scroll right past, leaving your ad frequency high and your click-through rates depressed.' 
    },
    { 
      title: 'Agencies That Disappear Post-Onboarding', 
      desc: 'Trapped in rigid retainers with junior account managers sending automated monthly PDFs full of vanity impressions instead of actual closed revenue.' 
    },
    { 
      title: 'Unqualified Leads Wasting Your Sales Team', 
      desc: 'Sales reps spending dozens of hours chasing bogus form fills, invalid phone numbers, and low-intent price shoppers who never close.' 
    }
  ];

  return (
    <section className="bg-[#F8F9FA] py-32 relative overflow-hidden bg-grid-pattern border-y border-gray-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">SOUND FAMILIAR?</div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#0A0A0C] tracking-tight leading-[1.1] max-w-3xl mx-auto">
            You don't have a marketing budget problem.<br />
            You have a <span className="underline decoration-black/30 underline-offset-8">conversion & execution problem.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {points.map((point, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 flex items-start gap-6 shadow-soft border border-gray-200/80">
              <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0">
                <Frown className="h-5 w-5 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A0A0C] mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceTabsSection = () => {
  const [activeTab, setActiveTab] = useState('Ecommerce');
  const tabs = [
    { id: 'Ecommerce', label: 'D2C & Ecommerce' },
    { id: 'B2B', label: 'High-Ticket B2B' },
    { id: 'Creative', label: 'Performance Creative' }
  ];

  const content = {
    'Ecommerce': {
      badge: 'Proven E-Commerce Engine',
      title: 'Full-funnel customer acquisition from first click to repeat order.',
      desc: 'We transform Shopify and omnichannel brands into high-velocity revenue machines. Leveraging Meta Advantage+, Google Performance Max, dynamic catalog retargeting, and aggressive creative testing, we consistently deliver scalable, profitable ROAS.',
      tags: ['Meta Advantage+ Shopping', 'Google Performance Max', 'Shopify AOV & CRO Lift', 'UGC Video Ads', 'Klaviyo Email Retention'],
      stats: [
        { v: '11.78x', l: 'Peak Campaign ROAS (Gulab Wala)' },
        { v: '9.31x', l: 'Ethnic Wear ROAS (Greenways)' },
        { v: '₹13L+', l: 'Single Month Sales Scale' }
      ]
    },
    'B2B': {
      badge: 'Commercial Lead Pipeline',
      title: 'High-intent B2B enquiries with decision-makers who actually buy.',
      desc: 'Built for manufacturers, luxury interior suppliers, automotive brands, and enterprise service firms. We eliminate tire-kickers with qualified lead magnets, instant Meta forms, conversational DM funnels, and precision Google Search campaigns.',
      tags: ['High-Intent Meta Forms', 'Instagram DM Inbound Funnels', 'Google Search Commercial Intent', 'Automated CRM & WhatsApp Sync'],
      stats: [
        { v: '800+', l: 'Architect & B2B Leads (Surface)' },
        { v: '₹77', l: 'Cost Per Qualified Lead (Detailing Devils)' },
        { v: '5.5%', l: 'Lead to Customer Conversion' }
      ]
    },
    'Creative': {
      badge: 'Direct-Response Studio',
      title: 'Scroll-stopping video hooks and visuals engineered for algorithms.',
      desc: 'In modern algorithmic ad buying, creative IS the targeting. Our in-house creative studio produces high-converting UGC videos, split-tested hooks, 3D product visualizations, and high-impact carousel ads designed to lower your CAC and prevent ad fatigue.',
      tags: ['Direct-Response UGC', '3D Motion & Product Hooks', 'A/B Creative Iteration', 'High-Converting Landing Pages'],
      stats: [
        { v: '3.8x', l: 'Average Click-Through Rate Lift' },
        { v: '-42%', l: 'Reduction in Creative Fatigue' },
        { v: '24-48h', l: 'Rapid Creative Iteration Cycle' }
      ]
    }
  };

  const active = content[activeTab as keyof typeof content];

  return (
    <section id="services" className="bg-white py-32 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        <div className="bg-[#0A0A0C] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8 shadow-sm">
          OUR CORE SPECIALIZATIONS
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-900 font-bold text-center max-w-2xl mb-12">
          Tailored growth systems engineered specifically for your commercial model.
        </p>

        {/* Tab Controls */}
        <div className="bg-gray-100 p-1.5 rounded-full flex gap-1 mb-12 shadow-inner border border-gray-200 backdrop-blur-md relative max-w-lg w-full justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative z-10 flex-1 px-4 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-colors duration-300 text-center",
                activeTab === tab.id ? "text-white" : "text-gray-600 hover:text-black"
              )}
            >
              {tab.label}
            </button>
          ))}
          <div 
            className="absolute top-1.5 bottom-1.5 rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#0A0A0C]"
            style={{ 
              width: 'calc(33.333% - 4px)',
              left: activeTab === 'Ecommerce' ? '4px' : activeTab === 'B2B' ? 'calc(33.333% + 2px)' : 'calc(66.666% - 0px)'
            }} 
          />
        </div>

        {/* Dynamic Card Content */}
        <div className="w-full bg-white rounded-[2rem] border border-gray-200 shadow-soft-lg p-8 sm:p-14 flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden">
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-gray-100 text-gray-900 border border-gray-200">
                {active.badge}
              </span>
            </div>
            
            <h4 className="text-2xl sm:text-3xl font-black text-[#0A0A0C] mb-4 leading-tight">{active.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">{active.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold text-gray-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-black" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 relative z-10 justify-center">
            {active.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-soft transition-shadow">
                <div className="text-3xl sm:text-4xl font-black tracking-tighter text-[#0A0A0C]">{stat.v}</div>
                <div className="text-xs font-semibold text-gray-600 leading-tight flex-1">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export const ProcessSection = () => {
  const steps = [
    { 
      num: '01', 
      eyebrow: 'Phase 1 • Deep Audit', 
      title: 'Analyze & Architect', 
      desc: 'We conduct a comprehensive audit of your ad accounts, pixel data, unit economics, CAC, and competitor creative angles to pinpoint your exact revenue bottlenecks.', 
      feat: 'Full Account & Funnel Audit'
    },
    { 
      num: '02', 
      eyebrow: 'Phase 2 • Creative Engine', 
      title: 'Produce & Test', 
      desc: 'Our studio develops high-hook video creatives, direct-response copy, and high-converting landing pages tailored to your highest-value buyer personas.', 
      feat: 'High-Converting Creative Suite'
    },
    { 
      num: '03', 
      eyebrow: 'Phase 3 • Media Buying', 
      title: 'Launch & Optimize', 
      desc: 'We deploy systematic ad campaigns across Meta, Google Ads, and high-ticket networks using bid-cap controls, dynamic retargeting, and rigorous day-to-day pacing.', 
      feat: 'Precision Campaign Execution'
    },
    { 
      num: '04', 
      eyebrow: 'Phase 4 • Growth Loop', 
      title: 'Scale & Compound', 
      desc: 'We aggressively pump budget into verified winning ad sets, eliminate non-performers, and optimize post-purchase retention for compounding profitability.', 
      feat: 'Scalable Compounding ROAS'
    }
  ];

  return (
    <section className="bg-[#F8F9FA] py-32 relative overflow-hidden bg-grid-pattern border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="text-gray-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">OUR PROVEN OPERATING SYSTEM</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0C] tracking-tight leading-tight max-w-3xl mx-auto">
            How we take you from unpredictable ad spend to a <span className="underline decoration-black/30 underline-offset-8">predictable growth machine.</span>
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-10 left-0 right-0 h-0.5 hidden lg:block bg-gray-300 rounded-full" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-black mb-8 shadow-md z-10 bg-[#0A0A0C] border-2 border-white"
                >
                  {step.num}
                </div>
                
                <div 
                  className="px-3 py-1 rounded-full border border-gray-200 text-[10px] font-bold uppercase tracking-widest mb-4 bg-white text-gray-900 shadow-sm"
                >
                  {step.eyebrow}
                </div>

                <h3 className="text-2xl font-black text-[#0A0A0C] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{step.desc}</p>

                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center bg-black/10">
                    <CheckCircle2 className="w-3 h-3 text-black" />
                  </div>
                  <span className="text-xs font-bold text-black">{step.feat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const GrowthEngineSection = () => {
  return null;
};

export const ToolsSection = () => {
  return null;
};
