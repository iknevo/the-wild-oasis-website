import { Cabins } from "@/app/_types";
import { connection } from "next/server";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinsList() {
  await connection();
  const cabins: Cabins = await getCabins();
  return (
    cabins.length > 0 && (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {cabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    )
  );
}
