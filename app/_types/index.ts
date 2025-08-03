export interface Guest {
  id: number;
  email: string;
  fullName: string;
  nationality: string;
  nationalID: string;
  countryFlag: string;
}
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
export interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    guestId: number | null;
  };
  expires?: string;
}

export type Booking = {
  id: number;
  guestId: number;
  cabinId: number;
  cabins: { image: string; name: string };
  created_at: string;
  startDate: string;
  endDate: string;
  numGuests: number;
  numNights: number;
  totalPrice: number;
};
