
import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WeddingInfo from '../components/WeddingInfo';
import RsvpForm from '../components/RsvpForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <WeddingInfo />
          <RsvpForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
