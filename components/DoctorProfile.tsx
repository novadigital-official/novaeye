'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Check, ArrowRight } from 'lucide-react';

export default function DoctorProfile() {
  const { lang, whatsappUrl } = useSite();
  const doc = DICT.doctor;

  return (
    <section id="doctors" className="py-24 sm:py-32 bg-[#f8fafc] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            Board-Certified Surgical Leadership
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#08111f] tracking-tight">
            {doc.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {doc.subtitle[lang]}
          </p>
        </div>

        {/* Editorial Doctor Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          <div className="md:col-span-5 relative min-h-[320px] bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop&q=80"
              alt={doc.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-[#c5a059] uppercase tracking-widest">
                  European Board Certified (FEBO) · 20+ Years
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#08111f] mt-1">{doc.name}</h3>
                <p className="text-slate-600 font-medium text-sm mt-0.5">{doc.role[lang]}</p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {doc.bio[lang]}
              </p>

              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>25,000+ Surgeries</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>ZEISS Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>JCI Partner Suites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>FEBO European Board</span>
                </div>
              </div>
            </div>

            <a
              href={whatsappUrl(doc.consultCta[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              <span>{doc.consultCta[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
