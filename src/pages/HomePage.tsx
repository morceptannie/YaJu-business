import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Phone, 
  Calendar, 
  MapPin, 
  MailCheck, 
  DoorOpen, 
  Presentation, 
  Plus, 
  CheckCircle2, 
  Building2,
  Sparkles
} from 'lucide-react';
import realReception from '../assets/client_photos/yaju_real_3.jpg';
import realOffice from '../assets/client_photos/yaju_real_1.jpg';
import realMeeting from '../assets/client_photos/yaju_real_4.jpg';
import realLounge from '../assets/client_photos/yaju_real_2.jpg';

interface HomePageProps {
  onNavigate: (page: string, params?: { serviceId?: string; scrollTarget?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Lively typing animation
  const typingWords = ['借址登記', '獨立辦公室', '會議室租借', '工商設立代辦'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(typingWords[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }
    } else {
      if (currentText.length < word.length) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, 110);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <div className="w-full">
      {/* ================= HERO SPLIT BANNER ================= */}
      <section className="grid min-h-[calc(100vh-5rem)] lg:grid-cols-[1.1fr_1fr] bg-[#1D3A33]">
        {/* Left Side: Editorial Typography & Lively Typing */}
        <div className="relative flex flex-col justify-between px-6 py-14 text-[#F2F0EB] md:px-12 lg:px-16 lg:py-20 z-10">
          {/* Top Tagline */}
          <div className="flex items-center gap-3 text-sm text-[#A9C4BA]">
            <span className="font-serif text-lg font-bold text-white px-2 py-0.5 rounded bg-white/10">
              7F
            </span>
            <span className="h-px w-10 bg-[#A9C4BA]/50"></span>
            <span className="tracking-wide">台中市西區 美村路一段22號（SOGO旁）</span>
          </div>

          {/* Main Title & Typing Subtitle */}
          <div className="my-10 lg:my-14">
            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-[4.2rem] font-bold leading-[1.15] tracking-[0.03em] text-[#F2F0EB]">
              <span className="block">公司地址，</span>
              <span className="block">放在美村路</span>
              <span className="block text-[#A9C4BA] underline decoration-[#3F6A86]/60 decoration-wavy decoration-2">
                七樓。
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg sm:text-xl leading-relaxed text-[#E1E7E3]/95">
              剛創業、要設立分公司、或想有一間不用自己找裝潢的辦公室——
              <br className="hidden sm:block" />
              這裡處理的是：
              <span className="font-bold text-white bg-[#3F6A86]/40 px-2.5 py-0.5 rounded mx-1 text-xl border border-[#A9C4BA]/30">
                {currentText}
              </span>
              <span className="caret" aria-hidden="true"></span>
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="btn-flow inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white shadow-xl hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <span>看方案與規格</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[#F2F0EB] border border-[#F2F0EB]/50 hover:bg-[#F2F0EB] hover:text-[#1D3A33] transition-colors cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>預約參觀</span>
              </button>
            </div>
          </div>

          {/* Bottom Anchor */}
          <button
            onClick={() => {
              const el = document.getElementById('why');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex w-fit items-center gap-3 text-sm text-[#A9C4BA] hover:text-white transition-colors cursor-pointer group"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#A9C4BA]/50 group-hover:border-white transition-colors">
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </span>
            <span className="font-medium tracking-wide">往下看空間與服務</span>
          </button>
        </div>

        {/* Right Side: Genuine Reception Photo with Floating 7F Plate */}
        <div className="relative min-h-[50vh] lg:min-h-[60vh] overflow-hidden bg-[#132722]">
          <img
            src={realReception}
            alt="亞巨聯合商務中心七樓明亮接待大廳"
            className="absolute inset-0 h-full w-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132722]/80 via-transparent to-[#1D3A33]/30"></div>

          {/* Authentic Real Photo Badge */}
          <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs text-white">
            <Sparkles className="h-3.5 w-3.5 text-[#A9C4BA]" />
            <span>七樓接待櫃台實景</span>
          </div>

          {/* Floating Directory Plate */}
          <div className="floaty plate absolute bottom-8 left-6 sm:bottom-12 sm:left-10 w-64 rounded-xl p-5 text-[#F2F0EB] shadow-[0_20px_45px_-15px_rgba(0,0,0,0.7)] border border-[#A9C4BA]/30 backdrop-blur-md">
            <div className="flex items-baseline justify-between border-b border-[#A9C4BA]/30 pb-3">
              <span className="font-serif text-4xl font-bold text-white tracking-tight">7F</span>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.3em] text-[#A9C4BA]">
                DIRECTORY
              </span>
            </div>
            <ul className="mt-3.5 space-y-2 text-sm text-[#E1E7E3]">
              <li className="flex justify-between items-center py-0.5 hover:text-white transition-colors">
                <span>接待迎賓櫃台</span>
                <span className="text-[#A9C4BA] font-bold">→</span>
              </li>
              <li className="flex justify-between items-center py-0.5 hover:text-white transition-colors">
                <span>獨立專屬辦公室</span>
                <span className="text-[#A9C4BA] font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">A01–A12</span>
              </li>
              <li className="flex justify-between items-center py-0.5 hover:text-white transition-colors">
                <span>多功能商務會議室</span>
                <span className="text-[#A9C4BA] font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">M01–M02</span>
              </li>
              <li className="flex justify-between items-center py-0.5 hover:text-white transition-colors">
                <span>茶水咖啡休憩吧</span>
                <span className="text-[#A9C4BA] text-xs">FREE</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE YA JU (SPLIT STICKY) ================= */}
      <section id="why" className="mx-auto max-w-[1310px] gap-12 px-5 py-20 md:px-8 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div className="lg:sticky lg:top-28 lg:self-start mb-10 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3F6A86]/10 text-[#3F6A86] text-xs font-bold tracking-wider uppercase mb-4">
            BUSINESS IDENTITY
          </div>
          <h2 className="font-display text-3xl font-bold leading-snug text-[#1D3A33] md:text-[2.65rem]">
            登記地址會印在
            <br />
            名片、發票和合約上
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#18201D]/80">
            所以它不只要合法可登記，也要讓客戶、銀行、國稅局看了安心。
            亞巨把這件事做得很實際：地址在台中西區核心商圈的商辦大樓，有人收信、有人接待、有地方開會。
          </p>

          <div className="mt-8 p-5 rounded-xl bg-white border border-[#1D3A33]/10 shadow-sm flex items-center gap-4">
            <Building2 className="h-10 w-10 text-[#3F6A86] shrink-0" />
            <div>
              <p className="font-bold text-[#1D3A33]">廣三SOGO商圈頂級地段</p>
              <p className="text-sm text-[#18201D]/70">台中市西區美村路一段22號7樓</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-[#1D3A33]/15 border-y border-[#1D3A33]/15">
          <div className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] group hover:bg-white/50 transition-colors p-4 rounded-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                西區美村路，一段22號7樓
              </h3>
              <p className="mt-2 leading-relaxed text-[#18201D]/75">
                台中市區主要幹道上的辦公地址，鄰近SOGO百貨與勤美誠品。客戶來訪好找，周邊停車場多、大眾交通便利，寫在官網上不用向客戶解釋。
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] group hover:bg-white/50 transition-colors p-4 rounded-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
              <MailCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                信件到了，第一時間通知你
              </h3>
              <p className="mt-2 leading-relaxed text-[#18201D]/75">
                政府公文、掛號、銀行照會與廠商帳單由專業秘書櫃台代收並建檔，即時透過電話或 LINE 通知，可自取或定期轉寄，絕不漏接重要公函。
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] group hover:bg-white/50 transition-colors p-4 rounded-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
              <DoorOpen className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                需要時，有一間真的辦公室
              </h3>
              <p className="mt-2 leading-relaxed text-[#18201D]/75">
                從借址登記開始，團隊擴張後可直接無縫換成獨立辦公室。同大樓、同地址，公司執照不用改、名片不用重印、登記手續免重跑。
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-8 sm:grid-cols-[3.5rem_1fr] group hover:bg-white/50 transition-colors p-4 rounded-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
              <Presentation className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                見客、面試、簡報，有體面的會議室
              </h3>
              <p className="mt-2 leading-relaxed text-[#18201D]/75">
                依時段線上或電話預約，桌椅、投影投影螢幕、玻璃白板與無線網路設備齊全，隨到隨用，再也不必約在嘈雜的咖啡廳談重要合約。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE PHOTO BANNER ================= */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden bg-[#132722]">
        <img
          src={realOffice}
          alt="亞巨商務中心獨立辦公室實景"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#132722]/65 backdrop-blur-[1px]"></div>
        <div className="relative mx-auto flex h-full max-w-[1310px] items-end px-5 pb-16 md:px-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#A9C4BA]/20 border border-[#A9C4BA]/40 text-[#A9C4BA] text-sm font-semibold mb-4">
              <CheckCircle2 className="h-4 w-4" />
              <span>全配辦公桌椅・高速光纖・冷氣空調・門禁刷卡</span>
            </div>
            <p className="font-display text-3xl font-bold leading-snug text-[#F2F0EB] sm:text-5xl md:text-6xl max-w-3xl">
              今天搬進來，
              <br />
              明天就能開門做生意。
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED 3 PLANS ================= */}
      <section className="mx-auto max-w-[1310px] px-5 py-20 md:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
              TOP POPULAR PLANS
            </span>
            <h2 className="font-display text-3xl font-bold text-[#1D3A33] md:text-[2.65rem] mt-1">
              三種最常被問的方案
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1D3A33] text-[#1D3A33] font-bold hover:bg-[#1D3A33] hover:text-[#F2F0EB] transition-colors cursor-pointer"
          >
            <span>全部方案與規格表</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div
            onClick={() => onNavigate('services', { serviceId: 'addr-basic' })}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#1D3A33]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 relative">
              <img
                src={realReception}
                alt="商辦大樓接待區與工商登記"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#1D3A33] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                熱門首選
              </span>
            </div>
            <p className="mt-5 text-sm font-bold text-[#3F6A86]">借址登記</p>
            <h3 className="mt-1 font-display text-xl font-bold text-[#1D3A33]">
              公司／商號登記地址
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#18201D]/70">
              適合在家工作、網路電商、接案者，需要合法、正式且專業的台中市西區營業地址。
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1D3A33] group-hover:text-[#3F6A86]">
              <span>看規格與價目</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => onNavigate('services', { serviceId: 'office-1' })}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#1D3A33]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 relative">
              <img
                src={realOffice}
                alt="一人獨立辦公室"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#3F6A86] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                即簽即住
              </span>
            </div>
            <p className="mt-5 text-sm font-bold text-[#3F6A86]">辦公空間</p>
            <h3 className="mt-1 font-display text-xl font-bold text-[#1D3A33]">
              一人獨立辦公室
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#18201D]/70">
              獨立門鎖、附全新辦公桌椅、文件收納櫃與高速網路。帶一台筆電，隨時開工。
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1D3A33] group-hover:text-[#3F6A86]">
              <span>看規格與價目</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => onNavigate('services', { serviceId: 'meet-s' })}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#1D3A33]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 relative">
              <img
                src={realMeeting}
                alt="小型會議室"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-[#26463F] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                時段租借
              </span>
            </div>
            <p className="mt-5 text-sm font-bold text-[#3F6A86]">會議空間</p>
            <h3 className="mt-1 font-display text-xl font-bold text-[#1D3A33]">
              小型會議室 (4–6人)
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#18201D]/70">
              依時段靈活預約，配備大型液晶螢幕、白板與投影支援，客戶簡報、面試簽約皆體面。
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#1D3A33] group-hover:text-[#3F6A86]">
              <span>看規格與價目</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS STEPS ================= */}
      <section className="bg-[#E1E7E3]/60 py-20 lg:py-28">
        <div className="mx-auto max-w-[1310px] gap-12 px-5 md:px-8 lg:grid lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start mb-10 lg:mb-0">
            <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
              SIMPLE ONBOARDING
            </span>
            <h2 className="font-display text-3xl font-bold leading-snug text-[#1D3A33] md:text-[2.65rem] mt-1">
              從詢問到拿到地址，
              <br />
              大概是這樣
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#18201D]/75">
              流程透明俐落，實際所需天數依政府機關審核而定。簽約前秘書會先協助核對營業項目與登記文件。
            </p>
            <div className="mt-8">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-flow inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-md cursor-pointer"
              >
                <span>立即預約現場參觀</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <ol className="space-y-8">
            <li className="grid grid-cols-[3.5rem_1fr] gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#1D3A33]/5">
              <span className="font-serif text-3xl font-black text-[#3F6A86]">01</span>
              <div>
                <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                  來電或填表，說明需求
                </h3>
                <p className="mt-2 leading-relaxed text-[#18201D]/75">
                  公司或行號、預計營業項目、是否需要固定辦公座位，秘書第一時間告知最適合您的方案與費用。
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#1D3A33]/5">
              <span className="font-serif text-3xl font-black text-[#3F6A86]">02</span>
              <div>
                <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                  現場參觀環境
                </h3>
                <p className="mt-2 leading-relaxed text-[#18201D]/75">
                  到台中市西區美村路一段22號7樓實地走走，親自確認接待櫃台、辦公室採光、會議室設備，滿意再決定。
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#1D3A33]/5">
              <span className="font-serif text-3xl font-black text-[#3F6A86]">03</span>
              <div>
                <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                  簽約、取得租賃與同意文件
                </h3>
                <p className="mt-2 leading-relaxed text-[#18201D]/75">
                  即刻核發登記所需之最新房屋稅單、建物所有權人同意書與租賃契約書，提供會計師或事務所直接送件。
                </p>
              </div>
            </li>

            <li className="grid grid-cols-[3.5rem_1fr] gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#1D3A33]/5">
              <span className="font-serif text-3xl font-black text-[#3F6A86]">04</span>
              <div>
                <h3 className="font-display text-xl font-bold text-[#1D3A33]">
                  完成登記，開始收信與使用空間
                </h3>
                <p className="mt-2 leading-relaxed text-[#18201D]/75">
                  政府經發局核准後，地址正式生效。信件包裹代收與通知、會議室時數預約、商務洽談隨即開通使用。
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= CLIENT QUOTE ================= */}
      <section className="mx-auto max-w-[1310px] px-5 py-20 md:px-8 lg:py-24">
        <figure className="mx-auto max-w-3xl text-center bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#1D3A33]/10">
          <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-relaxed text-[#1D3A33]">
            「原本以為借址就是買一個地址而已。後來台北廠商來台中拜訪，我直接約在七樓會議室，對方說：你們辦公室在SOGO旁邊啊，真體面又方便！」
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3 text-base text-[#18201D]/70">
            <span className="h-px w-8 bg-[#3F6A86]"></span>
            <span className="font-bold text-[#1D3A33]">陳先生</span>
            <span>／ 網路電商品牌創辦人（真實租戶推薦）</span>
          </figcaption>
        </figure>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section className="border-t border-[#1D3A33]/15 bg-[#F2F0EB]">
        <div className="mx-auto max-w-[1310px] gap-12 px-5 py-20 md:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="font-display text-3xl font-bold text-[#1D3A33] md:text-4xl mt-1">
              常被問到的事
            </h2>
            <p className="mt-4 text-base text-[#18201D]/70 max-w-sm">
              對營業登記、郵件收發或實體辦公室還有疑問？歡迎隨時致電 (04) 2328-1008 為您詳解。
            </p>
          </div>

          <div className="divide-y divide-[#1D3A33]/15 border-y border-[#1D3A33]/15 mt-8 lg:mt-0">
            <details className="group py-6 cursor-pointer">
              <summary className="flex items-center justify-between gap-4 font-display text-lg font-bold text-[#1D3A33] list-none">
                <span>借址登記是合法的嗎？</span>
                <Plus className="h-5 w-5 text-[#3F6A86] group-open:rotate-45 transition-transform" />
              </summary>
              <p className="mt-4 leading-relaxed text-[#18201D]/75 text-base">
                完全合法。以商務中心租賃契約取得營業登記地址是台灣商業登記極為普遍且受主管機關肯認之合法模式。亞巨建物使用執照符合商業使用，簽約前秘書會先協助確認您的營業項目。
              </p>
            </details>

            <details className="group py-6 cursor-pointer">
              <summary className="flex items-center justify-between gap-4 font-display text-lg font-bold text-[#1D3A33] list-none">
                <span>費用怎麼算？有最短租期限制嗎？</span>
                <Plus className="h-5 w-5 text-[#3F6A86] group-open:rotate-45 transition-transform" />
              </summary>
              <p className="mt-4 leading-relaxed text-[#18201D]/75 text-base">
                借址登記一般以年約為主，簽長約享有特惠折扣；獨立辦公室可依需求彈性預約或簽訂半年至一年合約。各方案價目透明，簽約前白紙黑字寫清楚，不巧立名目加收清潔費或管理雜費。
              </p>
            </details>

            <details className="group py-6 cursor-pointer">
              <summary className="flex items-center justify-between gap-4 font-display text-lg font-bold text-[#1D3A33] list-none">
                <span>國稅局臨檢或銀行照會怎麼辦？</span>
                <Plus className="h-5 w-5 text-[#3F6A86] group-open:rotate-45 transition-transform" />
              </summary>
              <p className="mt-4 leading-relaxed text-[#18201D]/75 text-base">
                亞巨平日上班時間皆有專任秘書駐守接待櫃台。國稅局訪查員、銀行照會人員或公證人前來時，秘書會妥善專業接待並第一時間通知負責人，亦可配合提供會議室受訪。
              </p>
            </details>

            <details className="group py-6 cursor-pointer">
              <summary className="flex items-center justify-between gap-4 font-display text-lg font-bold text-[#1D3A33] list-none">
                <span>未來業務擴充，想轉成獨立辦公室可以嗎？</span>
                <Plus className="h-5 w-5 text-[#3F6A86] group-open:rotate-45 transition-transform" />
              </summary>
              <p className="mt-4 leading-relaxed text-[#18201D]/75 text-base">
                當然可以！因為本中心同在美村路一段22號7樓，由借址升級獨立辦公室時，公司登記地址完全不需要做變更，無須支付變更登記規費與重新印製名片。
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA BANNER ================= */}
      <section className="bg-[#1D3A33] text-[#F2F0EB]">
        <div className="mx-auto grid max-w-[1310px] items-center gap-10 px-5 py-20 md:px-8 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#A9C4BA]/20 text-[#A9C4BA] text-sm font-semibold mb-4">
              WELCOME TO VISIT
            </div>
            <h2 className="font-display text-3xl font-bold leading-snug sm:text-4xl md:text-5xl">
              先來七樓看看，
              <br />
              再決定要不要簽。
            </h2>
            <p className="mt-4 text-[#E1E7E3] text-lg">
              隨時歡迎預約實地參觀，現場體驗辦公環境、採光與商務中心各項配備。
            </p>
          </div>

          <div className="lg:justify-self-end bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-sm font-bold text-[#A9C4BA] uppercase tracking-wider">
              專人諮詢專線
            </p>
            <p className="mt-1">
              <a
                href="tel:0423281008"
                className="font-serif text-3xl sm:text-4xl font-bold text-white underline decoration-[#A9C4BA]/50 hover:text-[#A9C4BA] transition-colors"
              >
                04 2328 1008
              </a>
            </p>
            <p className="mt-2 text-xs text-[#E1E7E3]">週一至週五 09:00–18:00 專人接聽</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-flow inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-lg cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                <span>預約參觀</span>
              </button>

              <button
                onClick={() => onNavigate('services', { scrollTarget: 'downloads' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-white/40 hover:bg-white hover:text-[#1D3A33] transition-colors cursor-pointer"
              >
                <span>下載價目表</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
