import { DevlogPost } from '../types';

export const DEVLOGS_DATA: DevlogPost[] = [
  {
    id: 'devlog-001',
    number: '001',
    date: 'Próxima Publicación',
    title: 'The Birth of Elyndor',
    subtitle: 'La génesis conceptual y los primeros trazos de un mundo de fantasía oscura',
    description:
      'Un desglose detallado sobre los orígenes creativos del proyecto, la concepción del cataclismo de la Ruptura y la dirección artística que define el tono de Throne of Eternity.',
    fullOverview:
      'En esta primera entrega editorial exploraremos las motivaciones fundamentales que impulsaron la creación de Elyndor. Desde los primeros borradores de diseño narrativo hasta la selección de paletas y referencias cinematográficas, revelaremos cómo se estructuraron las fuerzas primordiales y por qué la catástrofe de la Ruptura no fue un cataclismo ciego, sino el resultado de una decisión consciente que moldeará todas las mecánicas de rol y elección del jugador.',
    topics: ['Dirección Creativa', 'Lore Primordial', 'Filosofía de Decisiones', 'Diseño de Arte Inicial'],
    status: 'Próximamente',
    imagePlaceholder: '/assets/01_Hero_Inicio/hero-principal-throne-of-eternity.png',
  },
  {
    id: 'devlog-002',
    number: '002',
    date: 'Próxima Publicación',
    title: 'Building the World',
    subtitle: 'Escala geográfica, arquitectura en Unreal Engine 5 y generación de entornos',
    description:
      'Cómo estamos construyendo las siete regiones de Elyndor en Unreal Engine 5.8.4 utilizando World Partition, iluminación con Lumen y diseño topográfico inmersivo.',
    fullOverview:
      'Un vistazo a la pipeline técnica de construcción de escenarios. Analizaremos cómo se diseñó la transición desde las doradas colinas de las Tierras del Alba hasta los riscos escarpados de la Cordillera de los Colosos y las arenas fracturadas de las Tierras Quebradas. Explicaremos cómo la combinación de Nanite y Lumen permite esculpir horizontes continuos sin pantallas de carga intermedias.',
    topics: ['Unreal Engine 5.8.4', 'World Partition', 'Lumen & Atmósfera', 'Topografía de Regiones'],
    status: 'Próximamente',
    imagePlaceholder: '/assets/02_Mundo_Mapas/mapa-general-elyndor.png',
  },
  {
    id: 'devlog-003',
    number: '003',
    date: 'Próxima Publicación',
    title: 'The Six Races',
    subtitle: 'Anatomía, cultura, códigos de honor y pipeline de modelado 3D',
    description:
      'Profundización en las seis civilizaciones de Elyndor: desde los bocetos conceptuales y la referencia anatómica hasta el esculpido de armaduras y animaciones.',
    fullOverview:
      'Esta entrega se centrará en el diseño antropológico y visual de los Humanos, Eldarios, Dhorim, Varkhûn, Nhexari y Zhurak. Mostraremos cómo cada cultura plasma su filosofía en sus forjas, vestimentas y posturas de combate, y cómo el sistema de lealtades políticas interactúa con la libertad de elección del protagonista.',
    topics: ['Diseño Antropológico', 'Modelado de Personajes', 'Sistemas de Armadura', 'Lealtades de Facción'],
    status: 'Próximamente',
    imagePlaceholder: '/assets/03_Razas_Civilizaciones/referencia-visual-seis-razas.png',
  },
];
