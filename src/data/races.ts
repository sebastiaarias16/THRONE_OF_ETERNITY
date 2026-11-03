import { Race } from '../types';

export const CANONICAL_RACE_DISCLAIMER =
  'Aviso canónico: Las afinidades políticas predominantes reflejan tendencias históricas o tratados de los altos mandos, pero no determinan la lealtad individual de todos los integrantes de una raza. En Elyndor, cada individuo forja su propio camino y lealtades.';

export const RACES_DATA: Race[] = [
  {
    id: 'humanos',
    name: 'Humanos',
    pronunciation: 'Hu-ma-nos',
    title: 'Hijos del Alba y la Voluntad',
    coreTraits: ['Adaptación', 'Ambición', 'Unidad'],
    organization: 'Reinos, estados y asambleas dinásticas',
    historicalFaction: 'Concordia Mortal',
    factionAlignmentNote:
      'Históricamente alineados con la Concordia Mortal por su apego al orden civil, el comercio regulado y la diplomacia entre pueblos.',
    summary:
      'Flexibles y decididos, los humanos compensan su menor longevidad con una capacidad inigualable para adaptarse a cualquier entorno y erigir imperios donde otros solo ven desolación.',
    lore:
      'Tras la Ruptura, los asentamientos humanos fueron los primeros en organizarse en federaciones defensivas. Desde las fértiles llanuras de las Tierras del Alba hasta los torreones de Valtheris, su capacidad para movilizar ejércitos, legislar y asimilar tecnologías arcanas los sitúa en el centro neurálgico de las decisiones políticas del continente.',
    culture:
      'Su cultura gira en torno al legado dinástico, la fe en las virtudes mortales y el respeto por los pactos firmados. Construyen catedrales de piedra sólida y fortalezas con murallas concéntricas. La heráldica y el honor familiar definen la posición social de sus caballeros y magistrados.',
    anatomy:
      'De estatura media y gran versatilidad física. Su fisiología carece de la resistencia biológica sobrehumana de los Zhurak o la afición mágica innata de los Eldarios, pero su sistema nervioso y capacidad de recuperación les otorgan una tenacidad asombrosa bajo presión extrema.',
    combatStyle:
      'Estrategia combinada: líneas cerradas de infantería con escudos pesados, caballería de choque, arqueros de tiro tenso y apoyo táctico de magos de batalla colegiados.',
    iconName: 'Crown',
    accentColor: '#C6A15B',
  },
  {
    id: 'eldarios',
    name: 'Eldarios',
    pronunciation: 'El-da-ri-os',
    title: 'Custodios del Primer Saber',
    coreTraits: ['Armonía', 'Sabiduría', 'Equilibrio'],
    organization: 'Casas ancestrales y consejos de sabios',
    historicalFaction: 'Concordia Mortal',
    factionAlignmentNote:
      'Pilar fundacional de la Concordia Mortal; consideran que la magia desregulada fue la causa última de la Ruptura y debe ser contenida mediante acuerdos.',
    summary:
      'Seres de longevidad milenaria y profunda comunión con las energías elementales primigenias. Poseen una memoria histórica viva de los tiempos anteriores a la Ruptura.',
    lore:
      'Los Eldarios recuerdan el mundo antes de que el cielo se desgarrara. Sus bibliotecas en las copas de los árboles milenarios custodian tratados arcanos que ningún mortal reciente ha logrado descifrar. Aunque su número ha menguado tras siglos de retiro deliberado, su voz en el consejo continental sigue teniendo peso supremo.',
    culture:
      'Su sociedad prioriza la meditación, la astronomía y el arte refinado. Todo artefacto eldar está imbuido de una estética fluida y orgánica, en la que la madera, el cristal celeste y la plata lunar se entrelazan sin requerir clavos ni junturas toscas.',
    anatomy:
      'Esbeltos, gráciles y de extremidades largas. Sus ojos reflejan luminiscencias acordes con su sintonía elemental y poseen sentidos perceptivos sumamente agudos, capaces de detectar fluctuaciones térmicas y corrientes mágicas a gran distancia.',
    combatStyle:
      'Combate de precisión y prestidigitación: duelistas con espadas de filo curvo, arqueros de bosque con saetas imbuidas en esencias elementales y tejedores de barreras arcanas.',
    iconName: 'Sparkles',
    accentColor: '#7041B5',
  },
  {
    id: 'dhorim',
    name: 'Dhorim',
    pronunciation: 'Dho-rim',
    title: 'Señores del Metal y la Piedra',
    coreTraits: ['Ingenio', 'Trabajo', 'Constancia'],
    organization: 'Gremios mineros, cofradías de forja y sindicatos subterráneos',
    historicalFaction: 'Concordia Mortal',
    factionAlignmentNote:
      'Prefieren la estabilidad comercial y la certidumbre de leyes comunes que ofrece la Concordia Mortal para garantizar el flujo de sus manufacturas y minerales.',
    summary:
      'Artesanos colosales e inventores pragmáticos que han transformado las entrañas de las montañas en prodigios de ingeniería hidroeléctrica, hornos de fusión y bóvedas inexpugnables.',
    lore:
      'Cuando la Ruptura derribó las torres de la superficie, las ciudadelas subterráneas de los Dhorim resistieron el embate sísmico gracias a sus técnicas de sismología arquitectónica. Desde entonces, sus talleres abastecen de armamento, blindaje e instrumentos de precisión a la mayor parte de Elyndor.',
    culture:
      'El estatus de un Dhorim se mide por la durabilidad de sus obras y la honradez de su palabra en un trato gremial. Rechazan la ostentación efímera y reverencian el núcleo térmico del mundo. Sus celebraciones consisten en torneos de forja, banquetes abundantes y cantos polifónicos en cavernas resonantes.',
    anatomy:
      'Complexión robusta, baja estatura con centros de gravedad muy firmes y densidad ósea excepcional. Su piel tolera temperaturas extremas y sus pulmones cuentan con filtración biológica avanzada adaptada al aire cargado de las galerías profundas.',
    combatStyle:
      'Guerra de desgaste e ingeniería: martillos pesados a dos manos, ballestas de repetición mecánicas, zapadores con cargas pirotécnicas y corazas de aleaciones templadas.',
    iconName: 'Hammer',
    accentColor: '#E8C982',
  },
  {
    id: 'varkhun',
    name: 'Varkhûn',
    pronunciation: 'Var-khûn',
    title: 'La Legión de Hierro y Voluntad',
    coreTraits: ['Disciplina', 'Poder', 'Deber'],
    organization: 'Estructuras militares, legiones y jerarquías de mando',
    historicalFaction: 'Dominio Abisal',
    factionAlignmentNote:
      'Eje central del Dominio Abisal; desconfían de la retórica diplomática y sostienen que solo la preparación marcial y el poder demostrado garantizan la supervivencia frente a las amenazas de Elyndor.',
    summary:
      'Guerreros imperturbables guiados por un estricto código marcial. Para un Varkhûn, el deber hacia el estandarte y la autosuficiencia estratégica superan cualquier compromiso retórico.',
    lore:
      'Forjados en las mesetas escarpadas y las fronteras más hostiles del continente, los Varkhûn sobrevivieron a la Ruptura gracias a una disciplina marcial implacable que no dejó margen al desorden. Conciben el mundo no como un jardín pacífico, sino como un campo de pruebas donde solo los resueltos prevalecen.',
    culture:
      'Todo ciudadano Varkhûn forma parte de la jerarquía de las legiones desde su juventud. Sus ciudades son bastiones simétricos de piedra oscura y hierro forjado. No toleran el engaño político y valoran el mérito directo por encima de títulos hereditarios vacíos.',
    anatomy:
      'Constitución atlética imponente, hombros anchos y piel curtida por la intemperie. Sus reflejos musculares son veloces y poseen una tolerancia al dolor físico cultivada mediante entrenamiento sistemático y adaptaciones regenerativas.',
    combatStyle:
      'Falanges disciplinadas, alabardas pesadas, escudos de torre acoplables y tácticas envolventes que combinan infantería acorazada con unidades de ruptura rápida.',
    iconName: 'Shield',
    accentColor: '#8C929B',
  },
  {
    id: 'nhexari',
    name: 'Nhexari',
    pronunciation: 'Nhe-xa-ri',
    title: 'Herederos de la Penumbra y el Secreto',
    coreTraits: ['Sigilo', 'Adaptación', 'Supervivencia'],
    organization: 'Casas de poder, círculos velados y cofradías de inteligencia',
    historicalFaction: 'Dominio Abisal',
    factionAlignmentNote:
      'Aliados estratégicos del Dominio Abisal por conveniencia mutua y rechazo tajante a las doctrinas de control universal que pretende imponer la Concordia.',
    summary:
      'Maestros de la información, el movimiento en las sombras y las artes arcanas prohibidas. Han aprendido a convertir la incertidumbre y el misterio en su mayor ventaja geopolítica.',
    lore:
      'Habitantes de las marismas brumosas y ciudades construidas entre los riscos donde la luz del sol apenas se filtra. Los Nhexari no luchan en batallas campales abiertas si pueden desactivar la amenaza antes de que la primera trompeta resuene.',
    culture:
      'Una sociedad refinada pero hermética, donde la etiqueta cortesana oculta complejas intrigas de espionaje. Valoran la agilidad mental, el dominio de los venenos botánicos y la capacidad de descifrar las verdaderas intenciones de sus interlocutores.',
    anatomy:
      'Fisonomía flexible, pasos silenciosos y pigmentaciones epidérmicas que se camuflan con facilidad en entornos de baja luminosidad. Ojos adaptados a la visión nocturna con pupilas reactivas a estímulos mágicos.',
    combatStyle:
      'Guerra asimétrica: dagas envenenadas, filos duales flexibles, trampas de dispersión, proyectiles silenciados y magia umbría de distorsión sensorial.',
    iconName: 'Eye',
    accentColor: '#7041B5',
  },
  {
    id: 'zhurak',
    name: 'Zhurak',
    pronunciation: 'Zhu-rak',
    title: 'Garras de la Tierra Quebrada',
    coreTraits: ['Lealtad', 'Fuerza', 'Resistencia'],
    organization: 'Clanes independientes confederados por asambleas de caciques',
    historicalFaction: 'Dominio Abisal',
    factionAlignmentNote:
      'Asociados al Dominio Abisal por respeto a su código de fuerza y dignidad soberana, rechazando la subordinación a tribunales de tierras lejanas.',
    summary:
      'Seres de una fortaleza titánica y lealtad inquebrantable a su linaje. Viven en armonía feroz con las tierras más indómitas y los depredadores más temibles de Elyndor.',
    lore:
      'Los Zhurak se establecieron en las regiones fracturadas durante la Ruptura, donde la tierra aún tiembla y los vientos son violentos. Han domado bestias primigenias y aprendido a subsistir en un medio que aniquilaría a cualquier expedición no preparada.',
    culture:
      'Su código de honor se basa en el juramento de sangre y la protección incondicional de los débiles de su clan. Transmiten su historia mediante cánticos orales y cicatrices rituales que conmemoran victorias sobre colosos de la naturaleza.',
    anatomy:
      'Gran envergadura muscular, piel densa y resistente a los impactos contundentes, mandíbulas pronunciadas y un sistema cardiovascular capacitado para explosiones de fuerza descomunales en lapsos prolongados.',
    combatStyle:
      'Fuerza bruta de choque: hachas dobles pesadas, mazas de meteorito, agarres de combate cuerpo a cuerpo y monturas de bestias acorazadas.',
    iconName: 'Flame',
    accentColor: '#C6A15B',
  },
];
