import { useState, useEffect } from "react";
import { Menu, X, Calendar, Shield } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { label } from "motion/react-client";

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
    { label: "A propos", id: "about" },
    { label: "programmes", id: "program" },
    {label: "Intervenants", id: "intervenants"},
    {label: "Youth Summit", id: "YS"},
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0F1026]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* JCI Styled Logo identical to the screenshot */}
          <div
              id="logo-container"
              onClick={() => handleLinkClick("hero")}
              className="flex items-center space-x-2.5 cursor-pointer group select-none"
            >
              <div className="flex flex-col items-start leading-none">
                <img
                  src="src/assets/images/JCI Iarivo background blue logo.png"
                  alt="logo"
                  className="h-20 w-auto"
                />
              </div>
              {/* <div className="flex flex-col items-start leading-none">
                <span className="text-white font-sans font-extrabold text-2xl tracking-tight">
                  JCI
                </span>
                <span className="text-gray-300 font-sans text-[10px] tracking-widest block lowercase -mt-0.5">
                  iarivo
                </span>
              </div>
              <div className="h-7 w-7 rounded-lg border-2 border-white/95 flex items-center justify-center p-0.5 transform group-hover:scale-105 transition-transform duration-300">
                <Shield className="h-4 w-4 text-white fill-white/10" />
              </div> */}
            </div>

          {/* Desktop Navigation - adjusted spacing for professional responsiveness across high-count links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
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
                  className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-sans font-semibold tracking-wide transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-6px] left-3 right-3 h-[3px] bg-[#00A6DF] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action: Pill-shaped yellow button "S'inscrire" */}
          <div id="desktop-actions" className="hidden lg:flex items-center">
            <button
              id="cta-header-register"
              onClick={() => handleLinkClick("registration")}
              className="bg-[#F5C400] hover:bg-[#E5B500] text-gray-950 px-6 py-2 rounded-full text-xs font-sans font-bold shadow-md hover:shadow-yellow-500/10 active:scale-95 transition-all duration-200 cursor-pointer"
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
            className="lg:hidden bg-[#0F1026] border-t border-white/5 overflow-hidden"
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
                    className={`w-full text-left block px-4 py-3 rounded-lg font-sans text-base font-semibold ${
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
                  className="w-full text-center bg-[#F5C400] text-gray-950 font-sans font-bold py-3 rounded-full shadow-lg cursor-pointer"
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
