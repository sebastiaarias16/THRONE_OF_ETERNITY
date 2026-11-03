import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { SUPPORT_INFO } from '../../data/community';
import { Button } from '../ui/Button';
import { HeartHandshake, Coins, Users, Award, ShieldCheck, Sparkles } from 'lucide-react';

interface SupportSectionProps {
  onOpenSupportModal: () => void;
}

export const SupportSection: React.FC<SupportSectionProps> = ({ onOpenSupportModal }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Coins':
        return <Coins className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="apoyo" className="relative py-24 sm:py-32 bg-[#080A0E] overflow-hidden">
      {/* Background ambient banner using alternative hero asset */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/assets/01_Hero_Inicio/hero-alternativo-throne-of-eternity.png"
          alt="Banner decorativo de fondo"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/80 to-[#080A0E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Desarrollo Independiente"
          title={SUPPORT_INFO.title}
          description={SUPPORT_INFO.intro}
        />

        {/* Support Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SUPPORT_INFO.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="ornamental-card p-6 flex flex-col justify-between corner-trim group"
            >
              <div>
                <div className="w-12 h-12 border border-elyndor-borderGold bg-elyndor-deepBlack flex items-center justify-center text-elyndor-luminousGold mb-4 group-hover:border-elyndor-luminousGold transition-colors shadow-gold-sm">
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 className="text-lg font-cinzel font-bold text-elyndor-ivoryWhite mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-elyndor-ancientGold/80 font-cinzel">
                Pilar de Desarrollo
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA Card */}
        <div className="max-w-4xl mx-auto bg-elyndor-nightBlue/70 border-2 border-elyndor-ancientGold/50 p-8 sm:p-12 corner-trim text-center shadow-gold-md relative">
          <span className="text-xs uppercase tracking-[0.3em] text-elyndor-ancientGold font-cinzel block mb-2 font-semibold">
            Únete al Nacimiento de Elyndor
          </span>

          <h3 className="text-2xl sm:text-4xl font-cinzel font-bold text-elyndor-ivoryWhite mb-4">
            FORJA EL DESTINO DE THRONE OF ETERNITY
          </h3>

          <p className="text-xs sm:text-sm text-elyndor-stoneGrey max-w-2xl mx-auto mb-8 font-cormorant text-lg leading-relaxed">
            "Cada gran aventura necesita personas dispuestas a creer en ella. Conoce los planes de mecenazgo y prepárate para las campañas oficiales sin intermediarios fraudulentos."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenSupportModal}
              icon={<HeartHandshake className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-gold-md"
            >
              SUPPORT THE PROJECT
            </Button>
          </div>

          {/* Integrity and Security Guarantee */}
          <div className="mt-8 pt-6 border-t border-elyndor-borderGold/40 flex items-center justify-center gap-2 text-xs text-elyndor-stoneGrey/80 max-w-2xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-elyndor-ancientGold flex-shrink-0" />
            <span>
              {SUPPORT_INFO.disclaimer}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
