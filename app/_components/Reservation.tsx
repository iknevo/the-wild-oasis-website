import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { CabinItem, Settings } from "@/app/_types";
import { Session } from "next-auth";
import { auth } from "../_lib/auth";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

interface Props {
  cabin: CabinItem;
}
export default async function Reservation({ cabin }: Props) {
  const [settings, bookedDates]: [Settings, Date[]] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session: Session = (await auth())!;
  return (
    <div className="border-primary-800 grid min-h-[400px] grid-cols-2 border">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />

      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
