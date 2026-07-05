import { ARTICLES } from "../types";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <section
      id="blog"
      className="py-20 md:py-28 bg-[#0F1026] text-white overflow-hidden scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title area */}
        <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-left space-y-4">
            <div className="inline-flex items-center space-x-2 bg-[#00A6DF]/10 border border-[#00A6DF]/20 px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-[#00A6DF]">
                L&apos;ACTU / RÉFLEXIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight leading-tight">
              Actualités &amp; Blog
            </h2>

            <p className="text-sm text-gray-300 font-sans">
              Consultez nos dossiers de prospective, comptes-rendus
              d&apos;éditions de travaux préparatoires et tribunes de nos
              intervenants.
            </p>
          </div>

          <a
            href="#about"
            className="text-white hover:text-[#00A6DF] font-sans font-semibold text-xs sm:text-sm self-start md:self-end border border-white/10 hover:border-[#00A6DF]/30 rounded-xl px-5 py-3 flex items-center space-x-2 whitespace-nowrap transition-colors"
          >
            <span>Lire tous les articles</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art, index) => (
            <div
              key={art.id}
              id={`blog-article-${art.id}`}
              className={`bg-[#151631] rounded-3xl border border-white/5 overflow-hidden shadow-xl flex flex-col group hover:border-white/10 transition-all duration-300 ${
                index === 1 ? "md:mt-6" : ""
              }`}
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-800">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 bg-[#00A6DF] text-white text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-lg shadow-sm">
                  {art.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 justify-between p-6">
                <div className="space-y-3">
                  <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                    {art.date}
                    <span className="mx-2 text-white/20">/</span>
                    {art.readTime} de lecture
                  </p>

                  <h3 className="text-lg font-bold leading-snug group-hover:text-[#00A6DF] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-widest text-[#00A6DF] group-hover:text-white transition-colors cursor-pointer">
                  <span>Découvrir l&apos;article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}