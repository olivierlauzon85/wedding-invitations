
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
    'info.date': 'Saturday, October 10th, 2026',
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
    'qa.categories.clothing': 'Dress Code',
    'qa.categories.parking': 'Parking',
    'qa.categories.gifts': 'Gifts & Registry',
    'qa.categories.drinks': 'Drinks',

    'qa.accommodation.q1': 'Are there recommended hotels nearby?',
    'qa.accommodation.a1': 'Yes, we have arranged special rates with Hotel XYZ (10 minutes from the venue) and ABC Hotel (15 minutes from the venue). Please mention our wedding when booking to receive the discounted rate.',


    'qa.clothing.q1': 'What is the dress code?',
    'qa.clothing.a1': 'It is recommended to wear formal/city attire.',

    'qa.clothing.q2': 'Are there colors to avoid?',
    'qa.clothing.a2': 'To preserve the harmony of the colors, we ask you to avoid white and green for your outfits since they are reserved for the bride and groom and the bridal party.',

    'qa.parking.q1': 'Where can I park?',
    'qa.parking.a1': 'The erablière is very accessible by car. Parking is available on site in large numbers. Upon arrival, parking is on your left, while the domain will be on your right. We recommend following these directions for easy and quick access.',

    'qa.gifts.q1': 'Do you have a gift registry?',
    'qa.gifts.a1': 'Your presence is the best gift! However, if you would like to honor us with a gift, we encourage you to give us a cash amount at your discretion.',

    'qa.drinks.q1': 'What drinks will be available?',
    'qa.drinks.a1': 'We have everything you need to quench your thirst: wine, domestic beer, and non-alcoholic drinks (soft drinks and other) will be offered at will, from cocktails to the end of the evening. All other alcoholic drinks (spirits, cocktails) will need to be purchased on site.',

    'qa.drinks.q2': 'Do I need to bring cash?',
    'qa.drinks.a2': 'If you would like a type of cocktail other than wine, beer, or non-alcoholic drinks, you will need to bring cash to cover the costs.',

    'qa.drinks.q3': 'Can I bring my own drinks?',
    'qa.drinks.a3': 'No, no drinks from outside will be allowed on site.',

    // Menu Section
    'menu.title': 'Menu',
    'menu.appetizers.title': 'Appetizers',
    'menu.appetizers.description': 'Bruschetta',
    'menu.salad.title': 'Salad',
    'menu.salad.description': 'Spring salad, orchard and vineyard, with homemade maple vinaigrette',
    'menu.main.title': 'Main Course Selection',
    'menu.main.description': 'A choice among the following dishes:',
    'menu.main.chicken': 'Chicken',
    'menu.main.chicken.description': 'Herb-crusted chicken breast with peppered maple sauce',
    'menu.main.fish': 'Fish',
    'menu.main.fish.description': 'Salmon fillet with fresh dill cream',
    'menu.main.vegetarian': 'Vegetarian',
    'menu.main.vegetarian.description': 'Tomato pesto pasta with vegetables and grilled chickpeas',
    'menu.dessert.title': 'Dessert',
    'menu.dessert.description': 'Chef\'s sweet surprise',

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
    'rsvp.meal.chicken': 'Chicken',
    'rsvp.meal.fish': 'Fish',
    'rsvp.meal.vegetarian': 'Vegetarian',
    'rsvp.plusOne.toggle': 'Add Guest (+1)',
    'rsvp.plusOne.name': 'Guest Name',
    'rsvp.plusOne.meal': 'Guest Meal Preference',

    // Welcome Modal
    'welcome.title': 'Welcome!',
    'welcome.subtitle': 'Janie & Olivier',
    'welcome.greeting': 'Welcome to Our Wedding Website',
    'welcome.message': 'It is with immense joy that we invite you to celebrate our wedding. This site has been designed to guide you through all the details of this unforgettable day. For any questions, do not hesitate to contact us. Looking forward to celebrating with you!',
    'welcome.enter': 'Enter Site',

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
    'info.date': 'Samedi, 10 octobre 2026',
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
    'info.note.3': 'Parents, vous méritez bien une soirée de repos ! Notre mariage sera une célébration réservée aux adultes… Profitez-en pour sortir vos souliers de danse et laisser les petits monstres entre bonnes mains.',
    'info.note.4': 'Afin de respecter le permis d\'alcool en place, l\'alcool provenant de l\'extérieur ne sera permis en aucun cas sur le site.',
    'info.note.5': 'Pour ceux qui auraient des envies de printemps… nous vous rappelons que la consommation de cannabis n\'est pas permise sur le site. Après tout, nous célébrerons à l\'automne !',
    'info.note.6': 'Que vous soyez des nôtres ou non, nous apprécierions grandement une réponse de votre part avant le 31 mai 2026. Si vous prévoyez être présents, merci de nous indiquer également votre choix de repas ainsi que toute allergie ou restriction alimentaire afin que nous puissions en tenir compte.',

    // Menu Section
    'menu.title': 'Menu',
    'menu.appetizers.title': 'Entrée',
    'menu.appetizers.description': 'Bruschetta',
    'menu.salad.title': 'Salade',
    'menu.salad.description': 'Salade du printemps, verger et vignoble, et sa vinagrette à l\'érable maison',
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
    'qa.categories.clothing': 'Tenue vestimentaire',
    'qa.categories.parking': 'Stationnement',
    'qa.categories.gifts': 'Cadeaux & Registre',
    'qa.categories.drinks': 'Boissons',

    'qa.accommodation.q1': 'Y a-t-il des hôtels recommandés à proximité?',
    'qa.accommodation.a1': 'Bien qu\'aucun hébergement ne soit disponible sur place, un hôtel est situé à seulement 10 km du lieu du mariage, idéal pour ceux qui viennent de plus loin. La location de chambre est à votre entière discrétion. Vous pouvez réserver à l\'Impéria Hôtel & Suites St-Eustache, situé au 570 R. Dubois, Saint-Eustache, Québec, J7P 0B3, ou en visitant leur site web : https://imperiahotel.com/eustache/.',

    'qa.clothing.q1': 'Quel est le code vestimentaire?',
    'qa.clothing.a1': 'Il est recommandé de porter des tenues formelles/de ville.',

    'qa.clothing.q2': 'Y a-t-il des couleurs à éviter?',
    'qa.clothing.a2': 'Afin de préserver l\'harmonie des couleurs, nous vous demandons d\'éviter le blanc et le vert pour vos tenues puisqu\'elles sont réservées aux mariés et au cortège.',

    'qa.parking.q1': 'Où puis-je me garer?',
    'qa.parking.a1': 'L\'érablière est très accessible en voiture. Le stationnement est disponible sur place en grand nombre. À votre arrivée, le stationnement se trouve sur votre gauche, tandis que le domaine sera sur votre droite. Nous vous recommandons de suivre ces indications pour un accès facile et rapide.',

    'qa.gifts.q1': 'Avez-vous un registre de cadeaux?',
    'qa.gifts.a1': 'Non, nous n\'avons pas de registre de cadeaux. Votre présence est le plus beau des cadeaux! Cependant, si vous souhaitez nous honorer d\'un cadeau, nous vous encourageons à nous offrir un montant d\'argent à votre discrétion.',

    'qa.drinks.q1': 'Quelles boissons seront disponibles?',
    'qa.drinks.a1': 'Nous avons prévu tout ce qu\'il faut pour étancher votre soif : le vin, la bière domestique ainsi que les boissons non alcoolisées (boissons gazeuses et autres) seront offerts à volonté, du cocktail jusqu\'à la fin de la soirée. Toutes les autres boissons alcoolisées (spiritueux, cocktails) devront être achetées sur place.',

    'qa.drinks.q2': 'Dois-je me prévoir de l\'argent comptant?',
    'qa.drinks.a2': 'Si vous désirez un type de cocktail autre que le vin, la bière ou les boissons non alcoolisées, il vous faudra de l\'argent comptant pour couvrir les frais.',

    'qa.drinks.q3': 'Puis-je apporter mes propres boissons?',
    'qa.drinks.a3': 'Non, aucune boisson provenant de l\'extérieur ne sera tolérée sur le site.',

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
    'rsvp.meal.chicken': 'Poulet',
    'rsvp.meal.fish': 'Poisson',
    'rsvp.meal.vegetarian': 'Végétarien',
    'rsvp.plusOne.toggle': 'Ajouter un Invité (+1)',
    'rsvp.plusOne.name': 'Nom de l\'Invité',
    'rsvp.plusOne.meal': 'Préférence de Repas de l\'Invité',

    // Welcome Modal
    'welcome.title': 'Bienvenue!',
    'welcome.subtitle': 'Janie & Olivier',
    'welcome.greeting': 'Bienvenue sur notre site de mariage',
    'welcome.message': 'C\'est avec un immense bonheur que nous vous invitons à célébrer notre mariage. Ce site a été conçu pour vous guider à travers tous les détails de cette journée inoubliable. Pour toute question, n’hésitez pas à nous contacter. Au plaisir de célébrer avec vous!',
    'welcome.enter': 'Entrer sur le site',

    // Footer
    'footer.credits': 'Avec amour, Janie & Olivier',
    'footer.copyright': '© 2025 Janie & Olivier'
  }
};
