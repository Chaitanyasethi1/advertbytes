import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CountUpStat } from './CountUpStat';
import { CLIENT_LOGOS } from '../data/portfolioData';

export const ServicesGridSection = () => {
  const services = [
    { title: 'SEO, AEO & GEO', desc: 'Get found across search, maps and AI-powered discovery.' },
    { title: 'Performance Marketing', desc: 'Google & Meta campaigns built for ROAS, not vanity clicks.' },
    { title: 'Social Media Marketing', desc: 'Strategy, content and creative that builds a brand people follow.' },
    { title: 'Influencer Marketing', desc: 'The right creator, the right audience, the right story.' },
    { title: 'WhatsApp Marketing', desc: 'Turn conversations into customers.' },
  ];

  return (
    <section className="bg-[#050505] py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052FF]">
              WHAT WE OWN FOR YOU
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Everything You Need to Grow Digitally.
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#0052FF] transition-colors uppercase tracking-widest">
            View all services <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div key={i} className="group bg-[#0A0A0C] border border-white/5 p-8 rounded-3xl hover:bg-[#111] transition-colors cursor-pointer flex flex-col justify-between h-64">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-[#8E8E9F] text-sm leading-relaxed">{svc.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0052FF] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Explore service <ArrowUpRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ResultsStripSection = () => {
  const stats = [
    { val: '13.05', label: 'Revenue (Greenways)', prefix: '₹', suffix: 'L+', decimals: 2 },
    { val: '9.31', label: 'ROAS (Greenways)', suffix: 'x', decimals: 2 },
    { val: '352', label: 'Orders (Sole House)', decimals: 0 },
    { val: '800', label: 'Leads (Surface)', suffix: '+', decimals: 0 },
    { val: '60', label: 'ROAS (Grodd)', suffix: 'x', decimals: 0 },
  ];

  return (
    <section className="bg-[#0052FF] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-xs font-bold uppercase tracking-widest text-white/80">NUMBERS TELL A BETTER STORY</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">
                <CountUpStat value={`${s.prefix || ''}${s.val}${s.suffix || ''}`} numericTarget={Number(s.val)} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-white/70">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ClientLogoStripSection = () => {
  return (
    <section className="bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E8E9F]">
          BRANDS WE'VE WORKED WITH
        </div>
        <p className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
          From ecommerce and fashion to jewellery, food, wellness, education, interiors and local businesses — we've worked across different industries and business models.
        </p>
      </div>
      <div className="flex gap-8 items-center animate-scroll opacity-50 hover:opacity-100 transition-opacity">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
          <span key={i} className="text-2xl font-black text-white whitespace-nowrap px-8">
            {logo.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export const ComparisonSection = () => {
  return (
    <section className="bg-[#0A0A0C] py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0052FF]">
            WHY ADVERT BYTES
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            The difference between an agency and a growth partner.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10">
          <div className="bg-[#0052FF] p-10 md:p-16">
            <h3 className="text-2xl font-black text-white mb-8">Advert Bytes</h3>
            <ul className="space-y-6 text-white font-medium">
              <li className="flex gap-3"><ArrowRight className="h-5 w-5 shrink-0" /> Strategy before execution — we understand your business first</li>
              <li className="flex gap-3"><ArrowRight className="h-5 w-5 shrink-0" /> Creativity with a clear purpose and direction</li>
              <li className="flex gap-3"><ArrowRight className="h-5 w-5 shrink-0" /> Decisions driven by performance data</li>
              <li className="flex gap-3"><ArrowRight className="h-5 w-5 shrink-0" /> Transparent communication, no jargon</li>
              <li className="flex gap-3"><ArrowRight className="h-5 w-5 shrink-0" /> Strategy built around your actual business</li>
            </ul>
          </div>
          <div className="bg-[#050505] p-10 md:p-16">
            <h3 className="text-2xl font-bold text-white mb-8">Typical Agency</h3>
            <ul className="space-y-6 text-[#8E8E9F]">
              <li className="flex gap-3"><span className="text-white/20">—</span> Jumps straight into running ads</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Creative for the sake of looking good</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Reports vanity metrics like likes and impressions</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Confusing reports, unclear next steps</li>
              <li className="flex gap-3"><span className="text-white/20">—</span> Pre-built, one-size-fits-all playbooks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="bg-[#050505] py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E8E9F]">
          IN THEIR WORDS
        </div>
        <div className="bg-[#0A0A0C] border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto border-dashed">
          <p className="text-xl text-[#6B7280] italic">
            [ Placeholder for real client testimonials ]<br/>
            <span className="text-sm not-italic mt-4 block text-[#4A4A5A]">Real quotes will be inserted here upon client approval to maintain 100% authenticity.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="bg-[#0A0A0C] py-32 border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
          Your Next Growth Story Could Start Here.
        </h2>
        <p className="text-[#A1A1AA] text-lg sm:text-xl mb-12 max-w-2xl mx-auto">
          Let's talk about your business, your goals and what we can build together.
        </p>
        <button className="rounded-full bg-[#0052FF] px-10 py-5 text-sm font-bold text-white hover:bg-white hover:text-black transition-all inline-flex items-center gap-3">
          Talk to Advert Bytes <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-5 w-5 bg-[#0052FF]" />
            <span className="font-extrabold tracking-tight text-2xl text-white">Advert Bytes</span>
          </div>
          <p className="text-[#6B7280] text-sm">
            Digital Marketing. Built for Growth.<br/>
            Delhi, India.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-[#8E8E9F]">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-[#8E8E9F]">
            <li><a href="#" className="hover:text-white transition-colors">SEO, AEO & GEO</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Performance Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Social & Influencer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">WhatsApp Marketing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Connect</h4>
          <ul className="space-y-3 text-sm text-[#8E8E9F]">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">X</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-[#4A4A5A]">
        <p>© 2026 Advert Bytes. All Rights Reserved. — Digital Marketing Agency in Delhi.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
