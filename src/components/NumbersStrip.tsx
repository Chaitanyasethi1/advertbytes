import React from 'react';
import { CountUpStat } from './CountUpStat';
import { TrendingUp, ShieldCheck, Zap, Target } from 'lucide-react';

export const NumbersStrip: React.FC = () => {
  const highlights = [
    {
      icon: TrendingUp,
      stat: '₹1.5Cr+',
      numericTarget: 1.5,
      prefix: '₹',
      suffix: 'Cr+',
      decimals: 1,
      label: 'Verified Revenue Generated',
    },
    {
      icon: Target,
      stat: '9.31x',
      numericTarget: 9.31,
      suffix: 'x',
      decimals: 2,
      label: 'Peak Return on Ad Spend',
    },
    {
      icon: Zap,
      stat: '35,000+',
      numericTarget: 35,
      suffix: 'K+',
      decimals: 0,
      label: 'Qualified Leads & Orders',
    },
    {
      icon: ShieldCheck,
      stat: '18+',
      numericTarget: 18,
      suffix: '+',
      decimals: 0,
      label: 'Scalable Brand Stories',
    },
  ];

  return (
    <div className="relative border-y border-[#E5E7EB] bg-white py-10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0F1F4] pb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0052FF]">
            Agency Benchmark
          </span>
          <span className="text-sm font-semibold text-[#0A0A0C]">
            Numbers Tell a Better Story
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0052FF]/10 text-[#0052FF]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0A0A0C]">
                    <CountUpStat
                      value={item.stat}
                      numericTarget={item.numericTarget}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      decimals={item.decimals}
                    />
                  </div>
                  <div className="text-xs font-medium text-[#6B7280]">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
