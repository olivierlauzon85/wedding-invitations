
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Drumstick, Fish, Vegan } from 'lucide-react';

type MenuData = {
  name: string;
  description: string;
  choices?: {
    name: string;
    description: string;
    icon: React.ReactNode;
  }[];
  color: string;
};

const MenuSection: React.FC = () => {
  const { t } = useLanguage();

  const menu: MenuData[] = [
    {
      name: 'menu.appetizers.title',
      description: 'menu.appetizers.description',
      color: 'autumn-rust',
    },
    {
      name: 'menu.salad.title',
      description: 'menu.salad.description',
      color: 'autumn-sage',
    },
    {
      name: 'menu.main.title',
      description: 'menu.main.description',
      color: 'fall-red',
      choices: [
        {
          name: 'menu.main.chicken',
          description: 'menu.main.chicken.description',
          icon: <Drumstick width={18} height={18} />
        },
        {
          name: 'menu.main.fish',
          description: 'menu.main.fish.description',
          icon: <Fish width={18} height={18} />
        },
        {
          name: 'menu.main.vegetarian',
          description: 'menu.main.vegetarian.description',
          icon: <Vegan width={18} height={18} />
        }
      ]
    },
    {
      name: 'menu.dessert.title',
      description: 'menu.dessert.description',
      color: 'fall-orange',
    }
  ];

  return (
    <section id="menu" className="section-wrapper bg-fall-yellow/5">
      <div className="container-wedding">
        <h2 className="section-title mb-12">{t('menu.title')}</h2>
        
        <div className="max-w-3xl mx-auto">
          {menu.map((menu, idx) => (
            <div key={idx} className="mb-2">
              <h3 className={`text-2xl text-${menu.color}`}>{t(menu.name)}</h3>
              {menu.description && <p className={`text-${menu.color} text-xl font-serif`}>{t(menu.description)}</p>}
              {menu.choices && menu.choices.map((choice, choiceIdx) => (
                <div key={choiceIdx}>
                  <h4 className={`text-xl font-bold text-${menu.color} flex items-center ml-2`}>
                    {t(choice.name)}
                    <span className="ml-2">{choice.icon}</span>
                  </h4>
                  <p className={`text-${menu.color} ml-2 text-xl font-serif`}>{t(choice.description)}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
