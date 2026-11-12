import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Sparkles, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ENFOLD_PRICING_PLANS, PricingPlanItem } from '../data/content';

interface EnfoldPricingTableProps {
  onSelectPlan: (planName: string) => void;
}

export const EnfoldPricingTable: React.FC<EnfoldPricingTableProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>PRICING & PLANS · 費用方案</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            透明公道 · 靈活彈性的商務租賃方案
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            採用 WordPress Enfold 原生標準商務方案架構，無任何隱藏水電、網路或管理費雜支，協助您精準掌控營運預算。
          </p>
        </motion.div>

        {/* Enfold Avia Native 4-Column Pricing Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ENFOLD_PRICING_PLANS.map((plan: PricingPlanItem, index: number) => {
            const isHighlighted = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-slate-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/20 lg:-translate-y-2'
                    : 'bg-slate-950/80 border border-slate-800 shadow-lg hover:border-slate-700'
                }`}
              >
                {/* Popular Highlight Ribbon */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-6 sm:p-7 border-b border-slate-800/80">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {plan.name}
                  </h3>
                  <div className="text-[11px] text-slate-400 font-mono tracking-wider uppercase mb-5">
                    {plan.enName}
                  </div>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-xs text-amber-400 font-bold">NT$</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/{plan.period}</span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">
                    適合對象：{plan.idealFor}
                  </p>
                </div>

                {/* Feature Bullet List */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs leading-relaxed ${
                          feat.included ? 'text-slate-200' : 'text-slate-600 line-through'
                        }`}
                      >
                        {feat.included ? (
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                        )}
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Action */}
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                      isHighlighted
                        ? 'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-slate-950 shadow-amber-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 active:bg-slate-700/80 text-white'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent Guarantee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white">透明定價保證：</strong>
              <span>所有獨立辦公室租金皆已全包水費、冷氣電費、大樓管理費與清潔費，簽約絕無隱藏加收費用。</span>
            </div>
          </div>
          <div className="text-amber-400 font-medium whitespace-nowrap">
            * 簽署年約另享特別專案折扣
          </div>
        </motion.div>
      </div>
    </section>
  );
};
