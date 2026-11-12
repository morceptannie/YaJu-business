import React from 'react';
import { 
  Building, 
  MapPin, 
  ShieldCheck, 
  Mail, 
  Sparkles, 
  Users, 
  Coffee, 
  Wifi, 
  Clock, 
  Printer, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import real1 from '../assets/client_photos/yaju_real_1.jpg';
import real2 from '../assets/client_photos/yaju_real_2.jpg';
import real3 from '../assets/client_photos/yaju_real_3.jpg';
import real4 from '../assets/client_photos/yaju_real_4.jpg';
import real5 from '../assets/client_photos/yaju_real_5.jpg';
import real6 from '../assets/client_photos/yaju_real_6.jpg';
import real7 from '../assets/client_photos/yaju_real_7.jpg';
import real8 from '../assets/client_photos/yaju_real_8.jpg';
import real9 from '../assets/client_photos/yaju_real_9.jpg';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenImageModal: (src: string, caption: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenImageModal }) => {
  const realGallery = [
    { src: real3, title: '七樓形象接待櫃台', tag: '接待門面', desc: '專業秘書親切接待訪客與信件建檔' },
    { src: real1, title: '一人全配獨立辦公室', tag: '辦公空間', desc: '附全新桌椅、收納櫃、獨立門鎖' },
    { src: real4, title: '多功能商務會議室', tag: '會議空間', desc: '大尺寸高解析螢幕、白板與投影支援' },
    { src: real2, title: '舒適商務洽談交誼廳', tag: '公共區域', desc: '通透明亮休憩沙發區，訪客接待體面' },
    { src: real5, title: '2–4人小團隊辦公室', tag: '辦公空間', desc: '彈性模組化配置，一卡皮箱即刻開工' },
    { src: real7, title: '現磨咖啡與茶水休憩吧', tag: '茶水休憩', desc: 'RO逆滲透飲水機、冷熱茶水無限供應' },
    { src: real8, title: '採光景觀獨立辦公室', tag: '辦公空間', desc: '大面採光窗景，安靜舒適高隱私' },
    { src: real6, title: '七樓大樓電梯玄關走道', tag: '大樓環境', desc: '24小時全棟保全監控與刷卡門禁' },
    { src: real9, title: '多功能事務機與公文信件櫃', tag: '商務設備', desc: '高階影印列印掃描及專屬公司信箱' },
  ];

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="grid lg:grid-cols-2 bg-[#1D3A33] text-[#F2F0EB]">
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16 lg:py-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9C4BA]/20 text-[#A9C4BA] text-xs font-bold tracking-widest uppercase mb-4 w-fit">
            ABOUT YA JU BUSINESS CENTER
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            讓小公司，
            <br />
            也有像樣的門面
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#E1E7E3]">
            亞巨聯合商務中心位在台中市西區美村路一段22號7樓（廣三SOGO旁）。
            我們做的事很單純：把登記地址、收發信件、辦公室與會議室整理成清楚的方案，
            讓剛起步或正在擴張的團隊，不用先砸數十萬裝潢押金，就能用一個正式且有公信力的地址開始營運。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-flow inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white shadow-lg cursor-pointer"
            >
              <span>預約現場參觀</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-white/40 hover:bg-white hover:text-[#1D3A33] transition-colors cursor-pointer"
            >
              <span>查看全部服務</span>
            </button>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-full bg-[#132722]">
          <img
            src={real3}
            alt="亞巨聯合商務中心七樓形象櫃台"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132722] via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-white text-sm">
            <p className="font-bold">亞巨聯合商務中心實景拍攝</p>
            <p className="text-xs text-[#A9C4BA] mt-0.5">台中市西區美村路一段22號7樓</p>
          </div>
        </div>
      </section>

      {/* ================= THREE CORE VALUES ================= */}
      <section className="mx-auto max-w-[1310px] gap-12 px-5 py-24 md:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start mb-10 lg:mb-0">
          <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-display text-3xl font-bold text-[#1D3A33] md:text-4xl mt-1">
            我們在意的幾件事
          </h2>
          <p className="mt-4 text-[#18201D]/75 leading-relaxed">
            創業與經營公司已經有太多瑣碎雜務，我們希望商務中心的存在是為你消除麻煩，而不是製造新的隱藏成本。
          </p>
        </div>

        <div className="space-y-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1D3A33]/10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#3F6A86]/10 text-[#3F6A86] font-bold">
                1
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1D3A33]">
                價格先講清楚
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#18201D]/75">
              方案內含什麼、包含幾小時會議室、另外收費的是什麼，簽約前白紙黑字列出來。絕不會讓你租了之後才發現水電管理費被灌水、收信還要額外多收手工費。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1D3A33]/10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#3F6A86]/10 text-[#3F6A86] font-bold">
                2
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1D3A33]">
                信件絕對不漏接
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#18201D]/75">
              司法文書、法院通知、國稅局公文與重要支票是公司最怕漏掉的東西。亞巨秘書親手代收掛號信，每日入檔建立通知，依你的習慣即刻通知、拍照回傳或專函轉寄。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1D3A33]/10">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#3F6A86]/10 text-[#3F6A86] font-bold">
                3
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1D3A33]">
                空間始終維持在「可以隨時見客」的樣子
              </h3>
            </div>
            <p className="mt-4 text-base leading-relaxed text-[#18201D]/75">
              迎賓接待大廳、走道公區、會議室、化妝室皆有專人定時巡檢與清潔打掃。當你帶客戶或貴賓上七樓，落落大方、舒適體面，完全不需要事先感到尷尬或提前跟客人解釋。
            </p>
          </div>
        </div>
      </section>

      {/* ================= AUTHENTIC PHOTO GALLERY ================= */}
      <section className="bg-[#E1E7E3]/60 py-20 md:py-28">
        <div className="mx-auto max-w-[1310px] px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
                REAL SPACE GALLERY
              </span>
              <h2 className="font-display text-3xl font-bold text-[#1D3A33] md:text-4xl mt-1">
                七樓實體環境一覽
              </h2>
              <p className="mt-2 text-[#18201D]/70 text-base">
                點擊任一照片可放大檢視細節，全部為亞巨商務中心現場實景拍攝。
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="btn-flow inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-bold cursor-pointer"
            >
              <span>預約現場看房</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realGallery.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenImageModal(item.src, `${item.title} - ${item.desc}`)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm border border-[#1D3A33]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#1D3A33] shadow-md">
                      <Maximize2 className="h-5 w-5" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#1D3A33]/85 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#18201D]/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TARGET AUDIENCE ================= */}
      <section className="mx-auto max-w-[1310px] px-5 py-24 md:px-8">
        <div className="rounded-3xl bg-[#1D3A33] p-8 sm:p-12 md:p-16 text-[#F2F0EB]">
          <div className="max-w-3xl">
            <span className="text-[#A9C4BA] font-bold text-sm tracking-wider uppercase">
              WHO IS THIS FOR?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mt-2">
              亞巨商務中心，最適合以下團隊：
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 text-base text-[#E1E7E3]">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6 text-[#A9C4BA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-lg">一人公司／自由接案者</p>
                  <p className="mt-1 text-sm text-[#E1E7E3]/80">不願公開自家私人住址，想要專業門面與秘書代收掛號信件。</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6 text-[#A9C4BA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-lg">網路電商品牌與跨境賣家</p>
                  <p className="mt-1 text-sm text-[#E1E7E3]/80">國稅局營業稅籍登記必備合規商用租約，避免住家被課營業用高稅率。</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6 text-[#A9C4BA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-lg">外縣市企業在台中之聯絡處</p>
                  <p className="mt-1 text-sm text-[#E1E7E3]/80">台北或高雄公司欲深耕中部市場，在台中SOGO旁設立分公司或聯絡處。</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="h-6 w-6 text-[#A9C4BA] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-lg">初創科技／設計顧問團隊</p>
                  <p className="mt-1 text-sm text-[#E1E7E3]/80">進駐1-4人獨立辦公室，省下自租大樓的裝潢期、高額押金與維護人事。</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => onNavigate('services')}
                className="btn-flow inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white text-base shadow-xl cursor-pointer"
              >
                <span>尋找適合你的專案規格</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
