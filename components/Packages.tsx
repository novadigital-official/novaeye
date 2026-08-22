'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Check, ArrowRight } from 'lucide-react';

export default function Packages() {
  const { lang, whatsappUrl } = useSite();
  const pkg = DICT.packages;

  return (
    <section id="packages" className="py-24 sm:py-32 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            Transparent All-Inclusive Pricing
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#08111f] tracking-tight">
            {pkg.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {pkg.subtitle[lang]}
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* PACKAGE 1: Blepharoplasty (£1,049) */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between space-y-6 surface-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                  {pkg.pkg1.tag[lang]}
                </span>
                <span className="text-xs text-slate-500 font-medium">Antalya Clinic</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#08111f]">{pkg.pkg1.name[lang]}</h3>
                <p className="text-2xl font-bold text-[#08111f] mt-1">{pkg.pkg1.price}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'tr' ? '5★ Sahil Oteli + Cerrahi + VIP Transfer Dahil' : lang === 'fr' ? 'Forfait Tout Compris · Zéro Acompte' : 'All-Inclusive Package · £0 Upfront Deposit'}
                </p>
              </div>

              <div className="w-full h-px bg-slate-100" />

              <ul className="space-y-3 text-xs text-slate-600 font-medium">
                {pkg.pkg1.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl(pkg.pkg1.whatsapp[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center"
            >
              <span>{pkg.bookCta[lang]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* PACKAGE 2: ZEISS SMART LENS (£2,490) - FLAGSHIP VIP */}
          <div className="bg-[#08111f] text-white rounded-xl p-8 shadow-2xl flex flex-col justify-between space-y-6 relative border border-[#c5a059]/50 surface-dark-card">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#c5a059] uppercase tracking-widest">
                  {pkg.pkg2.tag[lang]}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {lang === 'tr' ? '15 Dk Operasyon' : lang === 'fr' ? '15 Min · Indolore' : '15-Min Procedure'}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{pkg.pkg2.name[lang]}</h3>
                <p className="text-3xl font-bold text-[#c5a059] mt-1">{pkg.pkg2.price}</p>
                <p className="text-xs text-slate-300 mt-1">
                  {lang === 'tr' ? 'İki Göz Dahil · 5★ Sahil Oteli · VIP Mercedes Vito Transfer' : lang === 'fr' ? '2 Yeux Inclus · Hôtel 5★ · Transfert VIP Mercedes' : 'Both Eyes Included · 5★ Beachfront Hotel · VIP Mercedes Transfer'}
                </p>
              </div>

              <div className="w-full h-px bg-white/10" />

              <ul className="space-y-3.5 text-xs text-slate-200 font-medium">
                {pkg.pkg2.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl(pkg.pkg2.whatsapp[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              <span>{pkg.bookCta[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* PACKAGE 3: No-Touch Laser (£1,190) */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between space-y-6 surface-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                  {pkg.pkg3.tag[lang]}
                </span>
                <span className="text-xs text-slate-500 font-medium">ZEISS VisuMax</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#08111f]">{pkg.pkg3.name[lang]}</h3>
                <p className="text-2xl font-bold text-[#08111f] mt-1">{pkg.pkg3.price}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {lang === 'tr' ? 'ZEISS Femtosaniye Lazer · 5★ Otel Dahil' : lang === 'fr' ? 'Système ZEISS VisuMax · Hôtel 5★ Inclus' : 'ZEISS VisuMax System · 5★ Hotel Included'}
                </p>
              </div>

              <div className="w-full h-px bg-slate-100" />

              <ul className="space-y-3 text-xs text-slate-600 font-medium">
                {pkg.pkg3.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{feat[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappUrl(pkg.pkg3.whatsapp[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center"
            >
              <span>{pkg.bookCta[lang]}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
