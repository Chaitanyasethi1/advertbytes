import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0C] text-white p-4 sm:p-6 z-[100] shadow-2xl border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-300">
        <strong className="text-white">Cookie Policy</strong> - We use necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it. We won't set optional cookies unless you enable them. For more detailed information, see our <a href="/privacy" className="underline hover:text-[#FFB800]">Privacy Policy</a>.
      </div>
      <div className="flex gap-3 shrink-0">
        <button
          onClick={handleDecline}
          className="px-4 py-2 rounded-full border border-gray-600 text-sm font-bold hover:bg-gray-800 transition-colors"
        >
          Decline Optional
        </button>
        <button
          onClick={handleAccept}
          className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
