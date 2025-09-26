import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-w-[90vw] mx-auto p-0 overflow-hidden">
        <div className="relative h-48 sm:h-64 overflow-hidden">
          <img 
            src="mill.jfif" 
            alt="Wedding venue" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <div className="relative mb-4">
                <Heart className="h-16 w-16 sm:h-20 sm:w-20 text-white mx-auto drop-shadow-lg" fill="currentColor" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                {t('welcome.title')}
              </h2>
              <p className="text-lg sm:text-xl text-white font-medium drop-shadow-lg">
                {t('welcome.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
              {t('welcome.greeting')}
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            <p className="text-center text-gray-600 leading-relaxed">
              {t('welcome.message')}
            </p>
            
            <div className="flex justify-center pt-6">
              <Button 
                onClick={onClose}
                className="px-8 py-3 bg-white border-2 border-autumn-rust text-autumn-rust hover:bg-autumn-rust hover:text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl font-medium"
              >
                {t('welcome.enter')}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
