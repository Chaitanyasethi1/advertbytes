import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';


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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-50 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,184,0,0.05) 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-50 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,208,132,0.05) 0%, transparent 100%)' }} />
      
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
              
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 transition-opacity group-hover:opacity-40 pointer-events-none" style={{ background: `radial-gradient(50% 50% at 50% 50%, ${service.color} 0%, transparent 100%)` }} />

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is AdvertBytes different from a traditional marketing agency?",
      answer: "Traditional agencies treat you as a retainer ticket and delegate your account to junior managers reporting vanity metrics like likes & impressions. At AdvertBytes, we act as your embedded growth partner — senior strategists owning your revenue pipeline with custom B2B strategies, high-ticket LinkedIn outreach, and transparent ROI."
    },
    {
      question: "How quickly can we expect to see results and booked calls?",
      answer: "Our initial setup, ICP targeting, and campaign launch take 1-2 weeks. Most partners see high-intent LinkedIn engagement and their first qualified pipeline calls within 14 to 30 days of campaign launch."
    },
    {
      question: "What industries or business types do you specialize in?",
      answer: "We specialize in high-ticket B2B services, SaaS, agencies, consulting firms, and founders selling high-value solutions ($5k - $50k+ deal sizes). We also run specialized performance campaigns for B2C & D2C brands."
    },
    {
      question: "Do I need to manage the outreach or write the content myself?",
      answer: "Zero effort required on your end. We handle full pipeline creation — market research, personal branding, authority content writing, multi-touch LinkedIn outreach, and lead qualification. You only show up to close the calls we book on your calendar."
    },
    {
      question: "What is the structure of your partnership pricing?",
      answer: "We work on transparent, aligned growth structures tailored to your scale. No long-term lock-in traps — our model ensures we only win when your pipeline wins. Book a strategy call to get a custom roadmap and proposal."
    }
  ];

  return (
    <section id="faq" className="bg-[#FAF9F6] py-28 sm:py-32 bg-grid-pattern relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-[#FFB800] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 inline-block shadow-sm">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A0A0C] tracking-tight leading-tight mb-4">
            Everything you need to know about <span className="text-[#FFB800]">partnering with us.</span>
          </h2>
          <p className="text-base text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Have questions about how we scale your B2B growth and LinkedIn pipeline? We've got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen ? 'border-[#FFB800] shadow-md' : 'border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#0A0A0C] hover:text-[#00D084] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#FFB800] text-black rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100/60 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
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
    <section id="contact" className="relative py-32 overflow-hidden flex flex-col items-center justify-center text-center">
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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-20">
        
        <div className="lg:col-span-1">
          <a href="/" className="flex items-center gap-3.5 mb-6 group cursor-pointer">
            <img src="/logo.png" alt="AdvertBytes Logo" className="h-14 w-auto object-contain transition-transform group-hover:scale-105" />
            <span className="font-black tracking-tight text-2xl text-[#0A0A0C] font-sans">
              AdvertBytes
            </span>
          </a>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            We don't take clients. We take partners. We own your pain points as our own, strategize yours, and execute like your in-house growth team.
          </p>
          <div className="mt-6 flex items-center gap-3">
             <div className="w-9 h-9 rounded bg-gray-200/60 flex items-center justify-center text-gray-600 hover:text-black transition-colors cursor-pointer text-sm font-bold">in</div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Services</h4>
          <ul className="space-y-3.5 text-sm font-semibold text-gray-700">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">LinkedIn Lead Gen</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Demand Gen</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Personal Branding</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Content & Creative</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Paid Ads</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Strategy & Funnels</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Company</h4>
          <ul className="space-y-3.5 text-sm font-semibold text-gray-700">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Services</a></li>
            <li><a href="#portfolio" className="hover:text-[#00D084] transition-colors">Portfolio</a></li>
            <li><a href="#about" className="hover:text-[#00D084] transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-[#00D084] transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Legal</h4>
          <ul className="space-y-3.5 text-sm font-semibold text-gray-700">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-6">Get in touch</h4>
          <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <li className="flex items-center gap-3">
              <span className="text-[#FFB800] shrink-0 text-base">✉</span> 
              <a href="mailto:gauravaaa15@gmail.com" className="font-semibold text-gray-700 hover:text-[#00D084] cursor-pointer">gauravaaa15@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#00D084] shrink-0 text-base">📞</span> 
              <a href="tel:7827778719" className="font-semibold text-gray-700 hover:text-[#00D084]">+91 78277 78719</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#0052FF] shrink-0 text-base">📍</span> 
              <span className="font-semibold text-gray-700">Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium border-t border-gray-200/60 pt-8">
        <p>© 2026 Advert Bytes. All rights reserved.</p>
        <p className="mt-2 md:mt-0">B2B growth partners - LinkedIn-led high-ticket pipeline</p>
      </div>
    </footer>
  );
};
