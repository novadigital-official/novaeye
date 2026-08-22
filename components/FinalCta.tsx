'use client';

import { useSite } from '@/lib/context';
import { MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';

export default function FinalCta() {
  const { lang, whatsappUrl } = useSite();

  const title = {
    en: 'Ready to Experience Crystal-Clear Vision?',
    fr: 'Prêt à Retrouver une Vision Parfaite ?',
    tr: 'Net ve Kusursuz Görüşe Hazır mısınız?'
  }[lang];

  const sub = {
    en: 'Get a free, no-obligation medical assessment today. Our ophthalmic coordinator responds within 15 minutes.',
    fr: 'Obtenez une évaluation médicale gratuite et sans engagement. Réponse sous 15 minutes.',
    tr: 'Bugün ücretsiz ve bağlayıcılığı olmayan hekim değerlendirmenizi alın. Koordinatörümüz 15 dakikada yanıtlar.'
  }[lang];

  const btn = {
    en: 'Start Free WhatsApp Consultation Now',
    fr: 'Démarrer la Consultation Gratuite sur WhatsApp',
    tr: 'WhatsApp ile Ücretsiz Ön Analiz Başlat'
  }[lang];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0a1628] via-[#10223d] to-[#0a1628] text-white relative overflow-hidden border-t border-amber-500/20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{lang === 'tr' ? '£0 Ön Kapora · Klinikte Öde' : '£0 Upfront Deposit · Pay on Arrival'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>

        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-cta inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 hover:from-red-600 hover:to-orange-600 text-white font-black text-base sm:text-xl shadow-2xl transition-all hover:scale-103"
          >
            <MessageSquare className="w-6 h-6 shrink-0" />
            <span>{btn}</span>
          </a>

          <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{lang === 'tr' ? '12 Ay Medikal Takip Garantisi' : '12-Month Post-Op Follow-Up Guarantee'}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
