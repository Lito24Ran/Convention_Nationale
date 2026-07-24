import { Calendar, Shield, Users, Award } from "lucide-react";
import Imge from "../assets/images/WhatsApp Image 2026-06-17 at 08.32.46.jpeg"

export default function About() {
  const highlights = [
    {
      icon: <Calendar className="h-5 w-5 text-amber-400" />,
      title: "3 Jours d' Immersion",
      description: "Plus de 20 heures de débats denses, de conférences plénières et d&apos;ateliers d&apos;idéation décentralisés.",
    },
    {
      icon: <Users className="h-5 w-5 text-amber-400" />,
      title: "Network d&apos;Élite",
      description: "Rencontrez plus de 1500 décideurs, dirigeants et experts issus des secteurs de l&apos;innovation et de la transition durable.",
    },
    {
      icon: <Shield className="h-5 w-5 text-amber-400" />,
      title: "Impact Actionnable",
      description: "Sortez des théories : repartez avec des chartes de collaboration réelles, des modèles IA robustes et des feuilles de route CSRD.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-gray-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text panel on the left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-[#0F1026]">
                Convention Nationale
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0F1026] tracking-tight leading-tight">
              La Convention Nationale,
              <br />
              c&apos;est quoi ?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 font-sans leading-relaxed">
              <p>
                La <strong className="text-[#0F1026] font-semibold">Convention Nationale</strong>  est le Grand rendez-vous annuel de la JCI Madagascar rassemblant
membres, dirigeants et partenaires. Temps fort du calendrier institutionnel, espace de célébration, de formation et de prise de
décision stratégique.
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Pendant trois jours intenses de réflexion collective, d'échanges constructifs et de collaboration, la Convention Nationale rassemblera des participants venus de différents horizons autour d'une ambition commune : bâtir des solutions innovantes, renforcer le leadership et favoriser un impact durable. À travers des conférences, des ateliers, des débats et des moments de partage, cet événement constituera une occasion unique d'apprendre, de créer des liens et de transformer les idées en actions concrètes au service de notre communauté et de notre avenir.

              </p>
            </div>

            {/* List highlights */}
            {/* <div className="grid grid-cols-1 gap-6 pt-4 border-t border-gray-100">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-[#0F1026]/5 p-3 rounded-xl border border-[#0F1026]/5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-sans font-bold text-[#0F1026] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}

          </div>

          {/* Graphical/Image element on the right */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Floating shadow background accents */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/5 to-transparent rounded-3xl -rotate-3 hover:rotate-0 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={Imge}
                alt="Jeunes professionnels souriants et engagés"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Custom micro badge overlays */}
              <div className="absolute top-4 right-4 bg-[#0F1026]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-white flex items-center space-x-1 shadow-md">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">ÉLITE 2026</span>
              </div>
            </div>
            
            {/* Lower decorative box to mimic Figma's detail layers */}
            <div className="absolute -bottom-6 -left-6 bg-[#0F1026] text-white p-5 rounded-2xl shadow-xl hidden sm:block max-w-[200px] border border-white/10">
              <span className="block text-2xl font-mono font-bold text-amber-400 tracking-tight">
                100%
              </span>
              <span className="block text-[10px] font-sans font-medium text-gray-300 uppercase tracking-widest mt-1">
                Concret & Immersif
              </span>
              <p className="text-[10px] text-gray-400 mt-1 leading-normal">
                Créativité et réseautage au rendez-vous
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
