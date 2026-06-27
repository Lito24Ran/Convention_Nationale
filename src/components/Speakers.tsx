import React, { useState } from "react";
import { Facebook, Linkedin, Youtube, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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
    animation: marquee-left-scroll 38s linear infinite;
  }
  .animate-marquee-right {
    display: flex;
    width: max-content;
    animation: marquee-right-scroll 38s linear infinite;
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
}

interface SpeakerCardProps {
  s: SpeakerMock;
  onClick: () => void;
  key?: React.Key;
}

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
    <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col items-center justify-end text-center space-y-4">
      <h3 className="text-lg font-sans font-black tracking-wide text-white drop-shadow-md">
        {s.name}
      </h3>
      {/* Social interactions */}
      <div className="flex items-center justify-center space-x-3.5 pt-1">
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
  const youthSummitImage = "/src/assets/images/jci_presentation_1782134191329.jpg";

  // Data for Intervenants (3 cards base)
  const intervenants: SpeakerMock[] = [
    { name: "Nom et Prenom", role: "Expert principal", company: "JCI Madagascar", image: speakerImage },
    { name: "Nom et Prenom", role: "Expert principal", company: "JCI Madagascar", image: speakerImage },
    { name: "Nom et Prenom", role: "Expert principal", company: "JCI Madagascar", image: speakerImage }
  ];

  // Data for Conferenciers (6 cards base)
  const conferenciers: SpeakerMock[] = [
    { name: "Nom et Prenom", role: "Conférencier invité", company: "Leadership Summit", image: speakerImage },
    { name: "Nom et Prenom", role: "Conférencier invité", company: "Leadership Summit", image: speakerImage },
    { name: "Nom et Prenom", role: "Conférencier invité", company: "Leadership Summit", image: speakerImage },
    { name: "Nom et Prenom", role: "Conférencier invité", company: "Leadership Summit", image: speakerImage },
    { name: "Nom et Prenom", role: "Conférencier invité", company: "Leadership Summit", image: speakerImage },
    { name: "Nom et Prenom", role: "Conférencier invité", company: "Leadership Summit", image: speakerImage }
  ];

  // Cloning cards to ensure seamless, jitter-free loop wrapping
  const clonedIntervenants = [...intervenants, ...intervenants, ...intervenants, ...intervenants]; // 12 elements base
  const seamlessIntervenantsTrack = [...clonedIntervenants, ...clonedIntervenants]; // 24 elements for double track

  const clonedConferenciers = [...conferenciers, ...conferenciers]; // 12 elements base
  const seamlessConferenciersTrack = [...clonedConferenciers, ...clonedConferenciers]; // 24 elements for double track

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

        {/* Horizontal Scroll Track - Intervenants */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Aesthetic fading gradient masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0F1026] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0F1026] to-transparent z-20 pointer-events-none" />

          {/* Scrolling conveyor */}
          <div className="animate-marquee-left">
            {seamlessIntervenantsTrack.map((s, idx) => (
              <SpeakerCard 
                key={`intervenant-marquee-${idx}`} 
                s={s} 
                onClick={() => setSelectedSpeaker(s)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: YOUTH SUMMIT */}
      <section id="youth-summit-feature" className="py-20 md:py-28 bg-white text-gray-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Gold pill block resembling mockup */}
              <div className="inline-flex items-center bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit rounded-full font-mono text-xs font-black tracking-widest">
                Youth Summit
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-[#0F1026] tracking-tight leading-tight uppercase animate-pulse-slow">
                Youth Summit
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed max-w-2xl font-medium">
                Forum jeunesse à forte valeur ajoutée, conçu pour galvaniser la jeunesse malgache autour des enjeux de leadership, d&apos;entrepreneuriat et de développement durable. Événement satellite de la Convention Nationale.
              </p>
            </div>

            {/* Right side beautiful image */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-[450px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 relative group"
              >
                <img
                  src="src/assets/images/Wpp_image.jpeg"
                  alt="Youth Summit female speaker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0F1026]/5 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CONFERENCIERS - INFINITE SCROLL */}
      <section id="conferenciers" className="py-20 md:py-28 bg-[#0F1026] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight uppercase">
              Conferenciers
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-gray-300 font-sans leading-relaxed text-left">
              Rencontrez nos intervenants lors de cette Convention Nationale et échangez avec des experts passionnés autour de thématiques inspirantes et innovantes.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Track - Conferenciers (Moving Right for Dynamic Contrast) */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Aesthetic fading gradient masks on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0F1026] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0F1026] to-transparent z-20 pointer-events-none" />

          {/* Scrolling conveyor (animate-marquee-right for majestic parallax feel) */}
          <div className="animate-marquee-right">
            {seamlessConferenciersTrack.map((s, idx) => (
              <SpeakerCard 
                key={`conferencier-marquee-${idx}`} 
                s={s} 
                onClick={() => setSelectedSpeaker(s)} 
              />
            ))}
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
              className="relative w-full max-w-2xl bg-[#141530] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl z-50 text-left"
            >
              <button
                id="close-speaker-detail"
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-5 right-5 bg-white/5 hover:bg-white/15 p-2 rounded-full text-white transition-colors cursor-pointer z-20"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                
                <div className="md:col-span-5 h-[240px] md:h-full min-h-[250px] relative bg-slate-900">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#141530] via-transparent to-transparent opacity-100 z-10" />
                </div>

                <div className="md:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight uppercase leading-none">
                      {selectedSpeaker.name}
                    </h3>
                    <p className="text-cyan-400 font-sans text-sm font-semibold mt-2.5">
                      {selectedSpeaker.role}
                    </p>
                    <p className="text-gray-400 font-sans text-xs uppercase tracking-wider font-bold mt-1">
                      {selectedSpeaker.company}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="block text-[11px] font-mono uppercase text-gray-500 tracking-widest font-extrabold">
                      Bio/Thématique de l&apos;intervenant :
                    </span>
                    <p className="text-gray-300 font-sans text-sm leading-relaxed">
                      Expert invité engagé pour le développement de l&apos;entrepreneuriat des jeunes, le renforcement de capacités et la formation au leadership lors de la Convention Nationale 2026.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-400 font-sans">
                      <span>Ivato, Madagascar</span>
                    </div>

                    <div className="flex space-x-2.5">
                      <span className="w-8 h-8 rounded-full bg-white/5 text-gray-300 flex items-center justify-center border border-white/5">
                        <Facebook className="h-4 w-4" />
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/5 text-gray-300 flex items-center justify-center border border-white/5">
                        <Linkedin className="h-4 w-4" />
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
