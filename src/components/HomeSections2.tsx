import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';


export const ServicesGridSection = () => {
  const services = [
    { title: 'LinkedIn Lead Gen', desc: 'Turn LinkedIn into a predictable high-ticket pipeline.', icon: 'in', color: '#0052FF', isFlagship: true },
    { title: 'Demand Gen', desc: 'Multi-channel demand that fills the top of your funnel.', icon: '🚀', color: '#00D084' },
    { title: 'Personal Branding', desc: 'Make the founder the most trusted voice in the category.', icon: '👤', color: '#FFB800' },
    { title: 'Content & Creative', desc: 'Story-driven creative engineered to convert, not just look good.', icon: '🎬', color: '#8B5CF6' },
    { title: 'Paid Ads', desc: 'Profitable paid pipeline — not vanity clicks.', icon: '📢', color: '#EF4444' },
    { title: 'Strategy & Funnels', desc: 'The strategy and systems that tie every channel to revenue.', icon: '⚙️', color: '#06B6D4' }
  ];

  return (
    <section className="bg-[#FFFDF9] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB800]/5 rounded-full blur-[100px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00D084]/5 rounded-full blur-[100px] opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <div className="bg-[#00D084] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
          WHAT WE OWN FOR YOU
        </div>
        
        <p className="text-xl text-gray-700 font-medium text-center max-w-2xl mb-16">
          Every service is built around one outcome: qualified, high-ticket pipeline. LinkedIn is the engine — these are the systems around it.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-shadow relative overflow-hidden group">
              
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-20 transition-opacity group-hover:opacity-40" style={{ backgroundColor: service.color }} />

              {service.isFlagship && (
                <div className="absolute top-6 right-6 bg-[#FFB800] text-black text-[9px] font-bold px-2 py-1 rounded-md uppercase tracking-widest flex items-center gap-1 shadow-sm">
                  <span>★</span> FLAGSHIP
                </div>
              )}

              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-xl relative z-10" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0A0A0C] mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 h-10 relative z-10">{service.desc}</p>

              <button className="text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all relative z-10" style={{ color: service.color }}>
                Explore service <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        <button className="bg-gradient-to-r from-[#FFB800] to-[#00D084] text-[#0A0A0C] text-sm font-bold uppercase tracking-wider px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
          View all services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export const ResultsStripSection = () => {
  return null; // Integrated into other sections
};

export const ClientLogoStripSection = () => {
  return null; 
};

export const ComparisonSection = () => {
  const comparisons = [
    { label: 'Partner, not vendor', us: 'We own your number with you and act like your team.', them: 'Treats you as a ticket and a monthly retainer.' },
    { label: 'Senior operators on your account', us: 'Strategists who\'ve built B2B pipelines do the work.', them: 'Hands you to a junior account manager after the pitch.' },
    { label: 'Revenue-obsessed', us: 'Every action tied to pipeline and closed deals.', them: 'Reports impressions, likes and other vanity metrics.' },
    { label: 'B2B & LinkedIn specialists', us: 'Deep focus on high-ticket B2B and LinkedIn.', them: 'Generalists spread thin across every industry.' },
    { label: 'Strategy + execution', us: 'We build the plan and run it end-to-end.', them: 'Sells you a strategy deck, then disappears.' }
  ];

  return (
    <section className="bg-white py-32 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="bg-[#FFB800] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8 inline-block">
            WHY ONLY ADVERT BYTES
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-700 tracking-tight max-w-2xl mx-auto leading-relaxed">
            Anyone can run campaigns. Few will own your outcome. Here's what changes when marketing is treated as a partnership.
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr,1.5fr] gap-4 px-6 pb-2">
            <div className="hidden md:block"></div>
            <div className="text-center text-sm font-bold text-[#FFB800] uppercase tracking-widest">Advert Bytes</div>
            <div className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest hidden md:block">Typical agency</div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr,1.5fr,1.5fr] gap-4 items-center">
              <div className="text-sm font-bold text-[#0A0A0C] px-2">{row.label}</div>
              
              <div className="bg-[#F0FDF4] rounded-full px-6 py-4 flex items-center gap-3 border border-[#00D084]/20 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#00D084] shrink-0" />
                <span className="text-sm font-semibold text-[#00D084] leading-tight">{row.us}</span>
              </div>
              
              <div className="bg-white rounded-full px-6 py-4 flex items-center gap-3 border border-gray-100 shadow-sm opacity-60">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span className="text-sm text-gray-500 leading-tight">{row.them}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = () => {
  const testimonials = [
    { quote: "They didn't act like an agency — they acted like our growth team. Within 90 days our LinkedIn went from silent to our #1 source of high-ticket calls.", name: "Amit S.", role: "Founder & CEO, TechNova", bg: "#00D084" },
    { quote: "Finally, a partner that ties everything back to pipeline. The strategy was sharp and, more importantly, they actually executed it.", name: "Priya R.", role: "CMO, MarketLeap", bg: "#FFB800" },
    { quote: "The personal branding work made me the go-to voice in our niche. Inbound leads now come to us pre-sold.", name: "Rohit P.", role: "Founder, InsightEdge", bg: "#FFB800" },
    { quote: "Their LinkedIn outreach books calls with real decision-makers — not tyre-kickers. It feels like having an SDR team that never sleeps.", name: "Sonal T.", role: "VP Sales, Bright-Era", bg: "#00D084" }
  ];

  return (
    <section className="bg-[#F4F9F8] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#FFB800] to-[#00D084] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
          PARTNER RESULTS
        </div>
        
        <p className="text-lg text-gray-700 font-medium text-center max-w-2xl mb-16 leading-relaxed">
          We measure success the way you do — in qualified calls, pipeline and closed high-ticket deals.
        </p>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-100 relative">
              <div className="absolute top-8 right-8 text-[#FFB800] text-4xl opacity-20 font-serif">"</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: t.bg }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0A0A0C]">{t.name}</div>
                  <div className="text-[10px] text-gray-400 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Massive Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800] via-[#85C744] to-[#00D084]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
          Let's build your growth engine — together.
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Book a strategy call. We'll audit your growth, map the opportunity, and show you exactly how the partnership turns LinkedIn into high-ticket pipeline.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-[#FFB800] to-[#00D084] text-[#0A0A0C] px-8 py-4 rounded-full font-bold text-sm shadow-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Book a Strategy Call <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            Connect on LinkedIn
          </button>
        </div>
        
        <p className="text-white/60 text-xs mt-8 font-medium">No pressure. No fluff. Just a clear plan for your pipeline.</p>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-12 border-t border-gray-200 text-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6 group">
            <div className="h-6 w-6 relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-[#FFB800]" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-[#00D084]" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-[#0052FF]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-xl text-[#0A0A0C] leading-none">Advert Bytes</span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5">VENTURES</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed max-w-xs">
            We don't take clients. We take partners. We own your pain points as our own, strategize yours, and execute like your in-house growth team.
          </p>
          <div className="mt-6 flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-gray-200/50 flex items-center justify-center text-gray-500 hover:text-black transition-colors cursor-pointer text-xs font-bold">in</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Services</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-600">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">LinkedIn Lead Gen</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Demand Gen</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Personal Branding</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Content & Creative</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Paid Ads</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Strategy & Funnels</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Company</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-600">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">How We Work</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Insights</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Contact</a></li>
          </ul>
          
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 mt-10">Legal</h4>
          <ul className="space-y-4 text-xs font-semibold text-gray-600">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Cookie Policy</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Compliance</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Get in touch</h4>
          <ul className="space-y-6 text-xs text-gray-500 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#FFB800] shrink-0">✉</span> 
              <span className="font-semibold text-gray-600 hover:text-[#00D084] cursor-pointer">info@advertbytes.com</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#00D084] shrink-0">📞</span> 
              <span className="font-semibold text-gray-600">+91-9876543210 (India)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#0052FF] shrink-0">📍</span> 
              <span>India Office: 123 Growth Avenue, DLF Phase 3, Gurugram, HR 122002</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-medium">
        <p>© 2026 Advert Bytes. All rights reserved.</p>
        <p className="mt-2 md:mt-0">B2B growth partners - LinkedIn-led high-ticket pipeline</p>
      </div>
    </footer>
  );
};
