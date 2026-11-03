import React from 'react';
import { Modal } from '../ui/Modal';
import { DevlogPost } from '../../types';
import { Button } from '../ui/Button';
import { Calendar, Clock, BookOpen } from 'lucide-react';

interface DevlogDetailModalProps {
  post: DevlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onSubscribeClick: () => void;
}

export const DevlogDetailModal: React.FC<DevlogDetailModalProps> = ({
  post,
  isOpen,
  onClose,
  onSubscribeClick,
}) => {
  if (!post) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={post.title}
      subtitle={`DEVLOG #${post.number} · Cuaderno de Desarrollo de Elyndor`}
      maxWidth="3xl"
    >
      <div className="space-y-6 text-elyndor-ivoryWhite">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-elyndor-ancientGold">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 bg-elyndor-deepBlack border border-elyndor-borderGold text-[11px] font-mono text-elyndor-luminousGold flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-elyndor-ancientGold" />
              <span>{post.status.toUpperCase()}</span>
            </span>
          </div>
        </div>

        {/* Image Preview with object-fit: contain */}
        <div className="relative h-56 sm:h-64 w-full bg-black/70 border border-elyndor-borderGold/60 overflow-hidden flex items-center justify-center p-2">
          <img
            src={post.imagePlaceholder}
            alt={post.title}
            className="max-h-full max-w-full object-contain filter brightness-90"
          />
          <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] text-elyndor-stoneGrey font-cinzel border border-white/10">
            Material de Previsualización Editorial
          </div>
        </div>

        {/* Subtitle */}
        <div>
          <h4 className="text-sm sm:text-base font-cinzel text-elyndor-luminousGold font-semibold mb-2">
            {post.subtitle}
          </h4>
          <p className="text-xs sm:text-sm text-elyndor-stoneGrey leading-relaxed font-cormorant text-lg">
            "{post.description}"
          </p>
        </div>

        {/* Full Overview */}
        <div className="p-5 bg-elyndor-deepBlack/60 border border-elyndor-borderGold/40 space-y-3">
          <h5 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-ancientGold font-bold flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>Resumen Editorial de la Publicación</span>
          </h5>
          <p className="text-xs sm:text-sm text-elyndor-stoneGrey leading-relaxed">
            {post.fullOverview}
          </p>
        </div>

        {/* Topics Covered */}
        <div>
          <span className="text-[11px] font-cinzel uppercase tracking-wider text-elyndor-ancientGold block mb-2 font-semibold">
            Temas que se abordarán en este artículo:
          </span>
          <div className="flex flex-wrap gap-2">
            {post.topics.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-elyndor-nightBlue border border-elyndor-borderGold text-xs text-elyndor-ivoryWhite"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Note on release */}
        <div className="p-3 bg-elyndor-nightBlue/40 border-l-2 border-elyndor-ancientGold text-xs text-elyndor-stoneGrey">
          Esta publicación se encuentra en redacción por el equipo creativo. Si deseas recibir una notificación por correo tan pronto como sea publicada, puedes registrarte en la lista de novedades de la comunidad.
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              onSubscribeClick();
            }}
          >
            Avisarme cuando se publique
          </Button>

          <Button variant="secondary" size="sm" onClick={onClose}>
            Cerrar Ventana
          </Button>
        </div>
      </div>
    </Modal>
  );
};
