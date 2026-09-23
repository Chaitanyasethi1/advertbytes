import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FooterSummary: React.FC = () => {
  return (
    <footer className="border-t border-[#E5E7EB] bg-[#0A0A0C] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-[#22242D] pb-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0052FF] font-mono text-sm font-bold text-white">
                AB
              </div>
              <span className="font-extrabold text-xl tracking-tight">ADVERT BYTES</span>
            </div>
            <p className="mt-3 text-sm text-[#8E8E9F] max-w-md leading-relaxed">
              Performance marketing and creative growth engineering for category-defining brands. Based in Delhi, driving scale nationwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:contact@advertbytes.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#0052FF] px-6 py-3 text-xs font-bold text-white transition-all duration-200 hover:bg-[#0043D1] shadow-lg shadow-[#0052FF]/20"
            >
              <span>Initiate Growth Audit</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>© {new Date().getFullYear()} Advert Bytes. All campaign metrics verified & documented.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>MODERN DIGITAL AGENCY × EDITORIAL × PERFORMANCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
