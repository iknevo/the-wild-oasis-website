export interface Guest {}
export interface CabinItem {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description?: string;
  created_at?: string;
}
export type Cabins = CabinItem[];
export interface Settings {
  id: number;
  breakFastPrice: number;
  maxBookingLength: number;
  minBookingLength: number;
  maxGuestsPerBooking: number;
}
export interface Range {
  from: Date;
  to: Date;
}
