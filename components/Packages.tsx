'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Check, Sparkles, Star, MessageSquare, Eye, Award, Shield } from 'lucide-react';

export default function Packages() {
  const { lang, whatsappUrl } = useSite();
  const pkg = DICT.packages;

  return (
    <section id="packages" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{pkg.badge[lang]}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1628] tracking-tight">
            {pkg.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {pkg.subtitle[lang]}
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* PACKAGE 1: Blepharoplasty (£1,049) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm flex flex-col justify-between space-y-6 card-hover relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#0a1628]">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold bg-slate-100 text-slate-700 px-3 py-1 rounded-full uppercase">
                  {pkg.pkg1.tag[lang]}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0a1628]">{pkg.pkg1.name[lang]}</h3>
                <p className="text-2xl font-extrabold text-amber-600 mt-1">{pkg.pkg1.price}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'tr' ? '5★ Otel + Cerrahi + VIP Transfer Dahil' : 'All-Inclusive Package · £0 Upfront Deposit'}
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-600 font-medium pt-2">
                {pkg.pkg1.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl(`Hello, I would like to get a quote for the Eyelid Blepharoplasty package (${pkg.pkg1.price}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0a1628] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{pkg.bookCta[lang]}</span>
            </a>
          </div>

          {/* PACKAGE 2: ZEISS SMART LENS (£2,490) - FLAGSHIP VIP */}
          <div className="bg-gradient-to-br from-[#0a1628] via-[#10223d] to-[#0a1628] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between space-y-6 card-hover relative border-2 border-amber-400">
            {/* VIP Floating Badge */}
            <div className="absolute -top-3.5 left-8 bg-amber-400 text-[#0a1628] font-black text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{pkg.pkg2.tag[lang]}</span>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
                  {lang === 'tr' ? '15 Dk Operasyon' : '15-Min Procedure'}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">{pkg.pkg2.name[lang]}</h3>
                <p className="text-3xl font-black text-amber-400 mt-1">{pkg.pkg2.price}</p>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === 'tr' ? 'İki Göz Dahil · 5★ Sahil Oteli · VIP Mercedes Transfer' : 'Both Eyes Included · 5★ Beachfront Hotel · VIP Transfers'}
                </p>
              </div>

              <ul className="space-y-3 text-xs text-slate-200 font-medium pt-2">
                {pkg.pkg2.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl(`Hello, I am interested in the ZEISS Trifocal Smart Lens VIP package (${pkg.pkg2.price}). Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{pkg.bookCta[lang]}</span>
            </a>
          </div>

          {/* PACKAGE 3: No-Touch Laser (£1,190) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm flex flex-col justify-between space-y-6 card-hover relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-[#0a1628]">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-extrabold bg-slate-100 text-slate-700 px-3 py-1 rounded-full uppercase">
                  {pkg.pkg3.tag[lang]}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0a1628]">{pkg.pkg3.name[lang]}</h3>
                <p className="text-2xl font-extrabold text-amber-600 mt-1">{pkg.pkg3.price}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'tr' ? 'ZEISS Femtosaniye Lazer · 5★ Otel Dahil' : 'ZEISS VisuMax System · 5★ Hotel Included'}
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-600 font-medium pt-2">
                {pkg.pkg3.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl(`Hello, I would like to get a quote for the No-Touch Laser Eye Surgery package (${pkg.pkg3.price}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-[#0a1628] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{pkg.bookCta[lang]}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
