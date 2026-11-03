import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isPrivacy ? 'POLÍTICA DE PRIVACIDAD' : 'TÉRMINOS Y CONDICIONES'}
      subtitle="Throne of Eternity · Información Legal Oficial"
      maxWidth="3xl"
    >
      <div className="space-y-4 text-xs text-elyndor-stoneGrey leading-relaxed">
        {isPrivacy ? (
          <>
            <p className="text-elyndor-ivoryWhite">
              En <strong className="text-elyndor-luminousGold">THRONE OF ETERNITY</strong> valoramos y respetamos tu privacidad. Este sitio web tiene carácter informativo, promocional y de gestión comunitaria para el desarrollo independiente del videojuego.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              1. Recopilación de Datos
            </h4>
            <p>
              Únicamente recopilamos los datos que tú nos proporcionas voluntariamente a través del formulario de suscripción a novedades (dirección de correo electrónico). No recopilamos datos financieros, tarjetas de crédito ni información sensible de navegación.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              2. Uso de la Información
            </h4>
            <p>
              Tu dirección de correo electrónico se utilizará exclusivamente para enviarte comunicados sobre devlogs, fechas de pruebas cerradas y novedades del proyecto. Nunca venderemos, cederemos ni alquilaremos tus datos a terceros con fines comerciales ajenos al videojuego.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              3. Derechos del Usuario
            </h4>
            <p>
              Puedes solicitar en cualquier momento la baja de la lista de correo o la eliminación de tus datos escribiendo a nuestro canal de contacto oficial o mediante el enlace de cancelación en futuros boletines.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              4. Cookies y Analítica
            </h4>
            <p>
              Este sitio utiliza almacenamiento local del navegador únicamente para recordar preferencias de interfaz (como el consentimiento de novedades) sin rastreo de actividad externa.
            </p>
          </>
        ) : (
          <>
            <p className="text-elyndor-ivoryWhite">
              Bienvenido al portal oficial de <strong className="text-elyndor-luminousGold">THRONE OF ETERNITY</strong>. Al navegar en este sitio aceptas los presentes términos de uso.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              1. Propiedad Intelectual
            </h4>
            <p>
              Todos los textos, logotipos, arte conceptual, mapas, nombres de razas, regiones y conceptos narrativos de "Throne of Eternity" y "Elyndor" son propiedad intelectual exclusiva de sus autores y del equipo de desarrollo independiente. Queda prohibida su reproducción no autorizada con fines de lucro.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              2. Naturaleza del Contenido
            </h4>
            <p>
              Las imágenes cartográficas y referencias visuales presentadas corresponden a fases de arte conceptual y diseño preparatorio. No constituyen capturas finales de gameplay ni promesas contractuales de especificaciones finales de lanzamiento.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              3. Marcas de Terceros
            </h4>
            <p>
              Unreal®, Unreal Engine y sus respectivos logotipos son marcas comerciales o marcas registradas de Epic Games, Inc. en los Estados Unidos de América y en otros lugares.
            </p>

            <h4 className="text-sm font-cinzel text-elyndor-luminousGold font-bold pt-2">
              4. Modificaciones del Servicio
            </h4>
            <p>
              El equipo de desarrollo se reserva el derecho de actualizar, modificar o retirar cualquier sección del portal web con el propósito de reflejar fielmente la evolución del videojuego.
            </p>
          </>
        )}

        <div className="flex justify-end pt-4 border-t border-white/10">
          <Button variant="secondary" size="sm" onClick={onClose}>
            Entendido
          </Button>
        </div>
      </div>
    </Modal>
  );
};
