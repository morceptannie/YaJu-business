import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, Camera } from 'lucide-react';

interface PhotoGalleryProps {
  onOpenImageModal: (imageSrc: string, caption: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenImageModal }) => {
  const [filter, setFilter] = useState<'all' | 'lobby' | 'office' | 'meeting' | 'lounge'>('all');

  const galleryItems = [
    {
      id: 'g-1',
      title: '五星級迎賓接待大廳櫃檯',
      category: 'lobby',
      categoryName: '大廳櫃檯',
      image: '/src/assets/client_photos/yaju_real_3.jpg',
      desc: '實景拍攝。氣派迎賓大廳與招牌大理石櫃檯，專人秘書親切指引，為進駐企業建立卓越的第一印象。'
    },
    {
      id: 'g-2',
      title: '小型獨立採光辦公室',
      category: 'office',
      categoryName: '獨立辦公室',
      image: '/src/assets/client_photos/yaju_real_2.jpg',
      desc: '實景拍攝。獨立分離式冷氣、人體工學桌椅與文件置物櫃，方正格局一卡皮箱即刻開展業務。'
    },
    {
      id: 'g-3',
      title: '商務影音投影會議室',
      category: 'meeting',
      categoryName: '會議研討室',
      image: '/src/assets/client_photos/yaju_real_4.jpg',
      desc: '實景拍攝。配備高畫質大螢幕無線投屏、雙層隔音強化玻璃與白板，適合各型商務提案與培訓。'
    },
    {
      id: 'g-4',
      title: '3~4人 團隊核心辦公空間',
      category: 'office',
      categoryName: '獨立辦公室',
      image: '/src/assets/client_photos/yaju_real_5.jpg',
      desc: '實景拍攝。空間開闊明亮，附設專屬辦公座席與收納空間，具備高度私密性與專注氛圍。'
    },
    {
      id: 'g-5',
      title: '現磨咖啡交誼吧檯區',
      category: 'lounge',
      categoryName: '休閒吧檯',
      image: '/src/assets/client_photos/yaju_real_7.jpg',
      desc: '實景拍攝。提供義式現磨香醇咖啡機、冷熱飲水設備與微波家電，工作之餘輕鬆休憩交流。'
    },
    {
      id: 'g-6',
      title: '高階主管獨立套房全景',
      category: 'office',
      categoryName: '獨立辦公室',
      image: '/src/assets/client_photos/yaju_real_9.jpg',
      desc: '實景拍攝。雙面採光大窗、舒適皮質主管座椅與安靜隔間，滿足各界菁英與跨國代表處需求。'
    }
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 text-amber-600 font-bold text-xs tracking-widest uppercase mb-2">
            <Camera className="w-4 h-4" />
            <span>ACTUAL SITE GALLERY · 現場環境實景</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            實景導覽 · 走入亞巨專屬商務空間
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            真實呈現亞巨聯合商務中心現場環境，精緻舒適與安靜辦公氛圍，期待您的蒞臨預約體驗。
          </p>

          {/* Enfold Portfolio Category Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl inline-flex border border-slate-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部實景
            </button>
            <button
              onClick={() => setFilter('lobby')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filter === 'lobby'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              迎賓大廳
            </button>
            <button
              onClick={() => setFilter('office')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filter === 'office'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              獨立辦公室
            </button>
            <button
              onClick={() => setFilter('meeting')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filter === 'meeting'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              商務會議室
            </button>
            <button
              onClick={() => setFilter('lounge')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                filter === 'lounge'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              交誼吧檯區
            </button>
          </div>
        </motion.div>

        {/* Gallery Grid with Motion */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => onOpenImageModal(item.image, `${item.title} - ${item.desc}`)}
                className="group relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 aspect-[4/3] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                {/* Category & Verified pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-white/10">
                    {item.categoryName}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-extrabold flex items-center gap-1 shadow-sm">
                    <Camera className="w-2.5 h-2.5" />
                    <span>現場拍攝</span>
                  </span>
                </div>

                {/* Enfold Zoom Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Content */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="text-lg font-bold tracking-tight mb-1 text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
