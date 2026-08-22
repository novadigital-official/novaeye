'use client';

import { useState, useEffect } from 'react';
import { useSite, Lang } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { MessageSquare, Globe, Menu, X, Eye } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, whatsappUrl } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const d = DICT.nav;

  const languages: { code: Lang; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg py-3 border-b border-amber-500/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Eye className="w-5 h-5 text-[#0a1628]" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
              MedTurkey<span className="text-amber-400 font-bold">Elite</span>
            </span>
            <span className="text-[10px] text-amber-200/80 -mt-1 font-medium tracking-wider">
              EYE SURGERY & SMART LENS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200">
          <a href="#packages" className="hover:text-amber-400 transition-colors">
            {d.packages[lang]}
          </a>
          <a href="#doctors" className="hover:text-amber-400 transition-colors">
            {d.doctors[lang]}
          </a>
          <a href="#process" className="hover:text-amber-400 transition-colors">
            {d.process[lang]}
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            {d.faq[lang]}
          </a>
        </nav>

        {/* Right CTA & Lang Switcher */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/20"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang.toUpperCase()}</span>
            </button>

            {langDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-[#0a1628] border border-amber-500/30 rounded-xl shadow-xl overflow-hidden py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdown(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center gap-2 hover:bg-amber-400/20 transition-colors ${
                      lang === l.code ? 'text-amber-400 font-bold bg-white/5' : 'text-slate-200'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* WhatsApp Action Button */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 text-xs font-extrabold shadow-md transition-all hover:scale-102"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{d.contactBtn[lang]}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white hover:text-amber-400"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a1628]/98 border-b border-amber-500/30 px-6 py-5 space-y-4 shadow-2xl">
          <a
            href="#packages"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-200 hover:text-amber-400 font-medium py-1"
          >
            {d.packages[lang]}
          </a>
          <a
            href="#doctors"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-200 hover:text-amber-400 font-medium py-1"
          >
            {d.doctors[lang]}
          </a>
          <a
            href="#process"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-200 hover:text-amber-400 font-medium py-1"
          >
            {d.process[lang]}
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="block text-slate-200 hover:text-amber-400 font-medium py-1"
          >
            {d.faq[lang]}
          </a>
          <div className="pt-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{d.contactBtn[lang]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
