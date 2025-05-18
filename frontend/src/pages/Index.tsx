
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WeddingInfo from '../components/WeddingInfo';
import RsvpForm from '../components/RsvpForm';
import QandASection from '../components/QandASection';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';

const Index = () => {
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
      </div>
    </LanguageProvider>
  );
};

export default Index;
