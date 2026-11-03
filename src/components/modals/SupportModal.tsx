import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { SUPPORT_INFO } from '../../data/community';
import { Button } from '../ui/Button';
import { HeartHandshake, ShieldCheck, CheckCircle2, Coins, Users, Award } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail || !notifyEmail.includes('@')) return;

    try {
      const stored = JSON.parse(localStorage.getItem('throne_crowdfunding_interest') || '[]');
      if (!stored.includes(notifyEmail)) {
        stored.push(notifyEmail);
        localStorage.setItem('throne_crowdfunding_interest', JSON.stringify(stored));
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={SUPPORT_INFO.title}
      subtitle="Desarrollo Independiente · Transparencia y Futuro Mecenazgo"
      maxWidth="3xl"
    >
      <div className="space-y-6 text-elyndor-ivoryWhite">
        {/* Intro */}
        <div className="p-4 bg-elyndor-nightBlue/60 border-l-2 border-elyndor-luminousGold">
          <p className="text-xs sm:text-sm text-elyndor-ivoryWhite/90 leading-relaxed font-cormorant text-lg italic">
            "{SUPPORT_INFO.intro}"
          </p>
        </div>

        {/* Pillars breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <HeartHandshake className="w-4 h-4 text-elyndor-ancientGold" />
              <span>1. Difusión Voluntaria</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Compartir los avances en redes, invitar a otros aficionados del rol oscuro a Discord y brindar retroalimentación constructiva sobre el lore y los sistemas.
            </p>
          </div>

          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <Coins className="w-4 h-4 text-elyndor-ancientGold" />
              <span>2. Plataforma Segura (Próximamente)</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Se habilitarán canales auditados (como Patreon o Kickstarter) con facturación transparente para financiar software, licencias de audio y renderizado.
            </p>
          </div>

          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <Users className="w-4 h-4 text-elyndor-ancientGold" />
              <span>3. Colaboraciones Creativas</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Convocatorias para playtesting cerrado, pruebas de rendimiento en hardware diverso y traducción localizada con la comunidad.
            </p>
          </div>

          <div className="p-4 bg-elyndor-deepBlack/60 border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-elyndor-luminousGold font-cinzel text-xs font-bold">
              <Award className="w-4 h-4 text-elyndor-ancientGold" />
              <span>4. Recompensas Verificables</span>
            </div>
            <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
              Las futuras recompensas incluirán accesos anticipados, créditos y libros de arte digital. No se prometen beneficios inviables o ficticios.
            </p>
          </div>
        </div>

        {/* Anti-Scam Integrity Box */}
        <div className="p-4 bg-amber-950/30 border border-amber-600/40 text-xs text-amber-200/90 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-cinzel font-bold block mb-1">
              Garantía de Transparencia e Integridad
            </span>
            <p className="text-[11px] leading-relaxed">
              Este sitio oficial no solicita números de tarjeta de crédito, cuentas bancarias ni pagos directos en este momento. Cualquier campaña oficial de donaciones será anunciada públicamente en nuestras redes verificadas y gestionada a través de plataformas internacionales autorizadas.
            </p>
          </div>
        </div>

        {/* Notify when Crowdfunding / Patreon launches */}
        <div className="p-5 bg-elyndor-deepBlack/80 border border-elyndor-borderGold">
          <h4 className="text-xs font-cinzel uppercase tracking-widest text-elyndor-luminousGold font-bold mb-1">
            ¿Deseas ser notificado cuando se abran los apoyos oficiales?
          </h4>
          <p className="text-[11px] text-elyndor-stoneGrey mb-4">
            Deja tu correo para recibir una notificación exclusiva cuando la campaña oficial de mecenazgo esté disponible:
          </p>

          {submitted ? (
            <div className="p-3 bg-emerald-950/60 border border-emerald-600/50 text-emerald-200 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>¡Anotado! Te avisaremos cuando se lance la campaña oficial de patrocinio.</span>
            </div>
          ) : (
            <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="tu-correo@ejemplo.com"
                className="flex-1 px-3 py-2 bg-black/60 border border-elyndor-borderGold text-xs text-elyndor-ivoryWhite placeholder-elyndor-stoneGrey/40 focus:outline-none focus:border-elyndor-luminousGold"
                required
              />
              <Button type="submit" variant="primary" size="sm">
                Avisarme del Lanzamiento
              </Button>
            </form>
          )}
        </div>

        {/* Close Button */}
        <div className="flex justify-end pt-2 border-t border-white/10">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Entendido y Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
