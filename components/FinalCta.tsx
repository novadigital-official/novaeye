'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCta() {
  const { lang, whatsappUrl } = useSite();
  const c = DICT.finalCta;

  return (
    <section className="py-24 sm:py-32 bg-[#08111f] text-white relative overflow-hidden border-b border-white/10">
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

        <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
          Direct Clinical Facilitation
        </p>

        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
          {c.title[lang]}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {c.sub[lang]}
        </p>

        <div className="pt-2 flex flex-col items-center justify-center gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-base font-semibold tracking-wide"
          >
            <span>{c.btn[lang]}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>{c.guarantee[lang]}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
