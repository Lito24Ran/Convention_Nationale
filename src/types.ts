export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  points: string[];
}

export interface ProgramSession {
  id: string;
  time: string;
  title: string;
  description: string;
  speakerId?: string;
  location: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  tier: 'silver' | 'gold' | 'platinum';
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Global Static Data to keep component files clean and maintainable
export const SPEAKERS: Speaker[] = [
  {
    id: "sp1",
    name: "Dr. Eliane Dubois",
    role: "Présidente d'Honneur & Chercheuse en IA",
    company: "Institut Mondial des Technologies",
    image: "/src/assets/images/hero_speaker_portrait_1782117191963.jpg",
    bio: "Pionnière dans l'étude des systèmes intelligents, Eliane Dubois guide la vision de cette Convention Nationale avec plus de 20 ans d'expertise dans la transformation technologique responsable.",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "sp2",
    name: "Marc Cohen",
    role: "Directeur de l'Innovation",
    company: "EcoSphere Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Spécialiste de la transition bas-carbone et du développement urbain résilient. Marc pilote des solutions durables à l'échelle européenne pour les décideurs publics et privés.",
    socials: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    id: "sp3",
    name: "Sophie Laurent",
    role: "Consultante en Leadership & Management Agile",
    company: "Synergie Humaine",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Experte en restructuration d'équipes et culture d'entreprise. Sophie aide les grandes entreprises à concevoir des cadres de collaboration horizontaux, résilients et centrés sur l'humain.",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "sp4",
    name: "Thomas Merlet",
    role: "Analyste Économique & Prospective",
    company: "Futura Research",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Thomas décrypte les dynamiques de marché émergentes et aide les organisations à naviguer à travers les incertitudes économiques mondiales par une modélisation rigoureuse.",
    socials: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "sp5",
    name: "Aline Touré",
    role: "Fondatrice & Directrice Artistique",
    company: "Pixel & Sens",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Designer d'expériences mémorables, Aline fusionne l'art numérique et la psychologie comportementale pour inventer les espaces de travail immersifs et interactifs de demain.",
    socials: {
      website: "https://example.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "sp6",
    name: "Jonathan Clark",
    role: "Expert en Cybersécurité & Éthique Appliquée",
    company: "SecurLink Europe",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Ancien conseiller gouvernemental, Jonathan intervient sur les crises d'infrastructure critique et promeut des chartes de sécurité responsables auprès de l'Alliance Européenne.",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  }
];

export const THEMES: Theme[] = [
  {
    id: "th1",
    title: "Intelligence Collective & IA",
    subtitle: "Révolutionner les processus décisionnels en croisant technologie et synergie humaine.",
    icon: "Brain",
    description: "L'intelligence artificielle n'est plus un outil passif mais un co-pilote d'organisation. Nous explorerons comment concevoir une gouvernance équilibrée mariant automatisation et éthique collective.",
    points: [
      "Modèles de gouvernance éthique pour l'IA en entreprise",
      "Dupliquer et amplifier les idées phares via les assistants génératifs",
      "Études de cas concrètes sur l'adoption par les équipes opérationnelles"
    ]
  },
  {
    id: "th2",
    title: "Transition Verte & Climat",
    subtitle: "Dépasser les simples engagements de décarbonation pour un impact systémique réel.",
    icon: "Leaf",
    description: "Comment transformer votre modèle d'affaires pour l'intégrer aux limites planétaires. Des solutions concrètes pour réconcilier viabilité financière, sobriété et croissance durable.",
    points: [
      "Stratégies bas-carbone et économie circulaire",
      "Éco-conception des services et infrastructures physiques",
      "Mesure indépendante et indicateurs clés de régénération écologique"
    ]
  },
  {
    id: "th3",
    title: "Leadership Connecté & Agile",
    subtitle: "Piloter dans la tempête en s'appuyant sur des équipes responsabilisées.",
    icon: "ShieldAlert",
    description: "Le management pyramidal atteint ses limites d'adaptation. Apprenez à concevoir des structures autogérées capables de pivoter rapidement en environnement complexe.",
    points: [
      "Pratiques d'alignement stratégique horizontales",
      "Gérer le travail hybride sans friction ni perte d'engagement",
      "Psychologie de la résilience et prévention des risques d'épuisement"
    ]
  }
];

export interface ProgramSession {
  id: string;
  day: 1 | 2 | 3;
  time: string;
  title: string;
  description: string;
  location: string;
  category: string;
}

export const SESSIONS: ProgramSession[] = [
  // ===================== JOUR 1 : "Jeunesse et Leadership" =====================
  {
    id: "j1-s1",
    day: 1,
    time: "08h30 - 09h50",
    title: "Cérémonie d'ouverture officielle",
    description: "Discours JCI Madagascar x JCI Iarivo, allocutions des partenaires institutionnels, présentation des objectifs du Youth Summit (Dir-Coc 1, PL, Orange, PN, MJS, MIC).",
    location: "Non précisé",
    category: "Cérémonie"
  },
  {
    id: "j1-s2",
    day: 1,
    time: "10h00 - 10h50",
    title: "Ouverture des stands & Cocktail de bienvenue",
    description: "Ouverture des stands, cocktail de bienvenue et networking.",
    location: "Non précisé",
    category: "Networking"
  },
  {
    id: "j1-s3",
    day: 1,
    time: "11h00 - 12h30",
    title: "Panel de discussion #1 : \"Accès au financement : réalités, défis et solutions\"",
    description: "Panel sur invitation. Intervenants : banques, investisseurs, incubateurs.",
    location: "Non précisé",
    category: "Panel"
  },
  {
    id: "j1-s4",
    day: 1,
    time: "12h35 - 13h30",
    title: "Pause déjeuner & visite des stands",
    description: "Interaction avec entreprises, présentation de projets, premiers contacts business.",
    location: "Non précisé",
    category: "Pause"
  },
  {
    id: "j1-s5",
    day: 1,
    time: "13h30 - 14h50",
    title: "Conférence plénière #1 : \"Jeunesse malagasy & opportunités économiques : transformer le potentiel en impact\"",
    description: "Intervenants : leaders du secteur public & privé.",
    location: "Non précisé",
    category: "Conférence"
  },
  {
    id: "j1-s6",
    day: 1,
    time: "15h00 - 16h30",
    title: "Ateliers pratiques (sessions parallèles) — Atelier 1 : Leadership & Mindset",
    description: "Session parallèle à participants limités.",
    location: "Non précisé",
    category: "Atelier"
  },
  {
    id: "j1-s7",
    day: 1,
    time: "15h00 - 16h30",
    title: "Ateliers pratiques (sessions parallèles) — Atelier 2 : Personal branding",
    description: "Session parallèle à participants limités.",
    location: "Non précisé",
    category: "Atelier"
  },
  {
    id: "j1-s8",
    day: 1,
    time: "15h00 - 16h30",
    title: "Ateliers pratiques (sessions parallèles) — Atelier 3 : Marketing digital",
    description: "Session parallèle à participants limités.",
    location: "Non précisé",
    category: "Atelier"
  },
  {
    id: "j1-s9",
    day: 1,
    time: "16h40 - 18h15",
    title: "Préparation Soirée d'ouverture",
    description: "Préparation de la soirée d'ouverture.",
    location: "Non précisé",
    category: "Préparation"
  },
  {
    id: "j1-s10",
    day: 1,
    time: "18h30 - 21h30",
    title: "Soirée d'ouverture (Networking Cocktail & VIP)",
    description: "Discours courts, networking premium (VIP, partenaires, décideurs), animation DJ + musique.",
    location: "Non précisé",
    category: "Soirée"
  },
  // {
  //   id: "j1-s11",
  //   day: 1,
  //   time: "21h45 - 22h00",
  //   title: "Embarquement en car",
  //   description: "Embarquement en car.",
  //   location: "Non précisé",
  //   category: "Transport"
  // },
  // {
  //   id: "j1-s12",
  //   day: 1,
  //   time: "22h00 - 22h45",
  //   title: "Trajet Lieu Conférence → Lieu Hébergement",
  //   description: "Transport entre le lieu de la conférence et le lieu d'hébergement.",
  //   location: "Lieu Conf → Lieu Heberg",
  //   category: "Transport"
  // },
  {
    id: "j1-s13",
    day: 1,
    time: "23h00 - 0h00",
    title: "Dispatching chambres",
    description: "Répartition des chambres.",
    location: "Lieu Heberg",
    category: "Logistique"
  },

  // ===================== JOUR 2 : "Entrepreneuriat" =====================
  {
    id: "j2-s1",
    day: 2,
    time: "6h00 - 6h30",
    title: "Petit déjeuner",
    description: "Petit déjeuner.",
    location: "Lieu Heberg",
    category: "Pause"
  },
  {
    id: "j2-s2",
    day: 2,
    time: "6h30 - 7h00",
    title: "Préparation",
    description: "Préparation.",
    location: "Lieu Heberg",
    category: "Préparation"
  },
  {
    id: "j2-s3",
    day: 2,
    time: "7h15 - 8h45",
    title: "Trajet Lieu Hébergement → Lieu Conférence",
    description: "Transport entre le lieu d'hébergement et le lieu de la conférence.",
    location: "Lieu Heberg → Lieu Conf",
    category: "Transport"
  },
  {
    id: "j2-s4",
    day: 2,
    time: "8h50 - 9h00",
    title: "Dépôt de tenue dans la vestiaire",
    description: "Dépôt de tenue dans la vestiaire.",
    location: "Vestiaire",
    category: "Logistique"
  },
  {
    id: "j2-s5",
    day: 2,
    time: "09h00 - 10h50",
    title: "Formation Certifiante JCI",
    description: "Formation certifiante JCI.",
    location: "Non précisé",
    category: "Formation"
  },
  {
    id: "j2-s6",
    day: 2,
    time: "11h00 - 12h15",
    title: "Ateliers pratiques (session parallèle) — Atelier 4 : Pitcher son projet efficacement",
    description: "Session parallèle.",
    location: "Non précisé",
    category: "Atelier"
  },
  {
    id: "j2-s7",
    day: 2,
    time: "11h00 - 12h15",
    title: "Ateliers pratiques (session parallèle) — Atelier 5 : Trouver des financements",
    description: "Session parallèle.",
    location: "Non précisé",
    category: "Atelier"
  },
  {
    id: "j2-s8",
    day: 2,
    time: "11h00 - 12h15",
    title: "Ateliers pratiques (session parallèle) — Atelier 6 : Construire un réseau stratégique",
    description: "Session parallèle.",
    location: "Non précisé",
    category: "Atelier"
  },
  {
    id: "j2-s9",
    day: 2,
    time: "12h15 - 13h00",
    title: "Pause déjeuner & visite des stands",
    description: "Interaction avec entreprises, présentation de projets, premiers contacts business.",
    location: "Non précisé",
    category: "Pause"
  },
  {
    id: "j2-s10",
    day: 2,
    time: "13h15 - 14h50",
    title: "Success stories",
    description: "Témoignages d'entrepreneurs malagasy, cas concrets de réussite, secteur public & privé.",
    location: "Non précisé",
    category: "Conférence"
  },
  {
    id: "j2-s11",
    day: 2,
    time: "15h00 - 16h20",
    title: "Panel & Pause-café",
    description: "Panel suivi d'une pause-café.",
    location: "Non précisé",
    category: "Panel"
  },
  {
    id: "j2-s12",
    day: 2,
    time: "16h30 - 18h00",
    title: "FINAL AOD",
    description: "Final AOD.",
    location: "Non précisé",
    category: "Compétition"
  },
  {
    id: "j2-s13",
    day: 2,
    time: "18h15 - 18h45",
    title: "Préparation Clôture Officielle Youth Summit 2026",
    description: "Préparation de la clôture officielle.",
    location: "Non précisé",
    category: "Préparation"
  },
  {
    id: "j2-s14",
    day: 2,
    time: "19h00 - 21h45",
    title: "Clôture Officielle Youth Summit 2026",
    description: "Spectacle culturel, défilé, concert d'artistes, partage de gâteau pour les 15 ans de JCI Iarivo. Location de tenue chez Bogasy.",
    location: "Non précisé",
    category: "Cérémonie"
  },
  // {
  //   id: "j2-s15",
  //   day: 2,
  //   time: "22h00 - 22h15",
  //   title: "Embarquement en car",
  //   description: "Embarquement en car.",
  //   location: "Non précisé",
  //   category: "Transport"
  // },
  // {
  //   id: "j2-s16",
  //   day: 2,
  //   time: "22h15 - 23h00",
  //   title: "Trajet Lieu Conférence → Lieu Hébergement",
  //   description: "Transport entre le lieu de la conférence et le lieu d'hébergement.",
  //   location: "Lieu Conf → Lieu Heberg",
  //   category: "Transport"
  // },
  // {
  //   id: "j2-s17",
  //   day: 2,
  //   time: "23h00 - 2h00",
  //   title: "After",
  //   description: "Animation DJ, boisson / snack.",
  //   location: "Lieu Heberg",
  //   category: "Soirée"
  // },

  // ===================== JOUR 3 : "AG" =====================
  {
    id: "j3-s1",
    day: 3,
    time: "7h00 - 7h30",
    title: "Petit déjeuner",
    description: "Petit déjeuner.",
    location: "Non précisé",
    category: "Pause"
  },
  {
    id: "j3-s2",
    day: 3,
    time: "7h30 - 8h00",
    title: "Préparation AG",
    description: "Préparation de l'Assemblée Générale.",
    location: "Non précisé",
    category: "Préparation"
  },
  {
    id: "j3-s3",
    day: 3,
    time: "8h00 - 10h00",
    title: "AG1",
    description: "Première session de l'Assemblée Générale.",
    location: "Non précisé",
    category: "AG"
  },
  {
    id: "j3-s4",
    day: 3,
    time: "10h10 - 10h25",
    title: "Pause",
    description: "Pause.",
    location: "Non précisé",
    category: "Pause"
  },
  {
    id: "j3-s5",
    day: 3,
    time: "10h30 - 12h30",
    title: "AG2",
    description: "Deuxième session de l'Assemblée Générale.",
    location: "Non précisé",
    category: "AG"
  },
  // {
  //   id: "j3-s6",
  //   day: 3,
  //   time: "12h45 - 13h45",
  //   title: "Déjeuner",
  //   description: "Déjeuner.",
  //   location: "Non précisé",
  //   category: "Pause"
  // },
  {
    id: "j3-s7",
    day: 3,
    time: "14h00 - 17h00",
    title: "Réunion des officiers BN-BL 2027 / Quartier libre",
    description: "Réunion des officiers BN-BL 2027, ou quartier libre selon les participants.",
    location: "Non précisé",
    category: "Réunion"
  },
  {
    id: "j3-s8",
    day: 3,
    time: "17h15 - 17h50",
    title: "Préparation soirée",
    description: "Préparation de la soirée de clôture.",
    location: "Non précisé",
    category: "Préparation"
  },
  {
    id: "j3-s9",
    day: 3,
    time: "18h00 - 21h00",
    title: "Soirée de clôture",
    description: "Remise des awards.",
    location: "Non précisé",
    category: "Soirée"
  },
  // {
  //   id: "j3-s10",
  //   day: 3,
  //   time: "21h15 - 2h00",
  //   title: "After",
  //   description: "Animation DJ, boisson / snack.",
  //   location: "Non précisé",
  //   category: "Soirée"
  // }
];
export const FAQS: FAQItem[] = [
  // A. GENERAL / PRESENTATION
  {
    id: "g1",
    question: "Qu'est-ce que la Convention Nationale JCI Madagascar 2026 ?",
    answer: "L'événement institutionnel annuel de la JCI Madagascar. Elle rassemble les 14 Organisations Locales du pays (9 régions, +380 membres actifs) sur 3 jours de conférences, ateliers, networking et moments institutionnels, avec un accent 2026 sur l'entrepreneuriat. Édition 2026 organisée par la JCI Iarivo.",
    category: "Général"
  },
  {
    id: "g2",
    question: "Qu'est-ce que le Youth Summit 2026 ?",
    answer: "Le volet grand public de la Convention Nationale, ouvert au-delà des membres JCI. Il se déroule sur les 2 premiers jours (1er et 2 octobre) et regroupe conférences, ateliers pratiques, success stories et animations pour la jeunesse malagasy autour du leadership et de l'entrepreneuriat.",
    category: "Général"
  },
  {
    id: "g3",
    question: "Quelles sont les dates de l'événement ?",
    answer: "Du jeudi 1er au samedi 3 octobre 2026. Jour 1 (Jeunesse & Leadership) et Jour 2 (Entrepreneuriat) accueillent le Youth Summit ; le Jour 3 est réservé à l'Assemblée Générale de la JCI Madagascar (membres).",
    category: "Général"
  },
  {
    id: "g4",
    question: "Où se déroule l'événement ?",
    answer: "À Antananarivo. Lieu exact en cours de confirmation officielle — annonce dès confirmation.",
    category: "Général"
  },
  {
    id: "g5",
    question: "Qui peut participer ?",
    answer: "La Convention Nationale (inscriptions payantes) est ouverte aux membres JCI de toutes les Organisations Locales. Le Youth Summit (Jour 1 et 2) est ouvert au grand public : jeunes professionnels, entrepreneurs, étudiants, secteur privé, ONG.",
    category: "Général"
  },
  {
    id: "g6",
    question: "Qui organise la Convention Nationale 2026 ?",
    answer: "La JCI Iarivo (Organisation Locale d'Antananarivo, fondée en 2011), sous l'égide de la JCI Madagascar (organisation nationale). La JCI (Junior Chamber International) est une organisation mondiale de jeunes leaders de 18 à 40 ans, présente dans plus de 100 pays.",
    category: "Général"
  },
  // B. INSCRIPTIONS & TARIFS
  {
    id: "i1",
    question: "Comment s'inscrire à la Convention Nationale ?",
    answer: "Via le formulaire d'inscription en ligne (Tally), dont le lien sera communiqué sur la page Facebook et Linkedin JCI Iarivo / Convention Nationale JCI Madagascar et sur ce site à partir du 13 juillet 2026 (ouverture Early Bird).",
    category: "Inscriptions"
  },
  {
    id: "i2",
    question: "Quel est le calendrier des inscriptions ?",
    answer: "• Early Bird : 13 juillet → 2 août 2026\n• Tarif Standard : 3 août → 23 août 2026\n• Last Chance : 24 août → 13 septembre 2026\n• Fermeture des inscriptions : 13 septembre 2026",
    category: "Inscriptions"
  },
  {
    id: "i3",
    question: "Quels sont les tarifs d'inscription ?",
    answer: "• Pack Complet (avec hébergement) :\n  - Early Bird : 500 000 Ar\n  - Standard : 550 000 Ar\n  - Last Chance : 575 000 Ar\n\n• Pack Sans Hébergement :\n  - Early Bird : 350 000 Ar\n  - Standard : 375 000 Ar\n  - Last Chance : 400 000 Ar",
    category: "Inscriptions"
  },
  {
    id: "i4",
    question: "Quelle est la différence entre le Pack Complet et le Pack Sans Hébergement ?",
    answer: "Les deux incluent : 3 déjeuners, 3 dîners de soirée (ouverture, soirée folklorique, clôture), 5 pauses café, l'accès au programme complet des 3 jours et le kit participant. Le Pack Complet ajoute 3 nuits d'hébergement (1, 2 et 3 octobre) et 2 petits-déjeuners. Le Pack Sans Hébergement est limité à 30 places (fermeture automatique du choix une fois le quota atteint, sans dérogation).",
    category: "Inscriptions"
  },
  {
    id: "i5",
    question: "Existe-t-il un tarif VIP / Premium ?",
    answer: "Oui, un Pack Premium/VIP à 850 000 Ar (5 places maximum, deadline 2 août 2026), réservé aux partenaires sponsors, invités officiels et représentants institutionnels — non applicable aux membres JCI actifs. Il inclut le Pack Complet, une chambre individuelle non partagée, une priorité de placement en salle plénière, une mention officielle dans le programme et l'accès au networking VIP.",
    category: "Inscriptions"
  },
  {
    id: "i6",
    question: "Comment payer mon inscription ?",
    answer: "Par Orange Money, au tarif confirmé selon la période d'inscription. La référence de paiement est ensuite à indiquer dans le formulaire d'inscription.",
    category: "Inscriptions"
  },
  {
    id: "i7",
    question: "Puis-je annuler mon inscription ou me faire rembourser ?",
    answer: "La politique de remboursement/annulation n'est pas encore définie — elle sera précisée par la Commission Finance avant l'ouverture des inscriptions le 13 juillet 2026.",
    category: "Inscriptions"
  },
  // C. HEBERGEMENT
  {
    id: "h1",
    question: "Où seront hébergés les participants ayant choisi le Pack Complet ?",
    answer: "Les hôtels partenaires sont en cours de confirmation. L'hébergement se fera à proximité du lieu de l'événement (centre-ville), pour un séjour de 3 nuits (1, 2 et 3 octobre 2026). Les détails seront communiqués dès confirmation.",
    category: "Hébergement"
  },
  {
    id: "h2",
    question: "Puis-je choisir mon hôtel ?",
    answer: "Non, l'allocation sera gérée par le COC après validation de l'inscription — il n'y aura pas de choix du participant dans le formulaire.",
    category: "Hébergement"
  },
  {
    id: "h3",
    question: "Je n'ai pas besoin d'hébergement, dois-je quand même prendre le Pack Complet ?",
    answer: "Non, le Pack Sans Hébergement est prévu pour cela (mêmes repas et accès programme, sans nuitées ni petits-déjeuners). Il est toutefois limité à 30 places.",
    category: "Hébergement"
  },
  // D. PROGRAMME & LOGISTIQUE
  {
    id: "d1",
    question: "Quel est le programme des 3 jours ?",
    answer: "• Jour 1 (jeudi 1er oct.) — Jeunesse & Leadership : cérémonie d'ouverture officielle (CN + Youth Summit), panel \"Accès au financement\", conférence plénière \"Jeunesse malagasy & opportunités économiques\", ateliers pratiques (Leadership & Mindset / Personal Branding / Marketing Digital), soirée d'ouverture et networking cocktail VIP.\n\n• Jour 2 (vendredi 2 oct.) — Entrepreneuriat : formation certifiante JCI, ateliers pratiques (Pitcher son projet / Trouver des financements / Construire un réseau stratégique), success stories d'entrepreneurs malagasy, finale nationale du concours Art Oratoire et Débat, clôture officielle du Youth Summit (spectacle culturel, défilé, concert, 15 ans de la JCI Iarivo).\n\n• Jour 3 (samedi 3 oct.) — Gouvernance & vie associative : Assemblées Générales 1 et 2 de la JCI Madagascar, réunion des officiers BN-BL 2027, soirée de clôture et remise des Awards JCI Madagascar.",
    category: "Programme"
  },
  {
    id: "d2",
    question: "Les repas sont-ils inclus ?",
    answer: "Oui. Les deux packs d'inscription (Complet et Sans Hébergement) incluent 3 déjeuners, 3 dîners de soirée (ouverture, folklorique, clôture) et 5 pauses café. Aucune inscription séparée n'est nécessaire pour les repas.",
    category: "Programme"
  },
  {
    id: "d3",
    question: "Comment se passe le choix des ateliers pratiques ?",
    answer: "Certains ateliers ont un nombre de places limité. Le choix se fait sur votre espace d'inscription personnel après obtention de votre Pass nominatif — plus tôt vous choisissez, plus vous avez de chances d'obtenir la session souhaitée. Les modalités exactes de modification après validation seront à confirmer par la Commission Logistique.",
    category: "Programme"
  },
  {
    id: "d4",
    question: "Comment récupérer mon badge d'accréditation ?",
    answer: "Les badges sont disponibles à l'accueil principal du site le matin même à partir de 07h30, sur présentation de votre confirmation d'inscription (QR code) et d'une pièce d'identité.",
    category: "Programme"
  },
  {
    id: "d5",
    question: "Y a-t-il un code vestimentaire ?",
    answer: "Un code vestimentaire sera communiqué avant l'événement (annonce prévue avec le programme détaillé, autour du 11 septembre 2026).",
    category: "Programme"
  },
  {
    id: "d6",
    question: "Les sessions seront-elles diffusées en direct ou disponibles en replay ?",
    answer: "La cérémonie d'ouverture officielle du 1er octobre sera diffusée en direct sur la page Facebook de la JCI Iarivo. Les autres sessions (ateliers, panels, conférences) ne sont pas prévues en streaming ni en replay.",
    category: "Programme"
  },
  // E. YOUTH SUMMIT
  {
    id: "y1",
    question: "Le Youth Summit est-il payant ?",
    answer: "Des pass payants sont prévus (Pass Journée J1, Pass Journée J2, Pass Complet J1+J2, Pass Étudiant, Pass VIP), mais les tarifs sont en attente de confirmation. Le Pass Intervenant est gratuit, en échange d'une intervention sur scène.",
    category: "Youth Summit"
  },
  {
    id: "y2",
    question: "Je ne suis pas membre JCI, puis-je venir seulement pour le Youth Summit ?",
    answer: "Oui, c'est justement l'objectif du Youth Summit : un format ouvert au grand public, sans nécessité d'être membre JCI, sur les journées du 1er et 2 octobre.",
    category: "Youth Summit"
  },
  {
    id: "y3",
    question: "Qu'est-ce que le Pass Étudiant ?",
    answer: "Un tarif dédié, identique au Pass Journée (J1 ou J2 au choix), sur présentation d'une carte étudiante en cours de validité. Hors accès aux soirées.",
    category: "Youth Summit"
  },
  {
    id: "y4",
    question: "Comment devenir exposant au Youth Summit ?",
    answer: "Trois formules de stand sont prévues : Stand Standard (3x3m), Stand Premium (3x6m) et Stand Recruteur (dans un espace Carrières dédié, avec accès à une session de speed-networking). 39 chapiteaux 3x3m et 2 chapiteaux 3x6m sont disponibles. Les tarifs sont en attente de confirmation.",
    category: "Youth Summit"
  },
  {
    id: "y5",
    question: "Comment devenir intervenant ?",
    answer: "En contactant le COC de la Convention Nationale. Le statut d'intervenant donne accès aux 2 journées, un badge nominatif \"Intervenant\", une bio publiée dans le programme et un kit intervenant, en échange d'une présence sur scène (conférence, panel ou atelier).",
    category: "Youth Summit"
  },
  // F. CONTACT
  {
    id: "c1",
    question: "J'ai une autre question, qui contacter ?",
    answer: "Écrivez à jciiarivo@gmail.com, ou au Bureau Local JCI Iarivo : bliarivo@googlegroups.com.",
    category: "Contact"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "t1",
    name: "Geneviève Sorel",
    role: "Coordinatrice Générale",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250",
    bio: "Supervise la planification logistique globale, la sécurité et la qualité de l'expérience d'accueil."
  },
  {
    id: "t2",
    name: "Adil El Amrani",
    role: "Directeur de la Programmation",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250&h=250",
    bio: "Garant du comité scientifique, de la répartition des thèmes et de la sélection finale de nos experts."
  },
  {
    id: "t3",
    name: "Clara Vasseur",
    role: "Responsable Partenaires & Sponsoring",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250&h=250",
    bio: "Votre interlocutrice privilégiée pour toute présence de stand, mécénat ou sponsoring événementiel."
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art1",
    title: "Ce qu'il faut attendre de l'édition nationale 2026",
    excerpt: "Nouveaux formats immersifs, thématiques écologiques renforcées et outils IA révolutionnaires : tour d'horizon complet des temps forts qui rythmeront cette édition historique.",
    content: "Cette année, la Convention Nationale franchit un cap décisif. Nous avons repensé les espaces de débat pour y intégrer des ateliers immersifs d'intelligence collective dits en 'fishbowl' favorisant le dialogue inclusif spontané. L'objectif n'est plus seulement d'écouter, mais de sortir de l'événement avec un plan de route activable pour votre transition de leadership.",
    date: "15 Juin 2026",
    category: "Événement",
    image: "/src/assets/images/convention_venue_blog_1782117221629.jpg",
    readTime: "4 min"
  },
  {
    id: "art2",
    title: "Le virage écologique : Mythe ou réalité organisationnelle ?",
    excerpt: "Marc Cohen partage ses réflexions pré-convention sur la complexité d'aligner la direction stratégique face aux réglementations européennes de responsabilité sociétale (CSRD).",
    content: "La transition verte subit souvent une crise d'action : trop de déclarations, pas assez d'impact physique. Dans cet article préparatoire, Marc décortique comment la comptabilité en triple capital permet aux directions financières de repenser l'investissement vert comme un véritable actif de résilience à moyen terme.",
    date: "12 Juin 2026",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=500&h=300",
    readTime: "6 min"
  },
  {
    id: "art3",
    title: "Le déclin du management pyramidal au profit des systèmes horizontaux",
    excerpt: "Comment les structures à faible hiérarchie parviennent-elles à encaisser des cycles de crise brutale ? Analyse comparative de 3 leaders industriels.",
    content: "Déléguer la décision finale à la périphérie des réseaux opérationnels n'est pas une perte de contrôle, c'est une accélération de la vitesse de réaction. Cet article explore les données empiriques prouvant que les systèmes horizontaux ont un taux de rétention des talents 35% supérieur et résolvent les interruptions d'approvisionnement deux fois plus vite.",
    date: "08 Juin 2026",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500&h=300",
    readTime: "5 min"
  }
];

export const PARTNERS: Partner[] = [
  { id: "p1", name: "Hexa Tech", logoUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&h=50&q=50", tier: "platinum" },
  { id: "p2", name: "Green Invest", logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&h=50&q=50", tier: "platinum" },
  { id: "p3", name: "Alliance Europe", logoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=50&q=50", tier: "gold" },
  { id: "p4", name: "Vapor Solution", logoUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=120&h=50&q=50", tier: "gold" },
  { id: "p5", name: "Apex Global", logoUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=120&h=50&q=50", tier: "silver" },
  { id: "p6", name: "Synergetic", logoUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=120&h=50&q=50", tier: "silver" },
  { id: "p7", name: "Core Carbon", logoUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&h=50&q=50", tier: "silver" },
  { id: "p8", name: "Novatis", logoUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=120&h=50&q=50", tier: "silver" }
];