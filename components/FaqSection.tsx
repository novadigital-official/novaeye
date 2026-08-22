'use client';

import { useState } from 'react';
import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FaqSection() {
  const { lang, whatsappUrl } = useSite();
  const f = DICT.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">FAQ</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {f.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {f.subtitle[lang]}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {f.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const triggerId = `faq-trigger-${idx}`;
            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? 'border-amber-400 bg-amber-50/30' : 'border-slate-200 bg-white'
                }`}
              >
                <button
                  id={triggerId}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-800 hover:text-amber-600 transition-colors"
                >
                  <span>{item.q[lang]}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-amber-600' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                  >
                    <p>{item.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mini CTA */}
        <div className="text-center pt-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{f.moreCta[lang]}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
