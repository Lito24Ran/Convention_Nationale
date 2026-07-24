import React, { useState, useMemo } from "react";
import { FAQS } from "../types";
import { Plus, X, Search, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
  { id: "all", label: "Tout" },
  { id: "Général", label: "Général" },
  { id: "Inscriptions", label: "Inscriptions & Tarifs" },
  { id: "Hébergement", label: "Hébergement" },
  { id: "Programme", label: "Programme & Logistique" },
  { id: "Youth Summit", label: "Youth Summit" },
  { id: "Contact", label: "Contact" }
];

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Inscriptions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  // Filter FAQs based on category AND search query
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Split FAQs into two columns for beautiful side-by-side presentation
  const leftColFaqs = useMemo(() => filteredFaqs.filter((_, idx) => idx % 2 === 0), [filteredFaqs]);
  const rightColFaqs = useMemo(() => filteredFaqs.filter((_, idx) => idx % 2 !== 0), [filteredFaqs]);

  return (
    <section 
      id="faq" 
      className="py-20 md:py-28 bg-[#FAFBFD] text-gray-950 scroll-mt-12 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from screenshot layout */}
        <div className="text-center mb-12 space-y-4 select-none">
          <span className="block text-xs font-sans font-bold uppercase tracking-[0.2em] text-gray-500">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-none text-gray-950 max-w-2xl mx-auto uppercase">
            Questions Fréquentes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans max-w-xl mx-auto">
            Trouvez rapidement des réponses à toutes vos questions concernant la Convention Nationale JCI et le Youth Summit 2026.
          </p>
        </div>

        {/* Search & Filter Controls Container */}
        <div className="max-w-3xl mx-auto mb-10 space-y-6">
          {/* Search Input Box */}
          <div className="relative">
            <div className="absolute inset-y-0 left-4.5 flex items-center pointer-events-none text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenFaqId(null); // Close active to avoid confusion
              }}
              placeholder="Rechercher une question ou un mot-clé (ex: tarif, hébergement)..."
              className="w-full bg-[#F3F5F8] border border-gray-200/50 rounded-full py-4.5 pl-12 pr-10 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#00A6DF]/30 focus:bg-white transition-all text-gray-900 placeholder:text-gray-400 font-medium shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Category Tabs Scroll Area */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setOpenFaqId(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#00A6DF] text-white shadow-md shadow-[#00A6DF]/20"
                      : "bg-[#EEF4F8] text-gray-600 hover:bg-[#E5EEF4] hover:text-gray-900"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic customized Accordion stack in two columns */}
        {filteredFaqs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {leftColFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={faq.id}
                      id={`faq-item-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className={`transition-all duration-300 border border-transparent select-none cursor-pointer text-left ${
                        isOpen
                          ? "bg-[#F3F5F8] rounded-[24px] p-5 sm:p-6 shadow-sm border-gray-200/50"
                          : "bg-[#EEF4F8] rounded-[24px] p-5 hover:bg-[#E5EEF4]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <span className="inline-block text-[9px] font-sans font-bold uppercase tracking-wider text-[#00A6DF] bg-[#00A6DF]/10 px-2 py-0.5 rounded-md mb-2">
                            {faq.category}
                          </span>
                          <h3 
                            className={`font-sans font-extrabold tracking-tight transition-all duration-200 ${
                              isOpen 
                                ? "text-base text-gray-950 animate-fade-in" 
                                : "text-sm sm:text-base text-gray-900"
                            }`}
                          >
                            {faq.question}
                          </h3>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="text-sm text-gray-600 font-sans font-normal leading-relaxed whitespace-pre-line">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="flex-shrink-0 mt-0.5">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm bg-white border border-gray-100"
                          >
                            {isOpen ? (
                              <X className="h-4 w-4 text-gray-800 stroke-[2.5]" />
                            ) : (
                              <Plus className="h-4 w-4 text-gray-800 stroke-[2.5]" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {rightColFaqs.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={faq.id}
                      id={`faq-item-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className={`transition-all duration-300 border border-transparent select-none cursor-pointer text-left ${
                        isOpen
                          ? "bg-[#F3F5F8] rounded-[24px] p-5 sm:p-6 shadow-sm border-gray-200/50"
                          : "bg-[#EEF4F8] rounded-[24px] p-5 hover:bg-[#E5EEF4]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <span className="inline-block text-[9px] font-sans font-bold uppercase tracking-wider text-[#00A6DF] bg-[#00A6DF]/10 px-2 py-0.5 rounded-md mb-2">
                            {faq.category}
                          </span>
                          <h3 
                            className={`font-sans font-extrabold tracking-tight transition-all duration-200 ${
                              isOpen 
                                ? "text-base text-gray-950 animate-fade-in" 
                                : "text-sm sm:text-base text-gray-900"
                            }`}
                          >
                            {faq.question}
                          </h3>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                              >
                                <p className="text-sm text-gray-600 font-sans font-normal leading-relaxed whitespace-pre-line">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="flex-shrink-0 mt-0.5">
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm bg-white border border-gray-100"
                          >
                            {isOpen ? (
                              <X className="h-4 w-4 text-gray-800 stroke-[2.5]" />
                            ) : (
                              <Plus className="h-4 w-4 text-gray-800 stroke-[2.5]" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 px-4 bg-[#F3F5F8] rounded-[28px] border border-dashed border-gray-200"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-3">
                <Filter className="h-6 w-6" />
              </div>
              <h3 className="text-base font-sans font-bold text-gray-900">Aucun résultat trouvé</h3>
              <p className="text-sm text-gray-500 font-sans max-w-sm mx-auto mt-1">
                Nous n&apos;avons trouvé aucun élément correspondant à vos critères de recherche &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-4 px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-xs font-sans font-bold rounded-full shadow-sm text-gray-700 transition-all cursor-pointer"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          </div>
        )}

        {/* Secondary support footer contact cue */}
        <div className="mt-14 text-center">
          <p className="text-xs text-gray-400 font-sans">
            Des questions supplémentaires sur la JCI Convention ? Écrivez-nous à :{" "}
            <a 
              href="mailto:cn@jcimada.org" 
              className="text-[#00A6DF] font-bold hover:underline"
            >
              cn@jcimada.org
            </a>
            {/* {" "}ou à{" "} */}
            {/* <a 
              href="mailto:bliarivo@googlegroups.com" 
              className="text-[#00A6DF] font-bold hover:underline"
            >
              bliarivo@googlegroups.com
            </a> */}
          </p>
        </div>

      </div>
    </section>
  );
}
