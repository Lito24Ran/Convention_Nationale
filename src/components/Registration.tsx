import React, { useState, useEffect } from "react";
import { Shield, Users, ArrowRight, X, Check, Award, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import JCi_image from "../assets/images/WhatsApp Image 2026-06-17 at 08.32.46.jpeg";
import JCI_IMAGE2 from "../assets/images/WhatsApp Image 2026-06-17 at 08.32.43.jpeg";

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
    <section
      id="registration"
      className="relative overflow-hidden py-24 bg-white border-b-[6px] border-[#00A6DF]"
    >
      {/* ================= BACKGROUND DECOR ================= */}

      {/* Halo principal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Halo bleu */}
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#00A6DF]/10 blur-[140px]" />

        {/* Halo jaune */}
        <div className="absolute right-0 top-40 w-[300px] h-[300px] rounded-full bg-[#F5C400]/10 blur-[120px]" />

        {/* Halo bleu foncé */}
        <div className="absolute -left-24 bottom-0 w-[350px] h-[350px] rounded-full bg-[#1A3E7E]/5 blur-[120px]" />
      </div>

      {/* Motif de points gauche */}
      <div className="absolute top-16 left-12 opacity-[0.05] hidden xl:block pointer-events-none">
        <div className="grid grid-cols-10 gap-3">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-[#1A3E7E]"
            />
          ))}
        </div>
      </div>

      {/* Cercles géométriques droite */}
      <div className="absolute top-16 right-20 opacity-[0.08] hidden xl:block pointer-events-none">
        <svg width="260" height="260" viewBox="0 0 260 260">
          <circle
            cx="130"
            cy="130"
            r="95"
            fill="none"
            stroke="#00A6DF"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
          <circle
            cx="130"
            cy="130"
            r="65"
            fill="none"
            stroke="#1A3E7E"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <circle
            cx="130"
            cy="130"
            r="35"
            fill="none"
            stroke="#F5C400"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Ligne décorative bas */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1440 150"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          fill="#00A6DF"
          d="M0,80L80,74C160,68,320,56,480,66C640,76,800,106,960,101C1120,96,1280,54,1360,32L1440,10V160H0Z"
        />
      </svg>

      {/* ================= CONTENU PRINCIPAL ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête */}
        <div className="text-left mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/90 px-3.5 py-1.5 rounded-full shadow-sm">
              <Shield className="w-4 h-4 text-[#00A6DF]" />
              <span className="text-[11px] font-extrabold tracking-wider text-[#1A3E7E] uppercase">INSCRIPTIONS</span>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-[#00A6DF] inline-block animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3E7E] tracking-tight uppercase">
            INSCRIPTION
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-sans mt-2">
            Réservez votre place officielle pour la <span className="font-bold text-[#1A3E7E]">Convention Nationale</span> et le <span className="font-bold text-[#1A3E7E]">Youth Summit 2026</span>.
          </p>
        </div>

        {/* Les deux cartes (Taille et structures strictement conservées) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* CARTE 1 : CONVENTION NATIONALE 2026 */}
          <div className="bg-[#0B337A] text-white rounded-[28px] p-7 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
            
            <div className="flex-1 flex flex-col justify-between space-y-6 relative z-10">
              <div>
                <div className="h-11 w-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-cyan-300 mb-5 border border-white/10">
                  <Shield className="h-5 w-5 stroke-[2]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase text-white">
                  CONVENTION <br /> NATIONALE 2026
                </h3>

                {/* Trait d'accentuation Cyan */}
                <div className="w-8 h-[2.5px] bg-[#00A6DF] rounded-full my-3 shadow-[0_0_8px_rgba(0,166,223,0.8)]" />

                <p className="text-xs sm:text-sm text-slate-200/90 font-sans leading-relaxed max-w-[240px]">
                  Le rendez-vous annuel des membres, dirigeants et partenaires de la JCI Madagascar.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {!isRegistrationClosedGlobal ? (
                  <button
                    onClick={() => openModal("convention")}
                    className="w-full font-sans font-bold text-xs tracking-wider py-3.5 px-6 rounded-2xl bg-[#00A6DF] hover:bg-[#0093c7] text-white uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_8px_25px_rgba(0,166,223,0.45)] hover:shadow-[0_10px_30px_rgba(0,166,223,0.65)]"
                  >
                    S&apos;INSCRIRE À LA CN
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full font-sans font-bold text-xs tracking-wider py-3.5 px-6 rounded-2xl bg-slate-700 text-slate-400 cursor-not-allowed uppercase flex items-center justify-center gap-2 select-none"
                  >
                    Inscriptions Clôturées
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </button>
                )}

                <p className="text-[11px] text-slate-300/80 font-sans flex items-center gap-2 pt-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  Validation sur référence Orange Money
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[200px] flex-shrink-0 flex items-center justify-center relative z-10 self-center">
              <img
                src={JCi_image}
                alt="JCI Convention"
                className="w-full h-48 sm:h-60 object-cover rounded-2xl shadow-lg border border-white/10 group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* CARTE 2 : YOUTH SUMMIT 2026 */}
          <div className="bg-white text-slate-900 rounded-[28px] p-7 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden group">
            
            <div className="flex-1 flex flex-col justify-between space-y-6 relative z-10">
              <div>
                <div className="h-11 w-11 rounded-2xl bg-slate-100/80 flex items-center justify-center text-[#0B337A] mb-5 border border-slate-200/40">
                  <Users className="h-5 w-5 stroke-[2]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase text-[#0B337A]">
                  YOUTH <br /> SUMMIT 2026
                </h3>

                {/* Trait d'accentuation Cyan */}
                <div className="w-8 h-[2.5px] bg-[#00A6DF] rounded-full my-3 shadow-[0_0_8px_rgba(0,166,223,0.5)]" />

                <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed max-w-[240px]">
                  Un forum inspirant dédié à l&apos;innovation, au leadership et à l&apos;impact des jeunes.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openModal("youth")}
                  className="w-full font-sans font-bold text-xs tracking-wider py-3.5 px-6 rounded-2xl bg-[#0B337A] hover:bg-[#08265c] text-white uppercase flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer shadow-[0_8px_25px_rgba(11,51,122,0.35)] hover:shadow-[0_10px_30px_rgba(11,51,122,0.5)]"
                >
                  S&apos;INSCRIRE AU YS
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>

                <p className="text-[11px] text-slate-400 font-sans flex items-center gap-2 pt-1">
                  <span className="h-2 w-2 rounded-full bg-slate-400 shrink-0" />
                  Confirmation immédiate par email
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[200px] flex-shrink-0 flex items-center justify-center relative z-10 self-center">
              <img
                src={JCI_IMAGE2}
                alt="Youth Summit"
                className="w-full h-48 sm:h-60 object-cover rounded-2xl shadow-md border border-slate-100 group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>

      {/* MODAL DE SÉLECTION (Inchangé) */}
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
              <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#00A6DF]/20 rounded-full blur-[110px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

              <div className="absolute top-6 right-6 z-50">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur-sm transition-colors border border-white/20 cursor-pointer"
                >
                  <X className="h-5 w-5 stroke-[2.5]" />
                </button>
              </div>

              <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#0C122E] via-[#101942] to-[#1F1D36] border-b border-amber-500/20 px-6 py-10 sm:px-12 sm:py-12 text-left">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
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
                      <div className="relative inline-block">
                        <h4 className="relative text-base sm:text-lg font-sans font-medium text-amber-400 italic">
                          Ouverture inscription
                        </h4>
                      </div>

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

                    <p className="text-xs text-gray-300 font-sans italic leading-relaxed max-w-xl pt-2 border-l-2 border-amber-500/40 pl-3">
                      &ldquo;Une génération construit ensemble. Une île se transforme.&rdquo;
                    </p>
                  </div>

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

              {/* Contenu principal du Modal */}
              <div className="p-6 sm:p-10 md:p-14 pt-8 md:pt-10 relative z-10 text-white space-y-6">
                
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left pt-4 px-2">
                  {(Object.keys(PERIOD_CONFIG) as Array<keyof typeof PERIOD_CONFIG>).map((key) => {
                    const tier = PERIOD_CONFIG[key];
                    const isActive = key === "early";
                    const currentPrice = hasAccommodation ? tier.priceComplet : tier.priceSolo;

                    const labelTranslations = {
                      early: "Early Bird",
                      standard: "STANDARD",
                      last: "DERNIÈRE CHANCE"
                    };

                    return (
                      <div
                        key={key}
                        onClick={() => {
                          if (isActive) setSelectedTier(key);
                        }}
                        className={`rounded-[32px] p-8 flex flex-col justify-between relative transition-all duration-300 select-none overflow-hidden ${
                          isActive
                            ? "bg-[#0D0E25] text-white border-2 border-amber-500/80 shadow-[0_15px_40px_rgba(245,158,11,0.15)] md:scale-[1.03] z-10"
                            : "bg-[#090A1A] text-gray-100 border border-white/5 opacity-70 cursor-not-allowed"
                        }`}
                      >
                        {isActive && (
                          <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 font-sans font-black text-[9px] tracking-widest uppercase px-4 py-1.5 rounded-bl-xl shadow-md">
                            OUVERT
                          </div>
                        )}

                        <div className="space-y-6">
                          <div className="flex justify-center pt-2">
                            <span className={`px-5 py-1.5 rounded-full text-[10px] font-sans font-black tracking-widest uppercase border ${
                              isActive 
                                ? "bg-amber-500/10 border-amber-500/25 text-amber-400" 
                                : "bg-white/5 border-white/10 text-gray-400"
                            }`}>
                              {labelTranslations[key]}
                            </span>
                          </div>

                          <div className="text-center space-y-1">
                            <span className="text-4xl font-sans font-black block tracking-tight text-white drop-shadow-md">
                              {currentPrice}
                            </span>
                            
                            <div className="flex items-center justify-center gap-1.5 pt-1.5">
                              <Calendar className={`h-3.5 w-3.5 ${isActive ? "text-amber-400" : "text-gray-500"}`} />
                              <span className={`text-[10px] font-sans font-black uppercase tracking-wider ${
                                isActive ? "text-amber-400" : "text-gray-500"
                              }`}>
                                {tier.dateStr}
                              </span>
                            </div>
                          </div>

                          <div className="border-t border-white/10 my-4" />

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
                                  isActive ? "text-white/90" : "text-gray-400/80"
                                }`}>
                                  {feature}
                                </span>
                              </div>
                            ))}

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
                                    isActive ? "text-white/90" : "text-gray-400/80"
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

                        <div className="mt-8 pt-4">
                          {isActive ? (
                            <div className="relative group w-full">
                              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#A855F7] via-[#00A6DF] to-[#10B981] opacity-60 group-hover:opacity-100 blur-lg transition-all duration-500 pointer-events-none" />
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const url = selectedProgram === "convention" ? "https://tally.so/r/dWVbEo" : "https://tally.so/r/MegLYX";
                                  window.open(url, "_blank");
                                }}
                                className="relative w-full py-3.5 px-6 bg-[#090A1F] hover:bg-[#0E0F2E] text-white rounded-2xl font-sans font-black text-[11px] tracking-widest uppercase active:scale-95 transition-all duration-300 cursor-pointer border border-white/10 flex items-center justify-center gap-2"
                              >
                                <span>S&apos;INSCRIRE</span>
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              disabled
                              className="w-full py-3.5 px-6 rounded-2xl font-sans font-black text-[11px] tracking-widest uppercase transition-all duration-300 text-center bg-[#14152A] text-gray-500 border border-white/5 cursor-not-allowed"
                            >
                              <span>BIENTÔT DISPONIBLE</span>
                            </button>
                          )}
                          
                          <span className="block text-center text-[10px] text-gray-500 font-sans mt-2.5">
                            {isActive ? "Redirection sécurisée" : `Ouverture le ${tier.id === "standard" ? "3 août" : "24 août"}`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

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