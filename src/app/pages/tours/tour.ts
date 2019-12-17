export interface Tour {
  gallery: string[];
  lables: string[];
  name: string;
  start: Date;
  end: Date;
  size: number;
  fullPrice: number;
  discount: number;
  operator: string;
  mapPlace: string;
  itinerary: { heading: string, description: string }[];
  includedItems: { heading: string, description: string }[];
  excludedItems: { heading: string, description: string }[];
  placeToStay: string;
  reviews: {
    date: Date,
    name: string,
    rating: number,
    text: string
  };
  goodToKnow: { heading: string, description: string }[];
}
