import { useContext } from "react";
import { ReservationContext } from "./ReservationContext";

export default function useReservation() {
  const ctx = useContext(ReservationContext);
  if (ctx === undefined)
    throw new Error(
      "ReservationContext can't be used outside ReservationContext Provider!",
    );
  return ctx;
}
