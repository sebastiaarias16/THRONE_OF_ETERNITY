import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
  variant?: 'gold' | 'violet' | 'subtle';
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  className = '',
  variant = 'gold',
}) => {
  const lineGradients = {
    gold: 'from-transparent via-elyndor-ancientGold/40 to-transparent',
    violet: 'from-transparent via-elyndor-magicViolet/50 to-transparent',
    subtle: 'from-transparent via-elyndor-stoneGrey/25 to-transparent',
  };

  const centerSymbols = {
    gold: 'text-elyndor-luminousGold',
    violet: 'text-elyndor-magicViolet',
    subtle: 'text-elyndor-stoneGrey',
  };

  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      <div className={`h-[1px] w-full bg-gradient-to-r ${lineGradients[variant]}`} />
      <div className="mx-4 flex items-center gap-1.5 px-2">
        <span className="w-1.5 h-1.5 rotate-45 bg-elyndor-ancientGold/50" />
        <span className={`text-xs select-none tracking-widest ${centerSymbols[variant]}`}>
          ❖
        </span>
        <span className="w-1.5 h-1.5 rotate-45 bg-elyndor-ancientGold/50" />
      </div>
      <div className={`h-[1px] w-full bg-gradient-to-r ${lineGradients[variant]}`} />
    </div>
  );
};
