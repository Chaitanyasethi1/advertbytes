import { useState, useEffect } from 'react';
import { ArrowRight, Frown, CheckCircle2 } from 'lucide-react';
import { CountUpStat } from './CountUpStat';
import { cn } from '../utils/cn';

const LiveEngineCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: 'AI Decision Engine',
      subtitle: 'Data decides every move',
      badgeColor: 'text-[#E6A100]',
      badgeBg: 'bg-[#FFF9E6]',
      activeDotColor: 'bg-[#FFB800]',
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central glowing AI Engine node */}
          <div className="relative z-10 w-22 h-22 rounded-full bg-gradient-to-tr from-[#FFB800] via-[#85C744] to-[#00D084] p-[3px] shadow-[0_10px_30px_rgba(0,208,132,0.3)] flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center shadow-inner">
              <span className="text-xs font-black text-[#0A0A0C] tracking-tight">YOU + AI</span>
              <span className="text-[9px] font-bold text-[#00D084] uppercase tracking-wider">ENGINE</span>
            </div>
          </div>

          {/* SVG Connecting Lines with Glowing Dots */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 220" fill="none">
            <path d="M 115 42 L 210 110" stroke="#FFB800" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            <path d="M 115 85 L 210 110" stroke="#FFB800" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            <path d="M 115 128 L 210 110" stroke="#FFB800" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            <path d="M 115 170 L 210 110" stroke="#FFB800" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            
            <path d="M 305 42 L 210 110" stroke="#00D084" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            <path d="M 305 85 L 210 110" stroke="#00D084" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            <path d="M 305 128 L 210 110" stroke="#00D084" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />
            <path d="M 305 170 L 210 110" stroke="#00D084" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.7" />

            <circle cx="165" cy="76" r="4" fill="#FFB800" />
            <circle cx="155" cy="120" r="4" fill="#FFB800" />
            <circle cx="255" cy="76" r="4" fill="#00D084" />
            <circle cx="265" cy="120" r="4" fill="#00D084" />
          </svg>

          {/* Left Inputs */}
          <div className="absolute left-4 top-[24px] px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-[11px] font-bold text-[#D97706] shadow-sm">Intent Signals</div>
          <div className="absolute left-4 top-[68px] px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-[11px] font-bold text-[#D97706] shadow-sm">99% ICP Fit</div>
          <div className="absolute left-4 top-[112px] px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-[11px] font-bold text-[#D97706] shadow-sm">Decision Makers</div>
          <div className="absolute left-4 top-[156px] px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-[11px] font-bold text-[#D97706] shadow-sm">Buying Stage</div>

          {/* Right Outputs */}
          <div className="absolute right-4 top-[24px] px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-[#059669] shadow-sm">Smart Target</div>
          <div className="absolute right-4 top-[68px] px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-[#059669] shadow-sm">1:1 Hook</div>
          <div className="absolute right-4 top-[112px] px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-[#059669] shadow-sm">Optimal Time</div>
          <div className="absolute right-4 top-[156px] px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-[11px] font-bold text-[#059669] shadow-sm">High Reply %</div>
        </div>
      )
    },
    {
      title: 'Personalized Outreach',
      subtitle: 'Conversations that get replies',
      badgeColor: 'text-[#059669]',
      badgeBg: 'bg-[#ECFDF5]',
      activeDotColor: 'bg-[#00D084]',
      content: (
        <div className="relative w-full h-full flex items-center justify-between px-2">
          {/* Left Node */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00D084] to-[#0052FF] p-0.5 shadow-lg flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center text-center p-2">
              <div className="w-6 h-6 rounded-full bg-[#00D084]/20 flex items-center justify-center text-[#00D084] font-black text-[10px] mb-1">⚡</div>
              <span className="text-[11px] font-black text-[#0A0A0C] leading-none">YOU + AI</span>
              <span className="text-[8px] font-bold text-gray-400 mt-0.5">SMART OUTREACH</span>
            </div>
          </div>

          {/* SVG Connectors */}
          <svg className="absolute left-20 right-44 h-full pointer-events-none" viewBox="0 0 100 200" preserveAspectRatio="none">
            <path d="M 0 100 C 40 100, 40 30, 100 30" stroke="#00D084" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M 0 100 C 40 100, 40 75, 100 75" stroke="#00D084" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M 0 100 C 40 100, 40 125, 100 125" stroke="#00D084" strokeWidth="2" fill="none" opacity="0.6" />
            <path d="M 0 100 C 40 100, 40 170, 100 170" stroke="#00D084" strokeWidth="2" fill="none" opacity="0.6" />
          </svg>

          {/* Right Cards List */}
          <div className="flex flex-col gap-2.5 w-60 z-10">
            <div className="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/90 shadow-sm flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#00D084] text-white font-bold text-xs flex items-center justify-center shrink-0">SJ</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-900 truncate">Sarah J. (VP Sales)</span>
                  <span className="w-2 h-2 rounded-full bg-[#00D084]"></span>
                </div>
                <p className="text-[9px] text-gray-600 truncate">"Let's talk tomorrow at 3 PM!"</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/90 shadow-sm flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#FFB800] text-black font-bold text-xs flex items-center justify-center shrink-0">DC</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-900 truncate">David C. (Head Growth)</span>
                  <span className="w-2 h-2 rounded-full bg-[#FFB800]"></span>
                </div>
                <p className="text-[9px] text-gray-600 truncate">"Send over your deck!"</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/90 shadow-sm flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#0052FF] text-white font-bold text-xs flex items-center justify-center shrink-0">ER</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-900 truncate">Elena R. (CMO)</span>
                  <span className="w-2 h-2 rounded-full bg-[#0052FF]"></span>
                </div>
                <p className="text-[9px] text-gray-600 truncate">"Confirmed slot for Thursday"</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl border border-gray-200 bg-white shadow-sm flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gray-800 text-white font-bold text-xs flex items-center justify-center shrink-0">MV</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-900 truncate">Marcus V. (CEO)</span>
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                </div>
                <p className="text-[9px] text-gray-600 truncate">"Sounds aligned, cc my EA"</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Content Engine',
      subtitle: 'Authority content, built fast',
      badgeColor: 'text-[#1D4ED8]',
      badgeBg: 'bg-[#EFF6FF]',
      activeDotColor: 'bg-[#0052FF]',
      content: (
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FFB800] to-[#00D084] flex items-center justify-center font-bold text-xs text-black">AB</div>
                <div>
                  <div className="text-[11px] font-bold text-gray-900">LinkedIn Authority Post</div>
                  <div className="text-[9px] text-gray-400">AI Generated & Optimised</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-[#059669] text-[9px] font-bold">LIVE</span>
            </div>

            <div className="space-y-1.5">
              <div className="h-2 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2 bg-gray-200 rounded-full w-4/5"></div>
              <div className="h-2 bg-gray-100 rounded-full w-3/5"></div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center">
              <div className="bg-amber-50 p-2 rounded-lg border border-amber-100">
                <div className="text-xs font-black text-[#D97706]">842</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase">Engagements</div>
              </div>
              <div className="bg-emerald-50 p-2 rounded-lg border border-emerald-100">
                <div className="text-xs font-black text-[#059669]">48</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase">DMs Received</div>
              </div>
              <div className="bg-blue-50 p-2 rounded-lg border border-blue-100">
                <div className="text-xs font-black text-[#1D4ED8]">12</div>
                <div className="text-[8px] font-bold text-gray-500 uppercase">Calls Booked</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Paid Amplification',
      subtitle: 'Scale only what converts',
      badgeColor: 'text-[#059669]',
      badgeBg: 'bg-[#ECFDF5]',
      activeDotColor: 'bg-[#00D084]',
      content: (
        <div className="relative w-full h-full flex items-center justify-center px-4">
          <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-md p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#00D084]"></div>
                <span className="text-xs font-bold text-gray-900">Campaign Performance</span>
              </div>
              <span className="text-xs font-black text-[#00D084] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">4.8x ROAS</span>
            </div>

            {/* Visual Graph Bars */}
            <div className="flex items-end gap-3 h-24 pt-4 px-2 justify-between border-b border-gray-100">
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full bg-amber-200 rounded-t-md h-10"></div>
                <span className="text-[9px] text-gray-400 font-bold">Wk 1</span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full bg-amber-400 rounded-t-md h-14"></div>
                <span className="text-[9px] text-gray-400 font-bold">Wk 2</span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full bg-[#00D084]/70 rounded-t-md h-18"></div>
                <span className="text-[9px] text-gray-400 font-bold">Wk 3</span>
              </div>
              <div className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full bg-gradient-to-t from-[#FFB800] to-[#00D084] rounded-t-md h-22 shadow-md"></div>
                <span className="text-[9px] text-[#00D084] font-black">Wk 4</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-semibold text-gray-600 pt-1">
              <span>Pipeline Growth</span>
              <span className="text-[#00D084] font-bold">+312% YoY</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full max-w-[530px] bg-white rounded-[2rem] p-8 flex flex-col justify-between h-[430px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-gray-100/80">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4 relative z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#34C759]" />
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
        </div>
        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759]" />
          LIVE ENGINE
        </div>
      </div>

      {/* Slide Visual Content */}
      <div className="relative flex-grow flex items-center justify-center">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-all duration-700 ease-in-out flex items-center justify-center ${activeSlide === index ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95'}`}
          >
            {slide.content}
          </div>
        ))}
      </div>
      
      {/* Card Footer: Badge, Subtitle & Dot Indicators */}
      <div className="mt-4 flex items-end justify-between relative z-20">
        <div>
          <div className={`inline-block px-3 py-1 rounded-lg text-[11px] font-bold tracking-wide mb-1 ${slides[activeSlide].badgeBg} ${slides[activeSlide].badgeColor}`}>
            {slides[activeSlide].title}
          </div>
          <div className="text-xs font-medium text-gray-500">{slides[activeSlide].subtitle}</div>
        </div>
        
        <div className="flex gap-1.5 items-center mb-1">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`transition-all duration-300 rounded-full h-2 ${
                activeSlide === index 
                  ? `w-6 ${slide.activeDotColor}` 
                  : 'w-2 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] pt-28 sm:pt-32 pb-16 overflow-hidden flex items-start bg-[#F8F9FA] bg-grid-pattern">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] opacity-60 mix-blend-multiply -translate-x-1/2 -translate-y-1/4 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #FFEDD5 0%, rgba(255,237,213,0) 100%)' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-60 mix-blend-multiply translate-x-1/3 -translate-y-1/4 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #D1FAE5 0%, rgba(209,250,229,0) 100%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          
          <div className="flex flex-col items-start pt-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm px-4 py-1.5 mb-6 shadow-sm">
              <svg className="w-3.5 h-3.5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
              </svg>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#0A0A0C]">
                B2B • B2C • D2C GROWTH PARTNER
              </span>
            </div>
            
            <h1 className="text-[3.8rem] leading-[1.05] sm:text-[4.8rem] lg:text-[5rem] font-black text-[#0A0A0C] tracking-tighter mb-6 max-w-2xl">
              We don't take clients.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] via-[#34C759] to-[#34C759]">
                We take partners.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl font-medium leading-relaxed">
              We own your pain as our own and run an AI-powered growth engine — filtering leads, outreach, content and ads — that turns attention into a predictable <span className="font-bold text-[#34C759]">high-ticket pipeline.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <a href="tel:7827778719" className="w-full sm:w-auto group relative flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFB800] to-[#34C759] px-8 py-4 text-sm font-bold text-[#0A0A0C] hover:shadow-lg hover:shadow-[#34C759]/20 transition-all duration-300">
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a href="#services" className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-bold text-[#0A0A0C] hover:bg-gray-50 transition-colors shadow-sm">
                <span>See how we work</span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-[#0A0A0C] transition-colors" />
              </a>
            </div>

            {/* Social Proof Avatar Stack */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-200/60 w-full sm:w-auto">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-[#E6A100] text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-sm">A</div>
                <div className="w-7 h-7 rounded-full bg-[#00A86B] text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-sm">P</div>
                <div className="w-7 h-7 rounded-full bg-[#0066FF] text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-sm">R</div>
                <div className="w-7 h-7 rounded-full bg-[#9C27B0] text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-sm">S</div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-[#FFB800] text-xs">
                  ★ ★ ★ ★ ★
                </div>
                <span className="text-[11px] font-medium text-gray-600">
                  Trusted by <strong className="font-bold text-[#0A0A0C]">200+ B2B founders</strong> to own their growth
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full flex items-start justify-center lg:justify-end pt-14 lg:pt-20">
            <LiveEngineCarousel />
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
    <section id="about" className="bg-white py-32 overflow-hidden relative bg-grid-pattern">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-70 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #FFE4D6 0%, rgba(255,228,214,0) 100%)' }} />
      
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
    <section id="services" className="bg-[#F0FDF4] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-80 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #ffffff 0%, rgba(255,255,255,0) 100%)' }} />
      
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
          <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none" style={{ background: `radial-gradient(50% 50% at 50% 50%, ${active.theme} 0%, transparent 100%)` }} />
          
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
