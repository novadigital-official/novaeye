'use client';

import { useState } from 'react';
import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export default function FaqSection() {
  const { lang, whatsappUrl } = useSite();
  const f = DICT.faq;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            Patient Questions & Clinical Answers
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#08111f] tracking-tight">
            {f.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {f.subtitle[lang]}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {f.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const panelId = `faq-panel-${idx}`;
            const triggerId = `faq-trigger-${idx}`;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  id={triggerId}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base text-[#08111f] hover:text-[#c5a059] transition-colors"
                >
                  <span>{item.q[lang]}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 border border-slate-200">
                    {isOpen ? <Minus className="w-4 h-4 text-[#c5a059]" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    <p>{item.a[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet Contact Link */}
        <div className="text-center pt-2">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a059] hover:text-[#b38e44] uppercase tracking-wider transition-colors"
          >
            <span>{f.moreCta[lang]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
