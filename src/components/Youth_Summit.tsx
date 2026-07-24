import React from "react";
import { motion } from "motion/react";
import youthSummitImage from "../assets/images/YS.jpeg";

export default function YouthSummit() {
  return (
    <section 
      id="youth-summit-feature" 
      className="py-24 md:py-32 bg-white text-[#0F1026] overflow-hidden relative border-b border-gray-100 scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Block: Golden Badge, Title & Main Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Golden Badge resembling mockup */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-[#0F1026]">
                Youth Summit
              </span>
            </div>
            </div>
            
            {/* Beautiful Large Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#0F1026] tracking-tight leading-tight">
              Youth Summit
            </h2>
            
            {/* Elegant spacing and clean sans-serif typography */}
            <p className="space-y-10 text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              Forum jeunesse à forte valeur ajoutée, conçu 
              pour galvaniser la jeunesse malagasy autour des enjeux de 
              leadership, d&apos;entrepreneuriat et de développement 
              durable. Événement satellite de la Convention Nationale.
            </p>
            <p className="text-sm sm:text-base text-gray-500">
              Pendant deux jours pour transformer l'ambition entrepreneuriale en projets concrets. <strong className="text-[#0F1026] font-semibold"> Youth Summit</strong>  réunira des jeunes leaders, entrepreneurs, étudiants et acteurs du changement autour d'une même vision : inspirer, apprendre et agir. À travers des conférences inspirantes, des ateliers interactifs, des panels de discussion et des activités collaboratives, les participants développeront leurs compétences, élargiront leur réseau et feront émerger des initiatives porteuses d'un impact positif pour leurs communautés et les générations futures.

            </p>
          </div>

          {/* Right Block: Image with asymmetrical extra rounded corners */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div 
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-[480px] aspect-[1.15/1] rounded-[64px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-gray-50 relative group"
            >
              <img
                src={youthSummitImage}
                alt="Intervenante inspirante au Youth Summit"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#0F1026]/5 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
