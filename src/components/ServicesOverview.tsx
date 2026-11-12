import React from 'react';
import { motion } from 'motion/react';
import { Building2, FileBadge2, Presentation, Sparkles, Check, ArrowRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesOverviewProps {
  onSelectService: (serviceId: string) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService, onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-7 h-7 text-amber-600" />;
      case 'FileBadge2':
        return <FileBadge2 className="w-7 h-7 text-amber-600" />;
      case 'Presentation':
        return <Presentation className="w-7 h-7 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-amber-600" />;
      default:
        return <Building2 className="w-7 h-7 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block text-amber-600 font-bold text-xs tracking-widest uppercase mb-2">
            CORE SERVICES · 全方位商務支援
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            專業、彈性、省心的企業營運後盾
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            亞巨聯合商務中心結合硬體空間與軟體秘書服務，免除租賃傳統辦公室的昂貴裝潢與人事負擔，讓您專注開拓核心事業。
          </p>
        </motion.div>

        {/* 4-Column Enfold Icon Box Grid with Motion Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                {/* Title & English */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs text-slate-500 mb-4 font-mono font-medium">
                  {service.enTitle}
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 mb-5 leading-relaxed line-clamp-3">
                  {service.summary}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {service.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price Note & Action */}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <div className="text-sm font-bold text-slate-900 mb-3 font-mono">
                  {service.priceNote}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl text-center transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>查看規格</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="py-2.5 px-3.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                  >
                    立即洽詢
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
