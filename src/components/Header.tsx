import { useState, useEffect } from "react";
import { Menu, X, Calendar, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const logoJci = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" fill="none">
  <g transform="translate(5, 5)">
    <circle cx="40" cy="40" r="38" fill="url(%23jciGlow)" opacity="0.15" />
    <circle cx="40" cy="40" r="35" stroke="%2300A6DF" stroke-width="1.2" stroke-dasharray="2 2" opacity="0.4" />
    <circle cx="40" cy="40" r="31" stroke="white" stroke-width="2.2" opacity="0.9" />
    
    <path d="M 14 40 C 14 26, 66 26, 66 40" stroke="%2300A6DF" stroke-width="1.8" fill="none" />
    <path d="M 18 29 C 18 17, 62 17, 62 29" stroke="%2300A6DF" stroke-width="1.2" fill="none" />
    <path d="M 18 51 C 18 63, 62 63, 62 51" stroke="%2300A6DF" stroke-width="1.2" fill="none" />
    
    <path d="M 40 9 C 31 9, 31 71, 40 71" stroke="%2300A6DF" stroke-width="1.8" fill="none" />
    <path d="M 40 9 C 49 9, 49 71, 40 71" stroke="%2300A6DF" stroke-width="1.8" fill="none" />
    
    <circle cx="40" cy="40" r="4" fill="%23F5C400" />
    <path d="M 40 31 L 40 49 M 31 40 L 49 40" stroke="%23F5C400" stroke-width="1.5" stroke-linecap="round" />
  </g>

  <g transform="translate(100, -2)">
    <text x="0" y="52" font-family="'Outfit', 'Inter', sans-serif" font-weight="900" font-size="44" fill="white" letter-spacing="-1">JCI</text>
    <text x="2" y="76" font-family="'Inter', sans-serif" font-weight="900" font-size="15" fill="%2300A6DF" letter-spacing="6">IARIVO</text>
    <text x="3" y="88" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="rgba(255,255,255,0.4)" letter-spacing="1.5">MEMBER CHAPTER</text>
  </g>
  
  <defs>
    <radialGradient id="jciGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="%2300A6DF" />
      <stop offset="100%" stop-color="%2300A6DF" stop-opacity="0" />
    </radialGradient>
  </defs>
</svg>`;

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation elements that align directly with actual sections on the page for complete coherence
  const navItems = [
    { label: "Accueil", id: "hero" },
    { label: "À propos", id: "about" },
    { label: "Program", id: "program" },
    { label: "Formateurs", id: "formateurs" },
    { label: "Inscriptions", id: "registration" },
    { label: "Partenaires", id: "partners" },
    { label: "Actualités", id: "blog" },
    { label: "FAQ", id: "faq" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#090A1F]/90 backdrop-blur-md shadow-2xl border-b border-white/10 py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* JCI Styled Logo identical to the screenshot */}
          <div
            id="logo-container"
            onClick={() => handleLinkClick("hero")}
            className="flex items-center space-x-2.5 cursor-pointer group select-none py-1"
          >
            <img 
              src={logoJci} 
              alt="logoJCI" 
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 transform group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,166,223,0.15)]" 
            />
          </div>

          {/* Desktop Navigation - adjusted spacing for professional responsiveness across high-count links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
            {navItems.map((item) => {
              // Active status checks mapping sub-sections elegantly into the primary navigation tabs
              const isActive = 
                activeSection === item.id || 
                (item.id === "about" && (activeSection === "who-we-are" || activeSection === "jci-madagascar")) ||
                (item.id === "program" && (activeSection === "intervenants" || activeSection === "youth-summit-feature" || activeSection === "conferenciers"));
                
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-2.5 xl:px-3.5 py-2 text-[10px] xl:text-[11px] font-sans font-black tracking-widest uppercase transition-all duration-300 cursor-pointer relative ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-3 right-3 h-[3px] bg-gradient-to-r from-[#00A6DF] to-amber-500 rounded-full shadow-[0_0_8px_rgba(0,166,223,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action: Pill-shaped high-ticket gradient button */}
          <div id="desktop-actions" className="hidden lg:flex items-center">
            <button
              id="cta-header-register"
              onClick={() => handleLinkClick("registration")}
              className="bg-gradient-to-r from-[#00A6DF] to-amber-500 hover:from-amber-500 hover:to-[#00A6DF] text-slate-950 px-6 py-2.5 rounded-full text-[10px] font-sans font-black tracking-widest uppercase shadow-md shadow-amber-500/10 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              S&apos;inscrire
            </button>
          </div>

          {/* Mobile menu button */}
          <div id="mobile-menu-btn-container" className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#090A1F] border-t border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = 
                  activeSection === item.id || 
                  (item.id === "about" && (activeSection === "who-we-are" || activeSection === "jci-madagascar")) ||
                  (item.id === "program" && (activeSection === "intervenants" || activeSection === "youth-summit-feature" || activeSection === "conferenciers"));

                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left block px-4 py-3 rounded-lg font-sans text-xs font-black tracking-widest uppercase ${
                      isActive
                        ? "text-amber-400 bg-white/5 shadow-inner"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-white/5 flex flex-col space-y-3 px-4">
                <button
                  id="mobile-cta-register"
                  onClick={() => handleLinkClick("registration")}
                  className="w-full text-center bg-gradient-to-r from-[#00A6DF] to-amber-500 text-slate-950 font-sans font-black py-3.5 rounded-xl shadow-lg cursor-pointer tracking-widest uppercase"
                >
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
