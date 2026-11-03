import React from 'react';
import { Modal } from '../ui/Modal';
import { Race } from '../../types';
import { CANONICAL_RACE_DISCLAIMER } from '../../data/races';
import { BookOpen, Users, Activity, Swords, Info } from 'lucide-react';
import { Button } from '../ui/Button';

interface RaceDetailModalProps {
  race: Race | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenArtReference: () => void;
}

export const RaceDetailModal: React.FC<RaceDetailModalProps> = ({
  race,
  isOpen,
  onClose,
  onOpenArtReference,
}) => {
  if (!race) return null;

  const isConcordia = race.historicalFaction === 'Concordia Mortal';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={race.name}
      subtitle={`Civilización de Elyndor · ${race.pronunciation || race.name}`}
      maxWidth="4xl"
      variant={isConcordia ? 'gold' : 'violet'}
    >
      <div className="space-y-8 text-elyndor-ivoryWhite">
        {/* Top Badges Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h4 className="text-sm font-cinzel text-elyndor-ancientGold font-semibold">
              {race.title}
            </h4>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {race.coreTraits.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 bg-elyndor-deepBlack border border-elyndor-borderGold text-xs text-elyndor-ivoryWhite font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-elyndor-stoneGrey block font-mono">
              Afinidad Histórica
            </span>
            <span
              className={`inline-block px-3 py-1 text-xs font-cinzel font-bold border mt-1 ${
                isConcordia
                  ? 'border-elyndor-ancientGold text-elyndor-luminousGold bg-elyndor-ancientGold/10'
                  : 'border-elyndor-magicViolet text-purple-300 bg-elyndor-magicViolet/20'
              }`}
            >
              {race.historicalFaction}
            </span>
          </div>
        </div>

        {/* Faction Alignment Note */}
        <div className="p-3.5 bg-elyndor-deepBlack/60 border border-white/5 text-xs text-elyndor-stoneGrey flex items-start gap-2.5">
          <Info className="w-4 h-4 text-elyndor-ancientGold flex-shrink-0 mt-0.5" />
          <p>{race.factionAlignmentNote}</p>
        </div>

        {/* 2-Column Grid: Lore, Culture, Anatomy, Combat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Historia y Orígenes */}
          <div className="p-5 bg-elyndor-deepBlack/50 border border-elyndor-borderGold/40 space-y-2">
            <h5 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Historia y Orígenes</span>
            </h5>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              {race.lore}
            </p>
          </div>

          {/* Cultura y Sociedad */}
          <div className="p-5 bg-elyndor-deepBlack/50 border border-elyndor-borderGold/40 space-y-2">
            <h5 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-bold flex items-center gap-2">
              <Users className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Cultura y Organización</span>
            </h5>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              {race.culture}
            </p>
            <div className="pt-2 text-[11px] text-elyndor-ancientGold/90 font-medium">
              Estructura: {race.organization}
            </div>
          </div>

          {/* Anatomía y Fisiología Oficial */}
          <div className="p-5 bg-elyndor-deepBlack/50 border border-elyndor-borderGold/40 space-y-2">
            <h5 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-bold flex items-center gap-2">
              <Activity className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Anatomía y Fisiología</span>
            </h5>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              {race.anatomy}
            </p>
          </div>

          {/* Estilo Táctico y Marcial */}
          <div className="p-5 bg-elyndor-deepBlack/50 border border-elyndor-borderGold/40 space-y-2">
            <h5 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-bold flex items-center gap-2">
              <Swords className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Doctrina de Combate</span>
            </h5>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              {race.combatStyle}
            </p>
          </div>
        </div>

        {/* Canonical Note Alert */}
        <div className="p-4 bg-elyndor-nightBlue/40 border-l-2 border-elyndor-ancientGold text-[11px] text-elyndor-stoneGrey">
          {CANONICAL_RACE_DISCLAIMER}
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenArtReference}
          >
            Ver Lámina Oficial de Referencia Visual
          </Button>

          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Cerrar Ficha
          </Button>
        </div>
      </div>
    </Modal>
  );
};
