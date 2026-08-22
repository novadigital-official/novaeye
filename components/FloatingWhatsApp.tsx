'use client';

import { useSite } from '@/lib/context';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { lang, whatsappUrl } = useSite();

  const label = {
    en: 'Doctor Coordinator',
    fr: 'Coordinateur Médical',
    tr: 'Doktor Koordinatörü'
  }[lang];

  return (
    <aside aria-label="WhatsApp Consultation" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#08111f] hover:bg-[#0e1a2d] text-white border border-[#c5a059]/50 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
      >
        <div className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
        <MessageSquare className="w-4 h-4 text-[#c5a059]" />
        <span className="hidden sm:inline font-medium text-xs tracking-wide">
          {label}
        </span>
      </a>
    </aside>
  );
}
