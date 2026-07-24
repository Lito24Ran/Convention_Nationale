import React, { useState } from "react";
import { Handshake, Mail, Phone, User, X, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MG from "../assets/images/partenaire/2424.png";
import buddy from "../assets/images/partenaire/BUDDY_CREATIF.png";
import orange from "../assets/images/partenaire/ORANGE.png";
import kentia from "../assets/images/partenaire/Groupe_Kentia.png";
import Koon from "../assets/images/partenaire/KOON_SPACE.jpg";
import Midi from "../assets/images/partenaire/Midi_Madagasikara.png";
import HEI from "../assets/images/partenaire/HEI.png";
import MJS from "../assets/images/partenaire/MJS.png";
import Data from "../assets/images/Databridge.jpeg";
import Mandala from "../assets/images/Mandala_Partenaire.jpeg";
import JanteCo from "../assets/images/JanteCo_Partenaire.jpeg";
import Filo from "../assets/images/LogoFilo.jpeg";

const MidiLogo = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={Midi}
      alt="Midi" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const OrangeLogo = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={orange}
      alt="Orange" 
      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const KoonSpaceLogo = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={Koon}
      alt="Koon" 
      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const KentiaLogo = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={kentia}
      alt="Kentia" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const Logo2424 = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={MG}
      alt="MJS" 
      className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const BuddyLogo = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={buddy}
      alt="BUDDY" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const HEILogo = () => (
  <div className="flex items-center justify-center p-1 h-full w-full select-none">
    <img 
      src={HEI}
      alt="HEI" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
);

const MjsLogo = () => (
  <div className="flex items-center justify-center p-0 h-full w-full select-none">
    <img 
      src={MJS}
      alt="MJS" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const DatabridgeLogo = () => (
  <div className="flex items-center justify-center p-0 h-full w-full select-none">
    <img 
      src={Data}
      alt="Databridge" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const JanteCoLogo = () => (
  <div className="flex items-center justify-center p-0 h-full w-full select-none">
    <img 
      src={JanteCo}
      alt="JanteCo" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const MandalaLogo = () => (
  <div className="flex items-center justify-center p-0 h-full w-full select-none">
    <img 
      src={Mandala}
      alt="Mandala" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

const FiloAgency = () => (
  <div className="flex items-center justify-center p-0 h-full w-full select-none">
    <img 
      src={Filo}
      alt="Filo Agency" 
      className="w-[85%] h-[85%] object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>
);

// Groupes de logos
const nationalLogos = [
  { id: "midi", component: <MidiLogo /> },
  { id: "orange", component: <OrangeLogo /> },
  { id: "koon", component: <KoonSpaceLogo /> },
  { id: "kentia", component: <KentiaLogo /> },
  { id: "24", component: <Logo2424 /> },

];

const localLogos = [
  { id: "buddy", component: <BuddyLogo /> },
  { id: "hei", component: <HEILogo /> },
  { id: "filo", component: <FiloAgency /> },
    { id: "janteco", component: <JanteCoLogo /> },
  { id: "databridge", component: <DatabridgeLogo /> },
  { id: "mandala", component: <MandalaLogo /> }
];

const institutionalLogos = [
  // { id: "mjs", component: <MjsLogo /> }
];

export default function Partners() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isSent, setIsSent] = useState(false);

  // Détecter si on a assez de partenaires pour scroller (au moins 3)
  const nationalShouldScroll = nationalLogos.length >= 3;
  const localShouldScroll = localLogos.length >= 3;
  const institutionalShouldScroll = institutionalLogos.length >= 3;

  // Replications adaptées pour le défilement infini fluide si défilement requis, sinon juste afficher une fois
  const nationalItems = nationalShouldScroll 
    ? [...nationalLogos, ...nationalLogos, ...nationalLogos, ...nationalLogos] 
    : nationalLogos;
  
  const localItems = localShouldScroll 
    ? [...localLogos, ...localLogos, ...localLogos, ...localLogos, ...localLogos, ...localLogos, ...localLogos, ...localLogos] 
    : localLogos;
  
  const institutionalItems = institutionalShouldScroll 
    ? [...institutionalLogos, ...institutionalLogos, ...institutionalLogos, ...institutionalLogos, ...institutionalLogos, ...institutionalLogos, ...institutionalLogos, ...institutionalLogos] 
    : institutionalLogos;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactName.trim() && contactEmail.trim()) {
      setIsSent(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    if (isSent) {
      setContactName("");
      setContactCompany("");
      setContactEmail("");
      setContactPhone("");
      setIsSent(false);
    }
  };

  return (
    <section 
      id="partners" 
      className="py-16 md:py-24 bg-[#0F1026] text-white scroll-mt-12 overflow-hidden relative"
    >
      {/* Styles Keyframes du Marquee */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left-track {
          display: flex;
          width: max-content;
          animation: marqueeLeft 32s linear infinite;
        }
        .animate-marquee-right-track {
          display: flex;
          width: max-content;
          animation: marqueeRight 28s linear infinite;
        }
        .animate-marquee-left-track:hover,
        .animate-marquee-right-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            Nos partenaires
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto font-normal">
            Merci à celles et ceux qui soutiennent notre vision et rendent nos actions possibles. Grâce à votre engagement, nous avançons chaque jour vers un avenir plus solidaire.
          </p>
        </div>
      </div>

      {/* --- BLOCS DE FIL TRIPLE --- */}
      <div className="space-y-6 relative w-full overflow-hidden py-2">
        
        {/* Masques dégradés latéraux */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-[#0F1026] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-[#0F1026] to-transparent z-20 pointer-events-none" />

        {/* BLOCK 1: NATIONAUX */}
        <div className="space-y-2">
          <div className="w-full text-center px-4">
            <span className="text-[10px] font-mono tracking-widest font-bold text-[#45BAAF]/80 uppercase inline-block">
              Partenaires Nationaux
            </span>
          </div>
          <div className="bg-black/10 py-2.5 border-t border-b border-white/5">
            <div className={nationalShouldScroll ? "animate-marquee-left-track gap-4 px-2" : "flex flex-wrap items-center justify-center gap-4 px-4 w-full"}>
              {nationalItems.map((item, idx) => (
                <div
                  key={`nat-${item.id}-${idx}`}
                  className="bg-white rounded-2xl w-[210px] sm:w-[240px] h-[100px] sm:h-[110px] flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] p-3.5 cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {item.component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCK 2: LOCAUX */}
        <div className="space-y-2">
          <div className="w-full text-center px-4">
            <span className="text-[10px] font-mono tracking-widest font-bold text-[#45BAAF]/80 uppercase inline-block">
              Partenaires Locaux
            </span>
          </div>
          <div className="bg-black/10 py-2.5 border-t border-b border-white/5">
            <div className={localShouldScroll ? "animate-marquee-right-track gap-4 px-2" : "flex flex-wrap items-center justify-center gap-4 px-4 w-full"}>
              {localItems.map((item, idx) => (
                <div
                  key={`loc-${item.id}-${idx}`}
                  className="bg-white rounded-2xl w-[210px] sm:w-[240px] h-[100px] sm:h-[110px] flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] p-3.5 cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {item.component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCK 3: INSTITUTIONS */}
        <div className="space-y-2">
          <div className="w-full text-center px-4">
            <span className="text-[10px] font-mono tracking-widest font-bold text-[#45BAAF]/80 uppercase inline-block">
              Institutions
            </span>
          </div>
          <div className="bg-black/10 py-2.5 border-t border-b border-white/5">
            <div className={institutionalShouldScroll ? "animate-marquee-left-track gap-4 px-2" : "flex flex-wrap items-center justify-center gap-4 px-4 w-full"}>
              {institutionalItems.map((item, idx) => (
                <div
                  key={`inst-${item.id}-${idx}`}
                  className="bg-white rounded-2xl w-[210px] sm:w-[240px] h-[100px] sm:h-[110px] flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] p-3.5 cursor-pointer"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {item.component}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Banner de contact en bas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-10">
        <div className="max-w-6xl mx-auto bg-[#45BAAF] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3.5xl font-sans font-black tracking-tight text-[#0F1026] leading-snug">
              Ensemble, nous construisons le changement.
            </h3>
          </div>

          <div className="relative z-10 flex-shrink-0">
             <a
              id="btn-partner-contact"
              href="mailto:jciiarivo@gmail.com?subject=Demande de Partenariat - Convention Nationale 2026"
              className="inline-block bg-[#0F1026] hover:bg-[#1B1D42] text-white font-sans font-extrabold text-xs sm:text-sm tracking-wide uppercase px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-cyan-950/25 active:scale-95 transition-all duration-200 text-center select-none"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#0A0D1D]/75 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden relative z-50 flex flex-col"
            >
              <div className="p-6 text-white relative bg-[#0F1026]">
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#45BAAF]" />

                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center text-white">
                    <Handshake className="h-5.5 w-5.5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#45BAAF] font-bold block">
                      Partenariat & Sponsoring
                    </span>
                    <h4 className="text-base sm:text-lg font-sans font-black uppercase text-white tracking-tight -mt-0.5">
                      Contactez JCI Iarivo
                    </h4>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1">
                {!isSent ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-1 text-left">
                      <label className="block text-[11px] font-sans font-bold uppercase text-gray-500 tracking-wider">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                          <User className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Ex: Randrianaivoson Azaria"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 focus:border-[#45BAAF] focus:ring-2 focus:ring-[#45BAAF]/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[11px] font-sans font-bold uppercase text-gray-500 tracking-wider">
                        Entreprise / Association <span className="text-gray-400">(Optionnel)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                          <Handshake className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="text"
                          value={contactCompany}
                          onChange={(e) => setContactCompany(e.target.value)}
                          placeholder="Ex: Koon Space"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 focus:border-[#45BAAF] focus:ring-2 focus:ring-[#45BAAF]/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[11px] font-sans font-bold uppercase text-gray-500 tracking-wider">
                        Adresse Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                          <Mail className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="Ex: sponsoring@groupe.com"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 focus:border-[#45BAAF] focus:ring-2 focus:ring-[#45BAAF]/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[11px] font-sans font-bold uppercase text-gray-500 tracking-wider">
                        Numéro de téléphone <span className="text-gray-400">(Optionnel)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                          <Phone className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="tel"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          placeholder="Ex: +261 34 00 000 00"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 focus:border-[#45BAAF] focus:ring-2 focus:ring-[#45BAAF]/10 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="submit"
                        className="w-full bg-[#0F1026] hover:bg-[#1B1D42] text-white py-4 rounded-2xl font-sans font-extrabold text-sm uppercase tracking-wider transition-all duration-200 active:scale-98 shadow-lg cursor-pointer select-none"
                      >
                        Envoyer ma demande
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2">
                      <ShieldCheck className="h-8 w-8 stroke-[2.5]" />
                    </div>
                    <h5 className="text-xl font-sans font-black text-[#0F1026] uppercase tracking-tight">
                      Message transmis !
                    </h5>
                    <div className="bg-gray-50 rounded-2xl p-4 text-xs text-gray-600 font-sans text-left space-y-2.5 max-w-sm mx-auto border border-gray-200/50">
                      <p>
                        Merci <strong>{contactName}</strong> ! Votre message a bien été transmis à l&apos;équipe organisatrice.
                      </p>
                    </div>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-900 hover:bg-[#0F1026] text-white font-sans font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-150 cursor-pointer"
                      >
                        Fermer la fenêtre
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
