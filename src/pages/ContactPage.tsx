import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building, 
  Calendar, 
  Car, 
  Bus, 
  Train, 
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  prefilledPlan?: string;
  onShowToast: (message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledPlan, onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    plan: prefilledPlan || '',
    visitDate: '',
    visitTime: '平日下午 (14:00 - 17:00)',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({ ...prev, plan: prefilledPlan }));
    }
  }, [prefilledPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.tel.trim() || !formData.plan) {
      setErrorMessage('請填寫姓名、聯絡電話，並選擇想了解的方案。');
      return;
    }

    setErrorMessage('');
    setFormSubmitted(true);
    onShowToast('詢問表單已成功送出！專任秘書將儘速致電為您說明。');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      tel: '',
      email: '',
      plan: '',
      visitDate: '',
      visitTime: '平日下午 (14:00 - 17:00)',
      message: '',
    });
    setFormSubmitted(false);
  };

  return (
    <div className="w-full">
      {/* ================= HERO / SPLIT CONTACT ================= */}
      <section className="bg-[#1D3A33] text-[#F2F0EB]">
        <div className="mx-auto max-w-[1310px] grid lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left Column: Direct Info & 7F Plate */}
          <div className="px-6 py-16 md:px-12 lg:px-16 lg:py-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <span className="text-[#A9C4BA] font-bold text-sm tracking-wider uppercase">
                GET IN TOUCH
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mt-2">
                預約參觀
                <br />
                或詢問專案
              </h1>
              <p className="mt-6 text-lg text-[#E1E7E3] leading-relaxed max-w-md">
                留下您的需求與方便聯繫的時間，我們將由專任秘書回電說明最合適的方案與費用。
                急用或想當天看房，直接撥打電話最快！
              </p>

              {/* Direct Info List */}
              <dl className="mt-10 space-y-6">
                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#A9C4BA]/20 text-[#A9C4BA] shrink-0 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#A9C4BA]">
                      專人諮詢專線
                    </dt>
                    <dd className="mt-0.5">
                      <a
                        href="tel:0423281008"
                        className="font-serif text-2xl sm:text-3xl font-bold text-white underline decoration-[#A9C4BA]/50 hover:text-[#A9C4BA] transition-colors"
                      >
                        (04) 2328-1008
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#A9C4BA]/20 text-[#A9C4BA] shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#A9C4BA]">
                      接待地址
                    </dt>
                    <dd className="mt-0.5 text-base sm:text-lg font-bold text-white">
                      台中市西區美村路一段22號7樓
                      <span className="block text-xs font-normal text-[#A9C4BA] mt-0.5">
                        （廣三SOGO百貨正後方・美村路與臺灣大道口）
                      </span>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#A9C4BA]/20 text-[#A9C4BA] shrink-0 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-[#A9C4BA]">
                      服務接待時間
                    </dt>
                    <dd className="mt-0.5 text-base sm:text-lg font-bold text-white">
                      週一至週五 09:00 – 18:00
                      <span className="block text-xs font-normal text-[#E1E7E3] mt-0.5">
                        （進駐租戶享 24 小時門禁刷卡自由進出）
                      </span>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* 7F Directory Plate */}
            <div className="plate mt-12 rounded-2xl p-6 border border-[#A9C4BA]/30 shadow-xl">
              <div className="flex items-baseline justify-between border-b border-[#A9C4BA]/30 pb-3">
                <span className="font-serif text-5xl font-bold text-white">7F</span>
                <span className="text-xs uppercase tracking-widest text-[#A9C4BA] font-bold">
                  YA JU ELEVATOR LOBBY
                </span>
              </div>
              <p className="mt-3 text-sm text-[#E1E7E3] leading-relaxed">
                搭乘大樓客梯直達七樓，開門出電梯即為亞巨聯合商務中心接待前台，秘書隨時為您服務。
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="px-6 py-16 md:px-12 lg:px-16 lg:py-24 bg-[#F2F0EB] text-[#18201D]">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6" noValidate>
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#1D3A33]">
                    線上預約與需求單
                  </h2>
                  <p className="mt-1 text-sm text-[#18201D]/70">
                    填寫以下資訊，我們將在服務時間內 30 分鐘內與您確認參觀時段。
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-bold">
                    {errorMessage}
                  </div>
                )}

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-bold text-[#1D3A33]">
                      您的姓名 <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="例：王小明 經理"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-[#1D3A33]">
                      聯絡電話 / 手機 <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="例：0912-345-678"
                      value={formData.tel}
                      onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-bold text-[#1D3A33]">電子郵件 (選填)</span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#1D3A33]">
                    想了解的方案 <span className="text-red-500">*</span>
                  </span>
                  <select
                    required
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                  >
                    <option value="">請點選欲了解之項目</option>
                    <option value="公司／商號登記地址">公司／商號登記地址 (借址登記)</option>
                    <option value="登記地址＋信件代收">登記地址＋信件代收</option>
                    <option value="一人獨立辦公室">一人獨立辦公室 (全配即租即用)</option>
                    <option value="2–4 人團隊辦公室">2–4 人團隊辦公室</option>
                    <option value="共享流動座位">共享流動座位</option>
                    <option value="小型商務會議室 (4–6人)">小型商務會議室 (4–6人)</option>
                    <option value="中型多功能會議室 (8–12人)">中型多功能會議室 (8–12人)</option>
                    <option value="公司設立與工商代辦協助">公司設立與工商代辦協助</option>
                    <option value="記帳報稅與會計師轉介">記帳報稅與會計師轉介</option>
                    <option value="還不確定，想先預約參觀環境聊聊">還不確定，想先預約參觀環境聊聊</option>
                  </select>
                </label>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-bold text-[#1D3A33]">預約參觀日期</span>
                    <input
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-[#1D3A33]">偏好時段</span>
                    <select
                      value={formData.visitTime}
                      onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                    >
                      <option>平日上午 (10:00 - 12:00)</option>
                      <option>平日下午 (14:00 - 17:00)</option>
                      <option>電話先聊，暫不參觀</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-bold text-[#1D3A33]">需求說明或備註</span>
                  <textarea
                    rows={4}
                    placeholder="例如：預計設立有限公司、預計進駐人數 2 人，想了解空室照片與報價"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-[#1D3A33]/25 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3F6A86]"
                  ></textarea>
                </label>

                <button
                  type="submit"
                  className="btn-flow w-full justify-center py-4 rounded-xl font-bold text-white shadow-xl hover:scale-[1.01] active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>立即送出預約參觀需求</span>
                </button>
              </form>
            ) : (
              <div className="mx-auto max-w-md py-12 text-center bg-white p-8 rounded-3xl shadow-sm border border-[#1D3A33]/10">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#1D3A33] mt-5">
                  已收到您的預約詢問！
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#18201D]/75">
                  感謝您的聯繫。亞巨專任秘書已收到您的需求，將在服務時間內主動致電為您解答方案並安排專屬參觀時段。
                </p>
                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left space-y-1">
                  <p><span className="font-bold">聯絡姓名：</span>{formData.name}</p>
                  <p><span className="font-bold">聯絡電話：</span>{formData.tel}</p>
                  <p><span className="font-bold">諮詢方案：</span>{formData.plan}</p>
                </div>
                <button
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1D3A33] text-[#1D3A33] font-bold text-sm hover:bg-[#1D3A33] hover:text-white transition-colors cursor-pointer"
                >
                  <span>再填寫一份需求單</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= TRANSPORTATION & MAP GUIDE ================= */}
      <section className="mx-auto max-w-[1310px] px-5 py-20 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
            LOCATION & ACCESS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3A33] mt-1">
            地理位置與交通指引
          </h2>
          <p className="mt-2 text-base text-[#18201D]/70">
            位處台中西區黃金中軸線，廣三SOGO百貨正後方，商務往來與客戶拜訪極為便捷。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-[#1D3A33]/10 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/10 text-[#3F6A86] mb-4">
              <Bus className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1D3A33]">搭乘公車／BRT</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#18201D]/75">
              搭乘至「科學博物館（台灣大道）」或「廣三SOGO」站下車，美村路步行約 2 分鐘即達美村路一段22號大樓。
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#1D3A33]/10 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/10 text-[#3F6A86] mb-4">
              <Train className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1D3A33]">高鐵／台鐵轉乘</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#18201D]/75">
              高鐵台中站搭乘高鐵快捷公車 159 路至廣三SOGO站下車；或搭計程車車程約 15 分鐘即可抵達。
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#1D3A33]/10 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/10 text-[#3F6A86] mb-4">
              <Car className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#1D3A33]">自行開車與停車</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#18201D]/75">
              周邊停車極為便利，緊鄰廣三SOGO百貨地下停車場、美村路收費停車場及忠明公園地下公有停車場。
            </p>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="overflow-hidden rounded-3xl border border-[#1D3A33]/15 shadow-md h-[400px]">
          <iframe
            title="亞巨聯合商務中心 Google 地圖"
            src="https://maps.google.com/maps?q=%E5%8F%B0%E4%B8%AD%E5%B8%82%E8%A5%BF%E5%8D%80%E7%BE%8E%E6%9D%91%E8%B7%AF%E4%B8%80%E6%AE%B522%E8%99%9F&t=&z=16&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
