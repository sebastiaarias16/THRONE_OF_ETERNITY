export interface Race {
  id: string;
  name: string;
  pronunciation?: string;
  title: string;
  coreTraits: string[];
  organization: string;
  historicalFaction: 'Concordia Mortal' | 'Dominio Abisal';
  factionAlignmentNote: string;
  summary: string;
  lore: string;
  culture: string;
  anatomy: string;
  combatStyle: string;
  iconName: string;
  accentColor: string;
  bannerImage?: string;
}

export interface RegionLocation {
  name: string;
  type: string;
  description: string;
  significance: string;
}

export interface Region {
  id: string;
  romanNumeral: string;
  name: string;
  shortDescription: string;
  lore: string;
  biome: string;
  recommendedLevel: string;
  threatLevel: 'Bajo' | 'Moderado' | 'Peligroso' | 'Extremo' | 'Letal';
  isStartingRegion?: boolean;
  image: string;
  keyLocations?: RegionLocation[];
  pointsOfInterest?: string[];
}

export interface Faction {
  id: 'concordia-mortal' | 'dominio-abisal';
  name: string;
  tagline: string;
  principles: string[];
  philosophy: string;
  vision: string;
  structure: string;
  associatedRaces: string[];
  emblemColor: string;
  accentColor: string;
  historicalContext: string;
  bannerQuote: string;
}

export interface DevlogPost {
  id: string;
  number: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  topics: string[];
  status: 'Próximamente' | 'En Redacción' | 'Publicado';
  imagePlaceholder: string;
}

export interface GameDevCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
  unrealEngineFeature: string;
}

export interface SocialLink {
  platform: string;
  name: string;
  url: string;
  handle: string;
  description: string;
  icon: string;
}
