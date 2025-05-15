
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Translate } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="flex items-center gap-2 hover:bg-fall-yellow/20" 
      onClick={toggleLanguage}
    >
      <Translate size={16} />
      <span className="text-sm font-medium">
        {language === 'en' ? 'FR' : 'EN'}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
