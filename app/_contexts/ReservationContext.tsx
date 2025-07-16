"use client";
import { createContext, ReactNode, useState } from "react";
import { DateRange } from "react-day-picker";

interface Props {
  children: ReactNode;
}

interface ReservationContextType {
  range: DateRange | undefined;
  setRange: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
  resetRange: () => void;
}

const initialState = { from: undefined, to: undefined };
const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined,
);

export default function ReservationProvider({ children }: Props) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);
  function resetRange() {
    setRange(initialState);
  }
  return (
    <ReservationContext value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext>
  );
}

export { ReservationContext, ReservationProvider };
