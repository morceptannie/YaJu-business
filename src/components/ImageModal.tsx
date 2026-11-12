import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  caption: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  imageSrc,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 max-w-5xl w-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top bar with close button */}
        <div className="p-3 sm:p-4 border-b border-slate-800 flex items-center justify-between text-white">
          <span className="text-sm font-semibold truncate pr-4 text-slate-200">
            {caption}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="關閉預覽"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Image View */}
        <div className="relative max-h-[75vh] flex items-center justify-center bg-black overflow-hidden">
          <img
            src={imageSrc}
            alt={caption}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
