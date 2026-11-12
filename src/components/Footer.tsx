import React from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink, ArrowUp } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';

interface FooterProps {
  onNavigate: (page: string, params?: { serviceId?: string; scrollTarget?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string, params?: { serviceId?: string; scrollTarget?: string }) => {
    onNavigate(page, params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#132722] text-[#E1E7E3] text-xs border-t border-[#2B4D45]">
      {/* Main 4-Column Enfold Style Footer */}
      <div className="mx-auto max-w-[1310px] px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Logo & Brand Overview */}
          <div className="space-y-4">
            <div onClick={() => handleNav('home')} className="cursor-pointer">
              <CompanyLogo variant="footer" />
            </div>

            <p className="text-[#E1E7E3]/80 text-xs leading-relaxed pt-2">
              台中市西區廣三SOGO正隔壁棟，提供專業工商借址登記、1-4人獨立辦公室租賃、會議室時數借用與秘書代收發行政支援。
            </p>

            <div className="pt-2">
              <a
                href="https://www.facebook.com/p/%E4%BA%9E%E5%B7%A8%E8%81%AF%E5%90%88%E5%95%86%E5%8B%99%E4%B8%AD%E5%BF%83-Ya-Ju-BusinessCenter-100063969790975/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A9C4BA] hover:text-white font-bold transition-colors"
              >
                <span>追蹤官方 Facebook 粉絲專頁</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: 頁面選單 (Multi-Page Navigation) */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-[#2B4D45] pb-2">
              網站頁面
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  首頁 (Home)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  關於我們 (About Us)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  服務項目與價目 (Services)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  最新消息與專欄 (News)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  聯絡我們與預約參觀 (Contact)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: 精選方案與下載 */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-[#2B4D45] pb-2">
              服務方案與下載
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleNav('services', { serviceId: 'addr-basic' })}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  公司／商號營業地址登記
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', { serviceId: 'office-1' })}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  一人全配獨立辦公室
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', { serviceId: 'office-team' })}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  2–4 人團隊專屬辦公室
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', { serviceId: 'meet-s' })}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer"
                >
                  小型會議室時數租借
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services', { scrollTarget: 'downloads' })}
                  className="hover:text-[#A9C4BA] transition-colors text-left cursor-pointer text-[#A9C4BA] font-bold"
                >
                  下載價目表與登記文件清單 →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: 聯絡資訊 */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-[#2B4D45] pb-2">
              商務中心資訊
            </h4>
            <div className="flex items-start gap-2.5 text-[#E1E7E3]">
              <MapPin className="w-4 h-4 text-[#A9C4BA] shrink-0 mt-0.5" />
              <span>台中市西區美村路一段22號7樓 (廣三SOGO旁)</span>
            </div>
            <div className="flex items-center gap-2.5 text-[#E1E7E3]">
              <Phone className="w-4 h-4 text-[#A9C4BA] shrink-0" />
              <a href="tel:0423281008" className="hover:text-[#A9C4BA] font-mono font-bold text-sm">
                04 2328 1008
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-[#E1E7E3]">
              <Clock className="w-4 h-4 text-[#A9C4BA] shrink-0" />
              <span>週一至週五 09:00 - 18:00</span>
            </div>
            <div className="pt-2">
              <span className="inline-block bg-[#1D3A33] border border-[#A9C4BA]/30 text-[#A9C4BA] text-[11px] px-3 py-1 rounded-full">
                進駐租戶享 24H 磁卡門禁自由進出
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="border-t border-[#1D3A33] bg-[#0F1E1A] py-5">
        <div className="mx-auto max-w-[1310px] px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-[#E1E7E3]/60">
            © {new Date().getFullYear()} 亞巨聯合商務中心 Ya Ju Business Center. 版權所有
          </div>
          <div className="flex items-center gap-4 text-[#E1E7E3]/60 text-xs">
            <span>台中西區美村路商務空間首選</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#1D3A33] hover:bg-[#3F6A86] text-white transition-colors cursor-pointer"
              title="回到頁首"
              aria-label="回到頁首"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
