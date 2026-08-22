'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Eye, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { lang } = useSite();
  const f = DICT.footer;

  return (
    <footer className="bg-[#050c17] text-slate-400 text-xs border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-[#0a1628]">
                <Eye className="w-4 h-4" />
              </div>
              <span className="text-white font-extrabold text-lg">
                Antalya<span className="text-amber-400">Vision</span>
              </span>
              <span className="text-[10px] text-amber-200/80 bg-white/10 px-2 py-0.5 rounded-full font-bold ml-1">
                NOVA GROUP
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {lang === 'tr'
                ? 'Antalya\'nın T.C. Sağlık Bakanlığı ruhsatlı A++ hastanelerinde dünya standardı ZEISS Akıllı Lens ve No-Touch Lazer cerrahisi koordinasyonu.'
                : 'Premium European-standard ZEISS Trifocal Smart Lens and Laser Eye Surgery coordination in licensed partner healthcare facilities in Antalya.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">{DICT.nav.packages[lang]}</a></li>
              <li><a href="#doctors" className="hover:text-amber-400 transition-colors">{DICT.nav.doctors[lang]}</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">{DICT.nav.process[lang]}</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">{DICT.nav.faq[lang]}</a></li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              {lang === 'tr' ? 'Antalya Koordinasyon' : 'Antalya Coordination'}
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Lara & Muratpaşa Partner Hospital Suites, Antalya</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@antalyavisionclinic.com</span>
              </p>
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>T.C. Ministry of Health Licensed Partners</span>
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 text-[11px] leading-relaxed text-slate-400 text-center max-w-5xl mx-auto">
          <p>{f.disclaimer[lang]}</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800/80 pt-6 text-center text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Antalya Vision Clinic — Part of Nova Medical Group. {f.rights[lang]}</p>
        </div>

      </div>
    </footer>
  );
}
