import {TAGS} from '../blog/tags';

export interface Tour {
  id: number;
  gallery: string[];
  lables: string[];
  tags: TAGS[];
  name: string;
  start: Date;
  end: Date;
  size: number;
  fullPrice: number;
  discount: number;
  operator: string;
  mapPlace: { lat: number, lon: number }[];
  places: { name: string, image: string }[];
  itinerary: { icon: string, heading: string, description: string, className: string }[];
  includedItems: { heading: string, description: string, icon: string }[];
  placeToStay: string;
  reviews: {
    date: Date,
    name: string,
    rating: null[],
    text: string
  }[];
  goodToKnow: { heading: string, description: string }[];
}
