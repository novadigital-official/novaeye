'use client';

import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function BrandLogo({ variant = 'light', size = 'md', showText = true }: BrandLogoProps) {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base sm:text-lg';
  const subtextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]';

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Pure High-Definition Emblem Image */}
      <div className={`${iconSize} relative rounded-xl overflow-hidden shadow-sm border border-slate-200/80 shrink-0 group-hover:scale-105 transition-transform bg-[#F8FAFC]`}>
        <Image
          src="/images/antalya-vision-emblem.jpg"
          alt="Antalya Vision Clinic Emblem"
          fill
          sizes="48px"
          className="object-cover scale-125"
          priority
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-extrabold tracking-tight uppercase ${textSize} ${variant === 'light' ? 'text-white' : 'text-[#08111f]'}`}>
            Antalya <span className="text-teal-400">Vision</span>
          </div>
          <div className={`font-semibold tracking-widest uppercase ${subtextSize} ${variant === 'light' ? 'text-slate-400' : 'text-slate-500'}`}>
            Clinic
          </div>
        </div>
      )}
    </div>
  );
}
