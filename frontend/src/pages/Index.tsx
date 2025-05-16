
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WeddingInfo from '../components/WeddingInfo';
import RsvpForm from '../components/RsvpForm';
import QandASection from '../components/QandASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <div className="bg-gradient-to-b from-white to-autumn-lightsage/30">
            <WeddingInfo />
            <QandASection />
            <RsvpForm />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
