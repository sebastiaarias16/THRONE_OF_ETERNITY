import { SocialLink } from '../types';

export const COMMUNITY_INFO = {
  title: 'BECOME PART OF ELYNDOR',
  intro:
    'Cada gran mundo comienza con una idea. Cada gran aventura necesita personas dispuestas a creer en ella. Acompáñanos mientras construimos Elyndor.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Discord',
    name: 'Servidor Oficial de la Comunidad',
    url: 'https://discord.gg/throneofeternity',
    handle: '@ThroneOfEternity',
    description: 'Debates sobre lore, feedback directo con el equipo y anuncios exclusivos.',
    icon: 'MessageSquare',
  },
  {
    platform: 'X',
    name: 'X / Twitter Oficial',
    url: 'https://x.com/throneofeternity',
    handle: '@ThroneOfEternity',
    description: 'Actualizaciones rápidas, capturas de desarrollo y anuncios oficiales.',
    icon: 'Twitter',
  },
  {
    platform: 'YouTube',
    name: 'Canal Oficial de YouTube',
    url: 'https://youtube.com/@throneofeternity',
    handle: '@ThroneOfEternityGame',
    description: 'Devlogs en vídeo, trailers cinemáticos y directos de desarrollo en Unreal Engine.',
    icon: 'Youtube',
  },
  {
    platform: 'Instagram',
    name: 'Instagram Oficial de Arte',
    url: 'https://instagram.com/throneofeternitygame',
    handle: '@throneofeternitygame',
    description: 'Galerías de arte conceptual, bocetos de criaturas y diseño de escenarios.',
    icon: 'Instagram',
  },
  {
    platform: 'TikTok',
    name: 'TikTok de Desarrollo',
    url: 'https://tiktok.com/@throneofeternity',
    handle: '@throneofeternity',
    description: 'Clips cortos tras bambalinas, time-lapses de modelado y microinteracciones de combate.',
    icon: 'Video',
  },
];

export const SUPPORT_INFO = {
  title: 'HELP US BUILD THE WORLD',
  tagline: 'Desarrollo Independiente · Transparencia · Pasión por el Rol Auténtico',
  intro:
    'THRONE OF ETERNITY es un proyecto independiente construido paso a paso. Tu apoyo nos ayuda a dedicar más recursos al desarrollo, crear nuevos contenidos y acercarnos a convertir Elyndor en una realidad jugable.',
  pillars: [
    {
      title: 'Apoyo Voluntario',
      description:
        'Súmate a la difusión comunitaria. Compartir el proyecto, aportar sugerencias constructivas en Discord y seguir las redes es el motor que da visibilidad al juego.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Plataforma de Donaciones (Próximamente)',
      description:
        'Estamos preparando canales seguros y transparentes (como Patreon o Ko-fi) para quienes deseen respaldar los costos de producción y licencias de software.',
      icon: 'Coins',
    },
    {
      title: 'Futuras Formas de Colaboración',
      description:
        'Abriremos convocatorias para pruebas cerradas (playtesting alfa/beta), traducción comunitaria y aportes creativos guiados.',
      icon: 'Users',
    },
    {
      title: 'Recompensas para Colaboradores (En Planificación)',
      description:
        'Cuando se active la campaña oficial de patrocinio, se incluirán accesos anticipados, créditos en el juego, libro de arte digital y menciones conmemorativas sin prometer beneficios ficticios.',
      icon: 'Award',
    },
  ],
  disclaimer:
    'Aviso de integridad: Actualmente no se solicitan datos bancarios ni cobros directos en este portal. La integración con pasarelas de mecenazgo seguras y verificadas se anunciará exclusivamente a través de los canales oficiales.',
};

export const STUDIO_VISION = {
  name: 'Throne of Eternity Development Team',
  status: 'Estudio Independiente en Fase de Crecimiento',
  description:
    'Nuestra visión es forjar experiencias de rol donde las consecuencias narrativas tengan peso real y los mundos posean una riqueza antropológica tangible.',
  futureRoadmap: [
    'Ampliación del equipo central de desarrollo en Unreal Engine 5.',
    'Lanzamiento del portal corporativo del estudio y bolsa de empleo.',
    'Apertura del kit de prensa oficial con recursos descargables en alta definición.',
    'Exploración de proyectos complementarios en el universo narrativo de Elyndor.',
  ],
};
