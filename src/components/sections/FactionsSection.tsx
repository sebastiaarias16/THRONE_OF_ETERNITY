import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FACTIONS_DATA, FACTION_NEUTRALITY_NOTE } from '../../data/factions';
import { Scale, Swords } from 'lucide-react';

export const FactionsSection: React.FC = () => {
  const concordia = FACTIONS_DATA.find((f) => f.id === 'concordia-mortal')!;
  const dominio = FACTIONS_DATA.find((f) => f.id === 'dominio-abisal')!;

  return (
    <section id="facciones" className="relative py-24 sm:py-32 bg-[#06080C] overflow-hidden">
      {/* Dynamic ambient duel background: Gold glow on left, Violet glow on right */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-elyndor-ancientGold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-elyndor-magicViolet/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Geopolítica de Elyndor"
          title="TWO POWERS. DIFFERENT VISIONS."
          description="Dos visiones opuestas sobre el destino, la supervivencia y el control de las fuerzas arcanas. En un mundo herido, la justicia depende de la perspectiva de quien empuña el acero."
        />

        {/* Neutrality Disclaimer */}
        <div className="max-w-3xl mx-auto mb-12 p-4 bg-elyndor-nightBlue/40 border border-elyndor-borderGold/40 text-center text-xs text-elyndor-stoneGrey leading-relaxed">
          <p className="font-cormorant text-base italic text-elyndor-ivoryWhite/90">
            "{FACTION_NEUTRALITY_NOTE}"
          </p>
        </div>

        {/* Faction Duel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Faction 1: Concordia Mortal */}
          <div className="bg-elyndor-nightBlue/50 border-2 border-elyndor-ancientGold/40 hover:border-elyndor-luminousGold transition-all duration-300 p-8 sm:p-10 corner-trim flex flex-col justify-between shadow-gold-sm relative group">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-elyndor-ancientGold via-elyndor-luminousGold to-elyndor-ancientGold" />

            <div>
              {/* Emblem & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 border border-elyndor-luminousGold bg-elyndor-deepBlack flex items-center justify-center text-elyndor-luminousGold text-2xl font-cinzel shadow-gold-sm">
                  ⚖
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-elyndor-ancientGold font-cinzel font-semibold block">
                    Alianza Central
                  </span>
                  <span className="text-xs text-elyndor-stoneGrey">
                    Preservación & Consejo
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-cinzel font-bold text-elyndor-ivoryWhite mb-2">
                {concordia.name}
              </h3>

              {/* Principles */}
              <div className="flex items-center gap-2 mb-6">
                {concordia.principles.map((principle) => (
                  <span
                    key={principle}
                    className="px-3 py-1 bg-elyndor-ancientGold/15 border border-elyndor-ancientGold/40 text-xs font-cinzel font-bold tracking-widest text-elyndor-luminousGold"
                  >
                    {principle}
                  </span>
                ))}
              </div>

              {/* Official Philosophy */}
              <div className="p-4 bg-elyndor-deepBlack/60 border-l-2 border-elyndor-luminousGold mb-6">
                <p className="text-sm text-elyndor-ivoryWhite font-cormorant italic text-lg leading-relaxed">
                  "{concordia.philosophy}"
                </p>
              </div>

              {/* Deep Vision */}
              <p className="text-xs sm:text-sm text-elyndor-stoneGrey leading-relaxed mb-6">
                {concordia.vision}
              </p>

              {/* Banner Quote */}
              <p className="text-xs text-elyndor-ancientGold/90 italic font-cormorant mb-6">
                {concordia.bannerQuote}
              </p>

              {/* Structural Details */}
              <div className="space-y-3 pt-4 border-t border-white/5 text-xs">
                <div>
                  <span className="text-elyndor-ivoryWhite/80 font-semibold block font-cinzel text-[11px]">
                    Estructura de Mando:
                  </span>
                  <span className="text-elyndor-stoneGrey">{concordia.structure}</span>
                </div>

                <div>
                  <span className="text-elyndor-ivoryWhite/80 font-semibold block font-cinzel text-[11px]">
                    Afinidad Histórica Predominante:
                  </span>
                  <div className="flex gap-2 mt-1">
                    {concordia.associatedRaces.map((race) => (
                      <span
                        key={race}
                        className="px-2 py-0.5 bg-elyndor-deepBlack border border-elyndor-borderGold text-elyndor-stoneGrey text-[11px]"
                      >
                        {race}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-elyndor-borderGold/40 text-[11px] text-elyndor-stoneGrey/70 flex items-center gap-2">
              <Scale className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Prioridad: Evitar un segundo cataclismo mediante la ley compartida.</span>
            </div>
          </div>

          {/* Faction 2: Dominio Abisal */}
          <div className="bg-elyndor-nightBlue/50 border-2 border-elyndor-magicViolet/40 hover:border-elyndor-magicViolet transition-all duration-300 p-8 sm:p-10 corner-trim flex flex-col justify-between shadow-violet-md relative group">
            {/* Top decorative accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-800 via-elyndor-magicViolet to-purple-800" />

            <div>
              {/* Emblem & Title */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 border border-elyndor-magicViolet bg-elyndor-deepBlack flex items-center justify-center text-purple-300 text-2xl font-cinzel shadow-violet-md">
                  ⚔
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-elyndor-magicViolet font-cinzel font-semibold block">
                    Bloque Soberano
                  </span>
                  <span className="text-xs text-elyndor-stoneGrey">
                    Autonomía & Supervivencia
                  </span>
                </div>
              </div>

              <h3 className="text-3xl font-cinzel font-bold text-elyndor-ivoryWhite mb-2">
                {dominio.name}
              </h3>

              {/* Principles */}
              <div className="flex items-center gap-2 mb-6">
                {dominio.principles.map((principle) => (
                  <span
                    key={principle}
                    className="px-3 py-1 bg-elyndor-magicViolet/20 border border-elyndor-magicViolet/50 text-xs font-cinzel font-bold tracking-widest text-purple-300"
                  >
                    {principle}
                  </span>
                ))}
              </div>

              {/* Official Philosophy */}
              <div className="p-4 bg-elyndor-deepBlack/60 border-l-2 border-elyndor-magicViolet mb-6">
                <p className="text-sm text-elyndor-ivoryWhite font-cormorant italic text-lg leading-relaxed">
                  "{dominio.philosophy}"
                </p>
              </div>

              {/* Deep Vision */}
              <p className="text-xs sm:text-sm text-elyndor-stoneGrey leading-relaxed mb-6">
                {dominio.vision}
              </p>

              {/* Banner Quote */}
              <p className="text-xs text-purple-300/90 italic font-cormorant mb-6">
                {dominio.bannerQuote}
              </p>

              {/* Structural Details */}
              <div className="space-y-3 pt-4 border-t border-white/5 text-xs">
                <div>
                  <span className="text-elyndor-ivoryWhite/80 font-semibold block font-cinzel text-[11px]">
                    Estructura de Mando:
                  </span>
                  <span className="text-elyndor-stoneGrey">{dominio.structure}</span>
                </div>

                <div>
                  <span className="text-elyndor-ivoryWhite/80 font-semibold block font-cinzel text-[11px]">
                    Afinidad Histórica Predominante:
                  </span>
                  <div className="flex gap-2 mt-1">
                    {dominio.associatedRaces.map((race) => (
                      <span
                        key={race}
                        className="px-2 py-0.5 bg-elyndor-deepBlack border border-purple-900/40 text-elyndor-stoneGrey text-[11px]"
                      >
                        {race}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-elyndor-borderGold/40 text-[11px] text-elyndor-stoneGrey/70 flex items-center gap-2">
              <Swords className="w-4 h-4 text-elyndor-magicViolet" />
              <span>Prioridad: Garantizar la supervivencia soberana mediante la fortaleza incuestionable.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
