import React from 'react';
import { Modal } from '../ui/Modal';
import { Region } from '../../types';
import { Button } from '../ui/Button';
import { MapPin, Maximize2 } from 'lucide-react';

interface RegionDetailModalProps {
  region: Region | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenMap: () => void;
}

export const RegionDetailModal: React.FC<RegionDetailModalProps> = ({
  region,
  isOpen,
  onClose,
  onOpenMap,
}) => {
  if (!region) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={region.name}
      subtitle={`Región ${region.romanNumeral} de Elyndor · ${region.biome}`}
      maxWidth="4xl"
    >
      <div className="space-y-6 text-elyndor-ivoryWhite">
        {/* Top Region Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-elyndor-deepBlack border border-elyndor-borderGold text-xs font-mono font-bold text-elyndor-ancientGold">
              REGIÓN {region.romanNumeral}
            </span>
            <span className="text-xs text-elyndor-luminousGold font-cinzel">
              {region.recommendedLevel}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-elyndor-stoneGrey">Nivel de Amenaza:</span>
            <span className="px-2.5 py-0.5 bg-red-950/60 border border-red-700/40 text-red-200 font-semibold text-[11px]">
              {region.threatLevel}
            </span>
          </div>
        </div>

        {/* Region Preview Image Container with object-fit: contain */}
        <div className="relative h-64 sm:h-72 w-full bg-black/70 border border-elyndor-borderGold/60 overflow-hidden flex items-center justify-center p-2">
          <img
            src={region.image}
            alt={region.name}
            className="max-h-full max-w-full object-contain filter brightness-90"
          />
          <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 text-[10px] text-elyndor-stoneGrey font-cinzel border border-white/10">
            Arte Conceptual Regional
          </div>
        </div>

        {/* Description & Lore */}
        <div className="space-y-3">
          <h4 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-bold">
            Historia y Estado Geopolítico
          </h4>
          <p className="text-xs sm:text-sm text-elyndor-stoneGrey leading-relaxed font-cormorant text-lg">
            "{region.lore}"
          </p>
        </div>

        {/* Key Locations / Points of Interest */}
        {region.keyLocations && region.keyLocations.length > 0 ? (
          <div>
            <h4 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-ancientGold font-bold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-elyndor-luminousGold" />
              <span>Asentamientos y Puntos Clave de la Región:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {region.keyLocations.map((loc) => (
                <div
                  key={loc.name}
                  className="p-3.5 bg-elyndor-deepBlack/60 border border-white/5 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-xs font-bold text-elyndor-ivoryWhite">
                      {loc.name}
                    </span>
                    <span className="text-[10px] text-elyndor-ancientGold uppercase">
                      {loc.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-elyndor-stoneGrey leading-relaxed">
                    {loc.description}
                  </p>
                  <span className="text-[10px] text-elyndor-ancientGold/80 block italic">
                    Relevancia: {loc.significance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : region.pointsOfInterest ? (
          <div>
            <h4 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-ancientGold font-bold mb-2">
              Hitos de Exploración:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {region.pointsOfInterest.map((poi) => (
                <li
                  key={poi}
                  className="p-2.5 bg-elyndor-deepBlack/60 border border-white/5 text-xs text-elyndor-stoneGrey flex items-center gap-2"
                >
                  <span className="text-elyndor-ancientGold">❖</span>
                  <span>{poi}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenMap}
            icon={<Maximize2 className="w-4 h-4" />}
          >
            Abrir Cartografía General
          </Button>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Cerrar Ficha
          </Button>
        </div>
      </div>
    </Modal>
  );
};
