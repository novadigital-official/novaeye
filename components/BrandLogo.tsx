'use client';

import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function BrandLogo({ variant = 'light', size = 'md', showText = true }: BrandLogoProps) {
  const iconSize = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base sm:text-lg';
  const subtextSize = size === 'sm' ? 'text-[8px]' : size === 'lg' ? 'text-[10px]' : 'text-[9px]';

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Precision Emblem: Stylized Optical Iris + ZEISS Trifocal Lens Arc + Focus Diamond in Obsidian & Champagne Gold */}
      <div className={`${iconSize} rounded-lg bg-gradient-to-b from-[#0e1a2d] to-[#08111f] p-1.5 flex items-center justify-center border border-[#c5a059]/40 shadow-sm shrink-0 group-hover:border-[#c5a059] transition-colors`}>
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Elliptical Eye Contours */}
          <path
            d="M3 18C7.5 10 13.5 6 18 6C22.5 6 28.5 10 33 18C28.5 26 22.5 30 18 30C13.5 30 7.5 26 3 18Z"
            stroke="url(#goldGradientAV)"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Concentric Trifocal Lens Ring (Optical Zone) */}
          <circle
            cx="18"
            cy="18"
            r="6.5"
            stroke="#c5a059"
            strokeWidth="1.25"
            strokeDasharray="2 1.5"
          />

          {/* Inner Precision Iris Aperture */}
          <circle
            cx="18"
            cy="18"
            r="3.5"
            stroke="#f5e6c8"
            strokeWidth="1.5"
          />

          {/* Central 20/20 Crystal Star Focus */}
          <path
            d="M18 13.5V22.5M13.5 18H22.5"
            stroke="#ffffff"
            strokeWidth="1.25"
            strokeLinecap="round"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradientAV" x1="3" y1="6" x2="33" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e5c07b" />
              <stop offset="0.5" stopColor="#c5a059" />
              <stop offset="1" stopColor="#997a3d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-semibold tracking-tight uppercase ${textSize} ${variant === 'light' ? 'text-white' : 'text-[#08111f]'}`}>
            Antalya <span className="text-[#c5a059] font-bold">Vision</span>
          </div>
          <div className={`font-medium tracking-widest uppercase ${subtextSize} ${variant === 'light' ? 'text-[#c5a059]/90' : 'text-slate-500'}`}>
            Refractive Institute
          </div>
        </div>
      )}
    </div>
  );
}
