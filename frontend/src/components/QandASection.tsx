
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

type QuestionAnswer = {
  question: string;
  answer: string;
};

type CategoryData = {
  name: string;
  questions: QuestionAnswer[];
};

const QandASection: React.FC = () => {
  const { t } = useLanguage();

  const categories: CategoryData[] = [
    {
      name: 'qa.categories.accommodation',
      questions: [
        {
          question: 'qa.accommodation.q1',
          answer: 'qa.accommodation.a1',
        },
      ]
    },
    {
      name: 'qa.categories.clothing',
      questions: [
        {
          question: 'qa.clothing.q1',
          answer: 'qa.clothing.a1',
        },
        {
          question: 'qa.clothing.q2',
          answer: 'qa.clothing.a2',
        }
      ]
    },
    {
      name: 'qa.categories.parking',
      questions: [
        {
          question: 'qa.parking.q1',
          answer: 'qa.parking.a1',
        }
      ]
    },
    {
      name: 'qa.categories.gifts',
      questions: [
        {
          question: 'qa.gifts.q1',
          answer: 'qa.gifts.a1',
        }
      ]
    },
    {
      name: 'qa.categories.drinks',
      questions: [
        {
          question: 'qa.drinks.q1',
          answer: 'qa.drinks.a1',
        },
        {
          question: 'qa.drinks.q2',
          answer: 'qa.drinks.a2',
        },
        {
          question: 'qa.drinks.q3',
          answer: 'qa.drinks.a3',
        }
      ]
    }
  ];

  return (
    <section id="qa" className="section-wrapper bg-fall-yellow/5">
      <div className="container-wedding">
        <h2 className="section-title mb-12">{t('qa.title')}</h2>
        
        <div className="max-w-3xl mx-auto">
          {categories.map((category, idx) => (
            <Collapsible key={idx} className="mb-6">
              <CollapsibleTrigger className="w-full flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm border-l-4 border-autumn-sage rounded-t-lg font-serif font-medium text-xl text-autumn-burgundy shadow-sm hover:bg-autumn-lightsage/50 transition-colors">
                {t(category.name)}
                <ChevronDown className="h-5 w-5 text-autumn-sage transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-white/80 backdrop-blur-sm rounded-b-lg shadow-md p-4 border border-t-0 border-autumn-beige/30">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((qa, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-autumn-rust font-medium text-left">
                        {t(qa.question)}
                      </AccordionTrigger>
                      <AccordionContent className="text-justify font-serif text-black text-base">
                        {t(qa.answer)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QandASection;
