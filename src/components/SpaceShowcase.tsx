import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wind, Key, Coffee, Check, Maximize2, Calendar, Camera } from 'lucide-react';
import { SPACES, SpaceItem } from '../data/content';

interface SpaceShowcaseProps {
  onOpenBooking: (spaceName?: string) => void;
  onOpenImageModal: (imageSrc: string, caption: string) => void;
}

export const SpaceShowcase: React.FC<SpaceShowcaseProps> = ({ onOpenBooking, onOpenImageModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'office' | 'registration' | 'meeting' | 'lounge'>('all');

  const filteredSpaces = selectedCategory === 'all'
    ? SPACES
    : SPACES.filter((s) => s.category === selectedCategory);

  return (
    <section id="spaces" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-amber-600 font-bold text-xs tracking-widest uppercase mb-2 flex items-center gap-1.5">
              <Camera className="w-4 h-4" />
              <span>REAL SPACES & PLANS · 現場實景空間</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              多樣化房型與彈性租賃方案
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              全空間均配備採光窗、獨立冷氣與隔音規劃，滿足個人獨立作業、團隊協作及商務接待的所有需求。
            </p>
          </motion.div>

          {/* Interactive Filter Tabs (Enfold Tab Bar) */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部空間
            </button>
            <button
              onClick={() => setSelectedCategory('office')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'office'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              獨立辦公室
            </button>
            <button
              onClick={() => setSelectedCategory('registration')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'registration'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              營業地址登記
            </button>
            <button
              onClick={() => setSelectedCategory('meeting')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'meeting'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              會議室出租
            </button>
            <button
              onClick={() => setSelectedCategory('lounge')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                selectedCategory === 'lounge'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              公共交誼吧檯
            </button>
          </div>
        </div>

        {/* Space Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredSpaces.map((space: SpaceItem) => (
              <motion.div
                layout
                key={space.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Genuine Photo View with Enfold Zoom Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={space.image}
                    alt={space.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Real Photo & Capacity Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-bold shadow-md flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      <span>實景拍攝</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/10">
                      {space.capacity}
                    </span>
                    {space.specs.area && (
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                        {space.specs.area}
                      </span>
                    )}
                  </div>

                  {/* Lightbox Zoom Trigger */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onOpenImageModal(space.image, `${space.name} (現場實景)`)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-amber-600 transition-colors shadow-lg cursor-pointer"
                    title="點擊放大檢視實景照片"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </motion.button>

                  {/* Title & Price Overlaid at bottom */}
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white mb-0.5">
                        {space.name}
                      </h3>
                      <p className="text-xs text-amber-300 font-medium line-clamp-1">
                        適合：{space.idealFor}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-lg font-black text-amber-400 tabular-nums font-mono">
                        {space.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                      {space.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                        房型專屬設施與服務
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {space.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specs Strip */}
                    <div className="grid grid-cols-2 gap-3 py-3.5 px-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Wind className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate">{space.specs.airConditioning}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Key className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate">{space.specs.access}</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-2">
                        <Coffee className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span className="truncate">{space.specs.amenities}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 font-medium">
                      歡迎預約實地賞屋試坐
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onOpenBooking(space.name)}
                      className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>預約參觀此房型</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
