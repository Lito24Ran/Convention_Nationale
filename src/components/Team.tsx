import { Mail, ShieldCheck } from "lucide-react";
import { TEAM } from "../types";

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white text-gray-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full w-fit">
            <span className="text-xs font-mono tracking-wider uppercase font-extrabold text-[#0F1026]">
              L&apos;ÉQUIPE RELAIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#0F1026] tracking-tight leading-tight">
            Accompagnateurs & Comité
          </h2>
          <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
            Nous sommes mobilisés pour faire de cet événement national un levier majeur de votre croissance intellectuelle et stratégique.
          </p>
        </div>

        {/* Committee list grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM.map((member) => (
            <div
              key={member.id}
              id={`team-member-${member.id}`}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-6 text-center shadow-sm flex flex-col justify-between space-y-4 group hover:shadow-lg transition-all"
            >
              <div className="space-y-4 flex flex-col items-center">
                {/* Circular image with hover border scale */}
                <div className="h-28 w-28 rounded-full border-4 border-amber-400 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-sans font-bold text-[#0F1026] tracking-tight">
                    {member.name}
                  </h3>
                  <span className="inline-block text-xs font-mono uppercase bg-amber-400/10 text-[#0F1026] font-extrabold px-2.5 py-0.5 rounded-lg mt-1 border border-amber-400/20">
                    {member.role}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-xs">
                  {member.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-center">
                <a
                  href={`mailto:contact@convention-nationale.fr?subject=Demande à ${member.name}`}
                  className="text-xs font-sans text-gray-500 hover:text-[#0F1026] inline-flex items-center space-x-1 font-semibold"
                >
                  <Mail className="h-3.5 w-3.5 text-amber-500" />
                  <span>Poser une question</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
