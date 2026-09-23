import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Frown, CheckCircle2 } from 'lucide-react';
import { CountUpStat } from './CountUpStat';
import { cn } from '../utils/cn';

export const HeroSection = () => {
  

  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 overflow-hidden flex items-center bg-[#F8F9FA] bg-grid-pattern">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#FFEDD5] rounded-full blur-[120px] opacity-60 mix-blend-multiply -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D1FAE5] rounded-full blur-[120px] opacity-60 mix-blend-multiply translate-x-1/3 -translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start pt-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0A0A0C]">
                SEO • AEO • GEO • PERFORM
              </span>
            </div>
            
            <h1 className="text-[4rem] leading-[1.05] sm:text-[5rem] lg:text-[5.5rem] font-black text-[#0A0A0C] tracking-tighter mb-8 max-w-2xl">
              We don't take clients.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] via-[#00D084] to-[#00D084]">
                We take partners.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-xl font-medium leading-relaxed">
              We own your pain as our own and run an AI-powered growth engine — filtering leads, outreach, content and ads — that turns attention into a predictable <span className="font-bold text-[#00D084]">high-ticket pipeline.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button 
                className="w-full sm:w-auto group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#00D084] px-8 py-4 text-sm font-bold text-[#0A0A0C] hover:shadow-lg hover:shadow-[#00D084]/20 transition-all duration-300"
                
                
              >
                <span>Get a Free LinkedIn Audit</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-bold text-[#0A0A0C] hover:bg-gray-50 transition-colors">
                <span>See how we work</span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0A0A0C] transition-colors" />
              </button>
            </div>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[500px] bg-white rounded-3xl shadow-soft-lg border border-gray-100 p-8 flex flex-col justify-between h-[400px]"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D084]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D084]" />
                  LIVE ENGINE
                </div>
              </div>

              <div className="relative flex-grow flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 80 100 L 250 50" stroke="#E5E7EB" strokeWidth="2" />
                    <path d="M 80 100 L 250 83" stroke="#E5E7EB" strokeWidth="2" />
                    <path d="M 80 100 L 250 116" stroke="#E5E7EB" strokeWidth="2" />
                    <path d="M 80 100 L 250 150" stroke="#E5E7EB" strokeWidth="2" />
                  </svg>
                </div>
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-[#00D084] flex items-center justify-center shadow-lg -translate-x-24">
                  <span className="text-[10px] font-bold text-[#00D084] text-center leading-tight">YOU<br/>+ AI</span>
                </div>
                <div className="absolute right-8 flex flex-col gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-32 h-8 rounded-full border border-gray-200 bg-white flex items-center px-3 gap-2 shadow-sm">
                      <div className={`w-3 h-3 rounded-full ${i === 4 ? 'bg-gray-300' : 'bg-[#00D084]'}`} />
                      <div className="flex-1 flex flex-col gap-1">
                        <div className="h-1 bg-gray-200 rounded-full w-full" />
                        <div className="h-1 bg-gray-100 rounded-full w-2/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <div className="inline-block bg-[#00D084]/10 text-[#00D084] px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest mb-2">
                  Personalized Outreach
                </div>
                <div className="text-xs font-medium text-gray-500">Conversations that get replies</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const StatsStrip = () => {
  const stats = [
    { value: 3.4, prefix: '', suffix: 'x', label: 'More qualified calls booked', decimals: 1 },
    { value: 212, prefix: '+', suffix: '%', label: 'Average pipeline growth', decimals: 0 },
    { value: 480, prefix: '$', suffix: 'K+', label: 'Pipeline generated in 90 days', decimals: 0 },
    { value: 28, prefix: '', suffix: '%', label: 'Average LinkedIn reply rate', decimals: 0 },
  ];

  return (
    <div className="relative z-20 -mt-16 w-full px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-soft-lg border border-gray-100 p-8 sm:p-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i > 0 && i < 2 ? 'pt-8 lg:pt-0' : i >= 2 ? 'pt-8 lg:pt-0' : ''}`}>
              <div className={`text-4xl sm:text-5xl font-black mb-2 tracking-tighter ${i === 0 ? 'text-[#00D084]' : i === 1 ? 'text-[#0052FF]' : i === 2 ? 'text-[#FFB800]' : 'text-[#0A0A0C]'}`}>
                <CountUpStat value={stat.value.toString()} numericTarget={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <div className="text-xs font-semibold text-gray-500 max-w-[150px] leading-relaxed">
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
    { title: 'We own your pain', num: '01', desc: 'We sit on your side of the table. Your stalled pipeline, your missed targets, your "why isn\'t this working?" — we feel it as if it were ours, because in this partnership, it is.' },
    { title: 'We strategize as our own', num: '02', desc: 'No copy-paste playbooks. We build the growth strategy we\'d build if it were our own company on the line — rooted in your buyers, your offer and your numbers.' },
    { title: 'We execute like in-house', num: '03', desc: 'Strategy is worthless without execution. We run the campaigns, write the content and book the calls — accountable to outcomes, not slide decks.' }
  ];

  return (
    <section className="bg-white py-32 overflow-hidden relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-[#FFB800] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">THE PARTNERSHIP DIFFERENCE</div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#0A0A0C] tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Most agencies see a client.<br />
            We see a <span className="text-[#FFB800]">business worth fighting for.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-10 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-shadow duration-500 group">
              <div className="text-[#FFB800] text-5xl font-black mb-6 tracking-tighter opacity-90">{card.num}</div>
              <h3 className="text-2xl font-bold text-[#0A0A0C] mb-4">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PainPointsSection = () => {
  const points = [
    { title: 'Feast-or-famine pipeline', desc: 'Leads spike then vanish. You can never forecast revenue with confidence.' },
    { title: 'LinkedIn that doesn\'t convert', desc: 'A profile that reads like a resume and outreach that feels like spam.' },
    { title: 'Agencies that vanish after onboarding', desc: 'Hand-offs, junior account managers and reports full of vanity metrics.' },
    { title: 'Marketing disconnected from revenue', desc: 'Lots of activity, likes and traffic — but no clear line to closed high-ticket deals.' }
  ];

  return (
    <section className="bg-[#FFF5F1] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFE4D6] rounded-full blur-[150px] opacity-70" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-[#FF4F4F] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">SOUND FAMILIAR?</div>
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black text-[#0A0A0C] tracking-tight leading-[1.1] max-w-3xl mx-auto">
            You don't have a marketing problem.<br />
            You have a <span className="text-[#FF4F4F]">partnership problem.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {points.map((point, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 flex items-start gap-6 shadow-soft border border-gray-100/50">
              <div className="w-12 h-12 rounded-full bg-[#FF4F4F]/10 flex items-center justify-center flex-shrink-0">
                <Frown className="h-5 w-5 text-[#FF4F4F]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0A0A0C] mb-2">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServiceTabsSection = () => {
  const [activeTab, setActiveTab] = useState('B2B');
  const tabs = ['B2B', 'B2C', 'D2C'];

  const content = {
    'B2B': {
      theme: '#FFB800',
      title: 'LinkedIn-led pipeline for high-ticket sales.',
      desc: 'Our home turf. We turn founder authority and precise outreach into a predictable stream of qualified calls with economic buyers — built for long cycles and big deal sizes.',
      tags: ['LinkedIn', 'Cold + warm outreach', 'Demand gen', 'Founder branding'],
      stats: [{ v: '45+', l: 'qualified calls / quarter' }, { v: '3.4x', l: 'reply rate vs. industry' }, { v: '90 days', l: 'to meaningful pipeline' }]
    },
    'B2C': {
      theme: '#00D084',
      title: 'Demand, community and conversion at scale.',
      desc: 'For consumer brands, we build attention into loyalty — performance creative, social-first content and funnels that turn audiences into repeat customers.',
      tags: ['Meta & Google Ads', 'Social content', 'Influencer/UGC', 'Conversion funnels'],
      stats: [{ v: '2.8x', l: 'engagement lift' }, { v: '-38%', l: 'cost per acquisition' }, { v: '4.2x', l: 'return on ad spend' }]
    },
    'D2C': {
      theme: '#0052FF',
      title: 'From first click to repeat purchase.',
      desc: 'For direct-to-consumer brands, we own the full revenue engine — acquisition, retention and lifetime value — with creative and data working as one system.',
      tags: ['Performance ads', 'Email & SMS', 'Landing/CRO', 'Retention loops'],
      stats: [{ v: '+62%', l: 'repeat purchase rate' }, { v: '3.1x', l: 'blended ROAS' }, { v: '+47%', l: 'customer lifetime value' }]
    }
  };

  const active = content[activeTab as keyof typeof content];

  return (
    <section className="bg-[#F0FDF4] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-80 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        <div className="bg-[#00D084] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
          WHO WE GROW
        </div>
        
        <p className="text-xl text-gray-700 font-medium text-center max-w-2xl mb-12">
          Our flagship is B2B and high-ticket sales. But the same data-driven growth engine powers consumer and direct-to-consumer brands too. Pick your world.
        </p>

        <div className="bg-gray-100/80 p-1.5 rounded-full flex gap-1 mb-12 shadow-inner border border-gray-200 backdrop-blur-md relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative z-10 px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full transition-colors duration-300",
                activeTab === tab ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab}
            </button>
          ))}
          <div 
            className="absolute top-1.5 bottom-1.5 w-[calc(33.33%-2px)] rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ 
              left: activeTab === 'B2B' ? '6px' : activeTab === 'B2C' ? 'calc(33.33% + 4px)' : 'calc(66.66% + 2px)',
              backgroundColor: active.theme
            }} 
          />
        </div>

        <div className="w-full bg-white rounded-[2rem] border border-gray-100 shadow-soft-lg p-8 sm:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 blur-[80px] opacity-10 pointer-events-none" style={{ backgroundColor: active.theme }} />
          
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-5xl font-black text-[#0A0A0C]">{activeTab}</h3>
              {activeTab === 'B2B' && (
                <div className="bg-[#FFB800] text-black text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 uppercase tracking-widest">
                  <span>★</span> Flagship Expertise
                </div>
              )}
              {activeTab === 'B2C' && (
                <div className="border border-[#00D084] text-[#00D084] bg-[#00D084]/10 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest">
                  Full-Funnel Growth
                </div>
              )}
              {activeTab === 'D2C' && (
                <div className="border border-[#0052FF] text-[#0052FF] bg-[#0052FF]/10 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest">
                  Revenue Engine
                </div>
              )}
            </div>
            
            <h4 className="text-xl font-bold mb-6" style={{ color: active.theme }}>{active.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">{active.desc}</p>
            
            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-600">
                  <CheckCircle2 className="h-3 w-3" style={{ color: active.theme }} />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-4 relative z-10 justify-center">
            {active.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-soft transition-shadow">
                <div className="text-3xl font-black tracking-tighter" style={{ color: active.theme }}>{stat.v}</div>
                <div className="text-xs font-semibold text-gray-500 leading-tight w-24">{stat.l}</div>
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
    { num: '01', eyebrow: 'Absorb the pain', title: 'Understand', desc: 'Deep discovery into your offer, buyers, numbers and bottlenecks. We map your ICP and the real reason deals stall — before touching a single campaign.', feat: 'Growth audit & ICP map', color: '#FFB800' },
    { num: '02', eyebrow: 'Build the engine', title: 'Strategize', desc: 'We design the full growth strategy — positioning, offer, channels and the LinkedIn-led funnel — the way we\'d build it if the company were ours.', feat: 'Strategy & funnel blueprint', color: '#00D084' },
    { num: '03', eyebrow: 'Run it like in-house', title: 'Execute', desc: 'We build profiles, produce content, run outreach and ads, and book qualified calls. You watch pipeline fill while we own the day-to-day.', feat: 'Live campaigns & booked calls', color: '#0052FF' },
    { num: '04', eyebrow: 'Compound the wins', title: 'Scale', desc: 'We double down on what converts, kill what doesn\'t, and systemise the engine so growth compounds month over month.', feat: 'Optimised, compounding pipeline', color: '#8B5CF6' }
  ];

  return (
    <section className="bg-white py-32 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A0A0C] tracking-tight leading-relaxed max-w-3xl mx-auto">
            A proven operating system that takes us from understanding your pain to compounding your pipeline — <span className="font-normal italic text-gray-500">owned end-to-end.</span>
          </h2>
        </div>

        <div className="relative mt-24">
          <div className="absolute top-10 left-0 right-0 h-1 hidden lg:block bg-gradient-to-r from-[#FFB800] via-[#00D084] via-[#0052FF] to-[#8B5CF6] rounded-full opacity-30" />

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-black mb-8 shadow-lg z-10"
                  style={{ backgroundImage: `linear-gradient(135deg, ${step.color}, ${step.color}aa)` }}
                >
                  {step.num}
                </div>
                
                <div 
                  className="px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ borderColor: `${step.color}30`, color: step.color, backgroundColor: `${step.color}05` }}
                >
                  {step.eyebrow}
                </div>

                <h3 className="text-2xl font-black text-[#0A0A0C] mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{step.desc}</p>

                <div className="flex items-center gap-2 mt-auto">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${step.color}20` }}>
                    <CheckCircle2 className="w-3 h-3" style={{ color: step.color }} />
                  </div>
                  <span className="text-xs font-bold" style={{ color: step.color }}>{step.feat}</span>
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
