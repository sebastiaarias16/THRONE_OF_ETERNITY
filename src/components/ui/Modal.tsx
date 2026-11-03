import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '6xl';
  variant?: 'gold' | 'violet';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = '2xl',
  variant = 'gold',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '6xl': 'max-w-6xl',
  };

  const borderStyles =
    variant === 'violet'
      ? 'border-elyndor-magicViolet/50 shadow-violet-md'
      : 'border-elyndor-ancientGold/40 shadow-gold-md';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-full ${maxWidthStyles[maxWidth]} bg-elyndor-nightBlue/95 border ${borderStyles} text-elyndor-ivoryWhite rounded-none shadow-2xl overflow-hidden my-8`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ornate corner brackets */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-elyndor-luminousGold pointer-events-none" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-elyndor-luminousGold pointer-events-none" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-elyndor-luminousGold pointer-events-none" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-elyndor-luminousGold pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-elyndor-borderGold bg-elyndor-deepBlack/60">
          <div>
            {subtitle && (
              <span className="text-xs uppercase tracking-widest text-elyndor-ancientGold font-semibold block mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-elyndor-ivoryWhite">
                {title}
              </h3>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-elyndor-stoneGrey hover:text-elyndor-luminousGold hover:bg-white/5 transition-colors rounded"
            aria-label="Cerrar ventana"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto custom-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};
