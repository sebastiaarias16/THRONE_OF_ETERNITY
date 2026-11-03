import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { REGIONS_DATA, STARTING_REGION_SPOTLIGHT } from '../../data/regions';
import { Region } from '../../types';
import { Button } from '../ui/Button';
import { MapPin, Compass, ShieldAlert, Maximize2 } from 'lucide-react';

interface RegionsSectionProps {
  onSelectRegion: (region: Region) => void;
  onOpenRegionalMapLightbox: () => void;
}

export const RegionsSection: React.FC<RegionsSectionProps> = ({
  onSelectRegion,
  onOpenRegionalMapLightbox,
}) => {
  const [activeTab, setActiveTab] = useState<'starting' | 'all'>('starting');

  const startingRegion = REGIONS_DATA.find((r) => r.isStartingRegion) || REGIONS_DATA[0];

  return (
    <section id="regiones" className="relative py-24 sm:py-32 bg-elyndor-deepBlack overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-elyndor-ancientGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Territorios del Continente"
          title="DISCOVER THE LANDS OF ELYNDOR"
          description="Siete provincias geográficas delimitadas por antiguas fronteras y cicatrices primordiales. Desde los valles iniciales del alba hasta las anomalías del Trono Silente."
        />

        {/* Region View Selector Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-elyndor-nightBlue border border-elyndor-borderGold">
            <button
              onClick={() => setActiveTab('starting')}
              className={`px-5 py-2.5 text-xs font-cinzel tracking-wider uppercase transition-all ${
                activeTab === 'starting'
                  ? 'bg-elyndor-ancientGold text-elyndor-deepBlack font-bold shadow-sm'
                  : 'text-elyndor-stoneGrey hover:text-white'
              }`}
            >
              ★ Región Inicial: Tierras del Alba
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 text-xs font-cinzel tracking-wider uppercase transition-all ${
                activeTab === 'all'
                  ? 'bg-elyndor-ancientGold text-elyndor-deepBlack font-bold shadow-sm'
                  : 'text-elyndor-stoneGrey hover:text-white'
              }`}
            >
              Todas las 7 Regiones
            </button>
          </div>
        </div>

        {/* Tab 1: Starting Region Spotlight (Tierras del Alba) */}
        {activeTab === 'starting' && (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Spotlight Card */}
            <div className="bg-elyndor-nightBlue/50 border border-elyndor-borderGold p-6 sm:p-10 corner-trim shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Regional Lore & Locations */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-elyndor-ancientGold/15 border border-elyndor-ancientGold/40 text-[11px] font-cinzel text-elyndor-luminousGold mb-4">
                    <Compass className="w-3.5 h-3.5" />
                    <span>REGIÓN I · ZONA DE INICIO DEL JUGADOR</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-cinzel font-bold text-elyndor-ivoryWhite mb-2">
                    TIERRAS DEL ALBA
                  </h3>

                  <p className="text-xs uppercase tracking-widest text-elyndor-ancientGold font-semibold mb-4">
                    Nivel Recomendado: Nivel 1 - 15 · Bioma de Valles Templados
                  </p>

                  <p className="text-sm text-elyndor-stoneGrey leading-relaxed mb-6 font-cormorant text-lg">
                    {STARTING_REGION_SPOTLIGHT.summary}
                  </p>

                  {/* Key Settlement & Landmark Grid */}
                  <div className="mt-6">
                    <h4 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-elyndor-ancientGold" />
                      <span>Puntos Clave y Asentamientos de Tierras del Alba:</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {STARTING_REGION_SPOTLIGHT.keyLocations.map((loc) => (
                        <div
                          key={loc.name}
                          className="p-3.5 bg-elyndor-deepBlack/60 border border-white/5 hover:border-elyndor-borderGold transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-cinzel text-sm font-bold text-elyndor-ivoryWhite">
                              {loc.name}
                            </span>
                            <span className="text-[10px] text-elyndor-ancientGold uppercase tracking-wider">
                              {loc.type.split(' ')[0]}
                            </span>
                          </div>
                          <p className="text-xs text-elyndor-stoneGrey line-clamp-2 leading-relaxed">
                            {loc.description}
                          </p>
                          <span className="text-[11px] text-elyndor-ancientGold/80 mt-1 block italic font-cormorant">
                            Importancia: {loc.significance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => onSelectRegion(startingRegion)}
                    >
                      Ver Ficha Geográfica de Tierras del Alba
                    </Button>

                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onOpenRegionalMapLightbox}
                      icon={<Maximize2 className="w-4 h-4" />}
                    >
                      Inspeccionar Mapa Cartográfico de Nareth
                    </Button>
                  </div>
                </div>

                {/* Right Column: Regional Map Container with object-fit: contain */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div
                    onClick={onOpenRegionalMapLightbox}
                    className="relative group cursor-pointer w-full bg-black/60 border border-elyndor-borderGold/60 p-2 shadow-xl"
                  >
                    <div className="absolute top-4 left-4 z-10 px-2 py-0.5 bg-black/80 border border-elyndor-ancientGold/40 text-[10px] text-elyndor-luminousGold font-cinzel">
                      Mapa Regional Oficial · Nareth
                    </div>

                    <div className="h-72 sm:h-96 w-full flex items-center justify-center overflow-hidden">
                      <img
                        src="/assets/02_Mundo_Mapas/mapa-tierras-del-alba-nareth.png"
                        alt="Mapa de Tierras del Alba y Asentamiento de Nareth"
                        className="max-h-full max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 bg-elyndor-deepBlack/90 border border-elyndor-luminousGold text-elyndor-luminousGold font-cinzel text-xs">
                        Clic para ampliar mapa
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] text-elyndor-stoneGrey/70 mt-2 text-center">
                    Arte conceptual cartográfico de referencia. No representa el gameplay final.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: All 7 Regions Grid */}
        {activeTab === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-fade-in">
            {REGIONS_DATA.map((region) => {
              const isStarting = region.isStartingRegion;

              return (
                <div
                  key={region.id}
                  className={`ornamental-card p-6 flex flex-col justify-between corner-trim cursor-pointer ${
                    isStarting ? 'border-elyndor-ancientGold/60 bg-elyndor-nightBlue/80' : ''
                  }`}
                  onClick={() => onSelectRegion(region)}
                >
                  <div>
                    {/* Top Row: Roman Numeral & Threat Level */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-elyndor-ancientGold px-2.5 py-0.5 bg-black/40 border border-elyndor-borderGold">
                        REGIÓN {region.romanNumeral}
                      </span>

                      <div className="flex items-center gap-1.5 text-[11px] text-elyndor-stoneGrey">
                        <ShieldAlert className="w-3.5 h-3.5 text-elyndor-ancientGold" />
                        <span>Peligro: {region.threatLevel}</span>
                      </div>
                    </div>

                    {/* Region Thumbnail Preview (object-contain with dark framing) */}
                    <div className="h-40 w-full bg-black/60 border border-elyndor-borderGold/40 mb-4 overflow-hidden flex items-center justify-center relative">
                      <img
                        src={region.image}
                        alt={`Arte de la región ${region.name}`}
                        className="max-h-full max-w-full object-contain filter brightness-90 group-hover:scale-105 transition-transform"
                      />
                      {isStarting && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-elyndor-ancientGold text-elyndor-deepBlack text-[10px] font-cinzel font-bold">
                          ZONA INICIAL
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-cinzel font-bold text-elyndor-ivoryWhite mb-1">
                      {region.name}
                    </h3>

                    {/* Biome */}
                    <p className="text-xs text-elyndor-ancientGold mb-3 font-medium">
                      {region.biome}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-elyndor-stoneGrey leading-relaxed mb-4">
                      {region.shortDescription}
                    </p>

                    {/* Level requirement */}
                    <div className="text-[11px] text-elyndor-ivoryWhite/80 pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-elyndor-stoneGrey">Nivel Sugerido:</span>
                      <span className="font-semibold text-elyndor-luminousGold">
                        {region.recommendedLevel}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-cinzel text-elyndor-luminousGold">
                    <span>Explorar detalles y puntos de interés</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
