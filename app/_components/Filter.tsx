"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";

export default function Filter() {
  const searchParams = useSearchParams()!;
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border-primary-800 border">
      <FilterButton
        filterValue="all"
        handleFilter={handleFilter}
        text="All Cabins"
      />
      <FilterButton
        filterValue="small"
        handleFilter={handleFilter}
        text="1&mdash;3 guests"
      />
      <FilterButton
        filterValue="medium"
        handleFilter={handleFilter}
        text="4&mdash;7 guests"
      />
      <FilterButton
        filterValue="large"
        handleFilter={handleFilter}
        text="8&mdash;12 guests"
      />
    </div>
  );
}
