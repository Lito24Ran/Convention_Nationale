import CN_image from "../src/assets/images/1-new (1).jpg"
import YS_image from "../src/assets/images/3-new.jpg"
import access_financement from "../src/assets/images/Acces_Financement.jpeg"
import Poeple_image from "../src/assets/images/People_image.jpeg"

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
  // --- JOUR 1 : "Jeunesse et Leadership" ---
  {
    id: "s1_1",
    time: "08:30 - 09:50",
    title: "Cérémonie d'ouverture officielle",
    description: "• Discours JCI Madagascar x JCI Iarivo\n• Allocutions des partenaires institutionnels\n• Présentation des objectifs du Youth Summit\n(Dir-Coc 1, PL, Orange, PN, Institutions)",
    location: "Salle de conférence (90 assis) — Cité des Cultures",
    targetAudience: "Tous (Public + Participants CN + BL + BN + VIP)",
    category: "Cérémonie",
    day: 1
  },
  {
    id: "s1_2",
    time: "10:00 - 10:50",
    title: "Ouverture des stands & networking",
    description: "Ouverture officielle des stands, visite d'exposition et networking interactif.",
    location: "Zone d'exposition, stands 01 à 30 — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Networking",
    day: 1
  },
  {
    id: "s1_3",
    time: "11:00 - 12:30",
    title: "Panel de discussion #1",
    description: "Thème : « Accès au financement : réalités, défis et solutions »\nIntervenants : Banques, investisseurs, incubateurs.",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Panel",
    day: 1
  },
  {
    id: "s1_4",
    time: "12:35 - 13:30",
    title: "Pause déjeuner & visite des stands",
    description: "• Interaction avec entreprises\n• Présentation de projets\n• Premiers contacts business",
    location: "Espace de restauration + zone d'exposition — Cité des Cultures",
    targetAudience: "Public (stands uniquement, pas de déjeuner) + Participants CN (déjeuner inclus)",
    category: "Pause",
    day: 1
  },
  {
    id: "s1_5",
    time: "13:30 - 14:50",
    title: "Conférence plénière #1",
    description: "Thème : « Jeunesse malagasy & opportunités économiques : transformer le potentiel en impact »\nIntervenants : leaders du secteur public & privé.",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Conférence",
    day: 1
  },
  {
    id: "s1_6",
    time: "15:00 - 16:30",
    title: "Ateliers pratiques (Sessions parallèles - Participants limités)",
    description: "• Atelier 1 : Leadership & Mindset (Anakao, 18 places)\n• Atelier 2 : Personal branding (Ikaloina, 24 places)\n• Atelier 3 : Data literacy format interactif (Arindra, 28 places, salle numérique)",
    location: "Atelier 1 : Anakao (18) / Atelier 2 : Ikaloina (24) / Atelier 3 : Arindra (28) — Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Atelier",
    day: 1
  },
  {
    id: "s1_7",
    time: "16:40 - 18:15",
    title: "Préparation Soirée d'ouverture",
    description: "Mise en place et préparation pour la soirée d'accueil et de gala d'ouverture.",
    location: "Espace soirée — Cité des Cultures",
    targetAudience: "Organisation (COC)",
    category: "Préparation",
    day: 1
  },
  {
    id: "s1_8",
    time: "18:30 - 21:30",
    title: "Soirée d'ouverture (Networking Cocktail & VIP)",
    description: "• Discours courts\n• Networking premium (VIP, partenaires, décideurs)\n• Animation DJ + musique",
    location: "Espace soirée + zone d'exposition — NAMASTE",
    targetAudience: "Participants CN + BL + BN + VIP/Partenaires + Public payant",
    category: "Soirée",
    day: 1
  },
  {
    id: "s1_9",
    time: "21:45 - 22:00",
    title: "Embarquement en car",
    description: "Rassemblement et embarquement des participants dans les cars (3 bus).",
    location: "Voirie devant l'établissement (dépose-minute, 3 bus)",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 1
  },
  {
    id: "s1_10",
    time: "22:00 - 22:45",
    title: "Lieu Conf - Lieu Héberg",
    description: "Transfert routier en navettes collectives vers les lieux d'hébergement.",
    location: "Trajet — hors Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 1
  },
  {
    id: "s1_11",
    time: "23:00 - 00:00",
    title: "Dispatching chambres",
    description: "Arrivée aux hébergements et remise des clés des chambres.",
    location: "Hébergement — hors Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 1
  },

  // --- JOUR 2 : "Entrepreneuriat" ---
  {
    id: "s2_1",
    time: "06:00 - 06:30",
    title: "Petit dej",
    description: "Service du petit déjeuner à l'hébergement.",
    location: "Hébergement — hors Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Pause",
    day: 2
  },
  {
    id: "s2_2",
    time: "06:30 - 07:00",
    title: "Preparation",
    description: "Temps de préparation matinale dans les chambres.",
    location: "Hébergement — hors Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Préparation",
    day: 2
  },
  {
    id: "s2_3",
    time: "07:15 - 08:45",
    title: "Lieu Héberg - Lieu Conf",
    description: "Transfert matinal en navettes collectives vers la Cité des Cultures.",
    location: "Trajet vers la Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 2
  },
  {
    id: "s2_4",
    time: "08:50 - 09:00",
    title: "Dépôt de tenue dans la vestiaire",
    description: "Dépôt des tenues de soirée dans le vestiaire sécurisé prévu sur place.",
    location: "Zone accueil / vestiaire (salle Arykanto) — Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 2
  },
  {
    id: "s2_5",
    time: "09:00 - 10:50",
    title: "Formation Certifiante JCI : Effective Leadership",
    description: "Formation certifiante officielle de la JCI dispensée selon les standards internationaux.",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Conférence",
    day: 2
  },
  {
    id: "s2_6",
    time: "11:00 - 12:15",
    title: "Ateliers pratiques (Session parallèle)",
    description: "• Atelier 4 : Pitcher son projet efficacement (Anakao, 18 places)\n• Atelier 5 : Trouver des financements (Arindra, 28 places)\n• Atelier 6 : Construire un réseau stratégique (Ikaloina, 24 places)",
    location: "Atelier 4 : Anakao (18) / Atelier 5 : Arindra (28) / Atelier 6 : Ikaloina (24) — Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Atelier",
    day: 2
  },
  {
    id: "s2_7",
    time: "12:15 - 13:00",
    title: "Pause déjeuner & visite des stands",
    description: "• Interaction avec entreprises\n• Premiers contacts business",
    location: "Espace de restauration + zone d'exposition — Cité des Cultures",
    targetAudience: "Public (stands uniquement, pas de déjeuner) + Participants CN (déjeuner inclus)",
    category: "Pause",
    day: 2
  },
  {
    id: "s2_8",
    time: "13:15 - 14:50",
    title: "Success stories : Témoignages d'entrepreneurs malagasy",
    description: "• Témoignages d'entrepreneurs malagasy\n• Cas concrets de réussite",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Conférence",
    day: 2
  },
  {
    id: "s2_8b",
    time: "13:15 - 14:15",
    title: "Session POA & Budget prévisionnel 2027",
    description: "Dernière session statutaire avant l'AG (demande BN), en parallèle de la session Success stories.",
    location: "Anakao (18-20 places, écran) — Cité des Cultures",
    targetAudience: "PL 2026 + candidats BN 2027",
    category: "Panel",
    day: 2
  },
  {
    id: "s2_9",
    time: "15:00 - 16:20",
    title: "Table ronde economique : « Francophonie économique, la place de Madagascar » & Pause-café",
    description: "Thème : « Francophonie économique, la place de Madagascar »\nÉchanges de haut niveau accompagnés d'une pause-café (service en périphérie).",
    location: "Salle de conférence (service en périphérie) — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Panel",
    day: 2
  },
  {
    id: "s2_10",
    time: "16:30 - 18:00",
    title: "FINAL AOD (Art Oratoire et Débat)",
    description: "Grande Finale Nationale du concours d'Art Oratoire et de Débat (AOD) de la JCI Madagascar.",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Conférence",
    day: 2
  },
  {
    id: "s2_11",
    time: "18:15 - 18:45",
    title: "Preparation Clôture Officielle Youth Summit 2026",
    description: "Temps de préparation et installation pour la clôture officielle.",
    location: "Salle de conférence + espace soirée — Cité des Cultures",
    targetAudience: "Organisation (COC)",
    category: "Préparation",
    day: 2
  },
  {
    id: "s2_12",
    time: "19:00 - 21:45",
    title: "Clôture Officielle Youth Summit 2026",
    description: "Cérémonie de clôture officielle : spectacle culturel, défilé, concert d'artistes et cocktail.",
    location: "Salle de conférence (scène) + espace soirée (cocktail) — Cité des Cultures",
    targetAudience: "Participants CN + BL + BN + VIP + Public payant",
    category: "Cérémonie",
    day: 2
  },
  {
    id: "s2_13",
    time: "22:00 - 22:15",
    title: "Embarquement en car",
    description: "Rassemblement et embarquement des participants dans les cars officiels.",
    location: "Voirie devant l'établissement (dépose-minute)",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 2
  },
  {
    id: "s2_14",
    time: "22:15 - 23:00",
    title: "Lieu Conf - Lieu Héberg",
    description: "Liaison routière retour en navette collective vers le lieu d'hébergement.",
    location: "Trajet vers hébergement",
    targetAudience: "Participants CN",
    category: "Logistique",
    day: 2
  },
  {
    id: "s2_15",
    time: "23:00 - 02:00",
    title: "After (Animation DJ, Boisson / Snack)",
    description: "Soirée festive et conviviale avec animation DJ, boissons et snacks (contrainte : démontage nocturne stands 19-30 avant l'AG).",
    location: "À confirmer (sur place ou hébergement)",
    targetAudience: "Participants CN",
    category: "Soirée",
    day: 2
  },

  // --- JOUR 3 : "AG" ---
  {
    id: "s3_1",
    time: "07:00 - 07:30",
    title: "Petit dej",
    description: "Petit déjeuner à l'hébergement pour tous les délégués et membres JCI.",
    location: "Hébergement — hors Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Pause",
    day: 3
  },
  {
    id: "s3_2",
    time: "07:30 - 08:00",
    title: "Preparation AG",
    description: "Mise en place de la salle d'Assemblée Générale (130 chaises après démontage stands).",
    location: "Salle de conférence (130 chaises après démontage stands) — Cité des Cultures",
    targetAudience: "Organisation (COC)",
    category: "Préparation",
    day: 3
  },
  {
    id: "s3_3",
    time: "08:00 - 10:00",
    title: "AG1 (Assemblée Générale 1)",
    description: "Première session statutaire de l'Assemblée Générale ordinaire de la JCI Madagascar.",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Conférence",
    day: 3
  },
  {
    id: "s3_4",
    time: "10:10 - 10:25",
    title: "Pause café",
    description: "Pause et rafraîchissements pour les délégués et participants.",
    location: "Zone de circulation et balcon — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Pause",
    day: 3
  },
  {
    id: "s3_5",
    time: "10:30 - 12:30",
    title: "AG2 (Assemblée Générale 2)",
    description: "Deuxième session statutaire de l'Assemblée Générale : délibérations, votes et élections officielles du Bureau National 2027.",
    location: "Salle de conférence — Cité des Cultures",
    targetAudience: "Public + Participants CN",
    category: "Conférence",
    day: 3
  },
  {
    id: "s3_6",
    time: "12:45 - 13:45",
    title: "Dejeuner",
    description: "Déjeuner officiel des délégués et participants.",
    location: "Espace de restauration — Cité des Cultures",
    targetAudience: "Participants CN",
    category: "Pause",
    day: 3
  },
  {
    id: "s3_7",
    time: "14:00 - 17:00",
    title: "Réunion des officiers BN-BL 2027 / Quartier libre",
    description: "Réunion stratégique de cadrage pour les nouveaux officiers BN-BL 2027 élus / Quartier libre pour les autres participants.",
    location: "Salle de réunion à dimensionner (piste : Anakao, sous réserve d'effectif) — Cité des Cultures",
    targetAudience: "BN + BL 2027 (élus) ; Participants CN (quartier libre)",
    category: "Panel",
    day: 3
  },
  {
    id: "s3_8",
    time: "17:15 - 17:50",
    title: "Preparation soiree",
    description: "Mise en place de l'espace et préparatifs individuels pour la grande soirée de clôture.",
    location: "Salle de conférence + espace soirée — Cité des Cultures",
    targetAudience: "Organisation (COC)",
    category: "Préparation",
    day: 3
  },
  {
    id: "s3_9",
    time: "18:00 - 21:00",
    title: "Soiree de cloture (remise des awards)",
    description: "Grande soirée solennelle de clôture de la Convention Nationale 2026 et remise officielle des awards JCI Madagascar.",
    location: "Salle de conférence (scène) + espace soirée (cocktail) — Cité des Cultures",
    targetAudience: "Participants CN + BL + BN + VIP + Public payant",
    category: "Cérémonie",
    day: 3
  },
  {
    id: "s3_10",
    time: "21:15 - 02:00",
    title: "After (Animation DJ, Boisson / Snack)",
    description: "Grande After-Party finale : animation DJ, rafraîchissements et snacks.",
    location: "À confirmer (sur place ou hébergement)",
    targetAudience: "Participants CN",
    category: "Soirée",
    day: 3
  }
];

// export const FAQS: FAQItem[] = [
//   // A. GENERAL / PRESENTATION
//   {
//     id: "g1",
//     question: "Qu'est-ce que la Convention Nationale JCI Madagascar 2026 ?",
//     answer: "L'événement institutionnel annuel de la JCI Madagascar. Elle rassemble les 14 Organisations Locales du pays (9 régions, +380 membres actifs) sur 3 jours de conférences, ateliers, networking et moments institutionnels, avec un accent 2026 sur l'entrepreneuriat. Édition 2026 organisée par la JCI Iarivo.",
//     category: "Général"
//   },
//   {
//     id: "g2",
//     question: "Qu'est-ce que le Youth Summit 2026 ?",
//     answer: "Le volet grand public de la Convention Nationale, ouvert au-delà des membres JCI. Il se déroule sur les 2 premiers jours (1er et 2 octobre) et regroupe conférences, ateliers pratiques, success stories et animations pour la jeunesse malagasy autour du leadership et de l'entrepreneuriat.",
//     category: "Général"
//   },
//   {
//     id: "g3",
//     question: "Quelles sont les dates de l'événement ?",
//     answer: "Du jeudi 1er au samedi 3 octobre 2026. Jour 1 (Jeunesse & Leadership) et Jour 2 (Entrepreneuriat) accueillent le Youth Summit ; le Jour 3 est réservé à l'Assemblée Générale de la JCI Madagascar (membres).",
//     category: "Général"
//   },
//   {
//     id: "g4",
//     question: "Où se déroule l'événement ?",
//     answer: "À Antananarivo. Lieu exact en cours de confirmation officielle — annonce dès confirmation.",
//     category: "Général"
//   },
//   {
//     id: "g5",
//     question: "Qui peut participer ?",
//     answer: "La Convention Nationale (inscriptions payantes) est ouverte aux membres JCI de toutes les Organisations Locales. Le Youth Summit (Jour 1 et 2) est ouvert au grand public : jeunes professionnels, entrepreneurs, étudiants, secteur privé, ONG.",
//     category: "Général"
//   },
//   {
//     id: "g6",
//     question: "Qui organise la Convention Nationale 2026 ?",
//     answer: "La JCI Iarivo (Organisation Locale d'Antananarivo, fondée en 2011), sous l'égide de la JCI Madagascar (organisation nationale). La JCI (Junior Chamber International) est une organisation mondiale de jeunes leaders de 18 à 40 ans, présente dans plus de 100 pays.",
//     category: "Général"
//   },
//   // B. INSCRIPTIONS & TARIFS
//   {
//     id: "i1",
//     question: "Comment s'inscrire à la Convention Nationale ?",
//     answer: "Via le formulaire d'inscription en ligne (Tally), dont le lien sera communiqué sur la page Facebook et Linkedin JCI Iarivo / Convention Nationale JCI Madagascar et sur ce site à partir du 13 juillet 2026 (ouverture Early Bird).",
//     category: "Inscriptions"
//   },
//   {
//     id: "i2",
//     question: "Quel est le calendrier des inscriptions ?",
//     answer: "• Early Bird : 13 juillet → 2 août 2026\n• Tarif Standard : 3 août → 23 août 2026\n• Last Chance : 24 août → 13 septembre 2026\n• Fermeture des inscriptions : 13 septembre 2026",
//     category: "Inscriptions"
//   },
//   {
//     id: "i3",
//     question: "Quels sont les tarifs d'inscription ?",
//     answer: "• Pack Complet (avec hébergement) :\n  - Early Bird : 500 000 Ar\n  - Standard : 550 000 Ar\n  - Last Chance : 575 000 Ar\n\n• Pack Sans Hébergement :\n  - Early Bird : 350 000 Ar\n  - Standard : 375 000 Ar\n  - Last Chance : 400 000 Ar",
//     category: "Inscriptions"
//   },
//   {
//     id: "i4",
//     question: "Quelle est la différence entre le Pack Complet et le Pack Sans Hébergement ?",
//     answer: "Les deux incluent : 3 déjeuners, 3 dîners de soirée (ouverture, soirée folklorique, clôture), 5 pauses café, l'accès au programme complet des 3 jours et le kit participant. Le Pack Complet ajoute 3 nuits d'hébergement (1, 2 et 3 octobre) et 2 petits-déjeuners. Le Pack Sans Hébergement est limité à 30 places (fermeture automatique du choix une fois le quota atteint, sans dérogation).",
//     category: "Inscriptions"
//   },
//   {
//     id: "i5",
//     question: "Existe-t-il un tarif VIP / Premium ?",
//     answer: "Oui, un Pack Premium/VIP à 850 000 Ar (5 places maximum, deadline 2 août 2026), réservé aux partenaires sponsors, invités officiels et représentants institutionnels — non applicable aux membres JCI actifs. Il inclut le Pack Complet, une chambre individuelle non partagée, une priorité de placement en salle plénière, une mention officielle dans le programme et l'accès au networking VIP.",
//     category: "Inscriptions"
//   },
//   {
//     id: "i6",
//     question: "Comment payer mon inscription ?",
//     answer: "Par Orange Money, au tarif confirmé selon la période d'inscription. La référence de paiement est ensuite à indiquer dans le formulaire d'inscription.",
//     category: "Inscriptions"
//   },
//   {
//     id: "i7",
//     question: "Puis-je annuler mon inscription ou me faire rembourser ?",
//     answer: "La politique de remboursement/annulation n'est pas encore définie — elle sera précisée par la Commission Finance avant l'ouverture des inscriptions le 13 juillet 2026.",
//     category: "Inscriptions"
//   },
//   // C. HEBERGEMENT
//   {
//     id: "h1",
//     question: "Où seront hébergés les participants ayant choisi le Pack Complet ?",
//     answer: "Les hôtels partenaires sont en cours de confirmation. L'hébergement se fera à proximité du lieu de l'événement (centre-ville), pour un séjour de 3 nuits (1, 2 et 3 octobre 2026). Les détails seront communiqués dès confirmation.",
//     category: "Hébergement"
//   },
//   {
//     id: "h2",
//     question: "Puis-je choisir mon hôtel ?",
//     answer: "Non, l'allocation sera gérée par le COC après validation de l'inscription — il n'y aura pas de choix du participant dans le formulaire.",
//     category: "Hébergement"
//   },
//   {
//     id: "h3",
//     question: "Je n'ai pas besoin d'hébergement, dois-je quand même prendre le Pack Complet ?",
//     answer: "Non, le Pack Sans Hébergement est prévu pour cela (mêmes repas et accès programme, sans nuitées ni petits-déjeuners). Il est toutefois limité à 30 places.",
//     category: "Hébergement"
//   },
//   // D. PROGRAMME & LOGISTIQUE
//   {
//     id: "d1",
//     question: "Quel est le programme des 3 jours ?",
//     answer: "• Jour 1 (jeudi 1er oct.) — Jeunesse & Leadership : cérémonie d'ouverture officielle (CN + Youth Summit), panel \"Accès au financement\", conférence plénière \"Jeunesse malagasy & opportunités économiques\", ateliers pratiques (Leadership & Mindset / Personal Branding / Marketing Digital), soirée d'ouverture et networking cocktail VIP.\n\n• Jour 2 (vendredi 2 oct.) — Entrepreneuriat : formation certifiante JCI, ateliers pratiques (Pitcher son projet / Trouver des financements / Construire un réseau stratégique), success stories d'entrepreneurs malagasy, finale nationale du concours Art Oratoire et Débat, clôture officielle du Youth Summit (spectacle culturel, défilé, concert, 15 ans de la JCI Iarivo).\n\n• Jour 3 (samedi 3 oct.) — Gouvernance & vie associative : Assemblées Générales 1 et 2 de la JCI Madagascar, réunion des officiers BN-BL 2027, soirée de clôture et remise des Awards JCI Madagascar.",
//     category: "Programme"
//   },
//   {
//     id: "d2",
//     question: "Les repas sont-ils inclus ?",
//     answer: "Oui. Les deux packs d'inscription (Complet et Sans Hébergement) incluent 3 déjeuners, 3 dîners de soirée (ouverture, folklorique, clôture) et 5 pauses café. Aucune inscription séparée n'est nécessaire pour les repas.",
//     category: "Programme"
//   },
//   {
//     id: "d3",
//     question: "Comment se passe le choix des ateliers pratiques ?",
//     answer: "Certains ateliers ont un nombre de places limité. Le choix se fait sur votre espace d'inscription personnel après obtention de votre Pass nominatif — plus tôt vous choisissez, plus vous avez de chances d'obtenir la session souhaitée. Les modalités exactes de modification après validation seront à confirmer par la Commission Logistique.",
//     category: "Programme"
//   },
//   {
//     id: "d4",
//     question: "Comment récupérer mon badge d'accréditation ?",
//     answer: "Les badges sont disponibles à l'accueil principal du site le matin même à partir de 07h30, sur présentation de votre confirmation d'inscription (QR code) et d'une pièce d'identité.",
//     category: "Programme"
//   },
//   {
//     id: "d5",
//     question: "Y a-t-il un code vestimentaire ?",
//     answer: "Un code vestimentaire sera communiqué avant l'événement (annonce prévue avec le programme détaillé, autour du 11 septembre 2026).",
//     category: "Programme"
//   },
//   {
//     id: "d6",
//     question: "Les sessions seront-elles diffusées en direct ou disponibles en replay ?",
//     answer: "La cérémonie d'ouverture officielle du 1er octobre sera diffusée en direct sur la page Facebook de la JCI Iarivo. Les autres sessions (ateliers, panels, conférences) ne sont pas prévues en streaming ni en replay.",
//     category: "Programme"
//   },
//   // E. YOUTH SUMMIT
//   {
//     id: "y1",
//     question: "Le Youth Summit est-il payant ?",
//     answer: "Des pass payants sont prévus (Pass Journée J1, Pass Journée J2, Pass Complet J1+J2, Pass Étudiant, Pass VIP), mais les tarifs sont en attente de confirmation. Le Pass Intervenant est gratuit, en échange d'une intervention sur scène.",
//     category: "Youth Summit"
//   },
//   {
//     id: "y2",
//     question: "Je ne suis pas membre JCI, puis-je venir seulement pour le Youth Summit ?",
//     answer: "Oui, c'est justement l'objectif du Youth Summit : un format ouvert au grand public, sans nécessité d'être membre JCI, sur les journées du 1er et 2 octobre.",
//     category: "Youth Summit"
//   },
//   {
//     id: "y3",
//     question: "Qu'est-ce que le Pass Étudiant ?",
//     answer: "Un tarif dédié, identique au Pass Journée (J1 ou J2 au choix), sur présentation d'une carte étudiante en cours de validité. Hors accès aux soirées.",
//     category: "Youth Summit"
//   },
//   {
//     id: "y4",
//     question: "Comment devenir exposant au Youth Summit ?",
//     answer: "Trois formules de stand sont prévues : Stand Standard (3x3m), Stand Premium (3x6m) et Stand Recruteur (dans un espace Carrières dédié, avec accès à une session de speed-networking). 39 chapiteaux 3x3m et 2 chapiteaux 3x6m sont disponibles. Les tarifs sont en attente de confirmation.",
//     category: "Youth Summit"
//   },
//   {
//     id: "y5",
//     question: "Comment devenir intervenant ?",
//     answer: "En contactant le COC de la Convention Nationale. Le statut d'intervenant donne accès aux 2 journées, un badge nominatif \"Intervenant\", une bio publiée dans le programme et un kit intervenant, en échange d'une présence sur scène (conférence, panel ou atelier).",
//     category: "Youth Summit"
//   },
//   // F. CONTACT
//   {
//     id: "c1",
//     question: "J'ai une autre question, qui contacter ?",
//     answer: "Écrivez à jciiarivo@gmail.com, ou au Bureau Local JCI Iarivo : bliarivo@googlegroups.com.",
//     category: "Contact"
//   }
// ];

// export const TEAM: TeamMember[] = [
//   {
//     id: "t1",
//     name: "Geneviève Sorel",
//     role: "Coordinatrice Générale",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250&h=250",
//     bio: "Supervise la planification logistique globale, la sécurité et la qualité de l'expérience d'accueil."
//   },
//   {
//     id: "t2",
//     name: "Adil El Amrani",
//     role: "Directeur de la Programmation",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250&h=250",
//     bio: "Garant du comité scientifique, de la répartition des thèmes et de la sélection finale de nos experts."
//   },
//   {
//     id: "t3",
//     name: "Clara Vasseur",
//     role: "Responsable Partenaires & Sponsoring",
//     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250&h=250",
//     bio: "Votre interlocutrice privilégiée pour toute présence de stand, mécénat ou sponsoring événementiel."
//   }
// ];

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
    title: "Convention Nationale 2026 : ce qui change pour cette édition",
    excerpt: "Youth Summit intégré au programme, panels sur l'accès au financement, networking cocktail VIP : tour d'horizon de ce qui distingue l'édition 2026 de la Convention Nationale de JCI Madagascar.",
    content: "Chaque année, JCI Madagascar réunit ses organisations locales autour d'un même rendez-vous : la Convention Nationale. Pour cette édition 2026, l'organisation revient à JCI Iarivo, chambre locale basée à Antananarivo, qui accueille du 1er au 3 octobre 14 organisations locales venues de 9 régions du pays, en centre-ville d'Antananarivo.\n\nTrois jours, trois cadres. Le premier pose les bases avec le thème \"Jeunesse et Leadership\" : cérémonie d'ouverture officielle, panel sur l'accès au financement, conférence plénière sur la jeunesse malagasy et les opportunités économiques, ateliers pratiques en petits groupes. Le deuxième jour bascule sur l'\"Entrepreneuriat\" : formation certifiante JCI le matin, ateliers pour pitcher un projet, trouver des financements ou construire un réseau stratégique, puis des témoignages d'entrepreneurs malagasy en fin de matinée. Le troisième jour est celui de l'Assemblée Générale et de la remise des Awards nationaux.\n\nCertains de ces temps forts reviennent chaque année : les formations certifiantes JCI, l'Assemblée Générale, la remise des Awards font partie des constantes de toute Convention Nationale. Ce qui change en 2026, c'est la manière dont le Youth Summit vient s'intégrer directement dans les deux premiers jours du programme plutôt que de rester un événement satellite à part, l'apparition de panels dédiés à l'accès au financement et une soirée de networking cocktail en format VIP, pensée pour rapprocher partenaires, décideurs et jeunes leaders entreprenants autour de la même table.\n\nL'édition 2026 porte un slogan officiel qui résume cette ambition : \"Une génération qui construit. Une île se transforme.\" Il fait écho au leitmotiv national de l'année, \"Build Legacy Together\", porté par la Présidente Nationale. Un fil qui se referme symboliquement le deuxième soir, lors de la clôture du Youth Summit, où sera célébré un anniversaire particulier : les 15 ans de JCI Iarivo, la chambre organisatrice de cette édition.\n\nLes inscriptions à la Convention Nationale et au Youth Summit sont ouvertes séparément depuis le site officiel de l'événement.",
    date: "01 juillet 2026",
    category: "Événement",
    image: CN_image,
    readTime: "4 min"
  },
  {
    id: "art2",
    title: "Youth Summit 2026 : deux jours pour transformer l'ambition entrepreneuriale en projets concrets",
    excerpt: "Ateliers pratiques, pitchs, recherche de financement et témoignages d'entrepreneurs malagasy : le Youth Summit s'étend sur les deux premiers jours de la Convention Nationale 2026, pas seulement en marge.",
    content: "Le Youth Summit n'est pas une parenthèse à côté de la Convention Nationale : c'est le fil conducteur des deux premiers jours. Conçu pour galvaniser la jeunesse malagasy autour du leadership, de l'entrepreneuriat et du développement durable, il s'ouvre le premier jour dans le même esprit que le reste du programme, sous le thème \"Jeunesse et Leadership\".\n\nCe premier jour propose trois ateliers pratiques en sessions parallèles, à places limitées : Leadership & Mindset, Personal branding, et Marketing digital. Ils suivent une matinée dense, avec un panel sur l'accès au financement réunissant banques, investisseurs et incubateurs, puis une conférence plénière sur la jeunesse malagasy et les opportunités économiques, avant une soirée d'ouverture en networking cocktail VIP.\n\nLe deuxième jour bascule sur l'action : \"Entrepreneuriat\" est le mot d'ordre. La matinée démarre par une formation certifiante JCI, suivie de trois nouveaux ateliers pratiques — Pitcher son projet efficacement, Trouver des financements, Construire un réseau stratégique — pensés pour des porteurs de projet qui veulent repartir avec des outils concrets, pas seulement des notes de conférence. En fin de matinée, place aux success stories : des témoignages d'entrepreneurs malagasy, secteurs public et privé confondus, qui partagent des cas concrets de réussite plutôt que des discours théoriques.\n\nLa clôture du Youth Summit, en soirée du deuxième jour, prend une dimension particulière cette année : au spectacle culturel, au défilé et au concert s'ajoute le partage d'un gâteau pour les 15 ans de JCI Iarivo, la chambre organisatrice de l'édition 2026. Une manière de faire converger, le temps d'une soirée, la trajectoire d'une organisation et celle des jeunes leaders entreprenants qu'elle accueille.\n\nCertains ateliers du Youth Summit ont un nombre de places limité. Les participants sont invités à planifier leurs choix de sessions directement sur leur espace d'inscription personnel, dès obtention de leur pass nominatif.",
    date: "08 juillet 2026",
    category: "Youth Summit",
    image: YS_image,
    readTime: "5 min"
  },
  {
    id: "art3",
    title: "Accès au financement : ce que les jeunes entrepreneurs malagasy attendent des banques et incubateurs",
    excerpt: "En ouverture de la Convention Nationale 2026, un panel réunira banques, investisseurs et incubateurs autour d'un sujet qui revient dans presque tous les échanges avec les jeunes entrepreneurs malagasy : l'accès au financement.",
    content: "C'est le premier grand rendez-vous du programme, dès la matinée du premier jour : un panel de discussion sur invitation, intitulé \"Accès au financement : réalités, défis et solutions\", qui réunit à la même table des représentants de banques, des investisseurs et des incubateurs. Le choix de ce sujet en ouverture n'est pas anodin : c'est souvent le premier mur que rencontre un jeune porteur de projet à Madagascar, bien avant les questions de marché ou de produit.\n\nLe constat qui revient le plus souvent dans les échanges entre jeunes entrepreneurs tient en quelques points simples. Les garanties exigées par les circuits bancaires classiques sont difficiles à réunir en début de parcours. Les tickets recherchés par les porteurs de projet sont souvent trop petits pour intéresser les véhicules de capital-risque existants, et trop grands pour les mécanismes de microfinance. Et l'écosystème d'incubation, encore jeune à l'échelle du pays, ne couvre pas encore toutes les régions ni tous les secteurs.\n\nL'intérêt du panel n'est pas de promettre une solution miracle en 90 minutes, mais de mettre autour de la même table les trois familles d'acteurs qui, en temps normal, se croisent rarement dans un même espace de discussion. L'objectif affiché est de clarifier ce qui est réellement accessible aujourd'hui à un jeune porteur de projet malagasy, par opposition à ce qui reste, pour l'instant, à construire — que ce soit sur le plan des instruments financiers, des critères d'éligibilité ou de l'accompagnement en amont d'une demande de financement.\n\nCe panel n'est pas pensé comme un moment isolé. Il ouvre la réflexion que le programme reprend de façon plus opérationnelle le deuxième jour, avec l'atelier pratique \"Trouver des financements\", pensé pour des porteurs de projet qui veulent passer du diagnostic à l'action : quels documents préparer, quels interlocuteurs cibler, quelles étapes concrètes engager après la Convention.\n\nPour les jeunes leaders entreprenants qui participeront à la Convention Nationale 2026, l'enjeu de ce premier temps fort est moins d'obtenir des promesses que d'obtenir de la clarté — sur les critères réels, sur les interlocuteurs à solliciter, et sur les étapes qui séparent une bonne idée d'un projet finançable.",
    date: "15 juillet 2026",
    category: "Expertise",
    image: access_financement,
    readTime: "5 min"
  },
  {
    id: "art4",
    title: "Le leadership n'attend pas l'âge : ce que construit la génération JCI Iarivo",
    excerpt: "Quinze ans après sa création, JCI Iarivo organise la Convention Nationale 2026. Un symbole pour toute une génération de jeunes leaders entreprenants.",
    content: "Organiser un événement national de trois jours, avec plusieurs centaines de participants venus de 9 régions, ne se délègue pas à l'expérience seule. À JCI Iarivo, ce sont des jeunes leaders entreprenants qui pilotent chaque commission de l'organisation : logistique, marketing et communication, partenariats et sponsoring, développement des affaires. Aucun de ces rôles n'a été confié en fonction de l'âge de la personne qui le porte, mais de sa capacité à le porter.\n\nC'est précisément le thème que porte le premier jour de la Convention Nationale 2026 : \"Jeunesse et Leadership\". Un thème qui ne se limite pas à un intitulé de programme, il décrit la réalité de l'organisation qui accueille l'événement. JCI Madagascar utilise volontairement le terme \"jeunes leaders entreprenants\" plutôt que \"jeunes professionnels\" pour désigner ses membres : la nuance compte. Elle place l'initiative et la prise de responsabilité au centre, avant l'âge ou le statut.\n\nCette conviction traverse le slogan officiel de l'édition 2026 : \"Une génération qui construit. Une île se transforme.\" Il s'inscrit dans la continuité du leitmotiv national de l'année, \"Build Legacy Together\", porté par la Présidente Nationale. Deux formulations qui disent la même chose sous deux angles : un héritage ne se reçoit pas passivement, il se construit, une génération à la fois.\n\nLa clôture du Youth Summit, le deuxième soir de la Convention, en donne une illustration concrète : un spectacle culturel et un concert marqueront aussi les 15 ans de JCI Iarivo, la chambre organisatrice de cette édition. Quinze ans d'existence pour une organisation locale qui, cette année, a la responsabilité d'accueillir tout le mouvement national. La coïncidence des deux anniversaires — celui de la chambre et celui d'une génération de leaders qui grandit avec elle — n'a rien d'artificiel : c'est la même logique de transmission qui les relie.\n\nLe leadership qui se donne à voir pendant ces trois jours à Antananarivo n'est pas celui d'un titre affiché sur une carte de visite. C'est celui que révèle, très concrètement, ce qu'une génération accepte de porter — et de construire — quand personne d'autre ne le fait à sa place.",
    date: "22 juillet 2026",
    category: "Leadership",
    image: Poeple_image,
    readTime: "4 min"
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