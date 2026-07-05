import { useState, useEffect } from "react";
import { Clock, MapPin, Filter, ChevronDown, Calendar } from "lucide-react";
import { SESSIONS, SPEAKERS } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Program() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const categories = ["Tous", "Conférence","Cérémonie","Networking","Soirée", "Atelier","Panel"];

  // Dynamically balance sessions into Day 1, Day 2 or Day 3 to handle content scale safely
  const getSessionDay = (id: string) => {
    const index = SESSIONS.findIndex((s) => s.id === id);
    if (index < 13) return 1;
    if (index < 27) return 2;
    return 3; 
  };

  // Filter based on both Day and Format Categories
  const filteredSessions = SESSIONS.filter((session) => {
    const sessionDay = getSessionDay(session.id);
    if (sessionDay !== activeDay) return false;
    if (activeCategory === "Tous") return true;
    return session.category === activeCategory;
  });

  // Accordion toggle
  const toggleSession = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Helper check for Expand/Collapse All
  const isAllExpanded = filteredSessions.length > 0 && filteredSessions.every((s) => expandedIds[s.id]);
  
  const toggleAll = () => {
    if (isAllExpanded) {
      setExpandedIds((prev) => {
        const next = { ...prev };
        filteredSessions.forEach((s) => {
          next[s.id] = false;
        });
        return next;
      });
    } else {
      setExpandedIds((prev) => {
        const next = { ...prev };
        filteredSessions.forEach((s) => {
          next[s.id] = true;
        });
        return next;
      });
    }
  };

  // Auto-expand the first session of the newly selected day to guide interactive discoverability
  useEffect(() => {
    if (filteredSessions.length > 0) {
      const firstId = filteredSessions[0].id;
      setExpandedIds((prev) => {
        if (prev[firstId] === undefined) {
          return { ...prev, [firstId]: true };
        }
        return prev;
      });
    }
  }, [activeDay]);

  return (
    <section id="program" className="py-20 md:py-28 bg-[#0F1026] text-white scroll-mt-12 relative overflow-hidden">
      
      {/* Background ambient light flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00A6DF]/5 rounded-full blur-3xl pointer-events-none" />

     {/* Photo décorative en haut à droite avec fondu sur tous les bords */}
      <div className="absolute top-0 right-0 w-[55%] sm:w-[60%] lg:w-[65%] h-[380px] sm:h-[460px] lg:h-[520px] pointer-events-none select-none">
        <img
          src="/src/assets/images/Conferene_JCI.png"
          alt=""
          className="w-full h-full object-cover"
          style={{
            maskImage: "radial-gradient(ellipse 70% 65% at 60% 40%, black 40%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 60% 40%, black 40%, transparent 85%)",
          }}
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
       {/* Title and category selector */}
      <div className="flex flex-col gap-4 mb-12">
        <div className="max-w-xl text-left space-y-4">
          <span className="text-xs font-mono tracking-wider uppercase font-black text-[#00A6DF] block">
            Convention Nationale 2026 · 3 jours
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight leading-none uppercase">
            Programme
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Planifiez votre parcours personnalisé sur 3 jours. Cliquez sur les sessions pour afficher les détails et les biographies des intervenants.
          </p>
        </div>

      {/* Quick controls: Expand/Collapse All — repositionné sous le texte, aligné à gauche */}
      {filteredSessions.length > 0 && (
        <button
          onClick={toggleAll}
          className="text-xs font-semibold tracking-wide text-[#00A6DF] hover:text-white transition-colors underline underline-offset-4 cursor-pointer self-start"
        >
          {isAllExpanded ? "Tout replier" : "Tout déplier"}
        </button>
      )}
    </div>

        {/* Dynamic Dual-Filter Panel (Days + Format) */}
        <div className="bg-[#151631]/80 border border-white/5 rounded-3xl p-4 sm:p-6 mb-10 max-w-5xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          
          {/* Day selection tabs — style onglet sobre plutôt que 3 boutons pilule identiques */}
          <div className="flex items-center gap-6 border-b border-white/10 self-start md:self-auto w-full md:w-auto">
            <button
              onClick={() => setActiveDay(1)}
              className={`relative px-1 py-3 font-sans text-xs sm:text-sm font-black tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeDay === 1 ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Jour 1</span>
              {activeDay === 1 && (
                <motion.span
                  layoutId="day-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#00A6DF]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`relative px-1 py-3 font-sans text-xs sm:text-sm font-black tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeDay === 2 ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Jour 2</span>
              {activeDay === 2 && (
                <motion.span
                  layoutId="day-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#00A6DF]"
                />
              )}
            </button>
            <button
              onClick={() => setActiveDay(3)}
              className={`relative px-1 py-3 font-sans text-xs sm:text-sm font-black tracking-wide uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                activeDay === 3 ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Jour 3</span>
              {activeDay === 3 && (
                <motion.span
                  layoutId="day-underline"
                  className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#00A6DF]"
                />
              )}
            </button>
          </div>

          {/* Sub-categories selector pills */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`program-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl font-sans text-xs font-bold transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                  activeCategory === cat
                    ? "bg-white/15 text-white border border-white/20 font-extrabold"
                    : "bg-white/5 text-gray-400 hover:text-white border border-transparent hover:bg-white/10"
                }`}
              >
                {cat === "Tous" && <Filter className="h-3 w-3" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Sessions Vertical Timeline Layout */}
        <div className="space-y-4 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => {
                const speaker = SPEAKERS.find((s) => s.id === session.speakerId);
                const isExpanded = !!expandedIds[session.id];

                return (
                  <motion.div
                    key={session.id}
                    id={`program-session-${session.id}`}
                    layout="position"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className={`bg-[#151631]/90 hover:bg-[#1C1D3D] border rounded-3xl transition-all duration-300 shadow-md overflow-hidden group ${
                      isExpanded ? "border-[#00A6DF]/30 ring-1 ring-[#00A6DF]/15" : "border-white/5"
                    }`}
                  >
                    {/* Collapsed Header: Interactive Toggle Area */}
                    <div
                      onClick={() => toggleSession(session.id)}
                      className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      {/* Left: Time and categorization info */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-grow w-full">
                        {/* Compact Clock Badge */}
                        <div className="flex items-center space-x-2 text-gray-300 font-mono text-xs sm:text-sm font-bold flex-shrink-0">
                          <Clock className="h-3.5 w-3.5 text-[#00A6DF]" />
                          <span>{session.time}</span>
                        </div>

                        {/* Title & Tags */}
                        <div className="space-y-1.5 flex-grow text-left">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`inline-block text-[9px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                              session.category === "Conférence"
                                ? "bg-[#00A6DF]/15 text-[#00A6DF] border border-[#00A6DF]/20"
                                : session.category === "Table Ronde"
                                ? "bg-purple-500/15 text-purple-300 border border-purple-500/20"
                                : "bg-[#1A3E7E]/25 text-blue-200 border border-[#1A3E7E]/30"
                            }`}>
                              {session.category}
                            </span>
                            <div className="flex items-center space-x-1 text-xs text-gray-400">
                              <MapPin className="h-3 w-3 text-gray-500" />
                              <span className="font-sans font-semibold text-[11px]">{session.location}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-base sm:text-lg font-sans font-black text-white leading-snug tracking-wide group-hover:text-[#00A6DF] transition-colors">
                            {session.title}
                          </h3>
                        </div>
                      </div>

                      {/* Right: Expand Caret Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                        isExpanded ? "bg-[#00A6DF]/15 text-white" : "bg-white/5 text-gray-400 group-hover:text-[#00A6DF] group-hover:bg-[#00A6DF]/10"
                      }`}>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </div>
                    </div>

                    {/* Expandable detailed content section */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-white/5 space-y-5">
                            
                            {/* Detailed Description */}
                            <p className="text-sm text-gray-300 font-sans leading-relaxed text-left max-w-4xl">
                              {session.description}
                            </p>

                            {/* Embedded, polished speaker detail card */}
                            {speaker && (
                              <div className="p-4 rounded-2xl bg-[#0F1026]/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-white/10 transition-colors max-w-2xl text-left">
                                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-[#00A6DF]/20 flex-shrink-0 bg-slate-900 shadow-md">
                                  <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="h-full w-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <span className="block text-[9px] font-mono font-black text-[#00A6DF] uppercase tracking-widest">
                                    Intervenant Principal
                                  </span>
                                  <h4 className="text-sm font-sans font-black text-white leading-tight">
                                    {speaker.name}
                                  </h4>
                                  <p className="text-[11px] text-gray-400 font-sans font-semibold">
                                    {speaker.role} • <span className="text-white/80">{speaker.company}</span>
                                  </p>
                                </div>
                              </div>
                            )}

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })
            ) : (
              <div className="py-12 text-center text-gray-400 font-sans text-sm bg-[#151631]/50 rounded-3xl border border-white/5">
                Aucune session ne correspond aux filtres sélectionnés pour ce jour.
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Warning Notes */}
        <div className="mt-12 p-5 bg-white/5 border border-white/10 rounded-2xl max-w-xl mx-auto text-center text-xs text-gray-400 font-sans">
          Certains ateliers pratiques disposent de places limitées. Pensez à planifier vos arbitrages de sessions directement sur votre espace d&apos;inscription personnel après l&apos;obtention de votre Pass nominatif.
        </div>

      </div>
    </section>
  );
}