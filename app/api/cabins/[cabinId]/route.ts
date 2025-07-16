import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

interface Props {
  params: Promise<{ cabinId: number }>;
}
export async function GET(_, { params }: Props) {
  const { cabinId } = await params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates });
  } catch {
    return Response.json({ message: "Cabin not found!" });
  }
}
