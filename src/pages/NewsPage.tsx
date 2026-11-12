import React, { useState } from 'react';
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  X, 
  Share2, 
  Check, 
  Copy, 
  MessageCircle, 
  Facebook, 
  Twitter,
  Building,
  Sparkles
} from 'lucide-react';
import realOffice from '../assets/client_photos/yaju_real_1.jpg';
import realMeeting from '../assets/client_photos/yaju_real_4.jpg';
import realReception from '../assets/client_photos/yaju_real_3.jpg';
import realLounge from '../assets/client_photos/yaju_real_2.jpg';

interface ArticleItem {
  id: string;
  tag: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
  img: string;
}

interface NewsPageProps {
  onNavigate: (page: string, params?: { prefilledPlan?: string }) => void;
  onShowToast: (message: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate, onShowToast }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const articles: ArticleItem[] = [
    {
      id: 'a1',
      tag: '空室公告',
      date: '2025.02.15',
      title: '七樓獨立辦公室釋出，開放預約參觀',
      summary: '適合 1–2 人團隊進駐，附全新辦公桌椅與高速光纖網路，有興趣可先來電預約看房時段。',
      content: [
        '近期亞巨聯合商務中心七樓有一間精選獨立辦公室即將釋出，空間方正明亮，非常適合 1–2 人初創團隊、專業代書會計顧問或網路電商負責人使用。',
        '房間已配備原木質感辦公桌、人體工學椅、三層活動活動可鎖收納櫃，全區已拉妥對稱光纖高速網路與獨立插座迴路。冷氣空調供應，出入採獨立門鎖及24小時刷卡門禁，安全隱密。',
        '若您目前已在亞巨使用借址登記方案，升級至實體獨立辦公室時「公司登記地址完全相同」，無須重新辦理工商變更登記，亦不需支付代辦手續費及重新印製名片。',
        '歡迎有意承租之創業者隨時致電 (04) 2328-1008 或透過官網線上預約參觀時段，我們將由專任秘書為您實地導覽介紹。',
      ],
      img: realOffice,
    },
    {
      id: 'a2',
      tag: '登記法規',
      date: '2025.01.28',
      title: '借址登記前，先確認營業項目代碼與法規禁制',
      summary: '部分特許行業或特定實體倉儲業態可能不適用純登記，送件前先確認最保險。',
      content: [
        '多數一般營業項目（如：資訊軟體服務業、網路國際貿易、管理顧問業、電子商務、室內設計等）皆能以商務中心合法商業地址作為設立登記。',
        '然而，部分特許行業（例如菸酒批發、特定醫療器材製造業、營造業、需要實體大型廠房之工業項目）依法規有明確之現場營業場所、消防規格或分區土地使用管制限制，無法單純以商務中心純借址辦理。',
        '在您簽約送件之前，請先將預計設立之「營業項目代碼」提供予亞巨秘書，我們配合的資深會計師將免費為您提前審查確認，避免繳交規費後遭經濟部經發局或國稅局退件。',
      ],
      img: realReception,
    },
    {
      id: 'a3',
      tag: '服務公告',
      date: '2025.01.12',
      title: '商務中心會議室預約流程與時段租借須知',
      summary: '電話或 LINE 預約，提前確認時段、投影支援與人數，簽約租戶享免費時數扣抵。',
      content: [
        '亞巨聯合商務中心設有 4–6 人小型商務會議室與 8–12 人中型多功能會議室，配備大螢幕顯示系統、無線投影轉接頭與磁性玻璃白板。',
        '【預約方式】：進駐租戶及外部借用客戶均可於使用前 1 至 7 天，透過服務電話或專屬 LINE 官方帳號登記預約所需日期、起迄時段及預估與會人數。',
        '【迎賓服務】：會議當天訪客抵達七樓時，櫃台秘書將協助親切引導至會議室，並提供冷熱開水與紙杯。若有自備茶點需求，亦可提前告知我們協助冷藏與整理。',
        '【取消與異動】：為保障每位租戶公平使用權益，若需取消或調整時段，請至少於使用前 4 小時告知櫃台，感謝大家的配合！',
      ],
      img: realMeeting,
    },
    {
      id: 'a4',
      tag: '登記知識',
      date: '2024.12.20',
      title: '公司設立 vs 行號登記：責任、稅賦與適合對象差異全解析',
      summary: '責任、稅務發票與適合對象的簡單整理，初創老闆必讀基礎課。',
      content: [
        '創業者在成立事業體時，最常面臨的第一道抉擇就是：到底該開「有限公司」還是「獨資／合夥行號」？',
        '1. 法律責任承擔：行號的負責人負擔「無限清償責任」，若事業發生債務，負責人需以個人及家庭全部私有財產償還；而有限公司股東僅以「出資額為限」負有限責任，個人財產受到法律屏障保障。',
        '2. 稅務與發票：行號營業額若未達 20 萬元，有機會申請免用統一發票（但國稅局核定嚴格）；有限公司則依法必須開立統一發票，帳目清晰，日後向銀行申請青年創業貸款或企業融資更具公信力。',
        '3. 品牌擴展：公司名稱在全國具有專用獨佔權（跨縣市不能同名）；行號之名稱保護僅限於該縣市轄區內。',
        '若您的業務未來規劃跨縣市擴張、承接大型企業合約或引進投資人，建議直接設立「有限公司」最為穩健。',
      ],
      img: realLounge,
    },
  ];

  const handleShare = (platform: 'fb' | 'line' | 'tw' | 'copy') => {
    const url = window.location.href;
    const title = selectedArticle?.title || '亞巨聯合商務中心 最新消息';

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      onShowToast('已複製文章連結至剪貼簿！');
      setTimeout(() => setCopiedLink(false), 2000);
      return;
    }

    if (platform === 'fb') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'line') {
      window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'tw') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
    }
  };

  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <section className="bg-[#1D3A33] text-[#F2F0EB] py-16 md:py-24">
        <div className="mx-auto max-w-[1310px] px-5 md:px-8">
          <span className="text-[#A9C4BA] font-bold text-sm tracking-wider uppercase">
            ANNOUNCEMENTS & BUSINESS INSIGHTS
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
            最新消息與專欄
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[#E1E7E3]">
            空室釋出、登記法規提醒、會議室時段公告，都會寫在這裡。
          </p>
        </div>
      </section>

      {/* ================= ARTICLES LIST ================= */}
      <section className="mx-auto max-w-[1310px] px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          {/* Main Hero Article */}
          <div
            onClick={() => setSelectedArticle(articles[0])}
            className="group cursor-pointer rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-[#1D3A33]/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 relative">
              <img
                src={articles[0].img}
                alt={articles[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-[#3F6A86] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                {articles[0].tag}
              </span>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3F6A86]">
                <Calendar className="h-3.5 w-3.5" />
                <span>{articles[0].date}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors mt-2">
                {articles[0].title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#18201D]/75">
                {articles[0].summary}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors">
                <span>閱讀完整文章</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Side Articles List */}
          <div className="divide-y divide-[#1D3A33]/15 border-y border-[#1D3A33]/15 flex flex-col justify-between">
            {articles.slice(1).map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="group cursor-pointer py-6 hover:bg-white/60 p-4 rounded-xl transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#3F6A86]/10 text-[#3F6A86]">
                    {art.tag}
                  </span>
                  <span className="text-xs text-[#18201D]/50">{art.date}</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors mt-2">
                  {art.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#18201D]/70 line-clamp-2">
                  {art.summary}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#3F6A86]">
                  <span>詳閱內文</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARTICLE READER MODAL ================= */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F2F0EB] p-6 sm:p-10 shadow-2xl border border-[#1D3A33]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#1D3A33]/15 pb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1D3A33] text-white">
                {selectedArticle.tag}・{selectedArticle.date}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#1D3A33] hover:bg-slate-200 shadow-sm transition-colors cursor-pointer"
                aria-label="關閉"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1D3A33] leading-snug">
                {selectedArticle.title}
              </h2>

              <div className="mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-200">
                <img
                  src={selectedArticle.img}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#18201D]/85">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Share & Actions */}
              <div className="mt-8 pt-6 border-t border-[#1D3A33]/15">
                <p className="text-xs font-bold uppercase tracking-wider text-[#1D3A33]">
                  分享這篇文章：
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => handleShare('fb')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    <Facebook className="h-3.5 w-3.5" />
                    <span>Facebook</span>
                  </button>

                  <button
                    onClick={() => handleShare('line')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>LINE</span>
                  </button>

                  <button
                    onClick={() => handleShare('tw')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                    <span>X (Twitter)</span>
                  </button>

                  <button
                    onClick={() => handleShare('copy')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#1D3A33]/20 text-[#1D3A33] text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copiedLink ? '已複製' : '複製連結'}</span>
                  </button>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onNavigate('contact');
                  }}
                  className="btn-flow inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white shadow-md cursor-pointer"
                >
                  <span>立即諮詢預約</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
