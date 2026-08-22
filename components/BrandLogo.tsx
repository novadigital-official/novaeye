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
      {/* Precision Emblem Image: Swiss Ophthalmology Golden Eye & Refractive Aperture */}
      <div className={`${iconSize} relative rounded-xl overflow-hidden shadow-md border border-[#c5a059]/30 shrink-0 group-hover:border-[#c5a059] transition-all bg-[#FAF8F5]`}>
        <Image
          src="/images/antalya-vision-logo.jpg"
          alt="Antalya Vision Clinic Logo"
          fill
          sizes="48px"
          className="object-cover scale-110"
          priority
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-semibold tracking-tight uppercase ${textSize} ${variant === 'light' ? 'text-white' : 'text-[#08111f]'}`}>
            Antalya <span className="text-[#c5a059] font-bold">Vision</span>
          </div>
          <div className={`font-medium tracking-widest uppercase ${subtextSize} ${variant === 'light' ? 'text-[#c5a059]/90' : 'text-slate-500'}`}>
            Swiss Refractive Institute
          </div>
        </div>
      )}
    </div>
  );
}
