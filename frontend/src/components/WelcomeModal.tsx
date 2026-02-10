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
      <DialogContent className="sm:max-w-3xl max-w-[90vw] mx-auto p-0 overflow-hidden flex flex-col h-[85vh] sm:h-[80vh]">
        <div className="relative h-[60%] sm:h-[70%] overflow-hidden flex-shrink-0">
          <img 
            src="olijanie.jpeg" 
            alt="Wedding venue" 
            className="w-full h-full object-cover"
          />
          
          {/* Opaque banner at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 py-6 sm:py-8">
            <div className="text-center px-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t('welcome.title')}
              </h2>
              <p className="text-lg sm:text-xl text-white font-medium">
                {t('welcome.subtitle')}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 h-[40%] sm:h-[30%] overflow-y-auto flex-shrink-0">
          <div className="space-y-4">
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
