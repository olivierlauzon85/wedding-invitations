
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="py-10 bg-fall-orange/10">
      <div className="container-wedding text-center">
        <div className="flex justify-center items-center mb-4">
          <Heart className="h-5 w-5 text-fall-red mr-2 animate-pulse" />
          <p className="font-serif text-lg text-fall-red">{t('footer.credits')}</p>
        </div>
        <p className="text-sm text-muted-foreground">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
