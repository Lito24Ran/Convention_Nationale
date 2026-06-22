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

export const SESSIONS: ProgramSession[] = [
  {
    id: "s1",
    time: "08:30 - 09:30",
    title: "Conférence d'Ouverture : Les enjeux de la Souveraineté Technologique",
    description: "Allocution de bienvenue et cadrage géopolitique des grands défis industriels et environnementaux mondiaux.",
    speakerId: "sp1",
    location: "Auditorium Principal (Ampli A)",
    category: "Conférence"
  },
  {
    id: "s2",
    time: "09:45 - 11:15",
    title: "Table Ronde : Comment financer les transitions matérielles ?",
    description: "Un débat sans concession entre banquiers mutualistes, entrepreneurs à impact et régulateurs publics sur le déploiement des investissements verts.",
    speakerId: "sp2",
    location: "Salle des Débats (Niveau 1)",
    category: "Table Ronde"
  },
  {
    id: "s3",
    time: "11:30 - 13:00",
    title: "Atelier Pratique : Co-conception de chartes éthiques IA",
    description: "Session de prototypage rapide pour concevoir un document d'engagement de confiance pour votre propre organisation.",
    speakerId: "sp5",
    location: "Espace Créatif B (Rdc)",
    category: "Atelier"
  },
  {
    id: "s4",
    time: "14:30 - 16:00",
    title: "Table Ronde : Flexibilité et résilience, les clés du Management Hybride",
    description: "Comparaison de méthodes managériales adoptées en période de turbulence par des entreprises de tailles et secteurs variés.",
    speakerId: "sp3",
    location: "Salle des Débats (Niveau 1)",
    category: "Table Ronde"
  },
  {
    id: "s5",
    time: "16:15 - 17:45",
    title: "Atelier Prospectif : Dessiner l'horizon économique 2030",
    description: "Méthode des scénarios d'incertitude appliquée à l'adaptation de votre chaîne d'approvisionnement globale.",
    speakerId: "sp4",
    location: "Espace Créatif A (Rdc)",
    category: "Atelier"
  },
  {
    id: "s6",
    time: "18:00 - 19:30",
    title: "Keynote de Clôture & Cocktail Réseau",
    description: "Synthèse des apprentissages issus des différents ateliers et thèmes, suivie d'une soirée conviviale.",
    speakerId: "sp6",
    location: "Cocktail Lounge & Jardins",
    category: "Conférence"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Comment puis-je retirer mon badge physique ?",
    answer: "Les badges d'accréditation sont disponibles à l'accueil principal du centre de congrès dès la veille de l'événement de 16h00 à 20h00, ou directement le matin même de la Convention à partir de 07h30 sur présentation de votre confirmation d'inscription QR code et d'une pièce d'identité.",
    category: "Accès"
  },
  {
    id: "f2",
    question: "Les sessions sont-elles accessibles en streaming ou en replay ?",
    answer: "Oui, la formule Pass Plus inclut un accès intégral en direct haute définition pour toutes les conférences organisées dans l'Auditorium Principal, ainsi que des replays disponibles pendant 12 mois pour l'intégralité des conférences et tables rondes (hors ateliers purement physiques).",
    category: "Format"
  },
  {
    id: "f3",
    question: "Comment s'inscrire pour les déjeuners et dîners d'affaires ?",
    answer: "Le cocktail d'accueil et les buffets du midi sont entièrement compris dans tous nos forfaits. Si vous souhaitez participer au dîner de gala des partenaires du jeudi soir, une option de surclassement spécifique est disponible lors du processus d'achat.",
    category: "Restauration"
  },
  {
    id: "f4",
    question: "Puis-je modifier mes choix d'ateliers après validation ?",
    answer: "Absolument ! Vous pouvez adapter votre parcours d'ateliers thématiques directement depuis votre espace personnel d'inscription en ligne jusqu'à 48 heures avant le début de l'événement, sous réserve des places encore de libre dans les salles.",
    category: "Parcours"
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
