import React, { useState, useEffect } from 'react';
import { Send, Moon, Sun } from 'lucide-react';

export const FooterSummary: React.FC = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check time: 6 AM to 6 PM is light mode, otherwise dark mode
    const checkTimeAndTheme = () => {
      const hour = new Date().getHours();
      const shouldBeDark = hour < 6 || hour >= 18;
      
      const storedPref = localStorage.getItem('theme');
      if (storedPref) {
        setIsDark(storedPref === 'dark');
      } else {
        setIsDark(shouldBeDark);
      }
    };
    
    checkTimeAndTheme();
    const interval = setInterval(checkTimeAndTheme, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      alert('Thank you for subscribing!');
      setEmail('');
      setConsent(false);
    } else if (!consent) {
      alert('Please check the consent box to subscribe.');
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-[#1E2028] bg-white dark:bg-[#0A0A0C] text-[#0A0A0C] dark:text-white pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-gray-200 dark:border-[#1E2028]">
          
          {/* Column 1: Stay Connected */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#0A0A0C] dark:text-white tracking-tight">Stay Connected</h3>
            <p className="text-sm text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email Address"
                  className="w-full bg-gray-50 dark:bg-[#141519] border border-gray-300 dark:border-gray-600 rounded-full px-4 py-3 text-sm text-[#0A0A0C] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FFB800] focus:ring-2 focus:ring-[#FFB800] transition-colors pr-12"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="absolute right-1.5 p-2 rounded-full bg-[#0A0A0C] dark:bg-white text-white dark:text-black hover:bg-black dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#0A0A0C] focus:ring-[#0A0A0C] dark:focus:ring-white transition-all shadow-md"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-0.5 rounded bg-white dark:bg-[#141519] border-gray-300 dark:border-gray-600 text-[#FFB800] focus:ring-[#FFB800]"
                />
                <span>I consent to receiving marketing emails. We will only use this data to send you our newsletter.</span>
              </label>
            </form>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#0A0A0C] dark:text-white tracking-tight">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-gray-600 dark:text-[#9CA3AF]">
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#FFB800] transition-colors">Portfolio</a></li>
              <li><a href="#about" className="hover:text-[#FFB800] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#FFB800] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#0A0A0C] dark:text-white tracking-tight">Contact Us</h3>
            <div className="space-y-2.5 text-sm text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
              <p>Delhi, India</p>
              <p>Phone: <a href="tel:8527120220" className="hover:text-[#0A0A0C] dark:hover:text-white transition-colors">+91 85271 20220</a></p>
              <p>Email: <a href="mailto:Advertbytes@gmail.com" className="hover:text-[#0A0A0C] dark:hover:text-white transition-colors">Advertbytes@gmail.com</a></p>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#0A0A0C] dark:text-white tracking-tight">Follow Us</h3>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/share/1FeLh3a6ae/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#0A0A0C] dark:hover:text-white hover:border-[#FFB800] dark:hover:border-[#FFB800] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/advertbytes" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#0A0A0C] dark:hover:text-white hover:border-[#FFB800] dark:hover:border-[#FFB800] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/advertbytes" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#0A0A0C] dark:hover:text-white hover:border-[#FFB800] dark:hover:border-[#FFB800] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/advert-bytes/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#0A0A0C] dark:hover:text-white hover:border-[#FFB800] dark:hover:border-[#FFB800] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
            
            <div className="pt-4 no-invert">
              <h3 className="text-sm font-bold text-gray-600 dark:text-gray-400 tracking-tight mb-3">Appearance</h3>
              <button 
                onClick={() => setIsDark(!isDark)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-[#0A0A0C] dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors text-xs font-semibold"
              >
                {isDark ? <Sun className="h-4 w-4 text-[#FFB800]" /> : <Moon className="h-4 w-4 text-blue-400" />}
                {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a href="/" className="flex items-center gap-2 group cursor-pointer transition-opacity hover:opacity-80">
              <img src="/logo.png" alt="AdvertBytes Logo" className="h-8 w-auto object-contain dark:invert-0 invert" />
              <span className="font-black tracking-tight text-lg text-[#0A0A0C] dark:text-white font-sans">
                AdvertBytes
              </span>
            </a>
            <p className="mt-2 sm:mt-0">© {new Date().getFullYear()} AdvertBytes. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="/privacy" className="hover:text-[#0A0A0C] dark:hover:text-white focus:outline-none focus:underline transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-[#0A0A0C] dark:hover:text-white focus:outline-none focus:underline transition-colors">Terms of Service</a>
            <a href="/refund" className="hover:text-[#0A0A0C] dark:hover:text-white focus:outline-none focus:underline transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

