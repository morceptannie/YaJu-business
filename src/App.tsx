import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ImageModal } from './components/ImageModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [scrollTarget, setScrollTarget] = useState<string | undefined>();
  const [prefilledContactPlan, setPrefilledContactPlan] = useState<string | undefined>();

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Image Lightbox Modal State
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalCaption, setModalCaption] = useState<string>('');

  // Sync hash routing on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'about', 'services', 'news', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (
    page: string,
    params?: { serviceId?: string; scrollTarget?: string; prefilledPlan?: string }
  ) => {
    setCurrentPage(page);
    window.location.hash = page;

    if (params?.serviceId) {
      setSelectedServiceId(params.serviceId);
    } else {
      setSelectedServiceId(undefined);
    }

    if (params?.scrollTarget) {
      setScrollTarget(params.scrollTarget);
    } else {
      setScrollTarget(undefined);
    }

    if (params?.prefilledPlan) {
      setPrefilledContactPlan(params.prefilledPlan);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleOpenImageModal = (imageSrc: string, caption: string) => {
    setModalImage(imageSrc);
    setModalCaption(caption);
  };

  const handleCloseImageModal = () => {
    setModalImage(null);
    setModalCaption('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F0EB] text-[#18201D] font-sans antialiased selection:bg-[#3F6A86] selection:text-white">
      {/* WordPress Enfold Sticky Multi-Page Header with Company Logo */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Multi-Page View Container */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenImageModal={handleOpenImageModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            initialServiceId={selectedServiceId}
            initialScrollTarget={scrollTarget}
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage
            onNavigate={handleNavigate}
            onShowToast={showToast}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            prefilledPlan={prefilledContactPlan}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* WordPress Enfold 4-Column Footer with Company Logo */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Controls */}
      <FloatingActions onOpenBooking={() => handleNavigate('contact')} />

      {/* Lightbox Modal for genuine space photos */}
      <ImageModal
        isOpen={!!modalImage}
        imageSrc={modalImage || ''}
        caption={modalCaption}
        onClose={handleCloseImageModal}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-2 rounded-full bg-[#1D3A33] px-6 py-3.5 text-sm font-bold text-[#F2F0EB] shadow-2xl border border-[#A9C4BA]/30 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
