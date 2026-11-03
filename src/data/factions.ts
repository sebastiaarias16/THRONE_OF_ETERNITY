import { Faction } from '../types';

export const FACTION_NEUTRALITY_NOTE =
  'En Throne of Eternity ninguna facción representa el bien o el mal absoluto. Ambas facciones encarnan filosofías legítimas de supervivencia, gobernanza y destino frente a la fragilidad del mundo mortal.';

export const FACTIONS_DATA: Faction[] = [
  {
    id: 'concordia-mortal',
    name: 'Concordia Mortal',
    tagline: 'La Alianza del Orden Institucional y la Salvaguarda',
    principles: ['ORDEN', 'EQUILIBRIO', 'UNIDAD'],
    philosophy:
      'Una alianza política que considera necesaria la cooperación institucional y la regulación estricta de las fuerzas capaces de alterar el mundo.',
    vision:
      'La Concordia defiende que la Ruptura ocurrió debido al exceso de ambición individual y la falta de supervisión sobre energías mágicas desmedidas. Para prevenir un segundo cataclismo, propone un concilio unificado con códigos legales compartidos, inspección de artefactos arcanos y diplomacia preventiva.',
    structure:
      'Cámara alta de delegados regios, consejo supremo de arcanistas eldaricos y asamblea mercantil gremial dhorim.',
    associatedRaces: ['Humanos', 'Eldarios', 'Dhorim'],
    emblemColor: '#C6A15B',
    accentColor: '#E8C982',
    historicalContext:
      'Fundada formalmente en los siglos posteriores a la Ruptura, ha preservado los tratados de no agresión y ha financiado la reconstrucción de las redes de comunicación entre provincias.',
    bannerQuote:
      '«Sin límites concertados, la libertad del poderoso es la ruina del vulnerable. Solo la unión consiente el porvenir.»',
  },
  {
    id: 'dominio-abisal',
    name: 'Dominio Abisal',
    tagline: 'El Bloque de la Autonomía Estratégica y la Determinación',
    principles: ['PODER', 'CONQUISTA', 'EVOLUCIÓN'],
    philosophy:
      'Una potencia que defiende su autonomía estratégica y cuestiona la concentración del poder en manos de una sola autoridad centralizada.',
    vision:
      'El Dominio sostiene que los concilios de la Concordia son lentos, hipócritas y buscan perpetuar la hegemonía de dinastías desgastadas. Afirman que en un mundo herido como Elyndor, la paz no se mendiga con decretos de papel, sino que se conquista a través de la fortaleza marcial, la adaptabilidad y el dominio de todas las fuerzas disponibles.',
    structure:
      'Comando supremo militar varkhûn, consejos velados nhexari y asamblea confederada de caudillos zhurak.',
    associatedRaces: ['Varkhûn', 'Nhexari', 'Zhurak'],
    emblemColor: '#7041B5',
    accentColor: '#9353e8',
    historicalContext:
      'Surgido como respuesta a los embargos y presiones jurisdiccionales del concilio, consolidó a los pueblos de fronteras hostiles en una coalición infranqueable.',
    bannerQuote:
      '«Ninguna corona ajena dictará los términos de nuestra supervivencia. La fuerza es la única verdad que el tiempo no erosiona.»',
  },
];
