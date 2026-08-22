'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Lang = 'en' | 'fr' | 'tr';

interface SiteContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  whatsappNumber: string;
  whatsappUrl: (message?: string) => string;
}

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('antalyavision_lang') as Lang;
    if (saved && ['en', 'fr', 'tr'].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('antalyavision_lang', newLang);
  };

  const whatsappNumber = '905070871789';

  const whatsappUrl = (customMsg?: string) => {
    const defaultMsg = {
      en: 'Hello Antalya Vision Clinic, I would like to get a free consultation and quote for ZEISS Smart Lens / Laser Surgery in Antalya.',
      fr: 'Bonjour Antalya Vision Clinic, je souhaite obtenir une consultation gratuite et un devis pour la chirurgie oculaire à Antalya.',
      tr: 'Merhaba Antalya Vision Clinic, ZEISS Akıllı Lens ve Göz Lazer ameliyatı için ücretsiz danışmanlık ve fiyat bilgisi almak istiyorum.'
    }[lang];

    const text = customMsg || defaultMsg;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <SiteContext.Provider value={{ lang, setLang, whatsappNumber, whatsappUrl }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within SiteProvider');
  }
  return context;
}
