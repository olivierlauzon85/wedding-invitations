
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer: React.FC = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the wedding date - October 10, 2026
    const weddingDate = new Date('2026-10-10T15:00:00');
    
    const calculateTimeLeft = () => {
      const difference = +weddingDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-12">
      <h3 className="section-subtitle mb-6">{t('countdown.title')}</h3>
      <div className="flex justify-center space-x-4 md:space-x-8">
        <div className="flex flex-col items-center">
          <div className="bg-fall-yellow/10 border border-fall-yellow w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center">
            <span className="font-serif text-2xl md:text-4xl text-fall-orange font-bold">{timeLeft.days}</span>
          </div>
          <span className="mt-2 text-sm md:text-base text-fall-orange">{t('countdown.days')}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-fall-yellow/10 border border-fall-yellow w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center">
            <span className="font-serif text-2xl md:text-4xl text-fall-orange font-bold">{timeLeft.hours}</span>
          </div>
          <span className="mt-2 text-sm md:text-base text-fall-orange">{t('countdown.hours')}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-fall-yellow/10 border border-fall-yellow w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center">
            <span className="font-serif text-2xl md:text-4xl text-fall-orange font-bold">{timeLeft.minutes}</span>
          </div>
          <span className="mt-2 text-sm md:text-base text-fall-orange">{t('countdown.minutes')}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-fall-yellow/10 border border-fall-yellow w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center">
            <span className="font-serif text-2xl md:text-4xl text-fall-orange font-bold">{timeLeft.seconds}</span>
          </div>
          <span className="mt-2 text-sm md:text-base text-fall-orange">{t('countdown.seconds')}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
