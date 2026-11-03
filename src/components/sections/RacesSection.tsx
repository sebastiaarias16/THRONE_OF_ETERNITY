import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { RACES_DATA, CANONICAL_RACE_DISCLAIMER } from '../../data/races';
import { Race } from '../../types';
import { Button } from '../ui/Button';
import { Crown, Sparkles, Hammer, Shield, Eye, Flame, Info, ExternalLink, Image as ImageIcon } from 'lucide-react';

interface RacesSectionProps {
  onSelectRace: (race: Race) => void;
  onOpenRaceReference: (type: 'visual' | 'modeling') => void;
}

export const RacesSection: React.FC<RacesSectionProps> = ({
  onSelectRace,
  onOpenRaceReference,
}) => {
  const getRaceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      default:
        return <Crown className="w-5 h-5" />;
    }
  };

  return (
    <section id="razas" className="relative py-24 sm:py-32 bg-[#090C12] overflow-hidden">
      {/* Background ambient runes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-elyndor-magicViolet/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Civilizaciones de Elyndor"
          title="SIX RACES. ONE WORLD."
          description="Seis linajes forjados por la historia, unidos por la necesidad y divididos por sus ideales de supervivencia tras la Ruptura."
        />

        {/* Canonical Note Alert */}
        <div className="mb-12 max-w-4xl mx-auto p-4 sm:p-5 bg-elyndor-nightBlue/50 border-l-4 border-elyndor-ancientGold border-y border-r border-elyndor-borderGold/40 text-xs text-elyndor-stoneGrey leading-relaxed flex items-start gap-3">
          <Info className="w-5 h-5 text-elyndor-ancientGold flex-shrink-0 mt-0.5" />
          <p>{CANONICAL_RACE_DISCLAIMER}</p>
        </div>

        {/* Six Race Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RACES_DATA.map((race) => {
            const isConcordia = race.historicalFaction === 'Concordia Mortal';

            return (
              <div
                key={race.id}
                className="ornamental-card p-6 flex flex-col justify-between group corner-trim cursor-pointer"
                onClick={() => onSelectRace(race)}
              >
                <div>
                  {/* Top Bar: Icon & Faction Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 border border-elyndor-borderGold bg-elyndor-deepBlack flex items-center justify-center text-elyndor-luminousGold group-hover:border-elyndor-luminousGold transition-colors"
                      style={{ color: race.accentColor }}
                    >
                      {getRaceIcon(race.iconName)}
                    </div>

                    <span
                      className={`text-[10px] uppercase tracking-wider font-cinzel px-2.5 py-1 border ${
                        isConcordia
                          ? 'border-elyndor-ancientGold/50 text-elyndor-luminousGold bg-elyndor-ancientGold/10'
                          : 'border-elyndor-magicViolet/50 text-purple-300 bg-elyndor-magicViolet/15'
                      }`}
                    >
                      {race.historicalFaction}
                    </span>
                  </div>

                  {/* Title & Pronunciation */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-cinzel font-bold text-elyndor-ivoryWhite group-hover:text-elyndor-luminousGold transition-colors">
                      {race.name}
                    </h3>
                    <span className="text-xs text-elyndor-ancientGold/80 italic font-cormorant">
                      {race.title}
                    </span>
                  </div>

                  {/* Core Traits Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {race.coreTraits.map((trait) => (
                      <span
                        key={trait}
                        className="text-[11px] px-2 py-0.5 bg-elyndor-deepBlack/80 border border-white/5 text-elyndor-stoneGrey"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-xs text-elyndor-stoneGrey leading-relaxed mb-4">
                    {race.summary}
                  </p>

                  {/* Organization Form */}
                  <div className="pt-3 border-t border-white/5 text-[11px] text-elyndor-stoneGrey">
                    <span className="text-elyndor-ivoryWhite/80 font-semibold block">
                      Organización Social:
                    </span>
                    <span className="text-elyndor-stoneGrey">{race.organization}</span>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-cinzel text-elyndor-luminousGold group-hover:underline flex items-center gap-1.5">
                    <span>Ficha y Anatomía Completa</span>
                    <span>→</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-elyndor-stoneGrey/60">
                    Inspeccionar
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conceptual Art Reference Gallery Strip */}
        <div className="mt-16 p-6 sm:p-8 bg-elyndor-nightBlue/40 border border-elyndor-borderGold/60 corner-trim">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-elyndor-ancientGold font-cinzel block mb-1">
                Archivos Visuales de Desarrollo
              </span>
              <h4 className="text-xl sm:text-2xl font-cinzel font-bold text-elyndor-ivoryWhite">
                LÁMINAS OFICIALES DE DISEÑO Y MODELADO
              </h4>
              <p className="text-xs text-elyndor-stoneGrey mt-2">
                Consulta los documentos gráficos oficiales que establecen la fisonomía, proporciones, ropajes y equipo de las seis civilizaciones de Elyndor.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onOpenRaceReference('visual')}
                icon={<ImageIcon className="w-4 h-4" />}
              >
                Referencia de Seis Razas
              </Button>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => onOpenRaceReference('modeling')}
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Guía de Modelado 3D
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
