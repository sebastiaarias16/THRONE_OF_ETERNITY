import { GameDevCategory } from '../types';

export const ENGINE_INFO = {
  version: 'Unreal Engine 5.8.4',
  pillars: [
    {
      title: 'Nanite Geometry',
      description: 'Renderizado de geometría virtualizada con millones de polígonos por cuadro en tiempo real.',
    },
    {
      title: 'Lumen Global Illumination',
      description: 'Iluminación global difusa dinámica e interreflexiones para atmósferas de fantasía oscura realistas.',
    },
    {
      title: 'World Partitioning',
      description: 'Mundo abierto continuo sin pantallas de carga intermedias en las extensas tierras de Elyndor.',
    },
    {
      title: 'Motion Warping & Chaos',
      description: 'Físicas reactivas, colisiones y sincronización precisa de animaciones de combate visceral.',
    },
  ],
};

export const GAME_DEV_CATEGORIES: GameDevCategory[] = [
  {
    id: 'ue5-clips',
    title: 'Clips de Unreal Engine 5',
    icon: 'Video',
    description:
      'Pruebas técnicas de renderizado, shaders atmosféricos e iluminación dinámica en entornos de alta fidelidad.',
    details: [
      'Renderizado cinemático a 60 FPS en resolución nativa.',
      'Ciclos día/noche con nieblas volumétricas y partículas suspendidas.',
      'Integración de efectos meteorológicos arcanos procedurales.',
    ],
    unrealEngineFeature: 'Lumen & Niagara VFX',
  },
  {
    id: 'exploracion',
    title: 'Exploración del Mundo',
    icon: 'Compass',
    description:
      'Sistemas de navegación horizontal y vertical, escalada, monturas y descubrimiento dinámico de puntos de interés.',
    details: [
      'Topografía orgánica sin barreras artificiales invisibles.',
      'Detección ambiental de secretos mediante corrientes telúricas.',
      'Mundo abierto particionado de alta escala (World Partition).',
    ],
    unrealEngineFeature: 'World Partition & Landscape RVT',
  },
  {
    id: 'animaciones',
    title: 'Animaciones de Personaje',
    icon: 'Activity',
    description:
      'Captura de movimiento y animación procedural adaptada a terrenos irregulares y pendientes pronunciadas.',
    details: [
      'Control Rig adaptativo para pisada en rocas y escombros.',
      'Transiciones suaves entre postura de reposo, alerta y combate.',
      'Físicas de telas, capas y correajes mediante Chaos Cloth.',
    ],
    unrealEngineFeature: 'Control Rig & Chaos Cloth',
  },
  {
    id: 'combate',
    title: 'Sistema de Combate',
    icon: 'Swords',
    description:
      'Mecánicas de acción en tiempo real con peso táctico, bloqueos, contraataques y combos de magia arcana.',
    details: [
      'Hitboxes precisas y colisiones físicas basadas en huesos.',
      'Gestión de postura, equilibrio y desgaste de resistencia.',
      'Sinergias elementales entre hechizos y el entorno físico.',
    ],
    unrealEngineFeature: 'Gameplay Ability System (GAS)',
  },
  {
    id: 'modelado',
    title: 'Modelado de Personajes',
    icon: 'User',
    description:
      'Esculpido digital de alta definición para las seis razas, indumentarias por capas y equipamiento modular.',
    details: [
      'Modelado anatómico fundamentado en las guías de civilización oficiales.',
      'Microtexturizado de pieles, arrugas y cicatrices de guerra.',
      'Armaduras modulares con desgaste progresivo por impacto.',
    ],
    unrealEngineFeature: 'Nanite Meshes & Subsurface Scattering',
  },
  {
    id: 'criaturas',
    title: 'Criaturas y Monstruos',
    icon: 'Skull',
    description:
      'Bestiario autóctono de Elyndor, colosos corrompidos por la Ruptura y fauna silvestre con IA ecológica.',
    details: [
      'Ecosistemas con depredadores y presas reactivos a la presencia del jugador.',
      'Jefes de mundo de gran envergadura con fases anatómicas destructibles.',
      'Comportamientos de manada y flanqueo táctico.',
    ],
    unrealEngineFeature: 'Mass AI & State Trees',
  },
  {
    id: 'escenarios',
    title: 'Construcción de Escenarios',
    icon: 'Layers',
    description:
      'Diseño de niveles modular: ruinas colosales de civilizaciones extintas, templos olvidados y ciudades fortificadas.',
    details: [
      'Composición ambiental de arquitectura pre y post-Ruptura.',
      'Densidad de vegetación con simulaciones de viento en tiempo real.',
      'Iluminación de interiores mediante candelabros e interfaces de cristal arcano.',
    ],
    unrealEngineFeature: 'PCG (Procedural Content Generation)',
  },
  {
    id: 'sistemas',
    title: 'Desarrollo de Sistemas',
    icon: 'Cpu',
    description:
      'Arquitectura de guardado de decisiones, árbol de ramificación de misiones, economía y reactividad del mundo.',
    details: [
      'El sistema central "The World Will Remember Your Choices".',
      'Matriz de reputación dinámica con la Concordia y el Dominio.',
      'Simulación reactiva de eventos geopolíticos a gran escala.',
    ],
    unrealEngineFeature: 'Core C++ / UE Gameplay Framework',
  },
];
