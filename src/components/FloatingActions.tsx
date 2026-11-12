import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, ArrowUp, FilePenLine } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Quick Action Bar (Fixed to bottom on mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#F2F0EB]/95 backdrop-blur-md border-t border-[#C9D2CD] py-2.5 px-4 lg:hidden shadow-lg">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-[#1D3A33] text-[#F2F0EB] text-xs font-bold shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#A9C4BA]" />
            <span>直撥電話</span>
          </a>
          <a
            href={BUSINESS_INFO.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full bg-[#06C755] text-white text-xs font-bold shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LINE 諮詢</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="btn-flow flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-full text-white text-xs font-bold cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>預約賞屋</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Right Tabs matching reference design */}
      <div className="hidden lg:flex fixed right-0 top-1/2 z-40 -translate-y-1/2 flex-col gap-1.5">
        <a
          href={BUSINESS_INFO.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-l-2xl bg-[#1D3A33] hover:bg-[#3F6A86] px-3.5 py-3 text-[#F2F0EB] text-xs font-bold shadow-md transition-all hover:-translate-x-1"
          title="官方 LINE 諮詢 (@yaju)"
        >
          <MessageSquare className="h-4 w-4 text-[#A9C4BA]" />
          <span>LINE</span>
        </a>

        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex items-center gap-2 rounded-l-2xl bg-[#1D3A33] hover:bg-[#3F6A86] px-3.5 py-3 text-[#F2F0EB] text-xs font-bold shadow-md transition-all hover:-translate-x-1"
          title={`撥打電話：${BUSINESS_INFO.phoneDisplay}`}
        >
          <Phone className="h-4 w-4 text-[#A9C4BA]" />
          <span>來電</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center gap-2 rounded-l-2xl bg-[#2F5168] hover:bg-[#3F6A86] px-3.5 py-3 text-white text-xs font-bold shadow-md transition-all hover:-translate-x-1 cursor-pointer"
          title="線上預約參觀"
        >
          <FilePenLine className="h-4 w-4" />
          <span>預約</span>
        </button>

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-l-2xl bg-[#18201D] hover:bg-[#3F6A86] px-3.5 py-3 text-[#F2F0EB] text-xs font-bold shadow-md transition-all hover:-translate-x-1 cursor-pointer mt-2"
            title="回到頁首"
          >
            <ArrowUp className="h-4 w-4" />
            <span>頂端</span>
          </button>
        )}
      </div>
    </>
  );
};
