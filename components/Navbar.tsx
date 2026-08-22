'use client';

import { useState, useEffect, useRef } from 'react';
import { useSite, Lang } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Globe, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, whatsappUrl } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const d = DICT.nav;

  const languages: { code: Lang; label: string }[] = [
    { code: 'en', label: 'English (UK)' },
    { code: 'fr', label: 'Français' },
    { code: 'tr', label: 'Türkçe' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#08111f]/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Institutional Brand Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-[#0e1a2d] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] font-serif font-bold text-sm tracking-wider shadow-sm">
            AV
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-base sm:text-lg tracking-tight uppercase">
              Antalya Vision
            </span>
            <span className="text-[9px] text-[#c5a059] font-medium tracking-widest uppercase -mt-0.5">
              Refractive Institute
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-300 tracking-wide">
          <a href="#packages" className="hover:text-[#c5a059] transition-colors">{d.packages[lang]}</a>
          <a href="#doctors" className="hover:text-[#c5a059] transition-colors">{d.doctors[lang]}</a>
          <a href="#process" className="hover:text-[#c5a059] transition-colors">{d.process[lang]}</a>
          <a href="#faq" className="hover:text-[#c5a059] transition-colors">{d.faq[lang]}</a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium transition-colors border border-white/15"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#c5a059]" />
              <span className="uppercase tracking-wider">{lang}</span>
            </button>

            {langDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-[#0e1a2d] border border-white/15 rounded-lg shadow-2xl overflow-hidden py-1 z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdown(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium transition-colors ${
                      lang === l.code ? 'text-[#c5a059] bg-white/5 font-semibold' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Consultation Button */}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#c5a059] hover:bg-[#b38e44] text-[#08111f] text-xs font-semibold tracking-wide transition-all shadow-sm"
          >
            <span>{d.contactBtn[lang]}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-300" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#08111f]/98 border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl">
          <a href="#packages" onClick={() => setMobileOpen(false)} className="block text-slate-200 hover:text-[#c5a059] font-medium py-1.5 text-sm">{d.packages[lang]}</a>
          <a href="#doctors" onClick={() => setMobileOpen(false)} className="block text-slate-200 hover:text-[#c5a059] font-medium py-1.5 text-sm">{d.doctors[lang]}</a>
          <a href="#process" onClick={() => setMobileOpen(false)} className="block text-slate-200 hover:text-[#c5a059] font-medium py-1.5 text-sm">{d.process[lang]}</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-slate-200 hover:text-[#c5a059] font-medium py-1.5 text-sm">{d.faq[lang]}</a>
          <div className="pt-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              <span>{d.contactBtn[lang]}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
