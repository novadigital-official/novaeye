'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { MessageSquare, ShieldCheck, Sparkles, Star, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const { lang, whatsappUrl } = useSite();
  const h = DICT.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a1628]">
      
      {/* Background Image with Dark Blue Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105 transform transition-transform duration-1000"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]" />
      
      {/* Glowing Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-amber-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{h.badge[lang]}</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
          {h.title1[lang]}{' '}
          <span className="text-amber-400 font-black">
            {h.titleHighlight[lang]}
          </span>
        </h1>

        {/* Subtitle / Package Inclusions */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal">
          {h.subtitle[lang]}
        </p>

        {/* Trust Highlight Pill */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <div className="flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{h.depositBadge[lang]}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{h.techBadge[lang]}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full text-white font-extrabold text-base sm:text-xl shadow-2xl transition-all"
          >
            <MessageSquare className="w-6 h-6 shrink-0" />
            <span>{h.cta[lang]}</span>
          </a>

          <p className="text-slate-400 text-xs sm:text-sm font-medium">
            {h.guarantee[lang]}
          </p>
        </div>

        {/* Social Proof Star Line */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white ml-1">4.9 / 5.0</span>
            <span className="text-amber-400 ml-1">Trustpilot</span>
          </div>
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>JCI Partner Hospitals</span>
          </div>
        </div>

      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400/60">
        <ChevronDown className="w-6 h-6" />
      </div>

    </section>
  );
}
