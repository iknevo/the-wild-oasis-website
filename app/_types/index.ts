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
