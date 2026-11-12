import React from 'react';
import { motion } from 'motion/react';
import { MapPin, TrendingUp, UserCheck, ShieldCheck, Maximize2, Lock, X, Check } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-600" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-amber-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5 text-amber-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-amber-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-50 border-b border-slate-200">
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
            WHY YA JU · 核心優勢
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            為什麼數百位創業家與企業選擇亞巨？
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            從地段優勢、合約彈性到行政秘書後援，我們提供遠超越傳統辦公室的營運綜效。
          </p>
        </motion.div>

        {/* 6 Key Advantage Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:border-amber-400/80 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table: Traditional Office vs Ya Ju */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
        >
          <div className="p-6 sm:p-7 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">傳統自租辦公室 vs. 亞巨聯合商務中心</h3>
              <p className="text-xs text-slate-400 mt-1">
                以 1~4 人微型企業或新創團隊平均營運成本全面對比
              </p>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30 self-start sm:self-auto">
              綜合營運效益評估
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider font-bold border-b border-slate-200">
                <tr>
                  <th className="py-4 px-6 w-1/4">評估項目</th>
                  <th className="py-4 px-6 w-3/8 text-slate-500">傳統自租舊公寓 / 商辦</th>
                  <th className="py-4 px-6 w-3/8 bg-amber-50/60 text-amber-900 font-bold border-l border-amber-200">
                    亞巨聯合商務中心 (推薦)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">裝潢與傢俱採購</td>
                  <td className="py-4 px-6 text-slate-500 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>需自行負擔 20~50 萬裝潢、OA桌椅、冷氣及拉線費用</span>
                  </td>
                  <td className="py-4 px-6 text-slate-800 bg-amber-50/30 font-medium border-l border-amber-100">
                    <div className="flex items-start gap-2 text-emerald-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>NT$ 0 元！高質感裝潢、冷氣與人體工學桌椅現成備齊</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">水電/網路/管理費</td>
                  <td className="py-4 px-6 text-slate-500 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>每月需自行申辦網路、分攤公共電費、支付大樓管理費</span>
                  </td>
                  <td className="py-4 px-6 text-slate-800 bg-amber-50/30 font-medium border-l border-amber-100">
                    <div className="flex items-start gap-2 text-emerald-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>租金全額包含，無任何夏月電價加成或管理雜支</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">行政與信件包裹管理</td>
                  <td className="py-4 px-6 text-slate-500 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>需聘請行政總機（月薪約 3.2 萬起）或隨時擔心漏收公文</span>
                  </td>
                  <td className="py-4 px-6 text-slate-800 bg-amber-50/30 font-medium border-l border-amber-100">
                    <div className="flex items-start gap-2 text-emerald-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>五星前台秘書常駐，代收信件包裹並即時拍照通知</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">地段門面與商業接待</td>
                  <td className="py-4 px-6 text-slate-500 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>巷弄內老舊建物門面不足，缺少正式會議室接待重要客戶</span>
                  </td>
                  <td className="py-4 px-6 text-slate-800 bg-amber-50/30 font-medium border-l border-amber-100">
                    <div className="flex items-start gap-2 text-emerald-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>廣三SOGO百貨正隔壁，擁有迎賓大廳、現磨咖啡與投影會議室</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-slate-900">合約彈性與擴充性</td>
                  <td className="py-4 px-6 text-slate-500 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>通常綁約 2~3 年以上，押金 2~3 個月，提前解約違約金高昂</span>
                  </td>
                  <td className="py-4 px-6 text-slate-800 bg-amber-50/30 font-medium border-l border-amber-100">
                    <div className="flex items-start gap-2 text-emerald-800">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>租約靈活彈性，可配合企業擴編隨時升級更大房型</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
