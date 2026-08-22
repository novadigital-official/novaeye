'use client';

import { useSite } from '@/lib/context';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const { lang, whatsappUrl } = useSite();

  const label = {
    en: 'Chat with Doctor Coordinator',
    fr: 'Parler avec un Coordinateur',
    tr: 'Doktor Koordinatörüne Yazın'
  }[lang];

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 float-animation cursor-pointer"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-bold text-xs">
          {label}
        </span>
      </a>
    </aside>
  );
}
