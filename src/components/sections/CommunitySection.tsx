import React, { useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { COMMUNITY_INFO, SOCIAL_LINKS } from '../../data/community';
import { Button } from '../ui/Button';
import { MessageSquare, Twitter, Youtube, Instagram, Video, Mail, CheckCircle2, AlertCircle, ArrowUpRight, Send } from 'lucide-react';

interface CommunitySectionProps {
  onNewsletterSuccess: (email: string) => void;
  onOpenPrivacy: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onNewsletterSuccess,
  onOpenPrivacy,
}) => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Youtube':
        return <Youtube className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Video':
        return <Video className="w-5 h-5" />;
      default:
        return <MessageSquare className="w-5 h-5" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setErrorMessage('Por favor introduce una dirección de correo electrónico válida.');
      setStatus('error');
      return;
    }

    if (!acceptedTerms) {
      setErrorMessage('Debes aceptar la política de privacidad para recibir noticias.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate API call / Local storage persistence
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('throne_newsletter_subscribers') || '[]');
        if (!stored.includes(email)) {
          stored.push(email);
          localStorage.setItem('throne_newsletter_subscribers', JSON.stringify(stored));
        }
        setStatus('success');
        onNewsletterSuccess(email);
        setEmail('');
        setAcceptedTerms(false);
      } catch (err) {
        setStatus('success');
        onNewsletterSuccess(email);
      }
    }, 800);
  };

  return (
    <section id="comunidad" className="relative py-24 sm:py-32 bg-[#06080C] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-elyndor-magicViolet/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-elyndor-ancientGold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="Presencia y Punto de Encuentro"
          title={COMMUNITY_INFO.title}
          description={COMMUNITY_INFO.intro}
        />

        {/* 5 Social Media Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ornamental-card p-5 flex flex-col justify-between group corner-trim hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 border border-elyndor-borderGold bg-elyndor-deepBlack flex items-center justify-center text-elyndor-luminousGold group-hover:border-elyndor-luminousGold transition-colors">
                    {getSocialIcon(link.icon)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-elyndor-stoneGrey group-hover:text-elyndor-luminousGold transition-colors" />
                </div>

                <h3 className="text-base font-cinzel font-bold text-elyndor-ivoryWhite group-hover:text-elyndor-luminousGold transition-colors">
                  {link.platform}
                </h3>
                <span className="text-[11px] font-mono text-elyndor-ancientGold block mb-2">
                  {link.handle}
                </span>

                <p className="text-xs text-elyndor-stoneGrey leading-relaxed line-clamp-2">
                  {link.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-cinzel uppercase tracking-wider text-elyndor-stoneGrey group-hover:text-elyndor-luminousGold">
                Unirse al Canal →
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter Subscription Box */}
        <div className="max-w-3xl mx-auto bg-elyndor-nightBlue/60 border border-elyndor-borderGold p-8 sm:p-10 corner-trim shadow-2xl relative">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 border border-elyndor-ancientGold bg-elyndor-deepBlack text-elyndor-luminousGold mb-4 shadow-gold-sm">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-elyndor-ivoryWhite mb-2">
              SUSCRIPCIÓN A LAS CRÓNICAS DE ELYNDOR
            </h3>

            <p className="text-xs sm:text-sm text-elyndor-stoneGrey leading-relaxed">
              Recibe avisos exclusivos de devlogs, anuncios de convocatorias para pruebas cerradas y material de arte antes que nadie. Sin spam.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduce tu correo electrónico..."
                  className="w-full px-4 py-3 bg-elyndor-deepBlack/80 border border-elyndor-borderGold text-elyndor-ivoryWhite placeholder-elyndor-stoneGrey/50 text-sm focus:outline-none focus:border-elyndor-luminousGold transition-colors"
                  disabled={status === 'loading'}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={status === 'loading'}
                icon={<Send className="w-4 h-4" />}
                className="whitespace-nowrap"
              >
                {status === 'loading' ? 'REGISTRANDO...' : 'SUSCRIBIRME'}
              </Button>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2.5 text-xs text-elyndor-stoneGrey pt-2">
              <input
                type="checkbox"
                id="newsletter-terms"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 rounded-none border-elyndor-borderGold bg-elyndor-deepBlack text-elyndor-ancientGold focus:ring-0 focus:ring-offset-0 cursor-pointer"
                required
              />
              <label htmlFor="newsletter-terms" className="cursor-pointer select-none">
                Acepto recibir comunicaciones del desarrollo de Throne of Eternity conforme a la{' '}
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-elyndor-luminousGold underline underline-offset-2 hover:text-white"
                >
                  Política de Privacidad
                </button>
                . Puedes cancelar tu suscripción en cualquier momento.
              </label>
            </div>

            {/* Error feedback */}
            {status === 'error' && errorMessage && (
              <div className="p-3 bg-red-950/60 border border-red-700/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Success feedback */}
            {status === 'success' && (
              <div className="p-3 bg-emerald-950/60 border border-emerald-600/50 text-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>¡Te has registrado con éxito! Te mantendremos informado sobre las novedades de Elyndor.</span>
              </div>
            )}
          </form>

          {/* Technical Note on Newsletter Backend */}
          <div className="mt-8 pt-6 border-t border-white/5 text-[11px] text-elyndor-stoneGrey/70 text-center">
            Nota de integración: Formulario preparado para conexión directa con Mailchimp, Resend o ConvertKit vía API Route o Webhook sin modificar la UI.
          </div>
        </div>
      </div>
    </section>
  );
};
