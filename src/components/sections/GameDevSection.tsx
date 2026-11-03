import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { GAME_DEV_CATEGORIES, ENGINE_INFO } from '../../data/gameDev';
import { GameDevCategory } from '../../types';
import { Play, Video, Compass, Activity, Swords, User, Skull, Layers, Cpu, Clock, Terminal } from 'lucide-react';

export const GameDevSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GameDevCategory>(GAME_DEV_CATEGORIES[0]);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'Swords':
        return <Swords className="w-4 h-4" />;
      case 'User':
        return <User className="w-4 h-4" />;
      case 'Skull':
        return <Skull className="w-4 h-4" />;
      case 'Layers':
        return <Layers className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="desarrollo" className="relative py-24 sm:py-32 bg-elyndor-deepBlack overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-elyndor-ancientGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Ingeniería y Tecnologías"
          title="BEHIND THE WORLD"
          description="Una mirada transparente a las entrañas del desarrollo de Throne of Eternity. De la investigación preliminar al renderizado en tiempo real sobre Unreal Engine 5.8.4."
        />

        {/* Engine Pillars Quick Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {ENGINE_INFO.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-5 bg-elyndor-nightBlue/40 border border-elyndor-borderGold/50 corner-trim"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-elyndor-ancientGold block mb-1">
                PILLAR 0{index + 1}
              </span>
              <h4 className="text-base font-cinzel font-bold text-elyndor-ivoryWhite mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Development Workspace: Category Selector + Prepared Video Player Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs (8 categories required) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs uppercase tracking-widest text-elyndor-ancientGold font-cinzel mb-3 font-semibold">
              Áreas de Desarrollo Técnico:
            </div>

            <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1">
              {GAME_DEV_CATEGORIES.map((cat) => {
                const isSelected = selectedCategory.id === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left p-3.5 transition-all duration-200 border flex items-center justify-between ${
                      isSelected
                        ? 'bg-elyndor-nightBlue border-elyndor-luminousGold text-white shadow-gold-sm'
                        : 'bg-elyndor-nightBlue/30 border-elyndor-borderGold/30 text-elyndor-stoneGrey hover:border-elyndor-borderGold hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-sm border ${
                          isSelected
                            ? 'border-elyndor-luminousGold bg-elyndor-ancientGold/20 text-elyndor-luminousGold'
                            : 'border-white/10 text-elyndor-stoneGrey'
                        }`}
                      >
                        {getCategoryIcon(cat.icon)}
                      </div>
                      <div>
                        <span className="font-cinzel text-xs sm:text-sm font-semibold block">
                          {cat.title}
                        </span>
                        <span className="text-[10px] text-elyndor-stoneGrey/70">
                          {cat.unrealEngineFeature}
                        </span>
                      </div>
                    </div>

                    <span className="text-xs text-elyndor-ancientGold font-mono">
                      {isSelected ? '●' : '○'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prepared Video Showcase with Honest COMING SOON State */}
          <div className="lg:col-span-7 bg-elyndor-nightBlue/50 border border-elyndor-borderGold p-6 sm:p-8 corner-trim shadow-2xl">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-elyndor-ancientGold font-mono">
                  UNREAL ENGINE 5.8.4 WORKBENCH
                </span>
                <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-elyndor-ivoryWhite">
                  {selectedCategory.title}
                </h3>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-elyndor-deepBlack border border-elyndor-borderGold text-[11px] font-mono text-elyndor-ancientGold self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5" />
                <span>EN PRODUCCIÓN</span>
              </span>
            </div>

            {/* Video Player Placeholder with COMING SOON notice */}
            <div className="relative aspect-video w-full bg-elyndor-deepBlack border border-elyndor-borderGold/60 rounded-none overflow-hidden flex flex-col items-center justify-center p-6 shadow-inner group">
              {/* Background atmospheric grid / scanlines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />

              {/* Decorative Crosshairs in corners */}
              <span className="absolute top-3 left-3 text-[10px] text-elyndor-ancientGold/50 font-mono">
                + [CAM_01]
              </span>
              <span className="absolute top-3 right-3 text-[10px] text-elyndor-ancientGold/50 font-mono">
                REC: READY
              </span>
              <span className="absolute bottom-3 left-3 text-[10px] text-elyndor-stoneGrey/40 font-mono">
                UE 5.8.4 · {selectedCategory.unrealEngineFeature}
              </span>
              <span className="absolute bottom-3 right-3 text-[10px] text-elyndor-stoneGrey/40 font-mono">
                60 FPS / 4K UHD
              </span>

              {/* Play symbol and COMING SOON announcement */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-elyndor-ancientGold/60 bg-elyndor-nightBlue/80 flex items-center justify-center text-elyndor-luminousGold mb-4 shadow-gold-sm group-hover:scale-110 group-hover:border-elyndor-luminousGold transition-all">
                  <Play className="w-8 h-8 ml-1" />
                </div>

                <div className="text-sm sm:text-base font-cinzel font-bold tracking-[0.2em] text-elyndor-luminousGold uppercase mb-2">
                  VIDEO COMING SOON
                </div>

                <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
                  Los clips y capturas oficiales de gameplay se publicarán a medida que se completen las sesiones de renderizado y pulido en Unreal Engine 5.8.4.
                </p>

                <span className="mt-3 text-[10px] text-elyndor-stoneGrey/60 uppercase tracking-widest border border-white/5 px-2 py-0.5 bg-black/40">
                  Desarrollo independiente sin falsas capturas
                </span>
              </div>
            </div>

            {/* Description & Technical Points */}
            <div className="mt-6">
              <p className="text-xs sm:text-sm text-elyndor-ivoryWhite/90 leading-relaxed mb-4 font-cormorant text-lg">
                "{selectedCategory.description}"
              </p>

              <div>
                <span className="text-[11px] font-cinzel uppercase tracking-widest text-elyndor-ancientGold font-semibold block mb-2">
                  Especificaciones Técnicas:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-elyndor-stoneGrey">
                  {selectedCategory.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 bg-elyndor-deepBlack/50 border border-white/5 flex items-start gap-2"
                    >
                      <span className="text-elyndor-luminousGold mt-0.5">›</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
