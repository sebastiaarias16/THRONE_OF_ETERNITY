import React from 'react';
import { SOCIAL_LINKS } from '../../data/community';
import { OrnamentalDivider } from '../ui/OrnamentalDivider';
import { HeartHandshake, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenContact: () => void;
  onOpenStudio: () => void;
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegal,
  onOpenContact,
  onOpenStudio,
  onOpenSupport,
}) => {
  const currentYear = 2026;

  const quickNav = [
    { name: 'Inicio', href: '#hero' },
    { name: 'El Mundo', href: '#mundo' },
    { name: 'Razas de Elyndor', href: '#razas' },
    { name: 'Regiones y Mapas', href: '#regiones' },
    { name: 'Facciones Mayores', href: '#facciones' },
    { name: 'Desarrollo en UE5', href: '#desarrollo' },
    { name: 'Devlog Oficial', href: '#devlog' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  return (
    <footer className="relative bg-[#050608] border-t border-elyndor-borderGold/60 pt-16 pb-12 overflow-hidden text-elyndor-ivoryWhite">
      {/* Background glow overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-elyndor-ancientGold/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Slogan */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-elyndor-luminousGold/80 bg-elyndor-nightBlue flex items-center justify-center text-elyndor-luminousGold font-cinzel text-xl shadow-gold-sm">
                ♛
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold tracking-[0.2em] text-elyndor-ivoryWhite">
                  THRONE OF ETERNITY
                </h3>
                <span className="text-[10px] tracking-[0.3em] uppercase text-elyndor-ancientGold block font-semibold">
                  Mundo de Elyndor
                </span>
              </div>
            </div>

            <p className="text-xs text-elyndor-stoneGrey leading-relaxed font-cormorant italic text-base">
              "The world will remember your choices."
            </p>

            <p className="text-xs text-elyndor-stoneGrey/80 leading-relaxed">
              Un RPG de fantasía oscura y mundo abierto forjado de manera independiente sobre
              Unreal Engine 5.8.4. Exploración visceral, combate táctico y consecuencias narrativas permanentes.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenStudio}
                className="inline-flex items-center gap-2 text-xs font-cinzel text-elyndor-luminousGold hover:text-white underline underline-offset-4 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Sobre el Estudio y Futuros Proyectos →</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold tracking-widest text-elyndor-luminousGold uppercase mb-4 border-l-2 border-elyndor-ancientGold pl-3">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              {quickNav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-elyndor-stoneGrey hover:text-elyndor-luminousGold transition-colors flex items-center gap-2"
                  >
                    <span className="text-elyndor-ancientGold text-[10px]">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Community & Social Links */}
          <div>
            <h4 className="font-cinzel text-sm font-semibold tracking-widest text-elyndor-luminousGold uppercase mb-4 border-l-2 border-elyndor-ancientGold pl-3">
              Comunidad Oficial
            </h4>
            <p className="text-xs text-elyndor-stoneGrey mb-4 leading-relaxed">
              Únete a las conversaciones sobre lore, desarrollo en Unreal Engine y avances del proyecto:
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-elyndor-nightBlue/80 border border-elyndor-borderGold text-xs text-elyndor-ivoryWhite hover:border-elyndor-luminousGold hover:text-elyndor-luminousGold transition-all rounded-sm flex items-center gap-1.5"
                >
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <button
                onClick={onOpenSupport}
                className="text-xs font-cinzel text-elyndor-ancientGold hover:text-elyndor-luminousGold flex items-center gap-2 transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-elyndor-luminousGold" />
                <span>Apoya el Desarrollo Independiente</span>
              </button>
            </div>
          </div>

          {/* Col 4: Engine & Development Notice */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-cinzel text-sm font-semibold tracking-widest text-elyndor-luminousGold uppercase mb-4 border-l-2 border-elyndor-ancientGold pl-3">
                Motor de Desarrollo
              </h4>
              <div className="p-4 bg-elyndor-nightBlue/60 border border-elyndor-borderGold rounded-sm">
                <div className="text-xs font-cinzel text-elyndor-ivoryWhite font-bold mb-1">
                  UNREAL ENGINE 5.8.4
                </div>
                <p className="text-[11px] text-elyndor-stoneGrey leading-relaxed">
                  Desarrollado con tecnologías Nanite, iluminación global dinámica Lumen y World Partitioning para una inmersión sin fisuras.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs px-4 py-2 border border-elyndor-borderGold text-elyndor-stoneGrey hover:text-elyndor-luminousGold hover:border-elyndor-luminousGold transition-colors w-full justify-center"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contacto con el Equipo</span>
              </button>
            </div>
          </div>
        </div>

        <OrnamentalDivider variant="gold" className="my-8" />

        {/* Bottom Bar & Mandatory Statements */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-elyndor-stoneGrey/80 gap-4">
          <div className="text-center md:text-left">
            <p className="font-cinzel text-elyndor-ivoryWhite font-semibold tracking-wider text-xs">
              THRONE OF ETERNITY — AN INDEPENDENT GAME DEVELOPMENT PROJECT.
            </p>
            <p className="text-[11px] text-elyndor-stoneGrey/60 mt-1">
              © {currentYear} Throne of Eternity. Todos los derechos reservados. Unreal® es una marca registrada de Epic Games, Inc.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-[11px]">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-elyndor-luminousGold transition-colors underline-offset-4 hover:underline"
            >
              Política de Privacidad
            </button>
            <span className="text-elyndor-ancientGold/40">•</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-elyndor-luminousGold transition-colors underline-offset-4 hover:underline"
            >
              Términos y Condiciones
            </button>
            <span className="text-elyndor-ancientGold/40">•</span>
            <button
              onClick={onOpenStudio}
              className="hover:text-elyndor-luminousGold transition-colors underline-offset-4 hover:underline"
            >
              Kit de Prensa
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
