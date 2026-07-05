import { Twitter, Linkedin, Facebook, ArrowUp, Calendar, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="site-footer" className="bg-[#0F1026] text-white border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns footer grids */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg bg-amber-400 flex items-center justify-center font-bold text-[#0F1026] text-base">
                LCN
              </div>
              <span className="text-white font-sans font-bold text-lg tracking-tight uppercase">
                Convention Nationale
              </span>
            </div>
            <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-xs">
              L&apos;événement national de référence pour tous les professionnels en quête d&apos;innovation, de transition verte et de gouvernance agile.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-amber-400 border border-white/5 flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-amber-400 border border-white/5 flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-amber-400 border border-white/5 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Calendar summary metrics */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
              Infos Clés Événement :
            </h4>
            <ul className="space-y-3 font-sans text-xs text-gray-300">
              <li className="flex items-center space-x-2.5">
                <Calendar className="h-4 w-4 text-amber-500" />
                <span>01-03 Octobre 2026, de 08h30 à 19h30</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span>Palais des Congrès, Avenue des Champs-Élysées, Paris</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>contact@convention-nationale.fr</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation shortcuts */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">
              Liens Utiles :
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans text-gray-400">
              <a href="#hero" className="hover:text-white transition-colors">Accueil</a>
              <a href="#about" className="hover:text-white transition-colors">L&apos;Événement</a>
              <a href="#program" className="hover:text-white transition-colors">Programme</a>
              <a href="#registration" className="hover:text-white transition-colors">Inscriptions</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

        </div>

        {/* Ground Copyright rows bar & Top trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-sans text-gray-500">
            © 2026 La Convention Nationale. Tous droits réservés. Réalisation conforme aux standards React 19 + Tailwind CSS.
          </p>
          
          {/* Scroll to top button */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="text-xs font-sans text-gray-400 hover:text-white flex items-center space-x-1.5 cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 py-2 px-4 rounded-xl transition-all"
          >
            <span>Retour en haut</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
