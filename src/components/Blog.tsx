import React, { useState, useMemo, useEffect } from "react";
import { ARTICLES, Article } from "../types";
import { Calendar, Clock, ArrowRight, X, Search, Filter, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORIES = [
  { id: "all", label: "Tout" },
  { id: "Événement", label: "Événement" },
  { id: "Youth Summit", label: "Youth Summit" },
  { id: "Expertise", label: "Expertise" },
  { id: "Leadership", label: "Leadership" }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticle]);

  // Filter articles based on selected category and keyword search query
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCategory =
        selectedCategory === "all" || art.category === selectedCategory;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section 
      id="blog" 
      className="py-20 md:py-28 bg-[#0F1026] text-white overflow-hidden scroll-mt-12 relative"
    >
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#00A6DF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl text-left space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#00A6DF]/10 border border-[#00A6DF]/20 px-3 py-1 rounded-full w-fit">
              <span className="text-[10px] font-mono tracking-widest uppercase font-extrabold text-[#00A6DF]">
                L&apos;ACTU / RÉFLEXIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight leading-none text-white uppercase">
              Actualités & Blog
            </h2>
            <p className="text-sm sm:text-base text-gray-300 font-sans max-w-lg">
              Décryptez les enjeux de la Convention Nationale JCI Madagascar et du Youth Summit 2026 à travers nos analyses exclusives.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 self-start md:self-end">
            <BookOpen className="h-4 w-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-gray-300">
              {ARTICLES.length} articles disponibles
            </span>
          </div>
        </div>

        {/* Search & Filter Controls Container */}
        <div className="max-w-4xl mr-auto mb-12 space-y-5">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
            {/* Search Box */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                <Search className="h-4 w-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un article par mot-clé..."
                className="w-full bg-[#151631] border border-white/10 rounded-full py-3.5 pl-11 pr-10 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#00A6DF]/40 focus:bg-[#1C1D3A] transition-all text-white placeholder:text-gray-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-sans font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#00A6DF] text-white shadow-lg shadow-[#00A6DF]/20"
                        : "bg-[#151631] text-gray-300 hover:bg-[#1E2045] hover:text-white border border-white/5"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blog cards grid (Dynamic reactive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={art.id}
                  id={`blog-article-${art.id}`}
                  onClick={() => setActiveArticle(art)}
                  className="bg-[#151631] rounded-3xl border border-white/5 overflow-hidden shadow-xl flex flex-col group hover:border-[#00A6DF]/40 hover:shadow-2xl hover:shadow-[#00A6DF]/5 transition-all duration-300 cursor-pointer h-full"
                >
                  {/* Cover picture with badge */}
                  <div className="aspect-[16/11] w-full bg-[#101124] overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category tag */}
                    <span className="absolute top-4 left-4 bg-amber-400 text-[#0F1026] text-[9px] font-sans font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-sm">
                      {art.category}
                    </span>
                  </div>

                  {/* Card text content */}
                  <div className="p-5 flex-grow flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-2.5">
                      {/* Meta dates and times */}
                      <div className="flex items-center space-x-3 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3 text-[#00A6DF]" />
                          <span>{art.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3 text-[#00A6DF]" />
                          <span>{art.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-sans font-bold text-white group-hover:text-amber-400 transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h3>

                      <p className="text-xs text-gray-300 font-sans leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono font-black text-[#00A6DF] uppercase tracking-widest group-hover:text-amber-400 transition-colors">
                      <span>Découvrir l&apos;article</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-[#151631] rounded-3xl border border-dashed border-white/10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-gray-400 mb-3">
                  <Filter className="h-5 w-5" />
                </div>
                <h3 className="text-base font-sans font-bold text-white">Aucun article trouvé</h3>
                <p className="text-sm text-gray-400 font-sans max-w-sm mx-auto mt-1">
                  Aucun résultat ne correspond à votre recherche pour &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 px-5 py-2.5 bg-[#00A6DF] hover:bg-[#0092c4] text-xs font-sans font-bold rounded-full transition-all cursor-pointer"
                >
                  Réinitialiser la recherche
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Immersive Article Modal Reader */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#151631] border border-white/10 rounded-[32px] max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh] z-10"
            >
              {/* Close Button on top of image */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-[#0F1026] text-white p-2.5 rounded-full transition-colors cursor-pointer border border-white/10"
                aria-label="Fermer la lecture"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover Image Section */}
              <div className="aspect-[16/9] w-full relative bg-[#101124]">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151631] to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute bottom-4 left-6 bg-amber-400 text-[#0F1026] text-[10px] font-sans font-black tracking-widest uppercase px-3 py-1 rounded-md shadow-md">
                  {activeArticle.category}
                </span>
              </div>

              {/* Scrollable text details */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1 text-left space-y-6">
                
                {/* Meta details */}
                <div className="flex items-center space-x-4 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#00A6DF]" />
                    <span>{activeArticle.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#00A6DF]" />
                    <span>{activeArticle.readTime} de lecture</span>
                  </div>
                </div>

                {/* Article Main Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-extrabold tracking-tight text-white leading-tight">
                  {activeArticle.title}
                </h2>

                {/* Main Content Rendered with Paragraph Breaks */}
                <div className="space-y-4 text-sm sm:text-base text-gray-200 font-sans font-normal leading-relaxed">
                  {activeArticle.content.split("\n\n").map((para, i) => (
                    <p key={i}>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Inner Signoff footer */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-xs text-gray-400">
                  <span>Ancré sur le programme officiel JCI CN2026 et Youth Summit</span>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full transition-colors border border-white/10 text-center cursor-pointer"
                  >
                    Fermer la lecture
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
