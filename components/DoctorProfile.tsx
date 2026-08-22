'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Award, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

export default function DoctorProfile() {
  const { lang, whatsappUrl } = useSite();
  const doc = DICT.doctor;

  return (
    <section id="doctors" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            {doc.badge[lang]}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {doc.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {doc.subtitle[lang]}
          </p>
        </div>

        {/* Doctor Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          
          <div className="md:col-span-5 h-72 md:h-full relative overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=700&fit=crop&q=80"
              alt={doc.name}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{doc.exp[lang]}</span>
                </span>
                <span className="bg-blue-100 text-blue-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>{doc.certified[lang]}</span>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">{doc.name}</h3>
              <p className="text-amber-600 font-semibold text-sm mt-0.5">{doc.role[lang]}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {doc.bio[lang]}
            </p>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>25,000+ Surgeries</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ZEISS Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>JCI Partner Suites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>FEBO European Board</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={whatsappUrl(doc.consultCta[lang])}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{doc.consultCta[lang]}</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
