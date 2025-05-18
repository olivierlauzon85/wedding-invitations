
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
    'nav.menu': 'Menu',
    'nav.rsvp': 'RSVP',
    'nav.qa': 'Q&A',
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
    'info.location': 'Salles de réception Lalande, 862 Montée Laurin, Saint-Eustache, QC J7R 4K3',
    'info.ceremony.title': 'Ceremony',
    'info.ceremony.time': '3:30 PM',
    'info.cocktail.title': 'Cocktail',
    'info.cocktail.time': '4:00 PM',
    'info.reception.title': 'Reception',
    'info.reception.time': '5:00 PM',
    'info.note': 'To note',
    'info.note.1': 'Your presence is expected at 3:00 PM, to ensure you arrive in time for the ceremony which will take place at the Pergola, located at the far end of the property.',
    'info.note.2': 'The ceremony will take place outdoors, so please dress accordingly. In case of rain, the ceremony will take place indoors.',
    'info.note.3': 'Parents, you deserve a night of rest! Our wedding will be a celebration reserved for adults… Take advantage of the opportunity to wear your dancing shoes and leave the little monsters in good hands.',
    'info.note.4': 'In order to respect the alcohol permit on site, outside alcohol will not be allowed at any time on the site.',
    'info.note.5': 'For those who have springtime desires… we remind you that the consumption of cannabis is not allowed on the site. After all, we will be celebrating in the fall!',
    'info.note.6': 'Whether you are one of ours or not, we would greatly appreciate your response before May 31st, 2026. If you will be present, please also let us know your meal choice and any allergies or dietary restrictions so we can take them into account.',

    // Q&A Section
    'qa.title': 'Questions & Answers',
    'qa.categories.accommodation': 'Accommodation',
    'qa.categories.travel': 'Travel & Parking',
    'qa.categories.gifts': 'Gifts & Registry',
    'qa.categories.schedule': 'Schedule & Events',

    'qa.accommodation.q1': 'Are there recommended hotels nearby?',
    'qa.accommodation.a1': 'Yes, we have arranged special rates with Hotel XYZ (10 minutes from the venue) and ABC Hotel (15 minutes from the venue). Please mention our wedding when booking to receive the discounted rate.',

    'qa.accommodation.q2': 'Is there transportation from the hotels to the venue?',
    'qa.accommodation.a2': 'We will be providing a shuttle service from both recommended hotels to the venue and back. The schedule will be shared closer to the wedding date.',

    'qa.travel.q1': 'Where can I park?',
    'qa.travel.a1': 'There is free parking available at the venue for all guests. There are approximately 100 spots available.',

    'qa.travel.q2': 'What\'s the best way to get to the venue?',
    'qa.travel.a2': 'The venue is easily accessible by car from Highway 50. If you\'re coming from out of town, we recommend flying into Montreal-Trudeau Airport and renting a car or taking a taxi (approximately 45 minutes to the venue).',

    'qa.gifts.q1': 'Do you have a gift registry?',
    'qa.gifts.a1': 'Your presence is the greatest gift! However, if you wish to honor us with a gift, we have created a registry at [Registry Name]. Alternatively, a contribution to our honeymoon fund would be deeply appreciated.',

    'qa.schedule.q1': 'What\'s the dress code?',
    'qa.schedule.a1': 'The dress code is formal/semi-formal. We recommend suits for men and cocktail dresses for women. The venue is indoors but we will have some outdoor activities, so please dress accordingly.',

    'qa.schedule.q2': 'What time does the wedding end?',
    'qa.schedule.a2': 'The reception will conclude at 1:00 AM. After-party details will be shared during the reception for those who wish to continue the celebration!',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.deadline': 'Please respond by May 31st, 2026',
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
    'nav.menu': 'Menu',
    'nav.rsvp': 'RSVP',
    'nav.qa': 'Q&R',
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
    'info.location': 'Salles de réception Lalande, 862 Montée Laurin, Saint-Eustache, QC J7R 4K3',
    'info.ceremony.title': 'Cérémonie',
    'info.ceremony.time': '15h30',
    'info.cocktail.title': 'Cocktail',
    'info.cocktail.time': '16h00',
    'info.reception.title': 'Réception',
    'info.reception.time': '17h00',

    'info.note': 'À noter',
    'info.note.1': 'Votre présence est attendue pour 15h00, afin d\'être à temps pour le début de la cérémonie qui prendra place à la Pergola, située tout au fond du domaine.',
    'info.note.2': 'La cérémonie se déroulera à l\'extérieur, donc prévoir les vêtements en conséquence. En cas de pluie, la cérémonie se déroulera à l\'intérieur. ',
    'info.note.3': 'Parents, vous méritez bien une soirée de repos ! Notre mariage sera une célébration réservée aux adultes… Profitez-en pour sortir vos souliers de danse et laisser les petits monstres entre de bonnes mains.',
    'info.note.4': 'Afin de respecter le permis d\'alcool en place, l\'	alcool provenant de l\'extérieur ne sera permis en aucun cas sur le site.',
    'info.note.5': 'Pour ceux qui auraient des envies de printemps… nous vous rappelons que la consommation de cannabis n\'est pas permise sur le site. Après tout, nous célébrerons à l\'automne !',
    'info.note.6': 'Que vous soyez des nôtres ou non, nous apprécierions grandement une réponse de votre part avant le 31 mai 2026. Si vous serez présents, merci de nous indiquer également votre choix de repas ainsi que toute allergie ou restriction alimentaire afin que nous puissions en tenir compte.',

    // Menu Section
    'menu.title': 'Menu',
    'menu.appetizers.title': 'Entrée',
    'menu.appetizers.description': 'Bruschetta',
    'menu.salad.title': 'Salade',
    'menu.salad.description': 'Salade du printemps, verger et vignoble, et sa vinagrette à l\'érable maison.',
    'menu.main.title': 'Choix de plat principal',
    'menu.main.description': 'Un choix parmi les plats suivants:',
    'menu.main.chicken': 'Poulet',
    'menu.main.chicken.description': ' Suprême de volaille aux fines herbes, sauce à l\'érable poivrée',
    'menu.main.fish': 'Poisson',
    'menu.main.fish.description': 'Pavé de saumon, crème fraîche à l\'aneth',
    'menu.main.vegetarian': 'Végétarien',
    'menu.main.vegetarian.description': 'Pâtes au pesto de tomates avec légumes et pois chiches grillés',
    'menu.dessert.title': 'Dessert',
    'menu.dessert.description': 'Surprise sucrée du chef',



    // Q&A Section
    'qa.title': 'Questions & Réponses',
    'qa.categories.accommodation': 'Hébergement',
    'qa.categories.travel': 'Transport & Stationnement',
    'qa.categories.gifts': 'Cadeaux & Registre',
    'qa.categories.schedule': 'Horaire & Événements',

    'qa.accommodation.q1': 'Y a-t-il des hôtels recommandés à proximité?',
    'qa.accommodation.a1': 'Oui, nous avons négocié des tarifs spéciaux avec l\'Hôtel XYZ (à 10 minutes du lieu) et l\'Hôtel ABC (à 15 minutes du lieu). Veuillez mentionner notre mariage lors de la réservation pour bénéficier du tarif réduit.',

    'qa.accommodation.q2': 'Y a-t-il un transport des hôtels vers le lieu de réception?',
    'qa.accommodation.a2': 'Nous fournirons un service de navette depuis les deux hôtels recommandés vers le lieu de réception et retour. L\'horaire sera communiqué à l\'approche de la date du mariage.',

    'qa.travel.q1': 'Où puis-je me garer?',
    'qa.travel.a1': 'Un stationnement gratuit est disponible sur place pour tous les invités. Il y a environ 100 places disponibles.',

    'qa.travel.q2': 'Quel est le meilleur moyen de se rendre au lieu de réception?',
    'qa.travel.a2': 'Le lieu est facilement accessible en voiture depuis l\'autoroute 50. Si vous venez de l\'extérieur de la ville, nous vous recommandons d\'atterrir à l\'aéroport Montréal-Trudeau et de louer une voiture ou prendre un taxi (environ 45 minutes jusqu\'au lieu).',

    'qa.gifts.q1': 'Avez-vous un registre de cadeaux?',
    'qa.gifts.a1': 'Votre présence est le plus beau des cadeaux! Cependant, si vous souhaitez nous honorer d\'un cadeau, nous avons créé un registre chez [Nom du Registre]. Alternativement, une contribution à notre fonds de lune de miel serait profondément appréciée.',

    'qa.schedule.q1': 'Quel est le code vestimentaire?',
    'qa.schedule.a1': 'Le code vestimentaire est formel/semi-formel. Nous recommandons des costumes pour les hommes et des robes de cocktail pour les femmes. Le lieu est intérieur mais nous aurons quelques activités extérieures, alors habillez-vous en conséquence.',

    'qa.schedule.q2': 'À quelle heure se termine le mariage?',
    'qa.schedule.a2': 'La réception se terminera à 1h00 du matin. Les détails de l\'after-party seront communiqués pendant la réception pour ceux qui souhaitent continuer la célébration!',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.deadline': 'Veuillez répondre avant le 31 mai 2026',
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
