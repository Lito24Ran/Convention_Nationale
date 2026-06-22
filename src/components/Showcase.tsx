import { Eye, Image, Info, Play } from "lucide-react";

export default function Showcase() {
  const imagesToShow = [
    {
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=500&h=300",
      caption: "Conférence Plénière - Édition de 2025"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=500&h=300",
      caption: "Tables Rondes d&apos;Échanges et Débats"
    },
    {
      url: "/src/assets/images/convention_venue_blog_1782117221629.jpg",
      caption: "Salles d&apos;expositions et Ateliers"
    },
    {
      url: "/src/assets/images/convention_group_selfie_1782117207138.jpg",
      caption: "Network & Rencontres Professionnelles"
    }
  ];

  return (
    <section id="showcase" className="py-20 md:py-28 bg-[#151631] text-white relative overflow-hidden scroll-mt-12">
      {/* Figma background concentrics circles graphics decoration as described */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20 -z-5 max-w-full">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-500 animate-[spin_100s_linear_infinite]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left information column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-amber-400">
                DÉCOUVRIR
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight">
              La Convention ?
              <br />
              Un Écosystème Vibrant
            </h2>

            <div className="space-y-4 text-base text-gray-300 font-sans leading-relaxed">
              <p>
                Rien ne remplace la force de la présence physique, la spontanéité d&apos;une poignée de main, et l&apos;effervescence intellectuelle d&apos;un atelier en face à face.
              </p>
              <p className="text-sm text-gray-400">
                Chaque année, après les sessions, les participants de la Convention se retrouvent pour des moments d&apos;échanges informels qui favorisent de véritables innovations collaboratives. Observez quelques extraits des moments forts immortalisés lors de nos sessions précédentes.
              </p>
            </div>

            {/* Quote badge detail */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left text-xs leading-relaxed max-w-lg italic font-sans text-amber-200">
              « La Convention Nationale a changé notre manière de concevoir l&apos;Agilité. Notre équipe est repartie de l&apos;édition précédente dynamisée, avec des process de co-décisions clairs que nous appliquons encore aujourd&apos;hui. »
              <span className="block not-italic text-white font-mono mt-2 font-bold uppercase tracking-wider text-[10px]">
                — Marc C., Directeur Agile chez Hexa Tech
              </span>
            </div>
          </div>

          {/* Right Media Grid thumbnails */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {imagesToShow.map((img, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden aspect-[4/3] shadow-lg bg-[#0F1026] border border-white/5">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating badge details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1026]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-left">
                    <p className="text-xs font-sans font-semibold text-white">
                      {img.caption}
                    </p>
                  </div>
                  {/* Magnifier glass overlay */}
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md rounded-lg p-1.5 border border-white/10 pointer-events-none text-amber-400">
                    <Eye className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
