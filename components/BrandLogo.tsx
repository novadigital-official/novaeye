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
      {/* Precision Emblem Image: Modern Teal & Slate Ophthalmic Iris */}
      <div className={`${iconSize} relative rounded-xl overflow-hidden shadow-sm border border-slate-700/30 shrink-0 group-hover:scale-105 transition-all bg-white p-0.5`}>
        <Image
          src="/images/antalya-vision-logo.png"
          alt="Antalya Vision Clinic"
          fill
          sizes="48px"
          className="object-contain p-0.5"
          priority
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-bold tracking-tight uppercase ${textSize} ${variant === 'light' ? 'text-white' : 'text-[#08111f]'}`}>
            Antalya <span className="text-teal-400">Vision</span>
          </div>
          <div className={`font-semibold tracking-widest uppercase ${subtextSize} ${variant === 'light' ? 'text-slate-400' : 'text-slate-500'}`}>
            Refractive Clinic
          </div>
        </div>
      )}
    </div>
  );
}
