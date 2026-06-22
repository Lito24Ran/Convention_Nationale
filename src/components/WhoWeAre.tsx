import React from "react";
import { motion } from "motion/react";

export default function WhoWeAre() {
  const imgPresentation = "/src/assets/images/jci_presentation_1782134191329.jpg";
  const imgMeeting = "/src/assets/images/jci_leaders_meeting_1782134208063.jpg";
  const imgDinner = "/src/assets/images/jci_group_dinner_1782134222052.jpg";
  const imgPinning = "/src/assets/images/jci_pinning_ceremony_1782134235200.jpg";

  return (
    <section 
      id="who-we-are" 
      className="py-20 md:py-28 bg-[#0D0E23] text-white overflow-hidden relative scroll-mt-12"
    >
      {/* Exquisite custom Concentric Circular Labyrinth styling to replicate the backdrop mockup exactly */}
      <div className="absolute right-[-10%] top-[-10%] md:right-[-5%] md:top-[-5%] w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] pointer-events-none opacity-40 z-0">
        <svg viewBox="0 0 500 500" className="w-full h-full fill-none">
          {/* Concentric rings with customized stroke-width and stroke-dasharray properties */}
          <circle cx="450" cy="150" r="420" stroke="#00BCF1" strokeWidth="35" strokeLinecap="round" strokeDasharray="600 200 400 300" className="opacity-40" />
          <circle cx="450" cy="150" r="330" stroke="#00BCF1" strokeWidth="26" strokeLinecap="round" strokeDasharray="400 150 500 100" className="opacity-60" />
          <circle cx="450" cy="150" r="250" stroke="#00A6DF" strokeWidth="22" strokeLinecap="round" strokeDasharray="300 200" className="opacity-80" />
          <circle cx="450" cy="150" r="180" stroke="#00A6DF" strokeWidth="18" strokeLinecap="round" strokeDasharray="200 100 150 50" className="opacity-90" />
          <circle cx="450" cy="150" r="110" stroke="#10E5F3" strokeWidth="14" strokeLinecap="round" className="opacity-95" />
          <circle cx="450" cy="150" r="50" stroke="#10E5F3" strokeWidth="10" strokeLinecap="round" className="opacity-100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative Content */}
          <div className="lg:col-span-6 text-left space-y-6 md:space-y-8">
            
            {/* Tag/Pill resembling screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center bg-[#10E5F3]/10 border border-[#10E5F3]/30 px-3 py-1 rounded-full"
            >
              <span className="text-[11px] font-bold tracking-wider text-[#10E5F3] uppercase font-sans">
                À propos
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-sans font-black text-white tracking-tight leading-tight"
            >
              Qui somme nous ?
            </motion.h2>

            {/* Narrative Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 font-sans font-normal leading-relaxed max-w-xl"
            >
              La Junior Chamber International (JCI) est une organisation mondiale à but non lucratif regroupant de jeunes leaders actifs engagés dans le développement personnel, entrepreneurial, communautaire et international. Présente dans plus de 100 pays, JCI constitue un réseau de référence pour la formation au leadership et l&apos;action citoyenne à l&apos;échelle mondiale.
            </motion.p>

          </div>

          {/* Right Block: Image Grid 2x2 with rounded cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Image Cell 1 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="aspect-[4/3] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg border border-white/10 relative group"
              >
                <img 
                  src={imgPresentation} 
                  alt="JCI Presentation Session" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Image Cell 2 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="aspect-[4/3] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg border border-white/10 relative group"
              >
                <img 
                  src={imgMeeting} 
                  alt="JCI Leaders meeting" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Image Cell 3 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="aspect-[4/3] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg border border-white/10 relative group"
              >
                <img 
                  src={imgDinner} 
                  alt="JCI Ceremony and dinner" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Image Cell 4 */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="aspect-[4/3] rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-lg border border-white/10 relative group"
              >
                <img 
                  src={imgPinning} 
                  alt="JCI Badge pinning ceremony" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
