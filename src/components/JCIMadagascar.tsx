import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Globe } from "lucide-react";
import union from "../assets/images/Union_image.jpeg";
import Image10 from "../assets/images/Image10.jpeg";

export default function JCIMadagascar() {
  // Generated high-quality image assets
  const imgTeam = "/src/assets/images/jci_madagascar_team_1782133854344.jpg";
  const imgEvent = "/src/assets/images/jci_madagascar_event_1782133869988.jpg";

  return (
    <section 
      id="jci-madagascar" 
      className="py-16 md:py-24 bg-white text-gray-900 overflow-hidden relative scroll-mt-12"
    >
      {/* Decorative clean background subtle shapes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text narrative */}
          <div className="lg:col-span-6 text-left space-y-6 md:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Subtle category pill for modern layout context */}
              <div id="jci-pill" className="inline-flex items-center space-x-2 bg-sky-550/10 border border-sky-400/20 px-3.5 py-1.5 rounded-full w-fit">
                <span className="text-xs font-mono tracking-widest uppercase font-extrabold text-[#00A6DF]">
                  ORGANISATION Nationale
                </span>
                <Globe className="h-3.5 w-3.5 text-[#00A6DF] animate-spin-slow" />
              </div>

              {/* Header: matching screenshot style and font boldness */}
              <h2 id="jci-title" className="text-4xl sm:text-5xl font-sans font-black text-[#0F1026] tracking-tight uppercase">
                JCI Madagascar
              </h2>

              {/* Text paragraph with the unique inline stylized underlines to replicate the visual mockup perfectly */}
              <div className="space-y-6 text-lg sm:text-xl font-sans text-gray-800 font-medium leading-relaxed md:leading-loose">
                <p className="decoration-1 decoration-dashed md:decoration-solid">
                  JCI Madagascar, en tant que organisation nationale, fédère les chambres locales malagasy et organise chaque année sa Convention Nationale. JCI Iarivo, chambre locale basée à Antananarivo, est le comité organisateur officiel de l&apos;édition 2026.
                </p>
              </div>
            </motion.div>

            {/* Micro badges below paragraph for extreme visual craft */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100"
            >
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="h-8 w-8 rounded-full bg-cyan-50 flex items-center justify-center text-[#00A6DF] flex-shrink-0">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <span className="font-semibold text-gray-700">Comité National Officiel</span>
              </div>

              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="h-8 w-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 flex-shrink-0">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <span className="font-semibold text-gray-700">Garant de l&apos;Impact Local</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: overlapping circular high-fidelity photos */}
          <div className="lg:col-span-6 relative flex items-center justify-center h-[350px] sm:h-[450px] md:h-[500px]">
            
            {/* Main Outer container wrapping both circles */}
            <div className="relative w-full max-w-[420px] h-full flex items-center justify-center">
              
              {/* TOP CIRCLE: Shipped top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 50, y: -50 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden shadow-2xl border-[3.5px] border-[#00A6DF] z-20 cursor-pointer bg-neutral-100"
              >
                <img
                  src={union}
                  alt="JCI Madagascar Team Portrait"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Micro clean styling wash */}
                <div className="absolute inset-0 bg-sky-950/5 hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* BOTTOM CIRCLE: Shipped bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -40, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: -50, y: 50 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 30 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
                className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full overflow-hidden shadow-2xl border-[3.5px] border-[#00A6DF] z-10 cursor-pointer bg-neutral-100"
              >
                <img
                  src={Image10}
                  alt="JCI Madagascar Event Session"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Micro clean styling wash */}
                <div className="absolute inset-0 bg-rose-950/5 hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Subtle background connecting graphics line rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="w-[340px] h-[340px] border border-[#00A6DF]/10 rounded-full animate-ping-slow absolute" />
                <div className="w-[240px] h-[240px] border border-dashed border-[#00A6DF]/20 rounded-full" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
