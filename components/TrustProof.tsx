'use client';

import { useSite } from '@/lib/context';
import { DICT } from '@/lib/i18n';
import { Star, ShieldCheck, Heart } from 'lucide-react';

export default function TrustProof() {
  const { lang } = useSite();
  const p = DICT.proof;

  const gallery = [
    {
      img: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=500&h=500&fit=crop&q=80',
      title: p.gallery1[lang],
      tech: 'ZEISS VisuMax Laser'
    },
    {
      img: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?w=500&h=500&fit=crop&q=80',
      title: p.gallery2[lang],
      tech: 'ZEISS Trifocal IOL'
    },
    {
      img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop&q=80',
      title: p.gallery3[lang],
      tech: 'Surgical Blepharoplasty'
    },
    {
      img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=500&fit=crop&q=80',
      title: p.gallery4[lang],
      tech: 'Presbyopia Correction'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {p.title[lang]}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {p.subtitle[lang]}
          </p>
        </div>

        {/* 3 Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">{p.trustpilot}</p>
              <p className="text-xs text-slate-500">1,700+ Verified Reviews</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">{p.jci[lang]}</p>
              <p className="text-xs text-slate-500">
                {lang === 'tr' ? 'A++ Sağlık Standartları' : lang === 'fr' ? 'Standards Internationaux' : 'International Healthcare Standards'}
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">{p.happy[lang]}</p>
              <p className="text-xs text-slate-500">
                {lang === 'tr' ? '%99 Hasta Memnuniyeti' : lang === 'fr' ? 'Taux de Satisfaction 99%' : '99% Patient Satisfaction'}
              </p>
            </div>
          </div>

        </div>

        {/* 4 Treatment Showcase Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 right-2.5 bg-[#0a1628]/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                  {item.tech}
                </div>
              </div>
              <div className="p-3.5 text-center bg-white border-t border-slate-100">
                <h3 className="font-semibold text-xs sm:text-sm text-slate-800 leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
