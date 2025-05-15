
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, MapPin, Home } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const WeddingInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="info" className="section-wrapper bg-fall-yellow/5">
      <div className="container-wedding">
        <h2 className="section-title mb-12">{t('info.title')}</h2>
        
        <div className="mb-10 text-center">
          <div className="flex justify-center items-center mb-4">
            <Calendar className="mr-2 text-fall-red" />
            <p className="text-xl font-serif text-fall-red">{t('info.date')}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-fall-orange/20 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-fall-orange font-serif text-2xl flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                {t('info.ceremony.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{t('info.ceremony.time')}</p>
              <p className="font-serif text-xl mt-2">{t('info.ceremony.location')}</p>
              <p className="flex items-center mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {t('info.ceremony.address')}
              </p>
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
              <p className="font-serif text-xl mt-2">{t('info.reception.location')}</p>
              <p className="flex items-center mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                {t('info.reception.address')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;
