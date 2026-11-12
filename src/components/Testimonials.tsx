import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
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
            CLIENT TESTIMONIALS · 進駐企業心得
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            創業者與跨國團隊的信賴見證
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            聽聽來自不同產業的企業主，如何在亞巨聯合商務中心加速業務成長。
          </p>
        </motion.div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item: TestimonialItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all relative"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-2 font-mono">5.0 卓越評價</span>
                </div>

                {/* Quote Content */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  “{item.content}”
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {item.company} · {item.title}
                  </div>
                </div>
                <div className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                  {item.stayDuration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
