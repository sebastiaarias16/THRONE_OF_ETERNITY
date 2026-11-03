import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  caption?: string;
  isConceptualArt?: boolean;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title,
  caption,
  isConceptualArt = true,
}) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.3, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.3, 0.7));
  const resetZoom = () => setScale(1);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md select-none animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      {/* Lightbox Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-elyndor-borderGold bg-elyndor-deepBlack/80 z-10">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-cinzel font-bold text-elyndor-ivoryWhite">{title}</h3>
            {isConceptualArt && (
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-elyndor-ancientGold/20 text-elyndor-luminousGold border border-elyndor-ancientGold/40 rounded">
                Arte Conceptual de Desarrollo
              </span>
            )}
          </div>
          {caption && <p className="text-xs text-elyndor-stoneGrey mt-0.5">{caption}</p>}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            className="p-2 text-elyndor-stoneGrey hover:text-elyndor-luminousGold hover:bg-white/5 rounded transition-colors"
            title="Alejar"
            aria-label="Alejar zoom"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-xs text-elyndor-stoneGrey w-12 text-center font-mono">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={zoomIn}
            className="p-2 text-elyndor-stoneGrey hover:text-elyndor-luminousGold hover:bg-white/5 rounded transition-colors"
            title="Acercar"
            aria-label="Acercar zoom"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={resetZoom}
            className="p-2 text-elyndor-stoneGrey hover:text-elyndor-luminousGold hover:bg-white/5 rounded transition-colors"
            title="Restablecer"
            aria-label="Restablecer zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <div className="w-[1px] h-6 bg-elyndor-borderGold mx-1" />
          <button
            onClick={onClose}
            className="p-2 text-elyndor-stoneGrey hover:text-red-400 hover:bg-white/5 rounded transition-colors"
            title="Cerrar visor"
            aria-label="Cerrar visor"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image Container with object-fit: contain */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative">
        <div
          className="transition-transform duration-200 ease-out origin-center flex items-center justify-center max-w-full max-h-full"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[82vh] max-w-[92vw] object-contain shadow-2xl border border-elyndor-ancientGold/20"
          />
        </div>
      </div>

      {/* Footer warning */}
      <div className="text-center py-2 text-[11px] text-elyndor-stoneGrey/70 bg-elyndor-deepBlack/80 border-t border-elyndor-borderGold/40">
        Material de referencia visual y diseño cartográfico. No representa capturas de gameplay final.
      </div>
    </div>
  );
};
