export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface Properties {
  icao24: string;
  callsign: string;
  origin_country: string;
  time_position: number;
  last_contact: number;
  longitude: number;
  latitude: number;
  baro_altitude?: number;
  on_ground: boolean;
  velocity: number;
  true_track: number;
  vertical_rate?: number;
  sensors?: any;
  geo_altitude?: number;
  squawk: string;
  spi: boolean;
  position_source: number;
}

export interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  properties: Properties;
}

export interface States {
  type: string;
  features: Feature[];
}
