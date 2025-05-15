
export type Language = 'en' | 'fr';

type TranslationKeys = {
  [key: string]: string;
};

type TranslationsType = {
  [key in Language]: TranslationKeys;
};

export const translations: TranslationsType = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.info': 'Info',
    'nav.rsvp': 'RSVP',
    'nav.gallery': 'Gallery',

    // Hero Section
    'hero.title': 'Janie & Olivier',
    'hero.subtitle': 'We\'re getting married!',
    'hero.date': 'October 10th, 2026',
    'hero.location': 'Montreal, Canada',

    // Countdown
    'countdown.days': 'Days',
    'countdown.hours': 'Hours',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Seconds',
    'countdown.title': 'Countdown to our special day',

    // Wedding Info
    'info.title': 'Our Wedding Day',
    'info.date': 'Friday, October 10th, 2026',
    'info.ceremony.title': 'Ceremony',
    'info.ceremony.time': '4:00 PM',
    'info.ceremony.location': 'Reception Rooms Lalande',
    'info.ceremony.address': '862 Mnt Laurin, Saint-Eustache, QC J7R 4K3',
    'info.reception.title': 'Reception',
    'info.reception.time': '5:30 PM',
    'info.reception.location': 'Reception Rooms Lalande',
    'info.reception.address': '862 Mnt Laurin, Saint-Eustache, QC J7R 4K3',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.deadline': 'Please respond by September 1st, 2026',
    'rsvp.name': 'Full Name',
    'rsvp.email': 'Email Address',
    'rsvp.attending': 'Will you be attending?',
    'rsvp.attending.yes': 'Yes, I\'ll be there',
    'rsvp.attending.no': 'Sorry, I can\'t make it',
    'rsvp.guests': 'Number of guests (including yourself)',
    'rsvp.dietary': 'Dietary Requirements',
    'rsvp.dietary.description': 'Please let us know about any allergies or dietary restrictions',
    'rsvp.message': 'Message for the couple (optional)',
    'rsvp.submit': 'Submit RSVP',
    'rsvp.thanks': 'Thank you for your response!',
    'rsvp.meal': 'Meal Preference',
    'rsvp.meal.select': 'Select your meal',
    'rsvp.meal.beef': 'Beef',
    'rsvp.meal.chicken': 'Chicken',
    'rsvp.meal.fish': 'Fish',
    'rsvp.meal.vegetarian': 'Vegetarian',
    'rsvp.plusOne.toggle': 'Add Guest (+1)',
    'rsvp.plusOne.name': 'Guest Name',
    'rsvp.plusOne.meal': 'Guest Meal Preference',

    // Footer
    'footer.credits': 'With love, Janie & Olivier',
    'footer.copyright': '© 2025 Janie & Olivier'
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.info': 'Information',
    'nav.rsvp': 'RSVP',
    'nav.gallery': 'Galerie',

    // Hero Section
    'hero.title': 'Janie & Olivier',
    'hero.subtitle': 'Nous nous marions!',
    'hero.date': '10 octobre 2026',
    'hero.location': 'Montréal, Canada',

    // Countdown
    'countdown.days': 'Jours',
    'countdown.hours': 'Heures',
    'countdown.minutes': 'Minutes',
    'countdown.seconds': 'Secondes',
    'countdown.title': 'Compte à rebours jusqu\'à notre jour spécial',

    // Wedding Info
    'info.title': 'Notre Jour de Mariage',
    'info.date': 'Vendredi, 10 octobre 2026',
    'info.ceremony.title': 'Cérémonie',
    'info.ceremony.time': '4:00 PM',
    'info.ceremony.location': 'Salles de réception Lalande',
    'info.ceremony.address': '862 Mnt Laurin, Saint-Eustache, QC J7R 4K3',
    'info.reception.title': 'Réception',
    'info.reception.time': '5:30 PM',
    'info.reception.location': 'Salles de réception Lalande',
    'info.reception.address': '862 Mnt Laurin, Saint-Eustache, QC J7R 4K3',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.deadline': 'Veuillez répondre avant le 1er septembre 2026',
    'rsvp.name': 'Nom Complet',
    'rsvp.email': 'Adresse Courriel',
    'rsvp.attending': 'Serez-vous présent?',
    'rsvp.attending.yes': 'Oui, je serai là',
    'rsvp.attending.no': 'Désolé, je ne pourrai pas y assister',
    'rsvp.guests': 'Nombre d\'invités (vous inclus)',
    'rsvp.dietary': 'Restrictions Alimentaires',
    'rsvp.dietary.description': 'Veuillez nous informer de toute allergie ou restriction alimentaire',
    'rsvp.message': 'Message pour le couple (optionnel)',
    'rsvp.submit': 'Envoyer RSVP',
    'rsvp.thanks': 'Merci pour votre réponse!',
    'rsvp.meal': 'Préférence de Repas',
    'rsvp.meal.select': 'Sélectionnez votre repas',
    'rsvp.meal.beef': 'Bœuf',
    'rsvp.meal.chicken': 'Poulet',
    'rsvp.meal.fish': 'Poisson',
    'rsvp.meal.vegetarian': 'Végétarien',
    'rsvp.plusOne.toggle': 'Ajouter un Invité (+1)',
    'rsvp.plusOne.name': 'Nom de l\'Invité',
    'rsvp.plusOne.meal': 'Préférence de Repas de l\'Invité',

    // Footer
    'footer.credits': 'Avec amour, Janie & Olivier',
    'footer.copyright': '© 2025 Janie & Olivier'
  }
};
