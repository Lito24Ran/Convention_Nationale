import { useState } from "react";
import { Clock, MapPin, Tag, User2, Filter } from "lucide-react";
import { SESSIONS, SPEAKERS } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Program() {
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const categories = ["Tous", "Conférence", "Table Ronde", "Atelier"];

  // Filter sessions based on category
  const filteredSessions = SESSIONS.filter((session) => {
    if (activeCategory === "Tous") return true;
    return session.category === activeCategory;
  });

  return (
    <section id="program" className="py-20 md:py-28 bg-[#0F1026] text-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and category selector */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl text-left space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-amber-400">
                L&apos;AGENDA COMPLET
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
              Programme de la Convention
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans">
              Planifiez votre parcours personnalisé sur 2 jours. Filtrez par format d&apos;intervention pour cibler au mieux vos priorités.
            </p>
          </div>

          {/* Filters tabs selector */}
          <div className="flex flex-wrap gap-2 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`program-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl font-sans text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                  activeCategory === cat
                    ? "bg-amber-400 text-[#0F1026] font-bold shadow-lg"
                    : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat === "Tous" && <Filter className="h-3.5 w-3.5" />}
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sessions Vertical Timeline Layout */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredSessions.map((session) => {
              // Retrieve speaker details if present
              const speaker = SPEAKERS.find((s) => s.id === session.speakerId);

              return (
                <motion.div
                  key={session.id}
                  id={`program-session-${session.id}`}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#151631] border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center hover:border-amber-400/20 transition-all shadow-md group"
                >
                  {/* Time badge */}
                  <div className="md:w-44 flex-shrink-0 flex items-center space-x-2.5 text-amber-400 font-mono text-sm sm:text-base font-bold bg-amber-400/5 px-4 py-2.5 rounded-2xl border border-amber-400/10 fit-content md:w-auto">
                    <Clock className="h-4.5 w-4.5 text-amber-400" />
                    <span>{session.time}</span>
                  </div>

                  {/* Main contents details */}
                  <div className="flex-grow text-left space-y-3">
                    <div className="flex items-center space-x-2.5">
                      <span className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                        session.category === "Conférence"
                          ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                          : session.category === "Table Ronde"
                          ? "bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                      }`}>
                        {session.category}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-gray-400">
                        <MapPin className="h-3.5 w-3.5 text-gray-500" />
                        <span className="font-sans font-medium">{session.location}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-sans font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {session.title}
                    </h3>

                    <p className="text-sm text-gray-300 font-sans leading-relaxed tracking-normal">
                      {session.description}
                    </p>

                    {/* Speaker Card row inside session details */}
                    {speaker && (
                      <div className="pt-4 border-t border-white/5 flex items-center space-x-3">
                        <div className="h-9 w-9 rounded-full bg-slate-700 overflow-hidden border-2 border-white/10 flex-shrink-0">
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <span className="block text-xs font-sans font-bold text-white">
                            Intervenant : {speaker.name}
                          </span>
                          <span className="block text-[10px] text-gray-400 font-sans uppercase tracking-wider">
                            {speaker.role} • {speaker.company}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
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
