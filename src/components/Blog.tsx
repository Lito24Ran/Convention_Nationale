import { ARTICLES } from "../types";
import { ArrowUpRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-[#0F1026] text-white overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area and top links */}
        <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-left space-y-4">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-amber-400">
                L&apos;ACTU / RÉFLEXIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
              Actualités & Blog 
            </h2>
            <p className="text-sm text-gray-300 font-sans">
              Consultez nos dossiers de prospective, comptes-rendus d&apos;éditions de travaux préparatoires et tribunes de nos intervenants.
            </p>
          </div>

          <a
            href="#about"
            className="text-white hover:text-amber-400 font-sans font-semibold text-xs sm:text-sm self-start md:self-end border border-white/10 hover:border-amber-400/30 rounded-xl px-5 py-3 flex items-center space-x-2 whitespace-nowrap transition-colors"
          >
            <span>Lire tous les articles</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Blog cards grid (3 items row as in figma mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              id={`blog-article-${art.id}`}
              className="bg-[#151631] rounded-3xl border border-white/5 overflow-hidden shadow-xl flex flex-col group hover:border-white/10 transition-all"
            >
              {/* Cover visual with zoom */}
              <div className="aspect-[16/10] w-full bg-slate-800 overflow-hidden relative">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-amber-450/90 text-[#0F1026] text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg bg-amber-400 shadow-sm">
                  {art.category}
                </span>
              </div>

              {/* Text contents */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta date and read time */}
                  <div className="flex items-center space-x-4 text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3 text-amber-500" />
                      <span>{art.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3 text-amber-500" />
                      <span>{art.readTime} de lecture</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-sans font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono font-extrabold text-amber-400 uppercase tracking-widest cursor-pointer hover:text-white transition-colors group">
                  <span>Découvrir l&apos;article</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
