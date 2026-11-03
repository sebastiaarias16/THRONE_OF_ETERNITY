import React from 'react';
import { Modal } from '../ui/Modal';
import { STUDIO_VISION } from '../../data/community';
import { Button } from '../ui/Button';
import { Briefcase, Newspaper, Sparkles, FolderGit2, Mail } from 'lucide-react';

interface StudioFutureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const StudioFutureModal: React.FC<StudioFutureModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="VISIÓN DEL ESTUDIO INDEPENDIENTE"
      subtitle="Throne of Eternity Development Studio · Hoja de Ruta Institucional"
      maxWidth="3xl"
    >
      <div className="space-y-6 text-elyndor-ivoryWhite">
        {/* Intro */}
        <div className="p-4 bg-elyndor-nightBlue/70 border-l-2 border-elyndor-ancientGold">
          <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold mb-1">
            {STUDIO_VISION.name}
          </h4>
          <span className="text-[11px] font-mono text-elyndor-ancientGold block mb-2">
            {STUDIO_VISION.status}
          </span>
          <p className="text-xs text-elyndor-stoneGrey leading-relaxed font-cormorant text-base">
            "{STUDIO_VISION.description}"
          </p>
        </div>

        {/* Future Modules Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <Briefcase className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Vacantes y Colaboraciones</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              En fases posteriores de preproducción abriremos perfiles técnicos (C++ Gameplay Programmers, 3D Character Artists y Level Designers) para reforzar el núcleo de desarrollo.
            </p>
          </div>

          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <Newspaper className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Prensa, Creadores y Medios</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Un kit de prensa con logos vectoriales, arte conceptual en alta resolución y hojas informativas de lore estará disponible para periodistas y creadores de contenido.
            </p>
          </div>

          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <FolderGit2 className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Portafolio e I+D</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Investigación en generación procedural con PCG, optimización de shaders en Nanite e inteligencia artificial de criaturas mediante State Trees.
            </p>
          </div>

          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <Sparkles className="w-4 h-4 text-elyndor-ancientGold" />
              <span>Universo Expandido de Elyndor</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Bases conceptuales preparadas para futuras expansiones narrativas, novelas cortas de ambientación y proyectos complementarios.
            </p>
          </div>
        </div>

        {/* Roadmap List */}
        <div>
          <span className="text-xs font-cinzel uppercase tracking-widest text-elyndor-ancientGold font-bold block mb-2">
            Próximos Hitos del Estudio:
          </span>
          <ul className="space-y-1.5 text-xs text-elyndor-stoneGrey">
            {STUDIO_VISION.futureRoadmap.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 p-2 bg-elyndor-deepBlack/40 border-l border-elyndor-ancientGold">
                <span className="text-elyndor-luminousGold">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              onClose();
              onContactClick();
            }}
            icon={<Mail className="w-4 h-4" />}
          >
            Contactar para Prensa o Alianzas
          </Button>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
