import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSupport }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'El Mundo', href: '#mundo' },
    { name: 'Razas', href: '#razas' },
    { name: 'Regiones', href: '#regiones' },
    { name: 'Facciones', href: '#facciones' },
    { name: 'Desarrollo', href: '#desarrollo' },
    { name: 'Devlog', href: '#devlog' },
    { name: 'Comunidad', href: '#comunidad' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-elyndor-deepBlack/90 backdrop-blur-md border-b border-elyndor-borderGold py-3 shadow-2xl'
            : 'bg-gradient-to-b from-elyndor-deepBlack/95 via-elyndor-deepBlack/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            {/* Throne Emblem SVG Icon */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-elyndor-ancientGold/60 bg-elyndor-nightBlue/80 group-hover:border-elyndor-luminousGold transition-colors shadow-gold-sm">
              <span className="text-elyndor-luminousGold font-cinzel font-bold text-lg">
                ♛
              </span>
              <span className="absolute -top-1 -left-1 w-1 h-1 bg-elyndor-luminousGold" />
              <span className="absolute -bottom-1 -right-1 w-1 h-1 bg-elyndor-luminousGold" />
            </div>

            <div className="flex flex-col">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] text-elyndor-ivoryWhite group-hover:text-elyndor-luminousGold transition-colors">
                THRONE OF ETERNITY
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-elyndor-ancientGold font-medium -mt-1">
                ELYNDOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xs font-cinzel uppercase tracking-[0.15em] text-elyndor-ivoryWhite/80 hover:text-elyndor-luminousGold transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-elyndor-luminousGold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Support The Project */}
          <div className="hidden sm:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              onClick={onOpenSupport}
              icon={<HeartHandshake className="w-4 h-4" />}
              className="animate-pulse-subtle shadow-gold-md"
            >
              SUPPORT THE PROJECT
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-elyndor-ivoryWhite hover:text-elyndor-luminousGold hover:bg-white/5 rounded border border-elyndor-ancientGold/40 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/90 backdrop-blur-xl lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col gap-4 text-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-elyndor-ancientGold mb-2 font-cinzel">
              Navegación de Elyndor
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-lg font-cinzel uppercase tracking-widest text-elyndor-ivoryWhite hover:text-elyndor-luminousGold py-2 transition-colors border-b border-white/5"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-8 pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSupport();
                }}
                icon={<HeartHandshake className="w-4 h-4" />}
                className="w-full"
              >
                SUPPORT THE PROJECT
              </Button>
            </div>

            <div className="mt-6 text-[11px] text-elyndor-stoneGrey font-cormorant italic">
              "The world will remember your choices."
            </div>
          </div>
        </div>
      )}
    </>
  );
};
