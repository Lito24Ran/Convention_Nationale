import React, { useState } from "react";
import { Shield, Users, ArrowRight, X, Check, Mail, Phone, User, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type ProgramType = "convention" | "youth";
type ModalStep = "pricing" | "form" | "success";

interface PricingTier {
  id: string;
  label: string;
  price: string;
  note: string;
  recommended?: boolean;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    id: "early",
    label: "Early Bird",
    price: "30 000 AR",
    note: "Tarif préférentiel de lancement",
    recommended: true,
    features: [
      "Accès à toutes les sessions",
      "Kit de bienvenue participant",
      "Pause-café et déjeuner inclus",
      "Attestation de participation numérique",
    ],
  },
  {
    id: "standard",
    label: "Standard",
    price: "60 000 AR",
    note: "Tarif normal d'inscription",
    features: [
      "Accès à toutes les sessions",
      "Kit de bienvenue participant",
      "Pause-café et déjeuner inclus",
      "Attestation de participation numérique",
    ],
  },
  {
    id: "last",
    label: "Last Chance",
    price: "100 000 AR",
    note: "Tarif tardif de dernière minute",
    features: [
      "Accès à toutes les sessions",
      "Kit de bienvenue participant",
      "Pause-café et déjeuner inclus",
      "Attestation de participation numérique",
    ],
  },
];

// Couleur violette dédiée au formulaire (étape 2), comme sur la maquette
const FORM_ACCENT = "#6D28D9";

export default function Registration() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>("convention");
  const [step, setStep] = useState<ModalStep>("pricing");
  const [selectedTier, setSelectedTier] = useState<string>("early");

  const [attendeeName, setAttendeeName] = useState("");
  const [attendeeEmail, setAttendeeEmail] = useState("");
  const [attendeePhone, setAttendeePhone] = useState("");
  const [attendeeOlm, setAttendeeOlm] = useState("");

  const openModal = (program: ProgramType) => {
    setSelectedProgram(program);
    setStep("pricing");
    setSelectedTier("early");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (step === "success") {
      setAttendeeName("");
      setAttendeeEmail("");
      setAttendeePhone("");
      setAttendeeOlm("");
    }
  };

  const handleContinue = () => {
    setStep("form");
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (attendeeName.trim() && attendeeEmail.trim()) {
      setStep("success");
    }
  };

  const accentColor = selectedProgram === "convention" ? "#00A6DF" : "#1A3E7E";
  const headerBg = selectedProgram === "convention" ? "#1A3E7E" : "#0A0D1D";
  const selectedTierData = pricingTiers.find((t) => t.id === selectedTier);

  return (
    <section 
      id="registration" 
      className="py-16 md:py-24 bg-white text-gray-950 scroll-mt-12 relative border-b-[6px] border-[#00A6DF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings matching the screenshot layout */}
        <div className="max-w-6xl mx-auto text-left mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#0D1537] tracking-tight">
            Inscription
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans mt-2">
            Réservez votre place pour la Convention Nationale et le Youth Summit 2026.
          </p>
        </div>

        {/* Dynamic Dual columns grid matching the graphic cards exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Convention Nationale (Dark Blue theme) */}
          <div className="bg-[#1A3E7E] text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-stretch justify-between gap-6 shadow-2xl overflow-hidden relative group hover:shadow-3xl transition-all duration-300">
            {/* Elegant glowing background highlight */}
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
            
            {/* Left Content column inside Card 1 */}
            <div className="flex-1 flex flex-col justify-between space-y-6 text-left relative z-10">
              <div>
                {/* Shield badge */}
                <div className="h-11 w-11 rounded-full bg-white/15 flex items-center justify-center text-white mb-5">
                  <Shield className="h-5.5 w-5.5 stroke-[2]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight leading-snug uppercase">
                  CONVENTION <br className="hidden sm:inline" /> NATIONALE 2026
                </h3>

                <p className="text-[13px] sm:text-sm text-white/85 leading-relaxed font-sans mt-3 max-w-[300px]">
                  Le rendez-vous annuel des membres, dirigeants et partenaires de la JCI Madagascar.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  id="btn-register-cn"
                  onClick={() => openModal("convention")}
                  className="w-full bg-[#00A6DF] hover:bg-sky-400 text-white font-sans font-extrabold text-xs sm:text-sm tracking-wider py-3.5 px-6 rounded-xl uppercase flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md hover:shadow-sky-500/20 cursor-pointer select-none"
                >
                  S&apos;inscrire à la CN
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>

                <div className="space-y-0.5">
                  <p className="text-[11px] text-white/60 font-sans tracking-wide">
                    Inscription rapide et sécurisée
                  </p>
                  <p className="text-[11px] text-white/95 font-sans tracking-wide font-medium flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    Confirmation immédiate par email
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image column inside Card 1 */}
            <div className="w-full md:w-[220px] lg:w-[210px] xl:w-[230px] flex-shrink-0 flex items-center justify-center relative z-10 self-center">
              <img
                src="/src/assets/images/convention_venue_blog_1782117221629.jpg"
                alt="JCI Convention"
                referrerPolicy="no-referrer"
                className="w-full h-48 md:h-full max-h-[220px] md:max-h-[250px] object-cover rounded-2xl shadow-lg border border-white/10 group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Card 2: Youth Summit (White theme with deep gray shadow) */}
          <div className="bg-white text-gray-900 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-stretch justify-between gap-6 shadow-xl border border-gray-100 overflow-hidden relative group hover:shadow-2xl transition-all duration-300">
            {/* Elegant glowing background highlight */}
            <div className="absolute -top-10 -right-10 h-32 w-32 bg-[#1A3E7E]/5 rounded-full blur-2xl pointer-events-none" />
            
            {/* Left Content column inside Card 2 */}
            <div className="flex-1 flex flex-col justify-between space-y-6 text-left relative z-10">
              <div>
                {/* Users badge */}
                <div className="h-11 w-11 rounded-full bg-sky-50 flex items-center justify-center text-[#00A6DF] mb-5">
                  <Users className="h-5.5 w-5.5 stroke-[2]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight leading-snug uppercase text-[#1A3E7E]">
                  YOUTH <br className="hidden sm:inline" /> SUMMIT 2026
                </h3>

                <p className="text-[13px] sm:text-sm text-gray-500 leading-relaxed font-sans mt-3 max-w-[300px]">
                  Un forum dédié à la jeunesse et à l&apos;innovation pour construire le futur.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  id="btn-register-ys"
                  onClick={() => openModal("youth")}
                  className="w-full bg-[#1A3E7E] hover:bg-[#133063] text-white font-sans font-extrabold text-xs sm:text-sm tracking-wider py-3.5 px-6 rounded-xl uppercase flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 shadow-md hover:shadow-[#1A3E7E]/20 cursor-pointer select-none"
                >
                  S&apos;inscrire au YS
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </button>

                <div className="space-y-0.5">
                  <p className="text-[11px] text-gray-400 font-sans tracking-wide">
                    Inscription rapide et sécurisée
                  </p>
                  <p className="text-[11px] text-[#1A3E7E] font-sans tracking-wide font-medium flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#1A3E7E] animate-pulse" />
                    Confirmation immédiate par email
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image column inside Card 2 */}
            <div className="w-full md:w-[220px] lg:w-[210px] xl:w-[230px] flex-shrink-0 flex items-center justify-center relative z-10 self-center">
              <img
                src="/src/assets/images/convention_group_selfie_1782117207138.jpg"
                alt="Youth Summit Selfie"
                referrerPolicy="no-referrer"
                className="w-full h-48 md:h-full max-h-[220px] md:max-h-[250px] object-cover rounded-2xl shadow-lg border border-gray-100 group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Modal: Étape 1 = choix de formule, Étape 2 = formulaire, Étape 3 = succès */}
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

            {/* ================= ÉTAPE 1 : PRICING ================= */}
            {step === "pricing" && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-3xl overflow-hidden relative z-50 flex flex-col max-h-[90vh]"
              >
                {/* Header centré */}
                <div
                  className="p-6 text-white relative flex flex-col items-center text-center"
                  style={{ backgroundColor: headerBg }}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#00A6DF]" />

                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="h-11 w-11 rounded-full bg-white/15 flex items-center justify-center text-white mb-2">
                    {selectedProgram === "convention" ? (
                      <Shield className="h-5.5 w-5.5" />
                    ) : (
                      <Users className="h-5.5 w-5.5" />
                    )}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00A6DF] font-bold block">
                    Sélection de formule
                  </span>
                  <h4 className="text-base sm:text-lg font-sans font-black uppercase text-white tracking-tight -mt-0.5">
                    {selectedProgram === "convention" ? "Convention Nationale 2026" : "Youth Summit 2026"}
                  </h4>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                  <p className="text-sm text-gray-500 font-sans text-center mb-6">
                    Choisissez la formule d&apos;inscription qui correspond le mieux à vos attentes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {pricingTiers.map((tier) => {
                      const isSelected = selectedTier === tier.id;
                      return (
                        <div
                          key={tier.id}
                          className={`relative text-left rounded-2xl border-2 p-4 flex flex-col transition-all duration-200 ${
                            isSelected ? "shadow-lg border-[#1A3E7E]" : "border-gray-100"
                          }`}
                        >
                          {tier.recommended && (
                            <span className="absolute -top-3 left-4 bg-[#F5C400] text-[#0D1537] text-[10px] font-sans font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                              Recommandé
                            </span>
                          )}

                          <span className="text-xs font-sans font-black uppercase tracking-tight text-[#00A6DF] mt-2">
                            {tier.label}
                          </span>
                          <span className="text-2xl font-sans font-black text-[#0D1537] mt-1">
                            {tier.price}
                          </span>
                          <span className="text-[11px] text-gray-400 font-sans mb-3">
                            {tier.note}
                          </span>

                          <div className="border-t border-gray-100 pt-3 mb-4">
                            <ul className="space-y-2">
                              {tier.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-start gap-1.5 text-[12px] text-gray-600 font-sans"
                                >
                                  <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-[#00A6DF]" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <button
                            type="button"
                            onClick={() => setSelectedTier(tier.id)}
                            className={`mt-auto w-full py-2.5 rounded-xl font-sans font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none ${
                              isSelected
                                ? "bg-[#1A3E7E] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {isSelected ? "Formule Sélectionnée" : "Choisir"}
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <div className="border-t border-gray-100 mt-6 pt-6">
                    <button
                      type="button"
                      onClick={handleContinue}
                      className="w-full py-4 rounded-2xl font-sans font-extrabold text-sm uppercase tracking-wider text-white transition-all duration-200 active:scale-98 shadow-lg cursor-pointer select-none flex items-center justify-center gap-2 bg-[#1A3E7E] hover:bg-[#133063]"
                    >
                      Continuer
                      <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ================= ÉTAPE 2 : FORMULAIRE (violet) ================= */}
            {step === "form" && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden relative z-50 flex flex-col max-h-[90vh]"
              >
                {/* Header */}
                <div className="p-6 relative bg-white">
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: FORM_ACCENT }}
                  />
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <span
                    className="text-[10px] uppercase font-mono tracking-widest font-bold block"
                    style={{ color: FORM_ACCENT }}
                  >
                    Formulaire d&apos;inscription
                  </span>
                  <h4 className="text-lg sm:text-xl font-sans font-black text-gray-900 tracking-tight -mt-0.5">
                    Informations de contact JCI
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 font-sans mt-1">
                    Formule sélectionnée :{" "}
                    <span className="font-bold" style={{ color: FORM_ACCENT }}>
                      {selectedTierData?.label.toUpperCase()} ({selectedTierData?.price})
                    </span>
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 sm:p-8 overflow-y-auto flex-1">
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    
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
                          value={attendeeName}
                          onChange={(e) => setAttendeeName(e.target.value)}
                          placeholder="Ex: Randrianaivoson Azaria"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none focus:ring-2"
                          style={{ ["--tw-ring-color" as any]: `${FORM_ACCENT}33` }}
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
                          value={attendeeEmail}
                          onChange={(e) => setAttendeeEmail(e.target.value)}
                          placeholder="Ex: monadresse@gmail.com"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none focus:ring-2"
                          style={{ ["--tw-ring-color" as any]: `${FORM_ACCENT}33` }}
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
                          value={attendeePhone}
                          onChange={(e) => setAttendeePhone(e.target.value)}
                          placeholder="Ex: +261 34 00 000 00"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none focus:ring-2"
                          style={{ ["--tw-ring-color" as any]: `${FORM_ACCENT}33` }}
                        />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="block text-[11px] font-sans font-bold uppercase text-gray-500 tracking-wider">
                        Organisation / JCI OLM <span className="text-gray-400">(Optionnel)</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                          <Award className="h-4.5 w-4.5" />
                        </span>
                        <input
                          type="text"
                          value={attendeeOlm}
                          onChange={(e) => setAttendeeOlm(e.target.value)}
                          placeholder="Ex: JCI Iarivo / JCI Madagascar"
                          className="w-full bg-gray-50 hover:bg-gray-100 focus:bg-white border border-gray-200 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-900 font-sans transition-all focus:outline-none focus:ring-2"
                          style={{ ["--tw-ring-color" as any]: `${FORM_ACCENT}33` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => setStep("pricing")}
                        className="px-6 py-3.5 rounded-2xl font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer select-none"
                      >
                        Retour
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3.5 rounded-2xl font-sans font-extrabold text-xs sm:text-sm uppercase tracking-wider text-white transition-all duration-200 active:scale-98 shadow-lg cursor-pointer select-none"
                        style={{ backgroundColor: FORM_ACCENT }}
                      >
                        Valider mon Inscription
                      </button>
                    </div>

                    <p className="text-[10px] text-gray-400 text-center font-sans mt-3">
                      En validant, vous acceptez de recevoir une confirmation d&apos;accès numérique par email. Vos informations sont entièrement protégées.
                    </p>

                  </form>
                </div>
              </motion.div>
            )}

            {/* ================= ÉTAPE 3 : SUCCÈS ================= */}
            {step === "success" && (
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white text-gray-900 rounded-3xl shadow-2xl border border-gray-100 w-full max-w-lg overflow-hidden relative z-50 flex flex-col"
              >
                <div className="p-6 relative bg-white">
                  <div
                    className="absolute top-0 left-0 right-0 h-1.5"
                    style={{ backgroundColor: FORM_ACCENT }}
                  />
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-6 sm:px-8 pb-8">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-2 space-y-4"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2">
                      <Shield className="h-8 w-8 stroke-[2.5]" />
                    </div>
                    
                    <h5 className="text-xl font-sans font-black text-gray-900 uppercase tracking-tight">
                      Réservation validée !
                    </h5>
                    
                    <div className="bg-gray-50 rounded-2xl p-4 text-xs text-gray-600 font-sans text-left space-y-2.5 max-w-sm mx-auto border border-gray-200/50">
                      <p>
                        Félicitations <strong>{attendeeName}</strong> ! Votre inscription au programme{" "}
                        <strong>{selectedProgram === "convention" ? "Convention Nationale" : "Youth Summit"} 2026</strong>{" "}
                        (formule <strong>{selectedTierData?.label}</strong>) a bien été enregistrée.
                      </p>
                      <p>
                        Un e-mail de confirmation instantanée a été envoyé à <strong>{attendeeEmail}</strong> contenant vos accès d&apos;accréditation temporaires.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-900 hover:bg-[#1A3E7E] text-white font-sans font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-150 cursor-pointer"
                      >
                        Retour au site
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

          </div>
        )}
      </AnimatePresence>
    </section>
  );
}