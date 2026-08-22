'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { ShieldCheck, Award, Users } from 'lucide-react';

export default function TrustProof() {
  const { lang } = useSite();
  const p = DICT.proof;

  const gallery = [
    {
      img: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=600&fit=crop&q=80',
      title: p.gallery1[lang],
      tech: 'ZEISS VisuMax Laser'
    },
    {
      img: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=600&h=600&fit=crop&q=80',
      title: p.gallery2[lang],
      tech: 'ZEISS Trifocal IOL'
    },
    {
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop&q=80',
      title: p.gallery3[lang],
      tech: 'Surgical Blepharoplasty'
    },
    {
      img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=600&fit=crop&q=80',
      title: p.gallery4[lang],
      tech: 'Presbyopia Correction'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#f8fafc] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            Clinical Excellence & Accreditations
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#08111f] tracking-tight">
            {p.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {p.subtitle[lang]}
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#08111f] flex items-center justify-center text-[#c5a059]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Trustpilot 4.9 ★★★★★</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'tr' ? '1.700+ Doğrulanmış İngiliz ve Avrupalı hasta değerlendirmesi.' : 'Over 1,700 verified UK and international patient reviews with a 4.9/5 score.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#08111f] flex items-center justify-center text-[#c5a059]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{p.jci[lang]}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'tr' ? 'T.C. Sağlık Bakanlığı ruhsatlı A++ cerrahi hastane kompleksleri.' : 'Accredited high-volume surgical hospitals meeting European safety protocols.'}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#08111f] flex items-center justify-center text-[#c5a059]">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">{p.happy[lang]}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {lang === 'tr' ? '25 yılı aşkın cerrahi tecrübe ile ömür boyu gözlüksüz net görüş.' : 'Over 20 years of surgical expertise restoring permanent crystal vision.'}
            </p>
          </div>

        </div>

        {/* 4 Clinical Treatment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#08111f]/90 text-[#c5a059] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                  {item.tech}
                </div>
              </div>
              <div className="p-4 bg-white border-t border-slate-100">
                <h4 className="font-bold text-sm text-[#08111f] leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
