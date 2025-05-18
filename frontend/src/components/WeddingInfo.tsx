import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, MapPin, Home, Baby, Cannabis, SunSnow, CalendarHeart, WineOff } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WeddingInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="info" className="section-wrapper bg-fall-yellow/5">
      <div className="container-wedding">
        <h2 className="section-title mb-12">{t('info.title')}</h2>
        
        <div className="mb-10 text-center">
          <div className="flex justify-center items-center mb-4">
            <Calendar style={{ minWidth: '24px', minHeight: '24px' }} className="mr-2 text-fall-red" />
            <p className="text-xl font-serif text-fall-red">{t('info.date')}</p>
          </div>
          <div className="flex justify-center items-center mb-4">
            <MapPin style={{ minWidth: '24px', minHeight: '24px' }} className="mr-2 text-fall-red" />
            <p className="text-xl font-serif text-fall-red">{t('info.location')}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="border-autumn-sage/20 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-autumn-sage font-serif text-2xl flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {t('info.ceremony.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{t('info.ceremony.time')}</p>
            </CardContent>
          </Card>

          <Card className="border-fall-orange/20 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-fall-orange font-serif text-2xl flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {t('info.cocktail.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{t('info.cocktail.time')}</p>
            </CardContent>
          </Card>
          
          <Card className="border-fall-red/20 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-fall-red font-serif text-2xl flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {t('info.reception.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{t('info.reception.time')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="section-title mb-12">{t('info.note')}</h2>
          <ul className="space-y-4 max-w-2xl mx-auto text-justify">
            <li className="text-fall-red flex items-center space-x-3 rtl:space-x-reverse">
              <Clock style={{ minWidth: '16px', minHeight: '16px' }} />
              <span className="text-xl font-serif">{t('info.note.1')}</span>
            </li>
            <li className="text-fall-red flex items-center space-x-3 rtl:space-x-reverse">
            <SunSnow style={{ minWidth: '16px', minHeight: '16px' }} />
              <span className="text-xl font-serif">{t('info.note.2')}</span>
            </li>
            <li className="text-fall-red flex items-center space-x-3 rtl:space-x-reverse">
            <Baby style={{ minWidth: '16px', minHeight: '16px' }} />
              <span className="text-xl font-serif">{t('info.note.3')}</span>
            </li>
            <li className="text-fall-red flex items-center space-x-3 rtl:space-x-reverse">
            <WineOff style={{ minWidth: '16px', minHeight: '16px' }} />
              <span className="text-xl font-serif">{t('info.note.4')}</span>
            </li>
            <li className="text-fall-red flex items-center space-x-3 rtl:space-x-reverse">
            <Cannabis style={{ minWidth: '16px', minHeight: '16px' }} />
              <span className="text-xl font-serif">{t('info.note.5')}</span>
            </li>
            <li className="text-fall-red flex items-center space-x-3 rtl:space-x-reverse">
            <CalendarHeart style={{ minWidth: '16px', minHeight: '16px' }} />
              <span className="text-xl font-serif">{t('info.note.6')}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;
