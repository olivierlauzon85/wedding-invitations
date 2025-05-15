
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
    'info.ceremony.time': '3:00 PM',
    'info.ceremony.location': 'St. Mary\'s Church',
    'info.ceremony.address': '123 Wedding Blvd, Montreal',
    'info.reception.title': 'Reception',
    'info.reception.time': '5:30 PM',
    'info.reception.location': 'Autumn Garden Venue',
    'info.reception.address': '456 Celebration Ave, Montreal',
    'info.accommodation.title': 'Accommodation',
    'info.accommodation.description': 'We\'ve reserved rooms at the Fall Hotel. Use code "J&O2026" for a special rate.',
    
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
    'rsvp.message': 'Message for the couple (optional)',
    'rsvp.submit': 'Submit RSVP',
    'rsvp.thanks': 'Thank you for your response!',
    
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
    'info.ceremony.time': '15h00',
    'info.ceremony.location': 'Église Sainte-Marie',
    'info.ceremony.address': '123 Boul. Mariage, Montréal',
    'info.reception.title': 'Réception',
    'info.reception.time': '17h30',
    'info.reception.location': 'Salle de Jardin d\'Automne',
    'info.reception.address': '456 Ave. Célébration, Montréal',
    'info.accommodation.title': 'Hébergement',
    'info.accommodation.description': 'Nous avons réservé des chambres à l\'Hôtel Automne. Utilisez le code "J&O2026" pour un tarif spécial.',
    
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
    'rsvp.message': 'Message pour le couple (optionnel)',
    'rsvp.submit': 'Envoyer RSVP',
    'rsvp.thanks': 'Merci pour votre réponse!',
    
    // Footer
    'footer.credits': 'Avec amour, Janie & Olivier',
    'footer.copyright': '© 2025 Janie & Olivier'
  }
};
