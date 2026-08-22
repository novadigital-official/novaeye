'use client';

import { useState, useEffect } from 'react';
import { useSite } from '@/lib/context';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const { lang } = useSite();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('medturkey_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('medturkey_cookie_consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('medturkey_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  const text = {
    en: '🍪 We use cookies to provide a personalized medical consultation experience. By continuing, you agree to our privacy standards.',
    fr: '🍪 Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez nos normes de confidentialité.',
    tr: '🍪 Size en iyi medikal danışmanlık deneyimini sunmak için çerezleri kullanıyoruz. Sitemizi kullanarak gizlilik ilkelerimizi kabul etmiş olursunuz.'
  }[lang];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-t border-amber-500/20 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-300 text-center sm:text-left">
          {text}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-3.5 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {lang === 'tr' ? 'Reddet' : 'Decline'}
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-full transition-colors"
          >
            {lang === 'tr' ? 'Kabul Et' : 'Accept All'}
          </button>
        </div>
      </div>
    </div>
  );
}
