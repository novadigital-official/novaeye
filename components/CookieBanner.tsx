'use client';

import { useState, useEffect } from 'react';
import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';

export default function CookieBanner() {
  const { lang } = useSite();
  const [show, setShow] = useState(false);
  const c = DICT.cookie;

  useEffect(() => {
    const consent = localStorage.getItem('antalyavision_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('antalyavision_cookie_consent', 'accepted');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('antalyavision_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-md border-t border-amber-500/20 p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-300 text-center sm:text-left">
          {c.text[lang]}
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-3.5 py-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {c.decline[lang]}
          </button>
          <button
            onClick={accept}
            className="px-4 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-full transition-colors"
          >
            {c.accept[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
