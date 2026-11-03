import React from 'react';
import { Compass, Hammer, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroProps {
  onExploreClick: () => void;
  onDevClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onDevClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-elyndor-deepBlack"
    >
      {/* Background Hero Image with Object-fit Cover and Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/01_Hero_Inicio/hero-principal-throne-of-eternity.png"
          alt="Throne of Eternity — Arte Principal de Inicio"
          className="w-full h-full object-cover object-center filter brightness-75 scale-[1.02] transform transition-transform duration-1000"
        />

        {/* Cinematic Vignette and Layered Dark Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-elyndor-deepBlack via-elyndor-deepBlack/60 to-elyndor-deepBlack/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-elyndor-deepBlack/80 via-transparent to-elyndor-deepBlack/80" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center flex flex-col items-center">
        {/* World Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none border border-elyndor-ancientGold/50 bg-elyndor-nightBlue/70 backdrop-blur-md mb-6 shadow-gold-sm">
          <span className="w-2 h-2 rotate-45 bg-elyndor-luminousGold animate-pulse" />
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.3em] uppercase text-elyndor-luminousGold font-semibold">
            Mundo de Elyndor
          </span>
          <span className="w-2 h-2 rotate-45 bg-elyndor-luminousGold animate-pulse" />
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel font-black tracking-[0.15em] text-elyndor-ivoryWhite drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] leading-tight uppercase">
          <span className="block gold-text-gradient">THRONE OF</span>
          <span className="block mt-1 sm:mt-2 text-white">ETERNITY</span>
        </h1>

        {/* Main Slogan */}
        <div className="my-6">
          <p className="text-sm sm:text-lg md:text-xl font-cinzel font-bold tracking-[0.25em] uppercase text-elyndor-luminousGold drop-shadow-md">
            THE WORLD WILL REMEMBER YOUR CHOICES.
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 w-48 mx-auto my-3 opacity-80">
          <span className="h-[1px] w-full bg-gradient-to-r from-transparent to-elyndor-ancientGold" />
          <span className="text-xs text-elyndor-ancientGold">❖</span>
          <span className="h-[1px] w-full bg-gradient-to-l from-transparent to-elyndor-ancientGold" />
        </div>

        {/* Official Introductory Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-elyndor-ivoryWhite/90 font-cormorant italic leading-relaxed drop-shadow mt-2 mb-10">
          "Un mundo forjado por fuerzas primordiales. Civilizaciones separadas por guerras, antiguas alianzas y secretos olvidados. Cinco mil años después de la Ruptura, Elyndor se encuentra ante un nuevo destino."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={onExploreClick}
            icon={<Compass className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            EXPLORE THE WORLD
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={onDevClick}
            icon={<Hammer className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            FOLLOW THE DEVELOPMENT
          </Button>
        </div>

        {/* Unreal Engine 5.8.4 Badge */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-black/50 backdrop-blur-sm rounded-none text-xs text-elyndor-stoneGrey">
          <span className="font-cinzel tracking-wider text-elyndor-ivoryWhite font-semibold">
            UNREAL ENGINE 5.8.4
          </span>
          <span className="text-elyndor-ancientGold/50">|</span>
          <span className="text-[11px] uppercase tracking-wider text-elyndor-stoneGrey">
            RPG de Fantasía Oscura · Mundo Abierto
          </span>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <a
        href="#mundo"
        onClick={(e) => {
          e.preventDefault();
          onExploreClick();
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-elyndor-stoneGrey hover:text-elyndor-luminousGold transition-colors cursor-pointer group"
        aria-label="Desplazarse hacia abajo"
      >
        <span className="text-[10px] font-cinzel uppercase tracking-[0.2em] group-hover:tracking-[0.25em] transition-all">
          Descubre Elyndor
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-elyndor-ancientGold" />
      </a>
    </section>
  );
};
