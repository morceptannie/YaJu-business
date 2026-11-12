import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  FileCheck, 
  Download, 
  Check, 
  Phone, 
  X, 
  FileSignature, 
  ClipboardList, 
  ListChecks, 
  Calendar,
  Building,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import realOffice from '../assets/client_photos/yaju_real_1.jpg';
import realLounge from '../assets/client_photos/yaju_real_2.jpg';
import realReception from '../assets/client_photos/yaju_real_3.jpg';
import realMeeting from '../assets/client_photos/yaju_real_4.jpg';
import realTeam from '../assets/client_photos/yaju_real_5.jpg';
import realCorridor from '../assets/client_photos/yaju_real_6.jpg';
import realTea from '../assets/client_photos/yaju_real_7.jpg';
import realPrivate from '../assets/client_photos/yaju_real_8.jpg';
import realPrint from '../assets/client_photos/yaju_real_9.jpg';

interface ServicesPageProps {
  initialServiceId?: string;
  initialScrollTarget?: string;
  onNavigate: (page: string, params?: { serviceId?: string; prefilledPlan?: string }) => void;
  onShowToast: (message: string) => void;
}

interface ServiceItem {
  id: string;
  catId: 'reg' | 'office' | 'meeting' | 'admin';
  catName: string;
  name: string;
  shortDesc: string;
  desc: string;
  img: string;
  priceHint: string;
  spec: [string, string][];
  files: string[];
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialServiceId,
  initialScrollTarget,
  onNavigate,
  onShowToast,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'reg' | 'office' | 'meeting' | 'admin'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'addr-basic',
      catId: 'reg',
      catName: '借址登記',
      name: '公司／商號登記地址',
      shortDesc: '合法頂級商辦營業地址，提供登記所需租約與同意書文件。',
      desc: '以台中市西區美村路一段22號7樓作為公司或商號的合法營業登記地址，提供經發局與國稅局審核所需之最新租賃契約書、建物所有權人同意書及房屋稅單。適合居家辦公、網路電商、接案者與外縣市企業設立台中聯絡處。',
      img: realReception,
      priceHint: '月租 NT$ 1,500 起',
      spec: [
        ['使用地址', '台中市西區美村路一段22號7樓（SOGO旁）'],
        ['適用對象', '有限公司、股份有限公司、獨資行號、分公司'],
        ['提供文件', '商業租賃契約書、建物所有權人同意書、最新房屋稅單'],
        ['信件處理', '一般商業平信收件保管'],
        ['會議室回饋', '簽約即贈送每月會議室免費時數'],
      ],
      files: ['亞巨商務中心_服務價目表_示意.txt', '公司登記所需文件清單_示意.txt'],
    },
    {
      id: 'addr-mail',
      catId: 'reg',
      catName: '借址登記',
      name: '登記地址＋信件代收管理',
      shortDesc: '公文掛號代收、即時通知，重要公函絕不漏接。',
      desc: '在合法商業登記地址基礎上，由秘書親手簽收政府公文、法院掛號信函、國稅局照會、銀行支票與廠商快遞。當日建立紀錄並透過電話或 LINE 專人通知，可隨時自取或依約定期轉寄。',
      img: realPrint,
      priceHint: '月租 NT$ 2,000 起',
      spec: [
        ['服務內容', '合法商業登記地址 ＋ 專人公文掛號包裹代收'],
        ['到件通知', '每日專人拍照或 LINE / 電話即時通知'],
        ['轉寄服務', '可依指定地址每週/隔週掛號定期轉寄'],
        ['國稅局照會', '專職秘書現場接待陪同照會說明'],
      ],
      files: ['亞巨商務中心_服務價目表_示意.txt', '租賃契約範本_示意.txt'],
    },
    {
      id: 'office-1',
      catId: 'office',
      catName: '辦公空間',
      name: '一人獨立辦公室',
      shortDesc: '可上鎖私密空間，附全套桌椅與光纖網路，帶筆電即可進駐。',
      desc: '獨立門鎖專屬空間，已配置人體工學辦公桌椅、可鎖文件抽屜櫃與高速有線無線網路。冷氣空調全天候供應，可免費設立營業登記，接待區與會議室資源隨時共享，真正實現一卡皮箱即刻開工。',
      img: realOffice,
      priceHint: '請洽秘書空室專案報價',
      spec: [
        ['容納人數', '1–2 人'],
        ['內部配備', '專屬辦公桌、人體工學椅、三層活動活動活動活動活動活動可鎖收納櫃'],
        ['網路通訊', '獨立企業級對稱光纖高速網路、高速 Wi-Fi 6'],
        ['門禁安全', '24小時門禁密碼卡、公共區域防盜監控'],
        ['可否登記', '免費提供公司營業地址登記'],
      ],
      files: ['亞巨商務中心_服務價目表_示意.txt', '租賃契約範本_示意.txt'],
    },
    {
      id: 'office-team',
      catId: 'office',
      catName: '辦公空間',
      name: '2–4 人團隊專屬辦公室',
      shortDesc: '精緻小團隊辦公室，省下自租辦公室的裝潢期與高額押金。',
      desc: '適合 2 至 4 人精實團隊或區域分公司。空間寬敞明亮，依實際人數客製化配置辦公桌組。免除自租商辦龐大的仲介費、水電瓦斯申請、公共設施分攤與高額裝修折舊。',
      img: realTeam,
      priceHint: '依簽約期優惠報價',
      spec: [
        ['容納人數', '2–4 人'],
        ['空間配置', '多人多桌配置，附收納抽屜與獨立電線集線槽'],
        ['空調水電', '冷氣水電及管理費全包，無額外分攤費'],
        ['免費茶水', 'RO逆滲透飲水機、現磨義式咖啡茶飲無限享用'],
        ['會議室時數', '每月加贈充裕會議室免費使用時數'],
      ],
      files: ['亞巨商務中心_服務價目表_示意.txt', '租賃契約範本_示意.txt'],
    },
    {
      id: 'desk',
      catId: 'office',
      catName: '辦公空間',
      name: '共享流動辦公座位',
      shortDesc: '彈性靈活使用，適合偶爾進辦公室處理事務的創業者。',
      desc: '不需要固定大坪數辦公室，但需要安靜高效的工作環境。提供插座電源、穩定 Wi-Fi、茶水吧台與多功能事務機支援。可隨心搭配借址登記方案，兼顧靈活性與專業形象。',
      img: realLounge,
      priceHint: '彈性月租 / 儲值方案',
      spec: [
        ['使用方式', '平日 09:00–18:00 自由選擇空位入座'],
        ['附屬設備', '全區高速 Wi-Fi、充電插座、飲品自助'],
        ['行政支援', '享秘書一般性接待與列印掃描服務'],
        ['可否登記', '可搭配借址登記享套裝優惠折扣'],
      ],
      files: ['亞巨商務中心_服務價目表_示意.txt'],
    },
    {
      id: 'meet-s',
      catId: 'meeting',
      catName: '會議空間',
      name: '小型商務會議室 (4–6人)',
      shortDesc: '適合 4–6 人的客戶簡報、面試、合約簽署。',
      desc: '極具隱私的正式會議環境，配備大型 4K 液晶螢幕、白板與視訊會議設備。來訪客戶出電梯即由秘書接待帶位並奉上飲用水，為您的企業形象大大加分。',
      img: realMeeting,
      priceHint: '時租 NT$ 350 起（租戶享扣抵）',
      spec: [
        ['容納人數', '4–6 人標準會議桌椅'],
        ['影音設備', '大尺寸高解析度顯示螢幕、HDMI/Type-C投影轉接'],
        ['會議配件', '磁性玻璃白板、白板筆組、雷射簡報筆'],
        ['接待服務', '秘書迎賓接待、提供冷熱飲水及咖啡'],
      ],
      files: ['會議室使用須知_示意.txt', '亞巨商務中心_服務價目表_示意.txt'],
    },
    {
      id: 'meet-l',
      catId: 'meeting',
      catName: '會議空間',
      name: '中型多功能會議室 (8–12人)',
      shortDesc: '適合董事會議、團隊內部培訓、小型產品說明會。',
      desc: '中型會議規格，桌型可依活動靈活微調。備有高畫質投影系統、擴音設備與白板。位處台中西區SOGO商圈，外縣市與本地夥伴交通均極便利。',
      img: realCorridor,
      priceHint: '時租 / 半日專案特惠',
      spec: [
        ['容納人數', '8–12 人（可彈性調整排椅）'],
        ['設備清單', '長桌、舒適會議椅、高解析投影機/大螢幕、白板'],
        ['預約機制', '專屬線上系統或電話預約，保留專屬時段'],
        ['加值項目', '可協助代訂會議精緻茶點與便當'],
      ],
      files: ['會議室使用須知_示意.txt'],
    },
    {
      id: 'setup',
      catId: 'admin',
      catName: '行政代辦',
      name: '公司設立與登記流程協助',
      shortDesc: '公司名稱預查、營業項目代碼確認、代送經發局審核。',
      desc: '初次創業不知從何開始？亞巨提供一條龍引導，協助公司行號名稱預查、資本額驗資管道媒合、章程擬定，並搭配本商務中心租約文件直接送交主管機關。',
      img: realTea,
      priceHint: '配合登記方案享專案特惠',
      spec: [
        ['輔導內容', '名稱預查、營業代碼諮詢、備齊送件表單'],
        ['辦理時效', '依主管機關核定，一般約 5–7 個工作天'],
        ['配套優勢', '搭配借址登記，文件一次備妥免奔波'],
      ],
      files: ['公司登記所需文件清單_示意.txt'],
    },
    {
      id: 'tax',
      catId: 'admin',
      catName: '行政代辦',
      name: '會計記帳與營業稅申報轉介',
      shortDesc: '協助媒合優質專業記帳士與會計事務所，安心報稅。',
      desc: '公司設立後的開立發票、每雙月營業稅申報（401表）、五月營利事業所得稅結算申報與薪資扣繳。亞巨長期配合信譽良好之在地會計記帳士，收費透明公正，服務免煩惱。',
      img: realPrivate,
      priceHint: '依營業額與發票量由會計師報價',
      spec: [
        ['服務範圍', '雙月營業稅申報、年度營所稅申報、帳務整理'],
        ['諮詢支援', '節稅規劃與國稅局相關稅務諮詢'],
      ],
      files: ['亞巨商務中心_服務價目表_示意.txt'],
    },
  ];

  // Handle initialServiceId and scroll targets
  useEffect(() => {
    if (initialServiceId) {
      const match = services.find((s) => s.id === initialServiceId);
      if (match) {
        setSelectedService(match);
      }
    }
    if (initialScrollTarget === 'downloads') {
      setTimeout(() => {
        const el = document.getElementById('downloads');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [initialServiceId, initialScrollTarget]);

  const filteredServices =
    activeFilter === 'all'
      ? services
      : services.filter((s) => s.catId === activeFilter);

  // File Download simulation
  const handleDownloadFile = (fileName: string) => {
    try {
      const content = `===============================\n亞巨聯合商務中心 YA JU BUSINESS CENTER\n文件名稱：${fileName.replace('.txt', '')}\n===============================\n\n【此為官方示範文件】\n地址：台中市西區美村路一段22號7樓（SOGO旁）\n專線：(04) 2328-1008\n服務時間：週一至週五 09:00 - 18:00\n\n感謝您的下載！正式簽約與送件前，請由亞巨專任秘書為您確認營業項目與最新主管機關要求。\n歡迎隨時來電洽詢或預約實地參觀。`;
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      onShowToast(`已成功下載：${fileName.replace('.txt', '')}`);
    } catch {
      onShowToast('下載啟動中...');
    }
  };

  return (
    <div className="w-full">
      {/* ================= HEADER ================= */}
      <section className="bg-[#1D3A33] text-[#F2F0EB] py-16 md:py-24">
        <div className="mx-auto max-w-[1310px] px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[#A9C4BA] font-bold text-sm tracking-wider uppercase">
                SERVICES & SPECIFICATIONS
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
                服務方案與規格表
              </h1>
              <p className="mt-4 max-w-xl text-lg text-[#E1E7E3]">
                依業務型態點選分類。點擊任一方案可檢視詳細規格說明、包含項目與示範文件下載。
              </p>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2.5 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#F2F0EB] text-[#1D3A33] shadow-md'
                    : 'text-[#E1E7E3] hover:text-white'
                }`}
              >
                全部方案
              </button>
              <button
                onClick={() => setActiveFilter('reg')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === 'reg'
                    ? 'bg-[#F2F0EB] text-[#1D3A33] shadow-md'
                    : 'text-[#E1E7E3] hover:text-white'
                }`}
              >
                借址登記
              </button>
              <button
                onClick={() => setActiveFilter('office')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === 'office'
                    ? 'bg-[#F2F0EB] text-[#1D3A33] shadow-md'
                    : 'text-[#E1E7E3] hover:text-white'
                }`}
              >
                辦公空間
              </button>
              <button
                onClick={() => setActiveFilter('meeting')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === 'meeting'
                    ? 'bg-[#F2F0EB] text-[#1D3A33] shadow-md'
                    : 'text-[#E1E7E3] hover:text-white'
                }`}
              >
                會議空間
              </button>
              <button
                onClick={() => setActiveFilter('admin')}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === 'admin'
                    ? 'bg-[#F2F0EB] text-[#1D3A33] shadow-md'
                    : 'text-[#E1E7E3] hover:text-white'
                }`}
              >
                行政代辦
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATALOG GRID ================= */}
      <section className="mx-auto max-w-[1310px] px-5 py-16 md:px-8 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedService(item)}
              className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-[#1D3A33]/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 relative">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#1D3A33]/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {item.catName}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-[#1D3A33] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {item.priceHint}
                  </span>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#3F6A86]">
                    {item.catName}
                  </p>
                  <h3 className="font-display text-xl font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors mt-0.5">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#18201D]/75 line-clamp-2">
                    {item.shortDesc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#3F6A86] group-hover:text-[#1D3A33] transition-colors">
                  點擊查看規格細節與下載
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#3F6A86]/10 text-[#3F6A86] group-hover:bg-[#1D3A33] group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="bg-white py-20 border-y border-[#1D3A33]/10">
        <div className="mx-auto max-w-[1310px] px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
              PLAN COMPARISON
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3A33] mt-1">
              主力三大方案快速對比
            </h2>
            <p className="mt-3 text-base text-[#18201D]/70">
              清楚掌握各方案所涵蓋之權益與軟硬體支援，透明無隱藏費用。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#1D3A33]/15 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1D3A33] text-white">
                  <th className="p-4 sm:p-5 font-bold w-1/4">服務項目 / 方案</th>
                  <th className="p-4 sm:p-5 font-bold text-center w-1/4">公司登記借址</th>
                  <th className="p-4 sm:p-5 font-bold text-center w-1/4 bg-[#26463F]">
                    登記＋信件代收
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-center w-1/4">獨立專屬辦公室</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1D3A33]/10 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">台中西區美村路登記地址</td>
                  <td className="p-4 text-center text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center bg-emerald-50/30 text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">主管機關合規租賃契約書</td>
                  <td className="p-4 text-center text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center bg-emerald-50/30 text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">公文掛號信函每日代收與通知</td>
                  <td className="p-4 text-center text-slate-400">僅收平信</td>
                  <td className="p-4 text-center bg-emerald-50/30 text-[#1D3A33] font-bold"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center text-[#1D3A33] font-bold"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">實體獨立辦公桌椅與門鎖</td>
                  <td className="p-4 text-center text-slate-400">—</td>
                  <td className="p-4 text-center bg-emerald-50/30 text-slate-400">—</td>
                  <td className="p-4 text-center text-[#1D3A33] font-bold"><Check className="h-5 w-5 mx-auto text-emerald-600" /> 全配</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">商務會議室免費扣抵時數</td>
                  <td className="p-4 text-center text-slate-600">贈送基本時數</td>
                  <td className="p-4 text-center bg-emerald-50/30 text-slate-800 font-medium">贈送基本時數</td>
                  <td className="p-4 text-center text-[#1D3A33] font-bold">加贈充裕時數</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">專職秘書現場迎賓接待</td>
                  <td className="p-4 text-center text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center bg-emerald-50/30 text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                  <td className="p-4 text-center text-[#1D3A33]"><Check className="h-5 w-5 mx-auto text-emerald-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-[#1D3A33]">光纖高速網路 & 飲品吧台</td>
                  <td className="p-4 text-center text-slate-400">訪客時使用</td>
                  <td className="p-4 text-center bg-emerald-50/30 text-slate-400">訪客時使用</td>
                  <td className="p-4 text-center text-[#1D3A33] font-bold"><Check className="h-5 w-5 mx-auto text-emerald-600" /> 全天免費</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENT DOWNLOADS AREA ================= */}
      <section id="downloads" className="bg-[#E1E7E3]/60 py-20 md:py-28">
        <div className="mx-auto max-w-[1310px] gap-12 px-5 md:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[#3F6A86] font-bold text-sm tracking-wider uppercase">
              DOWNLOAD CENTER
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1D3A33] mt-1">
              實用表單與文件下載
            </h2>
            <p className="mt-4 text-[#18201D]/75 leading-relaxed text-base">
              送件或簽約前先看看要準備哪些文件與規範。點擊按鈕即可立即下載示範檔案檢視。
            </p>
          </div>

          <div className="divide-y divide-[#1D3A33]/15 border-y border-[#1D3A33]/15 mt-8 lg:mt-0">
            <button
              onClick={() => handleDownloadFile('亞巨商務中心_服務價目表_示意.txt')}
              className="group flex w-full items-center justify-between gap-4 py-5 px-3 text-left hover:bg-white/60 rounded-xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
                  <FileText className="h-6 w-6" />
                </span>
                <div>
                  <span className="block font-display text-lg font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors">
                    亞巨商務中心 完整服務價目表
                  </span>
                  <span className="text-xs text-[#18201D]/60">包含各方案年繳/半年繳優惠折扣・示意文件</span>
                </div>
              </div>
              <Download className="h-5 w-5 text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors" />
            </button>

            <button
              onClick={() => handleDownloadFile('公司登記所需文件清單_示意.txt')}
              className="group flex w-full items-center justify-between gap-4 py-5 px-3 text-left hover:bg-white/60 rounded-xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
                  <ListChecks className="h-6 w-6" />
                </span>
                <div>
                  <span className="block font-display text-lg font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors">
                    公司／商號設立登記文件清單
                  </span>
                  <span className="text-xs text-[#18201D]/60">送件主管機關必備證件、印鑑與表單核對表・示意文件</span>
                </div>
              </div>
              <Download className="h-5 w-5 text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors" />
            </button>

            <button
              onClick={() => handleDownloadFile('租賃契約範本_示意.txt')}
              className="group flex w-full items-center justify-between gap-4 py-5 px-3 text-left hover:bg-white/60 rounded-xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
                  <FileSignature className="h-6 w-6" />
                </span>
                <div>
                  <span className="block font-display text-lg font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors">
                    商務中心房屋租賃契約書範本
                  </span>
                  <span className="text-xs text-[#18201D]/60">標準合約條款，合規透明，權益有保障・示意文件</span>
                </div>
              </div>
              <Download className="h-5 w-5 text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors" />
            </button>

            <button
              onClick={() => handleDownloadFile('會議室使用須知_示意.txt')}
              className="group flex w-full items-center justify-between gap-4 py-5 px-3 text-left hover:bg-white/60 rounded-xl transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#3F6A86]/15 text-[#3F6A86]">
                  <ClipboardList className="h-6 w-6" />
                </span>
                <div>
                  <span className="block font-display text-lg font-bold text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors">
                    七樓會議室使用管理須知
                  </span>
                  <span className="text-xs text-[#18201D]/60">時數預約、取消條款、投影與茶水規定・示意文件</span>
                </div>
              </div>
              <Download className="h-5 w-5 text-[#1D3A33] group-hover:text-[#3F6A86] transition-colors" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DETAIL MODAL ================= */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#F2F0EB] shadow-2xl border border-[#1D3A33]/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 hover:bg-white text-[#1D3A33] shadow-md transition-colors cursor-pointer"
              aria-label="關閉"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[280px] bg-[#1D3A33]">
                <img
                  src={selectedService.img}
                  alt={selectedService.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-[#3F6A86] text-xs font-bold px-3 py-1 rounded-full">
                    {selectedService.catName}
                  </span>
                  <h2 className="font-display text-2xl font-bold mt-2">
                    {selectedService.name}
                  </h2>
                </div>
              </div>

              <div className="p-7 md:p-9 flex flex-col justify-between">
                <div>
                  <p className="text-sm font-bold text-[#3F6A86]">
                    {selectedService.priceHint}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#18201D]/80">
                    {selectedService.desc}
                  </p>

                  <div className="mt-6">
                    <h4 className="font-display font-bold text-sm text-[#1D3A33] border-b border-[#1D3A33]/15 pb-2">
                      方案規格明細
                    </h4>
                    <table className="w-full text-xs mt-3">
                      <tbody>
                        {selectedService.spec.map(([k, v], idx) => (
                          <tr key={idx} className="border-b border-[#1D3A33]/10">
                            <th className="py-2.5 pr-2 text-left font-bold text-[#1D3A33] w-28 align-top">
                              {k}
                            </th>
                            <td className="py-2.5 text-[#18201D]/80 leading-normal">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Files inside modal */}
                  <div className="mt-6 space-y-2">
                    <p className="text-xs font-bold text-[#1D3A33]">相關參考文件：</p>
                    {selectedService.files.map((file, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDownloadFile(file)}
                        className="flex w-full items-center justify-between rounded-xl bg-white p-3 text-xs font-bold text-[#1D3A33] hover:text-[#3F6A86] border border-[#1D3A33]/10 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-3.5 w-3.5 text-[#3F6A86]" />
                          {file.replace('.txt', '')}
                        </span>
                        <span className="text-[0.65rem] bg-slate-100 px-2 py-0.5 rounded text-slate-500">
                          點擊下載
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1D3A33]/10 flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      const planName = selectedService.name;
                      setSelectedService(null);
                      onNavigate('contact', { prefilledPlan: planName });
                    }}
                    className="btn-flow flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white shadow-md cursor-pointer"
                  >
                    <span>線上預約詢價</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href="tel:0423281008"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-sm font-bold border border-[#1D3A33] text-[#1D3A33] hover:bg-[#1D3A33] hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>04 2328 1008</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
