import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { TIMELINE_ERAS, WORLD_OVERVIEW, TimelineEra } from '../../data/lore';
import { Maximize2, Map } from 'lucide-react';

interface WorldHistoryProps {
  onOpenMapLightbox: () => void;
}

export const WorldHistory: React.FC<WorldHistoryProps> = ({ onOpenMapLightbox }) => {
  const [selectedEra, setSelectedEra] = useState<TimelineEra>(TIMELINE_ERAS[0]);

  return (
    <section id="mundo" className="relative py-24 sm:py-32 bg-elyndor-deepBlack overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-elyndor-ancientGold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-elyndor-magicViolet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="El Continente del Ascenso"
          title="A WORLD SHAPED BY HISTORY"
          description={WORLD_OVERVIEW.worldHistoryIntro}
        />

        {/* 4 Historical Blocks Timeline */}
        <div className="mt-12">
          {/* Era Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {TIMELINE_ERAS.map((era) => {
              const isSelected = selectedEra.id === era.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEra(era)}
                  className={`text-left p-5 transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-elyndor-nightBlue border-elyndor-luminousGold shadow-gold-sm translate-y-[-2px]'
                      : 'bg-elyndor-nightBlue/40 border-elyndor-borderGold/40 hover:border-elyndor-ancientGold/70 hover:bg-elyndor-nightBlue/70'
                  }`}
                >
                  {/* Active Indicator Top Edge */}
                  {isSelected && (
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-elyndor-ancientGold via-elyndor-luminousGold to-elyndor-ancientGold" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-elyndor-ancientGold">
                      ERA {era.number}
                    </span>
                    <span className="text-sm font-cinzel text-elyndor-stoneGrey/60">
                      {era.rune}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-cinzel font-bold text-elyndor-ivoryWhite mb-1">
                    {era.title}
                  </h3>

                  <span className="text-[11px] uppercase tracking-wider text-elyndor-stoneGrey block mb-2 font-medium">
                    {era.period}
                  </span>

                  <p className="text-xs text-elyndor-stoneGrey line-clamp-2 leading-relaxed">
                    {era.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Era Deep Dive Banner */}
          <div className="p-6 sm:p-8 bg-elyndor-nightBlue/60 border border-elyndor-borderGold relative mb-16 corner-trim">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-elyndor-luminousGold mb-2 font-cinzel">
                  <span>{selectedEra.period}</span>
                  <span>•</span>
                  <span>Capítulo Histórico {selectedEra.number}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-elyndor-ivoryWhite mb-4">
                  {selectedEra.title}
                </h3>

                <p className="text-sm sm:text-base text-elyndor-stoneGrey leading-relaxed mb-6 font-cormorant text-lg">
                  {selectedEra.fullDescription}
                </p>

                <div>
                  <h4 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-ancientGold font-semibold mb-3">
                    Acontecimientos Clave:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedEra.keyEvents.map((event, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-elyndor-ivoryWhite/90 bg-elyndor-deepBlack/50 p-3 border-l-2 border-elyndor-ancientGold"
                      >
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Runic Emblem Visual */}
              <div className="hidden lg:flex flex-col items-center justify-center p-6 border border-elyndor-borderGold/40 bg-elyndor-deepBlack/40 min-w-[200px]">
                <span className="text-5xl font-cinzel text-elyndor-ancientGold/70 mb-2">
                  {selectedEra.rune}
                </span>
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-elyndor-stoneGrey text-center">
                  Sello de la {selectedEra.period}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* General Continental Map Showcase */}
        <div className="mt-16 pt-8 border-t border-elyndor-borderGold/40">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-elyndor-ancientGold font-cinzel block mb-2">
              Cartografía Oficial de Elyndor
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-elyndor-ivoryWhite">
              EL CONTINENTE DEL ASCENSO
            </h3>
            <p className="text-xs sm:text-sm text-elyndor-stoneGrey mt-2">
              Arte conceptual y referencia geográfica general de las siete grandes regiones continentales.
            </p>
          </div>

          {/* Map Viewer Container with object-fit: contain */}
          <div className="relative group max-w-5xl mx-auto bg-elyndor-nightBlue/40 border border-elyndor-borderGold p-3 sm:p-4 shadow-2xl overflow-hidden corner-trim">
            {/* Conceptual Art Badge */}
            <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-elyndor-ancientGold/40 text-[11px] font-cinzel text-elyndor-luminousGold">
              <Map className="w-3.5 h-3.5" />
              <span>Arte Conceptual Cartográfico · No es gameplay</span>
            </div>

            {/* Lightbox Trigger Button Overlay */}
            <button
              onClick={onOpenMapLightbox}
              className="absolute top-6 right-6 z-10 p-2 sm:px-3 sm:py-1.5 bg-elyndor-nightBlue/90 hover:bg-elyndor-ancientGold hover:text-elyndor-deepBlack text-elyndor-ivoryWhite border border-elyndor-ancientGold/60 transition-all flex items-center gap-2 text-xs font-cinzel"
              title="Abrir mapa en pantalla completa"
              aria-label="Inspeccionar mapa general en alta resolución"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Inspeccionar en Alta Resolución</span>
            </button>

            {/* Map Image strictly with object-fit: contain */}
            <div
              onClick={onOpenMapLightbox}
              className="cursor-pointer overflow-hidden flex items-center justify-center min-h-[320px] sm:min-h-[480px] lg:min-h-[580px] bg-black/60 relative"
            >
              <img
                src="/assets/02_Mundo_Mapas/mapa-general-elyndor.png"
                alt="Mapa General del Continente de Elyndor"
                className="max-h-[700px] w-full object-contain transform transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="px-4 py-2 bg-elyndor-nightBlue/90 border border-elyndor-luminousGold text-elyndor-luminousGold font-cinzel text-xs tracking-widest uppercase">
                  Haz clic para ampliar y explorar con zoom
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="p-3 text-center text-xs text-elyndor-stoneGrey border-t border-elyndor-borderGold/40 mt-3 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>Continente del Ascenso — División política y geográfica de Elyndor</span>
              <button
                onClick={onOpenMapLightbox}
                className="text-elyndor-luminousGold hover:underline text-xs font-cinzel"
              >
                Abrir visor cartográfico interactivo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
