
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wedding flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Calendar className="h-6 w-6 text-autumn-rust" />
          <span className="font-serif text-xl text-autumn-rust">J&O</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-autumn-burgundy hover:text-autumn-rust transition-colors border-b-2 border-transparent hover:border-autumn-sage pb-1">
            {t('nav.home')}
          </a>
          <a href="#info" className="text-autumn-burgundy hover:text-autumn-rust transition-colors border-b-2 border-transparent hover:border-autumn-sage pb-1">
            {t('nav.info')}
          </a>
          <a href="#rsvp" className="text-autumn-burgundy hover:text-autumn-rust transition-colors border-b-2 border-transparent hover:border-autumn-sage pb-1">
            {t('nav.rsvp')}
          </a>
          <a href="#qa" className="text-autumn-burgundy hover:text-autumn-rust transition-colors border-b-2 border-transparent hover:border-autumn-sage pb-1">
            {t('nav.qa')}
          </a>
        </nav>

        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
