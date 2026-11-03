export interface TimelineEra {
  id: string;
  number: string;
  period: string;
  title: string;
  summary: string;
  fullDescription: string;
  keyEvents: string[];
  rune: string;
}

export const WORLD_OVERVIEW = {
  name: 'ELYNDOR',
  tagline: 'THE WORLD WILL REMEMBER YOUR CHOICES.',
  heroIntro:
    'Un mundo forjado por fuerzas primordiales. Civilizaciones separadas por guerras, antiguas alianzas y secretos olvidados. Cinco mil años después de la Ruptura, Elyndor se encuentra ante un nuevo destino.',
  worldHistoryIntro:
    'Elyndor es un mundo donde las antiguas civilizaciones construyeron imperios, los dioses dejaron su influencia y una decisión cambió para siempre el destino de la existencia.',
  engine: 'Unreal Engine 5.8.4',
  genre: 'RPG de fantasía oscura · Mundo abierto · Decisiones narrativas',
};

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: 'origen',
    number: '01',
    period: 'Era Primordial',
    title: 'El Origen',
    summary: 'Las fuerzas primordiales dieron forma al mundo.',
    fullDescription:
      'En los albores de la creación, energías cósmicas sin templar colisionaron sobre el vacío, dando nacimiento a Elyndor. Los titanes y esencias elementales trazaron las cordilleras, los abismos marinos y los valles fecundos. De esta matriz primigenia emanaron las corrientes de magia pura que aún hoy palpitan en las profundidades de la tierra.',
    keyEvents: [
      'Colisión de las Esencias Primordiales y asentamiento de la corteza continental.',
      'Surgimiento de los primeros conductos telúricos de energía mágica.',
      'Dormición de los Titanes y nacimiento de los primeros ecos del destino.',
    ],
    rune: 'ᚠ',
  },
  {
    id: 'civilizaciones',
    number: '02',
    period: 'Era de la Expansión',
    title: 'La Edad de las Civilizaciones',
    summary: 'Las seis razas construyeron sociedades y desarrollaron sus conocimientos.',
    fullDescription:
      'Durante milenios de florecimiento, los Humanos, Eldarios, Dhorim, Varkhûn, Nhexari y Zhurak colonizaron valles, picos inaccesibles y ciudadelas subterráneas. Se levantaron bibliotecas arcanas, forjas colosales y redes de comercio entre continentes. La sabiduría floreció en conjunción con el dominio de la forja, las artes y la magia elemental.',
    keyEvents: [
      'Fundación de las grandes capitales y las primeras dinastías soberanas.',
      'Evolución del conocimiento arcano y creación de los artefactos del equilibrio.',
      'Alianzas iniciales y demarcación de los reinos históricos.',
    ],
    rune: 'ᚦ',
  },
  {
    id: 'ruptura',
    number: '03',
    period: 'El Gran Cataclismo',
    title: 'La Ruptura',
    summary: 'Una decisión consciente para salvar o transformar el mundo produjo consecuencias irreversibles.',
    fullDescription:
      'No fue un accidente cósmico, sino una elección calculada llevada a cabo en el cenit de una crisis insostenible. Aquella decisión dividió el continente, alteró el flujo del tiempo en regiones enteras y fracturó la relación entre las razas y los dioses. Las consecuencias irreversibles sepultaron imperios enteros y dejaron una herida abierta en el tejido de Elyndor.',
    keyEvents: [
      'La Gran Elección de los Arcanos Mayores en el corazón de Elyndor.',
      'Fractura continental y hundimiento de los antiguos centros de mando.',
      'Pérdida de la memoria unificada y dispersión de las civilizaciones supervivientes.',
    ],
    rune: 'ᚲ',
  },
  {
    id: 'presente',
    number: '04',
    period: '5.000 Años Después',
    title: 'El Presente',
    summary: 'Cinco mil años después, las grandes potencias compiten por el futuro de Elyndor.',
    fullDescription:
      'El eco de la Ruptura aún resuena. Mientras las heridas del cataclismo se convierten en mitos, dos grandes bloques hegemónicos —la Concordia Mortal y el Dominio Abisal— entran en una pugna silenciosa por el control de los vestigios antiguos. En este escenario de tensiones latentes, cada alianza, cada espada y cada pacto determinará el rumbo de las eras venideras.',
    keyEvents: [
      'Aparición de anomalías arcanas en las fronteras de las Tierras del Alba.',
      'Polarización diplomática y militar entre la Concordia y el Dominio.',
      'El despertar de secretos que pondrán a prueba la voluntad de cada mortal.',
    ],
    rune: 'ᛟ',
  },
];
