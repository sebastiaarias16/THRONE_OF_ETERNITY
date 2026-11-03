import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { WorldHistory } from './components/sections/WorldHistory';
import { RacesSection } from './components/sections/RacesSection';
import { RegionsSection } from './components/sections/RegionsSection';
import { FactionsSection } from './components/sections/FactionsSection';
import { GameDevSection } from './components/sections/GameDevSection';
import { DevlogSection } from './components/sections/DevlogSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { SupportSection } from './components/sections/SupportSection';

// Modals & Lightbox
import { RaceDetailModal } from './components/modals/RaceDetailModal';
import { RegionDetailModal } from './components/modals/RegionDetailModal';
import { DevlogDetailModal } from './components/modals/DevlogDetailModal';
import { SupportModal } from './components/modals/SupportModal';
import { LegalModal } from './components/modals/LegalModal';
import { ContactModal } from './components/modals/ContactModal';
import { StudioFutureModal } from './components/modals/StudioFutureModal';
import { ImageLightbox } from './components/ui/ImageLightbox';

import { Race, Region, DevlogPost } from './types';

export const App: React.FC = () => {
  // Modal states
  const [selectedRace, setSelectedRace] = useState<Race | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedDevlog, setSelectedDevlog] = useState<DevlogPost | null>(null);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  // Lightbox state for zoomable maps and visual references
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    title: string;
    caption?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: '',
  });

  const openLightbox = (imageSrc: string, imageAlt: string, title: string, caption?: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      imageAlt,
      title,
      caption,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-elyndor-deepBlack text-elyndor-ivoryWhite flex flex-col font-inter selection:bg-elyndor-ancientGold selection:text-elyndor-deepBlack">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenSupport={() => setIsSupportOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* A/B. Hero Screen */}
        <Hero
          onExploreClick={() => scrollToSection('mundo')}
          onDevClick={() => scrollToSection('desarrollo')}
        />

        {/* C. El Mundo de Elyndor */}
        <WorldHistory
          onOpenMapLightbox={() =>
            openLightbox(
              '/assets/02_Mundo_Mapas/mapa-general-elyndor.png',
              'Mapa General de Elyndor — Continente del Ascenso',
              'EL CONTINENTE DEL ASCENSO',
              'Cartografía general de las siete regiones y orografía de Elyndor (Arte conceptual de desarrollo)'
            )
          }
        />

        {/* D. Las Seis Razas */}
        <RacesSection
          onSelectRace={(race) => setSelectedRace(race)}
          onOpenRaceReference={(type) => {
            if (type === 'visual') {
              openLightbox(
                '/assets/03_Razas_Civilizaciones/referencia-visual-seis-razas.png',
                'Referencia Visual Oficial de las Seis Razas',
                'IDENTIDAD VISUAL DE LAS SEIS RAZAS',
                'Rasgos fenotípicos, proporciones anatómicas e indumentaria tradicional (Arte conceptual)'
              );
            } else {
              openLightbox(
                '/assets/03_Razas_Civilizaciones/referencia-modelado-razas-civilizaciones.png',
                'Referencia de Modelado y Civilizaciones',
                'REFERENCIA DE MODELADO 3D Y EQUIPO',
                'Diseño de armaduras, capas de equipo y proporciones para esculpido digital (Arte conceptual)'
              );
            }
          }}
        />

        {/* E. Las Regiones */}
        <RegionsSection
          onSelectRegion={(region) => setSelectedRegion(region)}
          onOpenRegionalMapLightbox={() =>
            openLightbox(
              '/assets/02_Mundo_Mapas/mapa-tierras-del-alba-nareth.png',
              'Mapa Regional de Tierras del Alba y Asentamiento de Nareth',
              'TIERRAS DEL ALBA & NARETH',
              'Detalle cartográfico de la región inicial, cruces fluviales y asentamientos históricos (Arte conceptual)'
            )
          }
        />

        {/* F. Las Grandes Facciones */}
        <FactionsSection />

        {/* G. Desarrollo del Videojuego */}
        <GameDevSection />

        {/* H. Devlog */}
        <DevlogSection onSelectDevlog={(post) => setSelectedDevlog(post)} />

        {/* I. Comunidad */}
        <CommunitySection
          onNewsletterSuccess={() => {
            // Notification or confirmation
          }}
          onOpenPrivacy={() => setLegalModalType('privacy')}
        />

        {/* J. Apoya el Proyecto */}
        <SupportSection onOpenSupportModal={() => setIsSupportOpen(true)} />
      </main>

      {/* K. Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenStudio={() => setIsStudioOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
      />

      {/* Modals */}
      <RaceDetailModal
        race={selectedRace}
        isOpen={!!selectedRace}
        onClose={() => setSelectedRace(null)}
        onOpenArtReference={() => {
          setSelectedRace(null);
          openLightbox(
            '/assets/03_Razas_Civilizaciones/referencia-visual-seis-razas.png',
            'Referencia Visual Oficial de las Seis Razas',
            'IDENTIDAD VISUAL DE LAS SEIS RAZAS',
            'Rasgos generales y proporciones anatómicas canónicas de Elyndor'
          );
        }}
      />

      <RegionDetailModal
        region={selectedRegion}
        isOpen={!!selectedRegion}
        onClose={() => setSelectedRegion(null)}
        onOpenMap={() => {
          setSelectedRegion(null);
          openLightbox(
            '/assets/02_Mundo_Mapas/mapa-general-elyndor.png',
            'Mapa General de Elyndor',
            'EL CONTINENTE DEL ASCENSO',
            'Cartografía de las siete provincias de Elyndor'
          );
        }}
      />

      <DevlogDetailModal
        post={selectedDevlog}
        isOpen={!!selectedDevlog}
        onClose={() => setSelectedDevlog(null)}
        onSubscribeClick={() => {
          setSelectedDevlog(null);
          scrollToSection('comunidad');
        }}
      />

      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType || 'privacy'}
        onClose={() => setLegalModalType(null)}
      />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <StudioFutureModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        onContactClick={() => {
          setIsStudioOpen(false);
          setIsContactOpen(true);
        }}
      />

      {/* Zoomable Image Lightbox */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxState.imageSrc}
        imageAlt={lightboxState.imageAlt}
        title={lightboxState.title}
        caption={lightboxState.caption}
      />
    </div>
  );
};

export default App;
