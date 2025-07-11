import { Cabins } from "@/app/_types";
import { connection } from "next/server";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
interface Props {
  filter: string | string[];
}
export default async function CabinsList({ filter }: Props) {
  await connection();
  const cabins: Cabins = await getCabins();
  let displayCabins = cabins;
  if (filter === "all") displayCabins = cabins;
  if (filter === "small") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  }
  if (filter === "medium") {
    displayCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  }
  if (filter === "large") {
    displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  }
  return (
    cabins.length > 0 && (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
        {displayCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    )
  );
}
