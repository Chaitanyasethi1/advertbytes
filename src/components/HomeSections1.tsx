import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, BarChart3, Users, Zap, Search, MessageCircle } from 'lucide-react';
import { CountUpStat } from './CountUpStat';
import { cn } from '../utils/cn';
import { CLIENT_LOGOS } from '../data/portfolioData';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } }
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0A0A0C] pt-32 pb-20">
      {/* Background Floating Labels */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {['SEO ↑', 'ROAS 9.31X', 'LEADS +', 'META', 'GOOGLE', 'WHATSAPP'].map((lbl, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '-100%', opacity: [0, 1, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 2 }}
            className="absolute text-5xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]"
            style={{ left: `${10 + i * 15}%` }}
          >
            {lbl}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div initial="hidden" animate="visible" variants={STAGGER} className="max-w-5xl">
          <motion.div variants={FADE_UP} className="mb-8 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#8E8E9F]">
            SEO · AEO · GEO · PERFORMANCE · SOCIAL · INFLUENCER · WHATSAPP
          </motion.div>
          
          <motion.h1 variants={FADE_UP} className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black text-white tracking-tighter leading-[0.95] mb-8">
            Digital Marketing.<br />
            <span className="italic font-light text-[#8E8E9F]">Built for Growth.</span>
          </motion.h1>
          
          <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-[#A1A1AA] max-w-2xl font-medium leading-relaxed mb-10">
            We help businesses build stronger digital brands, reach the right audiences, and turn online attention into measurable business results.
          </motion.p>
          
          <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4 mb-16">
            <button className="rounded-full bg-[#0052FF] px-8 py-4 text-sm font-bold text-white hover:bg-[#0052FF]/90 transition-colors flex items-center gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
            <button className="rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white hover:text-black transition-all flex items-center gap-2">
              View Our Work <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div variants={FADE_UP} className="border-t border-white/10 pt-8">
            <p className="text-xs font-mono uppercase tracking-widest text-[#6B7280] mb-4">
              Trusted by 18+ brands across ecommerce, fashion, wellness, education and home décor
            </p>
            <div className="flex gap-6 overflow-hidden">
              <div className="flex gap-8 items-center animate-scroll">
                {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                  <span key={i} className="text-lg font-bold text-white/30 whitespace-nowrap hover:text-white transition-colors cursor-default">
                    {logo.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const DifferenceSection = () => {
  return (
    <section className="bg-[#050505] py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052FF]">
            <span className="h-2 w-2 rounded-full bg-[#0052FF]" /> THE ADVERT BYTES DIFFERENCE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Being online is easy. <span className="text-[#8E8E9F]">Getting chosen is the real challenge.</span>
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            At Advert Bytes, we build digital marketing strategies that connect your business with the people who matter most — your customers. From search engines and AI-powered discovery to social media, paid advertising and WhatsApp, we bring strategy, creativity and performance together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Strategy Before Execution', desc: 'We understand your business, audience, competition and goals before deciding what to run.' },
            { num: '02', title: 'Creativity With Purpose', desc: 'Great creative gets attention. Great strategy gives that attention a direction.' },
            { num: '03', title: 'Data That Drives Decisions', desc: 'We look beyond vanity metrics and use performance data to understand what\'s actually working.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } } }}
              className="bg-[#0A0A0C] border border-white/5 p-8 rounded-3xl hover:border-white/20 transition-colors"
            >
              <div className="text-[#0052FF] font-mono text-xl font-bold mb-6">{item.num}</div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-[#8E8E9F] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PainPointsSection = () => {
  return (
    <section className="bg-[#0A0A0C] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E8E9F]">
            SOUND FAMILIAR?
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            More traffic isn't the problem.<br /> <span className="italic font-light text-[#8E8E9F]">Turning it into customers is.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            { icon: <BarChart3 className="text-[#0052FF]" />, title: 'Inconsistent Traffic', desc: 'Sessions spike during a campaign, then disappear the moment ad spend pauses.' },
            { icon: <Zap className="text-[#0052FF]" />, title: 'Ads That Don\'t Convert', desc: 'Clicks come in, but they don\'t turn into confirmed orders or qualified leads.' },
            { icon: <Users className="text-[#0052FF]" />, title: 'Agencies That Disappear', desc: 'Onboarding calls are great; after that it\'s a monthly report full of vanity metrics.' },
            { icon: <Search className="text-[#0052FF]" />, title: 'Marketing Disconnected From Sales', desc: 'Likes, reach and impressions — but no clear line to revenue.' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-8 rounded-3xl bg-[#050505] border border-white/5">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-[#8E8E9F] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl text-white font-medium">
            Every one of these comes down to marketing without a strategy behind it.<br />
            <span className="text-[#0052FF]">Here's how we fix that.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export const ServiceTabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { title: 'SEO, AEO & GEO', headline: 'Get Found. Get Chosen. Get Mentioned.', desc: 'Search is changing — people now discover businesses through AI-powered search and answer engines, not just traditional results. We combine SEO, AEO and GEO to improve visibility across all of them.', stat: 'Technical + Local SEO, AEO, GEO, Schema — 14 sub-services.' },
    { title: 'Performance Marketing', headline: 'Spend Smarter. Grow Faster.', desc: 'We create, manage and optimise Google and Meta campaigns focused on measurable outcomes.', stat: '9.31x ROAS (Greenways) · 60x ROAS (Grodd) · ₹13L+ revenue in 90 days.' },
    { title: 'Social & Influencer', headline: 'Make Your Brand Worth Following.', desc: 'Strategy, content and creativity that looks good, communicates clearly and supports business goals — plus creator partnerships that feel authentic.', stat: '830+ DM conversations generated (Exotic Garden Centre).' },
    { title: 'WhatsApp Marketing', headline: 'Turn Conversations Into Customers.', desc: 'WhatsApp used strategically becomes a channel for engagement, lead nurturing, retention and sales.', stat: '322+ DMs from a single campaign (Karara Mujassme).' },
  ];

  return (
    <section className="bg-[#050505] py-24 sm:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052FF]">
            WHAT WE DO
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            One business. One strategy. <br/><span className="text-[#8E8E9F]">Five growth channels.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 flex flex-col gap-2">
            {tabs.map((tab, i) => (
              <button 
                key={i} onClick={() => setActiveTab(i)}
                className={cn("text-left px-6 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all", activeTab === i ? "bg-[#0A0A0C] text-white border border-white/10" : "text-[#6B7280] hover:bg-white/5 hover:text-white")}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          <div className="lg:w-2/3 bg-[#0A0A0C] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
            >
              <h3 className="text-3xl font-extrabold text-white mb-6">{tabs[activeTab].headline}</h3>
              <p className="text-lg text-[#A1A1AA] leading-relaxed mb-10">{tabs[activeTab].desc}</p>
              
              <div className="border-t border-white/10 pt-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#0052FF] mb-2">Impact / Scope</div>
                <div className="text-white font-medium">{tabs[activeTab].stat}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProcessSection = () => {
  const steps = [
    { name: 'Discover', desc: 'We understand your business, market, customers and objectives.' },
    { name: 'Strategize', desc: 'We identify the right channels, audience and growth opportunities.' },
    { name: 'Create', desc: 'We develop campaigns, content and creatives built around the strategy.' },
    { name: 'Launch', desc: 'Your campaigns go live with the right tracking and measurement in place.' },
    { name: 'Optimize', desc: 'We study the data, identify opportunities and continuously improve performance.' },
    { name: 'Scale', desc: 'When we find what works, we focus on growing it further.' }
  ];

  return (
    <section className="bg-[#0A0A0C] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E8E9F]">
            HOW WE WORK
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Turn Ideas Into Growth.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-[#0052FF]/30 transition-colors">
              <div className="text-[#0052FF] text-4xl font-black opacity-20 absolute top-6 right-8">0{i + 1}</div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.name}</h3>
              <p className="text-[#8E8E9F] text-sm leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const GrowthEngineSection = () => {
  const nodes = [
    { title: 'Visibility (SEO/AEO/GEO)', desc: 'Shows up where customers are searching, including AI search.' },
    { title: 'Engagement (Social/Content)', desc: 'Builds recognition and trust.' },
    { title: 'Conversion (Google/Meta)', desc: 'Turns attention into orders and leads.', callout: '9.31x ROAS · 60x ROAS achieved' },
    { title: 'Retention (WhatsApp)', desc: 'Nurtures and re-engages existing customers.' },
    { title: 'Compound Growth', desc: 'Data from all four feeds back into strategy, improving the next cycle.' },
  ];

  return (
    <section className="bg-[#050505] py-24 sm:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052FF]">
            THE GROWTH ENGINE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Watch how the strategy actually works.
          </h2>
          <p className="text-[#A1A1AA] text-lg">
            No black box — this is the system we run for every client, from search visibility to WhatsApp retention.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0052FF] to-white/5 md:left-auto md:top-[27px] md:bottom-auto md:w-full md:h-0.5 md:bg-gradient-to-r" />

          <div className="flex flex-col md:flex-row gap-12 md:gap-6 justify-between">
            {nodes.map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative z-10 flex flex-row md:flex-col items-start gap-6 md:w-1/5"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#0A0A0C] border-2 border-[#0052FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,82,255,0.3)]">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{node.title}</h3>
                  <p className="text-xs text-[#8E8E9F] leading-relaxed mb-3">{node.desc}</p>
                  {node.callout && (
                    <div className="inline-block bg-[#0052FF]/10 text-[#0052FF] border border-[#0052FF]/20 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {node.callout}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ToolsSection = () => {
  const tools = [
    { title: 'Research & Audits', desc: 'Google Analytics, Google Search Console, SEMrush, Ahrefs.' },
    { title: 'Paid Media Management', desc: 'Google Ads Manager, Meta Ads Manager, Performance Max, Shopping Campaigns.' },
    { title: 'SEO & AEO/GEO Execution', desc: 'Schema markup, structured data, keyword research tools.' },
    { title: 'Social & Content', desc: 'Content calendars, creative production, Reels/short-form workflows.' },
    { title: 'WhatsApp & Retention', desc: 'WhatsApp Business API, broadcast and automation tools.' },
  ];

  return (
    <section className="bg-[#0A0A0C] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E8E9F]">
            HOW WE EXECUTE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Strategy backed by the right tools, <span className="text-[#8E8E9F] italic font-light">not guesswork.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="bg-[#050505] border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
              <CheckCircle2 className="text-white/20 mb-6 h-6 w-6" />
              <div>
                <h3 className="text-sm font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-xs text-[#8E8E9F] leading-relaxed">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
