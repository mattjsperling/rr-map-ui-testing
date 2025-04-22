
export interface Home {
  id: string;
  imageUrl: string;
  images?: string[];
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  lat: number;
  lng: number;
  agent: string;
  isHot?: boolean;
  isForeclosure?: boolean;
  type?: string;
  sold?: boolean;
  forRent?: boolean;
}
