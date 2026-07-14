import React, { useState } from "react";
import { Mail, Phone, MapPin, Award, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import image1 from "../assets/images/Image1jpeg.jpeg";
import image2 from "../assets/images/Image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";
import image8 from "../assets/images/image8.jpeg";
import placehoder from "../assets/images/placeholder_Formateurs.png"

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

interface FormateurMock {
  name: string;
  role: string;
  company: string;
  image: string;
  email: string;
  phone: string;
  location: string;
  courses: string;
}

interface FormateurCardProps {
  f: FormateurMock;
  onClick: () => void;
  key?: React.Key;
}

// Single elegant presentation card optimized for smooth carousel animations
const FormateurCard = ({ f, onClick }: FormateurCardProps) => (
  <div
    onClick={onClick}
    className="relative w-[280px] sm:w-[320px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl cursor-pointer group transition-all duration-300 border border-white/5 flex-shrink-0 mx-4"
  >
    <MediaBadge24 />
    <img
      src={f.image}
      alt={f.name}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      referrerPolicy="no-referrer"
    />
    
    {/* Cinematic matching dark film overlay */}
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0A0B1A]/95 via-[#0A0B1A]/70 to-transparent transition-opacity duration-300 z-10" />
    
    {/* Overlay Text Details */}
    <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col items-center justify-end text-center space-y-3">
      <h3 className="text-base sm:text-lg font-sans font-black tracking-wide text-white drop-shadow-md leading-snug">
        {f.name}
      </h3>
      <p className="text-[11px] sm:text-xs text-amber-400 font-sans font-semibold tracking-wider uppercase">
        {f.company}
      </p>
      <div className="flex items-center space-x-1.5 text-gray-300 text-[10px] sm:text-xs">
        <MapPin className="h-3 w-3 text-[#00A6DF]" />
        <span>{f.location}</span>
      </div>
    </div>
  </div>
);

export default function Formateurs() {
  const [selectedFormateur, setSelectedFormateur] = useState<FormateurMock | null>(null);

  const speakerImage = "/src/assets/images/hero_speaker_portrait_1782117191963.jpg";

  // Real Trainers List (Divided in Row 1 and Row 2)
  const formateursRow1: FormateurMock[] = [
    {
      name: "RANDRIAMANARINA Meva Wanda",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: image1,
      email: "mevawanda@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "JCI Explore, JCI Discover"
    },
    {
      name: "RAMANANTOANINA Andrianiaina",
      role: "Formateur Certifié JCI",
      company: "JCI Mayendeleyo",
      image: image2,
      email: "rany.mazany@gmail.com",
      phone: "261344357805",
      location: "Antananarivo",
      courses: "Project Management, JCI Explore, Effective Leadership, JCI Discover, Networking, Engage, Empower, Grow!"
    },
    {
      name: "Andry Jean Marc Rakotomanjaka",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: image3,
      email: "ajmrakotomanjaka@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Social Responsibility"
    },
    {
      name: "RAVELOMAHAFALY Andriamihaja Guénolé",
      role: "Formateur Certifié JCI",
      company: "JCI Toliara",
      image: placehoder,
      email: "andriamihaja.guenole@gmail.com",
      phone: "261348408489",
      location: "Antananarivo",
      courses: "Effective Communication: Building a Foundation, Project Management, JCI Explore, Facilitator, Presenter, Effective Leadership, JCI Discover, Effective Communication: Crafting your message"
    },
    {
      name: "Lovanirina Razakamananandro",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: image4,
      email: "lovanirina.rzk@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "JCI Discover, Project Management, Facilitator, Networking"
    },
    {
      name: "Mercedes Ratsirahonana",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "mercedes.rakotomalala@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "JCI Discover, Project Management"
    },
    {
      name: "Tsimihipa ANDRIAMAZAVARIVO",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "tsimihipa@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Project Management, Social Responsibility, JCI Discover, Effective Communication: Building a Foundation"
    },
    {
      name: "Karine Rabarijohn",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "kamira.madagascar@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Effective Communication: Crafting your message, Engage, Empower, Grow!, Networking, Effective Meetings, JCI Discover"
    },
    {
      name: "RATSIMBAZAFY Sandra Tiana",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: image5,
      email: "sandratiana@outlook.com",
      phone: "",
      location: "Madagascar",
      courses: "JCI Explore, Effective Leadership, Facilitator, JCI Discover"
    },
    {
      name: "Hery Rason",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: image6,
      email: "heryrason@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Project Management"
    },
    {
      name: "Miray RASIDY",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "mirayrasidy@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Engage, Empower, Grow!, JCI Explore, Project Management, JCI Admin, Social Responsibility, Facilitator, Networking"
    },
    {
      name: "RABARIJAONA Harena Juan",
      role: "Formateur Certifié JCI",
      company: "JCI Iarivo",
      image: image7,
      email: "yoan.rab@gmail.com",
      phone: "261376103584",
      location: "Antananarivo",
      courses: "JCI Discover, Effective Communication: Building a Foundation, JCI Explore"
    }
  ];

  const formateursRow2: FormateurMock[] = [
    {
      name: "MAMONJY Tefinjanahary Marc Gaël",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: image8,
      email: "tmarcgael@gmail.com",
      phone: "034 62 963 41",
      location: "Madagascar",
      courses: "Effective Communication: Building a Foundation, Facilitator, Presenter, JCI Discover"
    },
    {
      name: "RAJAONARIVONY Mamy Herimampionona",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "mampiononarajaonarivony@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "JCI Explore, Effective Leadership, Effective Communication: Building a Foundation, Facilitator, Presenter, Project Management, JCI Discover"
    },
    {
      name: "Velompanahy Rasolofoarivony",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "n.velompanahy@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "JCI Discover"
    },
    {
      name: "RANRIAMANANA Nielsen Robert",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "randriamananarobertn@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Engage, Empower, Grow!"
    },
    {
      name: "Dylan RAMANOARA",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "macdylan77@yahoo.fr",
      phone: "",
      location: "Madagascar",
      courses: "Networking"
    },
    {
      name: "Nandrianina Miora Razanakarivo",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "miurrazaa@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Effective Communication: Crafting your message, Social Responsibility, Effective Meetings, JCI Discover, Effective Communication: Building a Foundation, JCI Impact, Project Management"
    },
    {
      name: "HAMBA Tianjara Hugues",
      role: "Formateur Certifié JCI",
      company: "JCI Nosy-Be",
      image: placehoder,
      email: "hthugues@gmail.com",
      phone: "261321107426",
      location: "Nosy Be",
      courses: "Engage, Empower, Grow!, JCI Discover, JCI Impact"
    },
    {
      name: "RAHARINAIVO Lovasoa Mandimby",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "alphiraha@gmail.com",
      phone: "",
      location: "Madagascar",
      courses: "Facilitator, Networking, Social Responsibility, Presenter, JCI Discover"
    },
    {
      name: "Tsinjoniaina RAKOTOVAO",
      role: "Formatrice JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "aina.tsinjo@gmail.com",
      phone: "033 28 121 26",
      location: "Madagascar",
      courses: "JCI Discover, JCI Explore"
    },
    {
      name: "RATOVOARISON Bruno Marcelino",
      role: "Formateur JCI",
      company: "JCI Madagascar",
      image: placehoder,
      email: "est.brunomarcelino@gmail.com",
      phone: "034 68 993 39",
      location: "Madagascar",
      courses: "Presenter, JCI Discover"
    },
    {
      name: "Rabearilaza Mamy",
      role: "Formateur JCI",
      company: "JCI Antananarivo",
      image: placehoder,
      email: "mamy.rabearilaza@gmail.com",
      phone: "320749511",
      location: "Antananarivo",
      courses: "Presenter"
    },
    {
      name: "Toenjara Marie Laurita",
      role: "Formatrice JCI",
      company: "JCI Nosy-Be",
      image: placehoder,
      email: "toenjaramarielaurita@gmail.com",
      phone: "327794658",
      location: "Nosy Be",
      courses: "Project Management"
    },
    {
      name: "Rakotovao Caroline",
      role: "Formatrice JCI",
      company: "JCI Ilon'Iarivo",
      image: placehoder,
      email: "caroline.rakotovao@gmail.com",
      phone: "whatsapp +33761295552 / tel 0386194970",
      location: "Antananarivo",
      courses: "JCI Explore, JCI Discover"
    }
  ];

  // Cloning cards to ensure seamless, jitter-free loop wrapping
  const clonedFormateurs1 = [...formateursRow1, ...formateursRow1, ...formateursRow1];
  const seamlessFormateursRow1 = [...clonedFormateurs1, ...clonedFormateurs1];

  const clonedFormateurs2 = [...formateursRow2, ...formateursRow2, ...formateursRow2];
  const seamlessFormateursRow2 = [...clonedFormateurs2, ...clonedFormateurs2];

  return (
    <div id="formateurs-parent" className="scroll-mt-12">
      
      {/* Injecting marquee rules */}
      <style dangerouslySetInnerHTML={{ __html: marqueeGlobalCSS }} />

      {/* SECTION: FORMATEURS - TWO INFINITE SCROLL ROWS (ONE ON TOP OF THE OTHER) */}
      <section id="formateurs" className="py-20 md:py-28 bg-[#0F1026] text-white overflow-hidden relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight uppercase">
              Formateurs JCI
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-gray-300 font-sans leading-relaxed text-left">
              Faites l&apos;expérience du développement de compétences avec notre sélection de formateurs certifiés JCI pour cette Convention Nationale 2026.
            </p>
          </div>
        </div>

        {/* Double Horizontal Scroll Tracks (2 columns one above another) */}
        <div className="space-y-6 relative w-full overflow-hidden py-4">
          {/* Aesthetic fading gradient masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0F1026] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0F1026] to-transparent z-20 pointer-events-none" />

          {/* Row 1 - scrolling left */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-left">
              {seamlessFormateursRow1.map((f, idx) => (
                <FormateurCard 
                  key={`formateur-row1-${idx}`} 
                  f={f} 
                  onClick={() => setSelectedFormateur(f)} 
                />
              ))}
            </div>
          </div>

          {/* Row 2 - scrolling right for magnificent dynamic motion contrast */}
          <div className="relative w-full overflow-hidden pt-2">
            <div className="animate-marquee-right">
              {seamlessFormateursRow2.map((f, idx) => (
                <FormateurCard 
                  key={`formateur-row2-${idx}`} 
                  f={f} 
                  onClick={() => setSelectedFormateur(f)} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shared Detail Modal */}
      <AnimatePresence>
        {selectedFormateur && (
          <div id="formateur-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFormateur(null)}
              className="absolute inset-0 bg-[#0B0C1A]/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-[#141530] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-50 text-left"
            >
              <button
                id="close-formateur-detail"
                onClick={() => setSelectedFormateur(null)}
                className="absolute top-5 right-5 bg-white/5 hover:bg-white/15 p-2 rounded-full text-white transition-colors cursor-pointer z-20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                
                <div className="md:col-span-5 h-[240px] md:h-full min-h-[250px] relative bg-slate-900">
                  <img
                    src={selectedFormateur.image}
                    alt={selectedFormateur.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141530] via-transparent to-transparent opacity-100 z-10" />
                </div>

                <div className="md:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-5">
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white tracking-tight uppercase leading-snug">
                      {selectedFormateur.name}
                    </h3>
                    <p className="text-[#00A6DF] font-sans text-xs sm:text-sm font-bold mt-2">
                      {selectedFormateur.role}
                    </p>
                    <div className="inline-flex items-center space-x-1.5 mt-1 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-[11px] text-amber-400 font-bold uppercase font-mono tracking-wider">
                      <Award className="h-3 w-3 text-amber-400" />
                      <span>{selectedFormateur.company}</span>
                    </div>
                  </div>

                  {/* Formations list */}
                  <div className="space-y-1.5">
                    <span className="block text-[10px] font-mono uppercase text-gray-400 tracking-widest font-extrabold">
                      Formations dispensées :
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedFormateur.courses.split(",").map((course, idx) => (
                        <span 
                          key={idx} 
                          className="bg-[#0F1026]/80 text-[#00A6DF] border border-[#00A6DF]/20 px-2.5 py-1 rounded-lg text-[11px] font-sans font-bold shadow-sm"
                        >
                          {course.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact info block */}
                  <div className="space-y-2 text-xs text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3.5 w-3.5 text-gray-400" />
                      <span className="font-mono">{selectedFormateur.email}</span>
                    </div>
                    {selectedFormateur.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-3.5 w-3.5 text-gray-400" />
                        <span className="font-mono">{selectedFormateur.phone}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-400 font-sans">
                      <MapPin className="h-3.5 w-3.5 text-[#00A6DF]" />
                      <span>{selectedFormateur.location}, Madagascar</span>
                    </div>

                    <div className="flex space-x-2.5">
                      <span className="w-8 h-8 rounded-full bg-white/5 text-gray-300 flex items-center justify-center border border-white/5 hover:bg-white/10 cursor-pointer">
                        <Globe className="h-4 w-4" />
                      </span>
                    </div>
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
