import React, { useState } from "react";
import { Handshake, Mail, Phone, User, X, Check, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Individual Logo Renders - Redrawn with extreme high fidelity to match the screenshot exactly
const SiokaLogo = () => (
  <div className="flex flex-col items-center justify-center p-3 h-full w-full select-none leading-none">
    <div className="flex items-center space-x-2">
      {/* Pink stylized 'S' lettermark */}
      <span className="text-4xl sm:text-5xl font-black text-[#D61F69] tracking-tighter transform scale-y-110">S</span>
      <div className="flex flex-col items-start justify-center">
        <span className="text-[13px] font-sans font-extrabold text-neutral-800 tracking-tight">IOKA</span>
        {/* Dynamic bar graphics underneath ioka */}
        <div className="flex items-end space-x-[2px] h-3.5 mt-1">
          <span className="w-1.5 h-[30%] bg-[#00A6DF]" />
          <span className="w-1.5 h-[60%] bg-[#00A6DF]" />
          <span className="w-1.5 h-full bg-[#00A6DF]" />
          <span className="w-1.5 h-[75%] bg-[#D61F69]" />
        </div>
      </div>
    </div>
    <span className="text-[8.5px] font-sans font-bold text-neutral-400 mt-2.5 uppercase tracking-wide">
      Corporate Partners
    </span>
  </div>
);

const KoonSpaceLogo = () => (
  <div className="flex flex-col items-center justify-center p-3 text-center leading-none h-full w-full select-none">
    <div className="flex items-center space-x-2">
      <span className="text-2xl sm:text-3xl font-sans font-black text-gray-950 tracking-tight lowercase">koon</span>
      <div className="flex items-center bg-[#E53E3E] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-sm">
        <span>space</span>
        <span className="ml-[1.5px] w-1.5 h-1.5 rounded-full bg-white block" />
      </div>
    </div>
    <span className="text-[7.5px] font-sans font-semibold text-neutral-400 mt-3.5 uppercase tracking-wide whitespace-nowrap">
      Coworking • Networking • Business center
    </span>
  </div>
);

const IssofLogo = () => (
  <div className="flex flex-col items-center justify-center p-3 text-center leading-none h-full w-full select-none">
    <div className="flex items-center space-x-1">
      <span className="text-2xl font-sans font-black text-[#1A4E9E] tracking-tight uppercase">ISSOF</span>
      <span className="text-yellow-500 text-lg">★</span>
    </div>
    <span className="text-[8.5px] font-sans font-black text-[#1A4E9E] mt-2 tracking-wider uppercase">
      ISCAM Solutions Formation
    </span>
    <span className="text-[6.5px] font-mono text-neutral-400 mt-1.5 uppercase tracking-widest whitespace-nowrap">
      BRING YOUR PEOPLE TO THE NEXT LEVEL
    </span>
  </div>
);

const KentiaLogo = () => (
  <div className="flex h-full w-full items-stretch py-2 pl-4 text-left justify-center flex-col leading-none select-none border-l-[4.5px] border-[#F5C400]">
    <span className="text-[9px] font-sans font-semibold text-neutral-500 uppercase tracking-widest leading-none">Groupe</span>
    <span className="text-lg sm:text-xl font-sans font-black text-[#0B1E43] uppercase tracking-tight leading-none mt-1">KENTIA</span>
    <span className="text-[8.5px] font-sans font-bold text-neutral-400 mt-2.5 tracking-normal uppercase">
      Solutions pour les PME
    </span>
  </div>
);

const JeLogo = () => (
  <div className="flex items-center justify-center p-2 h-full w-full select-none leading-none">
    <div className="bg-[#00B4D8] rounded-xl p-2.5 flex items-center justify-center shadow-sm w-[55px] h-[55px] transform -rotate-6">
      <span className="text-2xl font-black text-white tracking-widest uppercase italic">JE</span>
    </div>
    <div className="ml-3 text-left">
      <span className="block text-[13px] font-sans font-extrabold text-neutral-800 uppercase tracking-wide leading-none">Jeune</span>
      <span className="block text-[13px] font-sans font-extrabold text-[#00B4D8] uppercase tracking-wide leading-none mt-0.5">Entrepreneur</span>
    </div>
  </div>
);

const LeCentreLogo = () => (
  <div className="flex items-center justify-center p-3 h-full w-full select-none leading-none">
    <div className="flex items-center space-x-2">
      <span className="text-[#00A6DF] text-sm font-sans font-light italic leading-none pr-[1px]">le</span>
      <span className="text-2xl sm:text-3xl font-sans font-black text-[#1D3557] uppercase tracking-tight leading-none">Centre</span>
      <div className="w-5.5 h-5.5 rounded-full bg-[#1D3557] flex items-center justify-center text-[11px] text-white border border-amber-400 font-bold font-mono">
        C
      </div>
    </div>
  </div>
);

const A4Logo = () => (
  <div className="flex h-full w-full p-2 items-center justify-center select-none leading-none">
    <div className="rounded-full border-[2.5px] border-neutral-900 bg-neutral-950 p-2 flex flex-col items-center justify-center w-[54px] h-[54px] relative">
      <span className="text-sm font-sans font-black text-white tracking-tighter">A4</span>
      <div className="absolute -bottom-1 flex items-center justify-center space-x-0.5">
        <span className="w-1 h-1 rounded-full bg-pink-500" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#00A6DF]" />
      </div>
    </div>
    <div className="ml-3.5 text-left space-y-0.5">
      <span className="block text-[10px] font-sans font-extrabold text-neutral-800 uppercase tracking-widest">A4 STUDIO</span>
      <span className="block text-[7px] font-mono text-neutral-400 uppercase tracking-tight whitespace-nowrap">
        DRINK • CHILL • LIVE
      </span>
    </div>
  </div>
);

const MidiLogo = () => (
  <div className="flex items-center justify-center p-3 h-full w-full select-none leading-none">
    <div className="text-center flex flex-col items-center">
      <div className="flex items-center space-x-1">
        <span className="text-red-600 text-3xl font-sans font-black leading-none uppercase">M</span>
        <span className="text-neutral-900 text-lg font-serif font-black tracking-tighter uppercase leading-none">MIDI</span>
      </div>
      <span className="text-red-500 text-[10px] font-sans font-bold uppercase tracking-widest mt-1.5 italic">
        Madagasikara
      </span>
    </div>
  </div>
);

const allPartnerLogos = [
  { id: "sioka", component: <SiokaLogo /> },
  { id: "koon", component: <KoonSpaceLogo /> },
  { id: "issof", component: <IssofLogo /> },
  { id: "kentia", component: <KentiaLogo /> },
  { id: "je", component: <JeLogo /> },
  { id: "lecentre", component: <LeCentreLogo /> },
  { id: "a4", component: <A4Logo /> },
  { id: "midi", component: <MidiLogo /> }
];

export default function Partners() {
  const [modalOpen, setModalOpen] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactCompany, setContactCompany] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [isSent, setIsSent] = useState(false);

  // Triple the items to ensure extremely smooth loops for very wide viewports
  const marqueeItems = [
    ...allPartnerLogos,
    ...allPartnerLogos,
    ...allPartnerLogos,
    ...allPartnerLogos
  ];

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
      {/* Inline styles for perfect marquee slider animations */}
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }
        .animate-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and subtitle exactly as in the visual screenshot */}
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-18 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            Nos partenaires
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed max-w-3xl mx-auto font-normal">
            Merci à celles et ceux qui soutiennent notre vision et rendent nos actions possibles. Grâce à votre engagement, nous avançons chaque jour vers un avenir plus solidaire, plus responsable et plus ambitieux.
          </p>
        </div>

      </div>

      {/* Infinite Scroll Logo Marquee Slider Carousel Line */}
      <div className="relative w-full overflow-hidden py-4 border-t border-b border-white/5 bg-black/10">
        
        {/* Soft fading edge masks for immersive professional visualization */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0F1026] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0F1026] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-track flex items-center gap-6 md:gap-8 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-white rounded-2xl w-[220px] sm:w-[250px] h-[105px] sm:h-[115px] flex items-center justify-center flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] p-4 cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                {item.component}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 relative z-10">
        
        {/* Teal banner: "Ensemble, nous construisons le changement." + Contactez-nous Button */}
        <div className="max-w-6xl mx-auto bg-[#45BAAF] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Subtle artistic light effect background inside banner */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3.5xl font-sans font-black tracking-tight text-[#0F1026] leading-snug">
              Ensemble, nous construisons le changement.
            </h3>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              id="btn-partner-contact"
              onClick={() => setModalOpen(true)}
              className="bg-[#0F1026] hover:bg-[#1B1D42] text-white font-sans font-extrabold text-xs sm:text-sm tracking-wide uppercase px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-cyan-950/25 active:scale-95 transition-all duration-200 cursor-pointer select-none"
            >
              Contactez-nous
            </button>
          </div>
        </div>

      </div>

      {/* Modern Pop-up Modal Contact Form Overlay */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop overlay with smooth blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#0A0D1D]/75 backdrop-blur-sm"
            />

            {/* Modal container card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden relative z-50 flex flex-col"
            >
              
              {/* Modal header branding element based on selected track */}
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

              {/* Form container container body */}
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
                          placeholder="Ex: Koon Space / Ma Compagnie"
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
                        className="w-full bg-[#0F1026] hover:bg-[#1B1D42] text-white py-4 rounded-2xl font-sans font-extrabold text-sm uppercase tracking-wider transition-all duration-200 active:scale-98 shadow-lg shadow-cyan-950/10 cursor-pointer select-none"
                      >
                        Envoyer ma demande
                      </button>
                    </div>

                    <p className="text-[10.5px] text-gray-400 text-center font-sans mt-3">
                      Nous vous recontacterons sous 24h avec le dossier exposant de la Convention Nationale.
                    </p>

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
                        Merci <strong>{contactName}</strong> ! Votre message concernant un éventuel partenariat a bien été transmis à l&apos;équipe organisatrice de JCI Iarivo.
                      </p>
                      <p>
                        Une copie de validation et notre dossier de présentation partenaires ont été adressés à <strong>{contactEmail}</strong>.
                      </p>
                    </div>

                    <div className="pt-4 flex items-center justify-center gap-2">
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Heart className="h-3 w-3 text-red-500 fill-red-500" />
                        Merci de votre engagement
                      </span>
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
