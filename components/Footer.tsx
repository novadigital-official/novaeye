'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { lang } = useSite();
  const f = DICT.footer;

  return (
    <footer className="bg-[#050b15] text-slate-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Institutional Identity */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-[#0e1a2d] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-serif font-bold text-xs">
                AV
              </div>
              <span className="text-white font-semibold text-base tracking-tight uppercase">
                Antalya Vision <span className="text-slate-500 font-normal">| Refractive Institute</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {f.brandDesc[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest text-[#c5a059]">
              {f.quickLinks[lang]}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#packages" className="hover:text-white transition-colors">{DICT.nav.packages[lang]}</a></li>
              <li><a href="#doctors" className="hover:text-white transition-colors">{DICT.nav.doctors[lang]}</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">{DICT.nav.process[lang]}</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">{DICT.nav.faq[lang]}</a></li>
            </ul>
          </div>

          {/* Clinical Accreditation */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-widest text-[#c5a059]">
              {f.coordination[lang]}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059] shrink-0 mt-0.5" />
                <span>Lara & Muratpaşa Partner Hospital Suites, Antalya, Turkey</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <a href="mailto:info@antalyavisionclinic.com" className="hover:text-white transition-colors">
                  info@antalyavisionclinic.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                <span>T.C. Ministry of Health Licensed Partners</span>
              </p>
            </div>
          </div>

        </div>

        {/* Formal Legal Disclaimer */}
        <div className="p-5 bg-white/[0.02] rounded-lg border border-white/10 text-[11px] leading-relaxed text-slate-500 text-center max-w-5xl mx-auto">
          <p>{f.disclaimer[lang]}</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} Antalya Vision Institute. {f.rights[lang]}</p>
          <p className="text-slate-600">European Refractive Surgery Coordination</p>
        </div>

      </div>
    </footer>
  );
}
