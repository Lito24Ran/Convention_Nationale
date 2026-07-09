import React, { useState, useEffect } from "react";
// Note : Si ton projet plante sur "motion/react", remplace simplement par "framer-motion"
import { Shield, Users, ArrowRight, X, Check, Wallet, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ImageRegistration from "../assets/images/WhatsApp Image 2026-06-17 at 08.27.09.jpeg";
import ImageRegisration2 from "../assets/images/CoventionN.jpeg";

type ProgramType = "convention" | "youth";

const PERIOD_CONFIG = {
  early: {
    id: "early",
    label: "EARLY BIRD",
    start: new Date("2026-07-11T00:00:00"),
    end: new Date("2026-08-02T23:59:59"),
    dateStr: "11 juillet → 2 Aout 2026",
    priceComplet: "500 000 AR",
    priceSolo: "350 000 AR"
  },
  standard: {
    id: "standard",
    label: "STANDARD",
    start: new Date("2026-08-03T00:00:00"),
    end: new Date("2026-08-23T23:59:59"),
    dateStr: "3 Aout → 23Aout 2026",
    priceComplet: "550 000 AR",
    priceSolo: "375 000 AR"
  },
  last: {
    id: "last",
    label: "LAST CHANCE",
    start: new Date("2026-08-24T00:00:00"),
    end: new Date("2026-09-13T23:59:59"),
    dateStr: "24 Aout → 13 septembre 2026",
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

  // Pré-sélectionner par défaut la période en cours à l'ouverture du modal
  useEffect(() => {
    if (modalOpen) {
      if (now <= PERIOD_CONFIG.early.end) {
        setSelectedTier("early");
      } else if (now <= PERIOD_CONFIG.standard.end) {
        setSelectedTier("standard");
      } else if (now <= PERIOD_CONFIG.last.end) {
        setSelectedTier("last");
      } else {
        setSelectedTier(null);
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
        
        {/* Headings de la section principale */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0D1537] tracking-tight uppercase">
            Inscription
          </h2>
          <p className="text-sm text-gray-400 font-sans mt-2">
            Réservez votre place officielle pour la Convention Nationale et le Youth Summit 2026.
          </p>
        </div>

        {/* Grille d'accès aux deux événements */}
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
                src={ImageRegisration2}
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
                src={ImageRegistration}
                alt="Youth Summit"
                className="w-full h-44 md:h-60 object-cover rounded-2xl shadow-md border border-gray-200 group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL FIDÈLE À IMAGE_DF7058.PNG AVEC BORDURE FLUIDE ET BOUTON CONTINUER ================= */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 15 }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="bg-white text-gray-900 rounded-[32px] shadow-2xl w-full max-w-4xl overflow-hidden relative z-50 flex flex-col max-h-[94vh]"
            >
              {/* Header Bleu Royal */}
              <div className="bg-[#1A3E7E] p-6 text-white relative flex flex-col items-center text-center flex-shrink-0">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-5 right-5 text-white/70 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5 stroke-[2.5]" />
                </button>

                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                  <Shield className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#00A6DF] font-bold block uppercase">
                  Sélection de formule
                </span>
                <h4 className="text-lg sm:text-xl font-sans font-black uppercase text-white tracking-wide mt-0.5">
                  {selectedProgram === "convention" ? "Convention Nationale 2026" : "Youth Summit 2026"}
                </h4>
              </div>
              
              <div className="h-1.5 bg-[#00A6DF] w-full flex-shrink-0" />

              {/* Corps du Modal */}
              <div className="overflow-y-auto flex-1 p-5 sm:p-8 space-y-6 text-left">
                
                {/* Sélecteur de type Onglet Pill */}
                {selectedProgram === "convention" && (
                  <div className="bg-[#E5E7EB] p-1 rounded-full flex items-center justify-center max-w-[260px] mx-auto">
                    <button
                      type="button"
                      onClick={() => setHasAccommodation(true)}
                      className={`flex-1 py-2 px-4 rounded-full text-xs font-sans font-bold transition-all duration-150 cursor-pointer text-center whitespace-nowrap ${
                        hasAccommodation ? "bg-[#1A3E7E] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Pack Complet
                    </button>
                    <button
                      type="button"
                      onClick={() => setHasAccommodation(false)}
                      className={`flex-1 py-2 px-4 rounded-full text-xs font-sans font-bold transition-all duration-150 cursor-pointer text-center whitespace-nowrap ${
                        !hasAccommodation ? "bg-[#1A3E7E] text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      Pack Solo
                    </button>
                  </div>
                )}

                {/* Grille avec animation de contour unifiée sur n'importe quel choix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                  {(Object.keys(PERIOD_CONFIG) as Array<keyof typeof PERIOD_CONFIG>).map((key) => {
                    const tier = PERIOD_CONFIG[key];
                    const isNotOpenYet = now < tier.start;
                    const isExpired = now > tier.end;
                    const isActive = !isNotOpenYet && !isExpired;
                    const isSelected = selectedTier === key;

                    const currentPrice = hasAccommodation ? tier.priceComplet : tier.priceSolo;

                    return (
                      <div
                        key={key}
                        onClick={() => {
                          if (!isExpired && !isNotOpenYet) {
                            setSelectedTier(key);
                          }
                        }}
                        className={`border-2 rounded-[22px] p-5 flex flex-col justify-between relative transition-all duration-300 select-none ${
                          isExpired
                            ? "bg-gray-50/60 border-gray-100 opacity-45 cursor-not-allowed"
                            : isNotOpenYet
                            ? "border-gray-200 bg-white opacity-90 cursor-not-allowed"
                            : "border-gray-200 hover:border-gray-300 bg-white cursor-pointer"
                        }`}
                      >
                        {/* EFFET DE CONTOUR EN MOUVEMENT/GLISSEMENT LOGIQUE D'UI */}
                        {isSelected && !isExpired && (
                          <motion.div
                            layoutId="activeCardContour"
                            className="absolute inset-0 border-2 border-[#1A3E7E] rounded-[22px] pointer-events-none ring-2 ring-[#1A3E7E]/20"
                            initial={false}
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}

                        {/* Badge Statut */}
                        <div className="absolute top-4 right-4 z-10">
                          {isExpired ? (
                            <span className="bg-red-500/10 text-red-600 text-[8px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
                              Expiré
                            </span>
                          ) : (
                            <span className="bg-[#FF8A65]/10 text-[#FF5722] text-[8px] font-sans font-black uppercase tracking-wider px-2 py-0.5 rounded-md">
                              {isActive ? "Actif" : "Bientôt"}
                            </span>
                          )}
                        </div>

                        {/* Titre & Prix */}
                        <div className="relative z-10">
                          <h5 className="text-sm font-sans font-black uppercase text-[#00A6DF] tracking-tight">
                            {tier.label}
                          </h5>
                          <span className={`text-2xl sm:text-3xl font-sans font-black text-black block mt-1 ${isExpired ? "line-through text-gray-400" : ""}`}>
                            {currentPrice}
                          </span>
                          <span className="text-[11px] text-gray-800 font-sans font-bold block mt-1">
                            {tier.dateStr}
                          </span>
                        </div>

                        {/* Inclusions internes */}
                        <div className="border-t border-gray-100 pt-4 mt-4 mb-5 relative z-10">
                          <ul className="space-y-1.5 text-[11px] text-gray-600 font-sans font-medium">
                            <li className="flex items-start gap-1.5">
                              <Check className="h-3.5 w-3.5 text-[#00A6DF] flex-shrink-0 mt-0.5" />
                              <span>3 déjeuners & 3 dîners inclus</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              <Check className="h-3.5 w-3.5 text-[#00A6DF] flex-shrink-0 mt-0.5" />
                              <span>5 pause-café + kit complet</span>
                            </li>
                            <li className="flex items-start gap-1.5">
                              {hasAccommodation ? (
                                <span className="text-[#1A3E7E] pl-5 font-bold">
                                  3 nuitées + 2 p.déjeuners
                                </span>
                              ) : (
                                <span className="text-amber-600 pl-5 font-bold flex items-center gap-1">
                                  <Info className="h-3 w-3 inline" /> Accès Solo (Sans hôtel)
                                </span>
                              )}
                            </li>
                          </ul>
                        </div>

                        {/* Bouton État Bas de carte */}
                        <button
                          type="button"
                          className={`w-full py-2 px-4 rounded-full font-sans font-bold text-xs tracking-wide transition-all text-center relative z-10 ${
                            isExpired
                              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                              : isSelected
                              ? "bg-[#1A3E7E] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {isExpired ? "Période révolue" : isNotOpenYet ? "Pas encore ouvert" : isSelected ? "Sélectionné" : "Choisir"}
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Section Jaune : Pack Premium / VIP */}
                {selectedProgram === "convention" && (
                  <div className="border-2 border-[#FFD54F] bg-[#FFFDE7] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <h5 className="text-xs font-sans font-black uppercase text-[#FF6F00] tracking-wide">
                        PACK PREMIUM / VIP
                      </h5>
                      <p className="text-[11px] text-gray-700 font-sans font-medium leading-relaxed max-w-xl">
                        Chambre individuelle premium non partagée, accès réseau VIP et placement prioritaire. Limité strictement à 5 places (Partenaires et officiels).
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0 self-end sm:self-center">
                      <span className="text-xl sm:text-2xl font-sans font-black text-black block">
                        850 000 AR
                      </span>
                    </div>
                  </div>
                )}

                {/* Note de validation */}
                <div className="text-[11px] text-gray-700 font-sans font-medium leading-relaxed pt-2">
                  <p>
                    <strong>Note de validation :</strong> Munissez-vous de votre référence de transaction Orange Money avant de lancer le formulaire. L&apos;attribution définitive des hébergements est coordonnée par le comité d&apos;organisation (COC).
                  </p>
                </div>

                {/* BOUTON CONTINUER DYNAMIQUE (Apparaît dès qu'un choix est fait) */}
                <AnimatePresence>
                  {selectedTier && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="pt-4 border-t border-gray-100 flex justify-end"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          const url = selectedProgram === "convention" ? "https://tally.so/r/dWVbEo" : "https://tally.so/r/MegLYX";
                          window.open(url, "_blank");
                        }}
                        className="w-full sm:w-auto py-3.5 px-10 rounded-full font-sans font-black text-xs uppercase tracking-wider text-white bg-[#1A3E7E] hover:bg-[#133063] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                      >
                        Continuer vers le formulaire
                        <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}