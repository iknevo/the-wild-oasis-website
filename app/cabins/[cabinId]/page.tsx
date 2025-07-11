import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { CabinItem, Cabins } from "@/app/_types";
import { Suspense } from "react";

interface Props {
  params: Promise<{ cabinId: number }>;
}

export async function generateMetadata({ params }: Props) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins: Cabins = await getCabins();
  return cabins.map((cabin) => ({
    cabinId: String(cabin.id),
  }));
}

export default async function Page({ params }: Props) {
  const { cabinId } = await params;
  const cabin: CabinItem = await getCabin(cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-accent-400 mb-10 text-center text-5xl font-semibold">
          Reserve cabin {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
