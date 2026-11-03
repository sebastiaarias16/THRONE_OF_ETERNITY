import { Region } from '../types';

export const STARTING_REGION_SPOTLIGHT = {
  id: 'tierras-del-alba',
  name: 'Tierras del Alba',
  romanNumeral: 'I',
  title: 'Región Inicial — Cuna del Nuevo Destino',
  regionalMapImage: '/assets/02_Mundo_Mapas/mapa-tierras-del-alba-nareth.png',
  regionalMapCaption:
    'Mapa cartográfico oficial de Tierras del Alba y el asentamiento de Nareth (Arte conceptual de desarrollo)',
  summary:
    'Zona de inicio donde los jugadores darán sus primeros pasos en Elyndor. Una tierra de colinas doradas, ruinas cubiertas de hiedra y un tenso equilibrio entre la vida cotidiana de sus aldeas y los misterios arcanos que acechan en sus fronteras.',
  keyLocations: [
    {
      name: 'Nareth',
      type: 'Pueblo inicial y encrucijada comercial',
      description:
        'Asentamiento histórico de casas de madera y piedra caliza con una plaza central protegida por una pequeña empalizada. Es el punto de llegada donde se reúnen viajeros, comerciantes y exploradores.',
      significance: 'Punto de partida del jugador, tabernas, forjas básicas y primeros contratos de gremio.',
    },
    {
      name: 'Veldar',
      type: 'Tierras altas y bastión agrícola',
      description:
        'Comarca de campos de cultivo dorados y colinas suaves salpicadas de molinos y atalayas de guardia. Abastece a gran parte de la provincia.',
      significance: 'Zona de misiones iniciales de investigación, recursos de recolección y avistamiento de anomalías.',
    },
    {
      name: 'Torre del Alba',
      type: 'Monumento de vigilancia arcana',
      description:
        'Una aguja de piedra blanca que data de antes de la Ruptura. Su cúspide todavía emite destellos al atardecer, advirtiendo sobre perturbaciones en el horizonte.',
      significance: 'Punto de vista panorámico, sincronización cartográfica y revelación de secretos arcanos antiguos.',
    },
    {
      name: 'Puente de Ceniza',
      type: 'Paso estratégico fluvial',
      description:
        'Un puente monumental de piedra volcánica que cruza el río caudaloso que delimita las Tierras del Alba con los territorios más peligrosos del interior.',
      significance: 'Frontera natural resguardada, escena de escaramuzas históricas y acceso a regiones de mayor nivel.',
    },
  ],
};

export const REGIONS_DATA: Region[] = [
  {
    id: 'tierras-del-alba',
    romanNumeral: 'I',
    name: 'Tierras del Alba',
    shortDescription:
      'Colinas doradas, campos fértiles y ciudadelas que despiertan tras el letargo de la Ruptura. La cuna del viaje.',
    lore:
      'Las Tierras del Alba fueron el refugio de las civilizaciones sobrevivientes tras la catástrofe primordial. Hoy en día, sus verdes praderas y caminos transitados disimulan las criptas olvidadas y los artefactos milenarios que yacen bajo sus cimientos.',
    biome: 'Valles templados, llanuras fluviales y bosques de ribera',
    recommendedLevel: 'Nivel 1 - 15 (Región Inicial)',
    threatLevel: 'Bajo',
    isStartingRegion: true,
    image: '/assets/02_Mundo_Mapas/mapa-tierras-del-alba-nareth.png',
    pointsOfInterest: ['Pueblo de Nareth', 'Tierras de Veldar', 'Torre del Alba', 'Puente de Ceniza'],
    keyLocations: STARTING_REGION_SPOTLIGHT.keyLocations,
  },
  {
    id: 'bosque-de-los-antiguos',
    romanNumeral: 'II',
    name: 'Bosque de los Antiguos',
    shortDescription:
      'Espesuras arcanas de árboles colosales donde la luz solar rara vez roza el suelo y la flora late con magia viva.',
    lore:
      'Territorio ancestral de comunión eldarica. Sus senderos cambian según las fases de las lunas de Elyndor, y aquellos que se adentran sin respetar las leyes del bosque corren el riesgo de vagar eternamente en bucles temporales.',
    biome: 'Selva templada densa, claros luminiscentes y ciénagas de rocío mágico',
    recommendedLevel: 'Nivel 15 - 25',
    threatLevel: 'Moderado',
    image: '/assets/01_Hero_Inicio/hero-alternativo-throne-of-eternity.png',
    pointsOfInterest: ['El Gran Tejo de Silencio', 'Santuario de las Tres Lunas', 'Cavernas de Fúngica Celeste'],
  },
  {
    id: 'reino-de-valtheris',
    romanNumeral: 'III',
    name: 'Reino de Valtheris',
    shortDescription:
      'El epicentro del poder feudal y la diplomacia cortesana. Imponentes murallas de granito y torres señoriales.',
    lore:
      'Asiento del mayor gobierno humano y bastión de la Concordia Mortal. Bajo los salones de mármol y los estandartes dorados se libran batallas de espionaje, conspiraciones de sucesión y alianzas mercantiles decisivas para el continente.',
    biome: 'Mesetas fortificadas, ciudades amuralladas y cañones fluviales navegables',
    recommendedLevel: 'Nivel 25 - 35',
    threatLevel: 'Moderado',
    image: '/assets/01_Hero_Inicio/hero-principal-throne-of-eternity.png',
    pointsOfInterest: ['Ciudadela de Valtheris', 'Archivos de la Corona', 'Baluarte de los Mil Estandartes'],
  },
  {
    id: 'cordillera-de-los-colosos',
    romanNumeral: 'IV',
    name: 'Cordillera de los Colosos',
    shortDescription:
      'Picos nevados que arañan el firmamento, vientos gélidos implacables y forjas subterráneas que nunca se apagan.',
    lore:
      'Hogar de los gremios Dhorim y antiguos titanes dormidos. Las galerías de la montaña albergan complejos industriales subterráneos impulsados por vapor geotérmico y puentes colgantes suspendidos sobre precipicios insondables.',
    biome: 'Tundra alpina, ventisqueros eternos y redes de cavernas volcánicas',
    recommendedLevel: 'Nivel 35 - 45',
    threatLevel: 'Peligroso',
    image: '/assets/02_Mundo_Mapas/mapa-general-elyndor.png',
    pointsOfInterest: ['Forja Magna de Kar-Dhor', 'Paso del Viento Aullante', 'Glaciar de las Lágrimas Blancas'],
  },
  {
    id: 'marismas-del-velo',
    romanNumeral: 'V',
    name: 'Marismas del Velo',
    shortDescription:
      'Humedales envueltos en nieblas perpetuas, ruinas sumergidas y asentamientos velados de los Nhexari.',
    lore:
      'El aire en el Velo es espeso y engañoso; las ilusiones sensoriales son frecuentes y los canales de agua oscura ocultan criaturas adaptadas a la oscuridad. Pocas expediciones cartográficas han regresado completas de este laberinto brumoso.',
    biome: 'Pantanos de aguas profundas, manglares necróticos y ciénagas con gas metano',
    recommendedLevel: 'Nivel 45 - 55',
    threatLevel: 'Peligroso',
    image: '/assets/03_Razas_Civilizaciones/referencia-visual-seis-razas.png',
    pointsOfInterest: ['Criptas de Cenagosa', 'El Mercado de los Secretos', 'Atolón Hundido de Nhex'],
  },
  {
    id: 'tierras-quebradas',
    romanNumeral: 'VI',
    name: 'Tierras Quebradas',
    shortDescription:
      'Fallas geológicas colosales, géiseres de energía residual y campamentos de guerra de los clanes Zhurak.',
    lore:
      'La zona de mayor impacto directo durante la Ruptura. El suelo se encuentra partido en terrazas tectónicas móviles y de sus hendiduras brota un vapor cargado de esencias mágicas inestables que atrae a bestias alteradas genéticamente.',
    biome: 'Cañones basálticos, páramos áridos fracturados y respiraderos geotérmicos',
    recommendedLevel: 'Nivel 55 - 65',
    threatLevel: 'Extremo',
    image: '/assets/03_Razas_Civilizaciones/referencia-modelado-razas-civilizaciones.png',
    pointsOfInterest: ['La Gran Fisura del Mundo', 'Asamblea de Sangre de Zhurak', 'Valle de los Huesos Petrificados'],
  },
  {
    id: 'dominio-prohibido',
    romanNumeral: 'VII',
    name: 'Dominio Prohibido',
    shortDescription:
      'Territorio vedado de aberraciones arcanas, cielos rasgados por tormentas perpetuas y el enigma del Trono.',
    lore:
      'El punto focal donde se ejecutó la Ruptura hace cinco milenios. Las leyes de la física y la magia operan con irregularidad. Custodiado por autómatas titánicos y entidades que escapan a la comprensión mortal, solo los más preparados se atreven a buscar su epicentro.',
    biome: 'Páramo de obsidiana, anomalías de gravedad cero y vórtices arcanos púrpuras',
    recommendedLevel: 'Nivel 65+ (Endgame / Zona Máxima)',
    threatLevel: 'Letal',
    image: '/assets/01_Hero_Inicio/hero-principal-throne-of-eternity.png',
    pointsOfInterest: ['El Vórtice del Éter', 'La Aguja del Trono Silente', 'Ruinas de la Primera Ciudad'],
  },
];
