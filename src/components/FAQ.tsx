import React, { useState } from "react";
import { FAQS } from "../types";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("f1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="py-20 md:py-28 bg-[#FAFBFD] text-gray-950 scroll-mt-12 overflow-hidden relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from screenshot layout */}
        <div className="text-center mb-14 md:mb-18 space-y-4 select-none">
          <span className="block text-xs font-sans font-bold uppercase tracking-[0.2em] text-gray-600">
            Trust By
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6.5xl font-sans font-black tracking-tight leading-none text-gray-950 max-w-2xl mx-auto">
            Frequently <br /> Asked Question
          </h2>
        </div>

        {/* Dynamic customized Accordion stack centering the items */}
        <div className="max-w-3xl mx-auto space-y-5">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className={`transition-all duration-300 border border-transparent select-none cursor-pointer ${
                  isOpen
                    ? "bg-[#F3F5F8] rounded-[32px] p-6 sm:p-8 shadow-sm border-gray-200/20"
                    : "bg-[#EEF4F8] rounded-full py-4.5 px-6 sm:px-8 hover:bg-[#E5EEF4]"
                }`}
              >
                
                {/* Horizontal flexible content area */}
                <div className="flex items-center justify-between gap-5 text-left">
                  
                  {/* Text labels container */}
                  <div className="flex-1">
                    <h3 
                      className={`font-sans font-extrabold tracking-tight transition-all duration-200 ${
                        isOpen 
                          ? "text-base sm:text-lg md:text-xl text-gray-950" 
                          : "text-sm sm:text-base md:text-lg text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* Collapsed content rendered dynamically */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-600 font-sans font-normal leading-relaxed text-left pr-2">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Circle interactive toggle button container matching design exactly */}
                  <div className="flex-shrink-0 self-start sm:self-center">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-sm bg-white border border-gray-100 font-bold transition-all duration-150 ${
                        isOpen ? "hover:scale-105" : "hover:scale-[1.03]"
                      }`}
                    >
                      {isOpen ? (
                        <X className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-gray-800 stroke-[2.5]" />
                      ) : (
                        <Plus className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-gray-800 stroke-[2.5]" />
                      )}
                    </motion.div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Secondary support footer contact cue */}
        <div className="mt-14 text-center">
          <p className="text-xs text-gray-400 font-sans">
            Des questions supplémentaires sur la JCI Convention ? Écrivez-nous à :{" "}
            <a 
              href="mailto:iarivo@jci.mg" 
              className="text-[#00A6DF] font-bold hover:underline"
            >
              iarivo@jci.mg
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
