'use client';

import { useState } from 'react';
import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const { lang } = useSite();
  const f = DICT.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            {f.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {f.subtitle[lang]}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {f.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? 'border-amber-400 bg-amber-50/20 shadow-sm' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0a1628] hover:text-amber-600 transition-colors"
                >
                  <span>{item.q[lang]}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-amber-600' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    <p>{item.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
