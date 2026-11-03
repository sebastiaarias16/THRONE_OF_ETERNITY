import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { DEVLOGS_DATA } from '../../data/devlogs';
import { DevlogPost } from '../../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface DevlogSectionProps {
  onSelectDevlog: (post: DevlogPost) => void;
}

export const DevlogSection: React.FC<DevlogSectionProps> = ({ onSelectDevlog }) => {
  return (
    <section id="devlog" className="relative py-24 sm:py-32 bg-[#080A0E] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-48 w-80 h-80 bg-elyndor-ancientGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Cuaderno de Bitácora"
          title="THE DEVELOPMENT JOURNAL"
          description="Espacio editorial dedicado a documentar la evolución técnica, narrativa y artística de Throne of Eternity. Publicaciones en preparación para la comunidad."
        />

        {/* 3 Devlogs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVLOGS_DATA.map((post) => (
            <article
              key={post.id}
              className="ornamental-card flex flex-col justify-between corner-trim overflow-hidden group cursor-pointer"
              onClick={() => onSelectDevlog(post)}
            >
              <div>
                {/* Header Image Placeholder with object-fit: contain to preserve proportions */}
                <div className="relative h-48 sm:h-52 w-full bg-black/70 overflow-hidden flex items-center justify-center border-b border-elyndor-borderGold/40 p-2">
                  <img
                    src={post.imagePlaceholder}
                    alt={post.title}
                    className="max-h-full max-w-full object-contain filter brightness-85 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Status Overlay Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-elyndor-deepBlack/90 border border-elyndor-ancientGold/60 text-[10px] font-cinzel text-elyndor-luminousGold font-semibold">
                    <Clock className="w-3 h-3 text-elyndor-ancientGold" />
                    <span>{post.status.toUpperCase()}</span>
                  </div>

                  {/* Devlog Number */}
                  <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 bg-black/80 text-[11px] font-mono text-elyndor-ancientGold border border-white/10">
                    DEVLOG #{post.number}
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  {/* Date & Tags */}
                  <div className="flex items-center justify-between text-[11px] text-elyndor-stoneGrey mb-2 font-mono">
                    <span className="flex items-center gap-1 text-elyndor-ancientGold">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-elyndor-stoneGrey/70">
                      Editorial Oficial
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-cinzel font-bold text-elyndor-ivoryWhite group-hover:text-elyndor-luminousGold transition-colors mb-2">
                    {post.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-elyndor-ancientGold/90 font-cormorant italic text-sm mb-3">
                    {post.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-elyndor-stoneGrey leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {post.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 bg-elyndor-deepBlack/80 border border-white/5 text-elyndor-stoneGrey/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-cinzel text-elyndor-luminousGold group-hover:underline flex items-center gap-1.5 font-semibold">
                  <span>Leer Resumen del Devlog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[10px] font-mono text-elyndor-stoneGrey/60">
                  #{post.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Development Note */}
        <div className="mt-12 text-center text-xs text-elyndor-stoneGrey/70 max-w-xl mx-auto">
          Los devlogs se publicarán progresivamente a través de este portal y del canal oficial de anuncios en Discord. Suscríbete al boletín para recibir el aviso de publicación.
        </div>
      </div>
    </section>
  );
};
