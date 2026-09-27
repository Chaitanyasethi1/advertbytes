import { Routes, Route } from 'react-router-dom';

// Core Components
import { Navbar } from './components/Navbar';
import { FooterSummary } from './components/FooterSummary'; // Will use FooterSummary as default footer across all pages or keep HomeSections2 footer. Wait, App uses Footer from HomeSections2. Let's stick with that if possible, but FooterSummary has the newsletter form. I'll import Footer from HomeSections2.

import { CookieConsent } from './components/CookieConsent';

// Pages
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { RefundPolicy } from './pages/RefundPolicy';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F8F9FA] bg-grid-pattern text-[#0A0A0C] selection:bg-black selection:text-white font-sans overflow-x-hidden">
      {/* Subtle Noise Overlay for premium texture - Light Mode */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>

      <FooterSummary />
      <CookieConsent />
    </div>
  );
}
