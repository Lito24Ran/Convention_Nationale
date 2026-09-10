import React, { useState } from "react";
import { Facebook, Linkedin, Youtube, X, Clock, Calendar, Layers, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Placeholder from "../assets/images/placeholder_Formateurs.png"
import Thibault_image from "../assets/images/Conferencier/image_Thibault.webp"
import Bonshe from "../assets/images/Conferencier/DN_Bonshe.jpeg"
import Nirina_img from "../assets/images/Conferencier/Mirana.webp"
import Dera from "../assets/images/Conferencier/Dera_Zafindravaka_photo.webp"

import Lahety from "../assets/images/Conferencier/lahety-jean-fredos.webp"

// Inline stylesheet for seamless, GPU-accelerated infinite horizontal marquees
const marqueeGlobalCSS = `
  @keyframes marquee-left-scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-right-scroll {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee-left {
    display: flex;
    width: max-content;
    animation: marquee-left-scroll 110s linear infinite;
  }
  .animate-marquee-right {
    display: flex;
    width: max-content;
    animation: marquee-right-scroll 110s linear infinite;
  }
  .animate-marquee-left:hover,
  .animate-marquee-right:hover {
    animation-play-state: paused;
  }
`;

// Exact replica of the media badge seen in the top-right corner of each card
const MediaBadge24 = () => (
  <div className="absolute top-4 right-4 z-20 bg-[#0F1026]/40 backdrop-blur-md rounded-lg border border-white/45 px-2.5 py-1 text-center select-none font-sans">
    <div className="text-[12px] font-black tracking-tighter leading-tight text-white/95 border-b border-white/35 pb-0.5">
      24/24
    </div>
    <div className="text-[8.5px] font-bold tracking-widest leading-none text-white/90 pt-0.5 font-mono uppercase">
      MG
    </div>
  </div>
);

interface SpeakerMock {
  name: string;
  role: string;
  company: string;
  image: string;
  bio?: string;
  time?: string;
  day?: string;
  session?: string;
  status?: string;
  typeIntervention?: string;
}

interface SpeakerCardProps {
  s: SpeakerMock;
  onClick: () => void;
  key?: React.Key;
}

const getTypeInterventionStyle = (type?: string) => {
  switch (type) {
    case "Formateur":
      return "bg-emerald-950/70 border-emerald-500/40 text-emerald-300";
    case "Panéliste":
      return "bg-sky-950/70 border-sky-500/40 text-sky-300";
    case "Conférencier":
      return "bg-amber-950/70 border-amber-600/40 text-amber-300";
    case "Allocution":
      return "bg-zinc-800/80 border-zinc-600/50 text-zinc-300";
    case "Modérateur":
      return "bg-purple-950/70 border-purple-500/40 text-purple-300";
    case "Témoignage":
      return "bg-pink-950/70 border-pink-500/40 text-pink-300";
    case "MC/Animation":
      return "bg-yellow-950/70 border-yellow-600/40 text-yellow-300";
    default:
      return "bg-cyan-950/70 border-cyan-500/40 text-cyan-300";
  }
};

// Single elegant presentation card optimized for smooth carousel animations
const SpeakerCard = ({ s, onClick }: SpeakerCardProps) => (
  <div
    onClick={onClick}
    className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl cursor-pointer group transition-all duration-300 border border-white/5 flex-shrink-0 mx-4"
  >
    <MediaBadge24 />
    <img
      src={s.image}
      alt={s.name}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      referrerPolicy="no-referrer"
    />
    
    {/* Cinematic matching dark film overlay */}
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0B1A]/95 via-[#0A0B1A]/70 to-transparent transition-opacity duration-300 z-10" />
    
    {/* Overlay Text Details */}
    <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col items-center justify-end text-center space-y-2">
      {s.typeIntervention && (
        <div className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold border tracking-wide uppercase shadow-sm ${getTypeInterventionStyle(s.typeIntervention)}`}>
          {s.typeIntervention}
        </div>
      )}
      <h3 className="text-base sm:text-lg font-sans font-black tracking-wide text-white drop-shadow-md leading-tight">
        {s.name}
      </h3>
      <p className="text-[11px] font-sans text-cyan-300 font-semibold line-clamp-1">
        {s.role}
      </p>
      <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">
        {s.company}
      </p>
      {/* Social interactions */}
      <div className="flex items-center justify-center space-x-3.5 pt-2">
        <span className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00A6DF]/20 hover:text-white text-gray-200 transition-all duration-150 flex items-center justify-center border border-white/10">
          <Facebook className="h-4 w-4 stroke-[2]" />
        </span>
        <span className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00A6DF]/20 hover:text-white text-gray-200 transition-all duration-150 flex items-center justify-center border border-white/10">
          <Linkedin className="h-4 w-4 stroke-[2]" />
        </span>
        <span className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#00A6DF]/20 hover:text-white text-gray-200 transition-all duration-150 flex items-center justify-center border border-white/10">
          <Youtube className="h-4 w-4 stroke-[2]" />
        </span>
      </div>
    </div>
  </div>
);

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<SpeakerMock | null>(null);

  const speakerImage = "/src/assets/images/hero_speaker_portrait_1782117191963.jpg";
  const jciPresImage = "/src/assets/images/jci_presentation_1782134191329.jpg";
  const jciLeadersImage = "/src/assets/images/jci_leaders_meeting_1782134208063.jpg";

  // Data for Intervenants - Ligne 1
  const intervenantsLigne1: SpeakerMock[] = [
    {
      name: "Dera",
      role: "Administrateur Exécutif Finances, Groupe Taloumis | Fondateur, Entrepreneurship Club",
      company: "Groupe Taloumis / Entrepreneurship Club",
      image: Dera,
      bio: "Dera Zafindravaka est Administrateur Exécutif en charge des finances au Groupe Taloumis, où il pilote le suivi financier et la mobilisation de capitaux depuis 2009. Ancien Senior Advisor auprès de la Présidence de la République et ancien Président du Conseil d'Administration de l'Economic Development Board of Madagascar (EDBM), il est formateur en entrepreneuriat à l'INSCAE et fondateur du programme national Entrepreneurship Club, soutenu par l'Ambassade des États-Unis. Ancien Président National de la JCI Madagascar (2008) et Sénateur n°69 538, il est aussi cofondateur de l'école Sekolin'ny Marenina Madagasikara pour enfants sourds.",
      time: "11h00–12h15",
      day: "Jour 2 — 2 oct",
      session: "Atelier 4 — Pitcher son projet efficacement",
      typeIntervention: "Formateur"
    },
    {
      name: "Guy Foka",
      role: "Directeur, Connecta",
      company: "Connecta",
      image: Placeholder,
      bio: "",
      time: "15h00–16h20",
      day: "Jour 2 — 2 oct",
      session: "Table ronde économique",
      typeIntervention: "Panéliste"
    },
    {
      name: "Lahety Jean Fredos",
      role: "Fondateur & CEO Filo Agency | Personal Brand Manager",
      company: "FILO AGENCY",
      image: Lahety,
      bio: "Lahety Jean Fredos (JF) est stratège en Personal Branding et fondateur de Filo Agency. Il accompagne les experts, dirigeants et entrepreneurs déjà reconnus à transformer leur expertise en une marque personnelle forte, visible et crédible, notamment sur LinkedIn. Passionné par la stratégie, le positionnement et la psychologie du marketing, il intervient également comme formateur pour aider les professionnels à mieux se positionner et à devenir plus influents dans leur domaine.",
      time: "15h00–16h30",
      day: "Jour 1 — 1er oct",
      session: "Atelier 2 — Personal branding",
      typeIntervention: "Formateur"
    },
    {
      name: "Jonathan Ranjatoelina",
      role: "",
      company: "GEM / ESCM / French Tech",
      image: Placeholder,
      bio: "",
      time: "15h00–16h20",
      day: "Jour 2 — 2 oct",
      session: "Table ronde économique",
      typeIntervention: "Modérateur"
    },
    {
      name: "Riveltd Rakotomanana",
      role: "Ecosystem builder (Écosystème entrepreneurial Madagascar)",
      company: "Le CEENTRE",
      image: "src/assets/images/Conferencier/Riveltd_Rakotomanana_photo.webp",
      bio: "Riveltd Rakotomanana est ecosystem builder et activiste de l’entrepreneuriat jeunesse à Madagascar depuis 2008, Consultant Expert en Entrepreneuriat passionné par l’IA appliquée à l’exécution stratégique et opérationnelle. Il dirige Le CEENTRE (Centre d’Excellence en Entrepreneuriat) et a précédemment dirigé ISSOF (groupe GENERIS). Il siège comme Vice-Président à la Maison de l’Entrepreneuriat et à l’Entrepreneurship Mentoring Council, membre du CA de Madagascar SAE, Président de la Commission Formation de la CCI France Madagascar, et Expert Pédagogique du projet SEEED-INCUBOOST (Union Européenne). Conviction : « L’humain d’abord, le projet et les machines suivront ».",
      time: "11h00–12h15",
      day: "Jour 2 — 2 oct",
      session: "Atelier 5 — Trouver des financements",
      typeIntervention: "Formateur"
    },
    {
      name: "Andriamihaja Guénolé RAVELOMAHAFALY",
      role: "Vice-Président JCI 2025 (assigné à la JCI Guinée) | Ancien Président National JCI Madagascar (2021)",
      company: "Consultant en communication & Formateur",
      image: "src/assets/images/Conferencier/Guenole_RAVELOMAHAFALY_4.webp",
      bio: "Guénolé Ravelomahafaly est Vice-Président JCI 2025, assigné à sept organisations nationales dont la JCI Guinée. Consultant en communication basé à Antananarivo, il a été Président National de la JCI Madagascar en 2021 après un parcours dans le mouvement depuis 2013 (Président Local JCI Toliara, Secrétaire Général National, Vice-Président Exécutif National). Sénateur JCI #81590, diplômé de l'Académie JCI, il a participé à quatre Congrès Mondiaux JCI.",
      time: "09h00–10h50",
      day: "Jour 2 — 2 oct",
      session: "Formation Certifiante JCI - Effective leadership",
      typeIntervention: "Formateur"
    },
    // {
    //   name: "PL (Président Local)",
    //   role: "Président Local 2026",
    //   company: "JCI Iarivo",
    //   image: Placeholder,
    //   bio: "Président Local de la JCI Iarivo, garant de la vision et de l'organisation de la Convention Nationale 2026.",
    //   time: "8h30–09h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Cérémonie d'ouverture officielle",
    //   typeIntervention: "Allocution"
    // },
   
    // {
    //   name: "Mialy Rananaivoson",
    //   role: "Investisseurs & Partenaires (I&P)",
    //   company: "Fonds d'Investissement & Business Angels",
    //   image: Placeholder  ,
    //   bio: "Expert en capital-risque et financement de l'innovation.",
    //   time: "11h00–12h30",
    //   day: "Jour 1 — 1er oct",
    //   session: "Panel de discussion #1 (sur invitation)",
    //   typeIntervention: "Panéliste"
    // },
    // {
    //   name: "Investisseur (panéliste à identifier)",
    //   role: "Panéliste Investissement & Capital",
    //   company: "Fonds d'Investissement & Business Angels",
    //   image: Placeholder  ,
    //   bio: "Expert en capital-risque et financement de l'innovation.",
    //   time: "11h00–12h30",
    //   day: "Jour 1 — 1er oct",
    //   session: "Panel de discussion #1 (sur invitation)",
    //   typeIntervention: "Panéliste"
    // },
    
    // {
    //   name: "Josielle Rafidy",
    //   role: "Panéliste Institutionnel",
    //   company: "EDBM",
    //   image: Placeholder,
    //   bio: "Intervention sur les politiques publiques, les cadres de développement et l'appui étatique à la jeunesse.",
    //   time: "13h30–14h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Conférence plénière #1",
    //   typeIntervention: "Conférencier"
    // },
    // {
    //   name: "Banque (panéliste à identifier)",
    //   role: "Panéliste Financement Bancaire",
    //   company: "Secteur Bancaire & Microfinance",
    //   image:Placeholder,
    //   bio: "Panéliste spécialisé sur le panel « Accès au financement : réalités, défis et solutions ».",
    //   time: "11h00–12h30",
    //   day: "Jour 1 — 1er oct",
    //   session: "Panel de discussion #1 (sur invitation)",
    //   typeIntervention: "Panéliste"
    // },
    
   
    // {
    //   name: "Mirana Rasamimanana",
    //   role: "Animateur Atelier Pratique",
    //   company: "Youth Summit — Salle Anakao",
    //   image:Placeholder,
    //   bio: "Animation interactive de l'Atelier 1 consacré au Leadership d'impact et au Mindset entrepreneurial.",
    //   time: "15h00–16h30",
    //   day: "Jour 1 — 1er oct",
    //   session: "Atelier 1 — Leadership & Mindset",
    //   typeIntervention: "Formateur"
    // },
   
    // {
    //   name: "Incubateur (panéliste à identifier)",
    //   role: "Panéliste Accompagnement Startup",
    //   company: "Incubateur & Accélérateur d'Entreprises",
    //   image:Placeholder,
    //   bio: "Panéliste spécialiste de l'accompagnement, du prototypage et de la mise à l'échelle de startups.",
    //   time: "11h00–12h30",
    //   day: "Jour 1 — 1er oct",
    //   session: "Panel de discussion #1 (sur invitation)",
    //   typeIntervention: "Panéliste"
    // },
    // {
    //   name: "Lahety Jean Fredos",
    //   role: "Accompagnement & Communication",
    //   company: "FILO AGENCY",
    //   image: Placeholder,
    //   bio: "Lahety Jean Fredos (JF) est stratège en Personal Branding et fondateur de Filo Agency. Il accompagne les experts, dirigeants et entrepreneurs déjà reconnus à transformer leur expertise en une marque personnelle forte, visible et crédible, notamment sur LinkedIn. Passionné par la stratégie, le positionnement et la psychologie du marketing, il intervient également comme formateur pour aider les professionnels à mieux se positionner et à devenir plus influents dans leur domaine.",
    //   day: "Transversal",
    //   session: "Maître de cérémonie — toute la CN",
    //   typeIntervention: "MC/Animation"
    // },
    // {
    //   name: "Fanja Razakaboana",
    //   role: "",
    //   company: "GFEM (Groupement des Femmes Entrepreneurs de Madagascar)",
    //   image: Placeholder,
    //   bio: "Animation de l'Atelier 6 sur la stratégie de réseau, la création d'alliances et le capital social.",
    //   time: "11h00–12h15",
    //   day: "Jour 2 — 2 oct",
    //   session: "Atelier 6 — Construire un réseau stratégique",
    //   typeIntervention: "Formateur"
    // }
  ];

  // Data for Intervenants - Ligne 2 (Nouvelle ligne d'intervenants)
  const intervenantsLigne2: SpeakerMock[] = [
    
    {
      name: "Thibault",
      role: "Fondateur, MAQUA",
      company: "MAQUA",
      image: Thibault_image,
      bio: "Thibault Eddie est entrepreneur et spécialiste en aquaculture, fondateur de MAQUA. Après plusieurs années d'études et d'expérience à l'international, il est revenu à Madagascar pour faire de l'aquaculture un levier de développement économique, social et environnemental.",
      time: "13h15–14h50",
      day: "Jour 2 — 2 oct",
      session: "Success stories — Témoignages d'entrepreneurs malagasy",
      typeIntervention: "Témoignage"
    },
      {
      name: "Mirado Rafenomahenintsoa",
      role: "Fondateur, DataBridge Madagascar",
      company: "Databridge Madagascar",
      image:Placeholder,
      bio: "Mirado est enseignant et engagé pour une meilleure compréhension et utilisation des données. Il est le fondateur de Databridge Madagascar, une initiative qui vise à rendre les compétences et la culture data plus accessibles aux jeunes.",
      time: "15h00–16h30",
      day: "Jour 1 — 1er oct",
      session: "Atelier 3 — Data literacy (format interactif)",
      typeIntervention: "Formateur"
    },
    {
      name: "Ratsitoarison Rakotondrasoa Nirina Ambinintsoa",
      role: "Orange Digital Center Madagascar",
      company: "EcoCoco (Associé-gérante)",
      image:Nirina_img,
      bio: "Ratsitoarison Rakotondrasoa Nirina Ambinintsoa est entrepreneure, consultante-formatrice et femme engagée pour un développement plus humain, durable et inclusif à Madagascar. Fondatrice d'Ambinintsoa Ratsitoarison Consulting and Training et d'EcoCoco (valorisation des déchets de coco en énergie propre), elle est lauréate du Startupper de l'année TotalEnergies, du Tony Elumelu Foundation Entrepreneurship Programme, d'Impulsouth, deux fois du Purpose in Motion, et sélectionnée pour le Mandela Washington Fellowship Program. Ancienne Présidente Locale de la JCI Iarivo et championne nationale d'art oratoire de la JCI Madagascar.",
      time: "13h15–14h50",
      day: "Jour 2 — 2 oct",
      session: "Success stories — Témoignages d'entrepreneurs malagasy",
      typeIntervention: "Témoignage"
    },
      {
      name: "Bonshe Makalebo Hugues",
      role: "Directeur Général de Baobab Banque Madagascar",
      company: "Baobab Banque Madagascar",
      image: Bonshe,
      bio: "Hugues Bonshe Makalebo est un banquier expérimenté. Il s'est spécialisé dans le financement des PMEs, la gestion des risques et le développement des affaires. Il est aujourd'hui le Directeur Général de Baobab Banque Madagascar, le Président de l'Association Professionnelle des Banques de Madagascar et le Président de la Commission Affaires Internationales du GEM.",
      time: "15h00–16h20",
      day: "Jour 2 — 2 oct",
      session: "Table ronde économique",
      status: "Confirmé",
      typeIntervention: "Panéliste"
    },
    // {
    //   name: "Formateur JCI (à identifier)",
    //   role: "Formateur Certifié JCI",
    //   company: "JCI Madagascar",
    //   image: Placeholder,
    //   bio: "Formateur certifié dispensant les modules de leadership, de gestion de projet et de développement des compétences lors de la Convention.",
    //   time: "09h00–10h50",
    //   day: "Jour 2 — 2 oct",
    //   session: "Formation Certifiante JCI",
    //   status: "À identifier",
    //   typeIntervention: "Formateur" 
    // },
    // {
    //   name: "Orange",
    //   role: "Partenaire Officiel & Intervenant",
    //   company: "Orange Madagascar",
    //   image: Placeholder,
    //   bio: "Partenaire stratégique de la Convention Nationale 2026, engagé pour l'inclusion numérique, l'innovation technologique et l'accès aux opportunités pour la jeunesse.",
    //   time: "08h30–09h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Cérémonie d'ouverture officielle",
    //   status: "À identifier",
    //   typeIntervention: "Allocution"
    // },
    // {
    //   name: "Karim Barday",
    //   role: "Chef d'Entreprise & Leader Économique",
    //   company: "Basan",
    //   image: Placeholder,
    //   bio: "Leader économique et entrepreneur d'envergure au sein du Groupe Basan, partageant sa vision du développement industriel, de l'investissement à fort impact et de la transmission.",
    //   time: "13h30–14h50",
    //   day: "Jour 2 — 2 oct",
    //   session: "Table ronde économique",
    //   status: "En attente de réponse",
    //   typeIntervention: "Panéliste"
    // },
    // {
    //   name: "Dir-COC",
    //   role: "Directeur Convention Nationale",
    //   company: "Comité d'Organisation (COC)",
    //   image: Placeholder,
    //   bio: "Directeur du Comité d'Organisation de la Convention Nationale (COC), garant de la coordination globale, de la qualité logistique et de l'expérience participant.",
    //   time: "08h30–09h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Cérémonie d'ouverture officielle",
    //   status: "À identifier",
    //   typeIntervention: "Allocution"
    // },
 
    // {
    //   name: "Minah Rakotobe pressentie — cf memoire projet CN2026",
    //   role: "Présidente Nationale 2026",
    //   company: "JCI Madagascar",
    //   image: Placeholder  ,
    //   bio: "Présidente Nationale de la Jeune Chambre Internationale Madagascar, portant la voix et la vision de l'organisation pour l'ensemble des membres.",
    //   time: "08h30–09h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Cérémonie d'ouverture officielle",
    //   status: "À identifier",
    //   typeIntervention: "Allocution"
    // },
    // {
    //   name: "MJS",
    //   role: "Partenaire Institutionnel",
    //   company: "Ministère de la Jeunesse et des Sports",
    //   image: Placeholder,
    //   bio: "Représentant institutionnel du Ministère de la Jeunesse et des Sports, soutenant l'engagement civique et l'insertion socio-économique des jeunes.",
    //   time: "08h30–09h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Cérémonie d'ouverture officielle",
    //   status: "À identifier",
    //   typeIntervention: "Allocution"
    // },
    // {
    //   name: "Discours courts (VIP/partenaires, à identifier)",
    //   role: "Intervenants Officiels & Partenaires",
    //   company: "Partenaires Institutionnels & Privés",
    //   image: Placeholder,
    //   bio: "Allocutions officielles inspirantes délivrées par nos partenaires stratégiques, sponsors premium et personnalités d'honneur lors des cérémonies.",
    //   time: "18h30–21h30",
    //   day: "Jour 1 — 1er oct",
    //   session: "Soirée d'ouverture (Networking & Cocktail)",
    //   status: "À identifier",
    //   typeIntervention: "Allocution"
    // },
    // {
    //   name: "MIC",
    //   role: "Partenaire Institutionnel",
    //   company: "Ministère de l'Industrialisation et du Commerce",
    //   image: Placeholder,
    //   bio: "Représentant institutionnel du Ministère de l'Industrialisation et du Commerce, favorisant l'industrialisation locale et l'entrepreneuriat des jeunes.",
    //   time: "08h30–09h50",
    //   day: "Jour 1 — 1er oct",
    //   session: "Cérémonie d'ouverture officielle",
    //   status: "À identifier",
    //   typeIntervention: "Allocution"
    // }
  ];

  // Data for Conferenciers
  const conferenciers: SpeakerMock[] = [
    {
      name: "Guy Foka",
      role: "Conférencier Invité & Entrepreneur",
      company: "Leadership & Business International",
      image: speakerImage,
      bio: "Keynote speaker d'exception et entrepreneur panafricain, intervenant sur le leadership transformationnel et la conquête économique."
    },
    {
      name: "Karim Barday",
      role: "Chef d'Entreprise & Conférencier",
      company: "Groupe Industriel & Commercial",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Conférencier sur les enjeux de l'industrialisation, de la structuration d'entreprises pérennes et des opportunités d'affaires à Madagascar."
    },
    {
      name: "Jonathan Ranjatoelina",
      role: "Conférencier Plénière",
      company: "Écosystème Entrepreneuriat Madagascar",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Conférencier sur la thématique : « Jeunesse malagasy & opportunités économiques : transformer le potentiel en impact »."
    },
    {
      name: "Leader secteur privé (à identifier)",
      role: "Conférencier & Panéliste",
      company: "Secteur Privé Malagasy",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Intervention de haut niveau sur les opportunités de marché, les chaînes de valeur et l'employabilité des jeunes."
    },
    {
      name: "Leader secteur public (à identifier)",
      role: "Conférencier & Institutionnel",
      company: "Institutions Publiques & Ministères",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Intervention sur les politiques publiques, les cadres de développement et l'appui étatique à la jeunesse."
    },
    {
      name: "Lahety Jean Fredos",
      role: "Fondateur & Directeur Général",
      company: "FILO AGENCY",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Conférencier sur le branding d'impact et la puissance du digital pour propulser les marques et projets."
    },
    {
      name: "Andriamihaja Guénolé RAVELOMAHAFALY",
      role: "Formateur Certifié JCI",
      company: "JCI Madagascar",
      image: jciPresImage,
      bio: "Conférencier et formateur sur l'Effective Leadership et l'excellence managériale."
    },
    {
      name: "Riveltd Rakotomanana",
      role: "Expert Leadership & Management",
      company: "JCI Madagascar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Conférencier sur la vision stratégique et la gouvernance d'impact."
    },
    {
      name: "Mirado Rafenomahenintsoa",
      role: "Speaker & Entrepreneur",
      company: "Écosystème Digital Madagascar",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
      bio: "Conférencier sur les synergies technologiques et l'innovation au service de la croissance."
    }
  ];

  // Cloning cards to ensure seamless, jitter-free loop wrapping
  const clonedIntervenants1 = [...intervenantsLigne1, ...intervenantsLigne1]; 
  const seamlessIntervenantsTrack1 = [...clonedIntervenants1, ...clonedIntervenants1];

  const clonedIntervenants2 = [...intervenantsLigne2, ...intervenantsLigne2]; 
  const seamlessIntervenantsTrack2 = [...clonedIntervenants2, ...clonedIntervenants2];

  const clonedConferenciers = [...conferenciers, ...conferenciers];
  const seamlessConferenciersTrack = [...clonedConferenciers, ...clonedConferenciers];

  return (
    <div id="speakers-parent" className="scroll-mt-12">
      
      {/* Injecting marquee rules */}
      <style dangerouslySetInnerHTML={{ __html: marqueeGlobalCSS }} />

      {/* SECTION 1: INTERVENANTS - INFINITE SCROLL */}
      <section id="intervenants" className="py-20 md:py-28 bg-[#0F1026] text-white overflow-hidden relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight uppercase">
              Intervenants
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-gray-300 font-sans leading-relaxed text-left">
              Rencontrez nos intervenants lors de cette Convention Nationale et échangez avec des experts passionnés autour de thématiques inspirantes et innovantes.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Track - Intervenants (2 Lignes dynamiques) */}
        <div className="space-y-6">
          {/* Ligne 1 - Défilement vers la gauche */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Aesthetic fading gradient masks on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-30 bg-gradient-to-r from-[#0F1026] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-30 bg-gradient-to-l from-[#0F1026] to-transparent z-20 pointer-events-none" />

            {/* Scrolling conveyor ligne 1 */}
            <div className="animate-marquee-left">
              {seamlessIntervenantsTrack1.map((s, idx) => (
                <SpeakerCard 
                  key={`intervenant-ligne1-${idx}`} 
                  s={s} 
                  onClick={() => setSelectedSpeaker(s)} 
                />
              ))}
            </div>
          </div>

          {/* Ligne 2 - Défilement vers la droite en dessous */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Aesthetic fading gradient masks on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0F1026] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0F1026] to-transparent z-20 pointer-events-none" />

            {/* Scrolling conveyor ligne 2 (moving right for fluid visual rhythm) */}
            <div className="animate-marquee-right">
              {seamlessIntervenantsTrack2.map((s, idx) => (
                <SpeakerCard 
                  key={`intervenant-ligne2-${idx}`} 
                  s={s} 
                  onClick={() => setSelectedSpeaker(s)} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Shared Detail Modal */}
      <AnimatePresence>
        {selectedSpeaker && (
          <div id="speaker-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="absolute inset-0 bg-[#0B0C1A]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-[94vw] max-w-[620px] h-[90vh] max-h-[620px] md:w-[620px] md:h-[620px] bg-[#141530] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-50 text-left flex flex-col md:flex-row"
            >
              <button
                id="close-speaker-detail"
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors cursor-pointer z-30 shadow-lg backdrop-blur-md"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Left Column: Fixed Identical Size Speaker Portrait */}
              <div className="w-full md:w-[260px] h-[220px] md:h-full shrink-0 relative bg-slate-900 overflow-hidden">
                <img
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141530] via-transparent to-transparent opacity-90 z-10" />
              </div>

              {/* Right Column: Speaker Information with scrollable area */}
              <div className="flex-1 h-[calc(100%-220px)] md:h-full p-5 sm:p-7 flex flex-col justify-between overflow-y-auto space-y-4">
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {selectedSpeaker.typeIntervention && (
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border shadow-sm ${getTypeInterventionStyle(selectedSpeaker.typeIntervention)}`}>
                        <span>{selectedSpeaker.typeIntervention}</span>
                      </div>
                    )}
                    {selectedSpeaker.day && (
                      <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-sm ${
                        selectedSpeaker.day.includes("Jour 1")
                          ? "bg-sky-500/20 border-sky-400/40 text-sky-300"
                          : selectedSpeaker.day.includes("Jour 2")
                          ? "bg-purple-500/25 border-purple-400/40 text-purple-200"
                          : "bg-slate-700/70 border-slate-600 text-slate-200"
                      }`}>
                        <Calendar className="h-3 w-3" />
                        <span>{selectedSpeaker.day}</span>
                      </div>
                    )}
                    {selectedSpeaker.time && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-bold shadow-sm">
                        <Clock className="h-3 w-3 text-cyan-400" />
                        <span>{selectedSpeaker.time}</span>
                      </div>
                    )}
                    {selectedSpeaker.status && (
                      <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border shadow-sm ${
                        selectedSpeaker.status === "Confirmé"
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          : selectedSpeaker.status === "En attente de réponse"
                          ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                          : "bg-zinc-800/80 border-zinc-700 text-zinc-400"
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          selectedSpeaker.status === "Confirmé"
                            ? "bg-emerald-400"
                            : selectedSpeaker.status === "En attente de réponse"
                            ? "bg-amber-400"
                            : "bg-zinc-400"
                        }`} />
                        <span>{selectedSpeaker.status}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight uppercase leading-snug">
                      {selectedSpeaker.name}
                    </h3>
                    <p className="text-cyan-400 font-sans text-xs sm:text-sm font-semibold mt-1">
                      {selectedSpeaker.role}
                    </p>
                    <p className="text-gray-400 font-sans text-[11px] uppercase tracking-wider font-bold mt-0.5">
                      {selectedSpeaker.company}
                    </p>
                  </div>

                  {selectedSpeaker.session && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-cyan-500/30 text-xs text-cyan-200 shadow-sm">
                      <Layers className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span className="font-medium text-white/90 text-[11px]">
                        <strong className="text-cyan-400 font-semibold uppercase text-[10px] tracking-wider mr-1">Session :</strong>
                        {selectedSpeaker.session}
                      </span>
                    </div>
                  )}

                  <div className="space-y-1.5 pt-1">
                    <span className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest font-extrabold">
                      Bio / Thématique de l&apos;intervenant :
                    </span>
                    <p className="text-gray-300 font-sans text-xs sm:text-sm leading-relaxed">
                      {selectedSpeaker.bio || "Expert invité engagé pour le développement de l'entrepreneuriat des jeunes, le renforcement de capacités et la formation au leadership lors de la Convention Nationale 2026."}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between shrink-0">
                  <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-sans">
                    <span>Ivato, Madagascar</span>
                  </div>

                  <div className="flex space-x-2">
                    <span className="w-7 h-7 rounded-full bg-white/5 text-gray-300 flex items-center justify-center border border-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">
                      <Facebook className="h-3.5 w-3.5" />
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/5 text-gray-300 flex items-center justify-center border border-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors">
                      <Linkedin className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
