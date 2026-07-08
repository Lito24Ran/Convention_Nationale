/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Program from "./components/Program";
import Speakers from "./components/Speakers";
import Registration from "./components/Registration";
import Partners from "./components/Partners";
import WhoWeAre from "./components/WhoWeAre";
import JCIMadagascar from "./components/JCIMadagascar";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Formateurs from "./components/Formateur";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth scroll handler to targeted section ID
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Dynamic scroll listener tracking all page section bounds for a deeply coherent active header tab
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "program",
      "intervenants",
      "youth-summit-feature",
      "conferenciers",
      "registration",
      "who-we-are",
      "jci-madagascar",
      "partners",
      "blog",
      "faq"
    ];

    const handleScroll = () => {
      let currentSection = "hero";
      const scrollPosition = window.scrollY + 200; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="landing-page-root" className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth selection:bg-amber-400 selection:text-[#0F1026]">
      {/* Absolute top fixed Header */}
      <Header onNavigate={handleScrollToSection} activeSection={activeSection} />

      {/* Core sections */}
      <main id="main-content-flow">
        <Hero
          onRegisterClick={() => handleScrollToSection("registration")}
          onThemesClick={() => handleScrollToSection("about")}
        />
        <About />
        <Program />
        {/* <Speakers /> */}
         <Formateurs />
        <Registration />
        <WhoWeAre />
        <JCIMadagascar /> 
        <Partners /> 
        <Blog />
        <FAQ />
      </main>

      {/* Permanent footer */}
      <Footer />
    </div>
  );
}

