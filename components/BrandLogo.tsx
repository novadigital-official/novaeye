'use client';

import React from 'react';

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
      {/* Precision Vector Emblem: Modern Teal & Titanium Slate Eye Iris (Razor Sharp & Full Bleed) */}
      <div className={`${iconSize} rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md border border-slate-200/80 shrink-0 group-hover:scale-105 transition-transform`}>
        <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Top-Left Charcoal Wing */}
          <path
            d="M20 28C24 14 42 8 58 12C48 20 42 30 38 44C30 42 24 37 20 28Z"
            fill="#475569"
          />
          {/* Bottom-Right Charcoal Wing */}
          <path
            d="M80 52C76 66 58 72 42 68C52 60 58 50 62 36C70 38 76 43 80 52Z"
            fill="#475569"
          />

          {/* Main Angled Deep Teal Eye Aperture Oval */}
          <ellipse
            cx="50"
            cy="40"
            rx="28"
            ry="20"
            transform="rotate(-28 50 40)"
            fill="#165B66"
          />

          {/* Clean White Outer Iris Ring with Precision Notch */}
          <path
            d="M50 26C57.732 26 64 32.268 64 40C64 47.732 57.732 54 50 54C42.268 54 36 47.732 36 40C36 32.268 42.268 26 50 26Z"
            fill="#FFFFFF"
          />

          {/* Inner Deep Teal Pupil */}
          <circle
            cx="50"
            cy="40"
            r="8.5"
            fill="#0F3B42"
          />

          {/* Small Top-Right Aperture Spark Catchlight */}
          <circle
            cx="55"
            cy="35"
            r="2.5"
            fill="#FFFFFF"
          />
        </svg>
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
