'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { MessageSquare, Plane, Car, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProcessSteps() {
  const { lang } = useSite();
  const pr = DICT.process;

  const steps = [
    { num: '01', icon: MessageSquare, t: pr.s1.t[lang], d: pr.s1.d[lang] },
    { num: '02', icon: Plane, t: pr.s2.t[lang], d: pr.s2.d[lang] },
    { num: '03', icon: Car, t: pr.s3.t[lang], d: pr.s3.d[lang] },
    { num: '04', icon: Sparkles, t: pr.s4.t[lang], d: pr.s4.d[lang] }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#0a1628] text-white border-b border-amber-500/20 scroll-mt-20 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{pr.badge[lang]}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {pr.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            {pr.subtitle[lang]}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-amber-400/50 rounded-3xl p-6 relative flex flex-col justify-between space-y-4 card-hover backdrop-blur-md group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-[#0a1628] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-amber-400/30">
                    {s.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-base text-white group-hover:text-amber-300 transition-colors">
                    {s.t}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.d}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-bold text-amber-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{lang === 'tr' ? 'VIP Standart' : 'VIP All-Inclusive'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
