'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { ArrowRight, ShieldCheck, Star, Check } from 'lucide-react';

export default function Hero() {
  const { lang, whatsappUrl } = useSite();
  const h = DICT.hero;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#08111f] overflow-hidden border-b border-white/10">
      
      {/* Background Architectural Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08111f]/95 via-[#08111f]/90 to-[#08111f]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">

        {/* Clinical Assurance Tagline */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#c5a059] tracking-widest uppercase">
          <span className="w-8 h-px bg-[#c5a059]/40" />
          <span>Antalya Surgical Suites · £0 Upfront Deposit</span>
          <span className="w-8 h-px bg-[#c5a059]/40" />
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
          {h.title1[lang]}{' '}
          <span className="text-[#c5a059] font-normal font-serif italic">
            {h.titleHighlight[lang]}
          </span>
        </h1>

        {/* Architectural Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
          {h.subtitle[lang]}
        </p>

        {/* Clean Clinical Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-1 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#c5a059]" />
            <span>{h.depositBadge[lang]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#c5a059]" />
            <span>{h.techBadge[lang]}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#c5a059]" />
            <span>JCI Partner Facilities</span>
          </div>
        </div>

        {/* Primary Action Section */}
        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide"
          >
            <span>{h.cta[lang]}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-slate-400 text-xs font-normal">
            {h.guarantee[lang]}
          </p>
        </div>

        {/* Institutional Accreditation Bar */}
        <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">4.9 / 5.0</p>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Trustpilot UK</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">25,000+</p>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Surgeries Completed</p>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">100%</p>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">Original ZEISS Optics</p>
          </div>
        </div>

      </div>

    </section>
  );
}
