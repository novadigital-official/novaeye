'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCta() {
  const { lang, whatsappUrl } = useSite();
  const c = DICT.finalCta;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0a1628] via-[#10223d] to-[#0a1628] text-white relative overflow-hidden border-t border-amber-500/20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{c.badge[lang]}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {c.title[lang]}
        </h2>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {c.sub[lang]}
        </p>

        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-black text-base sm:text-lg shadow-2xl transition-all"
          >
            <MessageSquare className="w-6 h-6 shrink-0" />
            <span>{c.btn[lang]}</span>
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{c.guarantee[lang]}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
