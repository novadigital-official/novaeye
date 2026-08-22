'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';

export default function ProcessSteps() {
  const { lang } = useSite();
  const pr = DICT.process;

  const steps = [
    { num: '01', t: pr.s1.t[lang], d: pr.s1.d[lang] },
    { num: '02', t: pr.s2.t[lang], d: pr.s2.d[lang] },
    { num: '03', t: pr.s3.t[lang], d: pr.s3.d[lang] },
    { num: '04', t: pr.s4.t[lang], d: pr.s4.d[lang] }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#08111f] text-white border-b border-white/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            Seamless 48-Hour Itinerary
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {pr.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {pr.subtitle[lang]}
          </p>
        </div>

        {/* 4 Connected Architectural Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#0e1a2d] border border-white/10 rounded-xl p-8 flex flex-col justify-between space-y-6 relative"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-2xl font-serif font-bold text-[#c5a059]">
                  {s.num}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase">
                  Phase {idx + 1}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 className="font-bold text-base text-white">
                  {s.t}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.d}
                </p>
              </div>

              <div className="pt-2 text-[11px] font-semibold text-[#c5a059] tracking-wider uppercase">
                VIP Protocol Included
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
