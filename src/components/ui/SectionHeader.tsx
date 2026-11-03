import React from 'react';
import { OrnamentalDivider } from './OrnamentalDivider';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  variant?: 'gold' | 'violet';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  variant = 'gold',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`relative mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold ${
            variant === 'violet' ? 'text-elyndor-magicViolet' : 'text-elyndor-ancientGold'
          }`}
        >
          <span className="w-4 h-[1px] bg-current opacity-60" />
          <span>{eyebrow}</span>
          <span className="w-4 h-[1px] bg-current opacity-60" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-cinzel font-bold text-elyndor-ivoryWhite tracking-wide leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-elyndor-stoneGrey font-cormorant leading-relaxed italic">
          "{description}"
        </p>
      )}

      <OrnamentalDivider
        variant={variant === 'violet' ? 'violet' : 'gold'}
        className={isCenter ? 'max-w-md mx-auto my-6' : 'max-w-xs my-6 ml-0'}
      />
    </div>
  );
};
