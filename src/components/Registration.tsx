import React, { useState, useEffect } from "react";
import { Shield, Users, ArrowRight, X, Check, Award, Calendar, AlertCircle, Sparkles, Coffee, Utensils, Hotel, Gift, Briefcase, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image_CN from "../assets/images/WhatsApp Image 2026-06-17 at 08.32.46.jpeg"
import Image_CN2 from "../assets/images/WhatsApp Image 2026-06-17 at 08.32.43.jpeg"


type ProgramType = "convention" | "youth";

const PERIOD_CONFIG = {
  early: {
    id: "early",
    label: "Early Bird",
    start: new Date("2026-07-11T00:00:00"),
    end: new Date("2026-08-02T23:59:59"),
    dateStr: "11 juillet → 2 Août 2026",
    openDateStr: "Dès le 11 Juillet",
    priceComplet: "500 000 AR",
    priceSolo: "350 000 AR"
  },
  standard: {
    id: "standard",
    label: "Standard",
    start: new Date("2026-08-03T00:00:00"),
    end: new Date("2026-08-23T23:59:59"),
    dateStr: "3 Août → 23 Août 2026",
    openDateStr: "Dès le 3 Août",
    priceComplet: "550 000 AR",
    priceSolo: "375 000 AR"
  },
  last: {
    id: "last",
    label: "Last Chance",
    start: new Date("2026-08-24T00:00:00"),
    end: new Date("2026-09-13T23:59:59"),
    dateStr: "24 Août → 13 septembre 2026",
    openDateStr: "Dès le 24 Août",
    priceComplet: "575 000 AR",
    priceSolo: "400 000 AR"
  }
};

export default function Registration() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>("convention");
  const [hasAccommodation, setHasAccommodation] = useState<boolean>(true);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const now = new Date();

  // Force la pré-sélection visuelle sur l'Early Bird à l'ouverture
  useEffect(() => {
    if (modalOpen) {
      setSelectedTier("early");
    }
  }, [modalOpen]);

  const openModal = (program: ProgramType) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const isRegistrationClosedGlobal = now > PERIOD_CONFIG.last.end;

  return (
    <section id="registration" className="py-16 md:py-24 bg-white text-gray-950 border-b-[6px] border-[#00A6DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titres de la section */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D1537] tracking-tight uppercase">
            Inscription
          </h2>
          <p className="text-sm text-gray-400 font-sans mt-2">
            Réservez votre place officielle pour la Convention Nationale et le Youth Summit 2026.
          </p>
        </div>

        {/* Boutons d'accès initiaux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Carte : Convention Nationale */}
          <div className="bg-[#1A3E7E] text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between gap-6 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="flex-1 flex flex-col justify-between space-y-6 relative z-10">
              <div>
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-400 mb-5">
                  <Shield className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight leading-tight uppercase">
                  CONVENTION <br /> NATIONALE 2026
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-sans mt-3 max-w-[280px]">
                  Le rendez-vous annuel des membres, dirigeants et partenaires de la JCI Madagascar.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  disabled={isRegistrationClosedGlobal}
                  onClick={() => openModal("convention")}
                  className={`w-full font-sans font-black text-xs tracking-wider py-4 px-6 rounded-xl uppercase flex items-center justify-center gap-2 transition-all duration-200 select-none ${
                    isRegistrationClosedGlobal 
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                      : "bg-[#00A6DF] hover:bg-sky-400 text-white active:scale-95 cursor-pointer"
                  }`}
                >
                  {isRegistrationClosedGlobal ? "Inscriptions Clôturées" : "S'inscrire à la CN"}
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>
                <p className="text-[11px] text-white/50 font-sans flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Validation sur référence Orange Money
                </p>
              </div>
            </div>

            <div className="w-full md:w-[200px] flex-shrink-0 flex items-center justify-center relative z-10 self-center">
              <img
                src={Image_CN}
                alt="JCI Convention"
                className="w-full h-44 md:h-60 object-cover rounded-2xl shadow-md border border-white/10 group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Carte : Youth Summit */}
          <div className="bg-gray-50 text-gray-900 rounded-3xl p-8 flex flex-col md:flex-row justify-between gap-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
            <div className="flex-1 flex flex-col justify-between space-y-6 relative z-10">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#1A3E7E]/5 flex items-center justify-center text-[#1A3E7E] mb-5">
                  <Users className="h-5 w-5 stroke-[2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight leading-tight uppercase text-[#1A3E7E]">
                  YOUTH <br /> SUMMIT 2026
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-sans mt-3 max-w-[280px]">
                  Un forum inspirant dédié à l&apos;innovation, au leadership et à l&apos;impact des jeunes.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => window.open("https://tally.so/r/MegLYX", "_blank")}
                  className="w-full bg-[#1A3E7E] hover:bg-[#133063] text-white font-sans font-black text-xs tracking-wider py-4 px-6 rounded-xl uppercase flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer select-none"
                >
                  S&apos;inscrire au YS
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>
                <p className="text-[11px] text-gray-400 font-sans flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1A3E7E] animate-pulse" />
                  Confirmation immédiate par email
                </p>
              </div>
            </div>

            <div className="w-full md:w-[200px] flex-shrink-0 flex items-center justify-center relative z-10 self-center">
              <img
                src={Image_CN2}
                alt="Youth Summit"
                className="w-full h-44 md:h-60 object-cover rounded-2xl shadow-md border border-gray-200 group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL DE SELECTION INTERACTIF ================= */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-[#060713]/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-[#0C0D21] border-2 border-amber-500/30 rounded-[36px] w-full max-w-7xl overflow-hidden relative z-50 shadow-2xl max-h-[96vh] overflow-y-auto"
            >
              {/* Absolutes decorative glow effects inside the modal */}
              <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#00A6DF]/20 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

              {/* Bouton fermeture croix */}
              <div className="absolute top-6 right-6 z-50">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors border border-white/20 cursor-pointer"
                >
                  <X className="h-5 w-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Premium Graphic Banner at the top of the modal */}
              <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C122E] via-[#101942] to-[#1F1D36] border-b border-amber-500/20 px-6 py-10 sm:px-12 sm:py-12 text-left">
                
                {/* Dots / Halftone Grid Pattern Overlay */}
                <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none bg-[radial-gradient(#d97706_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
                
                {/* Diagonal warm glowing stripe background */}
                <div className="absolute -right-20 -top-20 w-[450px] h-[350px] bg-gradient-to-br from-amber-500/30 via-blue-600/15 to-transparent rotate-12 blur-3xl pointer-events-none" />
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-32 bg-[#00A6DF]/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                  
                  {/* Left Column: Yellow/Amber Pill & Title info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-ping" />
                        <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-amber-400 uppercase bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
                          INSCRIPTIONS OUVERTES • ACCÈS PRESTIGE
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      {/* Stylized "Ouverture inscription" text */}
                      <div className="relative inline-block">
                        <span className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-transparent rounded-lg transform -skew-x-3" />
                        <h4 className="relative text-base sm:text-lg font-sans font-medium text-amber-400 italic">
                          Ouverture inscription
                        </h4>
                      </div>

                      {/* Main Category Display Title */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight uppercase leading-none">
                        {selectedProgram === "convention" ? (
                          <>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A6DF] to-cyan-300">CONVENTION</span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">NATIONALE</span>
                          </>
                        ) : (
                          <>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">SOMMET</span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A6DF] to-cyan-300">JEUNESSE</span>
                          </>
                        )}
                      </h3>
                    </div>

                    {/* Quotation text */}
                    <p className="text-xs text-gray-300 font-sans italic leading-relaxed max-w-xl pt-2 border-l-2 border-amber-500/40 pl-3">
                      &ldquo;Une génération construit ensemble. Une île se transforme.&rdquo;
                    </p>
                  </div>

                  {/* Right Column: Statistics Counter Boxes */}
                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 sm:gap-4 justify-start md:justify-center">
                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2.5">
                      <Users className="h-4 w-4 text-[#00A6DF]" />
                      <div className="text-left md:text-right">
                        <div className="text-xs font-mono font-black text-white">100+ PARTICIPANTS</div>
                        <div className="text-[9px] text-gray-400 uppercase font-sans">Capacité maximum</div>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2.5">
                      <Award className="h-4 w-4 text-amber-400" />
                      <div className="text-left md:text-right">
                        <div className="text-xs font-mono font-black text-white">14 OLs & 9 RÉGIONS</div>
                        <div className="text-[9px] text-gray-400 uppercase font-sans">Représentation nationale</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Modal Core Layout Content */}
              <div className="p-6 sm:p-10 md:p-14 pt-8 md:pt-10 relative z-10 text-white space-y-6">
                
                {/* Sélecteur de Pack */}
                {selectedProgram === "convention" && (
                  <div className="bg-white/5 border border-white/10 p-1 rounded-full flex items-center justify-center max-w-[240px] mx-auto shadow-inner backdrop-blur-md">
                    <button
                      type="button"
                      onClick={() => setHasAccommodation(true)}
                      className={`flex-1 py-2 px-4 rounded-full text-[10px] font-sans font-black uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
                        hasAccommodation 
                          ? "bg-gradient-to-r from-[#00A6DF] to-amber-500 text-slate-950 shadow-md font-black" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Pack Complet
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasAccommodation(false)}
                      className={`flex-1 py-2 px-4 rounded-full text-[10px] font-sans font-black uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
                        !hasAccommodation 
                          ? "bg-gradient-to-r from-[#00A6DF] to-amber-500 text-slate-950 shadow-md font-black" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      Pack Solo
                    </button>
                  </div>
                )}

                {/* Grille des tarifs (3 cartes) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left pt-4 px-2">
                  {(Object.keys(PERIOD_CONFIG) as Array<keyof typeof PERIOD_CONFIG>).map((key) => {
                    const tier = PERIOD_CONFIG[key];
                    const isSelected = selectedTier === key;
                    
                    const isActive = key === "early";
                    const isNotOpenYet = key !== "early" && now < tier.start;
                    const isExpired = key !== "early" && now > tier.end;

                    const currentPrice = hasAccommodation ? tier.priceComplet : tier.priceSolo;

                    // Text labels matching the image
                    const labelTranslations = {
                      early: "LÈVE-TÔT",
                      standard: "STANDARD",
                      last: "DERNIÈRE CHANCE"
                    };

                    return (
                      <div
                        key={key}
                        onClick={() => {
                          if (isActive) {
                            setSelectedTier(key);
                          }
                        }}
                        className={`rounded-[32px] p-8 flex flex-col justify-between relative transition-all duration-300 select-none overflow-hidden ${
                          isActive
                            ? "bg-[#0D0E25] text-white border-2 border-amber-500/80 shadow-[0_15px_40px_rgba(245,158,11,0.15)] md:scale-[1.03] z-10"
                            : "bg-[#090A1A] text-gray-100 border border-white/5 opacity-70 cursor-not-allowed"
                        }`}
                      >
                        {/* Ribbon "OUVERT" or "FERMÉ" on the top right for active/inactive */}
                        {isActive && (
                          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-sans font-black text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-md">
                            OUVERT
                          </div>
                        )}

                        <div className="space-y-6">
                          {/* Label de l'offre en haut centré */}
                          <div className="flex justify-center pt-2">
                            <span className={`px-5 py-1.5 rounded-full text-[10px] font-sans font-black tracking-widest uppercase border ${
                              isActive 
                                ? "bg-amber-500/10 border-amber-500/25 text-amber-400" 
                                : "bg-white/5 border-white/10 text-gray-400"
                            }`}>
                              {labelTranslations[key]}
                            </span>
                          </div>

                          {/* Affichage Prix prestigieux centré */}
                          <div className="text-center space-y-1">
                            <span className="text-4xl font-sans font-black block tracking-tight text-white drop-shadow-md">
                              {currentPrice}
                            </span>
                            
                            {/* Dates avec icône de calendrier */}
                            <div className="flex items-center justify-center gap-1.5 pt-1.5">
                              <Calendar className={`h-3.5 w-3.5 ${isActive ? "text-amber-400" : "text-gray-500"}`} />
                              <span className={`text-[10px] font-sans font-black uppercase tracking-wider ${
                                isActive ? "text-amber-400" : "text-gray-500"
                              }`}>
                                {tier.dateStr}
                              </span>
                            </div>
                          </div>

                          {/* Séparateur horizontal net */}
                          <div className="border-t border-white/10 my-4" />

                          {/* Liste des inclusions inspirée du modèle */}
                          <div className="space-y-4 pt-1">
                            {[
                              "Une formation pratique sur l'accès réel au financement.",
                              "Des ateliers au choix : Personal Branding, Marketing Digital, Pitcher son projet, Trouver des financements, Construire un réseau stratégique.",
                              "Des témoignages d'entrepreneurs malagasy ayant réussi ce parcours.",
                              "Une soirée networking cocktail VIP et une soirée de clôture avec spectacle culturel et concert.",
                              "Kit participant, sans frais annexes.",
                              "Pour les membres JCI, la formation certifiante, reconnue à l'international, est incluse."
                            ].map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className={`flex-shrink-0 h-4.5 w-4.5 rounded-full flex items-center justify-center border mt-0.5 ${
                                  isActive 
                                    ? "border-[#00A6DF]/40 bg-[#00A6DF]/10 text-[#00A6DF]" 
                                    : "border-gray-700 bg-gray-700/5 text-gray-500"
                                }`}>
                                  <Check className="h-2.5 w-2.5 stroke-[3]" />
                                </div>
                                <span className={`text-[11px] font-sans font-medium leading-relaxed ${
                                  isActive ? "text-white/90" : "text-gray-500"
                                }`}>
                                  {feature}
                                </span>
                              </div>
                            ))}

                            {/* Option d'hébergement dynamique */}
                            <div className="flex items-start gap-3 pt-1">
                              {hasAccommodation ? (
                                <>
                                  <div className={`flex-shrink-0 h-4.5 w-4.5 rounded-full flex items-center justify-center border mt-0.5 ${
                                    isActive 
                                      ? "border-[#00A6DF]/40 bg-[#00A6DF]/10 text-[#00A6DF]" 
                                      : "border-gray-700 bg-gray-700/5 text-gray-500"
                                  }`}>
                                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                                  </div>
                                  <span className={`text-[11px] font-sans font-medium leading-relaxed ${
                                    isActive ? "text-white/90" : "text-gray-500"
                                  }`}>
                                    Hébergement premium inclus (3 nuitées)
                                  </span>
                                </>
                              ) : (
                                <>
                                  <div className={`h-1.5 w-1.5 rounded-full mt-2 ml-1.5 flex-shrink-0 ${
                                    isActive ? "bg-amber-400 animate-pulse" : "bg-gray-700"
                                  }`} />
                                  <span className={`text-[11px] font-sans font-black leading-relaxed pl-1 ${
                                    isActive ? "text-amber-400" : "text-gray-500"
                                  }`}>
                                    Accès Solo (Hébergement non inclus)
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bouton d'action et sous-texte */}
                        <div className="mt-8 pt-4">
                          <button
                            type="button"
                            disabled={!isActive}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (isActive) {
                                const url = selectedProgram === "convention" ? "https://tally.so/r/dWVbEo" : "https://tally.so/r/MegLYX";
                                window.open(url, "_blank");
                              }
                            }}
                            className={`w-full py-3.5 px-6 rounded-xl font-sans font-black text-[11px] tracking-widest uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 relative overflow-hidden ${
                              !isActive
                                ? "bg-[#14152A] text-gray-500 border border-white/5 cursor-not-allowed"
                                : "bg-gradient-to-r from-[#00A6DF] to-amber-500 hover:from-amber-500 hover:to-[#00A6DF] text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/10 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-95"
                            }`}
                          >
                            <span>{isActive ? "S'INSCRIRE" : "BIENTÔT DISPONIBLE"}</span>
                            {isActive && <ArrowRight className="h-4 w-4" />}
                          </button>
                          
                          {/* Message de statut en bas */}
                          <span className="block text-center text-[10px] text-gray-500 font-sans mt-2.5">
                            {isActive ? "Redirection sécurisée" : `Ouverture le ${tier.id === "standard" ? "3 août" : "24 août"}`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>



                {/* Note de bas de page stratégique */}
                <div className="text-[11px] text-gray-400 font-sans font-medium leading-relaxed pt-4 text-center max-w-2xl mx-auto border-t border-white/10">
                  <p>
                    Munissez-vous de votre référence de transaction Orange Money avant de lancer le formulaire. L&apos;hébergement est attribué par le comité d&apos;organisation (COC) par ordre d&apos;inscription : les premiers inscrits sont favorisés pour l&apos;hôtel de premier choix (Choix 1).
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
