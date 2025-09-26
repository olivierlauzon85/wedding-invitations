
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WeddingInfo from '../components/WeddingInfo';
import RsvpForm from '../components/RsvpForm';
import QandASection from '../components/QandASection';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';
import WelcomeModal from '../components/WelcomeModal';

const Index = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedWedding');
    if (!hasVisited) {
      setShowWelcomeModal(true);
    }
  }, []);

  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem('hasVisitedWedding', 'true');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <div>
            <WeddingInfo />
            <MenuSection />
            <RsvpForm />
            <QandASection />
          </div>
        </main>
        <Footer />
        <WelcomeModal 
          isOpen={showWelcomeModal} 
          onClose={handleCloseWelcomeModal} 
        />
      </div>
    </LanguageProvider>
  );
};

export default Index;
