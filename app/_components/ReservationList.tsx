"use client";
import { useOptimistic } from "react";
import { deleteReservation } from "../_lib/actions";
import { Booking } from "../_types";
import ReservationCard from "./ReservationCard";

type ReservationListProps = {
  bookings: Booking[];
};
export default function ReservationList({ bookings }: ReservationListProps) {
  const [optBookings, deleteOptBooking] = useOptimistic(
    bookings,
    (currentBookings, bookingId) => {
      return currentBookings.filter((b) => b.id !== bookingId);
    },
  );
  async function handleDelete(bookingId: number) {
    deleteOptBooking(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}
