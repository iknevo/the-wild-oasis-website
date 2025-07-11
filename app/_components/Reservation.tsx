import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { CabinItem, Settings } from "@/app/_types";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

interface Props {
  cabin: CabinItem;
}
export default async function Reservation({ cabin }: Props) {
  const [settings, bookedDates]: [Settings, Date[]] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  return (
    <div className="border-primary-800 grid min-h-[400px] grid-cols-2 border">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
}
