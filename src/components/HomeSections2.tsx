import { useState } from 'react';
import { ArrowRight, ChevronDown, TrendingUp, Sparkles, Star } from 'lucide-react';
import { CrowdCanvas } from './ui/skiper39';

export const ServicesGridSection = () => {
  const services = [
    { 
      title: 'Meta Ads (Facebook & Instagram)', 
      desc: 'Scale high-converting Advantage+ shopping campaigns, dynamic retargeting, and algorithmic customer acquisition that turns cold audiences into paying customers.', 
      icon: '📱', 
      tag: 'Scale Engine',
      color: '#0052FF', 
      isFlagship: true 
    },
    { 
      title: 'Google & YouTube Ads', 
      desc: 'Dominate high-intent search queries and capture buyers at the exact moment of decision with Google Search, Performance Max (PMax), and YouTube discovery funnels.', 
      icon: '🎯', 
      tag: 'Intent Capture',
      color: '#00D084' 
    },
    { 
      title: 'High-Ticket Lead Generation', 
      desc: 'Eliminate tyre-kickers with qualified B2B lead funnels, automated instant forms, and WhatsApp/CRM integrations for high-value commercial sales.', 
      icon: '💼', 
      tag: 'B2B Pipeline',
      color: '#FFB800' 
    },
    { 
      title: 'Performance Creative & UGC Studio', 
      desc: 'Our in-house studio scripts, edits, and delivers scroll-stopping UGC videos, 3D motion hooks, and direct-response carousel ads that drop CAC.', 
      icon: '🎬', 
      tag: 'In-House Studio',
      color: '#8B5CF6' 
    },
    { 
      title: 'Conversion Rate Optimization (CRO)', 
      desc: 'Fix leaky funnels and multiply your revenue per session. We build and test high-converting Shopify product pages, advertorials, and streamlined checkout flows.', 
      icon: '⚡', 
      tag: 'AOV & LTV Lift',
      color: '#EF4444' 
    },
    { 
      title: 'Retention & Email Automation', 
      desc: 'Maximize customer lifetime value (LTV) with intelligent Klaviyo flows, abandoned cart recovery, VIP loyalty sequences, and personalized SMS alerts.', 
      icon: '🔄', 
      tag: 'Repeat Revenue',
      color: '#06B6D4' 
    }
  ];

  return (
    <section className="bg-[#FFFDF9] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-50 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,184,0,0.05) 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-50 pointer-events-none" style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0,208,132,0.05) 0%, transparent 100%)' }} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <div className="bg-[#00D084] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
          COMPREHENSIVE GROWTH SUITE
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0C] text-center tracking-tight max-w-3xl mb-6">
          Every lever required to scale your revenue — managed under one roof.
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 font-medium text-center max-w-2xl mb-16 leading-relaxed">
          No disconnected freelancers. No finger-pointing. We integrate media buying, creative production, and conversion rate optimization into a unified growth engine.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-14">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-[2rem] p-8 shadow-soft border border-gray-100 hover:shadow-soft-lg transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 flex flex-col justify-between">
              
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-20 transition-opacity group-hover:opacity-40 pointer-events-none" style={{ background: `radial-gradient(50% 50% at 50% 50%, ${service.color} 0%, transparent 100%)` }} />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md" style={{ backgroundColor: `${service.color}10`, color: service.color }}>
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0C] mb-3 leading-snug">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
              </div>

              <a href="#portfolio" className="text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all pt-4 border-t border-gray-100" style={{ color: service.color }}>
                <span>See Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <a 
          href="tel:7827778719" 
          className="bg-gradient-to-r from-[#FFB800] to-[#00D084] text-[#0A0A0C] text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
        >
          <span>Get a Custom Growth Proposal</span> 
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export const ClientLogoStripSection = () => {
  const clients = [
    { name: 'Greenways', category: 'Premium Ethnic Wear', metric: '9.31x ROAS' },
    { name: 'Sole House', category: "Designer Women's Footwear", metric: '3.41x ROAS' },
    { name: 'Gulab Wala', category: 'Confectionery & Sweets', metric: '11.78x ROAS' },
    { name: 'Detailing Devils', category: 'Luxury Automotive', metric: '₹77 CPL' },
    { name: 'Surface by Sefar', category: 'Architectural Surfaces', metric: '800+ Leads' },
    { name: 'Karara Mujassme', category: 'Luxury Marble Decor', metric: '2.71L+ Reach' },
    { name: 'Aple Lites', category: 'Architectural Lighting', metric: '750+ Leads' },
    { name: 'Exotic Garden Centre', category: 'Flora & Landscaping', metric: '830+ DMs' },
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
        <div className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-gray-400">
          PROUDLY ACCELERATING SCALE FOR INDUSTRY LEADERS
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Infinite Marquee Track */}
        <div className="flex gap-6 animate-marquee whitespace-nowrap py-2">
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-gray-50 border border-gray-200/80 shadow-sm shrink-0 hover:border-[#00D084] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-[#00D084]" />
              <span className="font-extrabold text-sm text-[#0A0A0C]">{client.name}</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium">{client.category}</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-[#059669] text-[10px] font-bold">
                {client.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ResultsStripSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFDF9] to-white py-24 sm:py-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0A0A0C] rounded-[2.5rem] p-8 sm:p-14 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00D084]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0052FF]/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00D084] text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Proven Track Record
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
                Multi-Channel Execution.<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFB800] via-[#00D084] to-[#0052FF]">
                  Verified Revenue Lift.
                </span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-lg">
                See how we synchronize ad strategy across mobile, desktop, and tablet interfaces to capture in-market demand at every touchpoint. From high-fashion ecommerce to specialized B2B inquiries, our clients dominate their categories.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#00D084]">₹13L+</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Single Month Peak Sales</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#FFB800]">11.78x</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Blended Client ROAS</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0052FF]">800+</div>
                  <div className="text-xs text-gray-400 font-medium mt-1">Qualified B2B Leads</div>
                </div>
              </div>
            </div>

            {/* Showcase Image Frame */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="/images/client-showcase.jpg" 
                  alt="AdvertBytes Multi-Device Client Performance Showcase" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-[#0A0A0C] px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-gray-100">
                <TrendingUp className="w-4 h-4 text-[#00D084]" />
                <span className="text-xs font-black">Live Campaign Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ComparisonSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What specific advertising channels does AdvertBytes manage?",
      answer: "We specialize primarily in high-scale Meta Ads (Facebook & Instagram Feed, Stories, Reels, Advantage+ Shopping) and Google Ads (Google Search, Shopping, Performance Max, YouTube Ads). We also engineer high-ticket commercial lead funnels with instant verification forms, WhatsApp DM automation, and CRM sync."
    },
    {
      question: "How is AdvertBytes different from traditional digital marketing agencies?",
      answer: "Traditional agencies lock you into rigid monthly retainers and assign junior coordinators who send generic PDF reports highlighting vanity metrics like impressions and clicks. At AdvertBytes, we act as an embedded revenue partner. Experienced media buyers and creative strategists work directly on your account, taking radical accountability for blended ROAS, customer acquisition cost (CAC), and bottom-line revenue."
    },
    {
      question: "How fast can we expect our campaigns to launch and generate results?",
      answer: "Our onboarding, account audit, creative concepting, pixel tracking, and initial campaign launch take between 7 to 10 days. Most partners begin seeing positive ROAS and initial qualified orders or commercial leads within the first 14 to 21 days of live testing."
    },
    {
      question: "Do we need to supply all the ad creatives, videos, and copy?",
      answer: "Not necessarily. While we welcome any existing product assets you have, our in-house creative team scripts, designs, and iterates scroll-stopping video hooks, UGC-style creative, carousel designs, and direct-response ad copy engineered specifically for modern ad algorithms."
    },
    {
      question: "What minimum ad spend budget do we need to partner with AdvertBytes?",
      answer: "To give algorithmic ad platforms sufficient conversion data to optimize effectively, we generally recommend a minimum monthly ad spend of ₹75,000 to ₹1,50,000+ for Indian domestic campaigns, or $2,500+ for international US/UK/UAE campaigns."
    },
    {
      question: "How do your partnership terms and contracts work?",
      answer: "We don't believe in locking partners into predatory 6-to-12-month handcuffs. Our partnership agreements operate on transparent, milestone-driven structures. We earn your business month after month through undeniable performance and revenue growth."
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
            Everything you need to know about <span className="text-[#00D084]">scaling with AdvertBytes.</span>
          </h2>
          <p className="text-base text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
            Transparent answers regarding our campaigns, creative workflows, timelines, and partnership structure.
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
                  isOpen ? 'border-[#00D084] shadow-md' : 'border-gray-200/80 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-base text-[#0A0A0C] hover:text-[#00D084] transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#00D084] text-white rotate-180' : 'bg-gray-100 text-gray-500'
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
    { 
      quote: "AdvertBytes took our Meta & Google ad campaigns from a modest 2.1x ROAS to a breathtaking 9.31x ROAS during peak festive sales. Their creative testing velocity and deep understanding of Indian ethnic retail is unmatched.", 
      name: "Priya R.", 
      role: "CMO, Greenways (Ethnic Wear)", 
      image: "/images/founder-priya.jpg",
      metric: "9.31x ROAS • ₹13L+ Sales",
      color: "#00D084" 
    },
    { 
      quote: "Scaling our footwear catalog online felt impossible with rising ad costs. AdvertBytes restructured our full campaign architecture on Meta and Google Shopping, delivering 350+ orders in 4 months with a 3.41x blended return.", 
      name: "Amit S.", 
      role: "Founder & CEO, Sole House", 
      image: "/images/founder-amit.jpg",
      metric: "3.41x ROAS • 352 Orders",
      color: "#FFB800" 
    },
    { 
      quote: "AdvertBytes proved that even traditional festive products can achieve aggressive digital growth. In festive scaling alone, their Meta ads generated an 11.78x ROAS with over 27% repeat customers.", 
      name: "Sonal T.", 
      role: "Brand Director, Gulab Wala", 
      image: "/images/founder-sonal.jpg",
      metric: "11.78x ROAS • 27% Repeat Rate",
      color: "#0052FF" 
    },
    { 
      quote: "For high-ticket architectural surfaces, general agencies only deliver tyre-kickers. AdvertBytes engineered a targeted commercial lead funnel delivering 800+ qualified architects and builders at just ₹108 CPL.", 
      name: "Rohit P.", 
      role: "Managing Director, Surface by Sefar", 
      image: "/images/founder-rohit.jpg",
      metric: "800+ Leads • ₹108 Avg CPL",
      color: "#8B5CF6" 
    }
  ];

  return (
    <section className="bg-[#F4F9F8] py-32 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <div className="bg-gradient-to-r from-[#FFB800] to-[#00D084] text-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-8">
          VERIFIED FOUNDER OUTCOMES
        </div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0C] text-center tracking-tight mb-4">
          Trusted by founders who demand real revenue.
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 font-medium text-center max-w-2xl mb-16 leading-relaxed">
          We measure our success through the exact same balance sheet metrics you do: confirmed purchases, qualified inquiries, and compounding ROAS.
        </p>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-[2.2rem] p-8 sm:p-10 shadow-soft border border-gray-100 relative flex flex-col justify-between group hover:shadow-soft-lg transition-all duration-300">
              <div>
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#FFB800]">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FFB800]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-700">
                    {t.metric}
                  </span>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 shadow-sm"
                  style={{ borderColor: t.color }}
                />
                <div>
                  <div className="text-base font-extrabold text-[#0A0A0C]">{t.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{t.role}</div>
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
      {/* Massive Vibrant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800] via-[#34C759] to-[#0052FF]" />
      
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          ACCEPTING NEW Q3/Q4 PARTNERS
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
          Ready to turn ad spend into predictable revenue?
        </h2>

        <p className="text-white/90 text-base sm:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          Book a 1-on-1 growth strategy call. We'll audit your current ad accounts, identify wasted budget, and present a custom roadmap to scale your ROAS.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="tel:7827778719" 
            className="w-full sm:w-auto bg-[#0A0A0C] text-white px-8 py-4 rounded-full font-bold text-sm shadow-2xl flex items-center justify-center gap-2 hover:bg-black/90 transition-all cursor-pointer group"
          >
            <span>Book a Strategy Call</span> 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a 
            href="tel:7827778719" 
            className="w-full sm:w-auto bg-white text-[#0A0A0C] px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Call Gaurav (+91 78277 78719)</span>
          </a>
        </div>
        
        <p className="text-white/80 text-xs mt-8 font-semibold tracking-wide">
          Direct senior strategist audit • No junior account managers • Zero obligation
        </p>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0C] pt-24 pb-8 border-t border-white/10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-16">
        
        <div className="lg:col-span-2">
          <a href="/" className="flex items-center gap-3.5 mb-6 group cursor-pointer">
            <div className="bg-white rounded-xl p-1.5 flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="AdvertBytes Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
            </div>
            <span className="font-black tracking-tight text-2xl text-white font-sans">
              AdvertBytes
            </span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
            AdvertBytes is a performance marketing and revenue growth partner. We build predictable customer acquisition engines across Meta Ads, Google Ads, creative strategy, and high-ticket B2B funnels.
          </p>
          <div className="flex items-center gap-3">
             <a 
               href="https://linkedin.com" 
               target="_blank" 
               rel="noreferrer" 
               className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#00D084] hover:border-[#00D084] transition-all shadow-sm"
               aria-label="LinkedIn"
             >
               <span className="text-xs font-black">in</span>
             </a>
             <a 
               href="tel:7827778719" 
               className="text-xs font-bold text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:border-[#00D084] hover:text-white transition-colors shadow-sm"
             >
               Direct: +91 78277 78719
             </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Services</h4>
          <ul className="space-y-3.5 text-sm font-semibold text-gray-300">
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Meta Ads Scaling</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Google & YouTube Ads</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">High-Ticket B2B Lead Gen</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Performance Creative Studio</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Conversion Rate Optimization</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Retention & Email Automation</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Navigation</h4>
          <ul className="space-y-3.5 text-sm font-semibold text-gray-300">
            <li><a href="#" className="hover:text-[#00D084] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#00D084] transition-colors">About Us</a></li>
            <li><a href="#portfolio" className="hover:text-[#00D084] transition-colors">Case Studies (18+)</a></li>
            <li><a href="#services" className="hover:text-[#00D084] transition-colors">Services</a></li>
            <li><a href="#faq" className="hover:text-[#00D084] transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-[#00D084] transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Direct Contact</h4>
          <ul className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <li className="flex items-center gap-3">
              <span className="text-[#FFB800] shrink-0 text-base">✉</span> 
              <a href="mailto:gauravaaa15@gmail.com" className="font-semibold text-gray-300 hover:text-[#00D084] transition-colors">gauravaaa15@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#00D084] shrink-0 text-base">📞</span> 
              <a href="tel:7827778719" className="font-semibold text-gray-300 hover:text-[#00D084] transition-colors">+91 78277 78719</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#0052FF] shrink-0 text-base">📍</span> 
              <span className="font-semibold text-gray-300">Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Seamless Audience Engine (Crowd Canvas) */}
      <div className="w-full relative border-t border-white/10 pt-12 pb-4 mt-8">
        <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#00D084] text-[10px] font-extrabold uppercase tracking-[0.25em] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#00D084] animate-pulse" />
            AUDIENCE ACQUISITION ENGINE
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            150,000+ Active Customers & Commercial Buyers Moved to Action
          </h3>
        </div>

        {/* Full-Width Canvas Container with Top & Bottom Edge Blends */}
        <div className="relative h-[240px] sm:h-[320px] w-full overflow-hidden bg-[#0A0A0C]">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
          <CrowdCanvas
            src="https://cdn.21st.dev/assets/localized/abdb8990a7bef8c2f5af3e45f0a3c969c4b0603fba8be92e81347de4ea4e1ed7.png"
            rows={15}
            cols={7}
          />
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium border-t border-white/10 pt-8 pb-4">
        <p>© 2026 AdvertBytes. All rights reserved.</p>
        <p className="mt-2 md:mt-0 text-gray-400">Performance Marketing • Meta & Google Ads • Revenue Scaling</p>
      </div>
    </footer>
  );
};
