import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X, Smartphone, Search, Briefcase, Clapperboard, Zap, RefreshCcw } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const servicesList = [
    { title: 'Meta Ads Scaling', href: '#services', Icon: Smartphone },
    { title: 'Google & YouTube Ads', href: '#services', Icon: Search },
    { title: 'High-Ticket B2B Lead Gen', href: '#services', Icon: Briefcase },
    { title: 'Performance Creative Studio', href: '#services', Icon: Clapperboard },
    { title: 'Conversion Rate Optimization', href: '#services', Icon: Zap },
    { title: 'Retention & Email Automation', href: '#services', Icon: RefreshCcw }
  ];

  const handleNavClick = (label: string, href: string) => {
    setActiveItem(label);
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);

    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/80 px-6 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center cursor-pointer group">
          <img src="/logo.png" alt="AdvertBytes Logo" className="h-14 md:h-[68px] w-auto object-contain transition-transform group-hover:scale-105 dark:bg-white dark:border-2 dark:border-gray-200 dark:rounded-xl dark:p-1.5" />
        </a>
        
        {/* Centered Navigation Pills */}
        <div className="hidden lg:flex items-center gap-1 bg-white dark:bg-[#0A0A0C] border border-gray-200/90 shadow-sm rounded-full p-1.5 relative">
          
          {/* Home */}
          <button
            onClick={() => handleNavClick('Home', '#top')}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Home' ? 'text-black bg-gray-100' : 'text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-50'
            }`}
          >
            Home
          </button>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              onClick={() => handleNavClick('Services', '#services')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
                activeItem === 'Services' ? 'text-black bg-gray-100' : 'text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-50'
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-black' : 'opacity-60'}`} />
            </button>

            {/* Dropdown Menu */}
            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white dark:bg-[#0A0A0C] rounded-2xl border border-gray-200/80 shadow-xl p-2.5 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                {servicesList.map((service, idx) => {
                  const IconComponent = service.Icon;
                  return (
                    <a
                      key={idx}
                      href={service.href}
                      onClick={() => handleNavClick('Services', service.href)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-300 group/item hover:pl-4 hover:shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-gray-100 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 transition-colors duration-300 group-hover/item:bg-[#0A0A0C] group-hover/item:text-[#FFB800] group-hover/item:border-gray-800">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[13px] font-bold text-gray-600 dark:text-gray-300 group-hover/item:text-[#0A0A0C] transition-colors">
                        {service.title}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Portfolio */}
          <button
            onClick={() => handleNavClick('Portfolio', '#portfolio')}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Portfolio' ? 'text-black bg-gray-100' : 'text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-50'
            }`}
          >
            Portfolio
          </button>

          {/* Blog */}
          <button
            onClick={() => handleNavClick('Blog', '#blog')}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Blog' ? 'text-black bg-gray-100' : 'text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-50'
            }`}
          >
            Blog
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('Contact', '#contact')}
            className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Contact' ? 'text-black bg-gray-100' : 'text-gray-600 dark:text-gray-300 hover:text-black hover:bg-gray-50'
            }`}
          >
            Contact
          </button>

        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:text-black hover:border-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="tel:8527120220"
            className="flex items-center gap-2 rounded-full bg-[#0A0A0C] px-6 py-2.5 text-[13px] font-bold text-white hover:bg-black transition-all shadow-md hover:shadow-lg"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3 animate-in fade-in duration-200">
          <button
            onClick={() => handleNavClick('Home', '#top')}
            className="text-left px-4 py-2 rounded-xl font-bold text-sm text-gray-800 hover:bg-gray-50"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('Services', '#services')}
            className="text-left px-4 py-2 rounded-xl font-bold text-sm text-gray-800 hover:bg-gray-50"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('Portfolio', '#portfolio')}
            className="text-left px-4 py-2 rounded-xl font-bold text-sm text-gray-800 hover:bg-gray-50"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick('About', '#about')}
            className="text-left px-4 py-2 rounded-xl font-bold text-sm text-gray-800 hover:bg-gray-50"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('Blog', '#blog')}
            className="text-left px-4 py-2 rounded-xl font-bold text-sm text-gray-800 hover:bg-gray-50"
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('Contact', '#contact')}
            className="text-left px-4 py-2 rounded-xl font-bold text-sm text-gray-800 hover:bg-gray-50"
          >
            Contact
          </button>
          <a
            href="tel:8527120220"
            className="mt-2 text-center rounded-full bg-[#0A0A0C] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-black"
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </nav>
  );
};
