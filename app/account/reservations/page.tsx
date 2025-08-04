import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import { getGuestIdOrThrow } from "@/app/_lib/helpers";
import { Booking } from "@/app/_types";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const guestId = getGuestIdOrThrow(session);
  const bookings: Booking[] = await getBookings(guestId);

  return (
    <div>
      <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <a className="text-accent-500 underline" href="/cabins">
            luxury cabins &rarr;
          </a>
        </p>
      ) : (
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
