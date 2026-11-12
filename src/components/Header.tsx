import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Menu, X, ExternalLink, Calendar } from 'lucide-react';
import { CompanyLogo } from './CompanyLogo';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'news', label: '最新消息' },
    { id: 'contact', label: '聯絡我們' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Secondary Bar (WordPress Enfold style) */}
      <div className="bg-[#132722] text-[#E1E7E3] text-xs border-b border-[#2B4D45] hidden md:block">
        <div className="mx-auto max-w-[1310px] px-5 md:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href="tel:0423281008" 
              className="flex items-center gap-1.5 hover:text-[#A9C4BA] transition-colors whitespace-nowrap font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#A9C4BA]" />
              <span className="font-mono">04 2328 1008</span>
            </a>
            <div className="flex items-center gap-1.5 text-[#A9C4BA]/90 whitespace-nowrap font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#A9C4BA]" />
              <span>台中市西區美村路一段22號7樓 (廣三SOGO正隔壁)</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-[#E1E7E3]/80">
              <Clock className="w-3.5 h-3.5 text-[#A9C4BA]" />
              <span>週一至週五 09:00 - 18:00 (租戶24H出入)</span>
            </div>
            <a
              href="https://www.facebook.com/p/%E4%BA%9E%E5%B7%A8%E8%81%AF%E5%90%88%E5%95%86%E5%8B%99%E4%B8%AD%E5%BF%83-Ya-Ju-BusinessCenter-100063969790975/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1E7E3] hover:text-[#A9C4BA] transition-colors flex items-center gap-1 font-semibold"
              title="官方 Facebook 粉絲頁"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3 text-[#A9C4BA]" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Multi-Page Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F2F0EB]/95 backdrop-blur-md shadow-md py-3 border-b border-[#C9D2CD]'
            : 'bg-[#F2F0EB] py-4 border-b border-[#E1E7E3]'
        }`}
      >
        <div className="mx-auto max-w-[1310px] px-5 md:px-8 flex items-center justify-between gap-6">
          {/* Company Official Logo */}
          <div onClick={() => handleNavClick('home')} className="cursor-pointer">
            <CompanyLogo variant="header" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[0.95rem] font-bold text-[#18201D]">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`enfold-nav-link relative py-1 cursor-pointer transition-colors ${
                    isActive
                      ? 'text-[#3F6A86] active font-black'
                      : 'text-[#18201D] hover:text-[#3F6A86]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3F6A86] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Zone: btn-flow phone button + Appointment button */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0423281008"
              className="btn-flow hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all cursor-pointer font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>04 2328 1008</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#1D3A33] border border-[#1D3A33] rounded-full hover:bg-[#1D3A33] hover:text-[#F2F0EB] transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>預約參觀</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#18201D] hover:bg-[#E1E7E3] focus:outline-none cursor-pointer"
              aria-label="選單開關"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#1D3A33]/10 bg-[#F2F0EB] px-5 py-6 lg:hidden shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 text-lg">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-3 rounded-xl font-bold flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-[#1D3A33] text-white'
                        : 'text-[#18201D] hover:bg-[#E1E7E3]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="text-xs bg-white/20 px-2 py-0.5 rounded">目前頁面</span>}
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#1D3A33]/15 space-y-3">
              <a
                href="tel:0423281008"
                className="btn-flow flex w-full items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-white shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>來電 04 2328 1008</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="flex w-full items-center justify-center gap-2 py-3 rounded-full border border-[#1D3A33] text-[#1D3A33] font-bold text-sm hover:bg-[#1D3A33] hover:text-white transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>線上預約現場參觀</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
