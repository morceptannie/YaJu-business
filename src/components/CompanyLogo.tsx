import React from 'react';

interface CompanyLogoProps {
  variant?: 'header' | 'footer' | 'large' | 'light' | 'dark' | 'badge-only';
  className?: string;
  showSubtitle?: boolean;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'header',
  className = '',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light' || variant === 'footer';

  if (variant === 'badge-only') {
    return (
      <div
        className={`relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#26463F] via-[#1D3A33] to-[#132722] shadow-md border border-[#A9C4BA]/30 text-white font-serif font-bold text-xl select-none ${className}`}
        aria-label="亞巨 7F 標章"
      >
        <span className="tracking-tighter bg-gradient-to-b from-white via-[#F2F0EB] to-[#A9C4BA] bg-clip-text text-transparent font-black">
          7F
        </span>
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A9C4BA] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A9C4BA]"></span>
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Visual Architectural Corporate Emblem */}
      <div className="relative group cursor-pointer">
        <div
          className={`grid h-11 w-11 place-items-center rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${
            isLight
              ? 'bg-gradient-to-br from-[#2F5168] to-[#1D3A33] border border-[#A9C4BA]/40'
              : 'bg-gradient-to-br from-[#26463F] via-[#1D3A33] to-[#132722] border border-[#1D3A33]/20'
          }`}
        >
          {/* Geometric YJ + 7F stylized corporate icon */}
          <div className="flex flex-col items-center justify-center leading-none">
            <span className="font-serif text-[1.15rem] font-bold text-[#F2F0EB] tracking-tight">
              7F
            </span>
            <span className="text-[0.45rem] font-extrabold uppercase tracking-widest text-[#A9C4BA]">
              YAJU
            </span>
          </div>
        </div>
        {/* Subtle decorative dot */}
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[#3F6A86] border-2 border-[#F2F0EB]" />
      </div>

      {/* Typography: Chinese Brand & English Sub-brand */}
      <div className="leading-tight">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display text-[1.28rem] font-bold tracking-[0.14em] transition-colors ${
              isLight ? 'text-white' : 'text-[#1D3A33]'
            }`}
          >
            亞巨聯合
          </span>
          <span
            className={`text-[0.82rem] font-medium tracking-wide px-1.5 py-0.5 rounded ${
              isLight ? 'bg-white/15 text-[#A9C4BA]' : 'bg-[#1D3A33]/10 text-[#3F6A86]'
            }`}
          >
            商務中心
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`block text-[0.62rem] font-semibold uppercase tracking-[0.28em] mt-0.5 ${
              isLight ? 'text-[#A9C4BA]' : 'text-[#3F6A86]'
            }`}
          >
            YA JU BUSINESS CENTER
          </span>
        )}
      </div>
    </div>
  );
};
