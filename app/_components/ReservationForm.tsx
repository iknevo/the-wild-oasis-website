"use client";
import { CabinItem } from "@/app/_types";
import useReservation from "../_contexts/useReservation";
interface ReservationFormProps {
  cabin: CabinItem;
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}
function ReservationForm({ cabin, user }: ReservationFormProps) {
  const { range } = useReservation();
  const { maxCapacity } = cabin;

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 flex items-center justify-between px-16 py-2">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <p>{user?.name}</p>
          <img
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user?.image ?? "/default-user.jpg"}
            alt={user?.name ?? "User's profile image"}
          />
        </div>
      </div>

      <form className="bg-primary-900 flex flex-col gap-5 px-16 py-10 text-lg">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-primary-300 text-base">Start by selecting dates</p>

          <button className="bg-accent-500 text-primary-800 hover:bg-accent-600 px-8 py-4 font-semibold transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
