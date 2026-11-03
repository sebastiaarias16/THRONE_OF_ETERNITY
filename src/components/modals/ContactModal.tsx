import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Prensa y Medios',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Prensa y Medios',
        message: '',
      });
    }, 800);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="CONTACTO OFICIAL"
      subtitle="Throne of Eternity Development Team · Mensajes Directos"
      maxWidth="2xl"
    >
      <div className="space-y-6 text-elyndor-ivoryWhite">
        <p className="text-xs text-elyndor-stoneGrey leading-relaxed">
          Para consultas de prensa, propuestas de colaboración técnica, cobertura en medios o preguntas sobre el universo de Elyndor, utiliza este canal directo con el equipo.
        </p>

        {status === 'success' ? (
          <div className="p-6 bg-emerald-950/60 border border-emerald-600/50 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="font-cinzel text-lg text-emerald-200 font-bold">
              ¡Mensaje Recibido!
            </h4>
            <p className="text-xs text-emerald-300/90 leading-relaxed max-w-md mx-auto">
              Gracias por tu interés en Throne of Eternity. El equipo creativo revisará tu comunicación y responderá a la brevedad posible.
            </p>
            <div className="pt-2">
              <Button variant="secondary" size="sm" onClick={onClose}>
                Volver a la Web
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-cinzel text-elyndor-ancientGold uppercase mb-1 font-semibold">
                  Nombre o Identificador *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre..."
                  required
                  className="w-full px-3 py-2.5 bg-elyndor-deepBlack/80 border border-elyndor-borderGold text-xs text-white focus:outline-none focus:border-elyndor-luminousGold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-cinzel text-elyndor-ancientGold uppercase mb-1 font-semibold">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu-correo@ejemplo.com"
                  required
                  className="w-full px-3 py-2.5 bg-elyndor-deepBlack/80 border border-elyndor-borderGold text-xs text-white focus:outline-none focus:border-elyndor-luminousGold"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-cinzel text-elyndor-ancientGold uppercase mb-1 font-semibold">
                Motivo del Contacto
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2.5 bg-elyndor-deepBlack/80 border border-elyndor-borderGold text-xs text-white focus:outline-none focus:border-elyndor-luminousGold"
              >
                <option value="Prensa y Medios">Prensa, Entrevistas y Medios</option>
                <option value="Colaboración Técnica">Colaboración Artística o Técnica (UE5)</option>
                <option value="Feedback de Lore">Sugerencias y Retroalimentación de Lore</option>
                <option value="Otros">Otro motivo general</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-cinzel text-elyndor-ancientGold uppercase mb-1 font-semibold">
                Mensaje *
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Escribe tu mensaje detallado aquí..."
                required
                className="w-full px-3 py-2.5 bg-elyndor-deepBlack/80 border border-elyndor-borderGold text-xs text-white focus:outline-none focus:border-elyndor-luminousGold resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[10px] text-elyndor-stoneGrey/70">
                Respuesta habitual en 24 a 48 horas laborales.
              </span>
              <Button
                type="submit"
                variant="primary"
                size="sm"
                disabled={status === 'loading'}
                icon={<Send className="w-3.5 h-3.5" />}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};
