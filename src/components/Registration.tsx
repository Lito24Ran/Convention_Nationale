import React, { useState, useEffect } from "react";
// Note : Si ton projet plante sur "motion/react", remplace par "framer-motion"
import { Shield, Users, ArrowRight, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ImageRegistration from "../assets/images/WhatsApp Image 2026-06-17 at 08.27.09.jpeg";
import ImageRegisration2 from "../assets/images/CoventionN.jpeg";

type ProgramType = "convention" | "youth";

const PERIOD_CONFIG = {
  early: {
    id: "early",
    label: "Early Bird",
    start: new Date("2026-07-11T00:00:00"),
    end: new Date("2026-08-02T23:59:59"),
    dateStr: "11 juillet → 2 Août 2026",
    priceComplet: "500 000 AR",
    priceSolo: "350 000 AR"
  },
  standard: {
    id: "standard",
    label: "Standard",
    start: new Date("2026-08-03T00:00:00"),
    end: new Date("2026-08-23T23:59:59"),
    dateStr: "3 Août → 23 Août 2026",
    priceComplet: "550 000 AR",
    priceSolo: "375 000 AR"
  },
  last: {
    id: "last",
    label: "Last Chance",
    start: new Date("2026-08-24T00:00:00"),
    end: new Date("2026-09-13T23:59:59"),
    dateStr: "24 Août → 13 septembre 2026",
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

  // Pré-sélection automatique de la période active au chargement
  useEffect(() => {
    if (modalOpen) {
      if (now <= PERIOD_CONFIG.early.end) {
        setSelectedTier("early");
      } else if (now <= PERIOD_CONFIG.standard.end) {
        setSelectedTier("standard");
      } else if (now <= PERIOD_CONFIG.last.end) {
        setSelectedTier("last");
      } else {
        setSelectedTier("early");
      }
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

        {/* Grille des boutons d'accès initiaux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Carte d'appel : Convention Nationale */}
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
                src={ImageRegisration2}
                alt="JCI Convention"
                className="w-full h-44 md:h-60 object-cover rounded-2xl shadow-md border border-white/10 group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Carte d'appel : Youth Summit */}
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
                src={ImageRegistration}
                alt="Youth Summit"
                className="w-full h-44 md:h-60 object-cover rounded-2xl shadow-md border border-gray-200 group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL DE SELECTION INTERACTIF (STYLE IMAGE_4317C6.PNG) ================= */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Voile d'arrière-plan flouté sombre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Conteneur de grille transparent sans boîte blanche d'arrière-plan */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-4xl overflow-y-auto max-h-[96vh] relative z-50 px-2 sm:px-6 py-4 flex flex-col space-y-8 scrollbar-none"
            >
              {/* Bouton croix de fermeture */}
              <div className="absolute top-2 right-4 sm:right-6 z-50">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5 stroke-[2.5]" />
                </button>
              </div>

              {/* Titre minimaliste haut de page */}
              <div className="text-center space-y-1">
                <h4 className="text-xl sm:text-3xl font-sans font-black uppercase text-white tracking-tight">
                  {selectedProgram === "convention" ? "CONVENTION NATIONALE 2026" : "YOUTH SUMMIT 2026"}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 font-sans">
                  No contracts. No surprise fees.
                </p>
              </div>

              {/* Onglets Pilule style épuré */}
              {selectedProgram === "convention" && (
                <div className="bg-white/10 border border-white/10 p-1 rounded-full flex items-center justify-center max-w-[240px] mx-auto shadow-inner backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setHasAccommodation(true)}
                    className={`flex-1 py-2 px-4 rounded-full text-[10px] font-sans font-black uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
                      hasAccommodation 
                        ? "bg-[#1A3E7E] text-white shadow-md" 
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
                        ? "bg-[#1A3E7E] text-white shadow-md" 
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    Pack Solo
                  </button>
                </div>
              )}

              {/* Grille des 3 modèles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-left pt-2 px-2">
                {(Object.keys(PERIOD_CONFIG) as Array<keyof typeof PERIOD_CONFIG>).map((key) => {
                  const tier = PERIOD_CONFIG[key];
                  const isSelected = selectedTier === key;
                  
                  // Vérification de la disponibilité réelle par rapport aux dates configurées
                  // const isNotOpenYet = now < tier.start;
                  // const isExpired = now > tier.end;
                  // const isActive = !isNotOpenYet && !isExpired;

                  // Force l'activation UNIQUEMENT pour l'Early Bird
                  const isActive = key === "early";
                  const isNotOpenYet = key !== "early" && now < tier.start;
                  const isExpired = key !== "early" && now > tier.end;

                  const currentPrice = hasAccommodation ? tier.priceComplet : tier.priceSolo;

                  return (
                    <div
                      key={key}
                      onClick={() => setSelectedTier(key)} // Reste toujours cliquable pour tester la flottaison et l'animation bleue !
                      className={`rounded-3xl p-7 flex flex-col justify-between relative transition-all duration-300 select-none cursor-pointer ${
                        isSelected
                          ? "bg-[#1A3E7E] text-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] md:scale-105 z-10 border-none min-h-[540px]"
                          : "bg-white text-gray-900 border border-gray-100 shadow-xl min-h-[480px] opacity-85 hover:opacity-100 hover:scale-[1.01]"
                      }`}
                    >
                      {/* En-tête interne de la carte */}
                      <div>
                        {/* Prix prédominant */}
                        <span className={`text-3xl font-sans font-black block tracking-tight ${
                          isSelected ? "text-white" : "text-gray-950"
                        }`}>
                          {currentPrice}
                        </span>

                        {/* Titre de l'offre */}
                        <h5 className={`text-base font-sans font-black uppercase mt-1 tracking-wide ${
                          isSelected ? "text-cyan-400" : "text-[#1A3E7E]"
                        }`}>
                          {tier.label}
                        </h5>

                        {/* Dates d'application */}
                        <span className={`text-[11px] font-sans font-bold block mt-2 ${
                          isSelected ? "text-white/70" : "text-gray-400"
                        }`}>
                          {tier.dateStr}
                        </span>

                        {/* Inclusions textuelles */}
                        <div className={`border-t pt-5 mt-5 ${
                          isSelected ? "border-white/10" : "border-gray-100"
                        }`}>
                          <ul className="space-y-3 text-[11px] font-sans font-medium">
                            <li className="flex items-start gap-2.5">
                              <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                                isSelected ? "text-white" : "text-[#00A6DF]"
                              }`} />
                              <span className={isSelected ? "text-white/90" : "text-gray-600"}>
                                3 déjeuners & 3 dîners inclus
                              </span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                                isSelected ? "text-white" : "text-[#00A6DF]"
                              }`} />
                              <span className={isSelected ? "text-white/90" : "text-gray-600"}>
                                5 pause-café + kit complet
                              </span>
                            </li>
                            <li className="flex items-start gap-2.5">
                              <div className="pl-6.5">
                                {hasAccommodation ? (
                                  <span className={`font-bold ${isSelected ? "text-cyan-300" : "text-[#1A3E7E]"}`}>
                                    3 nuitées + 2 p.déjeuners
                                  </span>
                                ) : (
                                  <span className={`font-bold ${isSelected ? "text-amber-300" : "text-amber-600"}`}>
                                    Accès Solo (Sans hôtel)
                                  </span>
                                )}
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Bouton d'action interne unique avec blocage de sécurité */}
                      <button
                        type="button"
                        disabled={!isActive} // Désactive nativement l'élément HTML si l'offre n'est pas disponible
                        onClick={(e) => {
                          e.stopPropagation(); // Évite les doublons de clic avec la carte parente
                          if (isActive) {
                            const url = selectedProgram === "convention" ? "https://tally.so/r/dWVbEo" : "https://tally.so/r/MegLYX";
                            window.open(url, "_blank");
                          }
                        }}
                        className={`w-full py-3 px-4 rounded-full font-sans font-black text-xs tracking-wide transition-all text-center mt-6 shadow-sm ${
                          !isActive
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200" // État désactivé (Expiré ou Pas ouvert)
                            : isSelected
                            ? "bg-white text-[#1A3E7E] hover:bg-gray-50 font-black cursor-pointer"
                            : "bg-[#1A3E7E] text-white hover:bg-[#133063] font-bold cursor-pointer"
                        }`}
                      >
                        {isExpired ? "Expiré" : isNotOpenYet ? "Bientôt" : "S'inscrire"}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Notice informative de bas de page */}
              <div className="text-[11px] text-gray-300 font-sans font-medium leading-relaxed pt-4 text-center max-w-2xl mx-auto border-t border-white/10">
                <p>
                  <strong>Note de validation :</strong> Munissez-vous de votre référence de transaction Orange Money avant de lancer le formulaire. L&apos;attribution définitive des hébergements est coordonnée par le comité d&apos;organisation (COC).
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}