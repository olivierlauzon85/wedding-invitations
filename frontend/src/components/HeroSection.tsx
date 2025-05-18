
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CountdownTimer from './CountdownTimer';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    
    // Animate leaves falling
    const createLeaf = () => {
      const leaf = document.createElement('div');
      const leafTypes = ['🍁', '🍂', '🍃'];
      const randomLeaf = leafTypes[Math.floor(Math.random() * leafTypes.length)];
      
      leaf.innerHTML = randomLeaf;
      leaf.style.fontSize = `${Math.random() * 20 + 10}px`;
      leaf.style.position = 'fixed';
      leaf.style.top = '-20px';
      leaf.style.left = `${Math.random() * 100}vw`;
      leaf.style.opacity = '0';
      leaf.style.zIndex = '1';
      leaf.className = 'leaf animate-leaf-fall';
      
      document.body.appendChild(leaf);
      
      setTimeout(() => {
        document.body.removeChild(leaf);
      }, 10000);
    };
    
    const leafInterval = setInterval(createLeaf, 2000);
    
    return () => clearInterval(leafInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="container-wedding text-center z-10">
        <div className={`transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-fall-red mb-4 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-fall-orange mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('hero.subtitle')}
          </p>
          <div className="w-24 h-1 bg-autumn-sage mx-auto my-8"></div>
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-fall-orange mb-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            {t('hero.date')}
          </p>
          
          <CountdownTimer />
          
          <div className="mt-12 flex justify-center space-x-4 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a href="#info" className="btn-primary">
              {t('nav.info')}
            </a>
            <a href="#menu" className="btn-outline">
              {t('nav.menu')}
            </a>
            <a href="#rsvp" className="btn-outline">
              {t('nav.rsvp')}
            </a>
            <a href="#qa" className="btn-outline">
              {t('nav.qa')}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default HeroSection;
