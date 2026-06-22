import { useState, useEffect } from "react";
import { Users, Calendar, Award, Mic, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onRegisterClick: () => void;
  onThemesClick: () => void;
}

const carouselSlides = [
  {
    image: "/src/assets/images/convention_group_selfie_1782117207138.jpg",
    tagline: "CONVENTION NATIONALE 2026",
    title: "LA CONVENTION\nNATIONALE",
    desc: "Grand rendez-vous annuel de la JCI Madagascar rassemblant membres, dirigeants et partenaires le 01–03 Octobre 2026.",
  },
  {
    image: "/src/assets/images/convention_venue_blog_1782117221629.jpg",
    tagline: "YOUTH SUMMIT 2026",
    title: "YOUTH\nSUMMIT",
    desc: "Le sommet de la jeunesse active pour l'innovation, l'entrepreneuriat et le leadership d'impact.",
  },
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1600",
    tagline: "INSPIRATION • IMPACT • SYNERGIE",
    title: "COLLABORER\n& INNOVER",
    desc: "Rejoignez de nombreux leaders venus de toutes les provinces pour co-créer les solutions d'avenir.",
  }
];

export default function Hero({ onRegisterClick, onThemesClick }: HeroProps) {
  // Carousel background state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);



  // Simple countdown calculation for 22 June 2026
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-06-22T08:30:00");
    const difference = +targetDate - +new Date();
    
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Conférences", value: "68", desc: "Sessions innovantes avec leaders" },
    { label: "Tables Rondes", value: "15", desc: "Débats interactifs & croisés" },
    { label: "Ateliers", value: "30", desc: "Prodiguer des méthodes concrètes" },
    { label: "Participants", value: "1500+", desc: "Professionnels & experts" },
  ];

  return (
    <section id="hero" className="relative bg-[#0F1026] text-white pt-24 min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background with crossfade and high-contrast atmospheric filters */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.60, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={carouselSlides[currentSlide].image}
              alt="Convention Background Slide"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Semi-transparent dark cinematic overlay to make UI elements pop with high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1026]/90 via-[#0F1026]/75 to-[#050614]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D21] via-[#0F1026]/20 to-[#0F1026]/50" />
      </div>

      {/* Main hero grid centering the JCI content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-28 flex-grow flex items-center relative z-10">
        <div className="max-w-3xl flex flex-col justify-center space-y-8 text-left">
          
          {/* Subtle live signal badge */}
          <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[#00A6DF] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase font-semibold text-gray-300">
              {carouselSlides[currentSlide].tagline}
            </span>
          </div>

          {/* Large display headings with line breaks matching the photograph */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-white leading-none uppercase whitespace-pre-line drop-shadow-md">
            {carouselSlides[currentSlide].title}
          </h1>

          {/* Description text with font-sans, line-relaxed and beautiful contrast */}
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-sans font-normal leading-relaxed drop-shadow-sm">
            {carouselSlides[currentSlide].desc}
          </p>

          {/* Solid integrated double button bar styled exactly as the image */}
          <div className="pt-2 flex">
            <div className="inline-flex rounded-sm sm:rounded-md overflow-hidden border border-white/60 shadow-2xl bg-black/10 backdrop-blur-sm">
              <button
                id="hero-convention-cta"
                onClick={onThemesClick}
                className="bg-white text-gray-950 font-sans font-bold px-6 sm:px-8 py-4 text-xs sm:text-sm tracking-wide transition-all duration-150 hover:bg-gray-100 cursor-pointer select-none"
              >
                Convention Nationale
              </button>
              <button
                id="hero-youth-cta"
                onClick={onRegisterClick}
                className="bg-transparent hover:bg-white/10 text-white font-sans font-bold px-6 sm:px-8 py-4 text-xs sm:text-sm tracking-wide border-l border-white/40 transition-all duration-150 cursor-pointer select-none"
              >
                Youth Summit
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Polished, high-contrast dark bottom countdown strip from the screenshot */}
      <div className="bg-[#0C0D21] border-t border-white/10 py-6 md:py-9 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Countdown meters row on the left */}
            <div className="flex items-center justify-around md:justify-start w-full md:w-auto gap-8 sm:gap-14">
              
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-sans font-black text-white tracking-tight leading-none">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-sans tracking-wide mt-2">
                  Jour
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-sans font-black text-white tracking-tight leading-none">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-sans tracking-wide mt-2">
                  Heure
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-sans font-black text-white tracking-tight leading-none">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-sans tracking-wide mt-2">
                  Minute
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-sans font-black text-white tracking-tight leading-none">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-sans tracking-wide mt-2">
                  Seconde
                </span>
              </div>

            </div>

            {/* Elegant display text on the right */}
            <div className="text-center md:text-right">
              <span className="text-2xl md:text-3xl lg:text-4xl font-sans font-light tracking-wide text-white/95">
                Decompte de la Convention
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

