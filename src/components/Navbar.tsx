import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X, Smartphone, Search, Briefcase, Clapperboard, Zap, RefreshCcw } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const servicesList = [
    { title: 'Meta Ads Scaling', targetId: 'service-card-meta', Icon: Smartphone },
    { title: 'Google & YouTube Ads', targetId: 'service-card-google', Icon: Search },
    { title: 'High-Ticket B2B Lead Gen', targetId: 'service-card-leadgen', Icon: Briefcase },
    { title: 'Performance Creative Studio', targetId: 'service-card-studio', Icon: Clapperboard },
    { title: 'Conversion Rate Optimization', targetId: 'service-card-cro', Icon: Zap },
    { title: 'Retention & Email Automation', targetId: 'service-card-retention', Icon: RefreshCcw }
  ];

  // Hover handlers with debounce / grace period to prevent accidental closing
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  // Close on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSpecializationClick = (targetId: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    setActiveItem('Services');

    const scrollToCard = () => {
      const element = document.getElementById(targetId);
      if (!element) {
        const grid = document.getElementById('services-grid');
        grid?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Update hash without jumping
      window.history.pushState(null, '', `#${targetId}`);

      // Scroll with sticky header offset
      const navHeight = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });

      // Highlight card with yellow ring pulse and set focus
      if (!prefersReducedMotion) {
        element.classList.remove('highlight-yellow-pulse');
        void element.offsetWidth; // trigger reflow
        element.classList.add('highlight-yellow-pulse');
        setTimeout(() => {
          element.classList.remove('highlight-yellow-pulse');
        }, 1600);
      }

      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToCard, 150);
    } else {
      scrollToCard();
    }
  };

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#08080A]/85 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800/80 px-4 sm:px-6 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Tagline */}
        <a 
          href="/" 
          aria-label="AdvertBytes — Performance Marketing Agency Homepage" 
          className="flex flex-col items-center justify-center cursor-pointer group py-0.5"
        >
          <img 
            src="/logo.png" 
            alt="AdvertBytes — Performance Marketing Agency" 
            width={104}
            height={104}
            className="h-16 sm:h-20 md:h-[102px] w-auto object-contain transition-transform group-hover:scale-105 dark:bg-white dark:border-2 dark:border-gray-200 dark:rounded-xl dark:p-1.5" 
          />
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-0.5 whitespace-nowrap leading-none">
            Marketing Should Make Sense
          </span>
        </a>
        
        {/* Centered Navigation Pills */}
        <div className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-[#141519]/90 border border-gray-200/90 dark:border-gray-800 shadow-sm rounded-full p-1.5 relative">
          
          {/* Home */}
          <button
            onClick={() => handleNavClick('Home', '#top')}
            className={`cursor-pointer px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Home' 
                ? 'text-black dark:text-white bg-gray-100 dark:bg-white/10 ring-1 ring-[#FACC15]/40' 
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
            }`}
          >
            Home
          </button>

          {/* Services with Seamless Specializations Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => {
                setIsServicesOpen(prev => !prev);
              }}
              className={`cursor-pointer flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
                activeItem === 'Services' || isServicesOpen
                  ? 'text-black dark:text-white bg-gray-100 dark:bg-white/10 ring-1 ring-[#FACC15]/40' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-black dark:text-white' : 'opacity-60'}`} />
            </button>

            {/* Dropdown Menu Container with hover bridge buffer */}
            {isServicesOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-72 z-50 animate-in fade-in slide-in-from-top-1.5 duration-150"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Seamless hover bridge padding above the menu */}
                <div className="absolute -top-3 left-0 right-0 h-3 pointer-events-auto" />

                <div className="bg-white dark:bg-[#141519] rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-2xl p-2 grid grid-cols-1 gap-1">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 px-3 py-1">
                    Our Specializations
                  </div>
                  {servicesList.map((service, idx) => {
                    const IconComponent = service.Icon;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSpecializationClick(service.targetId)}
                        className="cursor-pointer flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100/90 dark:hover:bg-white/10 text-left transition-all duration-150 group/item hover:pl-3.5 w-full"
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-gray-100 dark:bg-black text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800 transition-all duration-150 group-hover/item:border-[#FACC15] group-hover/item:bg-[#FACC15] group-hover/item:text-black group-hover/item:scale-105">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-[13px] font-bold text-gray-700 dark:text-gray-200 group-hover/item:text-black dark:group-hover/item:text-white transition-colors">
                          {service.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Portfolio */}
          <button
            onClick={() => handleNavClick('Portfolio', '#portfolio')}
            className={`cursor-pointer px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Portfolio' 
                ? 'text-black dark:text-white bg-gray-100 dark:bg-white/10 ring-1 ring-[#FACC15]/40' 
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
            }`}
          >
            Portfolio
          </button>

          {/* Blog */}
          <button
            onClick={() => handleNavClick('Blog', '#blog')}
            className={`cursor-pointer px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Blog' 
                ? 'text-black dark:text-white bg-gray-100 dark:bg-white/10 ring-1 ring-[#FACC15]/40' 
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
            }`}
          >
            Blog
          </button>

          {/* Contact */}
          <button
            onClick={() => handleNavClick('Contact', '#contact')}
            className={`cursor-pointer px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-200 ${
              activeItem === 'Contact' 
                ? 'text-black dark:text-white bg-gray-100 dark:bg-white/10 ring-1 ring-[#FACC15]/40' 
                : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
            }`}
          >
            Contact
          </button>

        </div>

        {/* Right CTA + LinkedIn with Yellow Accent */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/advert-bytes/"
            target="_blank"
            rel="noreferrer"
            aria-label="AdvertBytes on LinkedIn"
            className="p-2.5 rounded-full border-[1.5px] border-gray-300 dark:border-gray-700 bg-white dark:bg-[#18191E] text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-[#FACC15] hover:border-[#FACC15] dark:hover:border-[#FACC15] hover:shadow-[0_0_12px_rgba(250,204,21,0.3)] transition-all cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="tel:8527120220"
            className="cursor-pointer flex items-center gap-2 rounded-full bg-[#0A0A0C] dark:bg-[#18191E] px-6 py-2.5 text-[13px] font-bold text-white hover:bg-black dark:hover:bg-[#202228] transition-all border-[1.5px] border-[#FACC15] shadow-[0_0_12px_rgba(250,204,21,0.25)] hover:shadow-[0_0_20px_rgba(250,204,21,0.45)]"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-4 w-4 text-[#FACC15]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer lg:hidden p-2 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 pb-5 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2 animate-in fade-in duration-200 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => handleNavClick('Home', '#top')}
            className="cursor-pointer text-left px-4 py-2.5 rounded-xl font-bold text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Home
          </button>
          
          {/* Services Accordion on Mobile */}
          <div>
            <button
              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              className="cursor-pointer w-full flex items-center justify-between px-4 py-2.5 rounded-xl font-bold text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              <span>Services</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesExpanded && (
              <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-[#FACC15] ml-4 mt-1">
                {servicesList.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSpecializationClick(service.targetId)}
                    className="cursor-pointer text-left px-3 py-2 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-[#FACC15] hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('Portfolio', '#portfolio')}
            className="cursor-pointer text-left px-4 py-2.5 rounded-xl font-bold text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Portfolio
          </button>
          <button
            onClick={() => handleNavClick('About', '#about')}
            className="cursor-pointer text-left px-4 py-2.5 rounded-xl font-bold text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('Blog', '#blog')}
            className="cursor-pointer text-left px-4 py-2.5 rounded-xl font-bold text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Blog
          </button>
          <button
            onClick={() => handleNavClick('Contact', '#contact')}
            className="cursor-pointer text-left px-4 py-2.5 rounded-xl font-bold text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5"
          >
            Contact
          </button>
          <a
            href="tel:8527120220"
            className="cursor-pointer flex items-center justify-center gap-2 rounded-full bg-[#0A0A0C] dark:bg-[#18191E] px-6 py-3 text-sm font-bold text-white transition-all border-[1.5px] border-[#FACC15] shadow-md mt-2"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="h-4 w-4 text-[#FACC15]" />
          </a>
        </div>
      )}

    </nav>
  );
};
