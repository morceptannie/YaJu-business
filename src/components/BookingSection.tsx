import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink, Calendar, Car, Bus, Train } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface BookingSectionProps {
  prefilledService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  prefilledService
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('1~2人 精英獨立辦公室');
  const [visitDate, setVisitDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
      setNotes((prev) => prev ? `${prev}\n【預約諮詢方案】：${prefilledService}` : `【預約諮詢方案】：${prefilledService}`);
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('請輸入您的姓名');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('請輸入您的聯絡電話');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMsg('請輸入正確的電子郵件信箱');
      return;
    }

    setIsSubmitting(true);
    // Simulate high-reliability submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setCompany('');
    setPhone('');
    setEmail('');
    setNotes('');
  };

  return (
    <section id="contact" className="py-24 bg-slate-100/70 border-b border-slate-200">
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
            RESERVATION & CONTACT · 預約與聯絡
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            預約專人實地導覽 · 洽詢進駐方案
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            填寫以下預約表單，我們的專業商務秘書將於營業時間內主動與您聯絡，安排現場最佳賞屋時段。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Booking Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm"
          >
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  預約已成功送出！
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  感謝您的預約，<strong className="text-slate-800">{name}</strong> 先生/女士。亞巨商務秘書團隊已收到您的需求，將盡速透過電話 <strong className="text-slate-800">{phone}</strong> 與您確認參觀時段。
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={BUSINESS_INFO.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>加入官方 LINE 加速確認 (@yaju)</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
                  >
                    填寫另一筆預約
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="text-lg font-black text-slate-900">
                    現場參觀與方案諮詢單
                  </h3>
                  <p className="text-xs text-slate-500">
                    標記 * 為必填欄位，平日營業時間內專人即時回應
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-bold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      聯絡姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="例：王小明"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      公司 / 商業行號名稱
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="籌備中請填「個人/籌備處」"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      聯絡手機 / 電話 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="例：0912-345-678"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      電子郵件信箱 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="例：contact@company.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      感興趣之服務項目
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                    >
                      <option value="1~2人 精英獨立辦公室">1~2人 精英獨立辦公室</option>
                      <option value="3~4人 團隊核心辦公室">3~4人 團隊核心辦公室</option>
                      <option value="5~6人 旗艦團隊辦公套房">5~6人 旗艦團隊辦公套房</option>
                      <option value="工商營業登記 (借址營登)">工商營業登記 (借址營登)</option>
                      <option value="專業影音會議室租借">專業影音會議室租借</option>
                      <option value="涉外/港澳投資居留代辦諮詢">涉外/港澳投資居留代辦諮詢</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      希望參觀日期 / 時段
                    </label>
                    <input
                      type="date"
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    具體需求備註
                  </label>
                  <textarea
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="請簡述您的需求，例如預計進駐人數、起租時間、特定設備或優惠方案洽詢等..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-sans"
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>資料傳送中...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>送出預約申請 · 專人即刻接洽</span>
                      </>
                    )}
                  </motion.button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    我們重視您的個人隱私，所有資料僅供預約安排與商務諮詢使用。
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Transport Info (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-xl">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-white">
                <span>亞巨聯合商務中心</span>
              </h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                座落台中市西區美村路一段22號7樓，緊鄰廣三SOGO百貨與勤美誠品草悟道，具備絕佳的地理優勢與商業機能。
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">代表號電話</div>
                    <div className="text-white font-black text-base group-hover:text-amber-400 transition-colors font-mono">
                      {BUSINESS_INFO.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.mobile}`}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-800 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">行動專線 (假日/急件洽詢)</div>
                    <div className="text-white font-black text-base group-hover:text-amber-400 transition-colors font-mono">
                      {BUSINESS_INFO.mobile}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">電子信箱</div>
                    <div className="text-white font-medium">{BUSINESS_INFO.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">中心地址</div>
                    <div className="text-white font-bold">{BUSINESS_INFO.address}</div>
                    <div className="text-[11px] text-amber-400 mt-0.5">廣三SOGO百貨正隔壁棟</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-800/80">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400 font-semibold">秘書服務時間</div>
                    <div className="text-white font-medium">{BUSINESS_INFO.hours}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">會員享 24 小時感應磁卡自由出入</div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_INFO.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>官方 LINE (@yaju)</span>
                </a>
                <a
                  href={BUSINESS_INFO.fbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Facebook 粉絲專頁</span>
                </a>
              </div>
            </div>

            {/* Transport Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>交通指引與周邊停車</span>
              </h4>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Bus className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">優化公車專用道：</strong>
                    <span>搭乘公車於「科博館/廣三SOGO站」下車，步行僅需 1 分鐘即可到達大樓入口。</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Train className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">台中高鐵/台鐵轉乘：</strong>
                    <span>高鐵台中站搭乘快捷公車 159 號至廣三SOGO站，或轉乘計程車約 15 分鐘車程。</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">周邊便利停車場：</strong>
                    <span>廣三SOGO百貨地下停車場、忠明公園公有地下停車場（步行約 2 分鐘）。</span>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] relative bg-slate-100">
                <iframe
                  title="亞巨聯合商務中心 Google 地圖"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://maps.google.com/maps?q=台中市西區美村路一段22號&t=&z=16&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
