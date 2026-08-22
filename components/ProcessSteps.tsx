'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { MessageSquare, Plane, Car, Sparkles } from 'lucide-react';

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
    <section id="process" className="py-20 sm:py-28 bg-[#0a1628] text-white border-b border-amber-500/20 scroll-mt-20 relative overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
            {pr.badge[lang]}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {pr.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {pr.subtitle[lang]}
          </p>
          <span className="inline-block mt-2 text-xs font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            {pr.vipTag[lang]}
          </span>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between space-y-4 card-hover backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-[#0a1628] flex items-center justify-center font-bold shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-amber-400/20">
                    {s.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-base text-white">
                    {s.t}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.d}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
