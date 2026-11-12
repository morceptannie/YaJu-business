import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown, Award, ShieldCheck, Users2, Zap, Phone, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroSliderProps {
  onOpenBooking: () => void;
  onScrollToPricing: () => void;
  onScrollToServices: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenBooking,
  onScrollToPricing,
  onScrollToServices
}) => {
  // Lively typing effect rotation matching reference
  const words = ['借址登記', '獨立辦公室', '會議室租借', '商務秘書代辦'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Active hero image toggle (real client photos)
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const heroImages = [
    {
      src: '/src/assets/client_photos/yaju_real_3.jpg',
      label: '7F 迎賓接待大廳'
    },
    {
      src: '/src/assets/client_photos/yaju_real_2.jpg',
      label: '獨立採光辦公室'
    },
    {
      src: '/src/assets/client_photos/yaju_real_4.jpg',
      label: '商務影音會議室'
    }
  ];

  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.slice(0, currentText.length + 1));
        if (currentText.length + 1 >= word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(word.slice(0, currentText.length - 1));
        if (currentText.length - 1 <= 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative overflow-hidden bg-[#1D3A33] text-[#F2F0EB]">
      {/* Top Banner Split Grid matching reference design */}
      <div className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-[1.1fr_1fr]">
        {/* Left Column: Hero Content */}
        <div className="relative flex flex-col justify-between px-6 py-12 md:px-12 lg:px-16 lg:py-16">
          {/* Top Location Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs sm:text-sm text-[#A9C4BA] font-semibold"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#2B4D45] text-[#F2F0EB] font-bold text-sm shadow-sm">
              7F
            </span>
            <span className="h-px w-8 bg-[#A9C4BA]/50" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#A9C4BA]" />
              <span>台中市西區 美村路一段22號（SOGO百貨旁）</span>
            </span>
          </motion.div>

          {/* Main Headline & Subtitle */}
          <div className="my-10 lg:my-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[2.75rem] sm:text-6xl lg:text-[4.2rem] font-black leading-[1.18] tracking-tight text-[#F2F0EB]"
            >
              <span className="block">公司地址，</span>
              <span className="block">放在美村路</span>
              <span className="block text-[#A9C4BA]">七樓。</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-lg text-base sm:text-lg leading-relaxed text-[#E1E7E3]/90 font-medium"
            >
              剛創業、要設立分公司、或想有一間不用自己找裝潢的辦公室——<br className="hidden sm:block" />
              這裡處理的是：
              <span className="font-bold text-white bg-[#2B4D45]/70 px-2.5 py-0.5 rounded-lg border border-[#A9C4BA]/30 ml-1">
                {currentText}
              </span>
              <span className="caret" aria-hidden="true" />
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onScrollToPricing}
                className="btn-flow inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-bold text-sm text-white shadow-xl cursor-pointer"
              >
                <span>看方案與規格</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#F2F0EB]/80 hover:bg-[#F2F0EB] hover:text-[#1D3A33] px-6 py-3 font-bold text-sm text-[#F2F0EB] transition-all cursor-pointer"
              >
                <span>預約參觀</span>
              </motion.button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#A9C4BA] hover:text-white transition-colors ml-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>諮詢專線：{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </motion.div>
          </div>

          {/* Bottom indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={onScrollToServices}
            className="flex w-fit items-center gap-3 text-xs sm:text-sm text-[#A9C4BA] hover:text-white transition-colors cursor-pointer group"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#A9C4BA]/50 group-hover:border-white transition-colors animate-bounce">
              <ArrowDown className="h-4 w-4" />
            </span>
            <span className="font-bold">往下看空間與服務</span>
          </motion.button>
        </div>

        {/* Right Column: Hero Visual & Floating Directory Plate */}
        <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden bg-[#132722]">
          {/* Active Image */}
          <img
            src={heroImages[activeImageIndex].src}
            alt={heroImages[activeImageIndex].label}
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132722]/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D3A33]/70 via-transparent to-transparent lg:block hidden" />

          {/* Photo Switcher Badges */}
          <div className="absolute top-5 right-5 z-20 flex items-center gap-2 bg-[#132722]/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg">
            {heroImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'bg-[#A9C4BA] text-[#132722] shadow-sm'
                    : 'text-[#E1E7E3] hover:text-white'
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>

          {/* Floating 7F Directory Plate matching reference design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="floaty plate absolute bottom-8 left-6 sm:bottom-12 sm:left-10 w-64 rounded-2xl p-5 text-[#F2F0EB] shadow-2xl border border-white/10 z-20 backdrop-blur-md"
          >
            <div className="flex items-baseline justify-between border-b border-[#A9C4BA]/30 pb-3">
              <span className="text-3xl font-black tracking-tight font-display">7F</span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#A9C4BA] font-bold">
                Directory
              </span>
            </div>
            <ul className="mt-3.5 space-y-2 text-xs font-semibold text-[#E1E7E3]">
              <li className="flex justify-between items-center hover:text-white transition-colors">
                <span>接待大廳櫃台</span>
                <span className="text-[#A9C4BA] font-bold">→</span>
              </li>
              <li className="flex justify-between items-center hover:text-white transition-colors">
                <span>1~6人 獨立辦公室</span>
                <span className="text-[#A9C4BA] font-mono">A–</span>
              </li>
              <li className="flex justify-between items-center hover:text-white transition-colors">
                <span>多功能會議室</span>
                <span className="text-[#A9C4BA] font-mono">M–</span>
              </li>
              <li className="flex justify-between items-center hover:text-white transition-colors">
                <span>現磨咖啡交誼吧檯</span>
                <span className="text-[#A9C4BA]">☕</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* 4-Column KPI Trust Strip */}
      <div className="relative z-10 border-t border-[#2B4D45] bg-[#132722]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#2B4D45]/70">
            <div className="pt-3 md:pt-0 md:pr-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#A9C4BA]/10 border border-[#A9C4BA]/20 flex items-center justify-center text-[#A9C4BA] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight tabular-nums font-display">
                  10<span className="text-[#A9C4BA] text-lg font-bold">+ 年</span>
                </div>
                <div className="text-xs text-[#A9C4BA]/80 mt-0.5 font-medium">在地深耕專業口碑</div>
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#A9C4BA]/10 border border-[#A9C4BA]/20 flex items-center justify-center text-[#A9C4BA] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight tabular-nums font-display">
                  100<span className="text-[#A9C4BA] text-lg font-bold">%</span>
                </div>
                <div className="text-xs text-[#A9C4BA]/80 mt-0.5 font-medium">合法營業登記過件率</div>
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:px-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#A9C4BA]/10 border border-[#A9C4BA]/20 flex items-center justify-center text-[#A9C4BA] shrink-0">
                <Users2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight tabular-nums font-display">
                  1 - 6 <span className="text-[#A9C4BA] text-lg font-bold">人</span>
                </div>
                <div className="text-xs text-[#A9C4BA]/80 mt-0.5 font-medium">獨立辦公格局隨選</div>
              </div>
            </div>

            <div className="pt-3 md:pt-0 md:pl-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-[#A9C4BA]/10 border border-[#A9C4BA]/20 flex items-center justify-center text-[#A9C4BA] shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-white tracking-tight tabular-nums font-display">
                  NT$ 0
                </div>
                <div className="text-xs text-[#A9C4BA]/80 mt-0.5 font-medium">水電網路管理費全包</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
